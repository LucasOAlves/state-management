import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  saveCustomer(customer: { name: string; email: string; phone: string }) {
    return of(customer);
  }

  getCustomer() {
    return of({
      name: 'Marcos',
      email: 'marcos@email.com',
      phone: '41989899899',
    });
  }
}
