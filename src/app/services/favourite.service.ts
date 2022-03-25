import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Favourite, FavouriteItem } from 'src/app/models/favourite.model';

export const FAVOURITE_KEY = 'favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favourite$: BehaviorSubject<Favourite> = new BehaviorSubject(this.getFavourite());

  constructor() { }


    initFavouriteLocalStorage() {
      const favourite: Favourite = this.getFavourite();
      const emptyFavourite: Favourite = {
        items: []
      };

      if (favourite=== emptyFavourite) {
        const intialFav = {
          items: []
        };
        const intialFavJson = JSON.stringify(intialFav);
        localStorage.setItem(FAVOURITE_KEY, intialFavJson);
      }
    }

    emptyFavourite() {
      const intialFav = {
        items: []
      };
      const intialFavJson = JSON.stringify(intialFav);
      localStorage.setItem(FAVOURITE_KEY, intialFavJson);
      this.favourite$.next(intialFav);
    }

    getFavourite(): Favourite {
      const favouriteJsonString: string = localStorage.getItem(FAVOURITE_KEY) ?? '{"items":[]}';
      const favourite: Favourite = JSON.parse(favouriteJsonString);
      return favourite;
    }

    setFavouriteItem(favItem: FavouriteItem, updateFavItem?: boolean): Favourite {
      const favourite = this.getFavourite();
      const favouriteItemExist = favourite.items?.find((item) => item.productId === favItem.productId);
      if (favouriteItemExist) {
        favourite.items?.map((item) => {
          if (item.productId === favItem.productId) {
            if (updateFavItem) {
              item.liked = !item.liked;
            } else {
              item.liked = true;
            }

        }

        return item;
        });
      } else {
        favourite.items?.push(favItem);
      }

      const cartJson = JSON.stringify(favourite);
      localStorage.setItem(FAVOURITE_KEY, cartJson);
      this.favourite$.next(favourite);
      return favourite;
    }

}
