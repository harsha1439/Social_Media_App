import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>
      -page-not-found
</h1>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
