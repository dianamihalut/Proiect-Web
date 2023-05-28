import { Component, HostListener , ElementRef} from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent {

  constructor(private el: ElementRef){

  }

  @HostListener('click', ['$event'])
  imageChange(event: any) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const src = target.getAttribute('src');
      const preview = document.getElementById('preview') as HTMLImageElement;
      if (preview) {
        preview.src = src || '';
      }
      target.classList.remove('active');
    }
  }




}
