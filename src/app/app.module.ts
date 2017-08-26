import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
