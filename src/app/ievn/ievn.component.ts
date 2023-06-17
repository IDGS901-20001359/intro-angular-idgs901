import { Component } from '@angular/core';

@Component({
    selector:'app-ievn', //nombre de mi componente su alias
    template: `
        <form>
        <div>
        <b>Matricula: </b>{{alumno.matricula}}
        </div>
        <div>
        <b>Nombre:</b> {{alumno.nombre|uppercase}}
        </div>
        <div>
        <b>  Edad: </b>{{alumno.edad}}
        </div>
        </form>
        `
})

/* creamos clase */
export class ievnComponent{
    alumno= {
        matricula:200134,
        nombre:'paulina',
        edad:21,
        fechaNacimiento: new Date()
      };
}