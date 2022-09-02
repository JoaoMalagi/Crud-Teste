import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { VendaCreateComponent } from './components/vendas/venda-create/venda-create.component';
import { VendaUpdateComponent } from './components/vendas/venda-update/venda-update.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';

import {HomeComponent}from './views/home/home.component';
import {ProdutoCrudComponent} from './views/produto-crud/produto-crud.component';
import { VendasCrudComponent } from './views/vendas-crud/vendas-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
},
{
  path: "produtos",
  component: ProdutoCrudComponent,
},
{
  path: "produtos/create",
  component: ProdutoCreateComponent
},
{
  path: "produtos/update/:id",
  component: ProdutoUpdateComponent
},
{
  path: "vendas",
  component: VendasCrudComponent,
},
{
  path: "vendas/create",
  component: VendaCreateComponent
},
{
  path: "vendas/update/:id",
  component: VendaUpdateComponent
},
{
  path: "clientes",
  component: ClienteCrudComponent,
},
{
  path: "clientes/create",
  component: ClienteCreateComponent
},
{
  path: "clientes/update/:id",
  component: ClienteUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
