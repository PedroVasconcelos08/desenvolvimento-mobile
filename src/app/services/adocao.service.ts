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

  public get(id: number): Animais {
    for(let obj of this.animais) {
      if (id === obj.id) {
        return obj;
      }
    }

    return new Animais();
  }

  public add(Animais: Animais) {
    Animais.id = this.animais.length;
    this.animais.push(Animais);
  }

  public edit(Animais: Animais) {
    for(let obj of this.animais) {
      if (Animais.id === obj.id) {
        obj.id = Animais.id;
        obj.foto = Animais.foto;
        obj.especie = Animais.especie;
        obj.genero = Animais.genero;
        obj.raca = Animais.raca;
        obj.endereco = Animais.endereco;
        obj.motivo = Animais.motivo;
        break;
      }
    }
  }

}
