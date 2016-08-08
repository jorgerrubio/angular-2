import {Component} from "angular2/core";
import {JoinPipe} from "../../pipes/joinpipe";
import {H1Pipe} from "../../pipes/h1pipe";

@Component({
    selector: "my-app",
    templateUrl: 'app/components/home/home.html',
    pipes: [JoinPipe, H1Pipe]

})

export class HomePage {
	colors: Array<string>;
	h1text: string = "Hola mundo";
	constructor(){
		this.colors = ['rojo', 'amarillo', 'azul', 'naranja', 'verde', 'blanco'];
	}
}