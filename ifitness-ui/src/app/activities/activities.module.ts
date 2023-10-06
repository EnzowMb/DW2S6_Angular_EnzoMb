import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button'
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityRegisterComponent } from './activity-register/activity-register.component'

@NgModule({
  declarations: [
    ActivitiesListComponent,
    ActivityRegisterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    ActivitiesListComponent
  ]
})
export class ActivitiesModule { }
