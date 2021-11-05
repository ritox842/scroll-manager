import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { Component, ElementRef } from '@angular/core';
import {
  ScrollAnchorDirective,
  ScrollManagerDirective,
  ScrollManagerDirectiveModule,
  ScrollSectionDirective,
} from '@ritox/scroll-manager';

@Component({
  template: `
    <div>
      <main rtxScrollManager>
        <section class="vertical">
          <nav>
            <button rtxScrollAnchor="A-V">First Article</button>
            <button rtxScrollAnchor="B-V">Second Article</button>
            <button rtxScrollAnchor="C-V">Third Article</button>
            <button rtxScrollAnchor="D-V">Forth Article</button>
          </nav>

          <article rtxScrollSection="A-V">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            fringilla nibh. Nullam convallis, lectus non gravida finibus, purus
            ipsum semper turpis, vitae accumsan ante metus sit amet dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In accumsan neque hendrerit lorem porta, sed
            placerat sem viverra. Pellentesque feugiat ligula non consequat
            fringilla. Mauris et sapien euismod, porta libero eget, commodo
            nisl. Suspendisse tempus scelerisque lorem id suscipit. Vestibulum
            eleifend malesuada ligula, nec pulvinar lorem molestie non.
            Curabitur dictum maximus eros, vel suscipit ligula imperdiet sit
            amet. Sed porttitor volutpat ipsum eget pulvinar. Proin scelerisque
            feugiat libero a euismod. Nulla ut felis tellus. Aliquam ac massa eu
            dolor rhoncus suscipit eu eu orci. Etiam aliquam dui consequat
            tempor hendrerit. Cras feugiat eget lorem eget ultricies. Vivamus
            non massa non nunc pretium euismod at id diam. Integer dui tortor,
            faucibus sit amet euismod a, viverra ut tellus. Proin et maximus
            lectus, interdum porttitor leo. Vestibulum et condimentum arcu.
            Donec id tristique nunc, eget condimentum orci. Vestibulum nibh
            risus, interdum et purus a, vestibulum lacinia purus. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Cras egestas, felis vel efficitur malesuada, sem
            dolor tincidunt purus, in condimentum felis purus non quam. Morbi
            facilisis egestas hendrerit. Duis mattis libero eget orci lobortis
            bibendum. Curabitur ullamcorper, lacus et ullamcorper gravida,
            ligula metus pretium ante, ac egestas nulla nunc eu lectus. Donec id
            odio eget nisi vulputate eleifend vitae sit amet odio. Nam bibendum
            lectus ut nisl porttitor sagittis. Etiam porttitor aliquet tellus,
            ut dignissim nibh faucibus eu. Pellentesque vel ornare arcu.
            Phasellus vehicula nibh vel odio feugiat, id gravida odio volutpat.
            Morbi eget luctus mauris. Nullam ligula est, auctor id pretium
            fringilla, mattis vel lorem. Fusce consequat vehicula risus, dictum
            volutpat lacus tincidunt non. Vestibulum ornare congue diam, non
            finibus lorem mollis sit amet. Pellentesque accumsan tempor maximus.
            Pellentesque vitae dictum libero. Ut a erat a erat porttitor varius.
            Mauris tempus lacinia cursus. Sed quis dui nec enim euismod auctor
            vitae vitae lectus. In non neque id velit condimentum interdum.
            Fusce elementum nunc venenatis vestibulum pulvinar. Donec sed congue
            ex. Quisque dolor sapien, bibendum vestibulum arcu vel, suscipit
            sodales tellus. Nulla facilisi. Donec fringilla velit eget mauris
            venenatis, sed placerat purus pulvinar. Nam placerat est sed nunc
            tristique sagittis. Nullam id eleifend metus, ut dignissim sem.
            Nulla quis consectetur nunc. Phasellus condimentum, turpis et
            placerat consectetur, enim diam pretium risus, ut rhoncus nisi erat
            a ante. Nunc vel ornare dolor, et laoreet nulla. Donec ac venenatis
            eros. Quisque eu bibendum nulla. Suspendisse est metus, euismod sed
            libero ac, iaculis facilisis neque. Nunc fringilla magna sem, vitae
            pharetra nibh mollis a. Nullam id bibendum nunc, eu interdum libero.
          </article>

          <article rtxScrollSection="B-V">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            fringilla nibh. Nullam convallis, lectus non gravida finibus, purus
            ipsum semper turpis, vitae accumsan ante metus sit amet dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In accumsan neque hendrerit lorem porta, sed
            placerat sem viverra. Pellentesque feugiat ligula non consequat
            fringilla. Mauris et sapien euismod, porta libero eget, commodo
            nisl. Suspendisse tempus scelerisque lorem id suscipit. Vestibulum
            eleifend malesuada ligula, nec pulvinar lorem molestie non.
            Curabitur dictum maximus eros, vel suscipit ligula imperdiet sit
            amet. Sed porttitor volutpat ipsum eget pulvinar. Proin scelerisque
            feugiat libero a euismod. Nulla ut felis tellus. Aliquam ac massa eu
            dolor rhoncus suscipit eu eu orci. Etiam aliquam dui consequat
            tempor hendrerit. Cras feugiat eget lorem eget ultricies. Vivamus
            non massa non nunc pretium euismod at id diam. Integer dui tortor,
            faucibus sit amet euismod a, viverra ut tellus. Proin et maximus
            lectus, interdum porttitor leo. Vestibulum et condimentum arcu.
            Donec id tristique nunc, eget condimentum orci. Vestibulum nibh
            risus, interdum et purus a, vestibulum lacinia purus. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Cras egestas, felis vel efficitur malesuada, sem
            dolor tincidunt purus, in condimentum felis purus non quam. Morbi
            facilisis egestas hendrerit. Duis mattis libero eget orci lobortis
            bibendum. Curabitur ullamcorper, lacus et ullamcorper gravida,
            ligula metus pretium ante, ac egestas nulla nunc eu lectus. Donec id
            odio eget nisi vulputate eleifend vitae sit amet odio. Nam bibendum
            lectus ut nisl porttitor sagittis. Etiam porttitor aliquet tellus,
            ut dignissim nibh faucibus eu. Pellentesque vel ornare arcu.
            Phasellus vehicula nibh vel odio feugiat, id gravida odio volutpat.
            Morbi eget luctus mauris. Nullam ligula est, auctor id pretium
            fringilla, mattis vel lorem. Fusce consequat vehicula risus, dictum
            volutpat lacus tincidunt non. Vestibulum ornare congue diam, non
            finibus lorem mollis sit amet. Pellentesque accumsan tempor maximus.
            Pellentesque vitae dictum libero. Ut a erat a erat porttitor varius.
            Mauris tempus lacinia cursus. Sed quis dui nec enim euismod auctor
            vitae vitae lectus. In non neque id velit condimentum interdum.
            Fusce elementum nunc venenatis vestibulum pulvinar. Donec sed congue
            ex. Quisque dolor sapien, bibendum vestibulum arcu vel, suscipit
            sodales tellus. Nulla facilisi. Donec fringilla velit eget mauris
            venenatis, sed placerat purus pulvinar. Nam placerat est sed nunc
            tristique sagittis. Nullam id eleifend metus, ut dignissim sem.
            Nulla quis consectetur nunc. Phasellus condimentum, turpis et
            placerat consectetur, enim diam pretium risus, ut rhoncus nisi erat
            a ante. Nunc vel ornare dolor, et laoreet nulla. Donec ac venenatis
            eros. Quisque eu bibendum nulla. Suspendisse est metus, euismod sed
            libero ac, iaculis facilisis neque. Nunc fringilla magna sem, vitae
            pharetra nibh mollis a. Nullam id bibendum nunc, eu interdum libero.
          </article>

          <article rtxScrollSection="C-V">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            fringilla nibh. Nullam convallis, lectus non gravida finibus, purus
            ipsum semper turpis, vitae accumsan ante metus sit amet dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In accumsan neque hendrerit lorem porta, sed
            placerat sem viverra. Pellentesque feugiat ligula non consequat
            fringilla. Mauris et sapien euismod, porta libero eget, commodo
            nisl. Suspendisse tempus scelerisque lorem id suscipit. Vestibulum
            eleifend malesuada ligula, nec pulvinar lorem molestie non.
            Curabitur dictum maximus eros, vel suscipit ligula imperdiet sit
            amet. Sed porttitor volutpat ipsum eget pulvinar. Proin scelerisque
            feugiat libero a euismod. Nulla ut felis tellus. Aliquam ac massa eu
            dolor rhoncus suscipit eu eu orci. Etiam aliquam dui consequat
            tempor hendrerit. Cras feugiat eget lorem eget ultricies. Vivamus
            non massa non nunc pretium euismod at id diam. Integer dui tortor,
            faucibus sit amet euismod a, viverra ut tellus. Proin et maximus
            lectus, interdum porttitor leo. Vestibulum et condimentum arcu.
            Donec id tristique nunc, eget condimentum orci. Vestibulum nibh
            risus, interdum et purus a, vestibulum lacinia purus. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Cras egestas, felis vel efficitur malesuada, sem
            dolor tincidunt purus, in condimentum felis purus non quam. Morbi
            facilisis egestas hendrerit. Duis mattis libero eget orci lobortis
            bibendum. Curabitur ullamcorper, lacus et ullamcorper gravida,
            ligula metus pretium ante, ac egestas nulla nunc eu lectus. Donec id
            odio eget nisi vulputate eleifend vitae sit amet odio. Nam bibendum
            lectus ut nisl porttitor sagittis. Etiam porttitor aliquet tellus,
            ut dignissim nibh faucibus eu. Pellentesque vel ornare arcu.
            Phasellus vehicula nibh vel odio feugiat, id gravida odio volutpat.
            Morbi eget luctus mauris. Nullam ligula est, auctor id pretium
            fringilla, mattis vel lorem. Fusce consequat vehicula risus, dictum
            volutpat lacus tincidunt non. Vestibulum ornare congue diam, non
            finibus lorem mollis sit amet. Pellentesque accumsan tempor maximus.
            Pellentesque vitae dictum libero. Ut a erat a erat porttitor varius.
            Mauris tempus lacinia cursus. Sed quis dui nec enim euismod auctor
            vitae vitae lectus. In non neque id velit condimentum interdum.
            Fusce elementum nunc venenatis vestibulum pulvinar. Donec sed congue
            ex. Quisque dolor sapien, bibendum vestibulum arcu vel, suscipit
            sodales tellus. Nulla facilisi. Donec fringilla velit eget mauris
            venenatis, sed placerat purus pulvinar. Nam placerat est sed nunc
            tristique sagittis. Nullam id eleifend metus, ut dignissim sem.
            Nulla quis consectetur nunc. Phasellus condimentum, turpis et
            placerat consectetur, enim diam pretium risus, ut rhoncus nisi erat
            a ante. Nunc vel ornare dolor, et laoreet nulla. Donec ac venenatis
            eros. Quisque eu bibendum nulla. Suspendisse est metus, euismod sed
            libero ac, iaculis facilisis neque. Nunc fringilla magna sem, vitae
            pharetra nibh mollis a. Nullam id bibendum nunc, eu interdum libero.
          </article>

          <article rtxScrollSection="D-V">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            fringilla nibh. Nullam convallis, lectus non gravida finibus, purus
            ipsum semper turpis, vitae accumsan ante metus sit amet dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In accumsan neque hendrerit lorem porta, sed
            placerat sem viverra. Pellentesque feugiat ligula non consequat
            fringilla. Mauris et sapien euismod, porta libero eget, commodo
            nisl. Suspendisse tempus scelerisque lorem id suscipit. Vestibulum
            eleifend malesuada ligula, nec pulvinar lorem molestie non.
            Curabitur dictum maximus eros, vel suscipit ligula imperdiet sit
            amet. Sed porttitor volutpat ipsum eget pulvinar. Proin scelerisque
            feugiat libero a euismod. Nulla ut felis tellus. Aliquam ac massa eu
            dolor rhoncus suscipit eu eu orci. Etiam aliquam dui consequat
            tempor hendrerit. Cras feugiat eget lorem eget ultricies. Vivamus
            non massa non nunc pretium euismod at id diam. Integer dui tortor,
            faucibus sit amet euismod a, viverra ut tellus. Proin et maximus
            lectus, interdum porttitor leo. Vestibulum et condimentum arcu.
            Donec id tristique nunc, eget condimentum orci. Vestibulum nibh
            risus, interdum et purus a, vestibulum lacinia purus. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Cras egestas, felis vel efficitur malesuada, sem
            dolor tincidunt purus, in condimentum felis purus non quam. Morbi
            facilisis egestas hendrerit. Duis mattis libero eget orci lobortis
            bibendum. Curabitur ullamcorper, lacus et ullamcorper gravida,
            ligula metus pretium ante, ac egestas nulla nunc eu lectus. Donec id
            odio eget nisi vulputate eleifend vitae sit amet odio. Nam bibendum
            lectus ut nisl porttitor sagittis. Etiam porttitor aliquet tellus,
            ut dignissim nibh faucibus eu. Pellentesque vel ornare arcu.
            Phasellus vehicula nibh vel odio feugiat, id gravida odio volutpat.
            Morbi eget luctus mauris. Nullam ligula est, auctor id pretium
            fringilla, mattis vel lorem. Fusce consequat vehicula risus, dictum
            volutpat lacus tincidunt non. Vestibulum ornare congue diam, non
            finibus lorem mollis sit amet. Pellentesque accumsan tempor maximus.
            Pellentesque vitae dictum libero. Ut a erat a erat porttitor varius.
            Mauris tempus lacinia cursus. Sed quis dui nec enim euismod auctor
            vitae vitae lectus. In non neque id velit condimentum interdum.
            Fusce elementum nunc venenatis vestibulum pulvinar. Donec sed congue
            ex. Quisque dolor sapien, bibendum vestibulum arcu vel, suscipit
            sodales tellus. Nulla facilisi. Donec fringilla velit eget mauris
            venenatis, sed placerat purus pulvinar. Nam placerat est sed nunc
            tristique sagittis. Nullam id eleifend metus, ut dignissim sem.
            Nulla quis consectetur nunc. Phasellus condimentum, turpis et
            placerat consectetur, enim diam pretium risus, ut rhoncus nisi erat
            a ante. Nunc vel ornare dolor, et laoreet nulla. Donec ac venenatis
            eros. Quisque eu bibendum nulla. Suspendisse est metus, euismod sed
            libero ac, iaculis facilisis neque. Nunc fringilla magna sem, vitae
            pharetra nibh mollis a. Nullam id bibendum nunc, eu interdum libero.
          </article>
        </section>

        <section class="horizontal">
          <nav>
            <button rtxScrollAnchor="A-H">First Article</button>
            <button rtxScrollAnchor="B-H">Second Article</button>
            <button rtxScrollAnchor="C-H">Third Article</button>
            <button rtxScrollAnchor="D-H">Forth Article</button>
          </nav>

          <div class="horizontal-scroll">
            <article rtxScrollSection="A-H">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut fringilla nibh. Nullam convallis, lectus non gravida finibus,
              purus ipsum semper turpis, vitae accumsan ante metus sit amet
              dolor. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; In accumsan neque hendrerit lorem
              porta, sed placerat sem viverra. Pellentesque feugiat ligula non
              consequat fringilla. Mauris et sapien euismod, porta libero eget,
              commodo nisl. Suspendisse tempus scelerisque lorem id suscipit.
              Vestibulum eleifend malesuada ligula, nec pulvinar lorem molestie
              non. Curabitur dictum maximus eros, vel suscipit ligula imperdiet
              sit amet. Sed porttitor volutpat ipsum eget pulvinar. Proin
              scelerisque feugiat libero a euismod. Nulla ut felis tellus.
              Aliquam ac massa eu dolor rhoncus suscipit eu eu orci. Etiam
              aliquam dui consequat tempor hendrerit. Cras feugiat eget lorem
              eget ultricies. Vivamus non massa non nunc pretium euismod at id
              diam. Integer dui tortor, faucibus sit amet euismod a, viverra ut
              tellus. Proin et maximus lectus, interdum porttitor leo.
              Vestibulum et condimentum arcu. Donec id tristique nunc, eget
              condimentum orci. Vestibulum nibh risus, interdum et purus a,
              vestibulum lacinia purus. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Cras egestas, felis
              vel efficitur malesuada, sem dolor tincidunt purus, in condimentum
              felis purus non quam. Morbi facilisis egestas hendrerit. Duis
              mattis libero eget orci lobortis bibendum. Curabitur ullamcorper,
              lacus et ullamcorper gravida, ligula metus pretium ante, ac
              egestas nulla nunc eu lectus. Donec id odio eget nisi vulputate
              eleifend vitae sit amet odio. Nam bibendum lectus ut nisl
              porttitor sagittis. Etiam porttitor aliquet tellus, ut dignissim
              nibh faucibus eu. Pellentesque vel ornare arcu. Phasellus vehicula
              nibh vel odio feugiat, id gravida odio volutpat. Morbi eget luctus
              mauris. Nullam ligula est, auctor id pretium fringilla, mattis vel
              lorem. Fusce consequat vehicula risus, dictum volutpat lacus
              tincidunt non. Vestibulum ornare congue diam, non finibus lorem
              mollis sit amet. Pellentesque accumsan tempor maximus.
              Pellentesque vitae dictum libero. Ut a erat a erat porttitor
              varius. Mauris tempus lacinia cursus. Sed quis dui nec enim
              euismod auctor vitae vitae lectus. In non neque id velit
              condimentum interdum. Fusce elementum nunc venenatis vestibulum
              pulvinar. Donec sed congue ex. Quisque dolor sapien, bibendum
              vestibulum arcu vel, suscipit sodales tellus. Nulla facilisi.
              Donec fringilla velit eget mauris venenatis, sed placerat purus
              pulvinar. Nam placerat est sed nunc tristique sagittis. Nullam id
              eleifend metus, ut dignissim sem. Nulla quis consectetur nunc.
              Phasellus condimentum, turpis et placerat consectetur, enim diam
              pretium risus, ut rhoncus nisi erat a ante. Nunc vel ornare dolor,
              et laoreet nulla. Donec ac venenatis eros. Quisque eu bibendum
              nulla. Suspendisse est metus, euismod sed libero ac, iaculis
              facilisis neque. Nunc fringilla magna sem, vitae pharetra nibh
              mollis a. Nullam id bibendum nunc, eu interdum libero.
            </article>

            <article rtxScrollSection="B-H">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut fringilla nibh. Nullam convallis, lectus non gravida finibus,
              purus ipsum semper turpis, vitae accumsan ante metus sit amet
              dolor. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; In accumsan neque hendrerit lorem
              porta, sed placerat sem viverra. Pellentesque feugiat ligula non
              consequat fringilla. Mauris et sapien euismod, porta libero eget,
              commodo nisl. Suspendisse tempus scelerisque lorem id suscipit.
              Vestibulum eleifend malesuada ligula, nec pulvinar lorem molestie
              non. Curabitur dictum maximus eros, vel suscipit ligula imperdiet
              sit amet. Sed porttitor volutpat ipsum eget pulvinar. Proin
              scelerisque feugiat libero a euismod. Nulla ut felis tellus.
              Aliquam ac massa eu dolor rhoncus suscipit eu eu orci. Etiam
              aliquam dui consequat tempor hendrerit. Cras feugiat eget lorem
              eget ultricies. Vivamus non massa non nunc pretium euismod at id
              diam. Integer dui tortor, faucibus sit amet euismod a, viverra ut
              tellus. Proin et maximus lectus, interdum porttitor leo.
              Vestibulum et condimentum arcu. Donec id tristique nunc, eget
              condimentum orci. Vestibulum nibh risus, interdum et purus a,
              vestibulum lacinia purus. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Cras egestas, felis
              vel efficitur malesuada, sem dolor tincidunt purus, in condimentum
              felis purus non quam. Morbi facilisis egestas hendrerit. Duis
              mattis libero eget orci lobortis bibendum. Curabitur ullamcorper,
              lacus et ullamcorper gravida, ligula metus pretium ante, ac
              egestas nulla nunc eu lectus. Donec id odio eget nisi vulputate
              eleifend vitae sit amet odio. Nam bibendum lectus ut nisl
              porttitor sagittis. Etiam porttitor aliquet tellus, ut dignissim
              nibh faucibus eu. Pellentesque vel ornare arcu. Phasellus vehicula
              nibh vel odio feugiat, id gravida odio volutpat. Morbi eget luctus
              mauris. Nullam ligula est, auctor id pretium fringilla, mattis vel
              lorem. Fusce consequat vehicula risus, dictum volutpat lacus
              tincidunt non. Vestibulum ornare congue diam, non finibus lorem
              mollis sit amet. Pellentesque accumsan tempor maximus.
              Pellentesque vitae dictum libero. Ut a erat a erat porttitor
              varius. Mauris tempus lacinia cursus. Sed quis dui nec enim
              euismod auctor vitae vitae lectus. In non neque id velit
              condimentum interdum. Fusce elementum nunc venenatis vestibulum
              pulvinar. Donec sed congue ex. Quisque dolor sapien, bibendum
              vestibulum arcu vel, suscipit sodales tellus. Nulla facilisi.
              Donec fringilla velit eget mauris venenatis, sed placerat purus
              pulvinar. Nam placerat est sed nunc tristique sagittis. Nullam id
              eleifend metus, ut dignissim sem. Nulla quis consectetur nunc.
              Phasellus condimentum, turpis et placerat consectetur, enim diam
              pretium risus, ut rhoncus nisi erat a ante. Nunc vel ornare dolor,
              et laoreet nulla. Donec ac venenatis eros. Quisque eu bibendum
              nulla. Suspendisse est metus, euismod sed libero ac, iaculis
              facilisis neque. Nunc fringilla magna sem, vitae pharetra nibh
              mollis a. Nullam id bibendum nunc, eu interdum libero.
            </article>

            <article rtxScrollSection="C-H">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut fringilla nibh. Nullam convallis, lectus non gravida finibus,
              purus ipsum semper turpis, vitae accumsan ante metus sit amet
              dolor. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; In accumsan neque hendrerit lorem
              porta, sed placerat sem viverra. Pellentesque feugiat ligula non
              consequat fringilla. Mauris et sapien euismod, porta libero eget,
              commodo nisl. Suspendisse tempus scelerisque lorem id suscipit.
              Vestibulum eleifend malesuada ligula, nec pulvinar lorem molestie
              non. Curabitur dictum maximus eros, vel suscipit ligula imperdiet
              sit amet. Sed porttitor volutpat ipsum eget pulvinar. Proin
              scelerisque feugiat libero a euismod. Nulla ut felis tellus.
              Aliquam ac massa eu dolor rhoncus suscipit eu eu orci. Etiam
              aliquam dui consequat tempor hendrerit. Cras feugiat eget lorem
              eget ultricies. Vivamus non massa non nunc pretium euismod at id
              diam. Integer dui tortor, faucibus sit amet euismod a, viverra ut
              tellus. Proin et maximus lectus, interdum porttitor leo.
              Vestibulum et condimentum arcu. Donec id tristique nunc, eget
              condimentum orci. Vestibulum nibh risus, interdum et purus a,
              vestibulum lacinia purus. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Cras egestas, felis
              vel efficitur malesuada, sem dolor tincidunt purus, in condimentum
              felis purus non quam. Morbi facilisis egestas hendrerit. Duis
              mattis libero eget orci lobortis bibendum. Curabitur ullamcorper,
              lacus et ullamcorper gravida, ligula metus pretium ante, ac
              egestas nulla nunc eu lectus. Donec id odio eget nisi vulputate
              eleifend vitae sit amet odio. Nam bibendum lectus ut nisl
              porttitor sagittis. Etiam porttitor aliquet tellus, ut dignissim
              nibh faucibus eu. Pellentesque vel ornare arcu. Phasellus vehicula
              nibh vel odio feugiat, id gravida odio volutpat. Morbi eget luctus
              mauris. Nullam ligula est, auctor id pretium fringilla, mattis vel
              lorem. Fusce consequat vehicula risus, dictum volutpat lacus
              tincidunt non. Vestibulum ornare congue diam, non finibus lorem
              mollis sit amet. Pellentesque accumsan tempor maximus.
              Pellentesque vitae dictum libero. Ut a erat a erat porttitor
              varius. Mauris tempus lacinia cursus. Sed quis dui nec enim
              euismod auctor vitae vitae lectus. In non neque id velit
              condimentum interdum. Fusce elementum nunc venenatis vestibulum
              pulvinar. Donec sed congue ex. Quisque dolor sapien, bibendum
              vestibulum arcu vel, suscipit sodales tellus. Nulla facilisi.
              Donec fringilla velit eget mauris venenatis, sed placerat purus
              pulvinar. Nam placerat est sed nunc tristique sagittis. Nullam id
              eleifend metus, ut dignissim sem. Nulla quis consectetur nunc.
              Phasellus condimentum, turpis et placerat consectetur, enim diam
              pretium risus, ut rhoncus nisi erat a ante. Nunc vel ornare dolor,
              et laoreet nulla. Donec ac venenatis eros. Quisque eu bibendum
              nulla. Suspendisse est metus, euismod sed libero ac, iaculis
              facilisis neque. Nunc fringilla magna sem, vitae pharetra nibh
              mollis a. Nullam id bibendum nunc, eu interdum libero.
            </article>

            <article rtxScrollSection="D-H">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut fringilla nibh. Nullam convallis, lectus non gravida finibus,
              purus ipsum semper turpis, vitae accumsan ante metus sit amet
              dolor. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; In accumsan neque hendrerit lorem
              porta, sed placerat sem viverra. Pellentesque feugiat ligula non
              consequat fringilla. Mauris et sapien euismod, porta libero eget,
              commodo nisl. Suspendisse tempus scelerisque lorem id suscipit.
              Vestibulum eleifend malesuada ligula, nec pulvinar lorem molestie
              non. Curabitur dictum maximus eros, vel suscipit ligula imperdiet
              sit amet. Sed porttitor volutpat ipsum eget pulvinar. Proin
              scelerisque feugiat libero a euismod. Nulla ut felis tellus.
              Aliquam ac massa eu dolor rhoncus suscipit eu eu orci. Etiam
              aliquam dui consequat tempor hendrerit. Cras feugiat eget lorem
              eget ultricies. Vivamus non massa non nunc pretium euismod at id
              diam. Integer dui tortor, faucibus sit amet euismod a, viverra ut
              tellus. Proin et maximus lectus, interdum porttitor leo.
              Vestibulum et condimentum arcu. Donec id tristique nunc, eget
              condimentum orci. Vestibulum nibh risus, interdum et purus a,
              vestibulum lacinia purus. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Cras egestas, felis
              vel efficitur malesuada, sem dolor tincidunt purus, in condimentum
              felis purus non quam. Morbi facilisis egestas hendrerit. Duis
              mattis libero eget orci lobortis bibendum. Curabitur ullamcorper,
              lacus et ullamcorper gravida, ligula metus pretium ante, ac
              egestas nulla nunc eu lectus. Donec id odio eget nisi vulputate
              eleifend vitae sit amet odio. Nam bibendum lectus ut nisl
              porttitor sagittis. Etiam porttitor aliquet tellus, ut dignissim
              nibh faucibus eu. Pellentesque vel ornare arcu. Phasellus vehicula
              nibh vel odio feugiat, id gravida odio volutpat. Morbi eget luctus
              mauris. Nullam ligula est, auctor id pretium fringilla, mattis vel
              lorem. Fusce consequat vehicula risus, dictum volutpat lacus
              tincidunt non. Vestibulum ornare congue diam, non finibus lorem
              mollis sit amet. Pellentesque accumsan tempor maximus.
              Pellentesque vitae dictum libero. Ut a erat a erat porttitor
              varius. Mauris tempus lacinia cursus. Sed quis dui nec enim
              euismod auctor vitae vitae lectus. In non neque id velit
              condimentum interdum. Fusce elementum nunc venenatis vestibulum
              pulvinar. Donec sed congue ex. Quisque dolor sapien, bibendum
              vestibulum arcu vel, suscipit sodales tellus. Nulla facilisi.
              Donec fringilla velit eget mauris venenatis, sed placerat purus
              pulvinar. Nam placerat est sed nunc tristique sagittis. Nullam id
              eleifend metus, ut dignissim sem. Nulla quis consectetur nunc.
              Phasellus condimentum, turpis et placerat consectetur, enim diam
              pretium risus, ut rhoncus nisi erat a ante. Nunc vel ornare dolor,
              et laoreet nulla. Donec ac venenatis eros. Quisque eu bibendum
              nulla. Suspendisse est metus, euismod sed libero ac, iaculis
              facilisis neque. Nunc fringilla magna sem, vitae pharetra nibh
              mollis a. Nullam id bibendum nunc, eu interdum libero.
            </article>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [
    `
      main {
        display: flex;
      }

      section {
        flex-grow: 1;
      }

      nav {
        position: sticky;
        top: 10px;
        display: flex;
        gap: 10px;
      }

      article {
        background: gray;
        width: 500px;
        margin: 60px auto;
      }

      .horizontal-scroll {
        display: flex;
        overflow-x: scroll;
        width: 400px;
      }

      .horizontal-scroll article {
        flex-shrink: 0;
        margin: 60px;
      }
    `,
  ],
})
class HomeComponent {
  constructor(public element: ElementRef) {}
}

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function waitForScroll(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

describe('ScrollManagerDirective', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [ScrollManagerDirectiveModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create an instance', () => {
    const scrollManagerDirective = new ScrollManagerDirective();
    expect(scrollManagerDirective).toBeTruthy();

    const scrollSectionDirective = new ScrollSectionDirective(
      scrollManagerDirective,
      spectator.component.element
    );
    expect(scrollSectionDirective).toBeTruthy();

    const scrollAnchorDirective = new ScrollAnchorDirective(
      scrollManagerDirective
    );
    expect(scrollAnchorDirective).toBeTruthy();
  });

  it('should scroll vertically', async () => {
    for (const id of ['A', 'B', 'C', 'D']) {
      spectator.click(spectator.query(`.vertical [rtxScrollAnchor=${id}-V]`)!);
      await waitForScroll();
      expect(
        isInViewport(
          spectator.query(`.vertical [rtxScrollSection=${id}-V]`) as Element
        )
      ).toBeTruthy();
    }
  });

  it('should scroll horizontal', async () => {
    for (const id of ['A', 'B', 'C', 'D']) {
      spectator.click(
        spectator.query(`.horizontal [rtxScrollAnchor=${id}-H]`)!
      );
      await waitForScroll();
      expect(
        isInViewport(
          spectator.query(`.horizontal [rtxScrollSection=${id}-H]`) as Element
        )
      ).toBeTruthy();
    }
  });
});
