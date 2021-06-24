import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Petiton App';
  petitons: any;
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getPetitions();
    
  }

  getPetitions() {
    this.http.get<any>(this.baseUrl + "petition").subscribe(response => {
      
      this.petitons = response;
    },error => {
      console.log(error);
    })
  }

  
}
