import { isPlatformBrowser } from '@angular/common';
import { Component, inject, NgZone, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navItems = [
    { label: 'Projects', path: '#projects' },
    { label: 'Experience', path: '#experience' },
    { label: 'About', path: '#about' },
    { label: 'Contact', path: '#contact' }
  ];

  isMenuOpen = signal(false);
  isNavbarVisible = signal(true);

  private lastScrollY = 0;
  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private isTicking = false;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
        this.ngZone.runOutsideAngular(() => {
        window.addEventListener('scroll', () => {
            if (!this.isTicking) {
            this.isTicking = true;
            requestAnimationFrame(() => {
                this.handleScroll();
                this.isTicking = false;
            });
            }
        }, { passive: true });
        });
    }
  }

  private handleScroll() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - this.lastScrollY;

    // Hide navbar when scrolling down fast enough
    if (scrollDelta > 10 && currentScrollY > 400) {
      this.ngZone.run(() => {
        this.isNavbarVisible.set(false);
      });
    }

    // Show navbar when scrolling up
    if (scrollDelta < -10) {
      this.ngZone.run(() => {
        this.isNavbarVisible.set(true);
      });
    }

    this.lastScrollY = currentScrollY;
  }

  scrollToSection(path: string) {
    const id = path.replace('#', '');
    const el = document.getElementById(id);

    if (!el) return;

    this.isNavbarVisible.set(true);
    this.lastScrollY = window.scrollY;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // 4. Close mobile menu
    this.closeMenu();
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
