import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    { name: 'bmw-e30-touring', src: '/images/bmw-e30.jpeg' },
    { name: 'sunday-in-the-park', src: '/images/in-the-park.jpeg' },
    { name: 'yzdigital-italy-fitpic-2025', src: '/images/yzdigital-italy-fitpic.jpeg' },
    { name: 'me', src: '/images/me.jpg' },
    { name: 'yabujin-core', src: '/images/yabujin-core.jpeg' },
    { name: 'my-gf', src: '/images/my-gf.jpeg' },
    { name: 'rip-ozzy', src: '/images/rip-ozzy.jpeg' },
    { name: 'whatever', src: '/images/whatever.jpeg' },
    { name: 'givenchyyyyy-sneaker', src: '/images/givenchyyyyy.jpeg' },
    { name: 'mirror-pic', src: '/images/mirror-pic.jpeg' }

  ];

  hoveredImage: string | null = null;
}
