import {bootstrap} from "angular2/platform/browser";
import {HomePage} from "./components/home/home";
import {JoinPipe} from "./pipes/joinpipe";
import {H1Pipe} from "./pipes/h1pipe";
import {PLATFORM_PIPES, provide} from "angular2/core";

bootstrap(
	HomePage,
	[provide(PLATFORM_PIPES, {useValue: [JoinPipe, H1Pipe], multi: true})]
);
