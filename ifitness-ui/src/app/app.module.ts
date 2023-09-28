import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesModule } from './activities/activities.module';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActivitiesModule,
    SecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
