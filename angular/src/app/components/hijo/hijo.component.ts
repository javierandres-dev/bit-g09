import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  @Input() colorFavorito: string = '';

  @Output() agregarFrameworkEvento: EventEmitter<string> =
    new EventEmitter<string>();

  addFrameworkHijo() {
    this.agregarFrameworkEvento.emit('Angular');
  }
}
