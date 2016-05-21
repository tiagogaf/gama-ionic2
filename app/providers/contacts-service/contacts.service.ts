import {Injectable} from '@angular/core';

@Injectable()
export class ContactsService {
  data = [{
    name: 'Nome 1',
    email: '1@email.com',
    phone: '(31)3333-3333',
    photo: 'image1.jpg'
  },
  {
    name: 'Nome 2',
    email: '2@email.com',
    phone: '(31)2222-3333',
    photo: 'image2.jpg'
  },
  {
    name: 'Nome 3',
    email: '3@email.com',
    phone: '(31)9999-3333',
    photo: 'image3.jpg'
  },
  ];

  getData() {
    return this.data;
  }

}
