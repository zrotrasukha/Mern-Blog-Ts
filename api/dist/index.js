"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://localhost:4000'], // Allow these origins
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express_1.default.json());
app.post('/register', (req, res) => {
    res.json({ msg: 'everything is okay!' });
});
app.listen(4000);
