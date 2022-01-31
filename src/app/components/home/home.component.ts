import { SaveCustomer } from './../../store/store-customer/customer.actions';
import { Component } from '@angular/core';
import { CustomerState } from 'src/app/store/store-customer/customer.state';

import { Store } from '@ngxs/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public step: number = 0;

  constructor(private store: Store) {}

  nextStep(event: any) {
    this.saveCustomer(event);
    this.step++;
  }

  backStep() {
    this.step--;
  }

  saveCustomer(event: any) {
    const customerStore = this.store.selectSnapshot(CustomerState.getCustomer);
    this.store.dispatch(new SaveCustomer({ ...customerStore, ...event }));
  }
}
