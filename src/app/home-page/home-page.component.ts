import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',

})

export class HomePageComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private clockIntervalId?: number;

  ngOnInit(): void {
    this.updateCurrentTime();
    this.clockIntervalId = window.setInterval(() => this.updateCurrentTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.clockIntervalId !== undefined) {
      window.clearInterval(this.clockIntervalId);
    }
  }

  private updateCurrentTime(): void {
    this.currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/yannick-zalokar-71063a1b5/', '_blank');
  }

  openInstagram(): void {
    window.open('https://www.instagram.com/yourparentsloveyannick/', '_blank');
  }
}