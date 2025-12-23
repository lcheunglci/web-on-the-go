import { USERS } from './models/users.mock';
import { PRODUCTS } from './models/products.mock';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

export class AppData implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const products = PRODUCTS;
    const users = USERS;
    return { products, users };
  }
}
