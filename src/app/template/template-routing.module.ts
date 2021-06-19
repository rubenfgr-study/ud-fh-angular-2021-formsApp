import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from '../template/basics/basics.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {path: 'basics', component: BasicsComponent},
  {path: 'dinamics', component: DinamicsComponent},
  {path: 'switches', component: SwitchesComponent},
  {path: '**', redirectTo: 'basics'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
