import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  Optional,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[rtxScrollManager]',
})
export class ScrollManagerDirective implements OnDestroy {
  @Input('rtxScrollOptions')
  scrollIntoViewOptions!: Partial<ScrollIntoViewOptions>;

  readonly defaultOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  };
  scrollOptions!: ScrollIntoViewOptions;

  sections: Map<string | number, ScrollSectionDirective> = new Map<
    string | number,
    ScrollSectionDirective
  >();

  ngOnInit() {
    this.scrollOptions = {
      ...this.defaultOptions,
      ...this.scrollIntoViewOptions,
    };
  }

  register(anchor: ScrollSectionDirective) {
    this.sections.set(anchor.id, anchor);
  }

  scrollTo(id: string | number) {
    this.sections.get(id)?.scrollTo?.();
  }

  unregister(id: string | number) {
    this.sections.delete(id);
  }

  ngOnDestroy(): void {
    this.sections.clear();
  }
}

@Directive({
  selector: '[rtxScrollSection]',
})
export class ScrollSectionDirective implements OnChanges, OnDestroy {
  @Input('rtxScrollSection') id!: string | number;
  @Input('rtxScrollOptions')
  scrollIntoViewOptions!: Partial<ScrollIntoViewOptions>;

  constructor(
    private manager: ScrollManagerDirective,
    private host: ElementRef<HTMLElement>
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.manager.register(this);
    }
  }

  scrollTo() {
    this.host.nativeElement.scrollIntoView({
      ...this.manager.scrollOptions,
      ...this.scrollIntoViewOptions,
    });
  }

  ngOnDestroy(): void {
    this.manager.unregister(this.id);
  }
}

@Directive({
  selector: '[rtxScrollAnchor]',
})
export class ScrollAnchorDirective {
  @Input('rtxScrollAnchor') id!: string | number;

  constructor(private manager: ScrollManagerDirective) {}

  @HostListener('click')
  scrollTo() {
    this.manager.scrollTo(this.id);
  }
}

@Directive({
  selector: '[rtxScrollManager]',
})
export class ScrollToTopDirective {
  @Input('rxScrollToStart') target!: HTMLElement;
  @Input('rxScrollBehavior')
  scrollBehavior: ScrollIntoViewOptions['behavior'];

  constructor(@Optional() private manager: ScrollManagerDirective) {}

  @HostListener('click')
  scrollToTop() {
    this.target.scrollTo({
      top: 0,
      left: 0,
      behavior:
        this.scrollBehavior || this.manager?.scrollOptions.behavior || 'smooth',
    });
  }
}

@NgModule({
  declarations: [
    ScrollManagerDirective,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollToTopDirective,
  ],
  exports: [
    ScrollManagerDirective,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollToTopDirective,
  ],
})
export class ScrollManagerDirectiveModule {}
