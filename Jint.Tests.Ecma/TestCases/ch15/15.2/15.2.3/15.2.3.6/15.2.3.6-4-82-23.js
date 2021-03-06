/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-82-23.js
 * @description Object.defineProperty - Update [[Enumerable]] and [[Configurable]] attributes of 'name' property to false successfully when [[Enumerable]] and [[Configurable]] attributes of 'name' property are true,  the 'desc' is a generic descriptor which contains [[Enumerable]] and [[Configurable]] attributes as false, 'name' property is an index accessor property (8.12.9 step 8)
 */


function testcase() {

        var obj = {};
        obj.verifySetFunction = "data";
        var get_func = function () {
            return obj.verifySetFunction;
        };
        var set_func = function (value) {
            obj.verifySetFunction = value;
        };
        Object.defineProperty(obj, "0", {
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(obj, "0", {
            enumerable: false,
            configurable: false
        });

        return accessorPropertyAttributesAreCorrect(obj, "0", get_func, set_func, "verifySetFunction", false, false);
    }
runTestCase(testcase);
