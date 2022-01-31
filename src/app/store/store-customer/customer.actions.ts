import { ICustomer } from './customer.interface';

export class SaveCustomer {
  static readonly type = '[Customer] SaveCustomer';

  constructor(public customer: ICustomer) {}
}

export class GetCustomer {
  static readonly type = '[Customer] GetCustomer';

  constructor() {}
}
