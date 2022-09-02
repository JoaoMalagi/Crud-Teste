import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Venda } from './venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  baseUrl = "https://localhost:7221/Vendas"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(venda: Venda): Observable<Venda> {
    return this.http.post<Venda>(this.baseUrl, venda);
  }

  read(): Observable<Venda[]>{
    return this.http.get<Venda[]>(this.baseUrl);
  }

  readById(id: string): Observable<Venda> {
    const url = `${this.baseUrl}/Detalhes/${id}`;
    return this.http.get<Venda>(url);
  }

  update(venda: Venda): Observable<Venda> {
    const url = `${this.baseUrl}`;
    return this.http.post<Venda>(url, venda);
  }

  delete(id: number): Observable<Venda> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Venda>(url);
  }
  buscar(busca: string): Observable<Venda[]> {
    const url = `${this.baseUrl}/Buscar/${busca}`;
    return this.http.get<Venda[]>(url);
  }
}
