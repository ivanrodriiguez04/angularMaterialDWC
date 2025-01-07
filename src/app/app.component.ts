import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, MaterialModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo-formulario';
  name = new FormControl('');
  apellido: string = '';

  updateName() {
    this.name.setValue('Nancy');
  }


}


