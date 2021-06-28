import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Petiton App';
  petitons: any;
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient, private accountService: AccountService) {}
  
  ngOnInit() {
    this.getPetitions();
    this.setCurrentUser();
  }

  getPetitions() {
    this.http.get<any>(this.baseUrl + "petition").subscribe(response => {
      this.petitons = response;
    },error => {
      console.log(error);
    })
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  
}
