import { Routes } from '@angular/router';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { Perfil2fbComponent } from './perfil2fb/perfil2fb.component';

export const routes: Routes = [
  { path: 'form-dinamico', component: FormDinamicoComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'perfil2fb', component: Perfil2fbComponent },
  { path: '', redirectTo: 'form-dinamico', pathMatch: 'full' }, // Redirige por defecto a 'form-dinamico'
];
