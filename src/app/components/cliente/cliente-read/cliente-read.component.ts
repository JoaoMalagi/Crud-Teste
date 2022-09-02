import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[] = [];
  busca: string= '';

  displayedColumns = ['nmCliente', 'cidade', 'action']
  dialogService: any;

  constructor(private clienteService: ClienteService,private  router : Router, private dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
    })
  }

  edit(id: number): void {
    console.log(id)
    this.router.navigate(['/clientes/update',id]);
  }

  delete(id: number): void {
     let dialogRef = this.dialog.open(DialogBodyComponent);

     dialogRef.afterClosed().subscribe(result => {
      if (result == 'true')
      {
        
      this.clienteService.delete(id).subscribe(() => {

      this.clienteService.showMessage('Operação executada com sucesso')
      
      this.clienteService.read().subscribe(clientes => {
        this.clientes = clientes
      })
    })  
      }
      if (result == 'false')
      {
        this.router.navigate(['/clientes'])
      }
  });
  
  };
  

  buscar() : void {
    if(this.busca =='')
    {
      this.clienteService.read().subscribe(clientes => {
        this.clientes = clientes
      })
    }
    else{
      this.clienteService.buscar(this.busca).subscribe(clientes => {
        this.clientes = clientes
      })
    }

  
  } 
}
