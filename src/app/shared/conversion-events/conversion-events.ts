import { inject, Injectable } from '@angular/core';
import { Consent } from '../consent/consent';

@Injectable({
  providedIn: 'root',
})
export class ConversionEvents {
  private consentService = inject(Consent);
  
  booking() {
    this.consentService.trackEvent('click_booking', {
      'event_category': 'engagement',
      'link_url': 'https://portal.treatsoft.at/portal/appointments/booking/24128'
    });
  }

  newLead() {
    this.consentService.trackEvent('generate_lead', {
      'event_category': 'contact',
      'method': 'contact_form'
    });
  } 
}
