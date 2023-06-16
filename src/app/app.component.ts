import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sabinito-Smile';
  showLoading: boolean = true;

  ngOnInit(): void {
    this.showLoading = true;
  }

  ngAfterViewInit(){
    this.showLoading = false;
  }
}
