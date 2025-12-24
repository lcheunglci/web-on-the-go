import { User } from './user.model';

export const USERS: User[] = [
  { id: 'admin', name: 'Administrator', permissions: ['admin'], cart: {} },
  { id: 'customer2', name: 'Customer 2', permissions: ['customer'], cart: {} },
  { id: 'dev', name: 'Developer', permissions: ['developer'], cart: {} },
  { id: 'customer1', name: 'Customer 1', permissions: ['customer'], cart: {} },
];
