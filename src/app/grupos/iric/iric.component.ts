import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=70;
  imageMargin:number=10;
  muestraImg:boolean=true;
  listFilter:string=''

  showImage():void{
    //si esta en tru lo pone en false y si esta en false lo pone en true
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:IAlumnosIric[]=[
    {
      matricula:1234,
      nombre:'pedro',
      edad:23,
      correo:'pedro@gmail.com',
      foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg'
    },
    {
      matricula:12556,
      nombre:'paquita',
      edad:73,
      correo:'paquitaOficial@gmail.com',
      foto:'https://www.ellaeonline.com/__export/1680547947160/sites/ellaeonline/img/2023/04/03/portada_paquita_la_del_barrio_x1x.jpg_1491194311.jpg'
    },
    {
      matricula:13776,
      nombre:'Myley Cyrus ',
      edad:27,
      correo:'cyrusOficial@gmail.com',
      foto:'https://cdn.semana.es/wp-content/uploads/2021/10/miley-cyrus.jpg'
    },
  ]

}
