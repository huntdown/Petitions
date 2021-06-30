import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePetitionComponent } from './create-petition/create-petition.component';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MyPetitionsComponent } from './my-petitions/my-petitions.component';
import { PetitionListComponent } from './petition-list/petition-list.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'create', component: CreatePetitionComponent},
      {path: 'members/:id', component: MemberDetailComponent},
      {path: 'mypetitions', component: MyPetitionsComponent},
    ]
  },
  
  {path: 'petitions', component: PetitionListComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
