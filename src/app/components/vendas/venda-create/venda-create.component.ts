import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente.model';
import { ClienteService } from '../../cliente/cliente.service';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {

  idCliente: number;
  idProduto: number;
  qtdVenda: number;
  vlrUnitarioVenda: number;

  clientes : Cliente[] = [];

  produtos: Produto[] = [];

  constructor(private vendaService: VendaService,  private clienteService: ClienteService, private produtoService : ProdutoService,
    private router : Router) { }

  ngOnInit(): void {

    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
    });
    this.produtoService.read().subscribe(produto => {
      this.produtos = produto
    });
  }
  criarVenda() : void {
    let venda: Venda = {
    qtdVenda: this.qtdVenda,
    idCliente: this.idCliente,
    idProduto: this.idProduto,
    vlrUnitarioVenda: this.vlrUnitarioVenda,  

   }
     this.vendaService.create(venda).subscribe(() => { 
       this.vendaService.showMessage('Operação executada com sucesso')
       this.router.navigate(['/vendas'])
     })
   }

   @ViewChild('matSelectCliente') matSelectCliente: MatSelect;
   //Reference Variable //variable Name //Type
   @ViewChild('matSelectProduto') matSelectProduto: MatSelect;

   ngAfterViewInit() {
     this.matSelectProduto.valueChange.subscribe(value => {
         this.idProduto = value;
    
     });
     this.matSelectCliente.valueChange.subscribe(value => {
      this.idCliente = value;
    });
   }
 
 
   calcel() : void {
     this.router.navigate(['/vendas'])
   }
}
