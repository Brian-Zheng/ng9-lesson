import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'The Will Will Web';

  imgsrc = '/assets/images/logo.png';

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  selfprop = '自定義property';

  showicons = true;

  changeTitle() {
    this.sitename = this.sitename + '!';
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'in ng on init';
    }, 2000);
  }
}
