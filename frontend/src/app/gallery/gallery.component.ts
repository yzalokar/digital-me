import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  template: `
    <section class="gallery">
      <h1>GALLERY</h1>
      <p>Coming soon.</p>
    </section>
  `,
  styles: [`
    .gallery { padding: 2rem; }
    h1 { margin: 0 0 1rem; }
  `]
})
export class GalleryComponent {}


