import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private renderer: Renderer2;
  private currentTheme: 'light' | 'dark' = 'dark';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
  }

  private applyTheme() {
    const body = document.body;

    if (this.currentTheme === 'dark') {
      this.renderer.addClass(body, 'dark-mode');
      this.renderer.removeClass(body, 'light-mode');
    } else {
      this.renderer.addClass(body, 'light-mode');
      this.renderer.removeClass(body, 'dark-mode');
    }
  }
}
