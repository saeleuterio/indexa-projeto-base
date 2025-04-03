import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit{

  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }

  constructor(
    private activatedRooute: ActivatedRoute,
    private contatoService: ContatoService
  ) {}

  ngOnInit() {
      const id = this.activatedRooute.snapshot.paramMap.get('id')
      if(id) {
        this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
          this.contato = contato
        })
      }
  }

}
