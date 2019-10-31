import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CountersComponent } from './counters/counters.component';
import { CardsComponent } from './cards/cards.component';
import { ActiveComponent } from './active/active.component';
import { DiscardComponent } from './discard/discard.component';
import { LostComponent } from './lost/lost.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    CountersComponent,
    CardsComponent,
    ActiveComponent,
    DiscardComponent,
    LostComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
