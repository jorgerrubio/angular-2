import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    // template: "<h1>Hola Mundo</h1>" // una sola linea
    // multilinea
    /*template: `<h1>Hola Mundo</h1>
    <p>texto 1</p>
    <p>texto 2</p>
    <p>texto 3</p>`*/
    templateUrl: 'app/components/app.html'

})

export class AppComponent {
	holaMundo: string;
	texto1: string;
	texto2: string;
	constructor(){
		this.holaMundo = 'Hola Mundo';
		this.texto1 = 'Parrafo 1';
		this.texto2 = 'Parrafo 2';
	}
}