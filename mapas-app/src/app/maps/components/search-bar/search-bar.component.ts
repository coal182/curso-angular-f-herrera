import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
    `
    .search-container{
      left: 20px;
      position: fixed;
      top: 20px;
      width: 270px;

      background-color: white;
      border-radius: 5px;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
      padding: 5px;
    }
    `
  ]
})
export class SearchBarComponent {

  
  private debounceTimer?: NodeJS.Timeout;

  constructor(private placesService: PlacesService){}

  onQueryChanged(query: string = ''){

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      console.log('Mandar este query: ', query);
      this.placesService.getPlacesByQuery(query);
    }, 350)

  }

}
