import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignupComponent } from './signup/signup.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { IndividualUserComponent } from "./individual-user/individual-user.component";
import { AddUserComponent} from "./add-user/add-user.component";
import { AuthGuard } from './auth.guard';
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'musclegroups', component: MuscleGroupsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'users-management', component: UserManagementComponent, canActivate:[AuthGuard] },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'individual-user/:name', component: IndividualUserComponent},
  { path: 'individual-user/edit/:name', component: EditUserComponent},
  { path: 'add-user', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,SignupComponent,LoginComponent,MuscleGroupsComponent,QuizComponent,UserManagementComponent,AddQuestionComponent, IndividualUserComponent, AddUserComponent, EditUserComponent];
