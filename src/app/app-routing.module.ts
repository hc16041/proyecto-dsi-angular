import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormEmpleadoComponent } from './empleado/form-empleado.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { FormHabitacionComponent } from './habitacion/form-habitacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadoComponent },
  { path: 'empleados/form', component: FormEmpleadoComponent },
  { path: 'empleados/form/:id', component: FormEmpleadoComponent },
  { path: 'habitaciones', component: HabitacionComponent },
  { path: 'habitaciones/form', component: FormHabitacionComponent },
  { path: 'habitaciones/form/:id', component: FormHabitacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
