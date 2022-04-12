import { Injectable } from '@angular/core';
import { Animais } from '../models/animais.model';

@Injectable({
  providedIn: 'root'
})
export class AdocaoService {

  public animais:Array<Animais> = [
    {
      id:0,
      foto:"./../../assets/images/dog.png",
      especie:"cachorro",
      genero:"macho",
      raca:"pug",
      endereco:"rua 3 corações",
      motivo:"adoro animais"
    },
    {
      id:1,
      foto:"./../../assets/images/gato.png",
      especie:"gato",
      genero:"femea",
      raca:"não definida",
      endereco:"rua 3 corações",
      motivo:"adoro animais"
    },
    {
      id:2,
      foto:"./../../assets/images/coelho.png",
      especie:"coelho",
      genero:"macho",
      raca:"",
      endereco:"rua 3 corações",
      motivo:"adoro animais"
    },
    {
      id:3,
      foto:"./../../assets/images/dog-1.jpg",
      especie:"cachorro",
      genero:"macho",
      raca:"pug",
      endereco:"rua 3 corações",
      motivo:"adoro animais"
    },
    {
      id:4,
      foto:"./../../assets/images/cat-1.jpg",
      especie:"gato",
      genero:"macho",
      raca:"",
      endereco:"rua 3 corações",
      motivo:"adoro animais"
    }
  ]

  constructor() { }

  public getAll(): Array<Animais> {
    return this.animais;
  }
}
