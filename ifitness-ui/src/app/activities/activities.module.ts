import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button'
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ActivitiesListComponent } from './activities-list/activities-list.component'

@NgModule({
  declarations: [
    ActivitiesListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ]
})
export class ActivitiesModule { }
