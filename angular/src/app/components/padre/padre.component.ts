import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  frameworks: string[] = [];

  agregarFramework(framework: string) {
    this.frameworks.push(framework);
  }
}
