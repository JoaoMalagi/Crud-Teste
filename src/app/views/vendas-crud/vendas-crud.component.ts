import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendas-crud',
  templateUrl: './vendas-crud.component.html',
  styleUrls: ['./vendas-crud.component.css']
})
export class VendasCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToVendaCreate() : void{
    this.router.navigate(['/vendas/create'])
  }
}
