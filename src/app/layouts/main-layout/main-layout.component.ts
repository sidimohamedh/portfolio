import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  toggle() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  }
}
