import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[] = []
  busca: string= '';

  displayedColumns = ['dscProduto', 'vlrProduto', 'action']
  

  constructor(private produtoService: ProdutoService,private  router : Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  edit(id: number): void {
    this.router.navigate(['/produtos/update',id]);
  }

  delete(id: number): void {
    let dialogRef = this.dialog.open(DialogBodyComponent);

     dialogRef.afterClosed().subscribe(result => {
      if (result == 'true')
      {
        
      this.produtoService.delete(id).subscribe(() => {

      this.produtoService.showMessage('Operação executada com sucesso')
      this.produtoService.read().subscribe(produtos => {
        this.produtos = produtos
      })
    })  
      }
      if (result == 'false')
      {
        this.router.navigate(['/produtos'])
      }
  });
  }
  buscar() : void {
    if(this.busca =='')
    {
      this.produtoService.read().subscribe(produtos => {
        this.produtos = produtos
      })
    }
    else{
      this.produtoService.buscar(this.busca).subscribe(produtos => {
        this.produtos = produtos
      })
    }
  } 
}
