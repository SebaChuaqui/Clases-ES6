"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestos_cliente1 = new _impuestos["default"](950000, 200000); 
impuestos_cliente1.monto_bruto_anual = 810000;
impuestos_cliente1.deducciones = 220000; 

var cliente1 = new _cliente["default"]('Sebastián Albino', impuestos_cliente1); 
cliente1.nombre = 'Carolina Clara'; 


console.log("Nombre Cliente: ".concat(cliente1.nombre));
console.log("Monto bruto anual: ".concat(impuestos_cliente1.monto_bruto_anual));
console.log("Deducciones: ".concat(impuestos_cliente1.deducciones));  
console.log("Impuesto: ".concat(cliente1.calcularImpuesto(impuestos_cliente1.monto_bruto_anual, impuestos_cliente1.deducciones)));
