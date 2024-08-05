import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url) throw new Error('Url is required');
  }
  @Input({ required: true })
  public url!: string;

  @Input()
  alt = '';

  protected hasLoaded = false;

  onLoad() {
    console.log('Cargo la imagen');
    this.hasLoaded = true;
  }
}
