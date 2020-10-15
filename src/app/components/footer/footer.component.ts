import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iga-footer',
  template: `
    <footer class="footer">

    <div class="container">
      <p>
        Made with ♥ by <a href="https://strae.dev" class="is-link" rel="noreferrer">x1k</a>
</p>
</div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
