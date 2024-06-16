import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  idiomaSeleccionado = "";
  categoriaSeleccionada = "";
  botonSeleccionado: string | null = null; // Variable para realizar un seguimiento del botón seleccionado
  constructor(private afAuth: AuthService,
              private router: Router) {}

  ngOnInit(){
    this.seleccionarIdioma("español");
    this.seleccionarCategoria("colores");
  }

  seleccionarIdioma(idioma: string) {
    this.idiomaSeleccionado = idioma;
    this.botonSeleccionado = idioma;
  }

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  logout()
  {
    this.afAuth.logOut();
    this.router.navigateByUrl("/login");
  }
}
