// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Global object properties have attributes { DontEnum }
 *
 * @path ch10/10.2/10.2.3/S10.2.3_A2.1_T3.js
 * @description Global execution context - Constructor Properties
 */

//CHECK#1
for (var x in this) {
  if ( x === 'Object' ) {
    $ERROR("#1: 'property 'Object' have attribute DontEnum");
  } else if ( x === 'Function') {
    $ERROR("#1: 'Function' have attribute DontEnum");
  } else if ( x === 'String' ) {
    $ERROR("#1: 'String' have attribute DontEnum");
  } else if ( x === 'Number' ) {
    $ERROR("#1: 'Number' have attribute DontEnum");
  } else if ( x === 'Array' ) {
    $ERROR("#1: 'Array' have attribute DontEnum");
  } else if ( x === 'Boolean' ) {
    $ERROR("#1: 'Boolean' have attribute DontEnum");
  } else if ( x === 'Date' ) {
    $ERROR("#1: 'Date' have attribute DontEnum");
  } else if ( x === 'RegExp' ) {
    $ERROR("#1: 'RegExp' have attribute DontEnum");
  } else if ( x === 'Error' ) {
    $ERROR("#1: 'Error' have attribute DontEnum");
  } else if ( x === 'EvalError' ) {
    $ERROR("#1: 'EvalError' have attribute DontEnum");
  } else if ( x === 'RangeError' ) {
    $ERROR("#1: 'RangeError' have attribute DontEnum");
  } else if ( x === 'ReferenceError' ) {
    $ERROR("#1: 'ReferenceError' have attribute DontEnum");
  } else if ( x === 'SyntaxError' ) {
    $ERROR("#1: 'SyntaxError' have attribute DontEnum");
  } else if ( x === 'TypeError' ) {
    $ERROR("#1: 'TypeError' have attribute DontEnum");
  } else if ( x === 'URIError' ) {
    $ERROR("#1: 'URIError' have attribute DontEnum");
  }
}

