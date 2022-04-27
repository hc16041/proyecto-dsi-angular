import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormEmpleadoComponent } from './empleado/form-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FormHabitacionComponent } from './habitacion/form-habitacion.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { CargoComponent } from './cargo/cargo.component';
import { FormDepartamentoComponent } from './departamento/form-departamento.component';
import { FormCargoComponent } from './cargo/form-cargo.component';
import { InicioComponent } from './inicio/inicio.component';
import { BusCargoPipe } from './pipes/bus-cargo.pipe';
import { BusHabitacionPipe } from './pipes/bus-habitacion.pipe';
import { BusDepartamentoPipe } from './pipes/bus-departamento.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    FormEmpleadoComponent,
    FilterPipe,
    FormHabitacionComponent,
    HabitacionComponent,
    DepartamentoComponent,
    CargoComponent,
    FormDepartamentoComponent,
    FormCargoComponent,
    InicioComponent,
    BusCargoPipe,
    BusHabitacionPipe,
    BusDepartamentoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
