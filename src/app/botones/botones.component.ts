import { Component, Input, OnInit } from '@angular/core';
import { Howl } from 'howler'

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss'],
})
export class BotonesComponent  implements OnInit {

  @Input() idiomaSeleccionado: any;
  @Input() categoriaSeleccionada: any;
  reproductor: any;

  cantidadDeImagenes: number = 5;

  constructor() { }

  ngOnInit() {}

  imagenesPorCategoria: { categoria: string, imagen: string }[] = [
    { categoria: 'colores', imagen: 'imagen-colores.png' },
    { categoria: 'numeros', imagen: 'imagen-numeros.png' },
    { categoria: 'animales', imagen: 'imagen-animales.png' },
    // Agrega más categorías y rutas de imágenes según sea necesario
  ];  

  range(count: number): number[] {
    return Array(count).fill(0).map((_, index) => index + 1);
  }

  reproducirSonido(i: number) {
    this.reproductor = new Howl({
      src: `../../assets/${this.idiomaSeleccionado}-${this.categoriaSeleccionada}-${i}.mp3`
    });
  
    this.reproductor.play(); // Agregar esta línea para reproducir el sonido
  }
  
}
