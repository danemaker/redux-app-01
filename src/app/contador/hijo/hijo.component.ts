import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { dividir, multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  contador: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
    .select('contador')
    .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    /*     this.contador *= 2;
    this.cambioContador.emit(this.contador); */
    this.store.dispatch(multiplicar({numero: 2}));
  }

  dividir() {
    /*     this.contador /= 2;
    this.cambioContador.emit(this.contador); */
    this.store.dispatch(dividir({numero: 2}));
  }
}
