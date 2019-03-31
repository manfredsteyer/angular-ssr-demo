import { PLATFORM_ID, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer, Location } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  platform = 'unkown';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject (DOCUMENT) private document: HTMLDocument,
    private location: Location
    ) { }

  ngOnInit() {

    const placeholder = this.document.getElementById('placeholder');
    const elm = this.document.createElement('b');
    elm.appendChild(this.document.createTextNode('Hello World!'));
    placeholder.appendChild(elm);

    if (isPlatformBrowser(this.platformId)) {
      this.platform = 'Browser';
    } else if (isPlatformServer(this.platformId)) {
      this.platform = 'Server';
    }
  }

}
