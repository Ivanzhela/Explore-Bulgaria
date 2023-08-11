import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Place } from 'src/app/types/place';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  destinations?: Place[] | null;
  onSearch: boolean = false;
  formData = {
    destination: '',
  };

  constructor(private service: SearchService) {}
  
  onSearchMenu() {
    this.onSearch = !this.onSearch;
    if (this.onSearch == false) {
      this.destinations = null;
      this.formData.destination = '';
    }
  }

  onSearchAction() {
    if (this.formData.destination == '') {
      return;
    }
    this.service
      .getSearchDestination(this.formData.destination)
      .subscribe((d) => (this.destinations = d));
  }
}
