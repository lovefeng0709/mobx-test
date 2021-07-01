/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mobx/dist/mobx.esm.js":
/*!********************************************!*\
  !*** ./node_modules/mobx/dist/mobx.esm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$mobx": () => (/* binding */ $mobx),
/* harmony export */   "FlowCancellationError": () => (/* binding */ FlowCancellationError),
/* harmony export */   "ObservableMap": () => (/* binding */ ObservableMap),
/* harmony export */   "ObservableSet": () => (/* binding */ ObservableSet),
/* harmony export */   "Reaction": () => (/* binding */ Reaction),
/* harmony export */   "_allowStateChanges": () => (/* binding */ allowStateChanges),
/* harmony export */   "_allowStateChangesInsideComputed": () => (/* binding */ runInAction),
/* harmony export */   "_allowStateReadsEnd": () => (/* binding */ allowStateReadsEnd),
/* harmony export */   "_allowStateReadsStart": () => (/* binding */ allowStateReadsStart),
/* harmony export */   "_autoAction": () => (/* binding */ autoAction),
/* harmony export */   "_endAction": () => (/* binding */ _endAction),
/* harmony export */   "_getAdministration": () => (/* binding */ getAdministration),
/* harmony export */   "_getGlobalState": () => (/* binding */ getGlobalState),
/* harmony export */   "_interceptReads": () => (/* binding */ interceptReads),
/* harmony export */   "_isComputingDerivation": () => (/* binding */ isComputingDerivation),
/* harmony export */   "_resetGlobalState": () => (/* binding */ resetGlobalState),
/* harmony export */   "_startAction": () => (/* binding */ _startAction),
/* harmony export */   "action": () => (/* binding */ action),
/* harmony export */   "autorun": () => (/* binding */ autorun),
/* harmony export */   "comparer": () => (/* binding */ comparer),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "configure": () => (/* binding */ configure),
/* harmony export */   "createAtom": () => (/* binding */ createAtom),
/* harmony export */   "defineProperty": () => (/* binding */ apiDefineProperty),
/* harmony export */   "entries": () => (/* binding */ entries),
/* harmony export */   "extendObservable": () => (/* binding */ extendObservable),
/* harmony export */   "flow": () => (/* binding */ flow),
/* harmony export */   "flowResult": () => (/* binding */ flowResult),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getAtom": () => (/* binding */ getAtom),
/* harmony export */   "getDebugName": () => (/* binding */ getDebugName),
/* harmony export */   "getDependencyTree": () => (/* binding */ getDependencyTree),
/* harmony export */   "getObserverTree": () => (/* binding */ getObserverTree),
/* harmony export */   "has": () => (/* binding */ has),
/* harmony export */   "intercept": () => (/* binding */ intercept),
/* harmony export */   "isAction": () => (/* binding */ isAction),
/* harmony export */   "isBoxedObservable": () => (/* binding */ isObservableValue),
/* harmony export */   "isComputed": () => (/* binding */ isComputed),
/* harmony export */   "isComputedProp": () => (/* binding */ isComputedProp),
/* harmony export */   "isFlow": () => (/* binding */ isFlow),
/* harmony export */   "isFlowCancellationError": () => (/* binding */ isFlowCancellationError),
/* harmony export */   "isObservable": () => (/* binding */ isObservable),
/* harmony export */   "isObservableArray": () => (/* binding */ isObservableArray),
/* harmony export */   "isObservableMap": () => (/* binding */ isObservableMap),
/* harmony export */   "isObservableObject": () => (/* binding */ isObservableObject),
/* harmony export */   "isObservableProp": () => (/* binding */ isObservableProp),
/* harmony export */   "isObservableSet": () => (/* binding */ isObservableSet),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "makeAutoObservable": () => (/* binding */ makeAutoObservable),
/* harmony export */   "makeObservable": () => (/* binding */ makeObservable),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "observe": () => (/* binding */ observe),
/* harmony export */   "onBecomeObserved": () => (/* binding */ onBecomeObserved),
/* harmony export */   "onBecomeUnobserved": () => (/* binding */ onBecomeUnobserved),
/* harmony export */   "onReactionError": () => (/* binding */ onReactionError),
/* harmony export */   "override": () => (/* binding */ override),
/* harmony export */   "ownKeys": () => (/* binding */ apiOwnKeys),
/* harmony export */   "reaction": () => (/* binding */ reaction),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "runInAction": () => (/* binding */ runInAction),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "spy": () => (/* binding */ spy),
/* harmony export */   "toJS": () => (/* binding */ toJS),
/* harmony export */   "trace": () => (/* binding */ trace),
/* harmony export */   "transaction": () => (/* binding */ transaction),
/* harmony export */   "untracked": () => (/* binding */ untracked),
/* harmony export */   "values": () => (/* binding */ values),
/* harmony export */   "when": () => (/* binding */ when)
/* harmony export */ });
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(annotationType, key) {
    return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
  },

  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
};
var errors =  true ? niceErrors : 0;
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }

  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }

  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof __webpack_require__.g !== "undefined") {
    return __webpack_require__.g;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die( true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : 0);
  }
}
function warnAboutProxyRequirement(msg) {
  if ( true && globalState.verifyProxies) {
    die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
  }
}
function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */

function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;

  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }

  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  var _proto$constructor;

  if (!isObject(value)) return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null) return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
} // https://stackoverflow.com/a/37865170

function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) return false;
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own enumerable keys and symbols.
 */

function getPlainObjectKeys(object) {
  var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

  if (!hasGetOwnPropertySymbols) return keys;
  var symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) return keys;
  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string") return key;
  if (typeof key === "symbol") return key.toString();
  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
/**
 * Creates a function that acts as
 * - decorator
 * - annotation object
 */

function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    storeAnnotation(target, property, annotation);
  }

  return Object.assign(decorator, annotation);
}
/**
 * Stores annotation to prototype,
 * so it can be inspected later by `makeObservable` called from constructor
 */

function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  } // @override must override something


  if ( true && isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
  } // Cannot re-decorate


  assertNotDecorated(prototype, annotation, key); // Ignore override

  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}

function assertNotDecorated(prototype, annotation, key) {
  if ( true && !isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overriden by subclass.");
  }
}
/**
 * Collects annotations from prototypes and stores them on target (instance)
 */


function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    if ( true && !target[storedAnnotationsSymbol]) {
      die("No annotations were passed to makeObservable, but no decorated members have been found either");
    } // We need a copy as we will remove annotation from the list once it's applied.


    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }

  return target[storedAnnotationsSymbol];
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
var Atom = /*#__PURE__*/function () {
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ =  true ? "Atom@" + getNextId() : 0;
    }

    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  } // onBecomeObservedListeners


  var _proto = Atom.prototype;

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  ;

  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  ;

  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  _proto.toString = function toString() {
    return this.name_;
  };

  return Atom;
}();
var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  return Object.is(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });

  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }

  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  if (true) die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if ( true && isObservable(v)) die("observable.struct should not be used with observable values");
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

var OVERRIDE = "override";
var override = /*#__PURE__*/createDecoratorAnnotation({
  annotationType_: OVERRIDE,
  make_: make_,
  extend_: extend_
});
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}

function make_(adm, key) {
  // Must not be plain object
  if ( true && adm.isPlainObject_) {
    die("Cannot apply '" + this.annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + this.annotationType_ + "' cannot be used on plain objects."));
  } // Must override something


  if ( true && !hasProp(adm.appliedAnnotations_, key)) {
    die("'" + adm.name_ + "." + key.toString() + "' is annotated with '" + this.annotationType_ + "', " + "but no such annotated member was found on prototype.");
  }

  return 0
  /* Cancel */
  ;
}

function extend_(adm, key, descriptor, proxyTrap) {
  die("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}

function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1
  };
}

function make_$1(adm, key, descriptor, source) {
  var _this$options_;

  // bound
  if ((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 1
    /* Break */
    ;
  } // own


  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype


  if (isAction(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}

function assertActionDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if ( true && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
  }
}

function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3;

  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;

  if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
    var _adm$proxy_;

    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return {
    value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2
  };
}

function make_$2(adm, key, descriptor, source) {
  var _this$options_;

  // own
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype
  // bound - must annotate protos to support super.flow()


  if (((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) && !isFlow(adm.target_[key])) {
    if (this.extend_(adm, key, descriptor, false) === null) return 0
    /* Cancel */
    ;
  }

  if (isFlow(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}

function assertFlowDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if ( true && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
  }
}

function createFlowDescriptor(adm, annotation, key, descriptor, bound, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;

  if (bound) {
    var _adm$proxy_;

    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return {
    value: flow(value),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3
  };
}

function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}

function assertComputedDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get = _ref2.get;

  if ( true && !get) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
  }
}

function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4
  };
}

function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;

  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}

function assertObservableDescriptor(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;

  if ( true && !("value" in descriptor)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
  }
}

var AUTO = "true";
var autoAnnotation = /*#__PURE__*/createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5
  };
}

function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;

  // getter -> computed
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.make_
    var set = createAction(key.toString(), descriptor.set); // own

    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set
      }) === null ? 0
      /* Cancel */
      : 2
      /* Continue */
      ;
    } // proto


    defineProperty(source, key, {
      configurable: true,
      set: set
    });
    return 2
    /* Continue */
    ;
  } // function on proto -> autoAction/flow


  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;

    if (isGenerator(descriptor.value)) {
      var _this$options_;

      var flowAnnotation = ((_this$options_ = this.options_) == null ? void 0 : _this$options_.autoBind) ? flow.bound : flow;
      return flowAnnotation.make_(adm, key, descriptor, source);
    }

    var actionAnnotation = ((_this$options_2 = this.options_) == null ? void 0 : _this$options_2.autoBind) ? autoAction.bound : autoAction;
    return actionAnnotation.make_(adm, key, descriptor, source);
  } // other -> observable
  // Copy props from proto as well, see test:
  // "decorate should work with Object.create"


  var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable; // if function respect autoBind option

  if (typeof descriptor.value === "function" && ((_this$options_4 = this.options_) == null ? void 0 : _this$options_4.autoBind)) {
    var _adm$proxy_;

    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return observableAnnotation.make_(adm, key, descriptor, source);
}

function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;

  // getter -> computed
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.extend_
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  } // other -> observable
  // if function respect autoBind option


  if (typeof descriptor.value === "function" && ((_this$options_5 = this.options_) == null ? void 0 : _this$options_5.autoBind)) {
    var _adm$proxy_2;

    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }

  var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
}

// in the majority of cases

var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /*#__PURE__*/createObservableAnnotation("observable");
var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation("observable.ref", {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation("observable.shallow", {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation("observable.struct", {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;

  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;

  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  } // already observable - ignore


  if (isObservable(v)) return v; // plain object

  if (isPlainObject(v)) return observable.object(v, arg2, arg3); // Array

  if (Array.isArray(v)) return observable.array(v, arg2); // Map

  if (isES6Map(v)) return observable.map(v, arg2); // Set

  if (isES6Set(v)) return observable.set(v, arg2); // other object - ignore

  if (typeof v === "object" && v !== null) return v; // anything else

  return observable.box(v, arg2);
}

Object.assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
  },
  ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
  shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
}; // eslint-disable-next-line

var observable = /*#__PURE__*/assign(createObservable, observableFactories);

var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2) {
  if (isStringish(arg2)) {
    // @computed
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }

  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  } // computed(expr, options?)


  if (true) {
    if (!isFunction(arg1)) die("First argument to `computed` should be an expression.");
    if (isFunction(arg2)) die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
  }

  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  /* for generated name */

  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

var _getDescriptor$config, _getDescriptor;
// mobx versions

var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }

  if (true) {
    if (!isFunction(fn)) die("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) die("actions should have valid names, got: '" + actionName + "'");
  }

  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }

  res.isMobxAction = true;

  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }

  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
  var notifySpy_ =  true && isSpyEnabled() && !!actionName;
  var startTime_ = 0;

  if ( true && notifySpy_) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }

  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }

  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }

  currentActionId = runInfo.parentActionId_;

  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);

  if ( true && runInfo.notifySpy_) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }

  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);

  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /*#__PURE__*/function (_Atom) {
  _inheritsLoose(ObservableValue, _Atom);

  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;

    if (name_ === void 0) {
      name_ =  true ? "ObservableValue@" + getNextId() : 0;
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer["default"];
    }

    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);

    if ( true && notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: CREATE,
        object: _assertThisInitialized(_this),
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }

    return _this;
  }

  var _proto = ObservableValue.prototype;

  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if ( true && notifySpy) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue_(newValue);
      if ( true && notifySpy) spyReportEnd();
    }
  };

  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };

  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) listener({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: UPDATE,
      newValue: this.value_,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };

  _proto.toJSON = function toJSON() {
    return this.get();
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/createInstanceofPredicate("ObservableValue", ObservableValue);

var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  // during tracking it's an array with new observed observers
  // to check for cycles
  // N.B: unminified as it is used by MST

  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) die(31);
    this.derivation = options.get;
    this.name_ = options.name || ( true ? "ComputedValue@" + getNextId() : 0);

    if (options.set) {
      this.setter_ = createAction( true ? this.name_ + "-setter" : 0, options.set);
    }

    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }

  var _proto = ComputedValue.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ;

  _proto.get = function get() {
    if (this.isComputing_) die(32, this.name_, this.derivation);

    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'

        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);

      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
        if (this.trackAndCompute()) propagateChangeConfirmed(this);
        globalState.trackingContext = prevTrackingContext;
      }
    }

    var result = this.value_;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) die(33, this.name_);
      this.isRunningSetter_ = true;

      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else die(34, this.name_);
  };

  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);

    if ( true && isSpyEnabled()) {
      spyReport({
        observableKind: "computed",
        debugObjectName: this.name_,
        object: this.scope_,
        type: "update",
        oldValue: this.value_,
        newValue: newValue
      });
    }

    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

    if (changed) {
      this.value_ = newValue;
    }

    return changed;
  };

  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true; // don't allow state changes during computation

    var prev = allowStateChangesStart(false);
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };

  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!
    }
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (false) {}

    if (this.requiresReaction_ === true) {
      die("[mobx] Computed value " + this.name_ + " is read outside a reactive context");
    }

    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name_ + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive$1] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}();
var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

var IDerivationState_;

(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause; // Empty
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */

function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;

    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;

    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing_,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  if (false) {}

  var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed(observable) {
  if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable " + observable.name_ + " being read outside a reactive context");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */

function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (false) {}
  if (derivation.observing_.length !== 0) return;

  if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation " + derivation.name_ + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount_;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }

  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }

    _dep.diffValue_ = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */

function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}

/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"];
var MobXGlobals = function MobXGlobals() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) die(36);
  isolateCalled = true;

  if (canMergeGlobalState) {
    var global = getGlobal();
    if (--global.__mobxInstanceCount === 0) global.__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */

function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }

function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);
  if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);

  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation_ === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */

function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation_ = false;

      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved_) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved_ = false;
          observable.onBUO();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

      if (!observable.isBeingObserved_ && globalState.trackingContext) {
        observable.isBeingObserved_ = true;
        observable.onBO();
      }
    }

    return true;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes

function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale_();
    }

    d.dependenciesState_ = IDerivationState_.STALE_;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed

function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;

      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) {
        observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      }
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ =  true ? "Reaction@" + getNextId() : 0;
    }

    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }

    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }

  var _proto = Reaction.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };

  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  ;

  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;

      if (shouldCompute(this)) {
        this.isTrackPending_ = true;

        try {
          this.onInvalidate_();

          if ( true && this.isTrackPending_ && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }

      globalState.trackingContext = prev;
      endBatch();
    }
  };

  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if ( true && notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }

    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...

    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;

    if (this.isDisposed_) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);

    if ( true && notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;

    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message =  true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : 0;

    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (true) console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)"); // prettier-ignore


    if ( true && isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name_,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;

      if (!this.isRunning_) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };

  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */

var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error( true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : 0);
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
  if (false) {} // dead code elimination can do the rest

  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (false) {}

  var change = _extends({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (false) {}
  if (change) spyReport(_extends({}, change, {
    type: "report-end",
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}
function spy(listener) {
  if (false) {} else {
    globalState.spyListeners.push(listener);
    return once(function () {
      globalState.spyListeners = globalState.spyListeners.filter(function (l) {
        return l !== listener;
      });
    });
  }
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});

function createActionFactory(autoAction) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction); // action("name", fn() {})

    if (isFunction(arg2)) return createAction(arg1, arg2, autoAction); // @action

    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
    } // action("name") & @action("name")


    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction
      }));
    }

    if (true) die("Invalid arguments for `action`");
  };

  return res;
}

var action = /*#__PURE__*/createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /*#__PURE__*/createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);
function runInAction(fn) {
  return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */

function autorun(view, opts) {
  var _opts$name, _opts;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    if (!isFunction(view)) die("Autorun expects a function as first argument");
    if (isAction(view)) die("Autorun does not accept actions since actions are untrackable");
  }

  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name :  true ? view.name || "Autorun@" + getNextId() : 0;
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;
          if (!reaction.isDisposed_) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule_();
  return reaction.getDisposer_();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  var _opts$name2;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    if (!isFunction(expression) || !isFunction(effect)) die("First and second argument to reaction should be functions");
    if (!isPlainObject(opts)) die("Third argument of reactions should be an object");
  }

  var name = (_opts$name2 = opts.name) != null ? _opts$name2 :  true ? "Reaction@" + getNextId() : 0;
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var oldValue = undefined; // only an issue with fireImmediately

  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false;
    if (r.isDisposed_) return;
    var changed = false;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      oldValue = value;
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);else if (!firstTime && changed) effectAction(value, oldValue, r);
    firstTime = false;
  }

  r.schedule_();
  return r.getDisposer_();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners["delete"](cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"

function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  var useProxies = options.useProxies,
      enforceActions = options.enforceActions;

  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }

  if (useProxies === "ifavailable") globalState.verifyProxies = true;

  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (key) {
    if (key in options) globalState[key] = !!options[key];
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;

  if ( true && globalState.disableErrorBoundaries === true) {
    console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
  }

  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (true) {
    if (arguments.length > 4) die("'extendObservable' expected 2-4 arguments");
    if (typeof target !== "object") die("'extendObservable' expects an object as first argument");
    if (isObservableMap(target)) die("'extendObservable' should not be used on maps, use map.merge instead");
    if (!isPlainObject(properties)) die("'extendObservabe' only accepts plain objects as second argument");
    if (isObservable(properties) || isObservable(annotations)) die("Extending an object with another observable (object) is not supported");
  } // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)


  var descriptors = getOwnPropertyDescriptors(properties);
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    ownKeys(descriptors).forEach(function (key) {
      adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
      !annotations ? true : key in annotations ? annotations[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };
  if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  return result;
}

function unique(list) {
  return Array.from(new Set(list));
}

var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
var flowBoundAnnotation = /*#__PURE__*/createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  } // flow(fn)


  if ( true && arguments.length !== 1) die("Flow expects single argument with generator function");
  var generator = arg1;
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };

  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /*#__PURE__*/createDecoratorAnnotation(flowBoundAnnotation);

function cancelPromise(promise) {
  if (isFunction(promise.cancel)) promise.cancel();
}

function flowResult(result) {
  return result; // just tricking TypeScript :)
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if ( true && !isStringish(propOrHandler)) return die("InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else if (true) {
    return die("Expected observable map, object or array as first array");
  }

  if ( true && target.dehancer !== undefined) return die("An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value[$mobx].values_.has(property)) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}
function isComputed(value) {
  if ( true && arguments.length > 1) return die("isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property");
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if ( true && !isStringish(propName)) return die("isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) return false;

  if (property !== undefined) {
    if ( true && (isObservableMap(value) || isObservableArray(value))) return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if ( true && arguments.length !== 1) die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if ( true && !isStringish(propName)) return die("expected a property name as second argument");
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].keys_();
  }

  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;

    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    obj[$mobx].set_(key, value);
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    if (key < 0) die("Invalid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else die(8);
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].delete_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    return obj[$mobx].has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }

  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[$mobx].get_(key);
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }

  die(11);
}
function apiDefineProperty(obj, key, descriptor) {
  if (isObservableObject(obj)) {
    return obj[$mobx].defineProperty_(key, descriptor);
  }

  die(39);
}
function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }

  die(38);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}

function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) return source;
  if (isObservableValue(source) || isComputedValue(source)) return toJSHelper(source.get(), __alreadySeen);

  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }

  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());

    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }

  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());

    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    var _res3 = cache(__alreadySeen, source, {});

    apiOwnKeys(source).forEach(function (key) {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        _res3[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return _res3;
  }
}
/**
 * Basically, a deep clone, so that no reactive property will exist anymore.
 */


function toJS(source, options) {
  if ( true && options) die("toJS no longer supports options");
  return toJSHelper(source, new Map());
}

function trace() {
  if (false) {}
  var enterBreakPoint = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }

  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */

function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed_) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name =  true ? opts.name || "When@" + getNextId() : 0;
  var effectAction = createAction( true ? opts.name + "-effect" : 0, effect); // eslint-disable-next-line

  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);

    if (cond) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if ( true && opts && opts.onError) return die("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if ( true && globalState.trackingDerivation) warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set(target, name, value) {
    var _getAdm$set_;

    if (!isStringish(name)) return false;

    if ( true && !getAdm(target).values_.has(name)) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    } // null (intercepted) -> true (success)


    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;

    if (true) {
      warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    }

    if (!isStringish(name)) return false; // null (intercepted) -> true (success)

    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty(target, name, descriptor) {
    var _getAdm$definePropert;

    if (true) {
      warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
    } // null (intercepted) -> true (success)


    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys(target) {
    if ( true && globalState.trackingDerivation) warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;

  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type) die(14);
      if (!change) break;
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

function makeObservable(target, annotations, options) {
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    var _annotations;

    // Default to decorators
    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target); // Annotate

    ownKeys(annotations).forEach(function (key) {
      return adm.make_(key, annotations[key]);
    });
  } finally {
    endBatch();
  }

  return target;
} // proto[keysSymbol] = new Set<PropertyKey>()

var keysSymbol = /*#__PURE__*/Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
  if (true) {
    if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target))) die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    if (isObservableObject(target)) die("makeAutoObservable can only be used on objects not already made observable");
  } // Optimization: avoid visiting protos
  // Assumes that annotation.make_/.extend_ works the same for plain objects


  if (isPlainObject(target)) {
    return extendObservable(target, target, overrides, options);
  }

  var adm = asObservableObject(target, options)[$mobx]; // Optimization: cache keys on proto
  // Assumes makeAutoObservable can be called only once per object and can't be used in subclass

  if (!target[keysSymbol]) {
    var proto = Object.getPrototypeOf(target);
    var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
    keys["delete"]("constructor");
    keys["delete"]($mobx);
    addHiddenProp(proto, keysSymbol, keys);
  }

  startBatch();

  try {
    target[keysSymbol].forEach(function (key) {
      return adm.make_(key, // must pass "undefined" for { key: undefined }
      !overrides ? true : key in overrides ? overrides[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) return adm;
    if (name === "length") return adm.getArrayLength_();

    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }

    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];

    if (name === "length") {
      adm.setArrayLength_(value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = /*#__PURE__*/function () {
  // this is the prop that gets proxied, so can't replace it!
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name =  true ? "ObservableArray@" + getNextId() : 0;
    }

    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV,  true ? name + "[..]" : 0);
    };
  }

  var _proto = ObservableArrayAdministration.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };

  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || newLength < 0) die("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray_(currentLength, 0, newItems);
    } else this.spliceWithArray_(newLength, currentLength - newLength);
  };

  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) die(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
  };

  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });

    if (this.legacyMode_ || "development" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };

  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;

      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length = index + newItems.length - deleteCount;

      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }

      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }

      return res;
    }
  };

  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if ( true && notifySpy) spyReportStart(change);
    this.atom_.reportChanged();
    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if ( true && notifySpy) spyReportStart(change);
    this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }

    console.warn( true ? "[mobx] Out of bounds read: " + index : 0);
  };

  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      // out of bounds
      die(17, index, values.length);
    }
  };

  return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name =  true ? "ObservableArray@" + getNextId() : 0;
  }

  if (owned === void 0) {
    owned = false;
  }

  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
} // eslint-disable-next-line

var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray_(index);

      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }

    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];

    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];

    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }

    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }

    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */

addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc); // map

addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc); // reduce

addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);

function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
} // Report and delegate to dehanced array


function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
} // Make sure callbacks recieve correct array arg #2326


function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
} // Make sure callbacks recieve correct array arg #2326


function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };

    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}

var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /*#__PURE__*/function () {
  // hasMap, not hashMap >-).
  function ObservableMap(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ =  true ? "ObservableMap@" + getNextId() : 0;
    }

    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;

    if (!isFunction(Map)) {
      die(18);
    }

    this.keysAtom_ = createAtom( true ? this.name_ + ".keys()" : 0);
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }

  var _proto = ObservableMap.prototype;

  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };

  _proto.has = function has(key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this.has_(key);
    var entry = this.hasMap_.get(key);

    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : 0, false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this.hasMap_["delete"](key);
      });
    }

    return entry.get();
  };

  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }

    return this;
  };

  _proto["delete"] = function _delete(key) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;

      if ( true && notifySpy) spyReportStart(_change);
      transaction(function () {
        _this2.keysAtom_.reportChanged();

        _this2.updateHasMapEntry_(key, false);

        var observable = _this2.data_.get(key);

        observable.setNewValue_(undefined);

        _this2.data_["delete"](key);
      });
      if (notify) notifyListeners(this, _change);
      if ( true && notifySpy) spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
    var entry = this.hasMap_.get(key);

    if (entry) {
      entry.setNewValue_(value);
    }
  };

  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;
      if ( true && notifySpy) spyReportStart(change);
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, change);
      if ( true && notifySpy) spyReportEnd();
    }
  };

  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var observable = new ObservableValue(newValue, _this3.enhancer_,  true ? _this3.name_ + "." + stringifyKey(key) : 0, false);

      _this3.data_.set(key, observable);

      newValue = observable.value_; // value might have been changed

      _this3.updateHasMapEntry_(key, true);

      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if ( true && notifySpy) spyReportStart(change);
    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.get = function get(key) {
    if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(undefined);
  };

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };

  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  _proto[_Symbol$iterator] = function () {
    return this.entries();
  };

  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  ;

  _proto.merge = function merge(other) {
    var _this4 = this;

    if (isObservableMap(other)) {
      other = new Map(other);
    }

    transaction(function () {
      if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
        return _this4.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_ref) {
        var key = _ref[0],
            value = _ref[1];
        return _this4.set(key, value);
      });else if (isES6Map(other)) {
        if (other.constructor !== Map) die(19, other);
        other.forEach(function (value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== undefined) die(20, other);
    });
    return this;
  };

  _proto.clear = function clear() {
    var _this5 = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;

          _this5["delete"](key);
        }
      });
    });
  };

  _proto.replace = function replace(values) {
    var _this6 = this;

    // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors
    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value;

        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this6.data_.get(key);

            orderedData.set(key, value);
          }
        }
      } // Merge entries


      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1];

        // We will want to know whether a new key is added
        var keyExisted = _this6.data_.has(_key); // Add or update value


        _this6.set(_key, _value); // The addition could have been prevent by interceptor


        if (_this6.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this6.data_.get(_key);

          orderedData.set(_key, _value2); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      } // Check for possible key order change


      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this6.data_ = orderedData;
    });
    return this;
  };

  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if ( true && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Map";
    }
  }]);

  return ObservableMap;
}(); // eslint-disable-next-line

var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return die(21, dataStructure);
  }
}

var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /*#__PURE__*/function () {
  function ObservableSet(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ =  true ? "ObservableSet@" + getNextId() : 0;
    }

    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;

    if (!isFunction(Set)) {
      die(22);
    }

    this.atom_ = createAtom(this.name_);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  var _proto = ObservableSet.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.clear = function clear() {
    var _this = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;

          _this["delete"](value);
        }
      });
    });
  };

  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };

  _proto.add = function add(value) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.atom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) return this; // ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this2.data_.add(_this2.enhancer_(value, undefined));

        _this2.atom_.reportChanged();
      });
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;

      if (notifySpy && "development" !== "production") spyReportStart(_change);
      if (notify) notifyListeners(this, _change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }

    return this;
  };

  _proto["delete"] = function _delete(value) {
    var _this3 = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);

      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;

      if (notifySpy && "development" !== "production") spyReportStart(_change2);
      transaction(function () {
        _this3.atom_.reportChanged();

        _this3.data_["delete"](value);
      });
      if (notify) notifyListeners(this, _change2);
      if (notifySpy && "development" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };

  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.keys = function keys() {
    return this.values();
  };

  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.replace = function replace(other) {
    var _this4 = this;

    if (isObservableSet(other)) {
      other = new Set(other);
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if ( true && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };

  _proto[_Symbol$iterator$1] = function () {
    return this.values();
  };

  _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get() {
      return "Set";
    }
  }]);

  return ObservableSet;
}(); // eslint-disable-next-line

var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

var descriptorCache = /*#__PURE__*/Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
  defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }

    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }

    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom( true ? this.name_ + ".keys" : 0); // Optimization: we use this frequently

    this.isPlainObject_ = isPlainObject(this.target_);

    if ( true && !isAnnotation(this.defaultAnnotation_)) {
      die("defaultAnnotation must be valid annotation");
    }

    if (true) {
      // Prepare structure for tracking which fields were already annotated
      this.appliedAnnotations_ = {};
    }
  }

  var _proto = ObservableObjectAdministration.prototype;

  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };

  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable = this.values_.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return true;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: newValue
      });
      if (!change) return null;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue_(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();

      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if ( true && notifySpy) spyReportStart(_change);
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, _change);
      if ( true && notifySpy) spyReportEnd();
    }

    return true;
  };

  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      // Key doesn't exist yet, subscribe for it in case it's added later
      this.has_(key);
    }

    return this.target_[key];
  }
  /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    // Don't use .has(key) - we care about own
    if (hasProp(this.target_, key)) {
      // Existing prop
      if (this.values_.has(key)) {
        // Observable (can be intercepted)
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        // Non-observable - proxy
        return Reflect.set(this.target_, key, value);
      } else {
        // Non-observable
        this.target_[key] = value;
        return true;
      }
    } else {
      // New prop
      return this.extend_(key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  } // Trap for "in"
  ;

  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      // Skip key subscription outside derivation
      return key in this.target_;
    }

    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);

    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : 0, false);
      this.pendingKeys_.set(key, entry);
    }

    return entry.get();
  }
  /**
   * @param {PropertyKey} key
   * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
   */
  ;

  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return;
    }

    assertAnnotable(this, annotation, key);

    if (!(key in this.target_)) {
      var _this$target_$storedA;

      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) == null ? void 0 : _this$target_$storedA[key]) {
        return; // will be annotated by subclass constructor
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }

    var source = this.target_;

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0
        /* Cancel */
        ) return;
        if (outcome === 1
        /* Break */
        ) break;
      }

      source = Object.getPrototypeOf(source);
    }

    recordAnnotationApplied(this, annotation, key);
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }

    assertAnnotable(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);

    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }

    return outcome;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) return null;
        var newValue = change.newValue;

        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      } // Define


      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      } // Notify


      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) return null;
        value = change.newValue;
      }

      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      var observable = new ObservableValue(value, enhancer,  true ? this.name_ + "." + key.toString() : 0, false);
      this.values_.set(key, observable); // Notify (value possibly changed by ObservableValue)

      this.notifyPropertyAddition_(key, observable.value_);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: undefined
        });
        if (!change) return null;
      }

      options.name || (options.name =  true ? this.name_ + "." + key.toString() : 0);
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      this.values_.set(key, new ComputedValue(options)); // Notify

      this.notifyPropertyAddition_(key, undefined);
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    // No such prop
    if (!hasProp(this.target_, key)) {
      return true;
    } // Intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      }); // Cancelled

      if (!change) return null;
    } // Delete


    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;

      startBatch();
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();
      var observable = this.values_.get(key); // Value needed for spies/listeners

      var value = undefined; // Optimization: don't pull the value unless we will need it

      if (!observable && (notify || notifySpy)) {
        var _getDescriptor;

        value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
      } // delete prop (do first, may fail)


      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      } // Allow re-annotating this field


      if (true) {
        delete this.appliedAnnotations_[key];
      } // Clear observable


      if (observable) {
        this.values_["delete"](key); // for computed, value is undefined

        if (observable instanceof ObservableValue) {
          value = observable.value_;
        } // Notify: autorun(() => obj[key]), see #1796


        propagateChanged(observable);
      } // Notify "keys/entries/values" observers


      this.keysAtom_.reportChanged(); // Notify "has" observers
      // "in" as it may still exist in proto

      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_); // Notify spies/listeners

      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if ( true && notifySpy) spyReportStart(_change2);
        if (notify) notifyListeners(this, _change2);
        if ( true && notifySpy) spyReportEnd();
      }
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ;

  _proto.observe_ = function observe_(callback, fireImmediately) {
    if ( true && fireImmediately === true) die("`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;

    var notify = hasListeners(this);
    var notifySpy =  true && isSpyEnabled();

    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if ( true && notifySpy) spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if ( true && notifySpy) spyReportEnd();
    }

    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true); // Notify "keys/entries/values" observers

    this.keysAtom_.reportChanged();
  };

  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };

  _proto.keys_ = function keys_() {
    // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
    // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
    // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
    // We choose to over-report in Object.keys(object), because:
    // - typically it's used with simple data objects
    // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };

  return ObservableObjectAdministration;
}();
function asObservableObject(target, options) {
  var _options$name;

  if ( true && options && isObservableObject(target)) {
    die("Options can't be provided for already observable objects.");
  }

  if (hasProp(target, $mobx)) {
    if ( true && !(getAdministration(target) instanceof ObservableObjectAdministration)) {
      die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
    }

    return target;
  }

  if ( true && !Object.isExtensible(target)) die("Cannot make the designated object observable; it is not extensible");
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name :  true ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : 0;
  var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}

function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;

  if (true) {
    adm.appliedAnnotations_[key] = annotation;
  } // Remove applied decorator annotation so we don't try to apply it again in subclass constructor


  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}

function assertAnnotable(adm, annotation, key) {
  // Valid annotation
  if ( true && !isAnnotation(annotation)) {
    die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
  }
  /*
  // Configurable, not sealed, not frozen
  // Possibly not needed, just a little better error then the one thrown by engine.
  // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
  if (__DEV__) {
      const configurable = getDescriptor(adm.target_, key)?.configurable
      const frozen = Object.isFrozen(adm.target_)
      const sealed = Object.isSealed(adm.target_)
      if (!configurable || frozen || sealed) {
          const fieldName = `${adm.name_}.${key.toString()}`
          const requestedAnnotationType = annotation.annotationType_
          let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
          if (frozen) {
              error += `\nObject is frozen.`
          }
          if (sealed) {
              error += `\nObject is sealed.`
          }
          if (!configurable) {
              error += `\nproperty is not configurable.`
              // Mention only if caused by us to avoid confusion
              if (hasProp(adm.appliedAnnotations!, key)) {
                  error += `\nTo prevent accidental re-definition of a field by a subclass, `
                  error += `all annotated fields of non-plain objects (classes) are not configurable.`
              }
          }
          die(error)
      }
  }
  */
  // Not annotated


  if ( true && !isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
    var fieldName = adm.name_ + "." + key.toString();
    var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overriden by subclass.");
  }
}

/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */

var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function StubArray() {};

function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6

var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
  _inheritsLoose(LegacyObservableArray, _StubArray);

  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;

    if (name === void 0) {
      name =  true ? "ObservableArray@" + getNextId() : 0;
    }

    if (owned === void 0) {
      owned = false;
    }

    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true); // @ts-ignore

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    return _this;
  }

  var _proto = LegacyObservableArray.prototype;

  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();

    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }

    return Array.prototype.concat.apply(this.slice(), //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };

  _proto[Symbol.iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        // @ts-ignore
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };

  _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Array";
    }
  }]);

  return LegacyObservableArray;
}(StubArray);

Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
      fn = _ref[1];
  if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }

    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) die(23);
      return thing[$mobx].atom_;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      if (property === undefined) return thing.keysAtom_;
      var observable = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable) die(25, property, getDebugName(thing));
      return observable;
    }

    if (isObservableObject(thing)) {
      if (!property) return die(26);

      var _observable = thing[$mobx].values_.get(property);

      if (!_observable) die(27, property, getDebugName(thing));
      return _observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  die(28);
}
function getAdministration(thing, property) {
  if (!thing) die(29);
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing;
  if (thing[$mobx]) return thing[$mobx];
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;

  if (property !== undefined) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    // valid for arrays as well
    named = getAtom(thing);
  }

  return named.name_;
}

var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.

function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a;
  if (!isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.slice();
  if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
  return a;
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}

function isAnnotation(thing) {
  return (// Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
  );
}

/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
["Symbol", "Map", "Set", "Symbol"].forEach(function (m) {
  var g = getGlobal();

  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}


//# sourceMappingURL=mobx.esm.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

// function log(target){
//     const desc = Object.getOwnPropertyDescriptors(target.prototype)
//     console.log(desc)
//     for (const key of Object.keys(desc)){
//         if (key === 'constructor'){
//             continue;
//         }
//         const func = desc[key]
//         console.log(func)
//         if(typeof func === 'function'){ 
//             Object.defineProperty(target.prototype, key, {
//                 value (...args){
//                     console.log('before'+ key)
//                     const ret = func.apply(this, args)
//                     console.log('after'+ key)
//                     return ret
//                 }
//             })
//         }
//     }
// }
// function readonly(target,key,desc){
//     console.log(desc)
//     desc.writable = false;
// }
// function validate(target,key,desc){
//     console.log(desc)
//     const func = desc.value
//     desc.value = function(...args){
//         for(let num of args){
//             if(typeof num !== 'number'){
//                 throw new Error('not a number')
//             }
//             return  func.apply(this, args)
//         }
//     }
// }
// @log
// class Numberic {
//    @readonly PI = 3.1415926
//    @validate
//     add(...nums){
//         return nums.reduce((p,n)=>(p+n),0)
//     }
// }
// const num = new Numberic().add(1,'2')
// // console.log(Numberic.prototype,num)
// new Numberic().PI = 100
// mobx
 // observable.box

var num = mobx__WEBPACK_IMPORTED_MODULE_0__.observable.box(20);
var str = mobx__WEBPACK_IMPORTED_MODULE_0__.observable.box('20');
var bool = mobx__WEBPACK_IMPORTED_MODULE_0__.observable.box(false);
console.log(num.get(), str.get(), bool.get());
num.set(50);
str.set('50');
bool.set(true);
console.log(num.get(), str.get(), bool.get()); // array  object  map 

var arr = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)(['a', 'b']);
var obj = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  a: 1,
  b: 2
});
var map = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)(new Map());
console.log(arr, Array.isArray(arr));
console.log(obj.a, obj.b);
map.set('a', 1);
console.log(map.has('a'));
console.log(map); //  class 

var Store = (_class = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "array", _descriptor, this);

    _initializerDefineProperty(this, "obj", _descriptor2, this);

    _initializerDefineProperty(this, "map", _descriptor3, this);

    _initializerDefineProperty(this, "str", _descriptor4, this);

    _initializerDefineProperty(this, "num", _descriptor5, this);

    _initializerDefineProperty(this, "bool", _descriptor6, this);

    _initializerDefineProperty(this, "price", _descriptor7, this);

    _initializerDefineProperty(this, "amount", _descriptor8, this);
  }

  _createClass(Store, [{
    key: "total",
    get: function get() {
      return this.price * this.amount;
    }
  }]);

  return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "array", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "obj", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "map", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new Map();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "str", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'hello';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "num", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "bool", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "price", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "amount", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 1;
  }
}), _applyDecoratedDescriptor(_class.prototype, "total", [mobx__WEBPACK_IMPORTED_MODULE_0__.computed], Object.getOwnPropertyDescriptor(_class.prototype, "total"), _class.prototype)), _class); // computed 

var store = new Store(); // var res=computed(()=>{
//     return store.str + '/'+ store.num
// })
// console.log(res.get())
// store.str='world'
// store.num=30
// console.log(res.get())
// console.log(store.total)
//  autorun 

(0,mobx__WEBPACK_IMPORTED_MODULE_0__.autorun)(function () {
  console.log(store.str + '/' + store.num);
});
store.str = 'world1';
store.num = 302;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2J4LXRlc3QvLi9ub2RlX21vZHVsZXMvbW9ieC9kaXN0L21vYnguZXNtLmpzIiwid2VicGFjazovL21vYngtdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb2J4LXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vYngtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21vYngtdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vYngtdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vYngtdGVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJudW0iLCJvYnNlcnZhYmxlIiwic3RyIiwiYm9vbCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJzZXQiLCJhcnIiLCJvYmoiLCJhIiwiYiIsIm1hcCIsIk1hcCIsIkFycmF5IiwiaXNBcnJheSIsImhhcyIsIlN0b3JlIiwicHJpY2UiLCJhbW91bnQiLCJjb21wdXRlZCIsInN0b3JlIiwiYXV0b3J1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELEdBQUc7QUFDSDtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQsR0FBRztBQUNIO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBLEdBQUc7OztBQUdILE1BQU0sS0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBLGlKQUFpSjs7QUFFako7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0gsZ0NBQWdDOztBQUVoQyxnRUFBZ0U7O0FBRWhFLHlEQUF5RDs7QUFFekQsa0RBQWtEOztBQUVsRCxrREFBa0Q7O0FBRWxELG9EQUFvRDs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNElBQTRJLHlDQUF5QztBQUNyTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwREFBMEQsYUFBYSxFQUFFO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixVQUFVO0FBQzVCO0FBQ0EsR0FBRzs7O0FBR0gsTUFBTSxJQUFxQztBQUMzQztBQUNBLHlGQUF5RixVQUFVO0FBQ25HOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFIQUFxSCxtR0FBbUc7O0FBRXhOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixLQUFxQztBQUN4RDs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWMsS0FBcUMsc0NBQXNDLENBQWlCO0FBQzFHOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLEtBQXdDLEVBQUUsRUFBTztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLDZFQUE2RTs7QUFFN0U7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFELDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFxQywrQkFBK0IsQ0FBVTtBQUM1Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLEtBQXFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLEtBQXFD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QUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0QsS0FBcUMsK0JBQStCLENBQVU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw0RUFBNEU7QUFDNUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCxNQUFNLEtBQXFDO0FBQzNDO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFELDRDQUE0Qzs7O0FBRzVDO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUE7QUFDQSxPQUFPO0FBQ1Asb0JBQW9CO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsS0FBcUM7QUFDN0M7QUFDQSxHQUFHLFVBQVUsSUFBcUM7QUFDbEQ7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFBbUY7QUFDbkY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlHQUF5RztBQUN6Rzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLEtBQXdDLEVBQUUsRUFBcUQ7QUFDckc7O0FBRUEscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsS0FBSztBQUNMOztBQUVBLGNBQWMsS0FBcUMsd0NBQXdDLENBQU07QUFDakcsa0NBQWtDLEtBQXFDLDJCQUEyQixDQUFhLFVBQVU7O0FBRXpIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUEsUUFBUSxLQUFxQztBQUM3QztBQUNBLEtBQUs7OztBQUdMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5R0FBeUc7O0FBRXpHO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FB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QUFLLENBQUNyQixHQUFOLEdBQVUsR0FBVixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbmljZUVycm9ycyA9IHtcbiAgMDogXCJJbnZhbGlkIHZhbHVlIGZvciBjb25maWd1cmF0aW9uICdlbmZvcmNlQWN0aW9ucycsIGV4cGVjdGVkICduZXZlcicsICdhbHdheXMnIG9yICdvYnNlcnZlZCdcIixcbiAgMTogZnVuY3Rpb24gXyhhbm5vdGF0aW9uVHlwZSwga2V5KSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGFwcGx5ICdcIiArIGFubm90YXRpb25UeXBlICsgXCInIHRvICdcIiArIGtleS50b1N0cmluZygpICsgXCInOiBGaWVsZCBub3QgZm91bmQuXCI7XG4gIH0sXG5cbiAgLypcclxuICAyKHByb3ApIHtcclxuICAgICAgcmV0dXJuIGBpbnZhbGlkIGRlY29yYXRvciBmb3IgJyR7cHJvcC50b1N0cmluZygpfSdgXHJcbiAgfSxcclxuICAzKHByb3ApIHtcclxuICAgICAgcmV0dXJuIGBDYW5ub3QgZGVjb3JhdGUgJyR7cHJvcC50b1N0cmluZygpfSc6IGFjdGlvbiBjYW4gb25seSBiZSB1c2VkIG9uIHByb3BlcnRpZXMgd2l0aCBhIGZ1bmN0aW9uIHZhbHVlLmBcclxuICB9LFxyXG4gIDQocHJvcCkge1xyXG4gICAgICByZXR1cm4gYENhbm5vdCBkZWNvcmF0ZSAnJHtwcm9wLnRvU3RyaW5nKCl9JzogY29tcHV0ZWQgY2FuIG9ubHkgYmUgdXNlZCBvbiBnZXR0ZXIgcHJvcGVydGllcy5gXHJcbiAgfSxcclxuICAqL1xuICA1OiBcIidrZXlzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMsIHNldHMgYW5kIG1hcHNcIixcbiAgNjogXCIndmFsdWVzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMsIHNldHMgYW5kIG1hcHNcIixcbiAgNzogXCInZW50cmllcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gIDg6IFwiJ3NldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gIDk6IFwiJ3JlbW92ZSgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gIDEwOiBcIidoYXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICAxMTogXCInZ2V0KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIixcbiAgMTI6IFwiSW52YWxpZCBhbm5vdGF0aW9uXCIsXG4gIDEzOiBcIkR5bmFtaWMgb2JzZXJ2YWJsZSBvYmplY3RzIGNhbm5vdCBiZSBmcm96ZW5cIixcbiAgMTQ6IFwiSW50ZXJjZXB0IGhhbmRsZXJzIHNob3VsZCByZXR1cm4gbm90aGluZyBvciBhIGNoYW5nZSBvYmplY3RcIixcbiAgMTU6IFwiT2JzZXJ2YWJsZSBhcnJheXMgY2Fubm90IGJlIGZyb3plblwiLFxuICAxNjogXCJNb2RpZmljYXRpb24gZXhjZXB0aW9uOiB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIGFuIG9ic2VydmFibGUgYXJyYXkgd2FzIGNoYW5nZWQuXCIsXG4gIDE3OiBmdW5jdGlvbiBfKGluZGV4LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gXCJbbW9ieC5hcnJheV0gSW5kZXggb3V0IG9mIGJvdW5kcywgXCIgKyBpbmRleCArIFwiIGlzIGxhcmdlciB0aGFuIFwiICsgbGVuZ3RoO1xuICB9LFxuICAxODogXCJtb2J4Lm1hcCByZXF1aXJlcyBNYXAgcG9seWZpbGwgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuIENoZWNrIGJhYmVsLXBvbHlmaWxsIG9yIGNvcmUtanMvZXM2L21hcC5qc1wiLFxuICAxOTogZnVuY3Rpb24gXyhvdGhlcikge1xuICAgIHJldHVybiBcIkNhbm5vdCBpbml0aWFsaXplIGZyb20gY2xhc3NlcyB0aGF0IGluaGVyaXQgZnJvbSBNYXA6IFwiICsgb3RoZXIuY29uc3RydWN0b3IubmFtZTtcbiAgfSxcbiAgMjA6IGZ1bmN0aW9uIF8ob3RoZXIpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgaW5pdGlhbGl6ZSBtYXAgZnJvbSBcIiArIG90aGVyO1xuICB9LFxuICAyMTogZnVuY3Rpb24gXyhkYXRhU3RydWN0dXJlKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGNvbnZlcnQgdG8gbWFwIGZyb20gJ1wiICsgZGF0YVN0cnVjdHVyZSArIFwiJ1wiO1xuICB9LFxuICAyMjogXCJtb2J4LnNldCByZXF1aXJlcyBTZXQgcG9seWZpbGwgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuIENoZWNrIGJhYmVsLXBvbHlmaWxsIG9yIGNvcmUtanMvZXM2L3NldC5qc1wiLFxuICAyMzogXCJJdCBpcyBub3QgcG9zc2libGUgdG8gZ2V0IGluZGV4IGF0b21zIGZyb20gYXJyYXlzXCIsXG4gIDI0OiBmdW5jdGlvbiBfKHRoaW5nKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IG9idGFpbiBhZG1pbmlzdHJhdGlvbiBmcm9tIFwiICsgdGhpbmc7XG4gIH0sXG4gIDI1OiBmdW5jdGlvbiBfKHByb3BlcnR5LCBuYW1lKSB7XG4gICAgcmV0dXJuIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBuYW1lICsgXCInXCI7XG4gIH0sXG4gIDI2OiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIixcbiAgMjc6IGZ1bmN0aW9uIF8ocHJvcGVydHksIG5hbWUpIHtcbiAgICByZXR1cm4gXCJubyBvYnNlcnZhYmxlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5LnRvU3RyaW5nKCkgKyBcIicgZm91bmQgb24gdGhlIG9ic2VydmFibGUgb2JqZWN0ICdcIiArIG5hbWUgKyBcIidcIjtcbiAgfSxcbiAgMjg6IGZ1bmN0aW9uIF8odGhpbmcpIHtcbiAgICByZXR1cm4gXCJDYW5ub3Qgb2J0YWluIGF0b20gZnJvbSBcIiArIHRoaW5nO1xuICB9LFxuICAyOTogXCJFeHBlY3Rpbmcgc29tZSBvYmplY3RcIixcbiAgMzA6IFwiaW52YWxpZCBhY3Rpb24gc3RhY2suIGRpZCB5b3UgZm9yZ2V0IHRvIGZpbmlzaCBhbiBhY3Rpb24/XCIsXG4gIDMxOiBcIm1pc3Npbmcgb3B0aW9uIGZvciBjb21wdXRlZDogZ2V0XCIsXG4gIDMyOiBmdW5jdGlvbiBfKG5hbWUsIGRlcml2YXRpb24pIHtcbiAgICByZXR1cm4gXCJDeWNsZSBkZXRlY3RlZCBpbiBjb21wdXRhdGlvbiBcIiArIG5hbWUgKyBcIjogXCIgKyBkZXJpdmF0aW9uO1xuICB9LFxuICAzMzogZnVuY3Rpb24gXyhuYW1lKSB7XG4gICAgcmV0dXJuIFwiVGhlIHNldHRlciBvZiBjb21wdXRlZCB2YWx1ZSAnXCIgKyBuYW1lICsgXCInIGlzIHRyeWluZyB0byB1cGRhdGUgaXRzZWxmLiBEaWQgeW91IGludGVuZCB0byB1cGRhdGUgYW4gX29ic2VydmFibGVfIHZhbHVlLCBpbnN0ZWFkIG9mIHRoZSBjb21wdXRlZCBwcm9wZXJ0eT9cIjtcbiAgfSxcbiAgMzQ6IGZ1bmN0aW9uIF8obmFtZSkge1xuICAgIHJldHVybiBcIltDb21wdXRlZFZhbHVlICdcIiArIG5hbWUgKyBcIiddIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBhc3NpZ24gYSBuZXcgdmFsdWUgdG8gYSBjb21wdXRlZCB2YWx1ZS5cIjtcbiAgfSxcbiAgMzU6IFwiVGhlcmUgYXJlIG11bHRpcGxlLCBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgTW9iWCBhY3RpdmUuIE1ha2Ugc3VyZSBNb2JYIGlzIGxvYWRlZCBvbmx5IG9uY2Ugb3IgdXNlIGBjb25maWd1cmUoeyBpc29sYXRlR2xvYmFsU3RhdGU6IHRydWUgfSlgXCIsXG4gIDM2OiBcImlzb2xhdGVHbG9iYWxTdGF0ZSBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBNb2JYIGlzIHJ1bm5pbmcgYW55IHJlYWN0aW9uc1wiLFxuICAzNzogZnVuY3Rpb24gXyhtZXRob2QpIHtcbiAgICByZXR1cm4gXCJbbW9ieF0gYG9ic2VydmFibGVBcnJheS5cIiArIG1ldGhvZCArIFwiKClgIG11dGF0ZXMgdGhlIGFycmF5IGluLXBsYWNlLCB3aGljaCBpcyBub3QgYWxsb3dlZCBpbnNpZGUgYSBkZXJpdmF0aW9uLiBVc2UgYGFycmF5LnNsaWNlKCkuXCIgKyBtZXRob2QgKyBcIigpYCBpbnN0ZWFkXCI7XG4gIH0sXG4gIDM4OiBcIidvd25LZXlzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzXCIsXG4gIDM5OiBcIidkZWZpbmVQcm9wZXJ0eSgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0c1wiXG59O1xudmFyIGVycm9ycyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IG5pY2VFcnJvcnMgOiB7fTtcbmZ1bmN0aW9uIGRpZShlcnJvcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIGUgPSB0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCIgPyBlcnJvciA6IGVycm9yc1tlcnJvcl07XG4gICAgaWYgKHR5cGVvZiBlID09PSBcImZ1bmN0aW9uXCIpIGUgPSBlLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIltNb2JYXSBcIiArIGUpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKHR5cGVvZiBlcnJvciA9PT0gXCJudW1iZXJcIiA/IFwiW01vYlhdIG1pbmlmaWVkIGVycm9yIG5yOiBcIiArIGVycm9yICsgKGFyZ3MubGVuZ3RoID8gXCIgXCIgKyBhcmdzLm1hcChTdHJpbmcpLmpvaW4oXCIsXCIpIDogXCJcIikgKyBcIi4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2Jsb2IvbWFpbi9wYWNrYWdlcy9tb2J4L3NyYy9lcnJvcnMudHNcIiA6IFwiW01vYlhdIFwiICsgZXJyb3IpO1xufVxuXG52YXIgbW9ja0dsb2JhbCA9IHt9O1xuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGdsb2JhbDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgcmV0dXJuIG1vY2tHbG9iYWw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xudmFyIGdldERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcbk9iamVjdC5mcmVlemUoRU1QVFlfQVJSQVkpO1xudmFyIEVNUFRZX09CSkVDVCA9IHt9O1xuT2JqZWN0LmZyZWV6ZShFTVBUWV9PQkpFQ1QpO1xudmFyIGhhc1Byb3h5ID0gdHlwZW9mIFByb3h5ICE9PSBcInVuZGVmaW5lZFwiO1xudmFyIHBsYWluT2JqZWN0U3RyaW5nID0gLyojX19QVVJFX18qL09iamVjdC50b1N0cmluZygpO1xuZnVuY3Rpb24gYXNzZXJ0UHJveGllcygpIHtcbiAgaWYgKCFoYXNQcm94eSkge1xuICAgIGRpZShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcImBQcm94eWAgb2JqZWN0cyBhcmUgbm90IGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC4gUGxlYXNlIGNvbmZpZ3VyZSBNb2JYIHRvIGVuYWJsZSBhIGZhbGxiYWNrIGltcGxlbWVudGF0aW9uLmBcIiA6IFwiUHJveHkgbm90IGF2YWlsYWJsZVwiKTtcbiAgfVxufVxuZnVuY3Rpb24gd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChtc2cpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBnbG9iYWxTdGF0ZS52ZXJpZnlQcm94aWVzKSB7XG4gICAgZGllKFwiTW9iWCBpcyBjdXJyZW50bHkgY29uZmlndXJlZCB0byBiZSBhYmxlIHRvIHJ1biBpbiBFUzUgbW9kZSwgYnV0IGluIEVTNSBNb2JYIHdvbid0IGJlIGFibGUgdG8gXCIgKyBtc2cpO1xuICB9XG59XG5mdW5jdGlvbiBnZXROZXh0SWQoKSB7XG4gIHJldHVybiArK2dsb2JhbFN0YXRlLm1vYnhHdWlkO1xufVxuLyoqXHJcbiAqIE1ha2VzIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgaW52b2tlZCBhdCBtb3N0IG9uY2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBvbmNlKGZ1bmMpIHtcbiAgdmFyIGludm9rZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW52b2tlZCkgcmV0dXJuO1xuICAgIGludm9rZWQgPSB0cnVlO1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gaXNTdHJpbmdpc2godmFsdWUpIHtcbiAgdmFyIHQgPSB0eXBlb2YgdmFsdWU7XG5cbiAgc3dpdGNoICh0KSB7XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIHZhciBfcHJvdG8kY29uc3RydWN0b3I7XG5cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgaWYgKHByb3RvID09IG51bGwpIHJldHVybiB0cnVlO1xuICByZXR1cm4gKChfcHJvdG8kY29uc3RydWN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9wcm90byRjb25zdHJ1Y3Rvci50b1N0cmluZygpKSA9PT0gcGxhaW5PYmplY3RTdHJpbmc7XG59IC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzg2NTE3MFxuXG5mdW5jdGlvbiBpc0dlbmVyYXRvcihvYmopIHtcbiAgdmFyIGNvbnN0cnVjdG9yID0gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmouY29uc3RydWN0b3I7XG4gIGlmICghY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcbiAgaWYgKFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gY29uc3RydWN0b3IubmFtZSB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IGNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYWRkSGlkZGVuUHJvcChvYmplY3QsIHByb3BOYW1lLCB2YWx1ZSkge1xuICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BOYW1lLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGFkZEhpZGRlbkZpbmFsUHJvcChvYmplY3QsIHByb3BOYW1lLCB2YWx1ZSkge1xuICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BOYW1lLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKG5hbWUsIHRoZUNsYXNzKSB7XG4gIHZhciBwcm9wTmFtZSA9IFwiaXNNb2JYXCIgKyBuYW1lO1xuICB0aGVDbGFzcy5wcm90b3R5cGVbcHJvcE5hbWVdID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHgpICYmIHhbcHJvcE5hbWVdID09PSB0cnVlO1xuICB9O1xufVxuZnVuY3Rpb24gaXNFUzZNYXAodGhpbmcpIHtcbiAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgTWFwO1xufVxuZnVuY3Rpb24gaXNFUzZTZXQodGhpbmcpIHtcbiAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgU2V0O1xufVxudmFyIGhhc0dldE93blByb3BlcnR5U3ltYm9scyA9IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSBcInVuZGVmaW5lZFwiO1xuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZvbGxvd2luZzogb3duIGVudW1lcmFibGUga2V5cyBhbmQgc3ltYm9scy5cclxuICovXG5cbmZ1bmN0aW9uIGdldFBsYWluT2JqZWN0S2V5cyhvYmplY3QpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyAvLyBOb3Qgc3VwcG9ydGVkIGluIElFLCBzbyB0aGVyZSBhcmUgbm90IGdvaW5nIHRvIGJlIHN5bWJvbCBwcm9wcyBhbnl3YXkuLi5cblxuICBpZiAoIWhhc0dldE93blByb3BlcnR5U3ltYm9scykgcmV0dXJuIGtleXM7XG4gIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICBpZiAoIXN5bWJvbHMubGVuZ3RoKSByZXR1cm4ga2V5cztcbiAgcmV0dXJuIFtdLmNvbmNhdChrZXlzLCBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBvYmplY3RQcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHMpO1xuICB9KSk7XG59IC8vIEZyb20gSW1tZXIgdXRpbHNcbi8vIFJldHVybnMgYWxsIG93biBrZXlzLCBpbmNsdWRpbmcgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbGljXG5cbnZhciBvd25LZXlzID0gdHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5vd25LZXlzID8gUmVmbGVjdC5vd25LZXlzIDogaGFzR2V0T3duUHJvcGVydHlTeW1ib2xzID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKTtcbn0gOlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuZnVuY3Rpb24gc3RyaW5naWZ5S2V5KGtleSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGtleTtcbiAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIpIHJldHVybiBrZXkudG9TdHJpbmcoKTtcbiAgcmV0dXJuIG5ldyBTdHJpbmcoa2V5KS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gdG9QcmltaXRpdmUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IFwiXCIgKyB2YWx1ZSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gaGFzUHJvcCh0YXJnZXQsIHByb3ApIHtcbiAgcmV0dXJuIG9iamVjdFByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCk7XG59IC8vIEZyb20gSW1tZXIgdXRpbHNcblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCkge1xuICAvLyBQb2x5ZmlsbCBuZWVkZWQgZm9yIEhlcm1lcyBhbmQgSUUsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svaGVybWVzL2lzc3Vlcy8yNzRcbiAgdmFyIHJlcyA9IHt9OyAvLyBOb3RlOiB3aXRob3V0IHBvbHlmaWxsIGZvciBvd25LZXlzLCBzeW1ib2xzIHdvbid0IGJlIHBpY2tlZCB1cFxuXG4gIG93bktleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXNba2V5XSA9IGdldERlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkge1xuICB2YXIgaXQ7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIHJldHVybiBpdC5uZXh0LmJpbmQoaXQpO1xufVxuXG52YXIgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wgPSAvKiNfX1BVUkVfXyovU3ltYm9sKFwibW9ieC1zdG9yZWQtYW5ub3RhdGlvbnNcIik7XG4vKipcclxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgYWN0cyBhc1xyXG4gKiAtIGRlY29yYXRvclxyXG4gKiAtIGFubm90YXRpb24gb2JqZWN0XHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGFubm90YXRpb24pIHtcbiAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICBzdG9yZUFubm90YXRpb24odGFyZ2V0LCBwcm9wZXJ0eSwgYW5ub3RhdGlvbik7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWNvcmF0b3IsIGFubm90YXRpb24pO1xufVxuLyoqXHJcbiAqIFN0b3JlcyBhbm5vdGF0aW9uIHRvIHByb3RvdHlwZSxcclxuICogc28gaXQgY2FuIGJlIGluc3BlY3RlZCBsYXRlciBieSBgbWFrZU9ic2VydmFibGVgIGNhbGxlZCBmcm9tIGNvbnN0cnVjdG9yXHJcbiAqL1xuXG5mdW5jdGlvbiBzdG9yZUFubm90YXRpb24ocHJvdG90eXBlLCBrZXksIGFubm90YXRpb24pIHtcbiAgaWYgKCFoYXNQcm9wKHByb3RvdHlwZSwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wpKSB7XG4gICAgYWRkSGlkZGVuUHJvcChwcm90b3R5cGUsIHN0b3JlZEFubm90YXRpb25zU3ltYm9sLCBfZXh0ZW5kcyh7fSwgcHJvdG90eXBlW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkpO1xuICB9IC8vIEBvdmVycmlkZSBtdXN0IG92ZXJyaWRlIHNvbWV0aGluZ1xuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc092ZXJyaWRlKGFubm90YXRpb24pICYmICFoYXNQcm9wKHByb3RvdHlwZVtzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0sIGtleSkpIHtcbiAgICB2YXIgZmllbGROYW1lID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUgKyBcIi5wcm90b3R5cGUuXCIgKyBrZXkudG9TdHJpbmcoKTtcbiAgICBkaWUoXCInXCIgKyBmaWVsZE5hbWUgKyBcIicgaXMgZGVjb3JhdGVkIHdpdGggJ292ZXJyaWRlJywgXCIgKyBcImJ1dCBubyBzdWNoIGRlY29yYXRlZCBtZW1iZXIgd2FzIGZvdW5kIG9uIHByb3RvdHlwZS5cIik7XG4gIH0gLy8gQ2Fubm90IHJlLWRlY29yYXRlXG5cblxuICBhc3NlcnROb3REZWNvcmF0ZWQocHJvdG90eXBlLCBhbm5vdGF0aW9uLCBrZXkpOyAvLyBJZ25vcmUgb3ZlcnJpZGVcblxuICBpZiAoIWlzT3ZlcnJpZGUoYW5ub3RhdGlvbikpIHtcbiAgICBwcm90b3R5cGVbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdW2tleV0gPSBhbm5vdGF0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE5vdERlY29yYXRlZChwcm90b3R5cGUsIGFubm90YXRpb24sIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc092ZXJyaWRlKGFubm90YXRpb24pICYmIGhhc1Byb3AocHJvdG90eXBlW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSwga2V5KSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSBwcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSArIFwiLnByb3RvdHlwZS5cIiArIGtleS50b1N0cmluZygpO1xuICAgIHZhciBjdXJyZW50QW5ub3RhdGlvblR5cGUgPSBwcm90b3R5cGVbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdW2tleV0uYW5ub3RhdGlvblR5cGVfO1xuICAgIHZhciByZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZSA9IGFubm90YXRpb24uYW5ub3RhdGlvblR5cGVfO1xuICAgIGRpZShcIkNhbm5vdCBhcHBseSAnQFwiICsgcmVxdWVzdGVkQW5ub3RhdGlvblR5cGUgKyBcIicgdG8gJ1wiICsgZmllbGROYW1lICsgXCInOlwiICsgKFwiXFxuVGhlIGZpZWxkIGlzIGFscmVhZHkgZGVjb3JhdGVkIHdpdGggJ0BcIiArIGN1cnJlbnRBbm5vdGF0aW9uVHlwZSArIFwiJy5cIikgKyBcIlxcblJlLWRlY29yYXRpbmcgZmllbGRzIGlzIG5vdCBhbGxvd2VkLlwiICsgXCJcXG5Vc2UgJ0BvdmVycmlkZScgZGVjb3JhdG9yIGZvciBtZXRob2RzIG92ZXJyaWRlbiBieSBzdWJjbGFzcy5cIik7XG4gIH1cbn1cbi8qKlxyXG4gKiBDb2xsZWN0cyBhbm5vdGF0aW9ucyBmcm9tIHByb3RvdHlwZXMgYW5kIHN0b3JlcyB0aGVtIG9uIHRhcmdldCAoaW5zdGFuY2UpXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbGxlY3RTdG9yZWRBbm5vdGF0aW9ucyh0YXJnZXQpIHtcbiAgaWYgKCFoYXNQcm9wKHRhcmdldCwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhdGFyZ2V0W3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkge1xuICAgICAgZGllKFwiTm8gYW5ub3RhdGlvbnMgd2VyZSBwYXNzZWQgdG8gbWFrZU9ic2VydmFibGUsIGJ1dCBubyBkZWNvcmF0ZWQgbWVtYmVycyBoYXZlIGJlZW4gZm91bmQgZWl0aGVyXCIpO1xuICAgIH0gLy8gV2UgbmVlZCBhIGNvcHkgYXMgd2Ugd2lsbCByZW1vdmUgYW5ub3RhdGlvbiBmcm9tIHRoZSBsaXN0IG9uY2UgaXQncyBhcHBsaWVkLlxuXG5cbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wsIF9leHRlbmRzKHt9LCB0YXJnZXRbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdKSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0W3N0b3JlZEFubm90YXRpb25zU3ltYm9sXTtcbn1cblxudmFyICRtb2J4ID0gLyojX19QVVJFX18qL1N5bWJvbChcIm1vYnggYWRtaW5pc3RyYXRpb25cIik7XG52YXIgQXRvbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIGZvciBlZmZlY3RpdmUgdW5vYnNlcnZpbmcuIEJhc2VBdG9tIGhhcyB0cnVlLCBmb3IgZXh0cmEgb3B0aW1pemF0aW9uLCBzbyBpdHMgb25CZWNvbWVVbm9ic2VydmVkIG5ldmVyIGdldHMgY2FsbGVkLCBiZWNhdXNlIGl0J3Mgbm90IG5lZWRlZFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBhdG9tLiBGb3IgZGVidWdnaW5nIHB1cnBvc2VzIGl0IGlzIHJlY29tbWVuZGVkIHRvIGdpdmUgaXQgYSBuYW1lLlxyXG4gICAqIFRoZSBvbkJlY29tZU9ic2VydmVkIGFuZCBvbkJlY29tZVVub2JzZXJ2ZWQgY2FsbGJhY2tzIGNhbiBiZSB1c2VkIGZvciByZXNvdXJjZSBtYW5hZ2VtZW50LlxyXG4gICAqL1xuICBmdW5jdGlvbiBBdG9tKG5hbWVfKSB7XG4gICAgaWYgKG5hbWVfID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWVfID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJBdG9tQFwiICsgZ2V0TmV4dElkKCkgOiBcIkF0b21cIjtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbl8gPSBmYWxzZTtcbiAgICB0aGlzLmlzQmVpbmdPYnNlcnZlZF8gPSBmYWxzZTtcbiAgICB0aGlzLm9ic2VydmVyc18gPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5kaWZmVmFsdWVfID0gMDtcbiAgICB0aGlzLmxhc3RBY2Nlc3NlZEJ5XyA9IDA7XG4gICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR187XG4gICAgdGhpcy5vbkJPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm9uQlVPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm5hbWVfID0gbmFtZV87XG4gIH0gLy8gb25CZWNvbWVPYnNlcnZlZExpc3RlbmVyc1xuXG5cbiAgdmFyIF9wcm90byA9IEF0b20ucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkJPID0gZnVuY3Rpb24gb25CTygpIHtcbiAgICBpZiAodGhpcy5vbkJPTCkge1xuICAgICAgdGhpcy5vbkJPTC5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25CVU8gPSBmdW5jdGlvbiBvbkJVTygpIHtcbiAgICBpZiAodGhpcy5vbkJVT0wpIHtcbiAgICAgIHRoaXMub25CVU9MLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBub3RpZnkgbW9ieCB0aGF0IHlvdXIgYXRvbSBoYXMgYmVlbiB1c2VkIHNvbWVob3cuXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGN1cnJlbnRseSBhIHJlYWN0aXZlIGNvbnRleHQuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiByZXBvcnRPYnNlcnZlZCQxKCkge1xuICAgIHJldHVybiByZXBvcnRPYnNlcnZlZCh0aGlzKTtcbiAgfVxuICAvKipcclxuICAgKiBJbnZva2UgdGhpcyBtZXRob2QgX2FmdGVyXyB0aGlzIG1ldGhvZCBoYXMgY2hhbmdlZCB0byBzaWduYWwgbW9ieCB0aGF0IGFsbCBpdHMgb2JzZXJ2ZXJzIHNob3VsZCBpbnZhbGlkYXRlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlcG9ydENoYW5nZWQgPSBmdW5jdGlvbiByZXBvcnRDaGFuZ2VkKCkge1xuICAgIHN0YXJ0QmF0Y2goKTtcbiAgICBwcm9wYWdhdGVDaGFuZ2VkKHRoaXMpO1xuICAgIGVuZEJhdGNoKCk7XG4gIH07XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZV87XG4gIH07XG5cbiAgcmV0dXJuIEF0b207XG59KCk7XG52YXIgaXNBdG9tID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJBdG9tXCIsIEF0b20pO1xuZnVuY3Rpb24gY3JlYXRlQXRvbShuYW1lLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlciwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcikge1xuICBpZiAob25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPT09IHZvaWQgMCkge1xuICAgIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID0gbm9vcDtcbiAgfVxuXG4gIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID09PSB2b2lkIDApIHtcbiAgICBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID0gbm9vcDtcbiAgfVxuXG4gIHZhciBhdG9tID0gbmV3IEF0b20obmFtZSk7IC8vIGRlZmF1bHQgYG5vb3BgIGxpc3RlbmVyIHdpbGwgbm90IGluaXRpYWxpemUgdGhlIGhvb2sgU2V0XG5cbiAgaWYgKG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wKSB7XG4gICAgb25CZWNvbWVPYnNlcnZlZChhdG9tLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlcik7XG4gIH1cblxuICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCkge1xuICAgIG9uQmVjb21lVW5vYnNlcnZlZChhdG9tLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKTtcbiAgfVxuXG4gIHJldHVybiBhdG9tO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eUNvbXBhcmVyKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG5cbmZ1bmN0aW9uIHN0cnVjdHVyYWxDb21wYXJlcihhLCBiKSB7XG4gIHJldHVybiBkZWVwRXF1YWwoYSwgYik7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb21wYXJlcihhLCBiKSB7XG4gIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgMSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XG4gIHJldHVybiBPYmplY3QuaXMoYSwgYik7XG59XG5cbnZhciBjb21wYXJlciA9IHtcbiAgaWRlbnRpdHk6IGlkZW50aXR5Q29tcGFyZXIsXG4gIHN0cnVjdHVyYWw6IHN0cnVjdHVyYWxDb21wYXJlcixcbiAgXCJkZWZhdWx0XCI6IGRlZmF1bHRDb21wYXJlcixcbiAgc2hhbGxvdzogc2hhbGxvd0NvbXBhcmVyXG59O1xuXG5mdW5jdGlvbiBkZWVwRW5oYW5jZXIodiwgXywgbmFtZSkge1xuICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcbiAgaWYgKGlzT2JzZXJ2YWJsZSh2KSkgcmV0dXJuIHY7IC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodikpIHJldHVybiBvYnNlcnZhYmxlLmFycmF5KHYsIHtcbiAgICBuYW1lOiBuYW1lXG4gIH0pO1xuICBpZiAoaXNQbGFpbk9iamVjdCh2KSkgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwge1xuICAgIG5hbWU6IG5hbWVcbiAgfSk7XG4gIGlmIChpc0VTNk1hcCh2KSkgcmV0dXJuIG9ic2VydmFibGUubWFwKHYsIHtcbiAgICBuYW1lOiBuYW1lXG4gIH0pO1xuICBpZiAoaXNFUzZTZXQodikpIHJldHVybiBvYnNlcnZhYmxlLnNldCh2LCB7XG4gICAgbmFtZTogbmFtZVxuICB9KTtcblxuICBpZiAodHlwZW9mIHYgPT09IFwiZnVuY3Rpb25cIiAmJiAhaXNBY3Rpb24odikgJiYgIWlzRmxvdyh2KSkge1xuICAgIGlmIChpc0dlbmVyYXRvcih2KSkge1xuICAgICAgcmV0dXJuIGZsb3codik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhdXRvQWN0aW9uKG5hbWUsIHYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2O1xufVxuZnVuY3Rpb24gc2hhbGxvd0VuaGFuY2VyKHYsIF8sIG5hbWUpIHtcbiAgaWYgKHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsKSByZXR1cm4gdjtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2KSB8fCBpc09ic2VydmFibGVBcnJheSh2KSB8fCBpc09ic2VydmFibGVNYXAodikgfHwgaXNPYnNlcnZhYmxlU2V0KHYpKSByZXR1cm4gdjtcbiAgaWYgKEFycmF5LmlzQXJyYXkodikpIHJldHVybiBvYnNlcnZhYmxlLmFycmF5KHYsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGRlZXA6IGZhbHNlXG4gIH0pO1xuICBpZiAoaXNQbGFpbk9iamVjdCh2KSkgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgZGVlcDogZmFsc2VcbiAgfSk7XG4gIGlmIChpc0VTNk1hcCh2KSkgcmV0dXJuIG9ic2VydmFibGUubWFwKHYsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGRlZXA6IGZhbHNlXG4gIH0pO1xuICBpZiAoaXNFUzZTZXQodikpIHJldHVybiBvYnNlcnZhYmxlLnNldCh2LCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBkZWVwOiBmYWxzZVxuICB9KTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZGllKFwiVGhlIHNoYWxsb3cgbW9kaWZpZXIgLyBkZWNvcmF0b3IgY2FuIG9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGFycmF5cywgb2JqZWN0cywgbWFwcyBhbmQgc2V0c1wiKTtcbn1cbmZ1bmN0aW9uIHJlZmVyZW5jZUVuaGFuY2VyKG5ld1ZhbHVlKSB7XG4gIC8vIG5ldmVyIHR1cm4gaW50byBhbiBvYnNlcnZhYmxlXG4gIHJldHVybiBuZXdWYWx1ZTtcbn1cbmZ1bmN0aW9uIHJlZlN0cnVjdEVuaGFuY2VyKHYsIG9sZFZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNPYnNlcnZhYmxlKHYpKSBkaWUoXCJvYnNlcnZhYmxlLnN0cnVjdCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBvYnNlcnZhYmxlIHZhbHVlc1wiKTtcbiAgaWYgKGRlZXBFcXVhbCh2LCBvbGRWYWx1ZSkpIHJldHVybiBvbGRWYWx1ZTtcbiAgcmV0dXJuIHY7XG59XG5cbnZhciBPVkVSUklERSA9IFwib3ZlcnJpZGVcIjtcbnZhciBvdmVycmlkZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKHtcbiAgYW5ub3RhdGlvblR5cGVfOiBPVkVSUklERSxcbiAgbWFrZV86IG1ha2VfLFxuICBleHRlbmRfOiBleHRlbmRfXG59KTtcbmZ1bmN0aW9uIGlzT3ZlcnJpZGUoYW5ub3RhdGlvbikge1xuICByZXR1cm4gYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV8gPT09IE9WRVJSSURFO1xufVxuXG5mdW5jdGlvbiBtYWtlXyhhZG0sIGtleSkge1xuICAvLyBNdXN0IG5vdCBiZSBwbGFpbiBvYmplY3RcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBhZG0uaXNQbGFpbk9iamVjdF8pIHtcbiAgICBkaWUoXCJDYW5ub3QgYXBwbHkgJ1wiICsgdGhpcy5hbm5vdGF0aW9uVHlwZV8gKyBcIicgdG8gJ1wiICsgYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzpcIiArIChcIlxcbidcIiArIHRoaXMuYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbm5vdCBiZSB1c2VkIG9uIHBsYWluIG9iamVjdHMuXCIpKTtcbiAgfSAvLyBNdXN0IG92ZXJyaWRlIHNvbWV0aGluZ1xuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaGFzUHJvcChhZG0uYXBwbGllZEFubm90YXRpb25zXywga2V5KSkge1xuICAgIGRpZShcIidcIiArIGFkbS5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgKyBcIicgaXMgYW5ub3RhdGVkIHdpdGggJ1wiICsgdGhpcy5hbm5vdGF0aW9uVHlwZV8gKyBcIicsIFwiICsgXCJidXQgbm8gc3VjaCBhbm5vdGF0ZWQgbWVtYmVyIHdhcyBmb3VuZCBvbiBwcm90b3R5cGUuXCIpO1xuICB9XG5cbiAgcmV0dXJuIDBcbiAgLyogQ2FuY2VsICovXG4gIDtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIGRpZShcIidcIiArIHRoaXMuYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCAnbWFrZU9ic2VydmFibGUnXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25Bbm5vdGF0aW9uKG5hbWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBhbm5vdGF0aW9uVHlwZV86IG5hbWUsXG4gICAgb3B0aW9uc186IG9wdGlvbnMsXG4gICAgbWFrZV86IG1ha2VfJDEsXG4gICAgZXh0ZW5kXzogZXh0ZW5kXyQxXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VfJDEoYWRtLCBrZXksIGRlc2NyaXB0b3IsIHNvdXJjZSkge1xuICB2YXIgX3RoaXMkb3B0aW9uc187XG5cbiAgLy8gYm91bmRcbiAgaWYgKChfdGhpcyRvcHRpb25zXyA9IHRoaXMub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zXy5ib3VuZCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlKSA9PT0gbnVsbCA/IDBcbiAgICAvKiBDYW5jZWwgKi9cbiAgICA6IDFcbiAgICAvKiBCcmVhayAqL1xuICAgIDtcbiAgfSAvLyBvd25cblxuXG4gIGlmIChzb3VyY2UgPT09IGFkbS50YXJnZXRfKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgZmFsc2UpID09PSBudWxsID8gMFxuICAgIC8qIENhbmNlbCAqL1xuICAgIDogMlxuICAgIC8qIENvbnRpbnVlICovXG4gICAgO1xuICB9IC8vIHByb3RvdHlwZVxuXG5cbiAgaWYgKGlzQWN0aW9uKGRlc2NyaXB0b3IudmFsdWUpKSB7XG4gICAgLy8gQSBwcm90b3R5cGUgY291bGQgaGF2ZSBiZWVuIGFubm90YXRlZCBhbHJlYWR5IGJ5IG90aGVyIGNvbnN0cnVjdG9yLFxuICAgIC8vIHJlc3Qgb2YgdGhlIHByb3RvIGNoYWluIG11c3QgYmUgYW5ub3RhdGVkIGFscmVhZHlcbiAgICByZXR1cm4gMVxuICAgIC8qIEJyZWFrICovXG4gICAgO1xuICB9XG5cbiAgdmFyIGFjdGlvbkRlc2NyaXB0b3IgPSBjcmVhdGVBY3Rpb25EZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSk7XG4gIGRlZmluZVByb3BlcnR5KHNvdXJjZSwga2V5LCBhY3Rpb25EZXNjcmlwdG9yKTtcbiAgcmV0dXJuIDJcbiAgLyogQ29udGludWUgKi9cbiAgO1xufVxuXG5mdW5jdGlvbiBleHRlbmRfJDEoYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCkge1xuICB2YXIgYWN0aW9uRGVzY3JpcHRvciA9IGNyZWF0ZUFjdGlvbkRlc2NyaXB0b3IoYWRtLCB0aGlzLCBrZXksIGRlc2NyaXB0b3IpO1xuICByZXR1cm4gYWRtLmRlZmluZVByb3BlcnR5XyhrZXksIGFjdGlvbkRlc2NyaXB0b3IsIHByb3h5VHJhcCk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydEFjdGlvbkRlc2NyaXB0b3IoYWRtLCBfcmVmLCBrZXksIF9yZWYyKSB7XG4gIHZhciBhbm5vdGF0aW9uVHlwZV8gPSBfcmVmLmFubm90YXRpb25UeXBlXztcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBkaWUoXCJDYW5ub3QgYXBwbHkgJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIHRvICdcIiArIGFkbS5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgKyBcIic6XCIgKyAoXCJcXG4nXCIgKyBhbm5vdGF0aW9uVHlwZV8gKyBcIicgY2FuIG9ubHkgYmUgdXNlZCBvbiBwcm9wZXJ0aWVzIHdpdGggYSBmdW5jdGlvbiB2YWx1ZS5cIikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbkRlc2NyaXB0b3IoYWRtLCBhbm5vdGF0aW9uLCBrZXksIGRlc2NyaXB0b3IsIC8vIHByb3ZpZGVzIGFiaWxpdHkgdG8gZGlzYWJsZSBzYWZlRGVzY3JpcHRvcnMgZm9yIHByb3RvdHlwZXNcbnNhZmVEZXNjcmlwdG9ycykge1xuICB2YXIgX2Fubm90YXRpb24kb3B0aW9uc18sIF9hbm5vdGF0aW9uJG9wdGlvbnNfJCwgX2Fubm90YXRpb24kb3B0aW9uc18yLCBfYW5ub3RhdGlvbiRvcHRpb25zXyQyLCBfYW5ub3RhdGlvbiRvcHRpb25zXzM7XG5cbiAgaWYgKHNhZmVEZXNjcmlwdG9ycyA9PT0gdm9pZCAwKSB7XG4gICAgc2FmZURlc2NyaXB0b3JzID0gZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzO1xuICB9XG5cbiAgYXNzZXJ0QWN0aW9uRGVzY3JpcHRvcihhZG0sIGFubm90YXRpb24sIGtleSwgZGVzY3JpcHRvcik7XG4gIHZhciB2YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKChfYW5ub3RhdGlvbiRvcHRpb25zXyA9IGFubm90YXRpb24ub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfYW5ub3RhdGlvbiRvcHRpb25zXy5ib3VuZCkge1xuICAgIHZhciBfYWRtJHByb3h5XztcblxuICAgIHZhbHVlID0gdmFsdWUuYmluZCgoX2FkbSRwcm94eV8gPSBhZG0ucHJveHlfKSAhPSBudWxsID8gX2FkbSRwcm94eV8gOiBhZG0udGFyZ2V0Xyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBjcmVhdGVBY3Rpb24oKF9hbm5vdGF0aW9uJG9wdGlvbnNfJCA9IChfYW5ub3RhdGlvbiRvcHRpb25zXzIgPSBhbm5vdGF0aW9uLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX2Fubm90YXRpb24kb3B0aW9uc18yLm5hbWUpICE9IG51bGwgPyBfYW5ub3RhdGlvbiRvcHRpb25zXyQgOiBrZXkudG9TdHJpbmcoKSwgdmFsdWUsIChfYW5ub3RhdGlvbiRvcHRpb25zXyQyID0gKF9hbm5vdGF0aW9uJG9wdGlvbnNfMyA9IGFubm90YXRpb24ub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfYW5ub3RhdGlvbiRvcHRpb25zXzMuYXV0b0FjdGlvbikgIT0gbnVsbCA/IF9hbm5vdGF0aW9uJG9wdGlvbnNfJDIgOiBmYWxzZSksXG4gICAgLy8gTm9uLWNvbmZpZ3VyYWJsZSBmb3IgY2xhc3Nlc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWwgZmllbGQgcmVkZWZpbml0aW9uIGluIHN1YmNsYXNzXG4gICAgY29uZmlndXJhYmxlOiBzYWZlRGVzY3JpcHRvcnMgPyBhZG0uaXNQbGFpbk9iamVjdF8gOiB0cnVlLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9wdWxsLzI2NDEjaXNzdWVjb21tZW50LTczNzI5MjA1OFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIC8vIE5vbi1vYnNldmFibGUsIHRoZXJlZm9yZSBub24td3JpdGFibGVcbiAgICAvLyBBbHNvIHByZXZlbnRzIHJld3JpdGluZyBpbiBzdWJjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHdyaXRhYmxlOiBzYWZlRGVzY3JpcHRvcnMgPyBmYWxzZSA6IHRydWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmxvd0Fubm90YXRpb24obmFtZSwgb3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGFubm90YXRpb25UeXBlXzogbmFtZSxcbiAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICBtYWtlXzogbWFrZV8kMixcbiAgICBleHRlbmRfOiBleHRlbmRfJDJcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV8kMihhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXztcblxuICAvLyBvd25cbiAgaWYgKHNvdXJjZSA9PT0gYWRtLnRhcmdldF8pIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwgPyAwXG4gICAgLyogQ2FuY2VsICovXG4gICAgOiAyXG4gICAgLyogQ29udGludWUgKi9cbiAgICA7XG4gIH0gLy8gcHJvdG90eXBlXG4gIC8vIGJvdW5kIC0gbXVzdCBhbm5vdGF0ZSBwcm90b3MgdG8gc3VwcG9ydCBzdXBlci5mbG93KClcblxuXG4gIGlmICgoKF90aGlzJG9wdGlvbnNfID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfLmJvdW5kKSAmJiAhaXNGbG93KGFkbS50YXJnZXRfW2tleV0pKSB7XG4gICAgaWYgKHRoaXMuZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgZmFsc2UpID09PSBudWxsKSByZXR1cm4gMFxuICAgIC8qIENhbmNlbCAqL1xuICAgIDtcbiAgfVxuXG4gIGlmIChpc0Zsb3coZGVzY3JpcHRvci52YWx1ZSkpIHtcbiAgICAvLyBBIHByb3RvdHlwZSBjb3VsZCBoYXZlIGJlZW4gYW5ub3RhdGVkIGFscmVhZHkgYnkgb3RoZXIgY29uc3RydWN0b3IsXG4gICAgLy8gcmVzdCBvZiB0aGUgcHJvdG8gY2hhaW4gbXVzdCBiZSBhbm5vdGF0ZWQgYWxyZWFkeVxuICAgIHJldHVybiAxXG4gICAgLyogQnJlYWsgKi9cbiAgICA7XG4gIH1cblxuICB2YXIgZmxvd0Rlc2NyaXB0b3IgPSBjcmVhdGVGbG93RGVzY3JpcHRvcihhZG0sIHRoaXMsIGtleSwgZGVzY3JpcHRvciwgZmFsc2UsIGZhbHNlKTtcbiAgZGVmaW5lUHJvcGVydHkoc291cmNlLCBrZXksIGZsb3dEZXNjcmlwdG9yKTtcbiAgcmV0dXJuIDJcbiAgLyogQ29udGludWUgKi9cbiAgO1xufVxuXG5mdW5jdGlvbiBleHRlbmRfJDIoYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCkge1xuICB2YXIgX3RoaXMkb3B0aW9uc18yO1xuXG4gIHZhciBmbG93RGVzY3JpcHRvciA9IGNyZWF0ZUZsb3dEZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yLCAoX3RoaXMkb3B0aW9uc18yID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfMi5ib3VuZCk7XG4gIHJldHVybiBhZG0uZGVmaW5lUHJvcGVydHlfKGtleSwgZmxvd0Rlc2NyaXB0b3IsIHByb3h5VHJhcCk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydEZsb3dEZXNjcmlwdG9yKGFkbSwgX3JlZiwga2V5LCBfcmVmMikge1xuICB2YXIgYW5ub3RhdGlvblR5cGVfID0gX3JlZi5hbm5vdGF0aW9uVHlwZV87XG4gIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgZGllKFwiQ2Fubm90IGFwcGx5ICdcIiArIGFubm90YXRpb25UeXBlXyArIFwiJyB0byAnXCIgKyBhZG0ubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpICsgXCInOlwiICsgKFwiXFxuJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbiBvbmx5IGJlIHVzZWQgb24gcHJvcGVydGllcyB3aXRoIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHZhbHVlLlwiKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRmxvd0Rlc2NyaXB0b3IoYWRtLCBhbm5vdGF0aW9uLCBrZXksIGRlc2NyaXB0b3IsIGJvdW5kLCAvLyBwcm92aWRlcyBhYmlsaXR5IHRvIGRpc2FibGUgc2FmZURlc2NyaXB0b3JzIGZvciBwcm90b3R5cGVzXG5zYWZlRGVzY3JpcHRvcnMpIHtcbiAgaWYgKHNhZmVEZXNjcmlwdG9ycyA9PT0gdm9pZCAwKSB7XG4gICAgc2FmZURlc2NyaXB0b3JzID0gZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzO1xuICB9XG5cbiAgYXNzZXJ0Rmxvd0Rlc2NyaXB0b3IoYWRtLCBhbm5vdGF0aW9uLCBrZXksIGRlc2NyaXB0b3IpO1xuICB2YXIgdmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmIChib3VuZCkge1xuICAgIHZhciBfYWRtJHByb3h5XztcblxuICAgIHZhbHVlID0gdmFsdWUuYmluZCgoX2FkbSRwcm94eV8gPSBhZG0ucHJveHlfKSAhPSBudWxsID8gX2FkbSRwcm94eV8gOiBhZG0udGFyZ2V0Xyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBmbG93KHZhbHVlKSxcbiAgICAvLyBOb24tY29uZmlndXJhYmxlIGZvciBjbGFzc2VzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbCBmaWVsZCByZWRlZmluaXRpb24gaW4gc3ViY2xhc3NcbiAgICBjb25maWd1cmFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGFkbS5pc1BsYWluT2JqZWN0XyA6IHRydWUsXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L3B1bGwvMjY0MSNpc3N1ZWNvbW1lbnQtNzM3MjkyMDU4XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgLy8gTm9uLW9ic2V2YWJsZSwgdGhlcmVmb3JlIG5vbi13cml0YWJsZVxuICAgIC8vIEFsc28gcHJldmVudHMgcmV3cml0aW5nIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yXG4gICAgd3JpdGFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGZhbHNlIDogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlZEFubm90YXRpb24obmFtZSwgb3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGFubm90YXRpb25UeXBlXzogbmFtZSxcbiAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICBtYWtlXzogbWFrZV8kMyxcbiAgICBleHRlbmRfOiBleHRlbmRfJDNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV8kMyhhZG0sIGtleSwgZGVzY3JpcHRvcikge1xuICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwgPyAwXG4gIC8qIENhbmNlbCAqL1xuICA6IDFcbiAgLyogQnJlYWsgKi9cbiAgO1xufVxuXG5mdW5jdGlvbiBleHRlbmRfJDMoYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCkge1xuICBhc3NlcnRDb21wdXRlZERlc2NyaXB0b3IoYWRtLCB0aGlzLCBrZXksIGRlc2NyaXB0b3IpO1xuICByZXR1cm4gYWRtLmRlZmluZUNvbXB1dGVkUHJvcGVydHlfKGtleSwgX2V4dGVuZHMoe30sIHRoaXMub3B0aW9uc18sIHtcbiAgICBnZXQ6IGRlc2NyaXB0b3IuZ2V0LFxuICAgIHNldDogZGVzY3JpcHRvci5zZXRcbiAgfSksIHByb3h5VHJhcCk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydENvbXB1dGVkRGVzY3JpcHRvcihhZG0sIF9yZWYsIGtleSwgX3JlZjIpIHtcbiAgdmFyIGFubm90YXRpb25UeXBlXyA9IF9yZWYuYW5ub3RhdGlvblR5cGVfO1xuICB2YXIgZ2V0ID0gX3JlZjIuZ2V0O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWdldCkge1xuICAgIGRpZShcIkNhbm5vdCBhcHBseSAnXCIgKyBhbm5vdGF0aW9uVHlwZV8gKyBcIicgdG8gJ1wiICsgYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzpcIiArIChcIlxcbidcIiArIGFubm90YXRpb25UeXBlXyArIFwiJyBjYW4gb25seSBiZSB1c2VkIG9uIGdldHRlcigrc2V0dGVyKSBwcm9wZXJ0aWVzLlwiKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24obmFtZSwgb3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGFubm90YXRpb25UeXBlXzogbmFtZSxcbiAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICBtYWtlXzogbWFrZV8kNCxcbiAgICBleHRlbmRfOiBleHRlbmRfJDRcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV8kNChhZG0sIGtleSwgZGVzY3JpcHRvcikge1xuICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwgPyAwXG4gIC8qIENhbmNlbCAqL1xuICA6IDFcbiAgLyogQnJlYWsgKi9cbiAgO1xufVxuXG5mdW5jdGlvbiBleHRlbmRfJDQoYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCkge1xuICB2YXIgX3RoaXMkb3B0aW9uc18kZW5oYW5jLCBfdGhpcyRvcHRpb25zXztcblxuICBhc3NlcnRPYnNlcnZhYmxlRGVzY3JpcHRvcihhZG0sIHRoaXMsIGtleSwgZGVzY3JpcHRvcik7XG4gIHJldHVybiBhZG0uZGVmaW5lT2JzZXJ2YWJsZVByb3BlcnR5XyhrZXksIGRlc2NyaXB0b3IudmFsdWUsIChfdGhpcyRvcHRpb25zXyRlbmhhbmMgPSAoX3RoaXMkb3B0aW9uc18gPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc18uZW5oYW5jZXIpICE9IG51bGwgPyBfdGhpcyRvcHRpb25zXyRlbmhhbmMgOiBkZWVwRW5oYW5jZXIsIHByb3h5VHJhcCk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydE9ic2VydmFibGVEZXNjcmlwdG9yKGFkbSwgX3JlZiwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIHZhciBhbm5vdGF0aW9uVHlwZV8gPSBfcmVmLmFubm90YXRpb25UeXBlXztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICEoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpKSB7XG4gICAgZGllKFwiQ2Fubm90IGFwcGx5ICdcIiArIGFubm90YXRpb25UeXBlXyArIFwiJyB0byAnXCIgKyBhZG0ubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpICsgXCInOlwiICsgKFwiXFxuJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbm5vdCBiZSB1c2VkIG9uIGdldHRlci9zZXR0ZXIgcHJvcGVydGllc1wiKSk7XG4gIH1cbn1cblxudmFyIEFVVE8gPSBcInRydWVcIjtcbnZhciBhdXRvQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVBdXRvQW5ub3RhdGlvbigpO1xuZnVuY3Rpb24gY3JlYXRlQXV0b0Fubm90YXRpb24ob3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGFubm90YXRpb25UeXBlXzogQVVUTyxcbiAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICBtYWtlXzogbWFrZV8kNSxcbiAgICBleHRlbmRfOiBleHRlbmRfJDVcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV8kNShhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXzMsIF90aGlzJG9wdGlvbnNfNDtcblxuICAvLyBnZXR0ZXIgLT4gY29tcHV0ZWRcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGNvbXB1dGVkLm1ha2VfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpO1xuICB9IC8vIGxvbmUgc2V0dGVyIC0+IGFjdGlvbiBzZXR0ZXJcblxuXG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIC8vIFRPRE8gbWFrZSBhY3Rpb24gYXBwbGljYWJsZSB0byBzZXR0ZXIgYW5kIGRlbGVnYXRlIHRvIGFjdGlvbi5tYWtlX1xuICAgIHZhciBzZXQgPSBjcmVhdGVBY3Rpb24oa2V5LnRvU3RyaW5nKCksIGRlc2NyaXB0b3Iuc2V0KTsgLy8gb3duXG5cbiAgICBpZiAoc291cmNlID09PSBhZG0udGFyZ2V0Xykge1xuICAgICAgcmV0dXJuIGFkbS5kZWZpbmVQcm9wZXJ0eV8oa2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzID8gYWRtLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAgICAgc2V0OiBzZXRcbiAgICAgIH0pID09PSBudWxsID8gMFxuICAgICAgLyogQ2FuY2VsICovXG4gICAgICA6IDJcbiAgICAgIC8qIENvbnRpbnVlICovXG4gICAgICA7XG4gICAgfSAvLyBwcm90b1xuXG5cbiAgICBkZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgc2V0OiBzZXRcbiAgICB9KTtcbiAgICByZXR1cm4gMlxuICAgIC8qIENvbnRpbnVlICovXG4gICAgO1xuICB9IC8vIGZ1bmN0aW9uIG9uIHByb3RvIC0+IGF1dG9BY3Rpb24vZmxvd1xuXG5cbiAgaWYgKHNvdXJjZSAhPT0gYWRtLnRhcmdldF8gJiYgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBfdGhpcyRvcHRpb25zXzI7XG5cbiAgICBpZiAoaXNHZW5lcmF0b3IoZGVzY3JpcHRvci52YWx1ZSkpIHtcbiAgICAgIHZhciBfdGhpcyRvcHRpb25zXztcblxuICAgICAgdmFyIGZsb3dBbm5vdGF0aW9uID0gKChfdGhpcyRvcHRpb25zXyA9IHRoaXMub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zXy5hdXRvQmluZCkgPyBmbG93LmJvdW5kIDogZmxvdztcbiAgICAgIHJldHVybiBmbG93QW5ub3RhdGlvbi5tYWtlXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgYWN0aW9uQW5ub3RhdGlvbiA9ICgoX3RoaXMkb3B0aW9uc18yID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfMi5hdXRvQmluZCkgPyBhdXRvQWN0aW9uLmJvdW5kIDogYXV0b0FjdGlvbjtcbiAgICByZXR1cm4gYWN0aW9uQW5ub3RhdGlvbi5tYWtlXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKTtcbiAgfSAvLyBvdGhlciAtPiBvYnNlcnZhYmxlXG4gIC8vIENvcHkgcHJvcHMgZnJvbSBwcm90byBhcyB3ZWxsLCBzZWUgdGVzdDpcbiAgLy8gXCJkZWNvcmF0ZSBzaG91bGQgd29yayB3aXRoIE9iamVjdC5jcmVhdGVcIlxuXG5cbiAgdmFyIG9ic2VydmFibGVBbm5vdGF0aW9uID0gKChfdGhpcyRvcHRpb25zXzMgPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc18zLmRlZXApID09PSBmYWxzZSA/IG9ic2VydmFibGUucmVmIDogb2JzZXJ2YWJsZTsgLy8gaWYgZnVuY3Rpb24gcmVzcGVjdCBhdXRvQmluZCBvcHRpb25cblxuICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJiAoKF90aGlzJG9wdGlvbnNfNCA9IHRoaXMub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zXzQuYXV0b0JpbmQpKSB7XG4gICAgdmFyIF9hZG0kcHJveHlfO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWUuYmluZCgoX2FkbSRwcm94eV8gPSBhZG0ucHJveHlfKSAhPSBudWxsID8gX2FkbSRwcm94eV8gOiBhZG0udGFyZ2V0Xyk7XG4gIH1cblxuICByZXR1cm4gb2JzZXJ2YWJsZUFubm90YXRpb24ubWFrZV8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHNvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZF8kNShhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXzUsIF90aGlzJG9wdGlvbnNfNjtcblxuICAvLyBnZXR0ZXIgLT4gY29tcHV0ZWRcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGNvbXB1dGVkLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCk7XG4gIH0gLy8gbG9uZSBzZXR0ZXIgLT4gYWN0aW9uIHNldHRlclxuXG5cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgLy8gVE9ETyBtYWtlIGFjdGlvbiBhcHBsaWNhYmxlIHRvIHNldHRlciBhbmQgZGVsZWdhdGUgdG8gYWN0aW9uLmV4dGVuZF9cbiAgICByZXR1cm4gYWRtLmRlZmluZVByb3BlcnR5XyhrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzID8gYWRtLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAgIHNldDogY3JlYXRlQWN0aW9uKGtleS50b1N0cmluZygpLCBkZXNjcmlwdG9yLnNldClcbiAgICB9LCBwcm94eVRyYXApO1xuICB9IC8vIG90aGVyIC0+IG9ic2VydmFibGVcbiAgLy8gaWYgZnVuY3Rpb24gcmVzcGVjdCBhdXRvQmluZCBvcHRpb25cblxuXG4gIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmICgoX3RoaXMkb3B0aW9uc181ID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfNS5hdXRvQmluZCkpIHtcbiAgICB2YXIgX2FkbSRwcm94eV8yO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWUuYmluZCgoX2FkbSRwcm94eV8yID0gYWRtLnByb3h5XykgIT0gbnVsbCA/IF9hZG0kcHJveHlfMiA6IGFkbS50YXJnZXRfKTtcbiAgfVxuXG4gIHZhciBvYnNlcnZhYmxlQW5ub3RhdGlvbiA9ICgoX3RoaXMkb3B0aW9uc182ID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfNi5kZWVwKSA9PT0gZmFsc2UgPyBvYnNlcnZhYmxlLnJlZiA6IG9ic2VydmFibGU7XG4gIHJldHVybiBvYnNlcnZhYmxlQW5ub3RhdGlvbi5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApO1xufVxuXG4vLyBpbiB0aGUgbWFqb3JpdHkgb2YgY2FzZXNcblxudmFyIGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyA9IHtcbiAgZGVlcDogdHJ1ZSxcbiAgbmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0RGVjb3JhdG9yOiB1bmRlZmluZWQsXG4gIHByb3h5OiB0cnVlXG59O1xuT2JqZWN0LmZyZWV6ZShkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMpO1xuZnVuY3Rpb24gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyh0aGluZykge1xuICByZXR1cm4gdGhpbmcgfHwgZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zO1xufVxudmFyIG9ic2VydmFibGVBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZU9ic2VydmFibGVBbm5vdGF0aW9uKFwib2JzZXJ2YWJsZVwiKTtcbnZhciBvYnNlcnZhYmxlUmVmQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVPYnNlcnZhYmxlQW5ub3RhdGlvbihcIm9ic2VydmFibGUucmVmXCIsIHtcbiAgZW5oYW5jZXI6IHJlZmVyZW5jZUVuaGFuY2VyXG59KTtcbnZhciBvYnNlcnZhYmxlU2hhbGxvd0Fubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24oXCJvYnNlcnZhYmxlLnNoYWxsb3dcIiwge1xuICBlbmhhbmNlcjogc2hhbGxvd0VuaGFuY2VyXG59KTtcbnZhciBvYnNlcnZhYmxlU3RydWN0QW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVPYnNlcnZhYmxlQW5ub3RhdGlvbihcIm9ic2VydmFibGUuc3RydWN0XCIsIHtcbiAgZW5oYW5jZXI6IHJlZlN0cnVjdEVuaGFuY2VyXG59KTtcbnZhciBvYnNlcnZhYmxlRGVjb3JhdG9yQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKG9ic2VydmFibGVBbm5vdGF0aW9uKTtcbmZ1bmN0aW9uIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5kZWVwID09PSB0cnVlID8gZGVlcEVuaGFuY2VyIDogb3B0aW9ucy5kZWVwID09PSBmYWxzZSA/IHJlZmVyZW5jZUVuaGFuY2VyIDogZ2V0RW5oYW5jZXJGcm9tQW5ub3RhdGlvbihvcHRpb25zLmRlZmF1bHREZWNvcmF0b3IpO1xufVxuZnVuY3Rpb24gZ2V0QW5ub3RhdGlvbkZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGRlZmF1bHREZWNvcjtcblxuICByZXR1cm4gb3B0aW9ucyA/IChfb3B0aW9ucyRkZWZhdWx0RGVjb3IgPSBvcHRpb25zLmRlZmF1bHREZWNvcmF0b3IpICE9IG51bGwgPyBfb3B0aW9ucyRkZWZhdWx0RGVjb3IgOiBjcmVhdGVBdXRvQW5ub3RhdGlvbihvcHRpb25zKSA6IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGdldEVuaGFuY2VyRnJvbUFubm90YXRpb24oYW5ub3RhdGlvbikge1xuICB2YXIgX2Fubm90YXRpb24kb3B0aW9uc18kLCBfYW5ub3RhdGlvbiRvcHRpb25zXztcblxuICByZXR1cm4gIWFubm90YXRpb24gPyBkZWVwRW5oYW5jZXIgOiAoX2Fubm90YXRpb24kb3B0aW9uc18kID0gKF9hbm5vdGF0aW9uJG9wdGlvbnNfID0gYW5ub3RhdGlvbi5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hbm5vdGF0aW9uJG9wdGlvbnNfLmVuaGFuY2VyKSAhPSBudWxsID8gX2Fubm90YXRpb24kb3B0aW9uc18kIDogZGVlcEVuaGFuY2VyO1xufVxuLyoqXHJcbiAqIFR1cm5zIGFuIG9iamVjdCwgYXJyYXkgb3IgZnVuY3Rpb24gaW50byBhIHJlYWN0aXZlIHN0cnVjdHVyZS5cclxuICogQHBhcmFtIHYgdGhlIHZhbHVlIHdoaWNoIHNob3VsZCBiZWNvbWUgb2JzZXJ2YWJsZS5cclxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGUodiwgYXJnMiwgYXJnMykge1xuICAvLyBAb2JzZXJ2YWJsZSBzb21lUHJvcDtcbiAgaWYgKGlzU3RyaW5naXNoKGFyZzIpKSB7XG4gICAgc3RvcmVBbm5vdGF0aW9uKHYsIGFyZzIsIG9ic2VydmFibGVBbm5vdGF0aW9uKTtcbiAgICByZXR1cm47XG4gIH0gLy8gYWxyZWFkeSBvYnNlcnZhYmxlIC0gaWdub3JlXG5cblxuICBpZiAoaXNPYnNlcnZhYmxlKHYpKSByZXR1cm4gdjsgLy8gcGxhaW4gb2JqZWN0XG5cbiAgaWYgKGlzUGxhaW5PYmplY3QodikpIHJldHVybiBvYnNlcnZhYmxlLm9iamVjdCh2LCBhcmcyLCBhcmczKTsgLy8gQXJyYXlcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2KSkgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwgYXJnMik7IC8vIE1hcFxuXG4gIGlmIChpc0VTNk1hcCh2KSkgcmV0dXJuIG9ic2VydmFibGUubWFwKHYsIGFyZzIpOyAvLyBTZXRcblxuICBpZiAoaXNFUzZTZXQodikpIHJldHVybiBvYnNlcnZhYmxlLnNldCh2LCBhcmcyKTsgLy8gb3RoZXIgb2JqZWN0IC0gaWdub3JlXG5cbiAgaWYgKHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYgIT09IG51bGwpIHJldHVybiB2OyAvLyBhbnl0aGluZyBlbHNlXG5cbiAgcmV0dXJuIG9ic2VydmFibGUuYm94KHYsIGFyZzIpO1xufVxuXG5PYmplY3QuYXNzaWduKGNyZWF0ZU9ic2VydmFibGUsIG9ic2VydmFibGVEZWNvcmF0b3JBbm5vdGF0aW9uKTtcbnZhciBvYnNlcnZhYmxlRmFjdG9yaWVzID0ge1xuICBib3g6IGZ1bmN0aW9uIGJveCh2YWx1ZSwgb3B0aW9ucykge1xuICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lLCB0cnVlLCBvLmVxdWFscyk7XG4gIH0sXG4gIGFycmF5OiBmdW5jdGlvbiBhcnJheShpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XG4gICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiAoZ2xvYmFsU3RhdGUudXNlUHJveGllcyA9PT0gZmFsc2UgfHwgby5wcm94eSA9PT0gZmFsc2UgPyBjcmVhdGVMZWdhY3lBcnJheSA6IGNyZWF0ZU9ic2VydmFibGVBcnJheSkoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcbiAgfSxcbiAgbWFwOiBmdW5jdGlvbiBtYXAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVNYXAoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVTZXQoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcbiAgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiBvYmplY3QocHJvcHMsIGRlY29yYXRvcnMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZShnbG9iYWxTdGF0ZS51c2VQcm94aWVzID09PSBmYWxzZSB8fCAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wcm94eSkgPT09IGZhbHNlID8gYXNPYnNlcnZhYmxlT2JqZWN0KHt9LCBvcHRpb25zKSA6IGFzRHluYW1pY09ic2VydmFibGVPYmplY3Qoe30sIG9wdGlvbnMpLCBwcm9wcywgZGVjb3JhdG9ycyk7XG4gIH0sXG4gIHJlZjogLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24ob2JzZXJ2YWJsZVJlZkFubm90YXRpb24pLFxuICBzaGFsbG93OiAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihvYnNlcnZhYmxlU2hhbGxvd0Fubm90YXRpb24pLFxuICBkZWVwOiBvYnNlcnZhYmxlRGVjb3JhdG9yQW5ub3RhdGlvbixcbiAgc3RydWN0OiAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihvYnNlcnZhYmxlU3RydWN0QW5ub3RhdGlvbilcbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG52YXIgb2JzZXJ2YWJsZSA9IC8qI19fUFVSRV9fKi9hc3NpZ24oY3JlYXRlT2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZUZhY3Rvcmllcyk7XG5cbnZhciBDT01QVVRFRCA9IFwiY29tcHV0ZWRcIjtcbnZhciBDT01QVVRFRF9TVFJVQ1QgPSBcImNvbXB1dGVkLnN0cnVjdFwiO1xudmFyIGNvbXB1dGVkQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb21wdXRlZEFubm90YXRpb24oQ09NUFVURUQpO1xudmFyIGNvbXB1dGVkU3RydWN0QW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb21wdXRlZEFubm90YXRpb24oQ09NUFVURURfU1RSVUNULCB7XG4gIGVxdWFsczogY29tcGFyZXIuc3RydWN0dXJhbFxufSk7XG4vKipcclxuICogRGVjb3JhdG9yIGZvciBjbGFzcyBwcm9wZXJ0aWVzOiBAY29tcHV0ZWQgZ2V0IHZhbHVlKCkgeyByZXR1cm4gZXhwcjsgfS5cclxuICogRm9yIGxlZ2FjeSBwdXJwb3NlcyBhbHNvIGludm9rYWJsZSBhcyBFUzUgb2JzZXJ2YWJsZSBjcmVhdGVkOiBgY29tcHV0ZWQoKCkgPT4gZXhwcilgO1xyXG4gKi9cblxudmFyIGNvbXB1dGVkID0gZnVuY3Rpb24gY29tcHV0ZWQoYXJnMSwgYXJnMikge1xuICBpZiAoaXNTdHJpbmdpc2goYXJnMikpIHtcbiAgICAvLyBAY29tcHV0ZWRcbiAgICByZXR1cm4gc3RvcmVBbm5vdGF0aW9uKGFyZzEsIGFyZzIsIGNvbXB1dGVkQW5ub3RhdGlvbik7XG4gIH1cblxuICBpZiAoaXNQbGFpbk9iamVjdChhcmcxKSkge1xuICAgIC8vIEBjb21wdXRlZCh7IG9wdGlvbnMgfSlcbiAgICByZXR1cm4gY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihjcmVhdGVDb21wdXRlZEFubm90YXRpb24oQ09NUFVURUQsIGFyZzEpKTtcbiAgfSAvLyBjb21wdXRlZChleHByLCBvcHRpb25zPylcblxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oYXJnMSkpIGRpZShcIkZpcnN0IGFyZ3VtZW50IHRvIGBjb21wdXRlZGAgc2hvdWxkIGJlIGFuIGV4cHJlc3Npb24uXCIpO1xuICAgIGlmIChpc0Z1bmN0aW9uKGFyZzIpKSBkaWUoXCJBIHNldHRlciBhcyBzZWNvbmQgYXJndW1lbnQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCwgdXNlIGB7IHNldDogZm4gfWAgb3B0aW9uIGluc3RlYWRcIik7XG4gIH1cblxuICB2YXIgb3B0cyA9IGlzUGxhaW5PYmplY3QoYXJnMikgPyBhcmcyIDoge307XG4gIG9wdHMuZ2V0ID0gYXJnMTtcbiAgb3B0cy5uYW1lIHx8IChvcHRzLm5hbWUgPSBhcmcxLm5hbWUgfHwgXCJcIik7XG4gIC8qIGZvciBnZW5lcmF0ZWQgbmFtZSAqL1xuXG4gIHJldHVybiBuZXcgQ29tcHV0ZWRWYWx1ZShvcHRzKTtcbn07XG5PYmplY3QuYXNzaWduKGNvbXB1dGVkLCBjb21wdXRlZEFubm90YXRpb24pO1xuY29tcHV0ZWQuc3RydWN0ID0gLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24oY29tcHV0ZWRTdHJ1Y3RBbm5vdGF0aW9uKTtcblxudmFyIF9nZXREZXNjcmlwdG9yJGNvbmZpZywgX2dldERlc2NyaXB0b3I7XG4vLyBtb2J4IHZlcnNpb25zXG5cbnZhciBjdXJyZW50QWN0aW9uSWQgPSAwO1xudmFyIG5leHRBY3Rpb25JZCA9IDE7XG52YXIgaXNGdW5jdGlvbk5hbWVDb25maWd1cmFibGUgPSAoX2dldERlc2NyaXB0b3IkY29uZmlnID0gKF9nZXREZXNjcmlwdG9yID0gLyojX19QVVJFX18qL2dldERlc2NyaXB0b3IoZnVuY3Rpb24gKCkge30sIFwibmFtZVwiKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9nZXREZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkgIT0gbnVsbCA/IF9nZXREZXNjcmlwdG9yJGNvbmZpZyA6IGZhbHNlOyAvLyB3ZSBjYW4gc2FmZWx5IHJlY3ljbGUgdGhpcyBvYmplY3RcblxudmFyIHRtcE5hbWVEZXNjcmlwdG9yID0ge1xuICB2YWx1ZTogXCJhY3Rpb25cIixcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIGVudW1lcmFibGU6IGZhbHNlXG59O1xuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCBhdXRvQWN0aW9uLCByZWYpIHtcbiAgaWYgKGF1dG9BY3Rpb24gPT09IHZvaWQgMCkge1xuICAgIGF1dG9BY3Rpb24gPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSBkaWUoXCJgYWN0aW9uYCBjYW4gb25seSBiZSBpbnZva2VkIG9uIGZ1bmN0aW9uc1wiKTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbk5hbWUgIT09IFwic3RyaW5nXCIgfHwgIWFjdGlvbk5hbWUpIGRpZShcImFjdGlvbnMgc2hvdWxkIGhhdmUgdmFsaWQgbmFtZXMsIGdvdDogJ1wiICsgYWN0aW9uTmFtZSArIFwiJ1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcygpIHtcbiAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBhdXRvQWN0aW9uLCBmbiwgcmVmIHx8IHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcblxuICBpZiAoaXNGdW5jdGlvbk5hbWVDb25maWd1cmFibGUpIHtcbiAgICB0bXBOYW1lRGVzY3JpcHRvci52YWx1ZSA9IGFjdGlvbk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcywgXCJuYW1lXCIsIHRtcE5hbWVEZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGNhblJ1bkFzRGVyaXZhdGlvbiwgZm4sIHNjb3BlLCBhcmdzKSB7XG4gIHZhciBydW5JbmZvID0gX3N0YXJ0QWN0aW9uKGFjdGlvbk5hbWUsIGNhblJ1bkFzRGVyaXZhdGlvbiwgc2NvcGUsIGFyZ3MpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcnVuSW5mby5lcnJvcl8gPSBlcnI7XG4gICAgdGhyb3cgZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIF9lbmRBY3Rpb24ocnVuSW5mbyk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9zdGFydEFjdGlvbihhY3Rpb25OYW1lLCBjYW5SdW5Bc0Rlcml2YXRpb24sIC8vIHRydWUgZm9yIGF1dG9BY3Rpb25cbnNjb3BlLCBhcmdzKSB7XG4gIHZhciBub3RpZnlTcHlfID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpICYmICEhYWN0aW9uTmFtZTtcbiAgdmFyIHN0YXJ0VGltZV8gPSAwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5Xykge1xuICAgIHN0YXJ0VGltZV8gPSBEYXRlLm5vdygpO1xuICAgIHZhciBmbGF0dGVuZWRBcmdzID0gYXJncyA/IEFycmF5LmZyb20oYXJncykgOiBFTVBUWV9BUlJBWTtcbiAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICB0eXBlOiBBQ1RJT04sXG4gICAgICBuYW1lOiBhY3Rpb25OYW1lLFxuICAgICAgb2JqZWN0OiBzY29wZSxcbiAgICAgIGFyZ3VtZW50czogZmxhdHRlbmVkQXJnc1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHByZXZEZXJpdmF0aW9uXyA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgdmFyIHJ1bkFzQWN0aW9uID0gIWNhblJ1bkFzRGVyaXZhdGlvbiB8fCAhcHJldkRlcml2YXRpb25fO1xuICBzdGFydEJhdGNoKCk7XG4gIHZhciBwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXM7IC8vIGJ5IGRlZmF1bHQgcHJlc2VydmUgcHJldmlvdXMgYWxsb3dcblxuICBpZiAocnVuQXNBY3Rpb24pIHtcbiAgICB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHByZXZBbGxvd1N0YXRlQ2hhbmdlc18gPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICB9XG5cbiAgdmFyIHByZXZBbGxvd1N0YXRlUmVhZHNfID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gIHZhciBydW5JbmZvID0ge1xuICAgIHJ1bkFzQWN0aW9uXzogcnVuQXNBY3Rpb24sXG4gICAgcHJldkRlcml2YXRpb25fOiBwcmV2RGVyaXZhdGlvbl8sXG4gICAgcHJldkFsbG93U3RhdGVDaGFuZ2VzXzogcHJldkFsbG93U3RhdGVDaGFuZ2VzXyxcbiAgICBwcmV2QWxsb3dTdGF0ZVJlYWRzXzogcHJldkFsbG93U3RhdGVSZWFkc18sXG4gICAgbm90aWZ5U3B5Xzogbm90aWZ5U3B5XyxcbiAgICBzdGFydFRpbWVfOiBzdGFydFRpbWVfLFxuICAgIGFjdGlvbklkXzogbmV4dEFjdGlvbklkKyssXG4gICAgcGFyZW50QWN0aW9uSWRfOiBjdXJyZW50QWN0aW9uSWRcbiAgfTtcbiAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5hY3Rpb25JZF87XG4gIHJldHVybiBydW5JbmZvO1xufVxuZnVuY3Rpb24gX2VuZEFjdGlvbihydW5JbmZvKSB7XG4gIGlmIChjdXJyZW50QWN0aW9uSWQgIT09IHJ1bkluZm8uYWN0aW9uSWRfKSB7XG4gICAgZGllKDMwKTtcbiAgfVxuXG4gIGN1cnJlbnRBY3Rpb25JZCA9IHJ1bkluZm8ucGFyZW50QWN0aW9uSWRfO1xuXG4gIGlmIChydW5JbmZvLmVycm9yXyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IHRydWU7XG4gIH1cblxuICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChydW5JbmZvLnByZXZBbGxvd1N0YXRlQ2hhbmdlc18pO1xuICBhbGxvd1N0YXRlUmVhZHNFbmQocnVuSW5mby5wcmV2QWxsb3dTdGF0ZVJlYWRzXyk7XG4gIGVuZEJhdGNoKCk7XG4gIGlmIChydW5JbmZvLnJ1bkFzQWN0aW9uXykgdW50cmFja2VkRW5kKHJ1bkluZm8ucHJldkRlcml2YXRpb25fKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHJ1bkluZm8ubm90aWZ5U3B5Xykge1xuICAgIHNweVJlcG9ydEVuZCh7XG4gICAgICB0aW1lOiBEYXRlLm5vdygpIC0gcnVuSW5mby5zdGFydFRpbWVfXG4gICAgfSk7XG4gIH1cblxuICBnbG9iYWxTdGF0ZS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzID0gZmFsc2U7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlcyhhbGxvd1N0YXRlQ2hhbmdlcywgZnVuYykge1xuICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXMpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGZ1bmMoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcbiAgfVxufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydChhbGxvd1N0YXRlQ2hhbmdlcykge1xuICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzO1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzO1xuICByZXR1cm4gcHJldjtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpIHtcbiAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBwcmV2O1xufVxuXG52YXIgX1N5bWJvbCR0b1ByaW1pdGl2ZTtcbnZhciBDUkVBVEUgPSBcImNyZWF0ZVwiO1xuX1N5bWJvbCR0b1ByaW1pdGl2ZSA9IFN5bWJvbC50b1ByaW1pdGl2ZTtcbnZhciBPYnNlcnZhYmxlVmFsdWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BdG9tKSB7XG4gIF9pbmhlcml0c0xvb3NlKE9ic2VydmFibGVWYWx1ZSwgX0F0b20pO1xuXG4gIGZ1bmN0aW9uIE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgZW5oYW5jZXIsIG5hbWVfLCBub3RpZnlTcHksIGVxdWFscykge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVWYWx1ZVwiO1xuICAgIH1cblxuICAgIGlmIChub3RpZnlTcHkgPT09IHZvaWQgMCkge1xuICAgICAgbm90aWZ5U3B5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZXF1YWxzID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFscyA9IGNvbXBhcmVyW1wiZGVmYXVsdFwiXTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9BdG9tLmNhbGwodGhpcywgbmFtZV8pIHx8IHRoaXM7XG4gICAgX3RoaXMuZW5oYW5jZXIgPSB2b2lkIDA7XG4gICAgX3RoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgX3RoaXMuZXF1YWxzID0gdm9pZCAwO1xuICAgIF90aGlzLmhhc1VucmVwb3J0ZWRDaGFuZ2VfID0gZmFsc2U7XG4gICAgX3RoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICBfdGhpcy5jaGFuZ2VMaXN0ZW5lcnNfID0gdm9pZCAwO1xuICAgIF90aGlzLnZhbHVlXyA9IHZvaWQgMDtcbiAgICBfdGhpcy5kZWhhbmNlciA9IHZvaWQgMDtcbiAgICBfdGhpcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xuICAgIF90aGlzLm5hbWVfID0gbmFtZV87XG4gICAgX3RoaXMuZXF1YWxzID0gZXF1YWxzO1xuICAgIF90aGlzLnZhbHVlXyA9IGVuaGFuY2VyKHZhbHVlLCB1bmRlZmluZWQsIG5hbWVfKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5ICYmIGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAvLyBvbmx5IG5vdGlmeSBzcHkgaWYgdGhpcyBpcyBhIHN0YW5kLWFsb25lIG9ic2VydmFibGVcbiAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgIHR5cGU6IENSRUFURSxcbiAgICAgICAgb2JqZWN0OiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwidmFsdWVcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiBfdGhpcy5uYW1lXyxcbiAgICAgICAgbmV3VmFsdWU6IFwiXCIgKyBfdGhpcy52YWx1ZV9cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiBkZWhhbmNlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQobmV3VmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXztcbiAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSk7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCkge1xuICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkge1xuICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJ2YWx1ZVwiLFxuICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldE5ld1ZhbHVlXyhuZXdWYWx1ZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0RW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wcmVwYXJlTmV3VmFsdWVfID0gZnVuY3Rpb24gcHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSkge1xuICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMpO1xuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQ7XG4gICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICB9IC8vIGFwcGx5IG1vZGlmaWVyXG5cblxuICAgIG5ld1ZhbHVlID0gdGhpcy5lbmhhbmNlcihuZXdWYWx1ZSwgdGhpcy52YWx1ZV8sIHRoaXMubmFtZV8pO1xuICAgIHJldHVybiB0aGlzLmVxdWFscyh0aGlzLnZhbHVlXywgbmV3VmFsdWUpID8gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEIDogbmV3VmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLnNldE5ld1ZhbHVlXyA9IGZ1bmN0aW9uIHNldE5ld1ZhbHVlXyhuZXdWYWx1ZSkge1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWVfO1xuICAgIHRoaXMudmFsdWVfID0gbmV3VmFsdWU7XG4gICAgdGhpcy5yZXBvcnRDaGFuZ2VkKCk7XG5cbiAgICBpZiAoaGFzTGlzdGVuZXJzKHRoaXMpKSB7XG4gICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywge1xuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHRoaXMucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodGhpcy52YWx1ZV8pO1xuICB9O1xuXG4gIF9wcm90by5pbnRlcmNlcHRfID0gZnVuY3Rpb24gaW50ZXJjZXB0XyhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gIH07XG5cbiAgX3Byb3RvLm9ic2VydmVfID0gZnVuY3Rpb24gb2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpIGxpc3RlbmVyKHtcbiAgICAgIG9ic2VydmFibGVLaW5kOiBcInZhbHVlXCIsXG4gICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICB0eXBlOiBVUERBVEUsXG4gICAgICBuZXdWYWx1ZTogdGhpcy52YWx1ZV8sXG4gICAgICBvbGRWYWx1ZTogdW5kZWZpbmVkXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5yYXcgPSBmdW5jdGlvbiByYXcoKSB7XG4gICAgLy8gdXNlZCBieSBNU1Qgb3QgZ2V0IHVuZGVoYW5jZWQgdmFsdWVcbiAgICByZXR1cm4gdGhpcy52YWx1ZV87XG4gIH07XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXyArIFwiW1wiICsgdGhpcy52YWx1ZV8gKyBcIl1cIjtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICB9O1xuXG4gIF9wcm90b1tfU3ltYm9sJHRvUHJpbWl0aXZlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gIH07XG5cbiAgcmV0dXJuIE9ic2VydmFibGVWYWx1ZTtcbn0oQXRvbSk7XG52YXIgaXNPYnNlcnZhYmxlVmFsdWUgPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVWYWx1ZVwiLCBPYnNlcnZhYmxlVmFsdWUpO1xuXG52YXIgX1N5bWJvbCR0b1ByaW1pdGl2ZSQxO1xuLyoqXHJcbiAqIEEgbm9kZSBpbiB0aGUgc3RhdGUgZGVwZW5kZW5jeSByb290IHRoYXQgb2JzZXJ2ZXMgb3RoZXIgbm9kZXMsIGFuZCBjYW4gYmUgb2JzZXJ2ZWQgaXRzZWxmLlxyXG4gKlxyXG4gKiBDb21wdXRlZFZhbHVlIHdpbGwgcmVtZW1iZXIgdGhlIHJlc3VsdCBvZiB0aGUgY29tcHV0YXRpb24gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgYmF0Y2gsIG9yXHJcbiAqIHdoaWxlIGJlaW5nIG9ic2VydmVkLlxyXG4gKlxyXG4gKiBEdXJpbmcgdGhpcyB0aW1lIGl0IHdpbGwgcmVjb21wdXRlIG9ubHkgd2hlbiBvbmUgb2YgaXRzIGRpcmVjdCBkZXBlbmRlbmNpZXMgY2hhbmdlZCxcclxuICogYnV0IG9ubHkgd2hlbiBpdCBpcyBiZWluZyBhY2Nlc3NlZCB3aXRoIGBDb21wdXRlZFZhbHVlLmdldCgpYC5cclxuICpcclxuICogSW1wbGVtZW50YXRpb24gZGVzY3JpcHRpb246XHJcbiAqIDEuIEZpcnN0IHRpbWUgaXQncyBiZWluZyBhY2Nlc3NlZCBpdCB3aWxsIGNvbXB1dGUgYW5kIHJlbWVtYmVyIHJlc3VsdFxyXG4gKiAgICBnaXZlIGJhY2sgcmVtZW1iZXJlZCByZXN1bHQgdW50aWwgMi4gaGFwcGVuc1xyXG4gKiAyLiBGaXJzdCB0aW1lIGFueSBkZWVwIGRlcGVuZGVuY3kgY2hhbmdlLCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEUgdG8gYWxsIG9ic2VydmVycywgd2FpdCBmb3IgMy5cclxuICogMy4gV2hlbiBpdCdzIGJlaW5nIGFjY2Vzc2VkLCByZWNvbXB1dGUgaWYgYW55IHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkLlxyXG4gKiAgICBpZiByZXN1bHQgY2hhbmdlZDogcHJvcGFnYXRlIFNUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHRoYXQgd2VyZSBQT1NTSUJMWV9TVEFMRSBmcm9tIHRoZSBsYXN0IHN0ZXAuXHJcbiAqICAgIGdvIHRvIHN0ZXAgMi4gZWl0aGVyIHdheVxyXG4gKlxyXG4gKiBJZiBhdCBhbnkgcG9pbnQgaXQncyBvdXRzaWRlIGJhdGNoIGFuZCBpdCBpc24ndCBvYnNlcnZlZDogcmVzZXQgZXZlcnl0aGluZyBhbmQgZ28gdG8gMS5cclxuICovXG5cbl9TeW1ib2wkdG9QcmltaXRpdmUkMSA9IFN5bWJvbC50b1ByaW1pdGl2ZTtcbnZhciBDb21wdXRlZFZhbHVlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gbm9kZXMgd2UgYXJlIGxvb2tpbmcgYXQuIE91ciB2YWx1ZSBkZXBlbmRzIG9uIHRoZXNlIG5vZGVzXG4gIC8vIGR1cmluZyB0cmFja2luZyBpdCdzIGFuIGFycmF5IHdpdGggbmV3IG9ic2VydmVkIG9ic2VydmVyc1xuICAvLyB0byBjaGVjayBmb3IgY3ljbGVzXG4gIC8vIE4uQjogdW5taW5pZmllZCBhcyBpdCBpcyB1c2VkIGJ5IE1TVFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCB2YWx1ZSBiYXNlZCBvbiBhIGZ1bmN0aW9uIGV4cHJlc3Npb24uXHJcbiAgICpcclxuICAgKiBUaGUgYG5hbWVgIHByb3BlcnR5IGlzIGZvciBkZWJ1ZyBwdXJwb3NlcyBvbmx5LlxyXG4gICAqXHJcbiAgICogVGhlIGBlcXVhbHNgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcGFyZXIgZnVuY3Rpb24gdG8gdXNlIHRvIGRldGVybWluZSBpZiBhIG5ld2x5IHByb2R1Y2VkXHJcbiAgICogdmFsdWUgZGlmZmVycyBmcm9tIHRoZSBwcmV2aW91cyB2YWx1ZS4gVHdvIGNvbXBhcmVycyBhcmUgcHJvdmlkZWQgaW4gdGhlIGxpYnJhcnk7IGBkZWZhdWx0Q29tcGFyZXJgXHJcbiAgICogY29tcGFyZXMgYmFzZWQgb24gaWRlbnRpdHkgY29tcGFyaXNvbiAoPT09KSwgYW5kIGBzdHJ1Y3R1cmFsQ29tcGFyZXJgIGRlZXBseSBjb21wYXJlcyB0aGUgc3RydWN0dXJlLlxyXG4gICAqIFN0cnVjdHVyYWwgY29tcGFyaXNvbiBjYW4gYmUgY29udmVuaWVudCBpZiB5b3UgYWx3YXlzIHByb2R1Y2UgYSBuZXcgYWdncmVnYXRlZCBvYmplY3QgYW5kXHJcbiAgICogZG9uJ3Qgd2FudCB0byBub3RpZnkgb2JzZXJ2ZXJzIGlmIGl0IGlzIHN0cnVjdHVyYWxseSB0aGUgc2FtZS5cclxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igd29ya2luZyB3aXRoIHZlY3RvcnMsIG1vdXNlIGNvb3JkaW5hdGVzIGV0Yy5cclxuICAgKi9cbiAgZnVuY3Rpb24gQ29tcHV0ZWRWYWx1ZShvcHRpb25zKSB7XG4gICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5OT1RfVFJBQ0tJTkdfO1xuICAgIHRoaXMub2JzZXJ2aW5nXyA9IFtdO1xuICAgIHRoaXMubmV3T2JzZXJ2aW5nXyA9IG51bGw7XG4gICAgdGhpcy5pc0JlaW5nT2JzZXJ2ZWRfID0gZmFsc2U7XG4gICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IGZhbHNlO1xuICAgIHRoaXMub2JzZXJ2ZXJzXyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmRpZmZWYWx1ZV8gPSAwO1xuICAgIHRoaXMucnVuSWRfID0gMDtcbiAgICB0aGlzLmxhc3RBY2Nlc3NlZEJ5XyA9IDA7XG4gICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfO1xuICAgIHRoaXMudW5ib3VuZERlcHNDb3VudF8gPSAwO1xuICAgIHRoaXMudmFsdWVfID0gbmV3IENhdWdodEV4Y2VwdGlvbihudWxsKTtcbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMudHJpZ2dlcmVkQnlfID0gdm9pZCAwO1xuICAgIHRoaXMuaXNDb21wdXRpbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXJfID0gZmFsc2U7XG4gICAgdGhpcy5kZXJpdmF0aW9uID0gdm9pZCAwO1xuICAgIHRoaXMuc2V0dGVyXyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzVHJhY2luZ18gPSBUcmFjZU1vZGUuTk9ORTtcbiAgICB0aGlzLnNjb3BlXyA9IHZvaWQgMDtcbiAgICB0aGlzLmVxdWFsc18gPSB2b2lkIDA7XG4gICAgdGhpcy5yZXF1aXJlc1JlYWN0aW9uXyA9IHZvaWQgMDtcbiAgICB0aGlzLmtlZXBBbGl2ZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5vbkJPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm9uQlVPTCA9IHZvaWQgMDtcbiAgICBpZiAoIW9wdGlvbnMuZ2V0KSBkaWUoMzEpO1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IG9wdGlvbnMuZ2V0O1xuICAgIHRoaXMubmFtZV8gPSBvcHRpb25zLm5hbWUgfHwgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiQ29tcHV0ZWRWYWx1ZUBcIiArIGdldE5leHRJZCgpIDogXCJDb21wdXRlZFZhbHVlXCIpO1xuXG4gICAgaWYgKG9wdGlvbnMuc2V0KSB7XG4gICAgICB0aGlzLnNldHRlcl8gPSBjcmVhdGVBY3Rpb24ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdGhpcy5uYW1lXyArIFwiLXNldHRlclwiIDogXCJDb21wdXRlZFZhbHVlLXNldHRlclwiLCBvcHRpb25zLnNldCk7XG4gICAgfVxuXG4gICAgdGhpcy5lcXVhbHNfID0gb3B0aW9ucy5lcXVhbHMgfHwgKG9wdGlvbnMuY29tcGFyZVN0cnVjdHVyYWwgfHwgb3B0aW9ucy5zdHJ1Y3QgPyBjb21wYXJlci5zdHJ1Y3R1cmFsIDogY29tcGFyZXJbXCJkZWZhdWx0XCJdKTtcbiAgICB0aGlzLnNjb3BlXyA9IG9wdGlvbnMuY29udGV4dDtcbiAgICB0aGlzLnJlcXVpcmVzUmVhY3Rpb25fID0gISFvcHRpb25zLnJlcXVpcmVzUmVhY3Rpb247XG4gICAgdGhpcy5rZWVwQWxpdmVfID0gISFvcHRpb25zLmtlZXBBbGl2ZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb21wdXRlZFZhbHVlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25CZWNvbWVTdGFsZV8gPSBmdW5jdGlvbiBvbkJlY29tZVN0YWxlXygpIHtcbiAgICBwcm9wYWdhdGVNYXliZUNoYW5nZWQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQk8gPSBmdW5jdGlvbiBvbkJPKCkge1xuICAgIGlmICh0aGlzLm9uQk9MKSB7XG4gICAgICB0aGlzLm9uQk9MLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkJVTyA9IGZ1bmN0aW9uIG9uQlVPKCkge1xuICAgIGlmICh0aGlzLm9uQlVPTCkge1xuICAgICAgdGhpcy5vbkJVT0wuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIGNvbXB1dGVkIHZhbHVlLlxyXG4gICAqIFdpbGwgZXZhbHVhdGUgaXRzIGNvbXB1dGF0aW9uIGZpcnN0IGlmIG5lZWRlZC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgaWYgKHRoaXMuaXNDb21wdXRpbmdfKSBkaWUoMzIsIHRoaXMubmFtZV8sIHRoaXMuZGVyaXZhdGlvbik7XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA9PT0gMCAmJiAvLyAhZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0cGlvbiAmJlxuICAgIHRoaXMub2JzZXJ2ZXJzXy5zaXplID09PSAwICYmICF0aGlzLmtlZXBBbGl2ZV8pIHtcbiAgICAgIGlmIChzaG91bGRDb21wdXRlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMud2FybkFib3V0VW50cmFja2VkUmVhZF8oKTtcbiAgICAgICAgc3RhcnRCYXRjaCgpOyAvLyBTZWUgcGVyZiB0ZXN0ICdjb21wdXRlZCBtZW1vaXphdGlvbidcblxuICAgICAgICB0aGlzLnZhbHVlXyA9IHRoaXMuY29tcHV0ZVZhbHVlXyhmYWxzZSk7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xuICAgICAgICB2YXIgcHJldlRyYWNraW5nQ29udGV4dCA9IGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMua2VlcEFsaXZlXyAmJiAhcHJldlRyYWNraW5nQ29udGV4dCkgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMudHJhY2tBbmRDb21wdXRlKCkpIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCh0aGlzKTtcbiAgICAgICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gcHJldlRyYWNraW5nQ29udGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gdGhpcy52YWx1ZV87XG4gICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpIHRocm93IHJlc3VsdC5jYXVzZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zZXR0ZXJfKSB7XG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmdTZXR0ZXJfKSBkaWUoMzMsIHRoaXMubmFtZV8pO1xuICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXJfID0gdHJ1ZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zZXR0ZXJfLmNhbGwodGhpcy5zY29wZV8sIHZhbHVlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyXyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBkaWUoMzQsIHRoaXMubmFtZV8pO1xuICB9O1xuXG4gIF9wcm90by50cmFja0FuZENvbXB1dGUgPSBmdW5jdGlvbiB0cmFja0FuZENvbXB1dGUoKSB7XG4gICAgLy8gTi5COiB1bm1pbmlmaWVkIGFzIGl0IGlzIHVzZWQgYnkgTVNUXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZV87XG4gICAgdmFyIHdhc1N1c3BlbmRlZCA9XG4gICAgLyogc2VlICMxMjA4ICovXG4gICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR187XG4gICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWVfKHRydWUpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwiY29tcHV0ZWRcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICBvYmplY3Q6IHRoaXMuc2NvcGVfLFxuICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICBvbGRWYWx1ZTogdGhpcy52YWx1ZV8sXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNoYW5nZWQgPSB3YXNTdXNwZW5kZWQgfHwgaXNDYXVnaHRFeGNlcHRpb24ob2xkVmFsdWUpIHx8IGlzQ2F1Z2h0RXhjZXB0aW9uKG5ld1ZhbHVlKSB8fCAhdGhpcy5lcXVhbHNfKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy52YWx1ZV8gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfTtcblxuICBfcHJvdG8uY29tcHV0ZVZhbHVlXyA9IGZ1bmN0aW9uIGNvbXB1dGVWYWx1ZV8odHJhY2spIHtcbiAgICB0aGlzLmlzQ29tcHV0aW5nXyA9IHRydWU7IC8vIGRvbid0IGFsbG93IHN0YXRlIGNoYW5nZXMgZHVyaW5nIGNvbXB1dGF0aW9uXG5cbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoZmFsc2UpO1xuICAgIHZhciByZXM7XG5cbiAgICBpZiAodHJhY2spIHtcbiAgICAgIHJlcyA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIHRoaXMuZGVyaXZhdGlvbiwgdGhpcy5zY29wZV8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlXyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGVfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlcyA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcbiAgICB0aGlzLmlzQ29tcHV0aW5nXyA9IGZhbHNlO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgX3Byb3RvLnN1c3BlbmRfID0gZnVuY3Rpb24gc3VzcGVuZF8oKSB7XG4gICAgaWYgKCF0aGlzLmtlZXBBbGl2ZV8pIHtcbiAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xuICAgICAgdGhpcy52YWx1ZV8gPSB1bmRlZmluZWQ7IC8vIGRvbid0IGhvbGQgb24gdG8gY29tcHV0ZWQgdmFsdWUhXG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG4gICAgdmFyIHByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gYXV0b3J1bihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUT0RPOiB3aHkgaXMgdGhpcyBpbiBhIGRpZmZlcmVudCBwbGFjZSB0aGFuIHRoZSBzcHlSZXBvcnQoKSBmdW5jdGlvbj8gaW4gYWxsIG90aGVyIG9ic2VydmFibGVzIGl0J3MgY2FsbGVkIGluIHRoZSBzYW1lIHBsYWNlXG4gICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5nZXQoKTtcblxuICAgICAgaWYgKCFmaXJzdFRpbWUgfHwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJjb21wdXRlZFwiLFxuICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogX3RoaXMubmFtZV8sXG4gICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgIG9iamVjdDogX3RoaXMsXG4gICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgIG9sZFZhbHVlOiBwcmV2VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG4gICAgICB9XG5cbiAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgcHJldlZhbHVlID0gbmV3VmFsdWU7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLndhcm5BYm91dFVudHJhY2tlZFJlYWRfID0gZnVuY3Rpb24gd2FybkFib3V0VW50cmFja2VkUmVhZF8oKSB7XG4gICAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMucmVxdWlyZXNSZWFjdGlvbl8gPT09IHRydWUpIHtcbiAgICAgIGRpZShcIlttb2J4XSBDb21wdXRlZCB2YWx1ZSBcIiArIHRoaXMubmFtZV8gKyBcIiBpcyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzVHJhY2luZ18gIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyB0aGlzLm5hbWVfICsgXCInIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIENvbXB1dGVkIHZhbHVlIFwiICsgdGhpcy5uYW1lXyArIFwiIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVfICsgXCJbXCIgKyB0aGlzLmRlcml2YXRpb24udG9TdHJpbmcoKSArIFwiXVwiO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdG9QcmltaXRpdmUodGhpcy5nZXQoKSk7XG4gIH07XG5cbiAgX3Byb3RvW19TeW1ib2wkdG9QcmltaXRpdmUkMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICB9O1xuXG4gIHJldHVybiBDb21wdXRlZFZhbHVlO1xufSgpO1xudmFyIGlzQ29tcHV0ZWRWYWx1ZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQ29tcHV0ZWRWYWx1ZVwiLCBDb21wdXRlZFZhbHVlKTtcblxudmFyIElEZXJpdmF0aW9uU3RhdGVfO1xuXG4oZnVuY3Rpb24gKElEZXJpdmF0aW9uU3RhdGVfKSB7XG4gIC8vIGJlZm9yZSBiZWluZyBydW4gb3IgKG91dHNpZGUgYmF0Y2ggYW5kIG5vdCBiZWluZyBvYnNlcnZlZClcbiAgLy8gYXQgdGhpcyBwb2ludCBkZXJpdmF0aW9uIGlzIG5vdCBob2xkaW5nIGFueSBkYXRhIGFib3V0IGRlcGVuZGVuY3kgdHJlZVxuICBJRGVyaXZhdGlvblN0YXRlX1tJRGVyaXZhdGlvblN0YXRlX1tcIk5PVF9UUkFDS0lOR19cIl0gPSAtMV0gPSBcIk5PVF9UUkFDS0lOR19cIjsgLy8gbm8gc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvblxuICAvLyB3b24ndCByZWNhbGN1bGF0ZSBkZXJpdmF0aW9uXG4gIC8vIHRoaXMgaXMgd2hhdCBtYWtlcyBtb2J4IGZhc3RcblxuICBJRGVyaXZhdGlvblN0YXRlX1tJRGVyaXZhdGlvblN0YXRlX1tcIlVQX1RPX0RBVEVfXCJdID0gMF0gPSBcIlVQX1RPX0RBVEVfXCI7IC8vIHNvbWUgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCBkb24ndCBrbm93IGlmIHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkXG4gIC8vIHdpbGwgcmVxdWlyZSB0byBjaGVjayBmaXJzdCBpZiBVUF9UT19EQVRFIG9yIFBPU1NJQkxZX1NUQUxFXG4gIC8vIGN1cnJlbnRseSBvbmx5IENvbXB1dGVkVmFsdWUgd2lsbCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEVcbiAgLy9cbiAgLy8gaGF2aW5nIHRoaXMgc3RhdGUgaXMgc2Vjb25kIGJpZyBvcHRpbWl6YXRpb246XG4gIC8vIGRvbid0IGhhdmUgdG8gcmVjb21wdXRlIG9uIGV2ZXJ5IGRlcGVuZGVuY3kgY2hhbmdlLCBidXQgb25seSB3aGVuIGl0J3MgbmVlZGVkXG5cbiAgSURlcml2YXRpb25TdGF0ZV9bSURlcml2YXRpb25TdGF0ZV9bXCJQT1NTSUJMWV9TVEFMRV9cIl0gPSAxXSA9IFwiUE9TU0lCTFlfU1RBTEVfXCI7IC8vIEEgc2hhbGxvdyBkZXBlbmRlbmN5IGhhcyBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb24gYW5kIHRoZSBkZXJpdmF0aW9uXG4gIC8vIHdpbGwgbmVlZCB0byByZWNvbXB1dGUgd2hlbiBpdCdzIG5lZWRlZCBuZXh0LlxuXG4gIElEZXJpdmF0aW9uU3RhdGVfW0lEZXJpdmF0aW9uU3RhdGVfW1wiU1RBTEVfXCJdID0gMl0gPSBcIlNUQUxFX1wiO1xufSkoSURlcml2YXRpb25TdGF0ZV8gfHwgKElEZXJpdmF0aW9uU3RhdGVfID0ge30pKTtcblxudmFyIFRyYWNlTW9kZTtcblxuKGZ1bmN0aW9uIChUcmFjZU1vZGUpIHtcbiAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiTE9HXCJdID0gMV0gPSBcIkxPR1wiO1xuICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiQlJFQUtcIl0gPSAyXSA9IFwiQlJFQUtcIjtcbn0pKFRyYWNlTW9kZSB8fCAoVHJhY2VNb2RlID0ge30pKTtcblxudmFyIENhdWdodEV4Y2VwdGlvbiA9IGZ1bmN0aW9uIENhdWdodEV4Y2VwdGlvbihjYXVzZSkge1xuICB0aGlzLmNhdXNlID0gdm9pZCAwO1xuICB0aGlzLmNhdXNlID0gY2F1c2U7IC8vIEVtcHR5XG59O1xuZnVuY3Rpb24gaXNDYXVnaHRFeGNlcHRpb24oZSkge1xuICByZXR1cm4gZSBpbnN0YW5jZW9mIENhdWdodEV4Y2VwdGlvbjtcbn1cbi8qKlxyXG4gKiBGaW5kcyBvdXQgd2hldGhlciBhbnkgZGVwZW5kZW5jeSBvZiB0aGUgZGVyaXZhdGlvbiBoYXMgYWN0dWFsbHkgY2hhbmdlZC5cclxuICogSWYgZGVwZW5kZW5jaWVzU3RhdGUgaXMgMSB0aGVuIGl0IHdpbGwgcmVjYWxjdWxhdGUgZGVwZW5kZW5jaWVzLFxyXG4gKiBpZiBhbnkgZGVwZW5kZW5jeSBjaGFuZ2VkIGl0IHdpbGwgcHJvcGFnYXRlIGl0IGJ5IGNoYW5naW5nIGRlcGVuZGVuY2llc1N0YXRlIHRvIDIuXHJcbiAqXHJcbiAqIEJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgcmVwb3J0ZWQgYW5kXHJcbiAqIHN0b3BwaW5nIG9uIHRoZSBmaXJzdCBjaGFuZ2UsIGFsbCB0aGUgcmVjYWxjdWxhdGlvbnMgYXJlIG9ubHkgY2FsbGVkIGZvciBDb21wdXRlZFZhbHVlc1xyXG4gKiB0aGF0IHdpbGwgYmUgdHJhY2tlZCBieSBkZXJpdmF0aW9uLiBUaGF0IGlzIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgaWYgdGhlIGZpcnN0IHhcclxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBkZXJpdmF0aW9uIGRvZXNuJ3QgY2hhbmdlIHRoZW4gdGhlIGRlcml2YXRpb24gc2hvdWxkIHJ1biB0aGUgc2FtZSB3YXlcclxuICogdXAgdW50aWwgYWNjZXNzaW5nIHgtdGggZGVwZW5kZW5jeS5cclxuICovXG5cbmZ1bmN0aW9uIHNob3VsZENvbXB1dGUoZGVyaXZhdGlvbikge1xuICBzd2l0Y2ggKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfKSB7XG4gICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXzpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXzpcbiAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXzpcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlXy5QT1NTSUJMWV9TVEFMRV86XG4gICAgICB7XG4gICAgICAgIC8vIHN0YXRlIHByb3BhZ2F0aW9uIGNhbiBvY2N1ciBvdXRzaWRlIG9mIGFjdGlvbi9yZWFjdGl2ZSBjb250ZXh0ICMyMTk1XG4gICAgICAgIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gICAgICAgIHZhciBwcmV2VW50cmFja2VkID0gdW50cmFja2VkU3RhcnQoKTsgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxuXG4gICAgICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZ18sXG4gICAgICAgICAgICBsID0gb2JzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBvYmogPSBvYnNbaV07XG5cbiAgICAgICAgICBpZiAoaXNDb21wdXRlZFZhbHVlKG9iaikpIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKSB7XG4gICAgICAgICAgICAgIG9iai5nZXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgYXJlIG5vdCBpbnRlcmVzdGVkIGluIHRoZSB2YWx1ZSAqb3IqIGV4Y2VwdGlvbiBhdCB0aGlzIG1vbWVudCwgYnV0IGlmIHRoZXJlIGlzIG9uZSwgbm90aWZ5IGFsbFxuICAgICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gLy8gaWYgQ29tcHV0ZWRWYWx1ZSBgb2JqYCBhY3R1YWxseSBjaGFuZ2VkIGl0IHdpbGwgYmUgY29tcHV0ZWQgYW5kIHByb3BhZ2F0ZWQgdG8gaXRzIG9ic2VydmVycy5cbiAgICAgICAgICAgIC8vIGFuZCBgZGVyaXZhdGlvbmAgaXMgYW4gb2JzZXJ2ZXIgb2YgYG9iamBcbiAgICAgICAgICAgIC8vIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbilcblxuXG4gICAgICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXykge1xuICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZCk7XG4gICAgICAgICAgICAgIGFsbG93U3RhdGVSZWFkc0VuZChwcmV2QWxsb3dTdGF0ZVJlYWRzKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiAhPT0gbnVsbDsgLy8gZmlsdGVyIG91dCBhY3Rpb25zIGluc2lkZSBjb21wdXRhdGlvbnNcbn1cbmZ1bmN0aW9uIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKGF0b20pIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYXNPYnNlcnZlcnMgPSBhdG9tLm9ic2VydmVyc18uc2l6ZSA+IDA7IC8vIFNob3VsZCBub3QgYmUgcG9zc2libGUgdG8gY2hhbmdlIG9ic2VydmVkIHN0YXRlIG91dHNpZGUgc3RyaWN0IG1vZGUsIGV4Y2VwdCBkdXJpbmcgaW5pdGlhbGl6YXRpb24sIHNlZSAjNTYzXG5cbiAgaWYgKCFnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyAmJiAoaGFzT2JzZXJ2ZXJzIHx8IGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID09PSBcImFsd2F5c1wiKSkgY29uc29sZS53YXJuKFwiW01vYlhdIFwiICsgKGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID8gXCJTaW5jZSBzdHJpY3QtbW9kZSBpcyBlbmFibGVkLCBjaGFuZ2luZyAob2JzZXJ2ZWQpIG9ic2VydmFibGUgdmFsdWVzIHdpdGhvdXQgdXNpbmcgYW4gYWN0aW9uIGlzIG5vdCBhbGxvd2VkLiBUcmllZCB0byBtb2RpZnk6IFwiIDogXCJTaWRlIGVmZmVjdHMgbGlrZSBjaGFuZ2luZyBzdGF0ZSBhcmUgbm90IGFsbG93ZWQgYXQgdGhpcyBwb2ludC4gQXJlIHlvdSB0cnlpbmcgdG8gbW9kaWZ5IHN0YXRlIGZyb20sIGZvciBleGFtcGxlLCBhIGNvbXB1dGVkIHZhbHVlIG9yIHRoZSByZW5kZXIgZnVuY3Rpb24gb2YgYSBSZWFjdCBjb21wb25lbnQ/IFlvdSBjYW4gd3JhcCBzaWRlIGVmZmVjdHMgaW4gJ3J1bkluQWN0aW9uJyAob3IgZGVjb3JhdGUgZnVuY3Rpb25zIHdpdGggJ2FjdGlvbicpIGlmIG5lZWRlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIikgKyBhdG9tLm5hbWVfKTtcbn1cbmZ1bmN0aW9uIGNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZChvYnNlcnZhYmxlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyAmJiBnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbikge1xuICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBPYnNlcnZhYmxlIFwiICsgb2JzZXJ2YWJsZS5uYW1lXyArIFwiIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XG4gIH1cbn1cbi8qKlxyXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYGZgIGFuZCB0cmFja3Mgd2hpY2ggb2JzZXJ2YWJsZXMgYXJlIGJlaW5nIGFjY2Vzc2VkLlxyXG4gKiBUaGUgdHJhY2tpbmcgaW5mb3JtYXRpb24gaXMgc3RvcmVkIG9uIHRoZSBgZGVyaXZhdGlvbmAgb2JqZWN0IGFuZCB0aGUgZGVyaXZhdGlvbiBpcyByZWdpc3RlcmVkXHJcbiAqIGFzIG9ic2VydmVyIG9mIGFueSBvZiB0aGUgYWNjZXNzZWQgb2JzZXJ2YWJsZXMuXHJcbiAqL1xuXG5mdW5jdGlvbiB0cmFja0Rlcml2ZWRGdW5jdGlvbihkZXJpdmF0aW9uLCBmLCBjb250ZXh0KSB7XG4gIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7IC8vIHByZSBhbGxvY2F0ZSBhcnJheSBhbGxvY2F0aW9uICsgcm9vbSBmb3IgdmFyaWF0aW9uIGluIGRlcHNcbiAgLy8gYXJyYXkgd2lsbCBiZSB0cmltbWVkIGJ5IGJpbmREZXBlbmRlbmNpZXNcblxuICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcbiAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfID0gbmV3IEFycmF5KGRlcml2YXRpb24ub2JzZXJ2aW5nXy5sZW5ndGggKyAxMDApO1xuICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnRfID0gMDtcbiAgZGVyaXZhdGlvbi5ydW5JZF8gPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xuICB2YXIgcHJldlRyYWNraW5nID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS5pbkJhdGNoKys7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXN1bHQgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKGUpO1xuICAgIH1cbiAgfVxuXG4gIGdsb2JhbFN0YXRlLmluQmF0Y2gtLTtcbiAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xuICBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pO1xuICB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKTtcbiAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHJldHVybjtcbiAgaWYgKGRlcml2YXRpb24ub2JzZXJ2aW5nXy5sZW5ndGggIT09IDApIHJldHVybjtcblxuICBpZiAoZ2xvYmFsU3RhdGUucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgfHwgZGVyaXZhdGlvbi5yZXF1aXJlc09ic2VydmFibGVfKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYnhdIERlcml2YXRpb24gXCIgKyBkZXJpdmF0aW9uLm5hbWVfICsgXCIgaXMgY3JlYXRlZC91cGRhdGVkIHdpdGhvdXQgcmVhZGluZyBhbnkgb2JzZXJ2YWJsZSB2YWx1ZVwiKTtcbiAgfVxufVxuLyoqXHJcbiAqIGRpZmZzIG5ld09ic2VydmluZyB3aXRoIG9ic2VydmluZy5cclxuICogdXBkYXRlIG9ic2VydmluZyB0byBiZSBuZXdPYnNlcnZpbmcgd2l0aCB1bmlxdWUgb2JzZXJ2YWJsZXNcclxuICogbm90aWZ5IG9ic2VydmVycyB0aGF0IGJlY29tZSBvYnNlcnZlZC91bm9ic2VydmVkXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbikge1xuICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICB2YXIgcHJldk9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXztcbiAgdmFyIG9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXyA9IGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nXztcbiAgdmFyIGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfOyAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKHRoaXMgbGlzdCBjYW4gY29udGFpbiBkdXBsaWNhdGVzKTpcbiAgLy8gICAwOiBmaXJzdCBvY2N1cnJlbmNlLCBjaGFuZ2UgdG8gMSBhbmQga2VlcCBpdFxuICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcblxuICB2YXIgaTAgPSAwLFxuICAgICAgbCA9IGRlcml2YXRpb24udW5ib3VuZERlcHNDb3VudF87XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgZGVwID0gb2JzZXJ2aW5nW2ldO1xuXG4gICAgaWYgKGRlcC5kaWZmVmFsdWVfID09PSAwKSB7XG4gICAgICBkZXAuZGlmZlZhbHVlXyA9IDE7XG4gICAgICBpZiAoaTAgIT09IGkpIG9ic2VydmluZ1tpMF0gPSBkZXA7XG4gICAgICBpMCsrO1xuICAgIH0gLy8gVXBjYXN0IGlzICdzYWZlJyBoZXJlLCBiZWNhdXNlIGlmIGRlcCBpcyBJT2JzZXJ2YWJsZSwgYGRlcGVuZGVuY2llc1N0YXRlYCB3aWxsIGJlIHVuZGVmaW5lZCxcbiAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXG5cblxuICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGVfID4gbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlKSB7XG4gICAgICBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBkZXAuZGVwZW5kZW5jaWVzU3RhdGVfO1xuICAgIH1cbiAgfVxuXG4gIG9ic2VydmluZy5sZW5ndGggPSBpMDtcbiAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfID0gbnVsbDsgLy8gbmV3T2JzZXJ2aW5nIHNob3VsZG4ndCBiZSBuZWVkZWQgb3V0c2lkZSB0cmFja2luZyAoc3RhdGVtZW50IG1vdmVkIGRvd24gdG8gd29yayBhcm91bmQgRkYgYnVnLCBzZWUgIzYxNClcbiAgLy8gR28gdGhyb3VnaCBhbGwgb2xkIG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChpdCBpcyB1bmlxdWUgYWZ0ZXIgbGFzdCBiaW5kRGVwZW5kZW5jaWVzKVxuICAvLyAgIDA6IGl0J3Mgbm90IGluIG5ldyBvYnNlcnZhYmxlcywgdW5vYnNlcnZlIGl0XG4gIC8vICAgMTogaXQga2VlcHMgYmVpbmcgb2JzZXJ2ZWQsIGRvbid0IHdhbnQgdG8gbm90aWZ5IGl0LiBjaGFuZ2UgdG8gMFxuXG4gIGwgPSBwcmV2T2JzZXJ2aW5nLmxlbmd0aDtcblxuICB3aGlsZSAobC0tKSB7XG4gICAgdmFyIF9kZXAgPSBwcmV2T2JzZXJ2aW5nW2xdO1xuXG4gICAgaWYgKF9kZXAuZGlmZlZhbHVlXyA9PT0gMCkge1xuICAgICAgcmVtb3ZlT2JzZXJ2ZXIoX2RlcCwgZGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgX2RlcC5kaWZmVmFsdWVfID0gMDtcbiAgfSAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxuICAvLyAgIDA6IGl0IHdhcyBzZXQgdG8gMCBpbiBsYXN0IGxvb3AuIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gIC8vICAgMTogaXQgd2Fzbid0IG9ic2VydmVkLCBsZXQncyBvYnNlcnZlIGl0LiBzZXQgYmFjayB0byAwXG5cblxuICB3aGlsZSAoaTAtLSkge1xuICAgIHZhciBfZGVwMiA9IG9ic2VydmluZ1tpMF07XG5cbiAgICBpZiAoX2RlcDIuZGlmZlZhbHVlXyA9PT0gMSkge1xuICAgICAgX2RlcDIuZGlmZlZhbHVlXyA9IDA7XG4gICAgICBhZGRPYnNlcnZlcihfZGVwMiwgZGVyaXZhdGlvbik7XG4gICAgfVxuICB9IC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxuICAvLyBzbyB0aGV5IGhhdmUgaGFkIG5vIGNoYW5jZSB0byBwcm9wYWdhdGUgc3RhbGVuZXNzICgjOTE2KVxuXG5cbiAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlXyA9IGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZTtcbiAgICBkZXJpdmF0aW9uLm9uQmVjb21lU3RhbGVfKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJPYnNlcnZpbmcoZGVyaXZhdGlvbikge1xuICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXztcbiAgZGVyaXZhdGlvbi5vYnNlcnZpbmdfID0gW107XG4gIHZhciBpID0gb2JzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmVtb3ZlT2JzZXJ2ZXIob2JzW2ldLCBkZXJpdmF0aW9uKTtcbiAgfVxuXG4gIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXztcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZChhY3Rpb24pIHtcbiAgdmFyIHByZXYgPSB1bnRyYWNrZWRTdGFydCgpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGFjdGlvbigpO1xuICB9IGZpbmFsbHkge1xuICAgIHVudHJhY2tlZEVuZChwcmV2KTtcbiAgfVxufVxuZnVuY3Rpb24gdW50cmFja2VkU3RhcnQoKSB7XG4gIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICByZXR1cm4gcHJldjtcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZEVuZChwcmV2KSB7XG4gIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXY7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlUmVhZHNTdGFydChhbGxvd1N0YXRlUmVhZHMpIHtcbiAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHM7XG4gIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkcztcbiAgcmV0dXJuIHByZXY7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlUmVhZHNFbmQocHJldikge1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSBwcmV2O1xufVxuLyoqXHJcbiAqIG5lZWRlZCB0byBrZWVwIGBsb3dlc3RPYnNlcnZlclN0YXRlYCBjb3JyZWN0LiB3aGVuIGNoYW5naW5nIGZyb20gKDIgb3IgMSkgdG8gMFxyXG4gKlxyXG4gKi9cblxuZnVuY3Rpb24gY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbikge1xuICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfKSByZXR1cm47XG4gIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZ187XG4gIHZhciBpID0gb2JzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgb2JzW2ldLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gIH1cbn1cblxuLyoqXHJcbiAqIFRoZXNlIHZhbHVlcyB3aWxsIHBlcnNpc3QgaWYgZ2xvYmFsIHN0YXRlIGlzIHJlc2V0XHJcbiAqL1xuXG52YXIgcGVyc2lzdGVudEtleXMgPSBbXCJtb2J4R3VpZFwiLCBcInNweUxpc3RlbmVyc1wiLCBcImVuZm9yY2VBY3Rpb25zXCIsIFwiY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uXCIsIFwicmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGVcIiwgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLCBcImFsbG93U3RhdGVSZWFkc1wiLCBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIiwgXCJydW5JZFwiLCBcIlVOQ0hBTkdFRFwiLCBcInVzZVByb3hpZXNcIl07XG52YXIgTW9iWEdsb2JhbHMgPSBmdW5jdGlvbiBNb2JYR2xvYmFscygpIHtcbiAgdGhpcy52ZXJzaW9uID0gNjtcbiAgdGhpcy5VTkNIQU5HRUQgPSB7fTtcbiAgdGhpcy50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICB0aGlzLnRyYWNraW5nQ29udGV4dCA9IG51bGw7XG4gIHRoaXMucnVuSWQgPSAwO1xuICB0aGlzLm1vYnhHdWlkID0gMDtcbiAgdGhpcy5pbkJhdGNoID0gMDtcbiAgdGhpcy5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcbiAgdGhpcy5wZW5kaW5nUmVhY3Rpb25zID0gW107XG4gIHRoaXMuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG4gIHRoaXMuYWxsb3dTdGF0ZUNoYW5nZXMgPSBmYWxzZTtcbiAgdGhpcy5hbGxvd1N0YXRlUmVhZHMgPSB0cnVlO1xuICB0aGlzLmVuZm9yY2VBY3Rpb25zID0gdHJ1ZTtcbiAgdGhpcy5zcHlMaXN0ZW5lcnMgPSBbXTtcbiAgdGhpcy5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMgPSBbXTtcbiAgdGhpcy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZTtcbiAgdGhpcy5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9IGZhbHNlO1xuICB0aGlzLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gZmFsc2U7XG4gIHRoaXMuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IGZhbHNlO1xuICB0aGlzLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcbiAgdGhpcy51c2VQcm94aWVzID0gdHJ1ZTtcbiAgdGhpcy52ZXJpZnlQcm94aWVzID0gZmFsc2U7XG4gIHRoaXMuc2FmZURlc2NyaXB0b3JzID0gdHJ1ZTtcbn07XG52YXIgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IHRydWU7XG52YXIgaXNvbGF0ZUNhbGxlZCA9IGZhbHNlO1xudmFyIGdsb2JhbFN0YXRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIGdsb2JhbCA9IC8qI19fUFVSRV9fKi9nZXRHbG9iYWwoKTtcbiAgaWYgKGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID4gMCAmJiAhZ2xvYmFsLl9fbW9ieEdsb2JhbHMpIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSBmYWxzZTtcbiAgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzICYmIGdsb2JhbC5fX21vYnhHbG9iYWxzLnZlcnNpb24gIT09IG5ldyBNb2JYR2xvYmFscygpLnZlcnNpb24pIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSBmYWxzZTtcblxuICBpZiAoIWNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNvbGF0ZUNhbGxlZCkge1xuICAgICAgICBkaWUoMzUpO1xuICAgICAgfVxuICAgIH0sIDEpO1xuICAgIHJldHVybiBuZXcgTW9iWEdsb2JhbHMoKTtcbiAgfSBlbHNlIGlmIChnbG9iYWwuX19tb2J4R2xvYmFscykge1xuICAgIGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ICs9IDE7XG4gICAgaWYgKCFnbG9iYWwuX19tb2J4R2xvYmFscy5VTkNIQU5HRUQpIGdsb2JhbC5fX21vYnhHbG9iYWxzLlVOQ0hBTkdFRCA9IHt9OyAvLyBtYWtlIG1lcmdlIGJhY2t3YXJkIGNvbXBhdGlibGVcblxuICAgIHJldHVybiBnbG9iYWwuX19tb2J4R2xvYmFscztcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCA9IDE7XG4gICAgcmV0dXJuIGdsb2JhbC5fX21vYnhHbG9iYWxzID0gLyojX19QVVJFX18qL25ldyBNb2JYR2xvYmFscygpO1xuICB9XG59KCk7XG5mdW5jdGlvbiBpc29sYXRlR2xvYmFsU3RhdGUoKSB7XG4gIGlmIChnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLmxlbmd0aCB8fCBnbG9iYWxTdGF0ZS5pbkJhdGNoIHx8IGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucykgZGllKDM2KTtcbiAgaXNvbGF0ZUNhbGxlZCA9IHRydWU7XG5cbiAgaWYgKGNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG4gICAgaWYgKC0tZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPT09IDApIGdsb2JhbC5fX21vYnhHbG9iYWxzID0gdW5kZWZpbmVkO1xuICAgIGdsb2JhbFN0YXRlID0gbmV3IE1vYlhHbG9iYWxzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEdsb2JhbFN0YXRlKCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGU7XG59XG4vKipcclxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTsgdGhpcyB3aWxsIGJyZWFrIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBleGlzdGluZyBvYnNlcnZhYmxlcyxcclxuICogYnV0IGNhbiBiZSB1c2VkIHRvIGdldCBiYWNrIGF0IGEgc3RhYmxlIHN0YXRlIGFmdGVyIHRocm93aW5nIGVycm9yc1xyXG4gKi9cblxuZnVuY3Rpb24gcmVzZXRHbG9iYWxTdGF0ZSgpIHtcbiAgdmFyIGRlZmF1bHRHbG9iYWxzID0gbmV3IE1vYlhHbG9iYWxzKCk7XG5cbiAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRHbG9iYWxzKSB7XG4gICAgaWYgKHBlcnNpc3RlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIGdsb2JhbFN0YXRlW2tleV0gPSBkZWZhdWx0R2xvYmFsc1trZXldO1xuICB9XG5cbiAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSAhZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGhhc09ic2VydmVycyhvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLm9ic2VydmVyc18gJiYgb2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPiAwO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpIHtcbiAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzXztcbn0gLy8gZnVuY3Rpb24gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XG4vLyAgICAgY29uc3QgbGlzdCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzXG4vLyAgICAgY29uc3QgbWFwID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNJbmRleGVzXG4vLyAgICAgY29uc3QgbCA9IGxpc3QubGVuZ3RoXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbi8vICAgICAgICAgY29uc3QgaWQgPSBsaXN0W2ldLl9fbWFwaWRcbi8vICAgICAgICAgaWYgKGkpIHtcbi8vICAgICAgICAgICAgIGludmFyaWFudChtYXBbaWRdID09PSBpLCBcIklOVEVSTkFMIEVSUk9SIG1hcHMgZGVyaXZhdGlvbi5fX21hcGlkIHRvIGluZGV4IGluIGxpc3RcIikgLy8gZm9yIHBlcmZvcm1hbmNlXG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQoIShpZCBpbiBtYXApLCBcIklOVEVSTkFMIEVSUk9SIG9ic2VydmVyIG9uIGluZGV4IDAgc2hvdWxkbid0IGJlIGhlbGQgaW4gbWFwLlwiKSAvLyBmb3IgcGVyZm9ybWFuY2Vcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBpbnZhcmlhbnQoXG4vLyAgICAgICAgIGxpc3QubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKG1hcCkubGVuZ3RoID09PSBsaXN0Lmxlbmd0aCAtIDEsXG4vLyAgICAgICAgIFwiSU5URVJOQUwgRVJST1IgdGhlcmUgaXMgbm8ganVuayBpbiBtYXBcIlxuLy8gICAgIClcbi8vIH1cblxuZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAvLyBpbnZhcmlhbnQobm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IsIGNhbiBhZGQgb25seSBkZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XG4gIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgYWRkIGFscmVhZHkgYWRkZWQgbm9kZVwiKTtcbiAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uYWRkKG5vZGUpO1xuICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA+IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGVfKSBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZV87IC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBkaWRuJ3QgYWRkIG5vZGVcIik7XG59XG5mdW5jdGlvbiByZW1vdmVPYnNlcnZlcihvYnNlcnZhYmxlLCBub2RlKSB7XG4gIC8vIGludmFyaWFudChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCwgXCJJTlRFUk5BTCBFUlJPUiwgcmVtb3ZlIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XG4gIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlXCIpO1xuICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gIG9ic2VydmFibGUub2JzZXJ2ZXJzX1tcImRlbGV0ZVwiXShub2RlKTtcblxuICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDApIHtcbiAgICAvLyBkZWxldGluZyBsYXN0IG9ic2VydmVyXG4gICAgcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpO1xuICB9IC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGUyXCIpO1xuXG59XG5mdW5jdGlvbiBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSkge1xuICBpZiAob2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9PT0gZmFsc2UpIHtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCwgXCJJTlRFUk5BTCBFUlJPUiwgc2hvdWxkIG9ubHkgcXVldWUgZm9yIHVub2JzZXJ2YXRpb24gdW5vYnNlcnZlZCBvYnNlcnZhYmxlc1wiKTtcbiAgICBvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb25fID0gdHJ1ZTtcbiAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nVW5vYnNlcnZhdGlvbnMucHVzaChvYnNlcnZhYmxlKTtcbiAgfVxufVxuLyoqXHJcbiAqIEJhdGNoIHN0YXJ0cyBhIHRyYW5zYWN0aW9uLCBhdCBsZWFzdCBmb3IgcHVycG9zZXMgb2YgbWVtb2l6aW5nIENvbXB1dGVkVmFsdWVzIHdoZW4gbm90aGluZyBlbHNlIGRvZXMuXHJcbiAqIER1cmluZyBhIGJhdGNoIGBvbkJlY29tZVVub2JzZXJ2ZWRgIHdpbGwgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZSBwZXIgb2JzZXJ2YWJsZS5cclxuICogQXZvaWRzIHVubmVjZXNzYXJ5IHJlY2FsY3VsYXRpb25zLlxyXG4gKi9cblxuZnVuY3Rpb24gc3RhcnRCYXRjaCgpIHtcbiAgZ2xvYmFsU3RhdGUuaW5CYXRjaCsrO1xufVxuZnVuY3Rpb24gZW5kQmF0Y2goKSB7XG4gIGlmICgtLWdsb2JhbFN0YXRlLmluQmF0Y2ggPT09IDApIHtcbiAgICBydW5SZWFjdGlvbnMoKTsgLy8gdGhlIGJhdGNoIGlzIGFjdHVhbGx5IGFib3V0IHRvIGZpbmlzaCwgYWxsIHVub2JzZXJ2aW5nIHNob3VsZCBoYXBwZW4gaGVyZS5cblxuICAgIHZhciBsaXN0ID0gZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgb2JzZXJ2YWJsZSA9IGxpc3RbaV07XG4gICAgICBvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb25fID0gZmFsc2U7XG5cbiAgICAgIGlmIChvYnNlcnZhYmxlLm9ic2VydmVyc18uc2l6ZSA9PT0gMCkge1xuICAgICAgICBpZiAob2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWRfKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBvYnNlcnZhYmxlIGhhZCByZWFjdGl2ZSBvYnNlcnZlcnMsIHRyaWdnZXIgdGhlIGhvb2tzXG4gICAgICAgICAgb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWRfID0gZmFsc2U7XG4gICAgICAgICAgb2JzZXJ2YWJsZS5vbkJVTygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlKSB7XG4gICAgICAgICAgLy8gY29tcHV0ZWQgdmFsdWVzIGFyZSBhdXRvbWF0aWNhbGx5IHRlYXJlZCBkb3duIHdoZW4gdGhlIGxhc3Qgb2JzZXJ2ZXIgbGVhdmVzXG4gICAgICAgICAgLy8gdGhpcyBwcm9jZXNzIGhhcHBlbnMgcmVjdXJzaXZlbHksIHRoaXMgY29tcHV0ZWQgbWlnaHQgYmUgdGhlIGxhc3Qgb2JzZXJ2YWJlIG9mIGFub3RoZXIsIGV0Yy4uXG4gICAgICAgICAgb2JzZXJ2YWJsZS5zdXNwZW5kXygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zID0gW107XG4gIH1cbn1cbmZ1bmN0aW9uIHJlcG9ydE9ic2VydmVkKG9ic2VydmFibGUpIHtcbiAgY2hlY2tJZlN0YXRlUmVhZHNBcmVBbGxvd2VkKG9ic2VydmFibGUpO1xuICB2YXIgZGVyaXZhdGlvbiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcblxuICBpZiAoZGVyaXZhdGlvbiAhPT0gbnVsbCkge1xuICAgIC8qKlxyXG4gICAgICogU2ltcGxlIG9wdGltaXphdGlvbiwgZ2l2ZSBlYWNoIGRlcml2YXRpb24gcnVuIGFuIHVuaXF1ZSBpZCAocnVuSWQpXHJcbiAgICAgKiBDaGVjayBpZiBsYXN0IHRpbWUgdGhpcyBvYnNlcnZhYmxlIHdhcyBhY2Nlc3NlZCB0aGUgc2FtZSBydW5JZCBpcyB1c2VkXHJcbiAgICAgKiBpZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgcmVsYXRpb24gaXMgYWxyZWFkeSBrbm93blxyXG4gICAgICovXG4gICAgaWYgKGRlcml2YXRpb24ucnVuSWRfICE9PSBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5Xykge1xuICAgICAgb2JzZXJ2YWJsZS5sYXN0QWNjZXNzZWRCeV8gPSBkZXJpdmF0aW9uLnJ1bklkXzsgLy8gVHJpZWQgc3RvcmluZyBuZXdPYnNlcnZpbmcsIG9yIG9ic2VydmluZywgb3IgYm90aCBhcyBTZXQsIGJ1dCBwZXJmb3JtYW5jZSBkaWRuJ3QgY29tZSBjbG9zZS4uLlxuXG4gICAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZ19bZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50XysrXSA9IG9ic2VydmFibGU7XG5cbiAgICAgIGlmICghb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWRfICYmIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCkge1xuICAgICAgICBvYnNlcnZhYmxlLmlzQmVpbmdPYnNlcnZlZF8gPSB0cnVlO1xuICAgICAgICBvYnNlcnZhYmxlLm9uQk8oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChvYnNlcnZhYmxlLm9ic2VydmVyc18uc2l6ZSA9PT0gMCAmJiBnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCkge1xuICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gZnVuY3Rpb24gaW52YXJpYW50TE9TKG9ic2VydmFibGU6IElPYnNlcnZhYmxlLCBtc2c6IHN0cmluZykge1xuLy8gICAgIC8vIGl0J3MgZXhwZW5zaXZlIHNvIGJldHRlciBub3QgcnVuIGl0IGluIHByb2R1Y2l0b24uIGJ1dCB0ZW1wb3JhcmlseSBoZWxwZnVsIGZvciB0ZXN0aW5nXG4vLyAgICAgY29uc3QgbWluID0gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYi5kZXBlbmRlbmNpZXNTdGF0ZSksIDIpXG4vLyAgICAgaWYgKG1pbiA+PSBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUpIHJldHVybiAvLyA8LSB0aGUgb25seSBhc3N1bXB0aW9uIGFib3V0IGBsb3dlc3RPYnNlcnZlclN0YXRlYFxuLy8gICAgIHRocm93IG5ldyBFcnJvcihcbi8vICAgICAgICAgXCJsb3dlc3RPYnNlcnZlclN0YXRlIGlzIHdyb25nIGZvciBcIiArXG4vLyAgICAgICAgICAgICBtc2cgK1xuLy8gICAgICAgICAgICAgXCIgYmVjYXVzZSBcIiArXG4vLyAgICAgICAgICAgICBtaW4gK1xuLy8gICAgICAgICAgICAgXCIgPCBcIiArXG4vLyAgICAgICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVcbi8vICAgICApXG4vLyB9XG5cbi8qKlxyXG4gKiBOT1RFOiBjdXJyZW50IHByb3BhZ2F0aW9uIG1lY2hhbmlzbSB3aWxsIGluIGNhc2Ugb2Ygc2VsZiByZXJ1bmluZyBhdXRvcnVucyBiZWhhdmUgdW5leHBlY3RlZGx5XHJcbiAqIEl0IHdpbGwgcHJvcGFnYXRlIGNoYW5nZXMgdG8gb2JzZXJ2ZXJzIGZyb20gcHJldmlvdXMgcnVuXHJcbiAqIEl0J3MgaGFyZCBvciBtYXliZSBpbXBvc3NpYmxlICh3aXRoIHJlYXNvbmFibGUgcGVyZikgdG8gZ2V0IGl0IHJpZ2h0IHdpdGggY3VycmVudCBhcHByb2FjaFxyXG4gKiBIb3BlZnVsbHkgc2VsZiByZXJ1bmluZyBhdXRvcnVucyBhcmVuJ3QgYSBmZWF0dXJlIHBlb3BsZSBzaG91bGQgZGVwZW5kIG9uXHJcbiAqIEFsc28gbW9zdCBiYXNpYyB1c2UgY2FzZXMgc2hvdWxkIGJlIG9rXHJcbiAqL1xuLy8gQ2FsbGVkIGJ5IEF0b20gd2hlbiBpdHMgdmFsdWUgY2hhbmdlc1xuXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VkKG9ic2VydmFibGUpIHtcbiAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBzdGFydFwiKTtcbiAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXykgcmV0dXJuO1xuICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfOyAvLyBJZGVhbGx5IHdlIHVzZSBmb3IuLm9mIGhlcmUsIGJ1dCB0aGUgZG93bmNvbXBpbGVkIHZlcnNpb24gaXMgcmVhbGx5IHNsb3cuLi5cblxuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZC5pc1RyYWNpbmdfICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGQub25CZWNvbWVTdGFsZV8oKTtcbiAgICB9XG5cbiAgICBkLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXztcbiAgfSk7IC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgZW5kXCIpO1xufSAvLyBDYWxsZWQgYnkgQ29tcHV0ZWRWYWx1ZSB3aGVuIGl0IHJlY2FsY3VsYXRlIGFuZCBpdHMgdmFsdWUgY2hhbmdlZFxuXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQob2JzZXJ2YWJsZSkge1xuICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgc3RhcnRcIik7XG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV8pIHJldHVybjtcbiAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXztcbiAgb2JzZXJ2YWJsZS5vYnNlcnZlcnNfLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlBPU1NJQkxZX1NUQUxFXykge1xuICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV87XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZC5pc1RyYWNpbmdfICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8gLy8gdGhpcyBoYXBwZW5zIGR1cmluZyBjb21wdXRpbmcgb2YgYGRgLCBqdXN0IGtlZXAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZSB1cCB0byBkYXRlLlxuICAgICkge1xuICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gICAgICB9XG4gIH0pOyAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xufSAvLyBVc2VkIGJ5IGNvbXB1dGVkIHdoZW4gaXRzIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IHdlIGRvbid0IHdhbid0IHRvIGltbWVkaWF0ZWx5IHJlY29tcHV0ZS5cblxuZnVuY3Rpb24gcHJvcGFnYXRlTWF5YmVDaGFuZ2VkKG9ic2VydmFibGUpIHtcbiAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgc3RhcnRcIik7XG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfICE9PSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXykgcmV0dXJuO1xuICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfO1xuICAgICAgZC5vbkJlY29tZVN0YWxlXygpO1xuICAgIH1cbiAgfSk7IC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIGVuZFwiKTtcbn1cblxuZnVuY3Rpb24gbG9nVHJhY2VJbmZvKGRlcml2YXRpb24sIG9ic2VydmFibGUpIHtcbiAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lXyArIFwiJyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICdcIiArIG9ic2VydmFibGUubmFtZV8gKyBcIidcIik7XG5cbiAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nXyA9PT0gVHJhY2VNb2RlLkJSRUFLKSB7XG4gICAgdmFyIGxpbmVzID0gW107XG4gICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlKGRlcml2YXRpb24pLCBsaW5lcywgMSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgbmV3IEZ1bmN0aW9uKFwiZGVidWdnZXI7XFxuLypcXG5UcmFjaW5nICdcIiArIGRlcml2YXRpb24ubmFtZV8gKyBcIidcXG5cXG5Zb3UgYXJlIGVudGVyaW5nIHRoaXMgYnJlYWsgcG9pbnQgYmVjYXVzZSBkZXJpdmF0aW9uICdcIiArIGRlcml2YXRpb24ubmFtZV8gKyBcIicgaXMgYmVpbmcgdHJhY2VkIGFuZCAnXCIgKyBvYnNlcnZhYmxlLm5hbWVfICsgXCInIGlzIG5vdyBmb3JjaW5nIGl0IHRvIHVwZGF0ZS5cXG5KdXN0IGZvbGxvdyB0aGUgc3RhY2t0cmFjZSB5b3Ugc2hvdWxkIG5vdyBzZWUgaW4gdGhlIGRldnRvb2xzIHRvIHNlZSBwcmVjaXNlbHkgd2hhdCBwaWVjZSBvZiB5b3VyIGNvZGUgaXMgY2F1c2luZyB0aGlzIHVwZGF0ZVxcblRoZSBzdGFja2ZyYW1lIHlvdSBhcmUgbG9va2luZyBmb3IgaXMgYXQgbGVhc3QgfjYtOCBzdGFjay1mcmFtZXMgdXAuXFxuXFxuXCIgKyAoZGVyaXZhdGlvbiBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUgPyBkZXJpdmF0aW9uLmRlcml2YXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKC9bKl1cXC8vZywgXCIvXCIpIDogXCJcIikgKyBcIlxcblxcblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XFxuXFxuXCIgKyBsaW5lcy5qb2luKFwiXFxuXCIpICsgXCJcXG4qL1xcbiAgICBcIikoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludERlcFRyZWUodHJlZSwgbGluZXMsIGRlcHRoKSB7XG4gIGlmIChsaW5lcy5sZW5ndGggPj0gMTAwMCkge1xuICAgIGxpbmVzLnB1c2goXCIoYW5kIG1hbnkgbW9yZSlcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGluZXMucHVzaChcIlwiICsgbmV3IEFycmF5KGRlcHRoKS5qb2luKFwiXFx0XCIpICsgdHJlZS5uYW1lKTsgLy8gTVdFOiBub3QgdGhlIGZhc3Rlc3QsIGJ1dCB0aGUgZWFzaWVzdCB3YXkgOilcblxuICBpZiAodHJlZS5kZXBlbmRlbmNpZXMpIHRyZWUuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIHByaW50RGVwVHJlZShjaGlsZCwgbGluZXMsIGRlcHRoICsgMSk7XG4gIH0pO1xufVxuXG52YXIgUmVhY3Rpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcbiAgZnVuY3Rpb24gUmVhY3Rpb24obmFtZV8sIG9uSW52YWxpZGF0ZV8sIGVycm9ySGFuZGxlcl8sIHJlcXVpcmVzT2JzZXJ2YWJsZV8pIHtcbiAgICBpZiAobmFtZV8gPT09IHZvaWQgMCkge1xuICAgICAgbmFtZV8gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCkgOiBcIlJlYWN0aW9uXCI7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVpcmVzT2JzZXJ2YWJsZV8gPT09IHZvaWQgMCkge1xuICAgICAgcmVxdWlyZXNPYnNlcnZhYmxlXyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5vbkludmFsaWRhdGVfID0gdm9pZCAwO1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyXyA9IHZvaWQgMDtcbiAgICB0aGlzLnJlcXVpcmVzT2JzZXJ2YWJsZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5vYnNlcnZpbmdfID0gW107XG4gICAgdGhpcy5uZXdPYnNlcnZpbmdfID0gW107XG4gICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5OT1RfVFJBQ0tJTkdfO1xuICAgIHRoaXMuZGlmZlZhbHVlXyA9IDA7XG4gICAgdGhpcy5ydW5JZF8gPSAwO1xuICAgIHRoaXMudW5ib3VuZERlcHNDb3VudF8gPSAwO1xuICAgIHRoaXMuaXNEaXNwb3NlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmlzU2NoZWR1bGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNUcmFja1BlbmRpbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1J1bm5pbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1RyYWNpbmdfID0gVHJhY2VNb2RlLk5PTkU7XG4gICAgdGhpcy5uYW1lXyA9IG5hbWVfO1xuICAgIHRoaXMub25JbnZhbGlkYXRlXyA9IG9uSW52YWxpZGF0ZV87XG4gICAgdGhpcy5lcnJvckhhbmRsZXJfID0gZXJyb3JIYW5kbGVyXztcbiAgICB0aGlzLnJlcXVpcmVzT2JzZXJ2YWJsZV8gPSByZXF1aXJlc09ic2VydmFibGVfO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlYWN0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25CZWNvbWVTdGFsZV8gPSBmdW5jdGlvbiBvbkJlY29tZVN0YWxlXygpIHtcbiAgICB0aGlzLnNjaGVkdWxlXygpO1xuICB9O1xuXG4gIF9wcm90by5zY2hlZHVsZV8gPSBmdW5jdGlvbiBzY2hlZHVsZV8oKSB7XG4gICAgaWYgKCF0aGlzLmlzU2NoZWR1bGVkXykge1xuICAgICAgdGhpcy5pc1NjaGVkdWxlZF8gPSB0cnVlO1xuICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgcnVuUmVhY3Rpb25zKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc1NjaGVkdWxlZCA9IGZ1bmN0aW9uIGlzU2NoZWR1bGVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzU2NoZWR1bGVkXztcbiAgfVxuICAvKipcclxuICAgKiBpbnRlcm5hbCwgdXNlIHNjaGVkdWxlKCkgaWYgeW91IGludGVuZCB0byBraWNrIG9mZiBhIHJlYWN0aW9uXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucnVuUmVhY3Rpb25fID0gZnVuY3Rpb24gcnVuUmVhY3Rpb25fKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkXykge1xuICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgdGhpcy5pc1NjaGVkdWxlZF8gPSBmYWxzZTtcbiAgICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0O1xuICAgICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gdGhpcztcblxuICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5pc1RyYWNrUGVuZGluZ18gPSB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5vbkludmFsaWRhdGVfKCk7XG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHRoaXMuaXNUcmFja1BlbmRpbmdfICYmIGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAvLyBvbkludmFsaWRhdGUgZGlkbid0IHRyaWdnZXIgdHJhY2sgcmlnaHQgYXdheS4uXG4gICAgICAgICAgICBzcHlSZXBvcnQoe1xuICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgICAgICB0eXBlOiBcInNjaGVkdWxlZC1yZWFjdGlvblwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gcHJldjtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50cmFjayA9IGZ1bmN0aW9uIHRyYWNrKGZuKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZF8pIHtcbiAgICAgIHJldHVybjsgLy8gY29uc29sZS53YXJuKFwiUmVhY3Rpb24gYWxyZWFkeSBkaXNwb3NlZFwiKSAvLyBOb3RlOiBOb3QgYSB3YXJuaW5nIC8gZXJyb3IgaW4gbW9ieCA0IGVpdGhlclxuICAgIH1cblxuICAgIHN0YXJ0QmF0Y2goKTtcbiAgICB2YXIgbm90aWZ5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgdmFyIHN0YXJ0VGltZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5KSB7XG4gICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgc3B5UmVwb3J0U3RhcnQoe1xuICAgICAgICBuYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICB0eXBlOiBcInJlYWN0aW9uXCJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaXNSdW5uaW5nXyA9IHRydWU7XG4gICAgdmFyIHByZXZSZWFjdGlvbiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dDsgLy8gcmVhY3Rpb25zIGNvdWxkIGNyZWF0ZSByZWFjdGlvbnMuLi5cblxuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHRoaXM7XG4gICAgdmFyIHJlc3VsdCA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIGZuLCB1bmRlZmluZWQpO1xuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHByZXZSZWFjdGlvbjtcbiAgICB0aGlzLmlzUnVubmluZ18gPSBmYWxzZTtcbiAgICB0aGlzLmlzVHJhY2tQZW5kaW5nXyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZF8pIHtcbiAgICAgIC8vIGRpc3Bvc2VkIGR1cmluZyBsYXN0IHJ1bi4gQ2xlYW4gdXAgZXZlcnl0aGluZyB0aGF0IHdhcyBib3VuZCBhZnRlciB0aGUgZGlzcG9zZSBjYWxsLlxuICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uXyhyZXN1bHQuY2F1c2UpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnkpIHtcbiAgICAgIHNweVJlcG9ydEVuZCh7XG4gICAgICAgIHRpbWU6IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGVuZEJhdGNoKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8gPSBmdW5jdGlvbiByZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb25fKGVycm9yKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcl8pIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyXyhlcnJvciwgdGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMpIHRocm93IGVycm9yO1xuICAgIHZhciBtZXNzYWdlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJbbW9ieF0gRW5jb3VudGVyZWQgYW4gdW5jYXVnaHQgZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBieSBhIHJlYWN0aW9uIG9yIG9ic2VydmVyIGNvbXBvbmVudCwgaW46ICdcIiArIHRoaXMgKyBcIidcIiA6IFwiW21vYnhdIHVuY2F1Z2h0IGVycm9yIGluICdcIiArIHRoaXMgKyBcIidcIjtcblxuICAgIGlmICghZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnJvcik7XG4gICAgICAvKiogSWYgZGVidWdnaW5nIGJyb3VnaHQgeW91IGhlcmUsIHBsZWFzZSwgcmVhZCB0aGUgYWJvdmUgbWVzc2FnZSA6LSkuIFRueCEgKi9cbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgY29uc29sZS53YXJuKFwiW21vYnhdIChlcnJvciBpbiByZWFjdGlvbiAnXCIgKyB0aGlzLm5hbWVfICsgXCInIHN1cHByZXNzZWQsIGZpeCBlcnJvciBvZiBjYXVzaW5nIGFjdGlvbiBiZWxvdylcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICBzcHlSZXBvcnQoe1xuICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIGVycm9yOiBcIlwiICsgZXJyb3JcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICByZXR1cm4gZihlcnJvciwgX3RoaXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZF8pIHtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZF8gPSB0cnVlO1xuXG4gICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nXykge1xuICAgICAgICAvLyBpZiBkaXNwb3NlZCB3aGlsZSBydW5uaW5nLCBjbGVhbiB1cCBsYXRlci4gTWF5YmUgbm90IG9wdGltYWwsIGJ1dCByYXJlIGNhc2VcbiAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldERpc3Bvc2VyXyA9IGZ1bmN0aW9uIGdldERpc3Bvc2VyXygpIHtcbiAgICB2YXIgciA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xuICAgIHJbJG1vYnhdID0gdGhpcztcbiAgICByZXR1cm4gcjtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJSZWFjdGlvbltcIiArIHRoaXMubmFtZV8gKyBcIl1cIjtcbiAgfTtcblxuICBfcHJvdG8udHJhY2UgPSBmdW5jdGlvbiB0cmFjZSQxKGVudGVyQnJlYWtQb2ludCkge1xuICAgIGlmIChlbnRlckJyZWFrUG9pbnQgPT09IHZvaWQgMCkge1xuICAgICAgZW50ZXJCcmVha1BvaW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJhY2UodGhpcywgZW50ZXJCcmVha1BvaW50KTtcbiAgfTtcblxuICByZXR1cm4gUmVhY3Rpb247XG59KCk7XG5mdW5jdGlvbiBvblJlYWN0aW9uRXJyb3IoaGFuZGxlcikge1xuICBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaWR4ID0gZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYgKGlkeCA+PSAwKSBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gIH07XG59XG4vKipcclxuICogTWFnaWMgbnVtYmVyIGFsZXJ0IVxyXG4gKiBEZWZpbmVzIHdpdGhpbiBob3cgbWFueSB0aW1lcyBhIHJlYWN0aW9uIGlzIGFsbG93ZWQgdG8gcmUtdHJpZ2dlciBpdHNlbGZcclxuICogdW50aWwgaXQgaXMgYXNzdW1lZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBuZXZlciBlbmRpbmcgbG9vcC4uLlxyXG4gKi9cblxudmFyIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TID0gMTAwO1xuXG52YXIgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiByZWFjdGlvblNjaGVkdWxlcihmKSB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5mdW5jdGlvbiBydW5SZWFjdGlvbnMoKSB7XG4gIC8vIFRyYW1wb2xpbmluZywgaWYgcnVuUmVhY3Rpb25zIGFyZSBhbHJlYWR5IHJ1bm5pbmcsIG5ldyByZWFjdGlvbnMgd2lsbCBiZSBwaWNrZWQgdXBcbiAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwIHx8IGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucykgcmV0dXJuO1xuICByZWFjdGlvblNjaGVkdWxlcihydW5SZWFjdGlvbnNIZWxwZXIpO1xufVxuXG5mdW5jdGlvbiBydW5SZWFjdGlvbnNIZWxwZXIoKSB7XG4gIGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucyA9IHRydWU7XG4gIHZhciBhbGxSZWFjdGlvbnMgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zO1xuICB2YXIgaXRlcmF0aW9ucyA9IDA7IC8vIFdoaWxlIHJ1bm5pbmcgcmVhY3Rpb25zLCBuZXcgcmVhY3Rpb25zIG1pZ2h0IGJlIHRyaWdnZXJlZC5cbiAgLy8gSGVuY2Ugd2Ugd29yayB3aXRoIHR3byB2YXJpYWJsZXMgYW5kIGNoZWNrIHdoZXRoZXJcbiAgLy8gd2UgY29udmVyZ2UgdG8gbm8gcmVtYWluaW5nIHJlYWN0aW9ucyBhZnRlciBhIHdoaWxlLlxuXG4gIHdoaWxlIChhbGxSZWFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIGlmICgrK2l0ZXJhdGlvbnMgPT09IE1BWF9SRUFDVElPTl9JVEVSQVRJT05TKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiUmVhY3Rpb24gZG9lc24ndCBjb252ZXJnZSB0byBhIHN0YWJsZSBzdGF0ZSBhZnRlciBcIiArIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TICsgXCIgaXRlcmF0aW9ucy5cIiArIChcIiBQcm9iYWJseSB0aGVyZSBpcyBhIGN5Y2xlIGluIHRoZSByZWFjdGl2ZSBmdW5jdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pIDogXCJbbW9ieF0gY3ljbGUgaW4gcmVhY3Rpb246IFwiICsgYWxsUmVhY3Rpb25zWzBdKTtcbiAgICAgIGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7IC8vIGNsZWFyIHJlYWN0aW9uc1xuICAgIH1cblxuICAgIHZhciByZW1haW5pbmdSZWFjdGlvbnMgPSBhbGxSZWFjdGlvbnMuc3BsaWNlKDApO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSByZW1haW5pbmdSZWFjdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByZW1haW5pbmdSZWFjdGlvbnNbaV0ucnVuUmVhY3Rpb25fKCk7XG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG59XG5cbnZhciBpc1JlYWN0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJSZWFjdGlvblwiLCBSZWFjdGlvbik7XG5mdW5jdGlvbiBzZXRSZWFjdGlvblNjaGVkdWxlcihmbikge1xuICB2YXIgYmFzZVNjaGVkdWxlciA9IHJlYWN0aW9uU2NoZWR1bGVyO1xuXG4gIHJlYWN0aW9uU2NoZWR1bGVyID0gZnVuY3Rpb24gcmVhY3Rpb25TY2hlZHVsZXIoZikge1xuICAgIHJldHVybiBmbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYmFzZVNjaGVkdWxlcihmKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTcHlFbmFibGVkKCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICEhZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIHNweVJlcG9ydChldmVudCkge1xuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSByZXR1cm47IC8vIGRlYWQgY29kZSBlbGltaW5hdGlvbiBjYW4gZG8gdGhlIHJlc3RcblxuICBpZiAoIWdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5sZW5ndGgpIHJldHVybjtcbiAgdmFyIGxpc3RlbmVycyA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xuICB9XG59XG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydChldmVudCkge1xuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSByZXR1cm47XG5cbiAgdmFyIGNoYW5nZSA9IF9leHRlbmRzKHt9LCBldmVudCwge1xuICAgIHNweVJlcG9ydFN0YXJ0OiB0cnVlXG4gIH0pO1xuXG4gIHNweVJlcG9ydChjaGFuZ2UpO1xufVxudmFyIEVORF9FVkVOVCA9IHtcbiAgdHlwZTogXCJyZXBvcnQtZW5kXCIsXG4gIHNweVJlcG9ydEVuZDogdHJ1ZVxufTtcbmZ1bmN0aW9uIHNweVJlcG9ydEVuZChjaGFuZ2UpIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkgcmV0dXJuO1xuICBpZiAoY2hhbmdlKSBzcHlSZXBvcnQoX2V4dGVuZHMoe30sIGNoYW5nZSwge1xuICAgIHR5cGU6IFwicmVwb3J0LWVuZFwiLFxuICAgIHNweVJlcG9ydEVuZDogdHJ1ZVxuICB9KSk7ZWxzZSBzcHlSZXBvcnQoRU5EX0VWRU5UKTtcbn1cbmZ1bmN0aW9uIHNweShsaXN0ZW5lcikge1xuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYnguc3B5XSBJcyBhIG5vLW9wIGluIHByb2R1Y3Rpb24gYnVpbGRzXCIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgQUNUSU9OID0gXCJhY3Rpb25cIjtcbnZhciBBQ1RJT05fQk9VTkQgPSBcImFjdGlvbi5ib3VuZFwiO1xudmFyIEFVVE9BQ1RJT04gPSBcImF1dG9BY3Rpb25cIjtcbnZhciBBVVRPQUNUSU9OX0JPVU5EID0gXCJhdXRvQWN0aW9uLmJvdW5kXCI7XG52YXIgREVGQVVMVF9BQ1RJT05fTkFNRSA9IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xudmFyIGFjdGlvbkFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBQ1RJT04pO1xudmFyIGFjdGlvbkJvdW5kQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVBY3Rpb25Bbm5vdGF0aW9uKEFDVElPTl9CT1VORCwge1xuICBib3VuZDogdHJ1ZVxufSk7XG52YXIgYXV0b0FjdGlvbkFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBVVRPQUNUSU9OLCB7XG4gIGF1dG9BY3Rpb246IHRydWVcbn0pO1xudmFyIGF1dG9BY3Rpb25Cb3VuZEFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBVVRPQUNUSU9OX0JPVU5ELCB7XG4gIGF1dG9BY3Rpb246IHRydWUsXG4gIGJvdW5kOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uRmFjdG9yeShhdXRvQWN0aW9uKSB7XG4gIHZhciByZXMgPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIC8vIGFjdGlvbihmbigpIHt9KVxuICAgIGlmIChpc0Z1bmN0aW9uKGFyZzEpKSByZXR1cm4gY3JlYXRlQWN0aW9uKGFyZzEubmFtZSB8fCBERUZBVUxUX0FDVElPTl9OQU1FLCBhcmcxLCBhdXRvQWN0aW9uKTsgLy8gYWN0aW9uKFwibmFtZVwiLCBmbigpIHt9KVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oYXJnMikpIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMSwgYXJnMiwgYXV0b0FjdGlvbik7IC8vIEBhY3Rpb25cblxuICAgIGlmIChpc1N0cmluZ2lzaChhcmcyKSkge1xuICAgICAgcmV0dXJuIHN0b3JlQW5ub3RhdGlvbihhcmcxLCBhcmcyLCBhdXRvQWN0aW9uID8gYXV0b0FjdGlvbkFubm90YXRpb24gOiBhY3Rpb25Bbm5vdGF0aW9uKTtcbiAgICB9IC8vIGFjdGlvbihcIm5hbWVcIikgJiBAYWN0aW9uKFwibmFtZVwiKVxuXG5cbiAgICBpZiAoaXNTdHJpbmdpc2goYXJnMSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGNyZWF0ZUFjdGlvbkFubm90YXRpb24oYXV0b0FjdGlvbiA/IEFVVE9BQ1RJT04gOiBBQ1RJT04sIHtcbiAgICAgICAgbmFtZTogYXJnMSxcbiAgICAgICAgYXV0b0FjdGlvbjogYXV0b0FjdGlvblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGRpZShcIkludmFsaWQgYXJndW1lbnRzIGZvciBgYWN0aW9uYFwiKTtcbiAgfTtcblxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgYWN0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUFjdGlvbkZhY3RvcnkoZmFsc2UpO1xuT2JqZWN0LmFzc2lnbihhY3Rpb24sIGFjdGlvbkFubm90YXRpb24pO1xudmFyIGF1dG9BY3Rpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uRmFjdG9yeSh0cnVlKTtcbk9iamVjdC5hc3NpZ24oYXV0b0FjdGlvbiwgYXV0b0FjdGlvbkFubm90YXRpb24pO1xuYWN0aW9uLmJvdW5kID0gLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24oYWN0aW9uQm91bmRBbm5vdGF0aW9uKTtcbmF1dG9BY3Rpb24uYm91bmQgPSAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihhdXRvQWN0aW9uQm91bmRBbm5vdGF0aW9uKTtcbmZ1bmN0aW9uIHJ1bkluQWN0aW9uKGZuKSB7XG4gIHJldHVybiBleGVjdXRlQWN0aW9uKGZuLm5hbWUgfHwgREVGQVVMVF9BQ1RJT05fTkFNRSwgZmFsc2UsIGZuLCB0aGlzLCB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gaXNBY3Rpb24odGhpbmcpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24odGhpbmcpICYmIHRoaW5nLmlzTW9ieEFjdGlvbiA9PT0gdHJ1ZTtcbn1cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuYW1lZCByZWFjdGl2ZSB2aWV3IGFuZCBrZWVwcyBpdCBhbGl2ZSwgc28gdGhhdCB0aGUgdmlldyBpcyBhbHdheXNcclxuICogdXBkYXRlZCBpZiBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBjaGFuZ2VzLCBldmVuIHdoZW4gdGhlIHZpZXcgaXMgbm90IGZ1cnRoZXIgdXNlZCBieSBzb21ldGhpbmcgZWxzZS5cclxuICogQHBhcmFtIHZpZXcgVGhlIHJlYWN0aXZlIHZpZXdcclxuICogQHJldHVybnMgZGlzcG9zZXIgZnVuY3Rpb24sIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHN0b3AgdGhlIHZpZXcgZnJvbSBiZWluZyB1cGRhdGVkIGluIHRoZSBmdXR1cmUuXHJcbiAqL1xuXG5mdW5jdGlvbiBhdXRvcnVuKHZpZXcsIG9wdHMpIHtcbiAgdmFyIF9vcHRzJG5hbWUsIF9vcHRzO1xuXG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0gRU1QVFlfT0JKRUNUO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNGdW5jdGlvbih2aWV3KSkgZGllKFwiQXV0b3J1biBleHBlY3RzIGEgZnVuY3Rpb24gYXMgZmlyc3QgYXJndW1lbnRcIik7XG4gICAgaWYgKGlzQWN0aW9uKHZpZXcpKSBkaWUoXCJBdXRvcnVuIGRvZXMgbm90IGFjY2VwdCBhY3Rpb25zIHNpbmNlIGFjdGlvbnMgYXJlIHVudHJhY2thYmxlXCIpO1xuICB9XG5cbiAgdmFyIG5hbWUgPSAoX29wdHMkbmFtZSA9IChfb3B0cyA9IG9wdHMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0cy5uYW1lKSAhPSBudWxsID8gX29wdHMkbmFtZSA6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHZpZXcubmFtZSB8fCBcIkF1dG9ydW5AXCIgKyBnZXROZXh0SWQoKSA6IFwiQXV0b3J1blwiO1xuICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcbiAgdmFyIHJlYWN0aW9uO1xuXG4gIGlmIChydW5TeW5jKSB7XG4gICAgLy8gbm9ybWFsIGF1dG9ydW5cbiAgICByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICB9LCBvcHRzLm9uRXJyb3IsIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2NoZWR1bGVyID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7IC8vIGRlYm91bmNlZCBhdXRvcnVuXG5cbiAgICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgc2NoZWR1bGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgIGlmICghcmVhY3Rpb24uaXNEaXNwb3NlZF8pIHJlYWN0aW9uLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcbiAgICB2aWV3KHJlYWN0aW9uKTtcbiAgfVxuXG4gIHJlYWN0aW9uLnNjaGVkdWxlXygpO1xuICByZXR1cm4gcmVhY3Rpb24uZ2V0RGlzcG9zZXJfKCk7XG59XG5cbnZhciBydW4gPSBmdW5jdGlvbiBydW4oZikge1xuICByZXR1cm4gZigpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cykge1xuICByZXR1cm4gb3B0cy5zY2hlZHVsZXIgPyBvcHRzLnNjaGVkdWxlciA6IG9wdHMuZGVsYXkgPyBmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIG9wdHMuZGVsYXkpO1xuICB9IDogcnVuO1xufVxuXG5mdW5jdGlvbiByZWFjdGlvbihleHByZXNzaW9uLCBlZmZlY3QsIG9wdHMpIHtcbiAgdmFyIF9vcHRzJG5hbWUyO1xuXG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0gRU1QVFlfT0JKRUNUO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNGdW5jdGlvbihleHByZXNzaW9uKSB8fCAhaXNGdW5jdGlvbihlZmZlY3QpKSBkaWUoXCJGaXJzdCBhbmQgc2Vjb25kIGFyZ3VtZW50IHRvIHJlYWN0aW9uIHNob3VsZCBiZSBmdW5jdGlvbnNcIik7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KG9wdHMpKSBkaWUoXCJUaGlyZCBhcmd1bWVudCBvZiByZWFjdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdFwiKTtcbiAgfVxuXG4gIHZhciBuYW1lID0gKF9vcHRzJG5hbWUyID0gb3B0cy5uYW1lKSAhPSBudWxsID8gX29wdHMkbmFtZTIgOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCkgOiBcIlJlYWN0aW9uXCI7XG4gIHZhciBlZmZlY3RBY3Rpb24gPSBhY3Rpb24obmFtZSwgb3B0cy5vbkVycm9yID8gd3JhcEVycm9ySGFuZGxlcihvcHRzLm9uRXJyb3IsIGVmZmVjdCkgOiBlZmZlY3QpO1xuICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcbiAgdmFyIHNjaGVkdWxlciA9IGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpO1xuICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIG9sZFZhbHVlID0gdW5kZWZpbmVkOyAvLyBvbmx5IGFuIGlzc3VlIHdpdGggZmlyZUltbWVkaWF0ZWx5XG5cbiAgdmFyIGVxdWFscyA9IG9wdHMuY29tcGFyZVN0cnVjdHVyYWwgPyBjb21wYXJlci5zdHJ1Y3R1cmFsIDogb3B0cy5lcXVhbHMgfHwgY29tcGFyZXJbXCJkZWZhdWx0XCJdO1xuICB2YXIgciA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZpcnN0VGltZSB8fCBydW5TeW5jKSB7XG4gICAgICByZWFjdGlvblJ1bm5lcigpO1xuICAgIH0gZWxzZSBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzY2hlZHVsZXIocmVhY3Rpb25SdW5uZXIpO1xuICAgIH1cbiAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG5cbiAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBpZiAoci5pc0Rpc3Bvc2VkXykgcmV0dXJuO1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgci50cmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmV4dFZhbHVlID0gYWxsb3dTdGF0ZUNoYW5nZXMoZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb24ocik7XG4gICAgICB9KTtcbiAgICAgIGNoYW5nZWQgPSBmaXJzdFRpbWUgfHwgIWVxdWFscyh2YWx1ZSwgbmV4dFZhbHVlKTtcbiAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoZmlyc3RUaW1lICYmIG9wdHMuZmlyZUltbWVkaWF0ZWx5KSBlZmZlY3RBY3Rpb24odmFsdWUsIG9sZFZhbHVlLCByKTtlbHNlIGlmICghZmlyc3RUaW1lICYmIGNoYW5nZWQpIGVmZmVjdEFjdGlvbih2YWx1ZSwgb2xkVmFsdWUsIHIpO1xuICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICB9XG5cbiAgci5zY2hlZHVsZV8oKTtcbiAgcmV0dXJuIHIuZ2V0RGlzcG9zZXJfKCk7XG59XG5cbmZ1bmN0aW9uIHdyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBiYXNlRm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGJhc2VGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9ySGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIE9OX0JFQ09NRV9PQlNFUlZFRCA9IFwib25CT1wiO1xudmFyIE9OX0JFQ09NRV9VTk9CU0VSVkVEID0gXCJvbkJVT1wiO1xuZnVuY3Rpb24gb25CZWNvbWVPYnNlcnZlZCh0aGluZywgYXJnMiwgYXJnMykge1xuICByZXR1cm4gaW50ZXJjZXB0SG9vayhPTl9CRUNPTUVfT0JTRVJWRUQsIHRoaW5nLCBhcmcyLCBhcmczKTtcbn1cbmZ1bmN0aW9uIG9uQmVjb21lVW5vYnNlcnZlZCh0aGluZywgYXJnMiwgYXJnMykge1xuICByZXR1cm4gaW50ZXJjZXB0SG9vayhPTl9CRUNPTUVfVU5PQlNFUlZFRCwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRIb29rKGhvb2ssIHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gIHZhciBhdG9tID0gdHlwZW9mIGFyZzMgPT09IFwiZnVuY3Rpb25cIiA/IGdldEF0b20odGhpbmcsIGFyZzIpIDogZ2V0QXRvbSh0aGluZyk7XG4gIHZhciBjYiA9IGlzRnVuY3Rpb24oYXJnMykgPyBhcmczIDogYXJnMjtcbiAgdmFyIGxpc3RlbmVyc0tleSA9IGhvb2sgKyBcIkxcIjtcblxuICBpZiAoYXRvbVtsaXN0ZW5lcnNLZXldKSB7XG4gICAgYXRvbVtsaXN0ZW5lcnNLZXldLmFkZChjYik7XG4gIH0gZWxzZSB7XG4gICAgYXRvbVtsaXN0ZW5lcnNLZXldID0gbmV3IFNldChbY2JdKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhvb2tMaXN0ZW5lcnMgPSBhdG9tW2xpc3RlbmVyc0tleV07XG5cbiAgICBpZiAoaG9va0xpc3RlbmVycykge1xuICAgICAgaG9va0xpc3RlbmVyc1tcImRlbGV0ZVwiXShjYik7XG5cbiAgICAgIGlmIChob29rTGlzdGVuZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgZGVsZXRlIGF0b21bbGlzdGVuZXJzS2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciBORVZFUiA9IFwibmV2ZXJcIjtcbnZhciBBTFdBWVMgPSBcImFsd2F5c1wiO1xudmFyIE9CU0VSVkVEID0gXCJvYnNlcnZlZFwiOyAvLyBjb25zdCBJRl9BVkFJTEFCTEUgPSBcImlmYXZhaWxhYmxlXCJcblxuZnVuY3Rpb24gY29uZmlndXJlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuaXNvbGF0ZUdsb2JhbFN0YXRlID09PSB0cnVlKSB7XG4gICAgaXNvbGF0ZUdsb2JhbFN0YXRlKCk7XG4gIH1cblxuICB2YXIgdXNlUHJveGllcyA9IG9wdGlvbnMudXNlUHJveGllcyxcbiAgICAgIGVuZm9yY2VBY3Rpb25zID0gb3B0aW9ucy5lbmZvcmNlQWN0aW9ucztcblxuICBpZiAodXNlUHJveGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2xvYmFsU3RhdGUudXNlUHJveGllcyA9IHVzZVByb3hpZXMgPT09IEFMV0FZUyA/IHRydWUgOiB1c2VQcm94aWVzID09PSBORVZFUiA/IGZhbHNlIDogdHlwZW9mIFByb3h5ICE9PSBcInVuZGVmaW5lZFwiO1xuICB9XG5cbiAgaWYgKHVzZVByb3hpZXMgPT09IFwiaWZhdmFpbGFibGVcIikgZ2xvYmFsU3RhdGUudmVyaWZ5UHJveGllcyA9IHRydWU7XG5cbiAgaWYgKGVuZm9yY2VBY3Rpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZWEgPSBlbmZvcmNlQWN0aW9ucyA9PT0gQUxXQVlTID8gQUxXQVlTIDogZW5mb3JjZUFjdGlvbnMgPT09IE9CU0VSVkVEO1xuICAgIGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID0gZWE7XG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBlYSA9PT0gdHJ1ZSB8fCBlYSA9PT0gQUxXQVlTID8gZmFsc2UgOiB0cnVlO1xuICB9XG4gIFtcImNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvblwiLCBcInJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlXCIsIFwib2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb25cIiwgXCJkaXNhYmxlRXJyb3JCb3VuZGFyaWVzXCIsIFwic2FmZURlc2NyaXB0b3JzXCJdLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgaW4gb3B0aW9ucykgZ2xvYmFsU3RhdGVba2V5XSA9ICEhb3B0aW9uc1trZXldO1xuICB9KTtcbiAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzID0gIWdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9PT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUud2FybihcIldBUk5JTkc6IERlYnVnIGZlYXR1cmUgb25seS4gTW9iWCB3aWxsIE5PVCByZWNvdmVyIGZyb20gZXJyb3JzIHdoZW4gYGRpc2FibGVFcnJvckJvdW5kYXJpZXNgIGlzIGVuYWJsZWQuXCIpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucmVhY3Rpb25TY2hlZHVsZXIpIHtcbiAgICBzZXRSZWFjdGlvblNjaGVkdWxlcihvcHRpb25zLnJlYWN0aW9uU2NoZWR1bGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRlbmRPYnNlcnZhYmxlKHRhcmdldCwgcHJvcGVydGllcywgYW5ub3RhdGlvbnMsIG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gNCkgZGllKFwiJ2V4dGVuZE9ic2VydmFibGUnIGV4cGVjdGVkIDItNCBhcmd1bWVudHNcIik7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIGRpZShcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RzIGFuIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudFwiKTtcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRhcmdldCkpIGRpZShcIidleHRlbmRPYnNlcnZhYmxlJyBzaG91bGQgbm90IGJlIHVzZWQgb24gbWFwcywgdXNlIG1hcC5tZXJnZSBpbnN0ZWFkXCIpO1xuICAgIGlmICghaXNQbGFpbk9iamVjdChwcm9wZXJ0aWVzKSkgZGllKFwiJ2V4dGVuZE9ic2VydmFiZScgb25seSBhY2NlcHRzIHBsYWluIG9iamVjdHMgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xuICAgIGlmIChpc09ic2VydmFibGUocHJvcGVydGllcykgfHwgaXNPYnNlcnZhYmxlKGFubm90YXRpb25zKSkgZGllKFwiRXh0ZW5kaW5nIGFuIG9iamVjdCB3aXRoIGFub3RoZXIgb2JzZXJ2YWJsZSAob2JqZWN0KSBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICB9IC8vIFB1bGwgZGVzY3JpcHRvcnMgZmlyc3QsIHNvIHdlIGRvbid0IGhhdmUgdG8gZGVhbCB3aXRoIHByb3BzIGFkZGVkIGJ5IGFkbWluaXN0cmF0aW9uICgkbW9ieClcblxuXG4gIHZhciBkZXNjcmlwdG9ycyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocHJvcGVydGllcyk7XG4gIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zKVskbW9ieF07XG4gIHN0YXJ0QmF0Y2goKTtcblxuICB0cnkge1xuICAgIG93bktleXMoZGVzY3JpcHRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgYWRtLmV4dGVuZF8oa2V5LCBkZXNjcmlwdG9yc1trZXldLCAvLyBtdXN0IHBhc3MgXCJ1bmRlZmluZWRcIiBmb3IgeyBrZXk6IHVuZGVmaW5lZCB9XG4gICAgICAhYW5ub3RhdGlvbnMgPyB0cnVlIDoga2V5IGluIGFubm90YXRpb25zID8gYW5ub3RhdGlvbnNba2V5XSA6IHRydWUpO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGVuZEJhdGNoKCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmN5VHJlZSh0aGluZywgcHJvcGVydHkpIHtcbiAgcmV0dXJuIG5vZGVUb0RlcGVuZGVuY3lUcmVlKGdldEF0b20odGhpbmcsIHByb3BlcnR5KSk7XG59XG5cbmZ1bmN0aW9uIG5vZGVUb0RlcGVuZGVuY3lUcmVlKG5vZGUpIHtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBuYW1lOiBub2RlLm5hbWVfXG4gIH07XG4gIGlmIChub2RlLm9ic2VydmluZ18gJiYgbm9kZS5vYnNlcnZpbmdfLmxlbmd0aCA+IDApIHJlc3VsdC5kZXBlbmRlbmNpZXMgPSB1bmlxdWUobm9kZS5vYnNlcnZpbmdfKS5tYXAobm9kZVRvRGVwZW5kZW5jeVRyZWUpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlclRyZWUodGhpbmcsIHByb3BlcnR5KSB7XG4gIHJldHVybiBub2RlVG9PYnNlcnZlclRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cblxuZnVuY3Rpb24gbm9kZVRvT2JzZXJ2ZXJUcmVlKG5vZGUpIHtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBuYW1lOiBub2RlLm5hbWVfXG4gIH07XG4gIGlmIChoYXNPYnNlcnZlcnMobm9kZSkpIHJlc3VsdC5vYnNlcnZlcnMgPSBBcnJheS5mcm9tKGdldE9ic2VydmVycyhub2RlKSkubWFwKG5vZGVUb09ic2VydmVyVHJlZSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZShsaXN0KSB7XG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQobGlzdCkpO1xufVxuXG52YXIgZ2VuZXJhdG9ySWQgPSAwO1xuZnVuY3Rpb24gRmxvd0NhbmNlbGxhdGlvbkVycm9yKCkge1xuICB0aGlzLm1lc3NhZ2UgPSBcIkZMT1dfQ0FOQ0VMTEVEXCI7XG59XG5GbG93Q2FuY2VsbGF0aW9uRXJyb3IucHJvdG90eXBlID0gLyojX19QVVJFX18qL09iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbmZ1bmN0aW9uIGlzRmxvd0NhbmNlbGxhdGlvbkVycm9yKGVycm9yKSB7XG4gIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEZsb3dDYW5jZWxsYXRpb25FcnJvcjtcbn1cbnZhciBmbG93QW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVGbG93QW5ub3RhdGlvbihcImZsb3dcIik7XG52YXIgZmxvd0JvdW5kQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVGbG93QW5ub3RhdGlvbihcImZsb3cuYm91bmRcIiwge1xuICBib3VuZDogdHJ1ZVxufSk7XG52YXIgZmxvdyA9IC8qI19fUFVSRV9fKi9PYmplY3QuYXNzaWduKGZ1bmN0aW9uIGZsb3coYXJnMSwgYXJnMikge1xuICAvLyBAZmxvd1xuICBpZiAoaXNTdHJpbmdpc2goYXJnMikpIHtcbiAgICByZXR1cm4gc3RvcmVBbm5vdGF0aW9uKGFyZzEsIGFyZzIsIGZsb3dBbm5vdGF0aW9uKTtcbiAgfSAvLyBmbG93KGZuKVxuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBhcmd1bWVudHMubGVuZ3RoICE9PSAxKSBkaWUoXCJGbG93IGV4cGVjdHMgc2luZ2xlIGFyZ3VtZW50IHdpdGggZ2VuZXJhdG9yIGZ1bmN0aW9uXCIpO1xuICB2YXIgZ2VuZXJhdG9yID0gYXJnMTtcbiAgdmFyIG5hbWUgPSBnZW5lcmF0b3IubmFtZSB8fCBcIjx1bm5hbWVkIGZsb3c+XCI7IC8vIEltcGxlbWVudGF0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jby9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4gIHZhciByZXMgPSBmdW5jdGlvbiByZXMoKSB7XG4gICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHJ1bklkID0gKytnZW5lcmF0b3JJZDtcbiAgICB2YXIgZ2VuID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSBpbml0XCIsIGdlbmVyYXRvcikuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICB2YXIgcmVqZWN0b3I7XG4gICAgdmFyIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHN0ZXBJZCA9IDA7XG4gICAgICByZWplY3RvciA9IHJlamVjdDtcblxuICAgICAgZnVuY3Rpb24gb25GdWxmaWxsZWQocmVzKSB7XG4gICAgICAgIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgcmV0O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0ID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSB5aWVsZCBcIiArIHN0ZXBJZCsrLCBnZW4ubmV4dCkuY2FsbChnZW4sIHJlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dChyZXQpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGVycikge1xuICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHJldDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuW1widGhyb3dcIl0pLmNhbGwoZ2VuLCBlcnIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQocmV0KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbmV4dChyZXQpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmV0ID09IG51bGwgPyB2b2lkIDAgOiByZXQudGhlbikpIHtcbiAgICAgICAgICAvLyBhbiBhc3luYyBpdGVyYXRvclxuICAgICAgICAgIHJldC50aGVuKG5leHQsIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldC5kb25lKSByZXR1cm4gcmVzb2x2ZShyZXQudmFsdWUpO1xuICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXQudmFsdWUpO1xuICAgICAgICByZXR1cm4gcGVuZGluZ1Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIG9uRnVsZmlsbGVkKHVuZGVmaW5lZCk7IC8vIGtpY2sgb2ZmIHRoZSBwcm9jZXNzXG4gICAgfSk7XG4gICAgcHJvbWlzZS5jYW5jZWwgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGNhbmNlbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocGVuZGluZ1Byb21pc2UpIGNhbmNlbFByb21pc2UocGVuZGluZ1Byb21pc2UpOyAvLyBGaW5hbGx5IGJsb2NrIGNhbiByZXR1cm4gKG9yIHlpZWxkKSBzdHVmZi4uXG5cbiAgICAgICAgdmFyIF9yZXMgPSBnZW5bXCJyZXR1cm5cIl0odW5kZWZpbmVkKTsgLy8gZWF0IGFueXRoaW5nIHRoYXQgcHJvbWlzZSB3b3VsZCBkbywgaXQncyBjYW5jZWxsZWQhXG5cblxuICAgICAgICB2YXIgeWllbGRlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoX3Jlcy52YWx1ZSk7XG4gICAgICAgIHlpZWxkZWRQcm9taXNlLnRoZW4obm9vcCwgbm9vcCk7XG4gICAgICAgIGNhbmNlbFByb21pc2UoeWllbGRlZFByb21pc2UpOyAvLyBtYXliZSBpdCBjYW4gYmUgY2FuY2VsbGVkIDopXG4gICAgICAgIC8vIHJlamVjdCBvdXIgb3JpZ2luYWwgcHJvbWlzZVxuXG4gICAgICAgIHJlamVjdG9yKG5ldyBGbG93Q2FuY2VsbGF0aW9uRXJyb3IoKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdG9yKGUpOyAvLyB0aGVyZSBjb3VsZCBiZSBhIHRocm93aW5nIGZpbmFsbHkgYmxvY2tcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICByZXMuaXNNb2JYRmxvdyA9IHRydWU7XG4gIHJldHVybiByZXM7XG59LCBmbG93QW5ub3RhdGlvbik7XG5mbG93LmJvdW5kID0gLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24oZmxvd0JvdW5kQW5ub3RhdGlvbik7XG5cbmZ1bmN0aW9uIGNhbmNlbFByb21pc2UocHJvbWlzZSkge1xuICBpZiAoaXNGdW5jdGlvbihwcm9taXNlLmNhbmNlbCkpIHByb21pc2UuY2FuY2VsKCk7XG59XG5cbmZ1bmN0aW9uIGZsb3dSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQ7IC8vIGp1c3QgdHJpY2tpbmcgVHlwZVNjcmlwdCA6KVxufVxuZnVuY3Rpb24gaXNGbG93KGZuKSB7XG4gIHJldHVybiAoZm4gPT0gbnVsbCA/IHZvaWQgMCA6IGZuLmlzTW9iWEZsb3cpID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRSZWFkcyh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcikge1xuICB2YXIgdGFyZ2V0O1xuXG4gIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSB8fCBpc09ic2VydmFibGVWYWx1ZSh0aGluZykpIHtcbiAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWlzU3RyaW5naXNoKHByb3BPckhhbmRsZXIpKSByZXR1cm4gZGllKFwiSW50ZXJjZXB0UmVhZHMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGEgc3BlY2lmaWMgcHJvcGVydHksIG5vdCB3aXRoIGFuIG9iamVjdCBpbiBnZW5lcmFsXCIpO1xuICAgIHRhcmdldCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm4gZGllKFwiRXhwZWN0ZWQgb2JzZXJ2YWJsZSBtYXAsIG9iamVjdCBvciBhcnJheSBhcyBmaXJzdCBhcnJheVwiKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgdGFyZ2V0LmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHJldHVybiBkaWUoXCJBbiBpbnRlcmNlcHQgcmVhZGVyIHdhcyBhbHJlYWR5IGVzdGFibGlzaGVkXCIpO1xuICB0YXJnZXQuZGVoYW5jZXIgPSB0eXBlb2YgcHJvcE9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiID8gcHJvcE9ySGFuZGxlciA6IGhhbmRsZXI7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdGFyZ2V0LmRlaGFuY2VyID0gdW5kZWZpbmVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHQodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHJldHVybiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcik7ZWxzZSByZXR1cm4gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgcHJvcE9ySGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5pbnRlcmNlcHRfKGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkuaW50ZXJjZXB0XyhoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gX2lzQ29tcHV0ZWQodmFsdWUsIHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF2YWx1ZVskbW9ieF0udmFsdWVzXy5oYXMocHJvcGVydHkpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGF0b20gPSBnZXRBdG9tKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgcmV0dXJuIGlzQ29tcHV0ZWRWYWx1ZShhdG9tKTtcbiAgfVxuXG4gIHJldHVybiBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDb21wdXRlZCh2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxKSByZXR1cm4gZGllKFwiaXNDb21wdXRlZCBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzQ29tcHV0ZWRQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcbiAgcmV0dXJuIF9pc0NvbXB1dGVkKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzQ29tcHV0ZWRQcm9wKHZhbHVlLCBwcm9wTmFtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1N0cmluZ2lzaChwcm9wTmFtZSkpIHJldHVybiBkaWUoXCJpc0NvbXB1dGVkIGV4cGVjdGVkIGEgcHJvcGVydHkgbmFtZSBhcyBzZWNvbmQgYXJndW1lbnRcIik7XG4gIHJldHVybiBfaXNDb21wdXRlZCh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wZXJ0eSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIChpc09ic2VydmFibGVNYXAodmFsdWUpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHZhbHVlKSkpIHJldHVybiBkaWUoXCJpc09ic2VydmFibGUob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIGFycmF5cyBhbmQgbWFwcy4gVXNlIG1hcC5oYXMgb3IgYXJyYXkubGVuZ3RoIGluc3RlYWQuXCIpO1xuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVskbW9ieF0udmFsdWVzXy5oYXMocHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBGb3IgZmlyc3QgY2hlY2ssIHNlZSAjNzAxXG5cblxuICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSB8fCAhIXZhbHVlWyRtb2J4XSB8fCBpc0F0b20odmFsdWUpIHx8IGlzUmVhY3Rpb24odmFsdWUpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZSh2YWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIGRpZShcImlzT2JzZXJ2YWJsZSBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzT2JzZXJ2YWJsZVByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5XCIpO1xuICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc09ic2VydmFibGVQcm9wKHZhbHVlLCBwcm9wTmFtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1N0cmluZ2lzaChwcm9wTmFtZSkpIHJldHVybiBkaWUoXCJleHBlY3RlZCBhIHByb3BlcnR5IG5hbWUgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xuICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBrZXlzKG9iaikge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqWyRtb2J4XS5rZXlzXygpO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopIHx8IGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmtleXMoKSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChfLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgZGllKDUpO1xufVxuZnVuY3Rpb24gdmFsdWVzKG9iaikge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gb2JqLmdldChrZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLnZhbHVlcygpKTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5zbGljZSgpO1xuICB9XG5cbiAgZGllKDYpO1xufVxuZnVuY3Rpb24gZW50cmllcyhvYmopIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIFtrZXksIG9ialtrZXldXTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBba2V5LCBvYmouZ2V0KGtleSldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG4gICAgICByZXR1cm4gW2luZGV4LCBrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgZGllKDcpO1xufVxuZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICBzdGFydEJhdGNoKCk7XG4gICAgdmFyIF92YWx1ZXMgPSBrZXk7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2tleSBpbiBfdmFsdWVzKSB7XG4gICAgICAgIHNldChvYmosIF9rZXksIF92YWx1ZXNbX2tleV0pO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBlbmRCYXRjaCgpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIG9ialskbW9ieF0uc2V0XyhrZXksIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIG9iai5zZXQoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICBvYmouYWRkKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICBpZiAoa2V5IDwgMCkgZGllKFwiSW52YWxpZCBpbmRleDogJ1wiICsga2V5ICsgXCInXCIpO1xuICAgIHN0YXJ0QmF0Y2goKTtcbiAgICBpZiAoa2V5ID49IG9iai5sZW5ndGgpIG9iai5sZW5ndGggPSBrZXkgKyAxO1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgZW5kQmF0Y2goKTtcbiAgfSBlbHNlIGRpZSg4KTtcbn1cbmZ1bmN0aW9uIHJlbW92ZShvYmosIGtleSkge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICBvYmpbJG1vYnhdLmRlbGV0ZV8oa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIG9ialtcImRlbGV0ZVwiXShrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgb2JqW1wiZGVsZXRlXCJdKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICBvYmouc3BsaWNlKGtleSwgMSk7XG4gIH0gZWxzZSB7XG4gICAgZGllKDkpO1xuICB9XG59XG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIG9ialskbW9ieF0uaGFzXyhrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIHJldHVybiBvYmouaGFzKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBrZXkgPj0gMCAmJiBrZXkgPCBvYmoubGVuZ3RoO1xuICB9XG5cbiAgZGllKDEwKTtcbn1cbmZ1bmN0aW9uIGdldChvYmosIGtleSkge1xuICBpZiAoIWhhcyhvYmosIGtleSkpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIG9ialskbW9ieF0uZ2V0XyhrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgcmV0dXJuIG9iai5nZXQoa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG5cbiAgZGllKDExKTtcbn1cbmZ1bmN0aW9uIGFwaURlZmluZVByb3BlcnR5KG9iaiwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBvYmpbJG1vYnhdLmRlZmluZVByb3BlcnR5XyhrZXksIGRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZGllKDM5KTtcbn1cbmZ1bmN0aW9uIGFwaU93bktleXMob2JqKSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBvYmpbJG1vYnhdLm93bktleXNfKCk7XG4gIH1cblxuICBkaWUoMzgpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSkge1xuICBpZiAoaXNGdW5jdGlvbihjYk9yRmlyZSkpIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSk7ZWxzZSByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZykub2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLm9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xufVxuXG5mdW5jdGlvbiBjYWNoZShtYXAsIGtleSwgdmFsdWUpIHtcbiAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b0pTSGVscGVyKHNvdXJjZSwgX19hbHJlYWR5U2Vlbikge1xuICBpZiAoc291cmNlID09IG51bGwgfHwgdHlwZW9mIHNvdXJjZSAhPT0gXCJvYmplY3RcIiB8fCBzb3VyY2UgaW5zdGFuY2VvZiBEYXRlIHx8ICFpc09ic2VydmFibGUoc291cmNlKSkgcmV0dXJuIHNvdXJjZTtcbiAgaWYgKGlzT2JzZXJ2YWJsZVZhbHVlKHNvdXJjZSkgfHwgaXNDb21wdXRlZFZhbHVlKHNvdXJjZSkpIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZS5nZXQoKSwgX19hbHJlYWR5U2Vlbik7XG5cbiAgaWYgKF9fYWxyZWFkeVNlZW4uaGFzKHNvdXJjZSkpIHtcbiAgICByZXR1cm4gX19hbHJlYWR5U2Vlbi5nZXQoc291cmNlKTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVBcnJheShzb3VyY2UpKSB7XG4gICAgdmFyIHJlcyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IEFycmF5KHNvdXJjZS5sZW5ndGgpKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGlkeCkge1xuICAgICAgcmVzW2lkeF0gPSB0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZVNldChzb3VyY2UpKSB7XG4gICAgdmFyIF9yZXMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBTZXQoKSk7XG5cbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIF9yZXMuYWRkKHRvSlNIZWxwZXIodmFsdWUsIF9fYWxyZWFkeVNlZW4pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3JlcztcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVNYXAoc291cmNlKSkge1xuICAgIHZhciBfcmVzMiA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IE1hcCgpKTtcblxuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBfcmVzMi5zZXQoa2V5LCB0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF9yZXMyO1xuICB9IGVsc2Uge1xuICAgIC8vIG11c3QgYmUgb2JzZXJ2YWJsZSBvYmplY3RcbiAgICB2YXIgX3JlczMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIHt9KTtcblxuICAgIGFwaU93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChvYmplY3RQcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgX3JlczNba2V5XSA9IHRvSlNIZWxwZXIoc291cmNlW2tleV0sIF9fYWxyZWFkeVNlZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfcmVzMztcbiAgfVxufVxuLyoqXHJcbiAqIEJhc2ljYWxseSwgYSBkZWVwIGNsb25lLCBzbyB0aGF0IG5vIHJlYWN0aXZlIHByb3BlcnR5IHdpbGwgZXhpc3QgYW55bW9yZS5cclxuICovXG5cblxuZnVuY3Rpb24gdG9KUyhzb3VyY2UsIG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBvcHRpb25zKSBkaWUoXCJ0b0pTIG5vIGxvbmdlciBzdXBwb3J0cyBvcHRpb25zXCIpO1xuICByZXR1cm4gdG9KU0hlbHBlcihzb3VyY2UsIG5ldyBNYXAoKSk7XG59XG5cbmZ1bmN0aW9uIHRyYWNlKCkge1xuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSBkaWUoXCJ0cmFjZSgpIGlzIG5vdCBhdmFpbGFibGUgaW4gcHJvZHVjdGlvbiBidWlsZHNcIik7XG4gIHZhciBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09IFwiYm9vbGVhblwiKSBlbnRlckJyZWFrUG9pbnQgPSBhcmdzLnBvcCgpO1xuICB2YXIgZGVyaXZhdGlvbiA9IGdldEF0b21Gcm9tQXJncyhhcmdzKTtcblxuICBpZiAoIWRlcml2YXRpb24pIHtcbiAgICByZXR1cm4gZGllKFwiJ3RyYWNlKGJyZWFrPyknIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIGEgdHJhY2tlZCBjb21wdXRlZCB2YWx1ZSBvciBhIFJlYWN0aW9uLiBDb25zaWRlciBwYXNzaW5nIGluIHRoZSBjb21wdXRlZCB2YWx1ZSBvciByZWFjdGlvbiBleHBsaWNpdGx5XCIpO1xuICB9XG5cbiAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nXyA9PT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyBkZXJpdmF0aW9uLm5hbWVfICsgXCInIHRyYWNpbmcgZW5hYmxlZFwiKTtcbiAgfVxuXG4gIGRlcml2YXRpb24uaXNUcmFjaW5nXyA9IGVudGVyQnJlYWtQb2ludCA/IFRyYWNlTW9kZS5CUkVBSyA6IFRyYWNlTW9kZS5MT0c7XG59XG5cbmZ1bmN0aW9uIGdldEF0b21Gcm9tQXJncyhhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGdldEF0b20oYXJnc1swXSk7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gZ2V0QXRvbShhcmdzWzBdLCBhcmdzWzFdKTtcbiAgfVxufVxuXG4vKipcclxuICogRHVyaW5nIGEgdHJhbnNhY3Rpb24gbm8gdmlld3MgYXJlIHVwZGF0ZWQgdW50aWwgdGhlIGVuZCBvZiB0aGUgdHJhbnNhY3Rpb24uXHJcbiAqIFRoZSB0cmFuc2FjdGlvbiB3aWxsIGJlIHJ1biBzeW5jaHJvbm91c2x5IG5vbmV0aGVsZXNzLlxyXG4gKlxyXG4gKiBAcGFyYW0gYWN0aW9uIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHNvbWUgcmVhY3RpdmUgc3RhdGVcclxuICogQHJldHVybnMgYW55IHZhbHVlIHRoYXQgd2FzIHJldHVybmVkIGJ5IHRoZSAnYWN0aW9uJyBwYXJhbWV0ZXIuXHJcbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2FjdGlvbihhY3Rpb24sIHRoaXNBcmcpIHtcbiAgaWYgKHRoaXNBcmcgPT09IHZvaWQgMCkge1xuICAgIHRoaXNBcmcgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGFydEJhdGNoKCk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gYWN0aW9uLmFwcGx5KHRoaXNBcmcpO1xuICB9IGZpbmFsbHkge1xuICAgIGVuZEJhdGNoKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hlbihwcmVkaWNhdGUsIGFyZzEsIGFyZzIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgfHwgYXJnMSAmJiB0eXBlb2YgYXJnMSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgYXJnMSk7XG4gIHJldHVybiBfd2hlbihwcmVkaWNhdGUsIGFyZzEsIGFyZzIgfHwge30pO1xufVxuXG5mdW5jdGlvbiBfd2hlbihwcmVkaWNhdGUsIGVmZmVjdCwgb3B0cykge1xuICB2YXIgdGltZW91dEhhbmRsZTtcblxuICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gXCJudW1iZXJcIikge1xuICAgIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZGlzcG9zZXJbJG1vYnhdLmlzRGlzcG9zZWRfKSB7XG4gICAgICAgIGRpc3Bvc2VyKCk7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihcIldIRU5fVElNRU9VVFwiKTtcbiAgICAgICAgaWYgKG9wdHMub25FcnJvcikgb3B0cy5vbkVycm9yKGVycm9yKTtlbHNlIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0sIG9wdHMudGltZW91dCk7XG4gIH1cblxuICBvcHRzLm5hbWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBvcHRzLm5hbWUgfHwgXCJXaGVuQFwiICsgZ2V0TmV4dElkKCkgOiBcIldoZW5cIjtcbiAgdmFyIGVmZmVjdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBvcHRzLm5hbWUgKyBcIi1lZmZlY3RcIiA6IFwiV2hlbi1lZmZlY3RcIiwgZWZmZWN0KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgdmFyIGRpc3Bvc2VyID0gYXV0b3J1bihmdW5jdGlvbiAocikge1xuICAgIC8vIHByZWRpY2F0ZSBzaG91bGQgbm90IGNoYW5nZSBzdGF0ZVxuICAgIHZhciBjb25kID0gYWxsb3dTdGF0ZUNoYW5nZXMoZmFsc2UsIHByZWRpY2F0ZSk7XG5cbiAgICBpZiAoY29uZCkge1xuICAgICAgci5kaXNwb3NlKCk7XG4gICAgICBpZiAodGltZW91dEhhbmRsZSkgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgZWZmZWN0QWN0aW9uKCk7XG4gICAgfVxuICB9LCBvcHRzKTtcbiAgcmV0dXJuIGRpc3Bvc2VyO1xufVxuXG5mdW5jdGlvbiB3aGVuUHJvbWlzZShwcmVkaWNhdGUsIG9wdHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBvcHRzICYmIG9wdHMub25FcnJvcikgcmV0dXJuIGRpZShcInRoZSBvcHRpb25zICdvbkVycm9yJyBhbmQgJ3Byb21pc2UnIGNhbm5vdCBiZSBjb21iaW5lZFwiKTtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHJlcyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZGlzcG9zZXIgPSBfd2hlbihwcmVkaWNhdGUsIHJlc29sdmUsIF9leHRlbmRzKHt9LCBvcHRzLCB7XG4gICAgICBvbkVycm9yOiByZWplY3RcbiAgICB9KSk7XG5cbiAgICBjYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICBkaXNwb3NlcigpO1xuICAgICAgcmVqZWN0KFwiV0hFTl9DQU5DRUxMRURcIik7XG4gICAgfTtcbiAgfSk7XG4gIHJlcy5jYW5jZWwgPSBjYW5jZWw7XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGdldEFkbSh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFskbW9ieF07XG59IC8vIE9wdGltaXphdGlvbjogd2UgZG9uJ3QgbmVlZCB0aGUgaW50ZXJtZWRpYXRlIG9iamVjdHMgYW5kIGNvdWxkIGhhdmUgYSBjb21wbGV0ZWx5IGN1c3RvbSBhZG1pbmlzdHJhdGlvbiBmb3IgRHluYW1pY09iamVjdHMsXG4vLyBhbmQgc2tpcCBlaXRoZXIgdGhlIGludGVybmFsIHZhbHVlcyBtYXAsIG9yIHRoZSBiYXNlIG9iamVjdCB3aXRoIGl0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycyFcblxuXG52YXIgb2JqZWN0UHJveHlUcmFwcyA9IHtcbiAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBuYW1lKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHdhcm5BYm91dFByb3h5UmVxdWlyZW1lbnQoXCJkZXRlY3QgbmV3IHByb3BlcnRpZXMgdXNpbmcgdGhlICdpbicgb3BlcmF0b3IuIFVzZSAnaGFzJyBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiKTtcbiAgICByZXR1cm4gZ2V0QWRtKHRhcmdldCkuaGFzXyhuYW1lKTtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XG4gICAgcmV0dXJuIGdldEFkbSh0YXJnZXQpLmdldF8obmFtZSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgX2dldEFkbSRzZXRfO1xuXG4gICAgaWYgKCFpc1N0cmluZ2lzaChuYW1lKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZ2V0QWRtKHRhcmdldCkudmFsdWVzXy5oYXMobmFtZSkpIHtcbiAgICAgIHdhcm5BYm91dFByb3h5UmVxdWlyZW1lbnQoXCJhZGQgYSBuZXcgb2JzZXJ2YWJsZSBwcm9wZXJ0eSB0aHJvdWdoIGRpcmVjdCBhc3NpZ25tZW50LiBVc2UgJ3NldCcgZnJvbSAnbW9ieCcgaW5zdGVhZC5cIik7XG4gICAgfSAvLyBudWxsIChpbnRlcmNlcHRlZCkgLT4gdHJ1ZSAoc3VjY2VzcylcblxuXG4gICAgcmV0dXJuIChfZ2V0QWRtJHNldF8gPSBnZXRBZG0odGFyZ2V0KS5zZXRfKG5hbWUsIHZhbHVlLCB0cnVlKSkgIT0gbnVsbCA/IF9nZXRBZG0kc2V0XyA6IHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUpIHtcbiAgICB2YXIgX2dldEFkbSRkZWxldGVfO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcImRlbGV0ZSBwcm9wZXJ0aWVzIGZyb20gYW4gb2JzZXJ2YWJsZSBvYmplY3QuIFVzZSAncmVtb3ZlJyBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzU3RyaW5naXNoKG5hbWUpKSByZXR1cm4gZmFsc2U7IC8vIG51bGwgKGludGVyY2VwdGVkKSAtPiB0cnVlIChzdWNjZXNzKVxuXG4gICAgcmV0dXJuIChfZ2V0QWRtJGRlbGV0ZV8gPSBnZXRBZG0odGFyZ2V0KS5kZWxldGVfKG5hbWUsIHRydWUpKSAhPSBudWxsID8gX2dldEFkbSRkZWxldGVfIDogdHJ1ZTtcbiAgfSxcbiAgZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBfZ2V0QWRtJGRlZmluZVByb3BlcnQ7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KFwiZGVmaW5lIHByb3BlcnR5IG9uIGFuIG9ic2VydmFibGUgb2JqZWN0LiBVc2UgJ2RlZmluZVByb3BlcnR5JyBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiKTtcbiAgICB9IC8vIG51bGwgKGludGVyY2VwdGVkKSAtPiB0cnVlIChzdWNjZXNzKVxuXG5cbiAgICByZXR1cm4gKF9nZXRBZG0kZGVmaW5lUHJvcGVydCA9IGdldEFkbSh0YXJnZXQpLmRlZmluZVByb3BlcnR5XyhuYW1lLCBkZXNjcmlwdG9yKSkgIT0gbnVsbCA/IF9nZXRBZG0kZGVmaW5lUHJvcGVydCA6IHRydWU7XG4gIH0sXG4gIG93bktleXM6IGZ1bmN0aW9uIG93bktleXModGFyZ2V0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHdhcm5BYm91dFByb3h5UmVxdWlyZW1lbnQoXCJpdGVyYXRlIGtleXMgdG8gZGV0ZWN0IGFkZGVkIC8gcmVtb3ZlZCBwcm9wZXJ0aWVzLiBVc2UgJ2tleXMnIGZyb20gJ21vYngnIGluc3RlYWQuXCIpO1xuICAgIHJldHVybiBnZXRBZG0odGFyZ2V0KS5vd25LZXlzXygpO1xuICB9LFxuICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KSB7XG4gICAgZGllKDEzKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGFzRHluYW1pY09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zKSB7XG4gIHZhciBfdGFyZ2V0JCRtb2J4LCBfdGFyZ2V0JCRtb2J4JHByb3h5XztcblxuICBhc3NlcnRQcm94aWVzKCk7XG4gIHRhcmdldCA9IGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICByZXR1cm4gKF90YXJnZXQkJG1vYngkcHJveHlfID0gKF90YXJnZXQkJG1vYnggPSB0YXJnZXRbJG1vYnhdKS5wcm94eV8pICE9IG51bGwgPyBfdGFyZ2V0JCRtb2J4JHByb3h5XyA6IF90YXJnZXQkJG1vYngucHJveHlfID0gbmV3IFByb3h5KHRhcmdldCwgb2JqZWN0UHJveHlUcmFwcyk7XG59XG5cbmZ1bmN0aW9uIGhhc0ludGVyY2VwdG9ycyhpbnRlcmNlcHRhYmxlKSB7XG4gIHJldHVybiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gIT09IHVuZGVmaW5lZCAmJiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18ubGVuZ3RoID4gMDtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVySW50ZXJjZXB0b3IoaW50ZXJjZXB0YWJsZSwgaGFuZGxlcikge1xuICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnNfIHx8IChpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gPSBbXSk7XG4gIGludGVyY2VwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlkeCA9IGludGVyY2VwdG9ycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmIChpZHggIT09IC0xKSBpbnRlcmNlcHRvcnMuc3BsaWNlKGlkeCwgMSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gaW50ZXJjZXB0Q2hhbmdlKGludGVyY2VwdGFibGUsIGNoYW5nZSkge1xuICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuXG4gIHRyeSB7XG4gICAgLy8gSW50ZXJjZXB0b3IgY2FuIG1vZGlmeSB0aGUgYXJyYXksIGNvcHkgaXQgdG8gYXZvaWQgY29uY3VycmVudCBtb2RpZmljYXRpb24sIHNlZSAjMTk1MFxuICAgIHZhciBpbnRlcmNlcHRvcnMgPSBbXS5jb25jYXQoaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnNfIHx8IFtdKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW50ZXJjZXB0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hhbmdlID0gaW50ZXJjZXB0b3JzW2ldKGNoYW5nZSk7XG4gICAgICBpZiAoY2hhbmdlICYmICFjaGFuZ2UudHlwZSkgZGllKDE0KTtcbiAgICAgIGlmICghY2hhbmdlKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlO1xuICB9IGZpbmFsbHkge1xuICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzTGlzdGVuZXJzKGxpc3RlbmFibGUpIHtcbiAgcmV0dXJuIGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzXyAhPT0gdW5kZWZpbmVkICYmIGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzXy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5hYmxlLCBoYW5kbGVyKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18gfHwgKGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzXyA9IFtdKTtcbiAgbGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaWR4ID0gbGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYgKGlkeCAhPT0gLTEpIGxpc3RlbmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMobGlzdGVuYWJsZSwgY2hhbmdlKSB7XG4gIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0KCk7XG4gIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc187XG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm47XG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxpc3RlbmVyc1tpXShjaGFuZ2UpO1xuICB9XG5cbiAgdW50cmFja2VkRW5kKHByZXZVKTtcbn1cblxuZnVuY3Rpb24gbWFrZU9ic2VydmFibGUodGFyZ2V0LCBhbm5vdGF0aW9ucywgb3B0aW9ucykge1xuICB2YXIgYWRtID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucylbJG1vYnhdO1xuICBzdGFydEJhdGNoKCk7XG5cbiAgdHJ5IHtcbiAgICB2YXIgX2Fubm90YXRpb25zO1xuXG4gICAgLy8gRGVmYXVsdCB0byBkZWNvcmF0b3JzXG4gICAgKF9hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zKSAhPSBudWxsID8gX2Fubm90YXRpb25zIDogYW5ub3RhdGlvbnMgPSBjb2xsZWN0U3RvcmVkQW5ub3RhdGlvbnModGFyZ2V0KTsgLy8gQW5ub3RhdGVcblxuICAgIG93bktleXMoYW5ub3RhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGFkbS5tYWtlXyhrZXksIGFubm90YXRpb25zW2tleV0pO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGVuZEJhdGNoKCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSAvLyBwcm90b1trZXlzU3ltYm9sXSA9IG5ldyBTZXQ8UHJvcGVydHlLZXk+KClcblxudmFyIGtleXNTeW1ib2wgPSAvKiNfX1BVUkVfXyovU3ltYm9sKFwibW9ieC1rZXlzXCIpO1xuZnVuY3Rpb24gbWFrZUF1dG9PYnNlcnZhYmxlKHRhcmdldCwgb3ZlcnJpZGVzLCBvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiAhaXNQbGFpbk9iamVjdChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpIGRpZShcIidtYWtlQXV0b09ic2VydmFibGUnIGNhbiBvbmx5IGJlIHVzZWQgZm9yIGNsYXNzZXMgdGhhdCBkb24ndCBoYXZlIGEgc3VwZXJjbGFzc1wiKTtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCkpIGRpZShcIm1ha2VBdXRvT2JzZXJ2YWJsZSBjYW4gb25seSBiZSB1c2VkIG9uIG9iamVjdHMgbm90IGFscmVhZHkgbWFkZSBvYnNlcnZhYmxlXCIpO1xuICB9IC8vIE9wdGltaXphdGlvbjogYXZvaWQgdmlzaXRpbmcgcHJvdG9zXG4gIC8vIEFzc3VtZXMgdGhhdCBhbm5vdGF0aW9uLm1ha2VfLy5leHRlbmRfIHdvcmtzIHRoZSBzYW1lIGZvciBwbGFpbiBvYmplY3RzXG5cblxuICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIGV4dGVuZE9ic2VydmFibGUodGFyZ2V0LCB0YXJnZXQsIG92ZXJyaWRlcywgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgYWRtID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucylbJG1vYnhdOyAvLyBPcHRpbWl6YXRpb246IGNhY2hlIGtleXMgb24gcHJvdG9cbiAgLy8gQXNzdW1lcyBtYWtlQXV0b09ic2VydmFibGUgY2FuIGJlIGNhbGxlZCBvbmx5IG9uY2UgcGVyIG9iamVjdCBhbmQgY2FuJ3QgYmUgdXNlZCBpbiBzdWJjbGFzc1xuXG4gIGlmICghdGFyZ2V0W2tleXNTeW1ib2xdKSB7XG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG4gICAgdmFyIGtleXMgPSBuZXcgU2V0KFtdLmNvbmNhdChvd25LZXlzKHRhcmdldCksIG93bktleXMocHJvdG8pKSk7XG4gICAga2V5c1tcImRlbGV0ZVwiXShcImNvbnN0cnVjdG9yXCIpO1xuICAgIGtleXNbXCJkZWxldGVcIl0oJG1vYngpO1xuICAgIGFkZEhpZGRlblByb3AocHJvdG8sIGtleXNTeW1ib2wsIGtleXMpO1xuICB9XG5cbiAgc3RhcnRCYXRjaCgpO1xuXG4gIHRyeSB7XG4gICAgdGFyZ2V0W2tleXNTeW1ib2xdLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGFkbS5tYWtlXyhrZXksIC8vIG11c3QgcGFzcyBcInVuZGVmaW5lZFwiIGZvciB7IGtleTogdW5kZWZpbmVkIH1cbiAgICAgICFvdmVycmlkZXMgPyB0cnVlIDoga2V5IGluIG92ZXJyaWRlcyA/IG92ZXJyaWRlc1trZXldIDogdHJ1ZSk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZW5kQmF0Y2goKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBTUExJQ0UgPSBcInNwbGljZVwiO1xudmFyIFVQREFURSA9IFwidXBkYXRlXCI7XG52YXIgTUFYX1NQTElDRV9TSVpFID0gMTAwMDA7IC8vIFNlZSBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvODU5XG5cbnZhciBhcnJheVRyYXBzID0ge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICB2YXIgYWRtID0gdGFyZ2V0WyRtb2J4XTtcbiAgICBpZiAobmFtZSA9PT0gJG1vYngpIHJldHVybiBhZG07XG4gICAgaWYgKG5hbWUgPT09IFwibGVuZ3RoXCIpIHJldHVybiBhZG0uZ2V0QXJyYXlMZW5ndGhfKCk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgJiYgIWlzTmFOKG5hbWUpKSB7XG4gICAgICByZXR1cm4gYWRtLmdldF8ocGFyc2VJbnQobmFtZSkpO1xuICAgIH1cblxuICAgIGlmIChoYXNQcm9wKGFycmF5RXh0ZW5zaW9ucywgbmFtZSkpIHtcbiAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBhZG0gPSB0YXJnZXRbJG1vYnhdO1xuXG4gICAgaWYgKG5hbWUgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgIGFkbS5zZXRBcnJheUxlbmd0aF8odmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIiB8fCBpc05hTihuYW1lKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG51bWVyaWMgc3RyaW5nXG4gICAgICBhZG0uc2V0XyhwYXJzZUludChuYW1lKSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoKSB7XG4gICAgZGllKDE1KTtcbiAgfVxufTtcbnZhciBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIHRoaXMgaXMgdGhlIHByb3AgdGhhdCBnZXRzIHByb3hpZWQsIHNvIGNhbid0IHJlcGxhY2UgaXQhXG4gIGZ1bmN0aW9uIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZF8sIGxlZ2FjeU1vZGVfKSB7XG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgICAgbmFtZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVBcnJheVwiO1xuICAgIH1cblxuICAgIHRoaXMub3duZWRfID0gdm9pZCAwO1xuICAgIHRoaXMubGVnYWN5TW9kZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5hdG9tXyA9IHZvaWQgMDtcbiAgICB0aGlzLnZhbHVlc18gPSBbXTtcbiAgICB0aGlzLmludGVyY2VwdG9yc18gPSB2b2lkIDA7XG4gICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNfID0gdm9pZCAwO1xuICAgIHRoaXMuZW5oYW5jZXJfID0gdm9pZCAwO1xuICAgIHRoaXMuZGVoYW5jZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5wcm94eV8gPSB2b2lkIDA7XG4gICAgdGhpcy5sYXN0S25vd25MZW5ndGhfID0gMDtcbiAgICB0aGlzLm93bmVkXyA9IG93bmVkXztcbiAgICB0aGlzLmxlZ2FjeU1vZGVfID0gbGVnYWN5TW9kZV87XG4gICAgdGhpcy5hdG9tXyA9IG5ldyBBdG9tKG5hbWUpO1xuXG4gICAgdGhpcy5lbmhhbmNlcl8gPSBmdW5jdGlvbiAobmV3Viwgb2xkVikge1xuICAgICAgcmV0dXJuIGVuaGFuY2VyKG5ld1YsIG9sZFYsIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IG5hbWUgKyBcIlsuLl1cIiA6IFwiT2JzZXJ2YWJsZUFycmF5Wy4uXVwiKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVoYW5jZVZhbHVlXyA9IGZ1bmN0aW9uIGRlaGFuY2VWYWx1ZV8odmFsdWUpIHtcbiAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5kZWhhbmNlVmFsdWVzXyA9IGZ1bmN0aW9uIGRlaGFuY2VWYWx1ZXNfKHZhbHVlcykge1xuICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHJldHVybiB2YWx1ZXMubWFwKHRoaXMuZGVoYW5jZXIpO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgX3Byb3RvLmludGVyY2VwdF8gPSBmdW5jdGlvbiBpbnRlcmNlcHRfKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgfTtcblxuICBfcHJvdG8ub2JzZXJ2ZV8gPSBmdW5jdGlvbiBvYnNlcnZlXyhsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgaWYgKGZpcmVJbW1lZGlhdGVseSA9PT0gdm9pZCAwKSB7XG4gICAgICBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcImFycmF5XCIsXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8sXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5hdG9tXy5uYW1lXyxcbiAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGFkZGVkOiB0aGlzLnZhbHVlc18uc2xpY2UoKSxcbiAgICAgICAgYWRkZWRDb3VudDogdGhpcy52YWx1ZXNfLmxlbmd0aCxcbiAgICAgICAgcmVtb3ZlZDogW10sXG4gICAgICAgIHJlbW92ZWRDb3VudDogMFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5nZXRBcnJheUxlbmd0aF8gPSBmdW5jdGlvbiBnZXRBcnJheUxlbmd0aF8oKSB7XG4gICAgdGhpcy5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiB0aGlzLnZhbHVlc18ubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5zZXRBcnJheUxlbmd0aF8gPSBmdW5jdGlvbiBzZXRBcnJheUxlbmd0aF8obmV3TGVuZ3RoKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdMZW5ndGggIT09IFwibnVtYmVyXCIgfHwgbmV3TGVuZ3RoIDwgMCkgZGllKFwiT3V0IG9mIHJhbmdlOiBcIiArIG5ld0xlbmd0aCk7XG4gICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlc18ubGVuZ3RoO1xuICAgIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpIHJldHVybjtlbHNlIGlmIChuZXdMZW5ndGggPiBjdXJyZW50TGVuZ3RoKSB7XG4gICAgICB2YXIgbmV3SXRlbXMgPSBuZXcgQXJyYXkobmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkO1xuICAgICAgfSAvLyBObyBBcnJheS5maWxsIGV2ZXJ5d2hlcmUuLi5cblxuXG4gICAgICB0aGlzLnNwbGljZVdpdGhBcnJheV8oY3VycmVudExlbmd0aCwgMCwgbmV3SXRlbXMpO1xuICAgIH0gZWxzZSB0aGlzLnNwbGljZVdpdGhBcnJheV8obmV3TGVuZ3RoLCBjdXJyZW50TGVuZ3RoIC0gbmV3TGVuZ3RoKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlQXJyYXlMZW5ndGhfID0gZnVuY3Rpb24gdXBkYXRlQXJyYXlMZW5ndGhfKG9sZExlbmd0aCwgZGVsdGEpIHtcbiAgICBpZiAob2xkTGVuZ3RoICE9PSB0aGlzLmxhc3RLbm93bkxlbmd0aF8pIGRpZSgxNik7XG4gICAgdGhpcy5sYXN0S25vd25MZW5ndGhfICs9IGRlbHRhO1xuICAgIGlmICh0aGlzLmxlZ2FjeU1vZGVfICYmIGRlbHRhID4gMCkgcmVzZXJ2ZUFycmF5QnVmZmVyKG9sZExlbmd0aCArIGRlbHRhICsgMSk7XG4gIH07XG5cbiAgX3Byb3RvLnNwbGljZVdpdGhBcnJheV8gPSBmdW5jdGlvbiBzcGxpY2VXaXRoQXJyYXlfKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tXyk7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMudmFsdWVzXy5sZW5ndGg7XG4gICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIGluZGV4ID0gMDtlbHNlIGlmIChpbmRleCA+IGxlbmd0aCkgaW5kZXggPSBsZW5ndGg7ZWxzZSBpZiAoaW5kZXggPCAwKSBpbmRleCA9IE1hdGgubWF4KDAsIGxlbmd0aCArIGluZGV4KTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkgZGVsZXRlQ291bnQgPSBsZW5ndGggLSBpbmRleDtlbHNlIGlmIChkZWxldGVDb3VudCA9PT0gdW5kZWZpbmVkIHx8IGRlbGV0ZUNvdW50ID09PSBudWxsKSBkZWxldGVDb3VudCA9IDA7ZWxzZSBkZWxldGVDb3VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGRlbGV0ZUNvdW50LCBsZW5ndGggLSBpbmRleCkpO1xuICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKSBuZXdJdGVtcyA9IEVNUFRZX0FSUkFZO1xuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8sXG4gICAgICAgIHR5cGU6IFNQTElDRSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICByZW1vdmVkQ291bnQ6IGRlbGV0ZUNvdW50LFxuICAgICAgICBhZGRlZDogbmV3SXRlbXNcbiAgICAgIH0pO1xuICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiBFTVBUWV9BUlJBWTtcbiAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudDtcbiAgICAgIG5ld0l0ZW1zID0gY2hhbmdlLmFkZGVkO1xuICAgIH1cblxuICAgIG5ld0l0ZW1zID0gbmV3SXRlbXMubGVuZ3RoID09PSAwID8gbmV3SXRlbXMgOiBuZXdJdGVtcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBfdGhpcy5lbmhhbmNlcl8odiwgdW5kZWZpbmVkKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmxlZ2FjeU1vZGVfIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgdmFyIGxlbmd0aERlbHRhID0gbmV3SXRlbXMubGVuZ3RoIC0gZGVsZXRlQ291bnQ7XG4gICAgICB0aGlzLnVwZGF0ZUFycmF5TGVuZ3RoXyhsZW5ndGgsIGxlbmd0aERlbHRhKTsgLy8gY2hlY2tzIGlmIGludGVybmFsIGFycmF5IHdhc24ndCBtb2RpZmllZFxuICAgIH1cblxuICAgIHZhciByZXMgPSB0aGlzLnNwbGljZUl0ZW1zSW50b1ZhbHVlc18oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gICAgaWYgKGRlbGV0ZUNvdW50ICE9PSAwIHx8IG5ld0l0ZW1zLmxlbmd0aCAhPT0gMCkgdGhpcy5ub3RpZnlBcnJheVNwbGljZV8oaW5kZXgsIG5ld0l0ZW1zLCByZXMpO1xuICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZXNfKHJlcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNwbGljZUl0ZW1zSW50b1ZhbHVlc18gPSBmdW5jdGlvbiBzcGxpY2VJdGVtc0ludG9WYWx1ZXNfKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICBpZiAobmV3SXRlbXMubGVuZ3RoIDwgTUFYX1NQTElDRV9TSVpFKSB7XG4gICAgICB2YXIgX3RoaXMkdmFsdWVzXztcblxuICAgICAgcmV0dXJuIChfdGhpcyR2YWx1ZXNfID0gdGhpcy52YWx1ZXNfKS5zcGxpY2UuYXBwbHkoX3RoaXMkdmFsdWVzXywgW2luZGV4LCBkZWxldGVDb3VudF0uY29uY2F0KG5ld0l0ZW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXMgPSB0aGlzLnZhbHVlc18uc2xpY2UoaW5kZXgsIGluZGV4ICsgZGVsZXRlQ291bnQpO1xuICAgICAgdmFyIG9sZEl0ZW1zID0gdGhpcy52YWx1ZXNfLnNsaWNlKGluZGV4ICsgZGVsZXRlQ291bnQpO1xuICAgICAgdGhpcy52YWx1ZXNfLmxlbmd0aCA9IGluZGV4ICsgbmV3SXRlbXMubGVuZ3RoIC0gZGVsZXRlQ291bnQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy52YWx1ZXNfW2luZGV4ICsgaV0gPSBuZXdJdGVtc1tpXTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG9sZEl0ZW1zLmxlbmd0aDsgX2krKykge1xuICAgICAgICB0aGlzLnZhbHVlc19baW5kZXggKyBuZXdJdGVtcy5sZW5ndGggKyBfaV0gPSBvbGRJdGVtc1tfaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ub3RpZnlBcnJheUNoaWxkVXBkYXRlXyA9IGZ1bmN0aW9uIG5vdGlmeUFycmF5Q2hpbGRVcGRhdGVfKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWRfICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICBvYnNlcnZhYmxlS2luZDogXCJhcnJheVwiLFxuICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5hdG9tXy5uYW1lXyxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgIH0gOiBudWxsOyAvLyBUaGUgcmVhc29uIHdoeSB0aGlzIGlzIG9uIHJpZ2h0IGhhbmQgc2lkZSBoZXJlIChhbmQgbm90IGFib3ZlKSwgaXMgdGhpcyB3YXkgdGhlIHVnbGlmaWVyIHdpbGwgZHJvcCBpdCwgYnV0IGl0IHdvbid0XG4gICAgLy8gY2F1c2UgYW55IHJ1bnRpbWUgb3ZlcmhlYWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSB3aXRob3V0IE5PREVfRU5WIHNldCwgdW5sZXNzIHNweWluZyBpcyBlbmFibGVkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICB0aGlzLmF0b21fLnJlcG9ydENoYW5nZWQoKTtcbiAgICBpZiAobm90aWZ5KSBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0RW5kKCk7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeUFycmF5U3BsaWNlXyA9IGZ1bmN0aW9uIG5vdGlmeUFycmF5U3BsaWNlXyhpbmRleCwgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWRfICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICBvYnNlcnZhYmxlS2luZDogXCJhcnJheVwiLFxuICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5hdG9tXy5uYW1lXyxcbiAgICAgIHR5cGU6IFNQTElDRSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIHJlbW92ZWQ6IHJlbW92ZWQsXG4gICAgICBhZGRlZDogYWRkZWQsXG4gICAgICByZW1vdmVkQ291bnQ6IHJlbW92ZWQubGVuZ3RoLFxuICAgICAgYWRkZWRDb3VudDogYWRkZWQubGVuZ3RoXG4gICAgfSA6IG51bGw7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgdGhpcy5hdG9tXy5yZXBvcnRDaGFuZ2VkKCk7IC8vIGNvbmZvcm06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L29ic2VydmVcblxuICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0XyA9IGZ1bmN0aW9uIGdldF8oaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCB0aGlzLnZhbHVlc18ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWVfKHRoaXMudmFsdWVzX1tpbmRleF0pO1xuICAgIH1cblxuICAgIGNvbnNvbGUud2Fybihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlttb2J4XSBPdXQgb2YgYm91bmRzIHJlYWQ6IFwiICsgaW5kZXggOiBcIlttb2J4LmFycmF5XSBBdHRlbXB0IHRvIHJlYWQgYW4gYXJyYXkgaW5kZXggKFwiICsgaW5kZXggKyBcIikgdGhhdCBpcyBvdXQgb2YgYm91bmRzIChcIiArIHRoaXMudmFsdWVzXy5sZW5ndGggKyBcIikuIFBsZWFzZSBjaGVjayBsZW5ndGggZmlyc3QuIE91dCBvZiBib3VuZCBpbmRpY2VzIHdpbGwgbm90IGJlIHRyYWNrZWQgYnkgTW9iWFwiKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0XyA9IGZ1bmN0aW9uIHNldF8oaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzXztcblxuICAgIGlmIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIC8vIHVwZGF0ZSBhdCBpbmRleCBpbiByYW5nZVxuICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tXyk7XG4gICAgICB2YXIgb2xkVmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xuXG4gICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghY2hhbmdlKSByZXR1cm47XG4gICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgfVxuXG4gICAgICBuZXdWYWx1ZSA9IHRoaXMuZW5oYW5jZXJfKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB2YXIgY2hhbmdlZCA9IG5ld1ZhbHVlICE9PSBvbGRWYWx1ZTtcblxuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGVfKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIC8vIGFkZCBhIG5ldyBpdGVtXG4gICAgICB0aGlzLnNwbGljZVdpdGhBcnJheV8oaW5kZXgsIDAsIFtuZXdWYWx1ZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdXQgb2YgYm91bmRzXG4gICAgICBkaWUoMTcsIGluZGV4LCB2YWx1ZXMubGVuZ3RoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uO1xufSgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lLCBvd25lZCkge1xuICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgbmFtZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVBcnJheVwiO1xuICB9XG5cbiAgaWYgKG93bmVkID09PSB2b2lkIDApIHtcbiAgICBvd25lZCA9IGZhbHNlO1xuICB9XG5cbiAgYXNzZXJ0UHJveGllcygpO1xuICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCwgZmFsc2UpO1xuICBhZGRIaWRkZW5GaW5hbFByb3AoYWRtLnZhbHVlc18sICRtb2J4LCBhZG0pO1xuICB2YXIgcHJveHkgPSBuZXcgUHJveHkoYWRtLnZhbHVlc18sIGFycmF5VHJhcHMpO1xuICBhZG0ucHJveHlfID0gcHJveHk7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQodHJ1ZSk7XG4gICAgYWRtLnNwbGljZVdpdGhBcnJheV8oMCwgMCwgaW5pdGlhbFZhbHVlcyk7XG4gICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldik7XG4gIH1cblxuICByZXR1cm4gcHJveHk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG52YXIgYXJyYXlFeHRlbnNpb25zID0ge1xuICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKDApO1xuICB9LFxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKG5ld0l0ZW1zKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5XygwLCBhZG0udmFsdWVzXy5sZW5ndGgsIG5ld0l0ZW1zKTtcbiAgfSxcbiAgLy8gVXNlZCBieSBKU09OLnN0cmluZ2lmeVxuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5zbGljZSgpO1xuICB9LFxuXG4gIC8qXHJcbiAgICogZnVuY3Rpb25zIHRoYXQgZG8gYWx0ZXIgdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIChiYXNlZCBvbiBsaWIuZXM2LmQudHMpXHJcbiAgICogc2luY2UgdGhlc2UgZnVuY3Rpb25zIGFsdGVyIHRoZSBpbm5lciBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMuXHJcbiAgICogQmVjYXVzZSB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMsIHRoZXkgc2hvdWxkIG5vdCBiZSB1c2VkIGluIGNvbXB1dGVkIGZ1bmN0aW9uLFxyXG4gICAqIGFuZCBmb3IgdGhhdCByZWFzb24gdGhlIGRvIG5vdCBjYWxsIGRlcGVuZGVuY3lTdGF0ZS5ub3RpZnlPYnNlcnZlZFxyXG4gICAqL1xuICBzcGxpY2U6IGZ1bmN0aW9uIHNwbGljZShpbmRleCwgZGVsZXRlQ291bnQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbmV3SXRlbXMgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgbmV3SXRlbXNbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcblxuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gW107XG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4KTtcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheV8oaW5kZXgsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheV8oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gIH0sXG4gIHNwbGljZVdpdGhBcnJheTogZnVuY3Rpb24gc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICByZXR1cm4gdGhpc1skbW9ieF0uc3BsaWNlV2l0aEFycmF5XyhpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgfSxcbiAgcHVzaDogZnVuY3Rpb24gcHVzaCgpIHtcbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGl0ZW1zID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBpdGVtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGFkbS52YWx1ZXNfLmxlbmd0aCwgMCwgaXRlbXMpO1xuICAgIHJldHVybiBhZG0udmFsdWVzXy5sZW5ndGg7XG4gIH0sXG4gIHBvcDogZnVuY3Rpb24gcG9wKCkge1xuICAgIHJldHVybiB0aGlzLnNwbGljZShNYXRoLm1heCh0aGlzWyRtb2J4XS52YWx1ZXNfLmxlbmd0aCAtIDEsIDApLCAxKVswXTtcbiAgfSxcbiAgc2hpZnQ6IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgIHJldHVybiB0aGlzLnNwbGljZSgwLCAxKVswXTtcbiAgfSxcbiAgdW5zaGlmdDogZnVuY3Rpb24gdW5zaGlmdCgpIHtcbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG5cbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGl0ZW1zID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBpdGVtc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIGFkbS5zcGxpY2VXaXRoQXJyYXlfKDAsIDAsIGl0ZW1zKTtcbiAgICByZXR1cm4gYWRtLnZhbHVlc18ubGVuZ3RoO1xuICB9LFxuICByZXZlcnNlOiBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIC8vIHJldmVyc2UgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxuICAgIC8vIHdoaWNoIG1ha2VzIGl0IGJvdGggYSAnZGVyaXZhdGlvbicgYW5kIGEgJ211dGF0aW9uJy5cbiAgICBpZiAoZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKSB7XG4gICAgICBkaWUoMzcsIFwicmV2ZXJzZVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlcGxhY2UodGhpcy5zbGljZSgpLnJldmVyc2UoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoKSB7XG4gICAgLy8gc29ydCBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XG4gICAgLy8gd2hpY2ggZ29lcyBhZ2FpbnN0IGFsbCBnb29kIHByYWN0aWNlcy4gTGV0J3Mgbm90IGNoYW5nZSB0aGUgYXJyYXkgaW4gcGxhY2UhXG4gICAgaWYgKGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgZGllKDM3LCBcInNvcnRcIik7XG4gICAgfVxuXG4gICAgdmFyIGNvcHkgPSB0aGlzLnNsaWNlKCk7XG4gICAgY29weS5zb3J0LmFwcGx5KGNvcHksIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5yZXBsYWNlKGNvcHkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSh2YWx1ZSkge1xuICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICB2YXIgaWR4ID0gYWRtLmRlaGFuY2VWYWx1ZXNfKGFkbS52YWx1ZXNfKS5pbmRleE9mKHZhbHVlKTtcblxuICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgdGhpcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbi8qKlxyXG4gKiBXcmFwIGZ1bmN0aW9uIGZyb20gcHJvdG90eXBlXHJcbiAqIFdpdGhvdXQgdGhpcywgZXZlcnl0aGluZyB3b3JrcyBhcyB3ZWxsLCBidXQgdGhpcyB3b3Jrc1xyXG4gKiBmYXN0ZXIgYXMgZXZlcnl0aGluZyB3b3JrcyBvbiB1bnByb3hpZWQgdmFsdWVzXHJcbiAqL1xuXG5hZGRBcnJheUV4dGVuc2lvbihcImNvbmNhdFwiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZmxhdFwiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiaW5jbHVkZXNcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImluZGV4T2ZcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImpvaW5cIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImxhc3RJbmRleE9mXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJzbGljZVwiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwidG9TdHJpbmdcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcInRvTG9jYWxlU3RyaW5nXCIsIHNpbXBsZUZ1bmMpOyAvLyBtYXBcblxuYWRkQXJyYXlFeHRlbnNpb24oXCJldmVyeVwiLCBtYXBMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImZpbHRlclwiLCBtYXBMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImZpbmRcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJmaW5kSW5kZXhcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJmbGF0TWFwXCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZm9yRWFjaFwiLCBtYXBMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcIm1hcFwiLCBtYXBMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcInNvbWVcIiwgbWFwTGlrZUZ1bmMpOyAvLyByZWR1Y2VcblxuYWRkQXJyYXlFeHRlbnNpb24oXCJyZWR1Y2VcIiwgcmVkdWNlTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJyZWR1Y2VSaWdodFwiLCByZWR1Y2VMaWtlRnVuYyk7XG5cbmZ1bmN0aW9uIGFkZEFycmF5RXh0ZW5zaW9uKGZ1bmNOYW1lLCBmdW5jRmFjdG9yeSkge1xuICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZVtmdW5jTmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGFycmF5RXh0ZW5zaW9uc1tmdW5jTmFtZV0gPSBmdW5jRmFjdG9yeShmdW5jTmFtZSk7XG4gIH1cbn0gLy8gUmVwb3J0IGFuZCBkZWxlZ2F0ZSB0byBkZWhhbmNlZCBhcnJheVxuXG5cbmZ1bmN0aW9uIHNpbXBsZUZ1bmMoZnVuY05hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgYWRtLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgdmFyIGRlaGFuY2VkVmFsdWVzID0gYWRtLmRlaGFuY2VWYWx1ZXNfKGFkbS52YWx1ZXNfKTtcbiAgICByZXR1cm4gZGVoYW5jZWRWYWx1ZXNbZnVuY05hbWVdLmFwcGx5KGRlaGFuY2VkVmFsdWVzLCBhcmd1bWVudHMpO1xuICB9O1xufSAvLyBNYWtlIHN1cmUgY2FsbGJhY2tzIHJlY2lldmUgY29ycmVjdCBhcnJheSBhcmcgIzIzMjZcblxuXG5mdW5jdGlvbiBtYXBMaWtlRnVuYyhmdW5jTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgYWRtLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgdmFyIGRlaGFuY2VkVmFsdWVzID0gYWRtLmRlaGFuY2VWYWx1ZXNfKGFkbS52YWx1ZXNfKTtcbiAgICByZXR1cm4gZGVoYW5jZWRWYWx1ZXNbZnVuY05hbWVdKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgZWxlbWVudCwgaW5kZXgsIF90aGlzMik7XG4gICAgfSk7XG4gIH07XG59IC8vIE1ha2Ugc3VyZSBjYWxsYmFja3MgcmVjaWV2ZSBjb3JyZWN0IGFycmF5IGFyZyAjMjMyNlxuXG5cbmZ1bmN0aW9uIHJlZHVjZUxpa2VGdW5jKGZ1bmNOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgYWRtLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgdmFyIGRlaGFuY2VkVmFsdWVzID0gYWRtLmRlaGFuY2VWYWx1ZXNfKGFkbS52YWx1ZXNfKTsgLy8gIzI0MzIgLSByZWR1Y2UgYmVoYXZpb3IgZGVwZW5kcyBvbiBhcmd1bWVudHMubGVuZ3RoXG5cbiAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF07XG5cbiAgICBhcmd1bWVudHNbMF0gPSBmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlLCBpbmRleCwgX3RoaXMzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlaGFuY2VkVmFsdWVzW2Z1bmNOYW1lXS5hcHBseShkZWhhbmNlZFZhbHVlcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxudmFyIGlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uXCIsIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKTtcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSB7XG4gIHJldHVybiBpc09iamVjdCh0aGluZykgJiYgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbih0aGluZ1skbW9ieF0pO1xufVxuXG52YXIgX1N5bWJvbCRpdGVyYXRvciwgX1N5bWJvbCR0b1N0cmluZ1RhZztcbnZhciBPYnNlcnZhYmxlTWFwTWFya2VyID0ge307XG52YXIgQUREID0gXCJhZGRcIjtcbnZhciBERUxFVEUgPSBcImRlbGV0ZVwiOyAvLyBqdXN0IGV4dGVuZCBNYXA/IFNlZSBhbHNvIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL25lc3RoYXJ1cy8xM2I0ZDc0ZjJlZjRhMmY0MzU3ZGJkM2ZjMjNjMWU1NFxuLy8gQnV0OiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzE1NTZcblxuX1N5bWJvbCRpdGVyYXRvciA9IFN5bWJvbC5pdGVyYXRvcjtcbl9TeW1ib2wkdG9TdHJpbmdUYWcgPSBTeW1ib2wudG9TdHJpbmdUYWc7XG52YXIgT2JzZXJ2YWJsZU1hcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIGhhc01hcCwgbm90IGhhc2hNYXAgPi0pLlxuICBmdW5jdGlvbiBPYnNlcnZhYmxlTWFwKGluaXRpYWxEYXRhLCBlbmhhbmNlcl8sIG5hbWVfKSB7XG4gICAgaWYgKGVuaGFuY2VyXyA9PT0gdm9pZCAwKSB7XG4gICAgICBlbmhhbmNlcl8gPSBkZWVwRW5oYW5jZXI7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVfID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWVfID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJPYnNlcnZhYmxlTWFwQFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVNYXBcIjtcbiAgICB9XG5cbiAgICB0aGlzLmVuaGFuY2VyXyA9IHZvaWQgMDtcbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXNbJG1vYnhdID0gT2JzZXJ2YWJsZU1hcE1hcmtlcjtcbiAgICB0aGlzLmRhdGFfID0gdm9pZCAwO1xuICAgIHRoaXMuaGFzTWFwXyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleXNBdG9tXyA9IHZvaWQgMDtcbiAgICB0aGlzLmludGVyY2VwdG9yc18gPSB2b2lkIDA7XG4gICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNfID0gdm9pZCAwO1xuICAgIHRoaXMuZGVoYW5jZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5lbmhhbmNlcl8gPSBlbmhhbmNlcl87XG4gICAgdGhpcy5uYW1lXyA9IG5hbWVfO1xuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKE1hcCkpIHtcbiAgICAgIGRpZSgxOCk7XG4gICAgfVxuXG4gICAgdGhpcy5rZXlzQXRvbV8gPSBjcmVhdGVBdG9tKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi5rZXlzKClcIiA6IFwiT2JzZXJ2YWJsZU1hcC5rZXlzKClcIik7XG4gICAgdGhpcy5kYXRhXyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmhhc01hcF8gPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5tZXJnZShpbml0aWFsRGF0YSk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhc18gPSBmdW5jdGlvbiBoYXNfKGtleSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFfLmhhcyhrZXkpO1xuICB9O1xuXG4gIF9wcm90by5oYXMgPSBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICghZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKSByZXR1cm4gdGhpcy5oYXNfKGtleSk7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5oYXNNYXBfLmdldChrZXkpO1xuXG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgdmFyIG5ld0VudHJ5ID0gZW50cnkgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKHRoaXMuaGFzXyhrZXkpLCByZWZlcmVuY2VFbmhhbmNlciwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdGhpcy5uYW1lXyArIFwiLlwiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIj9cIiA6IFwiT2JzZXJ2YWJsZU1hcC5rZXk/XCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuaGFzTWFwXy5zZXQoa2V5LCBuZXdFbnRyeSk7XG4gICAgICBvbkJlY29tZVVub2JzZXJ2ZWQobmV3RW50cnksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhhc01hcF9bXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlbnRyeS5nZXQoKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICB2YXIgaGFzS2V5ID0gdGhpcy5oYXNfKGtleSk7XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgdHlwZTogaGFzS2V5ID8gVVBEQVRFIDogQURELFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG5ld1ZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbmFtZToga2V5XG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm4gdGhpcztcbiAgICAgIHZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgIH1cblxuICAgIGlmIChoYXNLZXkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVfKGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFZhbHVlXyhrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG9bXCJkZWxldGVcIl0gPSBmdW5jdGlvbiBfZGVsZXRlKGtleSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5rZXlzQXRvbV8pO1xuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBuYW1lOiBrZXlcbiAgICAgIH0pO1xuICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNfKGtleSkpIHtcbiAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG5cbiAgICAgIHZhciBfY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwibWFwXCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgdHlwZTogREVMRVRFLFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG9sZFZhbHVlOiB0aGlzLmRhdGFfLmdldChrZXkpLnZhbHVlXyxcbiAgICAgICAgbmFtZToga2V5XG4gICAgICB9IDogbnVsbDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KF9jaGFuZ2UpO1xuICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKTtcblxuICAgICAgICBfdGhpczIudXBkYXRlSGFzTWFwRW50cnlfKGtleSwgZmFsc2UpO1xuXG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gX3RoaXMyLmRhdGFfLmdldChrZXkpO1xuXG4gICAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWVfKHVuZGVmaW5lZCk7XG5cbiAgICAgICAgX3RoaXMyLmRhdGFfW1wiZGVsZXRlXCJdKGtleSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBfY2hhbmdlKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlSGFzTWFwRW50cnlfID0gZnVuY3Rpb24gdXBkYXRlSGFzTWFwRW50cnlfKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSB0aGlzLmhhc01hcF8uZ2V0KGtleSk7XG5cbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnNldE5ld1ZhbHVlXyh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by51cGRhdGVWYWx1ZV8gPSBmdW5jdGlvbiB1cGRhdGVWYWx1ZV8oa2V5LCBuZXdWYWx1ZSkge1xuICAgIHZhciBvYnNlcnZhYmxlID0gdGhpcy5kYXRhXy5nZXQoa2V5KTtcbiAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUucHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSk7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCkge1xuICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJtYXBcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgb2xkVmFsdWU6IG9ic2VydmFibGUudmFsdWVfLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSA6IG51bGw7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWVfKG5ld1ZhbHVlKTtcbiAgICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkVmFsdWVfID0gZnVuY3Rpb24gYWRkVmFsdWVfKGtleSwgbmV3VmFsdWUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMua2V5c0F0b21fKTtcbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUobmV3VmFsdWUsIF90aGlzMy5lbmhhbmNlcl8sIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF90aGlzMy5uYW1lXyArIFwiLlwiICsgc3RyaW5naWZ5S2V5KGtleSkgOiBcIk9ic2VydmFibGVNYXAua2V5XCIsIGZhbHNlKTtcblxuICAgICAgX3RoaXMzLmRhdGFfLnNldChrZXksIG9ic2VydmFibGUpO1xuXG4gICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUudmFsdWVfOyAvLyB2YWx1ZSBtaWdodCBoYXZlIGJlZW4gY2hhbmdlZFxuXG4gICAgICBfdGhpczMudXBkYXRlSGFzTWFwRW50cnlfKGtleSwgdHJ1ZSk7XG5cbiAgICAgIF90aGlzMy5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuICAgIH0pO1xuICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwibWFwXCIsXG4gICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICB0eXBlOiBBREQsXG4gICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICBuYW1lOiBrZXksXG4gICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICB9IDogbnVsbDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICBpZiAobm90aWZ5KSBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0RW5kKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlXyh0aGlzLmRhdGFfLmdldChrZXkpLmdldCgpKTtcbiAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWVfKHVuZGVmaW5lZCk7XG4gIH07XG5cbiAgX3Byb3RvLmRlaGFuY2VWYWx1ZV8gPSBmdW5jdGlvbiBkZWhhbmNlVmFsdWVfKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8ua2V5cyA9IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhXy5rZXlzKCk7XG4gIH07XG5cbiAgX3Byb3RvLnZhbHVlcyA9IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGtleXMgPSB0aGlzLmtleXMoKTtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciBfa2V5cyRuZXh0ID0ga2V5cy5uZXh0KCksXG4gICAgICAgICAgICBkb25lID0gX2tleXMkbmV4dC5kb25lLFxuICAgICAgICAgICAgdmFsdWUgPSBfa2V5cyRuZXh0LnZhbHVlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogZG9uZSxcbiAgICAgICAgICB2YWx1ZTogZG9uZSA/IHVuZGVmaW5lZCA6IHNlbGYuZ2V0KHZhbHVlKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5lbnRyaWVzID0gZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGtleXMgPSB0aGlzLmtleXMoKTtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciBfa2V5cyRuZXh0MiA9IGtleXMubmV4dCgpLFxuICAgICAgICAgICAgZG9uZSA9IF9rZXlzJG5leHQyLmRvbmUsXG4gICAgICAgICAgICB2YWx1ZSA9IF9rZXlzJG5leHQyLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogZG9uZSxcbiAgICAgICAgICB2YWx1ZTogZG9uZSA/IHVuZGVmaW5lZCA6IFt2YWx1ZSwgc2VsZi5nZXQodmFsdWUpXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90b1tfU3ltYm9sJGl0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSh0aGlzKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBfc3RlcCR2YWx1ZSA9IF9zdGVwLnZhbHVlLFxuICAgICAgICAgIGtleSA9IF9zdGVwJHZhbHVlWzBdLFxuICAgICAgICAgIHZhbHVlID0gX3N0ZXAkdmFsdWVbMV07XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBrZXksIHRoaXMpO1xuICAgIH1cbiAgfVxuICAvKiogTWVyZ2UgYW5vdGhlciBvYmplY3QgaW50byB0aGlzIG9iamVjdCwgcmV0dXJucyB0aGlzLiAqL1xuICA7XG5cbiAgX3Byb3RvLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2Uob3RoZXIpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIGlmIChpc09ic2VydmFibGVNYXAob3RoZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBNYXAob3RoZXIpO1xuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KG90aGVyKSkgZ2V0UGxhaW5PYmplY3RLZXlzKG90aGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5zZXQoa2V5LCBvdGhlcltrZXldKTtcbiAgICAgIH0pO2Vsc2UgaWYgKEFycmF5LmlzQXJyYXkob3RoZXIpKSBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmWzBdLFxuICAgICAgICAgICAgdmFsdWUgPSBfcmVmWzFdO1xuICAgICAgICByZXR1cm4gX3RoaXM0LnNldChrZXksIHZhbHVlKTtcbiAgICAgIH0pO2Vsc2UgaWYgKGlzRVM2TWFwKG90aGVyKSkge1xuICAgICAgICBpZiAob3RoZXIuY29uc3RydWN0b3IgIT09IE1hcCkgZGllKDE5LCBvdGhlcik7XG4gICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG90aGVyICE9PSBudWxsICYmIG90aGVyICE9PSB1bmRlZmluZWQpIGRpZSgyMCwgb3RoZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoX3RoaXM1LmtleXMoKSksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGtleSA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICAgIF90aGlzNVtcImRlbGV0ZVwiXShrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UodmFsdWVzKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAvLyBJbXBsZW1lbnRhdGlvbiByZXF1aXJlbWVudHM6XG4gICAgLy8gLSByZXNwZWN0IG9yZGVyaW5nIG9mIHJlcGxhY2VtZW50IG1hcFxuICAgIC8vIC0gYWxsb3cgaW50ZXJjZXB0b3JzIHRvIHJ1biBhbmQgcG90ZW50aWFsbHkgcHJldmVudCBpbmRpdmlkdWFsIG9wZXJhdGlvbnNcbiAgICAvLyAtIGRvbid0IHJlY3JlYXRlIG9ic2VydmFibGVzIHRoYXQgYWxyZWFkeSBleGlzdCBpbiBvcmlnaW5hbCBtYXAgKHNvIHdlIGRvbid0IGRlc3Ryb3kgZXhpc3Rpbmcgc3Vic2NyaXB0aW9ucylcbiAgICAvLyAtIGRvbid0IF9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkIGlmIHRoZSBrZXlzIG9mIHJlc3VsdGluZyBtYXAgYXJlIGluZGVudGljYWwgKG9yZGVyIG1hdHRlcnMhKVxuICAgIC8vIC0gbm90ZSB0aGF0IHJlc3VsdCBtYXAgbWF5IGRpZmZlciBmcm9tIHJlcGxhY2VtZW50IG1hcCBkdWUgdG8gdGhlIGludGVyY2VwdG9yc1xuICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIENvbnZlcnQgdG8gbWFwIHNvIHdlIGNhbiBkbyBxdWljayBrZXkgbG9va3Vwc1xuICAgICAgdmFyIHJlcGxhY2VtZW50TWFwID0gY29udmVydFRvTWFwKHZhbHVlcyk7XG4gICAgICB2YXIgb3JkZXJlZERhdGEgPSBuZXcgTWFwKCk7IC8vIFVzZWQgZm9yIG9wdGltaXphdGlvblxuXG4gICAgICB2YXIga2V5c1JlcG9ydENoYW5nZWRDYWxsZWQgPSBmYWxzZTsgLy8gRGVsZXRlIGtleXMgdGhhdCBkb24ndCBleGlzdCBpbiByZXBsYWNlbWVudCBtYXBcbiAgICAgIC8vIGlmIHRoZSBrZXkgZGVsZXRpb24gaXMgcHJldmVudGVkIGJ5IGludGVyY2VwdG9yXG4gICAgICAvLyBhZGQgZW50cnkgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgcmVzdWx0IG1hcFxuXG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShfdGhpczYuZGF0YV8ua2V5cygpKSwgX3N0ZXAzOyAhKF9zdGVwMyA9IF9pdGVyYXRvcjMoKSkuZG9uZTspIHtcbiAgICAgICAgdmFyIGtleSA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICAvLyBDb25jdXJyZW50bHkgaXRlcmF0aW5nL2RlbGV0aW5nIGtleXNcbiAgICAgICAgLy8gaXRlcmF0b3Igc2hvdWxkIGhhbmRsZSB0aGlzIGNvcnJlY3RseVxuICAgICAgICBpZiAoIXJlcGxhY2VtZW50TWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdmFyIGRlbGV0ZWQgPSBfdGhpczZbXCJkZWxldGVcIl0oa2V5KTsgLy8gV2FzIHRoZSBrZXkgcmVtb3ZlZD9cblxuXG4gICAgICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgICAgIC8vIF9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCkgd2FzIGFscmVhZHkgY2FsbGVkXG4gICAgICAgICAgICBrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBwcmV2ZW50ZWQgYnkgaW50ZXJjZXB0b3JcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzNi5kYXRhXy5nZXQoa2V5KTtcblxuICAgICAgICAgICAgb3JkZXJlZERhdGEuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBNZXJnZSBlbnRyaWVzXG5cblxuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UocmVwbGFjZW1lbnRNYXAuZW50cmllcygpKSwgX3N0ZXA0OyAhKF9zdGVwNCA9IF9pdGVyYXRvcjQoKSkuZG9uZTspIHtcbiAgICAgICAgdmFyIF9zdGVwNCR2YWx1ZSA9IF9zdGVwNC52YWx1ZSxcbiAgICAgICAgICAgIF9rZXkgPSBfc3RlcDQkdmFsdWVbMF0sXG4gICAgICAgICAgICBfdmFsdWUgPSBfc3RlcDQkdmFsdWVbMV07XG5cbiAgICAgICAgLy8gV2Ugd2lsbCB3YW50IHRvIGtub3cgd2hldGhlciBhIG5ldyBrZXkgaXMgYWRkZWRcbiAgICAgICAgdmFyIGtleUV4aXN0ZWQgPSBfdGhpczYuZGF0YV8uaGFzKF9rZXkpOyAvLyBBZGQgb3IgdXBkYXRlIHZhbHVlXG5cblxuICAgICAgICBfdGhpczYuc2V0KF9rZXksIF92YWx1ZSk7IC8vIFRoZSBhZGRpdGlvbiBjb3VsZCBoYXZlIGJlZW4gcHJldmVudCBieSBpbnRlcmNlcHRvclxuXG5cbiAgICAgICAgaWYgKF90aGlzNi5kYXRhXy5oYXMoX2tleSkpIHtcbiAgICAgICAgICAvLyBUaGUgdXBkYXRlIGNvdWxkIGhhdmUgYmVlbiBwcmV2ZW50ZWQgYnkgaW50ZXJjZXB0b3JcbiAgICAgICAgICAvLyBhbmQgYWxzbyB3ZSB3YW50IHRvIHByZXNlcnZlIGV4aXN0aW5nIHZhbHVlc1xuICAgICAgICAgIC8vIHNvIHVzZSB2YWx1ZSBmcm9tIF9kYXRhIG1hcCAoaW5zdGVhZCBvZiByZXBsYWNlbWVudCBtYXApXG4gICAgICAgICAgdmFyIF92YWx1ZTIgPSBfdGhpczYuZGF0YV8uZ2V0KF9rZXkpO1xuXG4gICAgICAgICAgb3JkZXJlZERhdGEuc2V0KF9rZXksIF92YWx1ZTIpOyAvLyBXYXMgYSBuZXcga2V5IGFkZGVkP1xuXG4gICAgICAgICAgaWYgKCFrZXlFeGlzdGVkKSB7XG4gICAgICAgICAgICAvLyBfa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpIHdhcyBhbHJlYWR5IGNhbGxlZFxuICAgICAgICAgICAga2V5c1JlcG9ydENoYW5nZWRDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBDaGVjayBmb3IgcG9zc2libGUga2V5IG9yZGVyIGNoYW5nZVxuXG5cbiAgICAgIGlmICgha2V5c1JlcG9ydENoYW5nZWRDYWxsZWQpIHtcbiAgICAgICAgaWYgKF90aGlzNi5kYXRhXy5zaXplICE9PSBvcmRlcmVkRGF0YS5zaXplKSB7XG4gICAgICAgICAgLy8gSWYgc2l6ZSBkaWZmZXJzLCBrZXlzIGFyZSBkZWZpbml0ZWx5IG1vZGlmaWVkXG4gICAgICAgICAgX3RoaXM2LmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGl0ZXIxID0gX3RoaXM2LmRhdGFfLmtleXMoKTtcblxuICAgICAgICAgIHZhciBpdGVyMiA9IG9yZGVyZWREYXRhLmtleXMoKTtcbiAgICAgICAgICB2YXIgbmV4dDEgPSBpdGVyMS5uZXh0KCk7XG4gICAgICAgICAgdmFyIG5leHQyID0gaXRlcjIubmV4dCgpO1xuXG4gICAgICAgICAgd2hpbGUgKCFuZXh0MS5kb25lKSB7XG4gICAgICAgICAgICBpZiAobmV4dDEudmFsdWUgIT09IG5leHQyLnZhbHVlKSB7XG4gICAgICAgICAgICAgIF90aGlzNi5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0MSA9IGl0ZXIxLm5leHQoKTtcbiAgICAgICAgICAgIG5leHQyID0gaXRlcjIubmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBVc2UgY29ycmVjdGx5IG9yZGVyZWQgbWFwXG5cblxuICAgICAgX3RoaXM2LmRhdGFfID0gb3JkZXJlZERhdGE7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBPYnNlcnZhYmxlTWFwXVwiO1xuICB9O1xuXG4gIF9wcm90by50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogT2JzZXJ2ZXMgdGhpcyBvYmplY3QuIFRyaWdnZXJzIGZvciB0aGUgZXZlbnRzICdhZGQnLCAndXBkYXRlJyBhbmQgJ2RlbGV0ZScuXHJcbiAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qvb2JzZXJ2ZVxyXG4gICAqIGZvciBjYWxsYmFjayBkZXRhaWxzXHJcbiAgICovXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGZpcmVJbW1lZGlhdGVseSA9PT0gdHJ1ZSkgZGllKFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCBmaXJlSW1tZWRpYXRlbHk9dHJ1ZSBpbiBjb21iaW5hdGlvbiB3aXRoIG1hcHMuXCIpO1xuICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZhYmxlTWFwLCBbe1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YV8uc2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IF9TeW1ib2wkdG9TdHJpbmdUYWcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJNYXBcIjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZU1hcDtcbn0oKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbnZhciBpc09ic2VydmFibGVNYXAgPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVNYXBcIiwgT2JzZXJ2YWJsZU1hcCk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb01hcChkYXRhU3RydWN0dXJlKSB7XG4gIGlmIChpc0VTNk1hcChkYXRhU3RydWN0dXJlKSB8fCBpc09ic2VydmFibGVNYXAoZGF0YVN0cnVjdHVyZSkpIHtcbiAgICByZXR1cm4gZGF0YVN0cnVjdHVyZTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGFTdHJ1Y3R1cmUpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXAoZGF0YVN0cnVjdHVyZSk7XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChkYXRhU3RydWN0dXJlKSkge1xuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YVN0cnVjdHVyZSkge1xuICAgICAgbWFwLnNldChrZXksIGRhdGFTdHJ1Y3R1cmVba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGllKDIxLCBkYXRhU3RydWN0dXJlKTtcbiAgfVxufVxuXG52YXIgX1N5bWJvbCRpdGVyYXRvciQxLCBfU3ltYm9sJHRvU3RyaW5nVGFnJDE7XG52YXIgT2JzZXJ2YWJsZVNldE1hcmtlciA9IHt9O1xuX1N5bWJvbCRpdGVyYXRvciQxID0gU3ltYm9sLml0ZXJhdG9yO1xuX1N5bWJvbCR0b1N0cmluZ1RhZyQxID0gU3ltYm9sLnRvU3RyaW5nVGFnO1xudmFyIE9ic2VydmFibGVTZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYnNlcnZhYmxlU2V0KGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZV8pIHtcbiAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkge1xuICAgICAgZW5oYW5jZXIgPSBkZWVwRW5oYW5jZXI7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVfID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWVfID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJPYnNlcnZhYmxlU2V0QFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVTZXRcIjtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXNbJG1vYnhdID0gT2JzZXJ2YWJsZVNldE1hcmtlcjtcbiAgICB0aGlzLmRhdGFfID0gbmV3IFNldCgpO1xuICAgIHRoaXMuYXRvbV8gPSB2b2lkIDA7XG4gICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNfID0gdm9pZCAwO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmRlaGFuY2VyID0gdm9pZCAwO1xuICAgIHRoaXMuZW5oYW5jZXJfID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZV8gPSBuYW1lXztcblxuICAgIGlmICghaXNGdW5jdGlvbihTZXQpKSB7XG4gICAgICBkaWUoMjIpO1xuICAgIH1cblxuICAgIHRoaXMuYXRvbV8gPSBjcmVhdGVBdG9tKHRoaXMubmFtZV8pO1xuXG4gICAgdGhpcy5lbmhhbmNlcl8gPSBmdW5jdGlvbiAobmV3Viwgb2xkVikge1xuICAgICAgcmV0dXJuIGVuaGFuY2VyKG5ld1YsIG9sZFYsIG5hbWVfKTtcbiAgICB9O1xuXG4gICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICB0aGlzLnJlcGxhY2UoaW5pdGlhbERhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVoYW5jZVZhbHVlXyA9IGZ1bmN0aW9uIGRlaGFuY2VWYWx1ZV8odmFsdWUpIHtcbiAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKF90aGlzLmRhdGFfLnZhbHVlcygpKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIF90aGlzW1wiZGVsZXRlXCJdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrRm4sIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSh0aGlzKSwgX3N0ZXAyOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIoKSkuZG9uZTspIHtcbiAgICAgIHZhciB2YWx1ZSA9IF9zdGVwMi52YWx1ZTtcbiAgICAgIGNhbGxiYWNrRm4uY2FsbCh0aGlzQXJnLCB2YWx1ZSwgdmFsdWUsIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b21fKTtcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm4gdGhpczsgLy8gaWRlYWxseSwgdmFsdWUgPSBjaGFuZ2UudmFsdWUgd291bGQgYmUgZG9uZSBoZXJlLCBzbyB0aGF0IHZhbHVlcyBjYW4gYmVcbiAgICAgIC8vIGNoYW5nZWQgYnkgaW50ZXJjZXB0b3IuIFNhbWUgYXBwbGllcyBmb3Igb3RoZXIgU2V0IGFuZCBNYXAgYXBpJ3MuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLmRhdGFfLmFkZChfdGhpczIuZW5oYW5jZXJfKHZhbHVlLCB1bmRlZmluZWQpKTtcblxuICAgICAgICBfdGhpczIuYXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgfSk7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcblxuICAgICAgdmFyIF9jaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJzZXRcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICB9IDogbnVsbDtcblxuICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHNweVJlcG9ydFN0YXJ0KF9jaGFuZ2UpO1xuICAgICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIF9jaGFuZ2UpO1xuICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHNweVJlcG9ydEVuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90b1tcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uIF9kZWxldGUodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBERUxFVEUsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgb2xkVmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgdmFyIG5vdGlmeVNweSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG5cbiAgICAgIHZhciBfY2hhbmdlMiA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcInNldFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBvbGRWYWx1ZTogdmFsdWVcbiAgICAgIH0gOiBudWxsO1xuXG4gICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgc3B5UmVwb3J0U3RhcnQoX2NoYW5nZTIpO1xuICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuYXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuXG4gICAgICAgIF90aGlzMy5kYXRhX1tcImRlbGV0ZVwiXSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBfY2hhbmdlMik7XG4gICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgc3B5UmVwb3J0RW5kKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmhhcyA9IGZ1bmN0aW9uIGhhcyh2YWx1ZSkge1xuICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhXy5oYXModGhpcy5kZWhhbmNlVmFsdWVfKHZhbHVlKSk7XG4gIH07XG5cbiAgX3Byb3RvLmVudHJpZXMgPSBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgIHZhciBrZXlzID0gQXJyYXkuZnJvbSh0aGlzLmtleXMoKSk7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXMoKSk7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgaW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgIG5leHRJbmRleCArPSAxO1xuICAgICAgICByZXR1cm4gaW5kZXggPCB2YWx1ZXMubGVuZ3RoID8ge1xuICAgICAgICAgIHZhbHVlOiBba2V5c1tpbmRleF0sIHZhbHVlc1tpbmRleF1dLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5rZXlzID0gZnVuY3Rpb24ga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgdmFyIG9ic2VydmFibGVWYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMuZGF0YV8udmFsdWVzKCkpO1xuICAgIHJldHVybiBtYWtlSXRlcmFibGUoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IG9ic2VydmFibGVWYWx1ZXMubGVuZ3RoID8ge1xuICAgICAgICAgIHZhbHVlOiBzZWxmLmRlaGFuY2VWYWx1ZV8ob2JzZXJ2YWJsZVZhbHVlc1tuZXh0SW5kZXgrK10pLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShvdGhlcikge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvdGhlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNldChvdGhlcik7XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXIpKSB7XG4gICAgICAgIF90aGlzNC5jbGVhcigpO1xuXG4gICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5hZGQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNFUzZTZXQob3RoZXIpKSB7XG4gICAgICAgIF90aGlzNC5jbGVhcigpO1xuXG4gICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5hZGQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkaWUoXCJDYW5ub3QgaW5pdGlhbGl6ZSBzZXQgZnJvbSBcIiArIG90aGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ub2JzZXJ2ZV8gPSBmdW5jdGlvbiBvYnNlcnZlXyhsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgLy8gLi4uICdmaXJlSW1tZWRpYXRlbHknIGNvdWxkIGFsc28gYmUgdHJ1ZT9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGZpcmVJbW1lZGlhdGVseSA9PT0gdHJ1ZSkgZGllKFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCBmaXJlSW1tZWRpYXRlbHk9dHJ1ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHNldHMuXCIpO1xuICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9wcm90by50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBPYnNlcnZhYmxlU2V0XVwiO1xuICB9O1xuXG4gIF9wcm90b1tfU3ltYm9sJGl0ZXJhdG9yJDFdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZhYmxlU2V0LCBbe1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhXy5zaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogX1N5bWJvbCR0b1N0cmluZ1RhZyQxLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiU2V0XCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9ic2VydmFibGVTZXQ7XG59KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG52YXIgaXNPYnNlcnZhYmxlU2V0ID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlU2V0XCIsIE9ic2VydmFibGVTZXQpO1xuXG52YXIgZGVzY3JpcHRvckNhY2hlID0gLyojX19QVVJFX18qL09iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgUkVNT1ZFID0gXCJyZW1vdmVcIjtcbnZhciBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGFyZ2V0XywgdmFsdWVzXywgbmFtZV8sIC8vIFVzZWQgYW55dGltZSBhbm5vdGF0aW9uIGlzIG5vdCBleHBsaWNpdGVseSBwcm92aWRlZFxuICBkZWZhdWx0QW5ub3RhdGlvbl8pIHtcbiAgICBpZiAodmFsdWVzXyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZXNfID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGlmIChkZWZhdWx0QW5ub3RhdGlvbl8gPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdEFubm90YXRpb25fID0gYXV0b0Fubm90YXRpb247XG4gICAgfVxuXG4gICAgdGhpcy50YXJnZXRfID0gdm9pZCAwO1xuICAgIHRoaXMudmFsdWVzXyA9IHZvaWQgMDtcbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMuZGVmYXVsdEFubm90YXRpb25fID0gdm9pZCAwO1xuICAgIHRoaXMua2V5c0F0b21fID0gdm9pZCAwO1xuICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmludGVyY2VwdG9yc18gPSB2b2lkIDA7XG4gICAgdGhpcy5wcm94eV8gPSB2b2lkIDA7XG4gICAgdGhpcy5pc1BsYWluT2JqZWN0XyA9IHZvaWQgMDtcbiAgICB0aGlzLmFwcGxpZWRBbm5vdGF0aW9uc18gPSB2b2lkIDA7XG4gICAgdGhpcy5wZW5kaW5nS2V5c18gPSB2b2lkIDA7XG4gICAgdGhpcy50YXJnZXRfID0gdGFyZ2V0XztcbiAgICB0aGlzLnZhbHVlc18gPSB2YWx1ZXNfO1xuICAgIHRoaXMubmFtZV8gPSBuYW1lXztcbiAgICB0aGlzLmRlZmF1bHRBbm5vdGF0aW9uXyA9IGRlZmF1bHRBbm5vdGF0aW9uXztcbiAgICB0aGlzLmtleXNBdG9tXyA9IG5ldyBBdG9tKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi5rZXlzXCIgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5c1wiKTsgLy8gT3B0aW1pemF0aW9uOiB3ZSB1c2UgdGhpcyBmcmVxdWVudGx5XG5cbiAgICB0aGlzLmlzUGxhaW5PYmplY3RfID0gaXNQbGFpbk9iamVjdCh0aGlzLnRhcmdldF8pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNBbm5vdGF0aW9uKHRoaXMuZGVmYXVsdEFubm90YXRpb25fKSkge1xuICAgICAgZGllKFwiZGVmYXVsdEFubm90YXRpb24gbXVzdCBiZSB2YWxpZCBhbm5vdGF0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIC8vIFByZXBhcmUgc3RydWN0dXJlIGZvciB0cmFja2luZyB3aGljaCBmaWVsZHMgd2VyZSBhbHJlYWR5IGFubm90YXRlZFxuICAgICAgdGhpcy5hcHBsaWVkQW5ub3RhdGlvbnNfID0ge307XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90byA9IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldE9ic2VydmFibGVQcm9wVmFsdWVfID0gZnVuY3Rpb24gZ2V0T2JzZXJ2YWJsZVByb3BWYWx1ZV8oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzXy5nZXQoa2V5KS5nZXQoKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T2JzZXJ2YWJsZVByb3BWYWx1ZV8gPSBmdW5jdGlvbiBzZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyhrZXksIG5ld1ZhbHVlKSB7XG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLnZhbHVlc18uZ2V0KGtleSk7XG5cbiAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUpIHtcbiAgICAgIG9ic2VydmFibGUuc2V0KG5ld1ZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gaW50ZXJjZXB0XG5cblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIG51bGw7XG4gICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICB9XG5cbiAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUucHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSk7IC8vIG5vdGlmeSBzcHkgJiBvYnNlcnZlcnNcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XG4gICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgdmFyIG5vdGlmeVNweSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcblxuICAgICAgdmFyIF9jaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm9iamVjdFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICBvbGRWYWx1ZTogb2JzZXJ2YWJsZS52YWx1ZV8sXG4gICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICB9IDogbnVsbDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KF9jaGFuZ2UpO1xuICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZV8obmV3VmFsdWUpO1xuICAgICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIF9jaGFuZ2UpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5nZXRfID0gZnVuY3Rpb24gZ2V0XyhrZXkpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uICYmICFoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgLy8gS2V5IGRvZXNuJ3QgZXhpc3QgeWV0LCBzdWJzY3JpYmUgZm9yIGl0IGluIGNhc2UgaXQncyBhZGRlZCBsYXRlclxuICAgICAgdGhpcy5oYXNfKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0X1trZXldO1xuICB9XG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UHJvcGVydHlLZXl9IGtleVxyXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7QW5ub3RhdGlvbnxib29sZWFufSBhbm5vdGF0aW9uIHRydWUgLSB1c2UgZGVmYXVsdCBhbm5vdGF0aW9uLCBmYWxzZSAtIGNvcHkgYXMgaXNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRfID0gZnVuY3Rpb24gc2V0XyhrZXksIHZhbHVlLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIERvbid0IHVzZSAuaGFzKGtleSkgLSB3ZSBjYXJlIGFib3V0IG93blxuICAgIGlmIChoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgLy8gRXhpc3RpbmcgcHJvcFxuICAgICAgaWYgKHRoaXMudmFsdWVzXy5oYXMoa2V5KSkge1xuICAgICAgICAvLyBPYnNlcnZhYmxlIChjYW4gYmUgaW50ZXJjZXB0ZWQpXG4gICAgICAgIHJldHVybiB0aGlzLnNldE9ic2VydmFibGVQcm9wVmFsdWVfKGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgLy8gTm9uLW9ic2VydmFibGUgLSBwcm94eVxuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGhpcy50YXJnZXRfLCBrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vbi1vYnNlcnZhYmxlXG4gICAgICAgIHRoaXMudGFyZ2V0X1trZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZXcgcHJvcFxuICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5kXyhrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9LCB0aGlzLmRlZmF1bHRBbm5vdGF0aW9uXywgcHJveHlUcmFwKTtcbiAgICB9XG4gIH0gLy8gVHJhcCBmb3IgXCJpblwiXG4gIDtcblxuICBfcHJvdG8uaGFzXyA9IGZ1bmN0aW9uIGhhc18oa2V5KSB7XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHtcbiAgICAgIC8vIFNraXAga2V5IHN1YnNjcmlwdGlvbiBvdXRzaWRlIGRlcml2YXRpb25cbiAgICAgIHJldHVybiBrZXkgaW4gdGhpcy50YXJnZXRfO1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZ0tleXNfIHx8ICh0aGlzLnBlbmRpbmdLZXlzXyA9IG5ldyBNYXAoKSk7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5wZW5kaW5nS2V5c18uZ2V0KGtleSk7XG5cbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoa2V5IGluIHRoaXMudGFyZ2V0XywgcmVmZXJlbmNlRW5oYW5jZXIsIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpICsgXCI/XCIgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5P1wiLCBmYWxzZSk7XG4gICAgICB0aGlzLnBlbmRpbmdLZXlzXy5zZXQoa2V5LCBlbnRyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5LmdldCgpO1xuICB9XG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UHJvcGVydHlLZXl9IGtleVxyXG4gICAqIEBwYXJhbSB7QW5ub3RhdGlvbnxib29sZWFufSBhbm5vdGF0aW9uIHRydWUgLSB1c2UgZGVmYXVsdCBhbm5vdGF0aW9uLCBmYWxzZSAtIGlnbm9yZSBwcm9wXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ubWFrZV8gPSBmdW5jdGlvbiBtYWtlXyhrZXksIGFubm90YXRpb24pIHtcbiAgICBpZiAoYW5ub3RhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgYW5ub3RhdGlvbiA9IHRoaXMuZGVmYXVsdEFubm90YXRpb25fO1xuICAgIH1cblxuICAgIGlmIChhbm5vdGF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFzc2VydEFubm90YWJsZSh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpO1xuXG4gICAgaWYgKCEoa2V5IGluIHRoaXMudGFyZ2V0XykpIHtcbiAgICAgIHZhciBfdGhpcyR0YXJnZXRfJHN0b3JlZEE7XG5cbiAgICAgIC8vIFRocm93IG9uIG1pc3Npbmcga2V5LCBleGNlcHQgZm9yIGRlY29yYXRvcnM6XG4gICAgICAvLyBEZWNvcmF0b3IgYW5ub3RhdGlvbnMgYXJlIGNvbGxlY3RlZCBmcm9tIHdob2xlIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gc3VwZXIoKSBzb21lIHByb3BzIG1heSBub3QgZXhpc3QgeWV0LlxuICAgICAgLy8gSG93ZXZlciB3ZSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IG1pc3NpbmcgcHJvcCxcbiAgICAgIC8vIGJlY2F1c2UgdGhlIGRlY29yYXRvciBtdXN0IGhhdmUgYmVlbiBhcHBsaWVkIHRvIHNvbWV0aGluZy5cbiAgICAgIGlmICgoX3RoaXMkdGFyZ2V0XyRzdG9yZWRBID0gdGhpcy50YXJnZXRfW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHRhcmdldF8kc3RvcmVkQVtrZXldKSB7XG4gICAgICAgIHJldHVybjsgLy8gd2lsbCBiZSBhbm5vdGF0ZWQgYnkgc3ViY2xhc3MgY29uc3RydWN0b3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpZSgxLCBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlXywgdGhpcy5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzb3VyY2UgPSB0aGlzLnRhcmdldF87XG5cbiAgICB3aGlsZSAoc291cmNlICYmIHNvdXJjZSAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IGdldERlc2NyaXB0b3Ioc291cmNlLCBrZXkpO1xuXG4gICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICB2YXIgb3V0Y29tZSA9IGFubm90YXRpb24ubWFrZV8odGhpcywga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpO1xuICAgICAgICBpZiAob3V0Y29tZSA9PT0gMFxuICAgICAgICAvKiBDYW5jZWwgKi9cbiAgICAgICAgKSByZXR1cm47XG4gICAgICAgIGlmIChvdXRjb21lID09PSAxXG4gICAgICAgIC8qIEJyZWFrICovXG4gICAgICAgICkgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHNvdXJjZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpO1xuICAgIH1cblxuICAgIHJlY29yZEFubm90YXRpb25BcHBsaWVkKHRoaXMsIGFubm90YXRpb24sIGtleSk7XG4gIH1cbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQcm9wZXJ0eUtleX0ga2V5XHJcbiAgICogQHBhcmFtIHtQcm9wZXJ0eURlc2NyaXB0b3J9IGRlc2NyaXB0b3JcclxuICAgKiBAcGFyYW0ge0Fubm90YXRpb258Ym9vbGVhbn0gYW5ub3RhdGlvbiB0cnVlIC0gdXNlIGRlZmF1bHQgYW5ub3RhdGlvbiwgZmFsc2UgLSBjb3B5IGFzIGlzXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwcm94eVRyYXAgd2hldGhlciBpdCdzIGNhbGxlZCBmcm9tIHByb3h5IHRyYXBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxudWxsfSB0cnVlIG9uIHN1Y2Nlc3MsIGZhbHNlIG9uIGZhaWx1cmUgKHByb3h5VHJhcCArIG5vbi1jb25maWd1cmFibGUpLCBudWxsIHdoZW4gY2FuY2VsbGVkIGJ5IGludGVyY2VwdG9yXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXh0ZW5kXyA9IGZ1bmN0aW9uIGV4dGVuZF8oa2V5LCBkZXNjcmlwdG9yLCBhbm5vdGF0aW9uLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhbm5vdGF0aW9uID09PSB0cnVlKSB7XG4gICAgICBhbm5vdGF0aW9uID0gdGhpcy5kZWZhdWx0QW5ub3RhdGlvbl87XG4gICAgfVxuXG4gICAgaWYgKGFubm90YXRpb24gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZpbmVQcm9wZXJ0eV8oa2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApO1xuICAgIH1cblxuICAgIGFzc2VydEFubm90YWJsZSh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpO1xuICAgIHZhciBvdXRjb21lID0gYW5ub3RhdGlvbi5leHRlbmRfKHRoaXMsIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKTtcblxuICAgIGlmIChvdXRjb21lKSB7XG4gICAgICByZWNvcmRBbm5vdGF0aW9uQXBwbGllZCh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRjb21lO1xuICB9XG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UHJvcGVydHlLZXl9IGtleVxyXG4gICAqIEBwYXJhbSB7UHJvcGVydHlEZXNjcmlwdG9yfSBkZXNjcmlwdG9yXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwcm94eVRyYXAgd2hldGhlciBpdCdzIGNhbGxlZCBmcm9tIHByb3h5IHRyYXBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxudWxsfSB0cnVlIG9uIHN1Y2Nlc3MsIGZhbHNlIG9uIGZhaWx1cmUgKHByb3h5VHJhcCArIG5vbi1jb25maWd1cmFibGUpLCBudWxsIHdoZW4gY2FuY2VsbGVkIGJ5IGludGVyY2VwdG9yXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVmaW5lUHJvcGVydHlfID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHlfKGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gICAgaWYgKHByb3h5VHJhcCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm94eVRyYXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgc3RhcnRCYXRjaCgpOyAvLyBEZWxldGVcblxuICAgICAgdmFyIGRlbGV0ZU91dGNvbWUgPSB0aGlzLmRlbGV0ZV8oa2V5KTtcblxuICAgICAgaWYgKCFkZWxldGVPdXRjb21lKSB7XG4gICAgICAgIC8vIEZhaWx1cmUgb3IgaW50ZXJjZXB0ZWRcbiAgICAgICAgcmV0dXJuIGRlbGV0ZU91dGNvbWU7XG4gICAgICB9IC8vIEFERCBpbnRlcmNlcHRvclxuXG5cbiAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgICBuZXdWYWx1ZTogZGVzY3JpcHRvci52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG5cbiAgICAgICAgaWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgZGVzY3JpcHRvciA9IF9leHRlbmRzKHt9LCBkZXNjcmlwdG9yLCB7XG4gICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBEZWZpbmVcblxuXG4gICAgICBpZiAocHJveHlUcmFwKSB7XG4gICAgICAgIGlmICghUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnRhcmdldF8sIGtleSwgZGVzY3JpcHRvcikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMudGFyZ2V0Xywga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH0gLy8gTm90aWZ5XG5cblxuICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyhrZXksIGRlc2NyaXB0b3IudmFsdWUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBlbmRCYXRjaCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIElmIG9yaWdpbmFsIGRlc2NyaXB0b3IgYmVjb21lcyByZWxldmFudCwgbW92ZSB0aGlzIHRvIGFubm90YXRpb24gZGlyZWN0bHlcbiAgO1xuXG4gIF9wcm90by5kZWZpbmVPYnNlcnZhYmxlUHJvcGVydHlfID0gZnVuY3Rpb24gZGVmaW5lT2JzZXJ2YWJsZVByb3BlcnR5XyhrZXksIHZhbHVlLCBlbmhhbmNlciwgcHJveHlUcmFwKSB7XG4gICAgaWYgKHByb3h5VHJhcCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm94eVRyYXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgc3RhcnRCYXRjaCgpOyAvLyBEZWxldGVcblxuICAgICAgdmFyIGRlbGV0ZU91dGNvbWUgPSB0aGlzLmRlbGV0ZV8oa2V5KTtcblxuICAgICAgaWYgKCFkZWxldGVPdXRjb21lKSB7XG4gICAgICAgIC8vIEZhaWx1cmUgb3IgaW50ZXJjZXB0ZWRcbiAgICAgICAgcmV0dXJuIGRlbGV0ZU91dGNvbWU7XG4gICAgICB9IC8vIEFERCBpbnRlcmNlcHRvclxuXG5cbiAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghY2hhbmdlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBjYWNoZWREZXNjcmlwdG9yID0gZ2V0Q2FjaGVkT2JzZXJ2YWJsZVByb3BEZXNjcmlwdG9yKGtleSk7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnMgPyB0aGlzLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBjYWNoZWREZXNjcmlwdG9yLmdldCxcbiAgICAgICAgc2V0OiBjYWNoZWREZXNjcmlwdG9yLnNldFxuICAgICAgfTsgLy8gRGVmaW5lXG5cbiAgICAgIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgaWYgKCFSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMudGFyZ2V0Xywga2V5LCBkZXNjcmlwdG9yKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUodmFsdWUsIGVuaGFuY2VyLCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB0aGlzLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSA6IFwiT2JzZXJ2YWJsZU9iamVjdC5rZXlcIiwgZmFsc2UpO1xuICAgICAgdGhpcy52YWx1ZXNfLnNldChrZXksIG9ic2VydmFibGUpOyAvLyBOb3RpZnkgKHZhbHVlIHBvc3NpYmx5IGNoYW5nZWQgYnkgT2JzZXJ2YWJsZVZhbHVlKVxuXG4gICAgICB0aGlzLm5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgb2JzZXJ2YWJsZS52YWx1ZV8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBlbmRCYXRjaCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIElmIG9yaWdpbmFsIGRlc2NyaXB0b3IgYmVjb21lcyByZWxldmFudCwgbW92ZSB0aGlzIHRvIGFubm90YXRpb24gZGlyZWN0bHlcbiAgO1xuXG4gIF9wcm90by5kZWZpbmVDb21wdXRlZFByb3BlcnR5XyA9IGZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkUHJvcGVydHlfKGtleSwgb3B0aW9ucywgcHJveHlUcmFwKSB7XG4gICAgaWYgKHByb3h5VHJhcCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm94eVRyYXAgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgc3RhcnRCYXRjaCgpOyAvLyBEZWxldGVcblxuICAgICAgdmFyIGRlbGV0ZU91dGNvbWUgPSB0aGlzLmRlbGV0ZV8oa2V5KTtcblxuICAgICAgaWYgKCFkZWxldGVPdXRjb21lKSB7XG4gICAgICAgIC8vIEZhaWx1cmUgb3IgaW50ZXJjZXB0ZWRcbiAgICAgICAgcmV0dXJuIGRlbGV0ZU91dGNvbWU7XG4gICAgICB9IC8vIEFERCBpbnRlcmNlcHRvclxuXG5cbiAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgICBuZXdWYWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMubmFtZSB8fCAob3B0aW9ucy5uYW1lID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdGhpcy5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5XCIpO1xuICAgICAgb3B0aW9ucy5jb250ZXh0ID0gdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfO1xuICAgICAgdmFyIGNhY2hlZERlc2NyaXB0b3IgPSBnZXRDYWNoZWRPYnNlcnZhYmxlUHJvcERlc2NyaXB0b3Ioa2V5KTtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLnNhZmVEZXNjcmlwdG9ycyA/IHRoaXMuaXNQbGFpbk9iamVjdF8gOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZ2V0OiBjYWNoZWREZXNjcmlwdG9yLmdldCxcbiAgICAgICAgc2V0OiBjYWNoZWREZXNjcmlwdG9yLnNldFxuICAgICAgfTsgLy8gRGVmaW5lXG5cbiAgICAgIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgaWYgKCFSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMudGFyZ2V0Xywga2V5LCBkZXNjcmlwdG9yKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZhbHVlc18uc2V0KGtleSwgbmV3IENvbXB1dGVkVmFsdWUob3B0aW9ucykpOyAvLyBOb3RpZnlcblxuICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyhrZXksIHVuZGVmaW5lZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQcm9wZXJ0eUtleX0ga2V5XHJcbiAgICogQHBhcmFtIHtQcm9wZXJ0eURlc2NyaXB0b3J9IGRlc2NyaXB0b3JcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWxldGVfID0gZnVuY3Rpb24gZGVsZXRlXyhrZXksIHByb3h5VHJhcCkge1xuICAgIGlmIChwcm94eVRyYXAgPT09IHZvaWQgMCkge1xuICAgICAgcHJveHlUcmFwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gTm8gc3VjaCBwcm9wXG4gICAgaWYgKCFoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBJbnRlcmNlcHRcblxuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIHR5cGU6IFJFTU9WRVxuICAgICAgfSk7IC8vIENhbmNlbGxlZFxuXG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIG51bGw7XG4gICAgfSAvLyBEZWxldGVcblxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBfdGhpcyRwZW5kaW5nS2V5c18sIF90aGlzJHBlbmRpbmdLZXlzXyRnZTtcblxuICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgIHZhciBub3RpZnlTcHkgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMudmFsdWVzXy5nZXQoa2V5KTsgLy8gVmFsdWUgbmVlZGVkIGZvciBzcGllcy9saXN0ZW5lcnNcblxuICAgICAgdmFyIHZhbHVlID0gdW5kZWZpbmVkOyAvLyBPcHRpbWl6YXRpb246IGRvbid0IHB1bGwgdGhlIHZhbHVlIHVubGVzcyB3ZSB3aWxsIG5lZWQgaXRcblxuICAgICAgaWYgKCFvYnNlcnZhYmxlICYmIChub3RpZnkgfHwgbm90aWZ5U3B5KSkge1xuICAgICAgICB2YXIgX2dldERlc2NyaXB0b3I7XG5cbiAgICAgICAgdmFsdWUgPSAoX2dldERlc2NyaXB0b3IgPSBnZXREZXNjcmlwdG9yKHRoaXMudGFyZ2V0Xywga2V5KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9nZXREZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgfSAvLyBkZWxldGUgcHJvcCAoZG8gZmlyc3QsIG1heSBmYWlsKVxuXG5cbiAgICAgIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgaWYgKCFSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0X1trZXldO1xuICAgICAgfSAvLyBBbGxvdyByZS1hbm5vdGF0aW5nIHRoaXMgZmllbGRcblxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmFwcGxpZWRBbm5vdGF0aW9uc19ba2V5XTtcbiAgICAgIH0gLy8gQ2xlYXIgb2JzZXJ2YWJsZVxuXG5cbiAgICAgIGlmIChvYnNlcnZhYmxlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzX1tcImRlbGV0ZVwiXShrZXkpOyAvLyBmb3IgY29tcHV0ZWQsIHZhbHVlIGlzIHVuZGVmaW5lZFxuXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZVZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSBvYnNlcnZhYmxlLnZhbHVlXztcbiAgICAgICAgfSAvLyBOb3RpZnk6IGF1dG9ydW4oKCkgPT4gb2JqW2tleV0pLCBzZWUgIzE3OTZcblxuXG4gICAgICAgIHByb3BhZ2F0ZUNoYW5nZWQob2JzZXJ2YWJsZSk7XG4gICAgICB9IC8vIE5vdGlmeSBcImtleXMvZW50cmllcy92YWx1ZXNcIiBvYnNlcnZlcnNcblxuXG4gICAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7IC8vIE5vdGlmeSBcImhhc1wiIG9ic2VydmVyc1xuICAgICAgLy8gXCJpblwiIGFzIGl0IG1heSBzdGlsbCBleGlzdCBpbiBwcm90b1xuXG4gICAgICAoX3RoaXMkcGVuZGluZ0tleXNfID0gdGhpcy5wZW5kaW5nS2V5c18pID09IG51bGwgPyB2b2lkIDAgOiAoX3RoaXMkcGVuZGluZ0tleXNfJGdlID0gX3RoaXMkcGVuZGluZ0tleXNfLmdldChrZXkpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcGVuZGluZ0tleXNfJGdlLnNldChrZXkgaW4gdGhpcy50YXJnZXRfKTsgLy8gTm90aWZ5IHNwaWVzL2xpc3RlbmVyc1xuXG4gICAgICBpZiAobm90aWZ5IHx8IG5vdGlmeVNweSkge1xuICAgICAgICB2YXIgX2NoYW5nZTIgPSB7XG4gICAgICAgICAgdHlwZTogUkVNT1ZFLFxuICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm9iamVjdFwiLFxuICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICBvbGRWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgbmFtZToga2V5XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRTdGFydChfY2hhbmdlMik7XG4gICAgICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBfY2hhbmdlMik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgZW5kQmF0Y2goKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcclxuICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cclxuICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXHJcbiAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGNhbGxiYWNrLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGZpcmVJbW1lZGlhdGVseSA9PT0gdHJ1ZSkgZGllKFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgZmlyZSBpbW1lZGlhdGVseSBwcm9wZXJ0eSBmb3Igb2JzZXJ2YWJsZSBvYmplY3RzLlwiKTtcbiAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLmludGVyY2VwdF8gPSBmdW5jdGlvbiBpbnRlcmNlcHRfKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5UHJvcGVydHlBZGRpdGlvbl8gPSBmdW5jdGlvbiBub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyhrZXksIHZhbHVlKSB7XG4gICAgdmFyIF90aGlzJHBlbmRpbmdLZXlzXzIsIF90aGlzJHBlbmRpbmdLZXlzXzIkZztcblxuICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgdmFyIG5vdGlmeVNweSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcblxuICAgIGlmIChub3RpZnkgfHwgbm90aWZ5U3B5KSB7XG4gICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgICAgdHlwZTogQURELFxuICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJvYmplY3RcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgbmFtZToga2V5LFxuICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgIH0gOiBudWxsO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICBpZiAobm90aWZ5KSBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgICB9XG5cbiAgICAoX3RoaXMkcGVuZGluZ0tleXNfMiA9IHRoaXMucGVuZGluZ0tleXNfKSA9PSBudWxsID8gdm9pZCAwIDogKF90aGlzJHBlbmRpbmdLZXlzXzIkZyA9IF90aGlzJHBlbmRpbmdLZXlzXzIuZ2V0KGtleSkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRwZW5kaW5nS2V5c18yJGcuc2V0KHRydWUpOyAvLyBOb3RpZnkgXCJrZXlzL2VudHJpZXMvdmFsdWVzXCIgb2JzZXJ2ZXJzXG5cbiAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG4gIH07XG5cbiAgX3Byb3RvLm93bktleXNfID0gZnVuY3Rpb24gb3duS2V5c18oKSB7XG4gICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICByZXR1cm4gb3duS2V5cyh0aGlzLnRhcmdldF8pO1xuICB9O1xuXG4gIF9wcm90by5rZXlzXyA9IGZ1bmN0aW9uIGtleXNfKCkge1xuICAgIC8vIFJldHVybnMgZW51bWVyYWJsZSAmJiBvd24sIGJ1dCB1bmZvcnR1bmF0ZWx5IGtleXNBdG9tIHdpbGwgcmVwb3J0IG9uIEFOWSBrZXkgY2hhbmdlLlxuICAgIC8vIFRoZXJlIGlzIG5vIHdheSB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIE9iamVjdC5rZXlzKG9iamVjdCkgYW5kIFJlZmxlY3Qub3duS2V5cyhvYmplY3QpIC0gYm90aCBhcmUgaGFuZGxlZCBieSBvd25LZXlzIHRyYXAuXG4gICAgLy8gV2UgY2FuIGVpdGhlciBvdmVyLXJlcG9ydCBpbiBPYmplY3Qua2V5cyhvYmplY3QpIG9yIHVuZGVyLXJlcG9ydCBpbiBSZWZsZWN0Lm93bktleXMob2JqZWN0KVxuICAgIC8vIFdlIGNob29zZSB0byBvdmVyLXJlcG9ydCBpbiBPYmplY3Qua2V5cyhvYmplY3QpLCBiZWNhdXNlOlxuICAgIC8vIC0gdHlwaWNhbGx5IGl0J3MgdXNlZCB3aXRoIHNpbXBsZSBkYXRhIG9iamVjdHNcbiAgICAvLyAtIHdoZW4gc3ltYm9saWMvbm9uLWVudW1lcmFibGUga2V5cyBhcmUgcmVsZXZhbnQgUmVmbGVjdC5vd25LZXlzIHdvcmtzIGFzIGV4cGVjdGVkXG4gICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy50YXJnZXRfKTtcbiAgfTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uO1xufSgpO1xuZnVuY3Rpb24gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkbmFtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG9wdGlvbnMgJiYgaXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICBkaWUoXCJPcHRpb25zIGNhbid0IGJlIHByb3ZpZGVkIGZvciBhbHJlYWR5IG9ic2VydmFibGUgb2JqZWN0cy5cIik7XG4gIH1cblxuICBpZiAoaGFzUHJvcCh0YXJnZXQsICRtb2J4KSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIShnZXRBZG1pbmlzdHJhdGlvbih0YXJnZXQpIGluc3RhbmNlb2YgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKSkge1xuICAgICAgZGllKFwiQ2Fubm90IGNvbnZlcnQgJ1wiICsgZ2V0RGVidWdOYW1lKHRhcmdldCkgKyBcIicgaW50byBvYnNlcnZhYmxlIG9iamVjdDpcIiArIFwiXFxuVGhlIHRhcmdldCBpcyBhbHJlYWR5IG9ic2VydmFibGUgb2YgZGlmZmVyZW50IHR5cGUuXCIgKyBcIlxcbkV4dGVuZGluZyBidWlsdGlucyBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhT2JqZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpKSBkaWUoXCJDYW5ub3QgbWFrZSB0aGUgZGVzaWduYXRlZCBvYmplY3Qgb2JzZXJ2YWJsZTsgaXQgaXMgbm90IGV4dGVuc2libGVcIik7XG4gIHZhciBuYW1lID0gKF9vcHRpb25zJG5hbWUgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm5hbWUpICE9IG51bGwgPyBfb3B0aW9ucyRuYW1lIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKGlzUGxhaW5PYmplY3QodGFyZ2V0KSA/IFwiT2JzZXJ2YWJsZU9iamVjdFwiIDogdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUpICsgXCJAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZU9iamVjdFwiO1xuICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIG5ldyBNYXAoKSwgU3RyaW5nKG5hbWUpLCBnZXRBbm5vdGF0aW9uRnJvbU9wdGlvbnMob3B0aW9ucykpO1xuICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgJG1vYngsIGFkbSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG52YXIgaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24pO1xuXG5mdW5jdGlvbiBnZXRDYWNoZWRPYnNlcnZhYmxlUHJvcERlc2NyaXB0b3Ioa2V5KSB7XG4gIHJldHVybiBkZXNjcmlwdG9yQ2FjaGVba2V5XSB8fCAoZGVzY3JpcHRvckNhY2hlW2tleV0gPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1skbW9ieF0uZ2V0T2JzZXJ2YWJsZVByb3BWYWx1ZV8oa2V5KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpc1skbW9ieF0uc2V0T2JzZXJ2YWJsZVByb3BWYWx1ZV8oa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB7XG4gIGlmIChpc09iamVjdCh0aGluZykpIHtcbiAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHJlY29yZEFubm90YXRpb25BcHBsaWVkKGFkbSwgYW5ub3RhdGlvbiwga2V5KSB7XG4gIHZhciBfYWRtJHRhcmdldF8kc3RvcmVkQW47XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGFkbS5hcHBsaWVkQW5ub3RhdGlvbnNfW2tleV0gPSBhbm5vdGF0aW9uO1xuICB9IC8vIFJlbW92ZSBhcHBsaWVkIGRlY29yYXRvciBhbm5vdGF0aW9uIHNvIHdlIGRvbid0IHRyeSB0byBhcHBseSBpdCBhZ2FpbiBpbiBzdWJjbGFzcyBjb25zdHJ1Y3RvclxuXG5cbiAgKF9hZG0kdGFyZ2V0XyRzdG9yZWRBbiA9IGFkbS50YXJnZXRfW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkgPT0gbnVsbCA/IHRydWUgOiBkZWxldGUgX2FkbSR0YXJnZXRfJHN0b3JlZEFuW2tleV07XG59XG5cbmZ1bmN0aW9uIGFzc2VydEFubm90YWJsZShhZG0sIGFubm90YXRpb24sIGtleSkge1xuICAvLyBWYWxpZCBhbm5vdGF0aW9uXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWlzQW5ub3RhdGlvbihhbm5vdGF0aW9uKSkge1xuICAgIGRpZShcIkNhbm5vdCBhbm5vdGF0ZSAnXCIgKyBhZG0ubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpICsgXCInOiBJbnZhbGlkIGFubm90YXRpb24uXCIpO1xuICB9XG4gIC8qXHJcbiAgLy8gQ29uZmlndXJhYmxlLCBub3Qgc2VhbGVkLCBub3QgZnJvemVuXHJcbiAgLy8gUG9zc2libHkgbm90IG5lZWRlZCwganVzdCBhIGxpdHRsZSBiZXR0ZXIgZXJyb3IgdGhlbiB0aGUgb25lIHRocm93biBieSBlbmdpbmUuXHJcbiAgLy8gQ2FzZXMgd2hlcmUgdGhpcyB3b3VsZCBiZSB1c2VmdWwgdGhlIG1vc3QgKHN1YmNsYXNzIGZpZWxkIGluaXRpYWxpemVyKSBhcmUgbm90IGludGVyY2VwdGFibGUgYnkgdGhpcy5cclxuICBpZiAoX19ERVZfXykge1xyXG4gICAgICBjb25zdCBjb25maWd1cmFibGUgPSBnZXREZXNjcmlwdG9yKGFkbS50YXJnZXRfLCBrZXkpPy5jb25maWd1cmFibGVcclxuICAgICAgY29uc3QgZnJvemVuID0gT2JqZWN0LmlzRnJvemVuKGFkbS50YXJnZXRfKVxyXG4gICAgICBjb25zdCBzZWFsZWQgPSBPYmplY3QuaXNTZWFsZWQoYWRtLnRhcmdldF8pXHJcbiAgICAgIGlmICghY29uZmlndXJhYmxlIHx8IGZyb3plbiB8fCBzZWFsZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGAke2FkbS5uYW1lX30uJHtrZXkudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZSA9IGFubm90YXRpb24uYW5ub3RhdGlvblR5cGVfXHJcbiAgICAgICAgICBsZXQgZXJyb3IgPSBgQ2Fubm90IGFwcGx5ICcke3JlcXVlc3RlZEFubm90YXRpb25UeXBlfScgdG8gJyR7ZmllbGROYW1lfSc6YFxyXG4gICAgICAgICAgaWYgKGZyb3plbikge1xyXG4gICAgICAgICAgICAgIGVycm9yICs9IGBcXG5PYmplY3QgaXMgZnJvemVuLmBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzZWFsZWQpIHtcclxuICAgICAgICAgICAgICBlcnJvciArPSBgXFxuT2JqZWN0IGlzIHNlYWxlZC5gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWNvbmZpZ3VyYWJsZSkge1xyXG4gICAgICAgICAgICAgIGVycm9yICs9IGBcXG5wcm9wZXJ0eSBpcyBub3QgY29uZmlndXJhYmxlLmBcclxuICAgICAgICAgICAgICAvLyBNZW50aW9uIG9ubHkgaWYgY2F1c2VkIGJ5IHVzIHRvIGF2b2lkIGNvbmZ1c2lvblxyXG4gICAgICAgICAgICAgIGlmIChoYXNQcm9wKGFkbS5hcHBsaWVkQW5ub3RhdGlvbnMhLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGVycm9yICs9IGBcXG5UbyBwcmV2ZW50IGFjY2lkZW50YWwgcmUtZGVmaW5pdGlvbiBvZiBhIGZpZWxkIGJ5IGEgc3ViY2xhc3MsIGBcclxuICAgICAgICAgICAgICAgICAgZXJyb3IgKz0gYGFsbCBhbm5vdGF0ZWQgZmllbGRzIG9mIG5vbi1wbGFpbiBvYmplY3RzIChjbGFzc2VzKSBhcmUgbm90IGNvbmZpZ3VyYWJsZS5gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGllKGVycm9yKVxyXG4gICAgICB9XHJcbiAgfVxyXG4gICovXG4gIC8vIE5vdCBhbm5vdGF0ZWRcblxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWlzT3ZlcnJpZGUoYW5ub3RhdGlvbikgJiYgaGFzUHJvcChhZG0uYXBwbGllZEFubm90YXRpb25zXywga2V5KSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSBhZG0ubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpO1xuICAgIHZhciBjdXJyZW50QW5ub3RhdGlvblR5cGUgPSBhZG0uYXBwbGllZEFubm90YXRpb25zX1trZXldLmFubm90YXRpb25UeXBlXztcbiAgICB2YXIgcmVxdWVzdGVkQW5ub3RhdGlvblR5cGUgPSBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlXztcbiAgICBkaWUoXCJDYW5ub3QgYXBwbHkgJ1wiICsgcmVxdWVzdGVkQW5ub3RhdGlvblR5cGUgKyBcIicgdG8gJ1wiICsgZmllbGROYW1lICsgXCInOlwiICsgKFwiXFxuVGhlIGZpZWxkIGlzIGFscmVhZHkgYW5ub3RhdGVkIHdpdGggJ1wiICsgY3VycmVudEFubm90YXRpb25UeXBlICsgXCInLlwiKSArIFwiXFxuUmUtYW5ub3RhdGluZyBmaWVsZHMgaXMgbm90IGFsbG93ZWQuXCIgKyBcIlxcblVzZSAnb3ZlcnJpZGUnIGFubm90YXRpb24gZm9yIG1ldGhvZHMgb3ZlcnJpZGVuIGJ5IHN1YmNsYXNzLlwiKTtcbiAgfVxufVxuXG4vKipcclxuICogVGhpcyBhcnJheSBidWZmZXIgY29udGFpbnMgdHdvIGxpc3RzIG9mIHByb3BlcnRpZXMsIHNvIHRoYXQgYWxsIGFycmF5c1xyXG4gKiBjYW4gcmVjeWNsZSB0aGVpciBwcm9wZXJ0eSBkZWZpbml0aW9ucywgd2hpY2ggc2lnbmlmaWNhbnRseSBpbXByb3ZlcyBwZXJmb3JtYW5jZSBvZiBjcmVhdGluZ1xyXG4gKiBwcm9wZXJ0aWVzIG9uIHRoZSBmbHkuXHJcbiAqL1xuXG52YXIgT0JTRVJWQUJMRV9BUlJBWV9CVUZGRVJfU0laRSA9IDA7IC8vIFR5cGVzY3JpcHQgd29ya2Fyb3VuZCB0byBtYWtlIHN1cmUgT2JzZXJ2YWJsZUFycmF5IGV4dGVuZHMgQXJyYXlcblxudmFyIFN0dWJBcnJheSA9IGZ1bmN0aW9uIFN0dWJBcnJheSgpIHt9O1xuXG5mdW5jdGlvbiBpbmhlcml0KGN0b3IsIHByb3RvKSB7XG4gIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY3Rvci5wcm90b3R5cGUsIHByb3RvKTtcbiAgfSBlbHNlIGlmIChjdG9yLnByb3RvdHlwZS5fX3Byb3RvX18gIT09IHVuZGVmaW5lZCkge1xuICAgIGN0b3IucHJvdG90eXBlLl9fcHJvdG9fXyA9IHByb3RvO1xuICB9IGVsc2Uge1xuICAgIGN0b3IucHJvdG90eXBlID0gcHJvdG87XG4gIH1cbn1cblxuaW5oZXJpdChTdHViQXJyYXksIEFycmF5LnByb3RvdHlwZSk7IC8vIFdlZXggcHJvdG8gZnJlZXplIHByb3RlY3Rpb24gd2FzIGhlcmUsXG4vLyBidXQgaXQgaXMgdW5jbGVhciB3aHkgdGhlIGhhY2sgaXMgbmVlZCBhcyBNb2JYIG5ldmVyIGNoYW5nZWQgdGhlIHByb3RvdHlwZVxuLy8gYW55d2F5LCBzbyByZW1vdmVkIGl0IGluIFY2XG5cbnZhciBMZWdhY3lPYnNlcnZhYmxlQXJyYXkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdHViQXJyYXkpIHtcbiAgX2luaGVyaXRzTG9vc2UoTGVnYWN5T2JzZXJ2YWJsZUFycmF5LCBfU3R1YkFycmF5KTtcblxuICBmdW5jdGlvbiBMZWdhY3lPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUsIG93bmVkKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgICAgbmFtZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVBcnJheVwiO1xuICAgIH1cblxuICAgIGlmIChvd25lZCA9PT0gdm9pZCAwKSB7XG4gICAgICBvd25lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIF90aGlzID0gX1N0dWJBcnJheS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQsIHRydWUpO1xuICAgIGFkbS5wcm94eV8gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICBhZGRIaWRkZW5GaW5hbFByb3AoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICRtb2J4LCBhZG0pO1xuXG4gICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHZhciBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCh0cnVlKTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgICBfdGhpcy5zcGxpY2VXaXRoQXJyYXkoMCwgMCwgaW5pdGlhbFZhbHVlcyk7XG5cbiAgICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMZWdhY3lPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgdGhpc1skbW9ieF0uYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcnJheXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcnJheXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkodGhpcy5zbGljZSgpLCAvL0B0cy1pZ25vcmVcbiAgICBhcnJheXMubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gaXNPYnNlcnZhYmxlQXJyYXkoYSkgPyBhLnNsaWNlKCkgOiBhO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG9bU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBzZWxmLmxlbmd0aCA/IHtcbiAgICAgICAgICB2YWx1ZTogc2VsZltuZXh0SW5kZXgrK10sXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoTGVnYWN5T2JzZXJ2YWJsZUFycmF5LCBbe1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5nZXRBcnJheUxlbmd0aF8oKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0xlbmd0aCkge1xuICAgICAgdGhpc1skbW9ieF0uc2V0QXJyYXlMZW5ndGhfKG5ld0xlbmd0aCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBTeW1ib2wudG9TdHJpbmdUYWcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJBcnJheVwiO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMZWdhY3lPYnNlcnZhYmxlQXJyYXk7XG59KFN0dWJBcnJheSk7XG5cbk9iamVjdC5lbnRyaWVzKGFycmF5RXh0ZW5zaW9ucykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgcHJvcCA9IF9yZWZbMF0sXG4gICAgICBmbiA9IF9yZWZbMV07XG4gIGlmIChwcm9wICE9PSBcImNvbmNhdFwiKSBhZGRIaWRkZW5Qcm9wKExlZ2FjeU9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIHByb3AsIGZuKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVBcnJheUVudHJ5RGVzY3JpcHRvcihpbmRleCkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5nZXRfKGluZGV4KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzWyRtb2J4XS5zZXRfKGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJheUJ1ZmZlckl0ZW0oaW5kZXgpIHtcbiAgZGVmaW5lUHJvcGVydHkoTGVnYWN5T2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZSwgXCJcIiArIGluZGV4LCBjcmVhdGVBcnJheUVudHJ5RGVzY3JpcHRvcihpbmRleCkpO1xufVxuXG5mdW5jdGlvbiByZXNlcnZlQXJyYXlCdWZmZXIobWF4KSB7XG4gIGlmIChtYXggPiBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFOyBpbmRleCA8IG1heCArIDEwMDsgaW5kZXgrKykge1xuICAgICAgY3JlYXRlQXJyYXlCdWZmZXJJdGVtKGluZGV4KTtcbiAgICB9XG5cbiAgICBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFID0gbWF4O1xuICB9XG59XG5yZXNlcnZlQXJyYXlCdWZmZXIoMTAwMCk7XG5mdW5jdGlvbiBjcmVhdGVMZWdhY3lBcnJheShpbml0aWFsVmFsdWVzLCBlbmhhbmNlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IExlZ2FjeU9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBlbmhhbmNlciwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0b20odGhpbmcsIHByb3BlcnR5KSB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIgJiYgdGhpbmcgIT09IG51bGwpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpKSB7XG4gICAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkgZGllKDIzKTtcbiAgICAgIHJldHVybiB0aGluZ1skbW9ieF0uYXRvbV87XG4gICAgfVxuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldCh0aGluZykpIHtcbiAgICAgIHJldHVybiB0aGluZ1skbW9ieF07XG4gICAgfVxuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpbmcua2V5c0F0b21fO1xuICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGluZy5kYXRhXy5nZXQocHJvcGVydHkpIHx8IHRoaW5nLmhhc01hcF8uZ2V0KHByb3BlcnR5KTtcbiAgICAgIGlmICghb2JzZXJ2YWJsZSkgZGllKDI1LCBwcm9wZXJ0eSwgZ2V0RGVidWdOYW1lKHRoaW5nKSk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xuICAgICAgaWYgKCFwcm9wZXJ0eSkgcmV0dXJuIGRpZSgyNik7XG5cbiAgICAgIHZhciBfb2JzZXJ2YWJsZSA9IHRoaW5nWyRtb2J4XS52YWx1ZXNfLmdldChwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghX29ic2VydmFibGUpIGRpZSgyNywgcHJvcGVydHksIGdldERlYnVnTmFtZSh0aGluZykpO1xuICAgICAgcmV0dXJuIF9vYnNlcnZhYmxlO1xuICAgIH1cblxuICAgIGlmIChpc0F0b20odGhpbmcpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh0aGluZykgfHwgaXNSZWFjdGlvbih0aGluZykpIHtcbiAgICAgIHJldHVybiB0aGluZztcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGluZykpIHtcbiAgICBpZiAoaXNSZWFjdGlvbih0aGluZ1skbW9ieF0pKSB7XG4gICAgICAvLyBkaXNwb3NlciBmdW5jdGlvblxuICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XTtcbiAgICB9XG4gIH1cblxuICBkaWUoMjgpO1xufVxuZnVuY3Rpb24gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KSB7XG4gIGlmICghdGhpbmcpIGRpZSgyOSk7XG4gIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24oZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbiAgaWYgKGlzQXRvbSh0aGluZykgfHwgaXNDb21wdXRlZFZhbHVlKHRoaW5nKSB8fCBpc1JlYWN0aW9uKHRoaW5nKSkgcmV0dXJuIHRoaW5nO1xuICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVTZXQodGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGlmICh0aGluZ1skbW9ieF0pIHJldHVybiB0aGluZ1skbW9ieF07XG4gIGRpZSgyNCwgdGhpbmcpO1xufVxuZnVuY3Rpb24gZ2V0RGVidWdOYW1lKHRoaW5nLCBwcm9wZXJ0eSkge1xuICB2YXIgbmFtZWQ7XG5cbiAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lZCA9IGdldEF0b20odGhpbmcsIHByb3BlcnR5KTtcbiAgfSBlbHNlIGlmIChpc0FjdGlvbih0aGluZykpIHtcbiAgICByZXR1cm4gdGhpbmcubmFtZTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSkge1xuICAgIG5hbWVkID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpO1xuICB9IGVsc2Uge1xuICAgIC8vIHZhbGlkIGZvciBhcnJheXMgYXMgd2VsbFxuICAgIG5hbWVkID0gZ2V0QXRvbSh0aGluZyk7XG4gIH1cblxuICByZXR1cm4gbmFtZWQubmFtZV87XG59XG5cbnZhciB0b1N0cmluZyA9IG9iamVjdFByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiLCBkZXB0aCkge1xuICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgIGRlcHRoID0gLTE7XG4gIH1cblxuICByZXR1cm4gZXEoYSwgYiwgZGVwdGgpO1xufSAvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvYmxvYi81YzIzN2E3YzY4MmZiNjhmZDUzNzgyMDNmMGJmMjJkY2UxNjI0ODU0L3VuZGVyc2NvcmUuanMjTDExODYtTDEyODlcbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG5cbmZ1bmN0aW9uIGVxKGEsIGIsIGRlcHRoLCBhU3RhY2ssIGJTdGFjaykge1xuICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiOyAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlOyAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuXG4gIGlmIChhICE9PSBhKSByZXR1cm4gYiAhPT0gYjsgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgaWYgKCFpc0Z1bmN0aW9uKHR5cGUpICYmIHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgIT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlOyAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuXG4gIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG5cbiAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICBjYXNlIFwiW29iamVjdCBSZWdFeHBdXCI6IC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG5cbiAgICBjYXNlIFwiW29iamVjdCBTdHJpbmddXCI6XG4gICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgcmV0dXJuIFwiXCIgKyBhID09PSBcIlwiICsgYjtcblxuICAgIGNhc2UgXCJbb2JqZWN0IE51bWJlcl1cIjpcbiAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7IC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG5cbiAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG5cbiAgICBjYXNlIFwiW29iamVjdCBEYXRlXVwiOlxuICAgIGNhc2UgXCJbb2JqZWN0IEJvb2xlYW5dXCI6XG4gICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICByZXR1cm4gK2EgPT09ICtiO1xuXG4gICAgY2FzZSBcIltvYmplY3QgU3ltYm9sXVwiOlxuICAgICAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sLnZhbHVlT2YuY2FsbChiKTtcblxuICAgIGNhc2UgXCJbb2JqZWN0IE1hcF1cIjpcbiAgICBjYXNlIFwiW29iamVjdCBTZXRdXCI6XG4gICAgICAvLyBNYXBzIGFuZCBTZXRzIGFyZSB1bndyYXBwZWQgdG8gYXJyYXlzIG9mIGVudHJ5LXBhaXJzLCBhZGRpbmcgYW4gaW5jaWRlbnRhbCBsZXZlbC5cbiAgICAgIC8vIEhpZGUgdGhpcyBleHRyYSBsZXZlbCBieSBpbmNyZWFzaW5nIHRoZSBkZXB0aC5cbiAgICAgIGlmIChkZXB0aCA+PSAwKSB7XG4gICAgICAgIGRlcHRoKys7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuXG5cbiAgYSA9IHVud3JhcChhKTtcbiAgYiA9IHVud3JhcChiKTtcbiAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuXG4gIGlmICghYXJlQXJyYXlzKSB7XG4gICAgaWYgKHR5cGVvZiBhICE9IFwib2JqZWN0XCIgfHwgdHlwZW9mIGIgIT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlOyAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuXG4gICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvcixcbiAgICAgICAgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKGlzRnVuY3Rpb24oYUN0b3IpICYmIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiYgaXNGdW5jdGlvbihiQ3RvcikgJiYgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikgJiYgXCJjb25zdHJ1Y3RvclwiIGluIGEgJiYgXCJjb25zdHJ1Y3RvclwiIGluIGIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGVwdGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZGVwdGggPCAwKSB7XG4gICAgZGVwdGggPSAtMTtcbiAgfSAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cblxuXG4gIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gIH0gLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuXG5cbiAgYVN0YWNrLnB1c2goYSk7XG4gIGJTdGFjay5wdXNoKGIpOyAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cblxuICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTsgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgZGVwdGggLSAxLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIga2V5O1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoOyAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICBrZXkgPSBrZXlzW2xlbmd0aF07XG4gICAgICBpZiAoIShoYXNQcm9wKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGRlcHRoIC0gMSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cblxuXG4gIGFTdGFjay5wb3AoKTtcbiAgYlN0YWNrLnBvcCgpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdW53cmFwKGEpIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KGEpKSByZXR1cm4gYS5zbGljZSgpO1xuICBpZiAoaXNFUzZNYXAoYSkgfHwgaXNPYnNlcnZhYmxlTWFwKGEpKSByZXR1cm4gQXJyYXkuZnJvbShhLmVudHJpZXMoKSk7XG4gIGlmIChpc0VTNlNldChhKSB8fCBpc09ic2VydmFibGVTZXQoYSkpIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIG1ha2VJdGVyYWJsZShpdGVyYXRvcikge1xuICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZ2V0U2VsZjtcbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxmKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaXNBbm5vdGF0aW9uKHRoaW5nKSB7XG4gIHJldHVybiAoLy8gQ2FuIGJlIGZ1bmN0aW9uXG4gICAgdGhpbmcgaW5zdGFuY2VvZiBPYmplY3QgJiYgdHlwZW9mIHRoaW5nLmFubm90YXRpb25UeXBlXyA9PT0gXCJzdHJpbmdcIiAmJiBpc0Z1bmN0aW9uKHRoaW5nLm1ha2VfKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLmV4dGVuZF8pXG4gICk7XG59XG5cbi8qKlxyXG4gKiAoYykgTWljaGVsIFdlc3RzdHJhdGUgMjAxNSAtIDIwMjBcclxuICogTUlUIExpY2Vuc2VkXHJcbiAqXHJcbiAqIFdlbGNvbWUgdG8gdGhlIG1vYnggc291cmNlcyEgVG8gZ2V0IGFuIGdsb2JhbCBvdmVydmlldyBvZiBob3cgTW9iWCBpbnRlcm5hbGx5IHdvcmtzLFxyXG4gKiB0aGlzIGlzIGEgZ29vZCBwbGFjZSB0byBzdGFydDpcclxuICogaHR0cHM6Ly9tZWRpdW0uY29tL0Btd2VzdHN0cmF0ZS9iZWNvbWluZy1mdWxseS1yZWFjdGl2ZS1hbi1pbi1kZXB0aC1leHBsYW5hdGlvbi1vZi1tb2JzZXJ2YWJsZS01NTk5NTI2MmEyNTQjLnh2Ymg2cWQ3NFxyXG4gKlxyXG4gKiBTb3VyY2UgZm9sZGVyczpcclxuICogPT09PT09PT09PT09PT09XHJcbiAqXHJcbiAqIC0gYXBpLyAgICAgTW9zdCBvZiB0aGUgcHVibGljIHN0YXRpYyBtZXRob2RzIGV4cG9zZWQgYnkgdGhlIG1vZHVsZSBjYW4gYmUgZm91bmQgaGVyZS5cclxuICogLSBjb3JlLyAgICBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgTW9iWCBhbGdvcml0aG07IGF0b21zLCBkZXJpdmF0aW9ucywgcmVhY3Rpb25zLCBkZXBlbmRlbmN5IHRyZWVzLCBvcHRpbWl6YXRpb25zLiBDb29sIHN0dWZmIGNhbiBiZSBmb3VuZCBoZXJlLlxyXG4gKiAtIHR5cGVzLyAgIEFsbCB0aGUgbWFnaWMgdGhhdCBpcyBuZWVkIHRvIGhhdmUgb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIHZhbHVlcyBpcyBpbiB0aGlzIGZvbGRlci4gSW5jbHVkaW5nIHRoZSBtb2RpZmllcnMgbGlrZSBgYXNGbGF0YC5cclxuICogLSB1dGlscy8gICBVdGlsaXR5IHN0dWZmLlxyXG4gKlxyXG4gKi9cbltcIlN5bWJvbFwiLCBcIk1hcFwiLCBcIlNldFwiLCBcIlN5bWJvbFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gIHZhciBnID0gZ2V0R2xvYmFsKCk7XG5cbiAgaWYgKHR5cGVvZiBnW21dID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZGllKFwiTW9iWCByZXF1aXJlcyBnbG9iYWwgJ1wiICsgbSArIFwiJyB0byBiZSBhdmFpbGFibGUgb3IgcG9seWZpbGxlZFwiKTtcbiAgfVxufSk7XG5cbmlmICh0eXBlb2YgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09IFwib2JqZWN0XCIpIHtcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5keWtvZy9tb2J4LWRldnRvb2xzL1xuICBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3RNb2J4KHtcbiAgICBzcHk6IHNweSxcbiAgICBleHRyYXM6IHtcbiAgICAgIGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lXG4gICAgfSxcbiAgICAkbW9ieDogJG1vYnhcbiAgfSk7XG59XG5cbmV4cG9ydCB7ICRtb2J4LCBGbG93Q2FuY2VsbGF0aW9uRXJyb3IsIE9ic2VydmFibGVNYXAsIE9ic2VydmFibGVTZXQsIFJlYWN0aW9uLCBhbGxvd1N0YXRlQ2hhbmdlcyBhcyBfYWxsb3dTdGF0ZUNoYW5nZXMsIHJ1bkluQWN0aW9uIGFzIF9hbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkLCBhbGxvd1N0YXRlUmVhZHNFbmQgYXMgX2FsbG93U3RhdGVSZWFkc0VuZCwgYWxsb3dTdGF0ZVJlYWRzU3RhcnQgYXMgX2FsbG93U3RhdGVSZWFkc1N0YXJ0LCBhdXRvQWN0aW9uIGFzIF9hdXRvQWN0aW9uLCBfZW5kQWN0aW9uLCBnZXRBZG1pbmlzdHJhdGlvbiBhcyBfZ2V0QWRtaW5pc3RyYXRpb24sIGdldEdsb2JhbFN0YXRlIGFzIF9nZXRHbG9iYWxTdGF0ZSwgaW50ZXJjZXB0UmVhZHMgYXMgX2ludGVyY2VwdFJlYWRzLCBpc0NvbXB1dGluZ0Rlcml2YXRpb24gYXMgX2lzQ29tcHV0aW5nRGVyaXZhdGlvbiwgcmVzZXRHbG9iYWxTdGF0ZSBhcyBfcmVzZXRHbG9iYWxTdGF0ZSwgX3N0YXJ0QWN0aW9uLCBhY3Rpb24sIGF1dG9ydW4sIGNvbXBhcmVyLCBjb21wdXRlZCwgY29uZmlndXJlLCBjcmVhdGVBdG9tLCBhcGlEZWZpbmVQcm9wZXJ0eSBhcyBkZWZpbmVQcm9wZXJ0eSwgZW50cmllcywgZXh0ZW5kT2JzZXJ2YWJsZSwgZmxvdywgZmxvd1Jlc3VsdCwgZ2V0LCBnZXRBdG9tLCBnZXREZWJ1Z05hbWUsIGdldERlcGVuZGVuY3lUcmVlLCBnZXRPYnNlcnZlclRyZWUsIGhhcywgaW50ZXJjZXB0LCBpc0FjdGlvbiwgaXNPYnNlcnZhYmxlVmFsdWUgYXMgaXNCb3hlZE9ic2VydmFibGUsIGlzQ29tcHV0ZWQsIGlzQ29tcHV0ZWRQcm9wLCBpc0Zsb3csIGlzRmxvd0NhbmNlbGxhdGlvbkVycm9yLCBpc09ic2VydmFibGUsIGlzT2JzZXJ2YWJsZUFycmF5LCBpc09ic2VydmFibGVNYXAsIGlzT2JzZXJ2YWJsZU9iamVjdCwgaXNPYnNlcnZhYmxlUHJvcCwgaXNPYnNlcnZhYmxlU2V0LCBrZXlzLCBtYWtlQXV0b09ic2VydmFibGUsIG1ha2VPYnNlcnZhYmxlLCBvYnNlcnZhYmxlLCBvYnNlcnZlLCBvbkJlY29tZU9ic2VydmVkLCBvbkJlY29tZVVub2JzZXJ2ZWQsIG9uUmVhY3Rpb25FcnJvciwgb3ZlcnJpZGUsIGFwaU93bktleXMgYXMgb3duS2V5cywgcmVhY3Rpb24sIHJlbW92ZSwgcnVuSW5BY3Rpb24sIHNldCwgc3B5LCB0b0pTLCB0cmFjZSwgdHJhbnNhY3Rpb24sIHVudHJhY2tlZCwgdmFsdWVzLCB3aGVuIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2J4LmVzbS5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBmdW5jdGlvbiBsb2codGFyZ2V0KXtcclxuLy8gICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQucHJvdG90eXBlKVxyXG4vLyAgICAgY29uc29sZS5sb2coZGVzYylcclxuLy8gICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRlc2MpKXtcclxuLy8gICAgICAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKXtcclxuLy8gICAgICAgICAgICAgY29udGludWU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNvbnN0IGZ1bmMgPSBkZXNjW2tleV1cclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhmdW5jKVxyXG4vLyAgICAgICAgIGlmKHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nKXsgXHJcbi8vICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQucHJvdG90eXBlLCBrZXksIHtcclxuLy8gICAgICAgICAgICAgICAgIHZhbHVlICguLi5hcmdzKXtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlJysga2V5KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncylcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXInKyBrZXkpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcmVhZG9ubHkodGFyZ2V0LGtleSxkZXNjKXtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRlc2MpXHJcbi8vICAgICBkZXNjLndyaXRhYmxlID0gZmFsc2U7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gdmFsaWRhdGUodGFyZ2V0LGtleSxkZXNjKXtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRlc2MpXHJcbi8vICAgICBjb25zdCBmdW5jID0gZGVzYy52YWx1ZVxyXG4vLyAgICAgZGVzYy52YWx1ZSA9IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xyXG4vLyAgICAgICAgIGZvcihsZXQgbnVtIG9mIGFyZ3Mpe1xyXG4vLyAgICAgICAgICAgICBpZih0eXBlb2YgbnVtICE9PSAnbnVtYmVyJyl7XHJcbi8vICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIG51bWJlcicpXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgcmV0dXJuICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIEBsb2dcclxuLy8gY2xhc3MgTnVtYmVyaWMge1xyXG4vLyAgICBAcmVhZG9ubHkgUEkgPSAzLjE0MTU5MjZcclxuLy8gICAgQHZhbGlkYXRlXHJcbi8vICAgICBhZGQoLi4ubnVtcyl7XHJcbi8vICAgICAgICAgcmV0dXJuIG51bXMucmVkdWNlKChwLG4pPT4ocCtuKSwwKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGNvbnN0IG51bSA9IG5ldyBOdW1iZXJpYygpLmFkZCgxLCcyJylcclxuLy8gLy8gY29uc29sZS5sb2coTnVtYmVyaWMucHJvdG90eXBlLG51bSlcclxuLy8gbmV3IE51bWJlcmljKCkuUEkgPSAxMDBcclxuXHJcbi8vIG1vYnhcclxuaW1wb3J0IHtvYnNlcnZhYmxlLGNvbXB1dGVkLGF1dG9ydW59IGZyb20gJ21vYngnXHJcbi8vIG9ic2VydmFibGUuYm94XHJcbnZhciBudW0gPSBvYnNlcnZhYmxlLmJveCgyMClcclxudmFyIHN0ciA9IG9ic2VydmFibGUuYm94KCcyMCcpXHJcbnZhciBib29sID0gb2JzZXJ2YWJsZS5ib3goZmFsc2UpXHJcbmNvbnNvbGUubG9nKG51bS5nZXQoKSxzdHIuZ2V0KCksYm9vbC5nZXQoKSlcclxubnVtLnNldCg1MClcclxuc3RyLnNldCgnNTAnKVxyXG5ib29sLnNldCh0cnVlKVxyXG5jb25zb2xlLmxvZyhudW0uZ2V0KCksc3RyLmdldCgpLGJvb2wuZ2V0KCkpXHJcbi8vIGFycmF5ICBvYmplY3QgIG1hcCBcclxuIGNvbnN0IGFycj0gb2JzZXJ2YWJsZShbJ2EnLCAnYiddKVxyXG4gY29uc3Qgb2JqPSBvYnNlcnZhYmxlKHthOjEsIGI6Mn0pXHJcbiBjb25zdCBtYXAgPSBvYnNlcnZhYmxlKG5ldyBNYXAoKSlcclxuIGNvbnNvbGUubG9nKGFycixBcnJheS5pc0FycmF5KGFycikpXHJcbiBjb25zb2xlLmxvZyhvYmouYSxvYmouYilcclxuIG1hcC5zZXQoJ2EnLDEpXHJcbiBjb25zb2xlLmxvZyhtYXAuaGFzKCdhJykpXHJcbiBjb25zb2xlLmxvZyhtYXApXHJcblxyXG4vLyAgY2xhc3MgXHJcbmNsYXNzIFN0b3JlIHtcclxuICAgIEBvYnNlcnZhYmxlIGFycmF5ID0gW11cclxuICAgIEBvYnNlcnZhYmxlIG9iaiA9IHt9XHJcbiAgICBAb2JzZXJ2YWJsZSBtYXAgPSBuZXcgTWFwKClcclxuXHJcbiAgICBAb2JzZXJ2YWJsZSBzdHIgPSAnaGVsbG8nXHJcbiAgICBAb2JzZXJ2YWJsZSBudW0gPSAxMFxyXG4gICAgQG9ic2VydmFibGUgYm9vbCA9IHRydWVcclxuICAgIFxyXG4gICAgQG9ic2VydmFibGUgcHJpY2UgPSAyMDtcclxuICAgIEBvYnNlcnZhYmxlIGFtb3VudCA9IDE7XHJcblxyXG4gICAgQGNvbXB1dGVkIGdldCB0b3RhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZSAqIHRoaXMuYW1vdW50O1xyXG4gICAgfVxyXG5cclxufVxyXG4vLyBjb21wdXRlZCBcclxudmFyIHN0b3JlID0gbmV3IFN0b3JlKClcclxuXHJcbi8vIHZhciByZXM9Y29tcHV0ZWQoKCk9PntcclxuLy8gICAgIHJldHVybiBzdG9yZS5zdHIgKyAnLycrIHN0b3JlLm51bVxyXG4vLyB9KVxyXG5cclxuLy8gY29uc29sZS5sb2cocmVzLmdldCgpKVxyXG4vLyBzdG9yZS5zdHI9J3dvcmxkJ1xyXG4vLyBzdG9yZS5udW09MzBcclxuLy8gY29uc29sZS5sb2cocmVzLmdldCgpKVxyXG4vLyBjb25zb2xlLmxvZyhzdG9yZS50b3RhbClcclxuLy8gIGF1dG9ydW4gXHJcbmF1dG9ydW4oKCk9PntcclxuICAgIGNvbnNvbGUubG9nKHN0b3JlLnN0ciArICcvJysgc3RvcmUubnVtKVxyXG59KVxyXG5zdG9yZS5zdHI9J3dvcmxkMSdcclxuc3RvcmUubnVtPTMwMlxyXG4iXSwic291cmNlUm9vdCI6IiJ9