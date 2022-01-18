import { CustomerService } from './customer.service';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { GetCustomer, SaveCustomer } from './customer.actions';
import { ICustomer } from './customer.interface';

/**
 * Inicialização do estado
 */
@State<ICustomer>({
  name: 'customerStore',
  defaults: {
    name: '',
    email: '',
    phone: '',
    loading: false,
    error: undefined,
  },
})
/**
 * Estado para gerenciar os cargos
 */
@Injectable()
export class CustomerState {
  constructor(private store: Store, private customerService: CustomerService) {}

  /**
   * SELECTORS
   */

  /**
   * Return customer name
   * @param name Customer Name
   */
  @Selector()
  static getName({ name }: ICustomer) {
    return name;
  }

  /**
   * Return customer email
   * @param email Customer email
   */
  @Selector()
  static getEmail({ email }: ICustomer) {
    return email;
  }

  /**
   * Return customer Phone
   * @param Phone Customer Phone
   */
  @Selector()
  static getPhone({ phone }: ICustomer) {
    return phone;
  }

  @Selector()
  static getCustomer({ name, email, phone }: ICustomer) {
    return { name, email, phone };
  }

  /**
   * Return loading customer
   * @param loading Loading customer
   */
  @Selector()
  static getLoadingCustomer({ loading }: ICustomer) {
    return loading;
  }

  /**
   * Return customer error
   * @param error Return customer error
   */
  @Selector()
  static getErrorCustomer({ error }: ICustomer) {
    return error;
  }

  /**
   * ACTIONS
   */

  /**
   * Reducer of action to save customer
   */
  @Action(SaveCustomer)
  async getCargos(
    { patchState }: StateContext<ICustomer>,
    { customer }: SaveCustomer
  ) {
    patchState({ loading: true });
    patchState({ error: null });
    try {
      const customerSaved = await this.customerService
        .saveCustomer(customer)
        .toPromise();
      patchState({ ...customerSaved });
    } catch (error) {
      console.error(error);
      patchState({ error });
    } finally {
      patchState({ loading: false });
    }
  }

  /**
   * Get customer informations
   * @param patchState Reference to patchState method
   */
  @Action(GetCustomer)
  async getCustomer({ patchState }: StateContext<ICustomer>) {
    patchState({ loading: true });
    patchState({ error: null });
    try {
      const customer = await this.customerService.getCustomer().toPromise();
      patchState({ ...customer });
    } catch (error) {
      console.error(error);
      patchState({ error });
    } finally {
      patchState({ loading: false });
    }
  }
}
