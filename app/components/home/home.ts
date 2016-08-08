import {Component} from "angular2/core";
import {JoinPipe} from "../../pipes/joinpipe";

@Component({
    selector: "my-app",
    templateUrl: "app/components/home/home.html",
    pipes: [JoinPipe]

})

export class HomePage {
	colors: Array<string>;
	constructor(){
		this.colors = ['rojo', 'amarillo', 'azul', 'naranja', 'verde', 'blanco'];
	}
}