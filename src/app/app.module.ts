import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';
import {MatCardModule} from'@angular/material/card';
import {MatButtonModule} from'@angular/material/button';
import {MatSnackBarModule} from'@angular/material/snack-bar';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}from '@angular/material/input';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { VendaCreateComponent } from './components/vendas/venda-create/venda-create.component';
import { VendaReadComponent } from './components/vendas/venda-read/venda-read.component';
import { VendaUpdateComponent } from './components/vendas/venda-update/venda-update.component';
import { VendasCrudComponent } from './views/vendas-crud/vendas-crud.component';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import {MatIconModule} from '@angular/material/icon'; 








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent, HomeComponent, ProdutoCrudComponent, ProdutoCreateComponent, ProdutoReadComponent,  ProdutoUpdateComponent, ClienteCrudComponent, ClienteCreateComponent, ClienteReadComponent,  ClienteUpdateComponent, VendasCrudComponent, VendaCreateComponent, VendaReadComponent,  VendaUpdateComponent, DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
