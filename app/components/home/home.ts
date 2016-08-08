import {Component} from "angular2/core";
import {Underline} from "../../directives/underline";

@Component({
    selector: "my-app",
    templateUrl: 'app/components/home/home.html',
    directives: [Underline]

})

export class HomePage {
	holaMundo: string;
	constructor(){
		this.holaMundo = 'Hola Mundo';
	}
}