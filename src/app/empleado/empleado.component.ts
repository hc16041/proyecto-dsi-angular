import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  titulo: string = 'Lista de Empelados';
  empleados?: Empleado[];
  filterEmpleado = '';

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getAll().subscribe((e) => (this.empleados = e));
  }

  delete(empleado: Empleado): void {
    console.log('Hello from delete');
    this.empleadoService
      .delete(empleado.id)
      .subscribe((res) =>
        this.empleadoService
          .getAll()
          .subscribe((response) => (this.empleados = response))
      );
  }
}
