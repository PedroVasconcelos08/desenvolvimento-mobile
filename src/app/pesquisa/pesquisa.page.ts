import { Component, OnInit } from '@angular/core';
import { Animais } from '../models/animais.model';
import { AdocaoService } from '../services/adocao.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {

  public animais: Array<Animais> = [];

  constructor(private adocaoService:AdocaoService) { }

  ngOnInit() {
    this.animais = this.adocaoService.getAll();
  }

}
