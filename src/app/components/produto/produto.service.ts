import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "https://localhost:7221/Produtoes"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto);
  }

  read(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl);
  }

  readById(id: string): Observable<Produto> {
    const url = `${this.baseUrl}/Detalhes/${id}`;
    return this.http.get<Produto>(url);
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}`;
    return this.http.post<Produto>(url, produto);
  }

  delete(id: number): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Produto>(url);
  }

  buscar(busca: string): Observable<Produto[]> {
    const url = `${this.baseUrl}/Buscar/${busca}`;
    return this.http.get<Produto[]>(url);
  }
}
