import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { SingleComponent } from './posts/single/single.component';

const routes: Routes = [
    { path: "", component: DefaultComponent },
    { path: "post/:id", component: SingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApproutingModule { }
