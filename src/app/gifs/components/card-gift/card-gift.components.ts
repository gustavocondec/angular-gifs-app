import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'card-gift',
  templateUrl: './card-gift.component.html',
  styleUrls: ['./card-gift.component.css'],
})
export class CardGiftComponent {
  @Input({ required: true })
  gift!: Gif;
}
