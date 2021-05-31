import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarrouselViewComponent } from './components/carrousel-view/carrousel-view.component';
import { InfoViewComponent } from './components/info-view/info-view.component';
import { TabsViewComponent } from './components/tabs-view/tabs-view.component';
import { FinishChooseComponent } from './components/finish-choose/finish-choose.component';
import { ExtraButtonsComponent } from './components/extra-buttons/extra-buttons.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpecificationsComponent } from './components/specifications/specifications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarrouselViewComponent,
    InfoViewComponent,
    TabsViewComponent,
    FinishChooseComponent,
    ExtraButtonsComponent,
    FooterComponent,
    SpecificationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
