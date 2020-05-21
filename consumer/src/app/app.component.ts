import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  cardsDetails = [];

  constructor(private dogService: DogService){}
  ngOnInit(): void {
    this.dogService.getDogs().subscribe((dogs) => {
      this.cardsDetails = dogs;
    });
  }
}
