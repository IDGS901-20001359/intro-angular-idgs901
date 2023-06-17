import { Component } from '@angular/core';

@Component({
    selector:'app-utl', //nombre de mi componente su alias
    template: `
        <form>
        <label for="">Nombre:</label>
        <input type="text" value="">
        <button class="btn btn-primary">Ingresa</button>
        </form>
        `
})

/* creamos clase */
export class utlComponent{
    constructor(){}
}