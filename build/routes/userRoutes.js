"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRoutes.prototype.routes = function () {
        this.router.route('/').get(UserController_1.default.all);
        this.router.route('/').post(UserController_1.default.add);
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
