import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  //constructor() { }

  // ngOnInit(): void {
  // }
heroes: string [] = ['Spiderman','IronMan', 'Hulk', 'Thor', 'Captain America',];
heroeBorrado: string = '';

borrarHeroe(){
  // this.heroes.splice(1,1);
  // this.heroes.splice(1,1);
  // return heroeBorrado;
this.heroeBorrado = this.heroes.shift() || '';

}
}