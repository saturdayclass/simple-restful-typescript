"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRoutes.prototype.routes = function () {
        this.router.route('/').get(function (req, res) {
            res.send('hi');
        });
        this.router.route('/').post(function (req, res) {
            res.send(req.body);
            console.log(req.body);
        });
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
