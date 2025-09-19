import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    <div class="blog">
      <h1>BLOG</h1>
      <p>Coming soon.</p>
    </div>
  `,
  styles: [`
    .blog { padding: 2rem; }
    h1 { margin: 0 0 1rem; }
  `]
})
export class BlogComponent {}