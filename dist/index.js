"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
const index_1 = __importDefault(require("./routes/index"));
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false,
}));
app.use(index_1.default);
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
