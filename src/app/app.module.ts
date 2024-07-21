import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: TareaComponent }
  ];


@NgModule({
  declarations: [
      TareaComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

