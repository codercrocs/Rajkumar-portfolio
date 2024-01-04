import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeServiceService } from '../theme-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private themeservice: ThemeServiceService) {}
  theme = true;
  toggle() {
    this.theme = this.theme === true ? false : true;
    this.themeservice.toggleTheme();
  }
}
