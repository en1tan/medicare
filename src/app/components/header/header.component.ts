import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iga-header',
  template: `
  <nav class="navbar is-dark">

    <!-- Logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="assets/img/logo.png" />
      </a>
    </div>
  </nav>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
