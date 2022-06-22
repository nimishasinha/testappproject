import { QuestionComponent } from './components/question/question/question.component';
import { HomeComponent } from './components/home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"" , redirectTo:'home',pathMatch: 'full'},
  {path:"home",component:HomeComponent},
  {path:"question" , component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
