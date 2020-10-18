"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.all = function (req, res) {
        return res.send('hi');
    };
    UserController.prototype.add = function (req, res) {
        return res.send(req.body);
    };
    UserController.prototype.byId = function (req, res) {
        return res.send('hi');
    };
    UserController.prototype.update = function (req, res) {
        return res.send('hi');
    };
    UserController.prototype.delete = function (req, res) {
        return res.send('hi');
    };
    return UserController;
}());
exports.default = new UserController();
