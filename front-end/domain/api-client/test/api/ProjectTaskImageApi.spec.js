/**
 * widm-back-end
 * Nation Central University WIDM LAB back-end API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WidmBackEnd);
  }
}(this, function(expect, WidmBackEnd) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WidmBackEnd.ProjectTaskImageApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProjectTaskImageApi', function() {
    describe('projectTaskImageGet', function() {
      it('should call projectTaskImageGet successfully', function(done) {
        //uncomment below and update the code to test projectTaskImageGet
        //instance.projectTaskImageGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectTaskImagePost', function() {
      it('should call projectTaskImagePost successfully', function(done) {
        //uncomment below and update the code to test projectTaskImagePost
        //instance.projectTaskImagePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectTaskImageProjectTaskImageUuidDelete', function() {
      it('should call projectTaskImageProjectTaskImageUuidDelete successfully', function(done) {
        //uncomment below and update the code to test projectTaskImageProjectTaskImageUuidDelete
        //instance.projectTaskImageProjectTaskImageUuidDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectTaskImageProjectTaskImageUuidGet', function() {
      it('should call projectTaskImageProjectTaskImageUuidGet successfully', function(done) {
        //uncomment below and update the code to test projectTaskImageProjectTaskImageUuidGet
        //instance.projectTaskImageProjectTaskImageUuidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));