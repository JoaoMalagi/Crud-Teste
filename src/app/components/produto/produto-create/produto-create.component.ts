import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  
  dscProduto: string = '';
  vlrProduto: string = '';

  constructor(private produtoService : ProdutoService,
    private router : Router) { }

  ngOnInit(): void {
    
  }
 
  criarProduto() : void {
   let produto: Produto = {
   dscProduto: this.dscProduto,
   vlrProduto: +this.vlrProduto
  }
    this.produtoService.create(produto).subscribe(() => {

      this.produtoService.showMessage('Operação executada com sucesso')
      this.router.navigate(['/produtos'])
    })
  }

  calcel() : void {
    this.router.navigate(['/produtos'])
  }
}
