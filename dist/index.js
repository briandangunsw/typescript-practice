"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function hello() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'world';
    });
}
let lucky = [];
lucky = [23, 23];
let font;
font = 'bold';
const person = {
    first: 'Jeff',
    last: 'Delaney'
};
const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
};
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(5, 10);
const arr = [];
arr.push(1);
arr.push('23');
arr.push(false);
// Generics
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
