import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>
  constructor() {
    console.log(this.tagInput)
  }

  searchTag(){
    let newTag = this.tagInput.nativeElement.value
    console.log({newTag})
  }
}
