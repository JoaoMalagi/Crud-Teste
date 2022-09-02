import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  nmCliente: string = '';
  cidade: string = '';

  constructor(private clienteService: ClienteService,private  router : Router) { }

  ngOnInit(): void {
  }

  criarCliente() : void {
    let cliente: Cliente = {
      nmCliente: this.nmCliente,
      cidade: this.cidade
   }
     this.clienteService.create(cliente).subscribe(() => {
 
       this.clienteService.showMessage('Operação executada com sucesso')
       this.router.navigate(['/clientes'])
     })
   }
 
   calcel() : void {
     this.router.navigate(['/clientes'])
   }
}
