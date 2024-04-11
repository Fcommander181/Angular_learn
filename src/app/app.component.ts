import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
    // we don't need initialisation of this field anymore because we can add elements automatically with addNewWish()
  ];
  listFilter: any = '0';
  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);

    // if (this.listFilter === '0') {
    //   return this.items;
    // } else if (this.listFilter === '1') {
    //   return this.items.filter((item) => !item.isComplete);
    // } else {
    //   return this.items.filter((item) => item.isComplete);
    // }
  }

  title = 'wishlist';

  // this code is when we do ngModelChange method will execute this function but in our case we don't use it because it makes 2 bugs

  // filterChanged(value: any) {
  // if (this.listFilter === '0') {
  //   return this.items;
  // } else if (this.listFilter === '1') {
  //   return this.items.filter((item) => !item.isComplete);
  // } else {
  //   return this.items.filter((item) => item.isComplete);
  // }
  // }
}
