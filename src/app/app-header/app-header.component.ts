import { Component, OnInit, ViewChild, ElementRef, ViewRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @ViewChildren('blog') blog : any;
  scrolledToTop: boolean = true;

  constructor() { }
  
  ngOnInit() {

    
  }

  scrollToElement($element: any): void {
    $element = this.blog;
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
