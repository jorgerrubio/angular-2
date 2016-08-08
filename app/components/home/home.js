System.register(["angular2/core", "../../pipes/joinpipe", "../../pipes/h1pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, joinpipe_1, h1pipe_1;
    var HomePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (joinpipe_1_1) {
                joinpipe_1 = joinpipe_1_1;
            },
            function (h1pipe_1_1) {
                h1pipe_1 = h1pipe_1_1;
            }],
        execute: function() {
            HomePage = (function () {
                function HomePage() {
                    this.h1text = "Hola mundo";
                    this.colors = ['rojo', 'amarillo', 'azul', 'naranja', 'verde', 'blanco'];
                }
                HomePage = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: 'app/components/home/home.html',
                        pipes: [joinpipe_1.JoinPipe, h1pipe_1.H1Pipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomePage);
                return HomePage;
            }());
            exports_1("HomePage", HomePage);
        }
    }
});
//# sourceMappingURL=home.js.map