import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BettingComponent } from './betting.component';

const routes: Routes = [
  { path: '', component: BettingComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [BettingComponent]
})
export class BettingModule { }
