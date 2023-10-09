import {Component, ViewEncapsulation} from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {
  }
  get history(){
    return [... this.gifsService.tagsHistory]
  }

  search(tag:string){
    this.gifsService.searchTag(tag)
  }
}
