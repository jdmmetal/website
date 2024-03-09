import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgsRevealModule } from 'ngx-scrollreveal';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgsRevealModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
