import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'people-list',
  templateUrl: './people.component.html'
})

export class PeopleComponent{
  people: Person[] = [
    {name: 'Bố', height: 175, weight: 70},
    {name: 'Mẹ', height: 165, weight: 55},
    {name: 'Anh', height: 178, weight: 85},
    {name: 'Chị bạn hàng xóm', height: 164, weight: 47},
  ];
}
