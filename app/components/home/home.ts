import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    templateUrl: 'app/components/home/home.html'

})

export class HomePage {
	colors: Array<string>;
	h1text: string = "Hola mundo";
	constructor(){
		this.colors = ['rojo', 'amarillo', 'azul', 'naranja', 'verde', 'blanco'];
	}
}