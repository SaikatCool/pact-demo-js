import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  cardsDetails = [];

  constructor(private dogService: DogService){}
  ngOnInit(): void {
    this.dogService.getDogs(environment.api_end_point).subscribe((dogs) => {
      this.cardsDetails = dogs;
    });
  }
}
