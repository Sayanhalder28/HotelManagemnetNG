import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    // thus we can load data into an HTML template
    new WishItem('To Learn Angular', false),
    new WishItem('Get Coffee', false),
    new WishItem('Collect tickets', false),
    new WishItem('Call Joe', false),
  ];

  newWishText: any = '';

  title: string = 'Hotel XYZ';

  visibleItems: WishItem[] = this.items;

  listFilter: string = 'all';

  addWishItem() {
    this.items.push(new WishItem(this.newWishText, false));
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log('toggleItem event:', item);
  }

  filterChanged(value: string) {
    console.log(this.listFilter);
    if (value === 'all') {
      this.visibleItems = this.items;
    } else if (value === 'active') {
      this.visibleItems = this.items.filter((item) => !item.isComplete);
    } else if (value === 'fullfilled'){
      this.visibleItems = this.items.filter((item) => item.isComplete);
    }
  }
}
