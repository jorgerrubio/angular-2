import {Directive} from "angular2/core";

@Directive({
	selector: "[events-dir]",
	host: {
		"(mouseenter)": "onMouseEnter()",
		"(mouseleave)": "onMouseLeave()",
		"(click)": "onClick()"
	}
})

export class EventsDir {
	onMouseEnter(){
		console.log('Mouse Enter');
	}
	onMouseLeave(){
		console.log('Mouse Leave');
	}
	onClick(){
		console.log('click');
	}
}