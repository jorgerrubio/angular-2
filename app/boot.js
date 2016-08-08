System.register(["angular2/platform/browser", "./components/home/home", "./pipes/joinpipe", "./pipes/h1pipe", "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, home_1, joinpipe_1, h1pipe_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (joinpipe_1_1) {
                joinpipe_1 = joinpipe_1_1;
            },
            function (h1pipe_1_1) {
                h1pipe_1 = h1pipe_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_1.HomePage, [core_1.provide(core_1.PLATFORM_PIPES, { useValue: [joinpipe_1.JoinPipe, h1pipe_1.H1Pipe], multi: true })]);
        }
    }
});
//# sourceMappingURL=boot.js.map