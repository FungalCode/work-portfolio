import { Injectable, signal } from '@angular/core';

export interface ConsentState {
  essential: boolean;
  analytics: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Consent {
  consent = signal<ConsentState>({
    essential: true,
    analytics: false
  });

  trackEvent(eventName: string, params: object = {}) {
    if (this.consent().analytics) {
      const gtag = (window as any).gtag;
      if (typeof gtag === 'function') {
        gtag('event', eventName, params);
      }
    }
  }
}
