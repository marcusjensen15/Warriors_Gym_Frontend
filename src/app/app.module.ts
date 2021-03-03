import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { HeaderComponent } from "./header/header.component";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { QuizComponent } from './quiz/quiz.component';
import { UserManagementComponent } from './user-management/user-management.component';

//Declare new routing components within the 'routingComponents' array inside of the app-routing module. This way we don't duplicate import statements.

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    SignupComponent,
    LoginComponent,
    MuscleGroupsComponent,
    QuizComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
