import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'ABT-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nav_scroll=false;
  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.nav_scroll=true;
    } else {
      this.nav_scroll=false;
    }
  }
}

