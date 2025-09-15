import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="about">
      <h1>ABOUT</h1>
      <p>Coming soon.</p>
    </section>
  `,
  styles: [`
    .about { padding: 2rem; }
    h1 { margin: 0 0 1rem; }
  `]
})
export class AboutComponent {}


