import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ApplicationModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxCarouselModule } from 'igniteui-angular';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HammerModule, IgxCarouselModule, CommonModule, ApplicationModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
