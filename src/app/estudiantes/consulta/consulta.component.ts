import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, AfterViewInit  {

  estudiantes: any[] = [];
  displayedColumns: string[] = ['nombre', 'apellidos', 'celular', 'correo', 'fechaCreacion'];
  dataSource = new MatTableDataSource<any>(this.estudiantes);
  
  constructor(
    private estudiantesService: EstudiantesService,
    public dialog: MatDialog
  ){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.estudiantesService.obtenerEstudiantes().subscribe(
      (response: any) => {
        this.estudiantes = response.data;
        this.dataSource = new MatTableDataSource<any>(this.estudiantes);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  abrirDialogoRegistro() {

    const dialogRef = this.dialog.open(RegistroComponent,{
      width: '500px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.estudiantesService.obtenerEstudiantes().subscribe(
        (response: any) => {
          this.estudiantes = response.data;
          this.dataSource = new MatTableDataSource<any>(this.estudiantes);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log(error);
        }
      );
      
    });

  }

}
