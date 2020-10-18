"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.routes();
    }
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            res.send('Hi');
        });
    };
    return App;
}());
var port = 8000;
var app = new App().app;
app.listen(port, function () {
    console.log("Server berjalan di port " + port);
});
