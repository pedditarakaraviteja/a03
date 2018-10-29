// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 


//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;
QUnit.test('Testing calculate square,reverse,strong number', function (assert) {
    assert.equal(square(5),25, 'Tested Square function with value 5');
    assert.equal(reverse(253),352, 'Tested Reverse number with value 253');
    assert.equal(strongnumber(145),"Strong Number", 'Tested Strong number with value 145');
    assert.equal(strongnumber(114),"Not a Strong Number", 'Tested not a Strong number with value 114');

//  assert.equal(strongnumber(145), strongnumber, 'Tested Strong number with value 145');
        //throws( block                                    [, expected ] [, message ] ) 
    assert.throws(function () { square(); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
        //throws( block                                    [, expected ] [, message ] ) 
  assert.throws(function () { reverse(); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
   

});