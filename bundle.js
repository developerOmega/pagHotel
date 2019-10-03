/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulo_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo/banner */ \"./src/modulo/banner.js\");\n/* harmony import */ var _modulo_eventos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulo/eventos */ \"./src/modulo/eventos.js\");\n/* harmony import */ var _modulo_botonReservacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulo/botonReservacion */ \"./src/modulo/botonReservacion.js\");\n/* harmony import */ var _modulo_validarReservacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulo/validarReservacion */ \"./src/modulo/validarReservacion.js\");\n/* harmony import */ var _modulo_clases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulo/clases */ \"./src/modulo/clases.js\");\n\n\n\n\n\n/*Variables de formularios*/\n\nvar formHab = document.getElementById('habitacion'),\n    formSalon = document.getElementById('salon'),\n    hiddenHab = document.getElementsByName('habitacion')[0],\n    hiddenSalon = document.getElementsByName('salon')[0];\n/*Slider*/\n\nvar intervalo = setInterval(_modulo_banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 10000);\n/*Salone de eventos*/\n\nObject(_modulo_eventos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/*Botones de reservaciones*/\n\nObject(_modulo_botonReservacion__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n/*Validacion de reservaciones*/\n\nObject(_modulo_validarReservacion__WEBPACK_IMPORTED_MODULE_3__[\"validarHab\"])();\nObject(_modulo_validarReservacion__WEBPACK_IMPORTED_MODULE_3__[\"validarSalon\"])();\nObject(_modulo_validarReservacion__WEBPACK_IMPORTED_MODULE_3__[\"validarReservacion\"])();\nObject(_modulo_validarReservacion__WEBPACK_IMPORTED_MODULE_3__[\"validarNumeroTelefono\"])();\n/*Clases*/\n\nvar huesped = new Array(),\n    salon = new Array();\nvar c = 0,\n    m = 0;\nformHab.aceptar.addEventListener(\"click\", function (e) {\n  huesped[c] = new _modulo_clases__WEBPACK_IMPORTED_MODULE_4__[\"Habitaciones\"](formHab.nombres.value, formHab.apellidos.value, formHab.llegada.value, formHab.salida.value, formHab.habitaciones.value, formHab.tipo.value, formHab.numeroMovil.value, formHab.numeroTelefono.value, formHab.email.value);\n  /*Validar Reservacion */\n\n  if (formHab.llegada.value > formHab.salida.value) {\n    e.preventDefault();\n  } else {\n    huesped[c].informacion();\n  }\n\n  c++;\n});\nformSalon.aceptar.addEventListener(\"click\", function (e) {\n  salon[m] = new _modulo_clases__WEBPACK_IMPORTED_MODULE_4__[\"Eventos\"](formSalon.nombres.value, formSalon.apellidos.value, formSalon.nombreSalon.value, formSalon.fecha.value, formSalon.iniciar.value, formSalon.final.value, formSalon.numeroMovil.value, formSalon.numeroTelefono.value, formSalon.correo.value);\n  /*Validar Reservacion */\n\n  if (formSalon.iniciar.value > formSalon.final.value) {\n    e.preventDefault();\n  } else {\n    salon[m].informacion();\n  }\n\n  m++;\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modulo/banner.js":
/*!******************************!*\
  !*** ./src/modulo/banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar banner = document.getElementById(\"banner\"),\n    i = 0;\n\nvar slider = function slider() {\n  if (i == 0) {\n    banner.className = 'contenedor banner1';\n  } else if (i == 1) {\n    banner.className = 'contenedor banner2';\n  } else if (i == 2) {\n    banner.className = 'contenedor banner3';\n  }\n\n  i++;\n\n  if (i == 3) {\n    i = 0;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack:///./src/modulo/banner.js?");

/***/ }),

/***/ "./src/modulo/botonReservacion.js":
/*!****************************************!*\
  !*** ./src/modulo/botonReservacion.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar botonReservacion = document.getElementById(\"reservacion-menu\"),\n    datosReservacion = document.getElementById(\"datos-reservacion\"),\n    infoReservacion = document.getElementById(\"info-reservacion\");\n\nvar botonesReservacion = function botonesReservacion() {\n  var _loop = function _loop(i) {\n    botonReservacion.children[i].addEventListener(\"click\", function () {\n      for (var c = 0; c < datosReservacion.children.length; c++) {\n        if (i == c) {\n          datosReservacion.children[c].className = 'block';\n          infoReservacion.children[c].className = 'block';\n        } else {\n          datosReservacion.children[c].className = 'none';\n          infoReservacion.children[c].className = 'none';\n        }\n      }\n    });\n  };\n\n  for (var i = 0; i < botonReservacion.children.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (botonesReservacion);\n\n//# sourceURL=webpack:///./src/modulo/botonReservacion.js?");

/***/ }),

/***/ "./src/modulo/clases.js":
/*!******************************!*\
  !*** ./src/modulo/clases.js ***!
  \******************************/
/*! exports provided: Habitaciones, Eventos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Habitaciones\", function() { return Habitaciones; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Eventos\", function() { return Eventos; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar formHabitacion = document.getElementsByName('habitacion')[0],\n    formSalon = document.getElementsByName('salon')[0],\n    baucherSalon = document.getElementById('baucherSalon'),\n    baucher = document.getElementById('baucher');\n\nvar Habitaciones =\n/*#__PURE__*/\nfunction () {\n  function Habitaciones(nombres, apellidos, llegada, salida, numeroHab, tipoHab, numeroMovil, numeroTelefono, correo) {\n    _classCallCheck(this, Habitaciones);\n\n    this.nombres = nombres, this.apellidos = apellidos, this.llegada = llegada, this.salida = salida, this.numeroHab = numeroHab, this.tipoHab = tipoHab, this.numeroMovil = numeroMovil, this.numeroTelefono = numeroTelefono, this.correo = correo;\n  }\n\n  _createClass(Habitaciones, [{\n    key: \"informacion\",\n    value: function informacion() {\n      /*crear nuevo arreglo de objetos*/\n      var pNuevo = new Array(7),\n          textoNuevo = new Array(7),\n\n      /*Variables para calculo de dias*/\n      totalLlegada = parseInt(this.llegada[8] + this.llegada[9]),\n          totalSalida = parseInt(this.salida[8] + this.salida[9]),\n          totalDias = parseInt(totalSalida) - parseInt(totalLlegada);\n      /*crear objetos de p*/\n\n      for (var i = 0; i < pNuevo.length; i++) {\n        pNuevo[i] = document.createElement('p');\n      }\n      /*Crear texto*/\n\n\n      textoNuevo[0] = document.createTextNode(\"\".concat(this.nombres, \" \").concat(this.apellidos)), textoNuevo[1] = document.createTextNode(this.llegada), textoNuevo[2] = document.createTextNode(this.salida), textoNuevo[3] = document.createTextNode(totalDias), textoNuevo[4] = document.createTextNode(this.numeroHab), textoNuevo[5] = document.createTextNode(this.tipoHab);\n      /*Total de reservacion*/\n\n      var total = 0;\n      if (this.tipoHab == 'Sencilla') total = 700 * parseInt(this.numeroHab) * totalDias;else if (this.tipoHab == 'Doble') total = 900 * parseInt(this.numeroHab) * totalDias;\n      textoNuevo[6] = document.createTextNode(\"$ \".concat(total));\n      /*Unir Objetos*/\n\n      for (var _i = 0; _i < pNuevo.length; _i++) {\n        pNuevo[_i].appendChild(textoNuevo[_i]);\n      }\n      /*Remplazar objetos*/\n\n\n      for (var _i2 = 0; _i2 < baucher.children.length; _i2++) {\n        baucher.children[_i2].replaceChild(pNuevo[_i2], baucher.children[_i2].children[1]);\n      }\n      /*Atributos a inputs*/\n\n\n      formHabitacion.nombre.setAttribute(\"value\", \"\".concat(this.nombres, \" \").concat(this.apellidos));\n      formHabitacion.llegada.setAttribute(\"value\", this.llegada);\n      formHabitacion.salida.setAttribute(\"value\", this.salida);\n      formHabitacion.dias.setAttribute(\"value\", totalDias);\n      formHabitacion.habitaciones.setAttribute(\"value\", this.numeroHab);\n      formHabitacion.tipo.setAttribute(\"value\", this.tipoHab);\n      formHabitacion.movil.setAttribute(\"value\", this.numeroMovil);\n      formHabitacion.telefono.setAttribute(\"value\", this.numeroTelefono);\n      formHabitacion.correo.setAttribute(\"value\", this.correo);\n      formHabitacion.total.setAttribute(\"value\", total);\n    }\n  }]);\n\n  return Habitaciones;\n}();\n\nvar Eventos =\n/*#__PURE__*/\nfunction (_Habitaciones) {\n  _inherits(Eventos, _Habitaciones);\n\n  function Eventos(nombres, apellidos, salon, fecha, llegada, salida, numeroMovil, numeroTelefono, correo) {\n    var _this;\n\n    _classCallCheck(this, Eventos);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Eventos).call(this, nombres, apellidos, llegada, salida, numeroMovil, numeroTelefono, correo));\n    _this.salon = salon, _this.fecha = fecha;\n    return _this;\n  }\n\n  _createClass(Eventos, [{\n    key: \"informacion\",\n    value: function informacion() {\n      /*crear objetos*/\n      var pNuevo = new Array(6),\n          textoNuevo = new Array(6),\n\n      /*Variables para calculo de dias*/\n      totalLlegada = parseFloat(this.llegada),\n          totalSalida = parseFloat(this.salida),\n          totalHoras = totalSalida - totalLlegada;\n      /*Crear objetos de p*/\n\n      for (var i = 0; i < pNuevo.length; i++) {\n        pNuevo[i] = document.createElement('p');\n      }\n      /*Crear texto*/\n\n\n      textoNuevo[0] = document.createTextNode(\"\".concat(this.nombres, \" \").concat(this.apellidos)), textoNuevo[1] = document.createTextNode(this.salon), textoNuevo[2] = document.createTextNode(this.fecha), textoNuevo[3] = document.createTextNode(this.llegada), textoNuevo[4] = document.createTextNode(this.salida);\n      /*Total de reservacion*/\n\n      var total = 0;\n      if (this.salon == 'Salon 1') total = 500 * totalHoras;else if (this.salon == 'Salon 2') total = 250 * totalHoras;else if (this.salon == 'Salon3 ') total = 100 * totalHoras;\n      textoNuevo[5] = document.createTextNode(\"$ \".concat(total));\n      /*Unir Objetos*/\n\n      for (var _i3 = 0; _i3 < pNuevo.length; _i3++) {\n        pNuevo[_i3].appendChild(textoNuevo[_i3]);\n      }\n      /*Remplazar objetos*/\n\n\n      for (var _i4 = 0; _i4 < baucherSalon.children.length; _i4++) {\n        baucherSalon.children[_i4].replaceChild(pNuevo[_i4], baucherSalon.children[_i4].children[1]);\n      }\n      /*Atributos a inputs*/\n\n\n      formSalon.nombre.setAttribute(\"value\", \"\".concat(this.nombres, \" \").concat(this.apellidos));\n      formSalon.salon.setAttribute(\"value\", this.salon);\n      formSalon.fecha.setAttribute(\"value\", this.fecha);\n      formSalon.entrada.setAttribute(\"value\", this.llegada);\n      formSalon.salida.setAttribute(\"value\", this.salida);\n      formSalon.movil.setAttribute(\"value\", this.numeroMovil);\n      formSalon.telefono.setAttribute(\"value\", this.numeroTelefono);\n      formSalon.correo.setAttribute(\"value\", this.correo);\n      formSalon.total.setAttribute(\"value\", total);\n    }\n  }]);\n\n  return Eventos;\n}(Habitaciones);\n\n\n\n//# sourceURL=webpack:///./src/modulo/clases.js?");

/***/ }),

/***/ "./src/modulo/eventos.js":
/*!*******************************!*\
  !*** ./src/modulo/eventos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar salones = document.getElementById('salones'),\n    infoEventos = document.getElementById('info-eventos');\n\nvar evento = function evento() {\n  var _loop = function _loop(c) {\n    salones.children[c].addEventListener(\"click\", function () {\n      for (var i = 0; i < infoEventos.children.length; i++) {\n        if (i == c) {\n          infoEventos.children[i].className = \"block\";\n        } else {\n          infoEventos.children[i].className = \"none\";\n        }\n      }\n\n      infoEventos.className = \"info-eventos evento\".concat(parseInt(c) + 1, \"-1\");\n    });\n\n    var _loop2 = function _loop2(i) {\n      infoEventos.children[c].children[0].children[i].addEventListener(\"click\", function () {\n        infoEventos.className = \"info-eventos evento\".concat(parseInt(c) + 1, \"-\").concat(parseInt(i) + 1);\n      });\n    };\n\n    for (var i = 0; i < infoEventos.children[c].children[0].children.length; i++) {\n      _loop2(i);\n    }\n  };\n\n  for (var c = 0; c < salones.children.length; c++) {\n    _loop(c);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (evento);\n\n//# sourceURL=webpack:///./src/modulo/eventos.js?");

/***/ }),

/***/ "./src/modulo/validarReservacion.js":
/*!******************************************!*\
  !*** ./src/modulo/validarReservacion.js ***!
  \******************************************/
/*! exports provided: validarHab, validarSalon, validarReservacion, validarNumeroTelefono */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validarHab\", function() { return validarHab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validarSalon\", function() { return validarSalon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validarReservacion\", function() { return validarReservacion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validarNumeroTelefono\", function() { return validarNumeroTelefono; });\nvar formSalon = document.getElementById(\"salon\"),\n    formHab = document.getElementById(\"habitacion\"),\n    hiddenHab = document.getElementsByName('habitacion')[0],\n    hiddenSalon = document.getElementsByName('salon')[0];\n;\n\nvar validarHab = function validarHab() {\n  /*Validar inputs text*/\n  var validarHabTexto = function validarHabTexto(e) {\n    if (formHab.nombres.value == 0 || formHab.apellidos.value == 0 || formHab.numeroMovil.value == 0 || formHab.numeroTelefono.value == 0) {\n      formHab.nombres.className = \"vacio\";\n      formHab.apellidos.className = \"vacio\";\n      formHab.numeroMovil.className = \"vacio\";\n      formHab.numeroTelefono.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formHab.nombres.className = \"\";\n      formHab.apellidos.className = \"\";\n      formHab.numeroMovil.className = \"\";\n      formHab.numeroTelefono.className = \"\";\n    }\n  };\n  /*Validar fecha*/\n\n\n  var validarHabFecha = function validarHabFecha(e) {\n    if (formHab.llegada.value == 0 || formHab.salida.value == 0 || formHab.llegada.value > formHab.salida.value) {\n      formHab.llegada.className = \"vacio\";\n      formHab.salida.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formHab.llegada.className = \"\";\n      formHab.salida.className = \"\";\n    }\n  };\n  /*Validar numero*/\n\n\n  var validarHabNumero = function validarHabNumero(e) {\n    if (formHab.habitaciones.value <= 0) {\n      formHab.habitaciones.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formHab.habitaciones.className = \"\";\n    }\n  };\n  /*Validar tipo de habitacion*/\n\n\n  var validarHabTipo = function validarHabTipo(e) {\n    var opcionesHab = document.getElementById(\"opciones-habitacion\");\n\n    if (formHab.tipo.value != opcionesHab.children[0].value && formHab.tipo.value != opcionesHab.children[1].value) {\n      formHab.tipo.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formHab.tipo.className = \"\";\n    }\n  };\n  /*Validar Correo*/\n\n\n  var validarHabCorreo = function validarHabCorreo(e) {\n    if (formHab.email.value == 0) {\n      formHab.email.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formHab.email.className = \"\";\n    }\n  };\n  /*Validar formulario de habitacion*/\n\n\n  var validarFormHab = function validarFormHab(e) {\n    validarHabTexto(e);\n    validarHabFecha(e);\n    validarHabNumero(e);\n    validarHabNumero(e);\n    validarHabTipo(e);\n    validarHabCorreo(e);\n  };\n\n  formHab.aceptar.addEventListener(\"click\", validarFormHab);\n};\n\nvar validarSalon = function validarSalon() {\n  /*validar inputs text*/\n  var validarSalonTexto = function validarSalonTexto(e) {\n    if (formSalon.nombres.value == 0 || formSalon.apellidos.value == 0 || formSalon.numeroMovil.value == 0 || formSalon.numeroTelefono.value == 0) {\n      formSalon.nombres.className = \"vacio\";\n      formSalon.apellidos.className = \"vacio\";\n      formSalon.numeroMovil.className = \"vacio\";\n      formSalon.numeroTelefono.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formSalon.nombres.className = \"\";\n      formSalon.apellidos.className = \"\";\n      formSalon.numeroMovil.className = \"\";\n      formSalon.numeroTelefono.className = \"\";\n    }\n  };\n  /*validar Fecha*/\n\n\n  var validarSalonFecha = function validarSalonFecha(e) {\n    if (formSalon.fecha.value == 0) {\n      formSalon.fecha.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formSalon.fecha.className = \"\";\n    }\n  };\n  /*Validar Hora*/\n\n\n  var validarSalonHora = function validarSalonHora(e) {\n    if (formSalon.iniciar.value == 0 || formSalon.final.value == 0 || formSalon.iniciar.value >= formSalon.final.value) {\n      formSalon.iniciar.className = \"vacio\";\n      formSalon.final.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formSalon.iniciar.className = \"\";\n      formSalon.final.className = \"\";\n    }\n  };\n  /*Validar correo*/\n\n\n  var validarSalonCorreo = function validarSalonCorreo(e) {\n    if (formSalon.correo.value == 0) {\n      formSalon.correo.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formSalon.correo.className = \"\";\n    }\n  };\n  /*Validar Nombre de salon*/\n\n\n  var opcionesSalon = document.getElementById(\"opciones-salon\");\n\n  var validarSalonTipo = function validarSalonTipo(e) {\n    if (formSalon.nombreSalon.value != 'Salon 1' && formSalon.nombreSalon.value != 'Salon 2' && formSalon.nombreSalon.value != 'Salon 3') {\n      formSalon.nombreSalon.className = \"vacio\";\n      e.preventDefault();\n    } else {\n      formSalon.nombreSalon.className = \"\";\n    }\n  };\n  /*Validar formulario salon*/\n\n\n  var validarFormSalon = function validarFormSalon(e) {\n    validarSalonTexto(e);\n    validarSalonFecha(e);\n    validarSalonHora(e);\n    validarSalonTipo(e);\n    validarSalonCorreo(e);\n  };\n\n  formSalon.aceptar.addEventListener(\"click\", validarFormSalon);\n};\n\nvar validarReservacion = function validarReservacion() {\n  hiddenHab.reservar.addEventListener(\"click\", function (e) {\n    for (var i = 0; i < hiddenHab.children[2].children.length; i++) {\n      if (hiddenHab.children[2].children[i].value == 0) {\n        e.preventDefault();\n      }\n    }\n  });\n  hiddenSalon.reservar.addEventListener(\"click\", function (e) {\n    for (var i = 0; i < hiddenSalon.children[2].children.length; i++) {\n      if (hiddenSalon.children[2].children[i].value == 0) {\n        e.preventDefault();\n      }\n    }\n  });\n};\n\nvar validarNumeroTelefono = function validarNumeroTelefono() {\n  formHab.numeroMovil.addEventListener(\"keypress\", function (e) {\n    var key = window.event ? e.which : e.keyCode;\n\n    if (key < 48 || key > 57) {\n      e.preventDefault();\n    }\n  }, false);\n  formHab.numeroTelefono.addEventListener(\"keypress\", function (e) {\n    var key = window.event ? e.which : e.keyCode;\n\n    if (key < 48 || key > 57) {\n      e.preventDefault();\n    }\n  }, false);\n  formSalon.numeroMovil.addEventListener(\"keypress\", function (e) {\n    var key = window.event ? e.which : e.keyCode;\n\n    if (key < 48 || key > 57) {\n      e.preventDefault();\n    }\n  }, false);\n  formSalon.numeroTelefono.addEventListener(\"keypress\", function (e) {\n    var key = window.event ? e.which : e.keyCode;\n\n    if (key < 48 || key > 57) {\n      e.preventDefault();\n    }\n  }, false);\n};\n\n\n\n//# sourceURL=webpack:///./src/modulo/validarReservacion.js?");

/***/ })

/******/ });