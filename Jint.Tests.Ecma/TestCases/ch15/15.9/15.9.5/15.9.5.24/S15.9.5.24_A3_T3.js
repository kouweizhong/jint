// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype.getMilliseconds property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.24/S15.9.5.24_A3_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.getMilliseconds.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.getMilliseconds.length property has the attribute DontEnum');
}

for(x in Date.prototype.getMilliseconds) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.getMilliseconds.length has the attribute DontEnum');
  }
}


