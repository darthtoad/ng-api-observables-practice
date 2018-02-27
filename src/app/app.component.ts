import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  observableWord: Observable<string>
  currentWord: string;

  errorMessage: string;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.observableWord = this.appService.getWord();
    this.observableWord.subscribe(
      word => this.currentWord = word,
      error => this.errorMessage = <any>error;
    );
  }

  randomWord() {
    this.observableWord = this.appService.getWord();
    this.observableWord.subscribe(
      word => this.currentWord = word,
      error => this.errorMessage = <any>error;
    );
  }
}
