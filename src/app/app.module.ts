import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOneComponent } from './components/form-one/form-one.component';
import { HomeComponent } from './components/home/home.component';
import { FormTwoComponent } from './components/form-two/form-two.component';
import { FormThreeComponent } from './components/form-three/form-three.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    HomeComponent,
    FormTwoComponent,
    FormThreeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
