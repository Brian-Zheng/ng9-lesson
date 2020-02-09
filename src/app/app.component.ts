import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo';

  keyword = 'demo1';
  // keywordClick = '';

  data: any;
  clearKeyWord() {
    // console.log(this.keyword);
    this.keyword = '';
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('/api/articles.json')
      .subscribe((value) => {
        // console.log(value);
        this.data = value;
      });
  }
}
