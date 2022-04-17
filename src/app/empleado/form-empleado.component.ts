import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import { Cargo } from './cargo';
import { Departamento } from './departamento';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css'],
})
export class FormEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();
  cargo?: Cargo[];
  departamento?: Departamento[];

  titulo: string = 'Registro de Empleado';

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargar();
    this.cargos();
    this.departamentos();
  }

  cargar(): void {
    this.activateRoute.params.subscribe((e) => {
      let id = e['id'];
      if (id) {
        this.empleadoService
          .get(id)
          .subscribe((es) => ((this.empleado = es), console.log(es)));
      }
    });
  }

  create(): void {
    this.empleadoService
      .create(this.empleado)
      .subscribe((res) => this.router.navigate(['/empleados']));
  }

  update(): void {
    this.empleadoService
      .update(this.empleado)
      .subscribe((res) => this.router.navigate(['/empleados']));
  }

  cargos(): void {
    this.empleadoService.getCargos().subscribe((c) => (this.cargo = c));
  }

  changeCargo(e: any) {
    console.log(e.target.value);
  }

  departamentos(): void {
    this.empleadoService
      .getDepartamentos()
      .subscribe((d) => (this.departamento = d));
  }
}
