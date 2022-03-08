import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';



@NgModule({
  declarations: [    
    FavoritesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FavoritesListComponent
  ]
})
export class FavoriteModule { }
