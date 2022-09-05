import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-read',
  templateUrl: './venda-read.component.html',
  styleUrls: ['./venda-read.component.css']
})
export class VendaReadComponent implements OnInit {

  vendas: Venda[] = [];
  busca: string= '';

  displayedColumns = ['nmCliente', 'dscProduto', 'qtdVenda', 'dthVenda', 'vlrUnitarioVenda', 'vlrTotalVenda', 'action']

  constructor(private vendaService: VendaService,private  router : Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.vendaService.read().subscribe(vendas => {
      this.vendas = vendas
    })
  }

  edit(id: number): void {
    this.router.navigate(['/vendas/update',id]);
  }

  delete(id: number): void {

    let dialogRef = this.dialog.open(DialogBodyComponent);

    dialogRef.afterClosed().subscribe(result => {
     if (result == 'true')
     {
       
     this.vendaService.delete(id).subscribe(() => {

     this.vendaService.showMessage('Operação executada com sucessos')
     this.vendaService.read().subscribe(vendas => {
      this.vendas = vendas
    })
   })  
     }
     if (result == 'false')
     {
       this.router.navigate(['/vendas'])
     }
 });
  }

  buscar() : void {
    if(this.busca =='')
    {
      this.vendaService.read().subscribe(vendas => {
        this.vendas = vendas
      })
    }
    else{
      this.vendaService.buscar(this.busca).subscribe(vendas => {
        this.vendas = vendas
      })
    }
  } 
}
