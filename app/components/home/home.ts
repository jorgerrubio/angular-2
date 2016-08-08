import {Component} from "angular2/core";
import {EventsDir} from "../../directives/event";

@Component({
    selector: "my-app",
    templateUrl: 'app/components/home/home.html',
    directives: [EventsDir]

})

export class HomePage {
	holaMundo: string;
	constructor(){
		this.holaMundo = 'Hola Mundo';
	}
}