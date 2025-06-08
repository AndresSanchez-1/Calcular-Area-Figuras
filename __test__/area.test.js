//.spec.js

const request=require('supertest');
const app=require('../app');

const { FigiraService, default: FiguraService }= require('../models/FiguraService');

describe ('Area figuras geometricas (modelo)', ()=>{
    test('Triangulo: base=4 altura=6 =>area=24', () => { expect(FiguraService.CalcularAreaTriangulo(4,6)).tobe(24); })
    })