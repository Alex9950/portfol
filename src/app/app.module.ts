import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ContactsComponent } from "./components/contacts/contacts.component";
const appRoutes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'contacts', component: ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
