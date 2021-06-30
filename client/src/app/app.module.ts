import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CreatePetitionComponent } from './create-petition/create-petition.component';
import { MyPetitionsComponent } from './my-petitions/my-petitions.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { PetitionListComponent } from './petition-list/petition-list.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    CreatePetitionComponent,
    MyPetitionsComponent,
    MemberDetailComponent,
    PetitionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
