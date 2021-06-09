import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { NewCompComponent } from './new-comp/new-comp.component';

const routes: Routes = [
  { path: "test", component: TestComponent },
  { path: "new", component: NewCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
