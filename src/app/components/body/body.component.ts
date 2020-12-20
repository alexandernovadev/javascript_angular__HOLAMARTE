import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar = true;

  frase: any = {
    mensaje: 'Nesecito llegar al espacio',
    autor: 'Alexander Nova'
  };

  personajes: string [] = [ 'Superman', 'Batman', 'Linterna Verde'];

  constructor() { }

  ngOnInit() {
  }

}
