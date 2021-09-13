import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorInputComponent } from './visitor-input/visitor-input.component';
import { VisitorComponent } from './visitor/visitor.component';



const routes: Routes = [
  { path: 'visitor', component: VisitorComponent },
  { path: 'visitor-input', component: VisitorInputComponent },
  { path: '', component: VisitorInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
