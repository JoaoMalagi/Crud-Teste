import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-update',
  templateUrl: './venda-update.component.html',
  styleUrls: ['./venda-update.component.css']
})
export class VendaUpdateComponent implements OnInit {

  venda: Venda = {
    qtdVenda:  0,
    vlrUnitarioVenda: 0
  }

  constructor(private vendaService: VendaService, private router: Router, private route: ActivatedRoute) { }

 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vendaService.readById(id).subscribe(venda => {
      this.venda = venda
      console.log(venda);
  });
  }

  updateVenda(): void {
    this.vendaService.update(this.venda).subscribe(() => {
      this.vendaService.showMessage('Produto foi alterado')
      this.router.navigate(['/vendas']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/vendas']);
  }

}
