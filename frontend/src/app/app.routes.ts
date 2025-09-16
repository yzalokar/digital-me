// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
];
