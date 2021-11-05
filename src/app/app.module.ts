import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrollManagerDirectiveModule } from '../../projects/scroll-manager/src/lib/scroll-manager.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScrollManagerDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
