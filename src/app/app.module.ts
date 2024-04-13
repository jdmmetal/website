import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { NgsRevealModule } from 'ngx-scrollreveal';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxCarouselModule } from 'igniteui-angular';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgsRevealModule, BrowserAnimationsModule, HammerModule, IgxCarouselModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
