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


import ApiClient from "../ApiClient";
import Project from '../model/Project';
import ProjectInput from '../model/ProjectInput';
import Projects from '../model/Projects';

/**
* Project service.
* @module api/ProjectApi
* @version 1.0.0
*/
export default class ProjectApi {

    /**
    * Constructs a new ProjectApi. 
    * @alias module:api/ProjectApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * get projects
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Projects} and HTTP response
     */
    projectGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = Projects;
      return this.apiClient.callApi(
        '/project', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get projects
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Projects}
     */
    projectGet() {
      return this.projectGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * post project
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectInput} [project] project information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    projectPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['project'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = Project;
      return this.apiClient.callApi(
        '/project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * post project
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectInput} opts.project project information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    projectPost(opts) {
      return this.projectPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete project
     * @param {Number} projectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    projectProjectIdDeleteWithHttpInfo(projectId) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdDelete");
      }

      let pathParams = {
        'project_id': projectId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = Project;
      return this.apiClient.callApi(
        '/project/{project_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete project
     * @param {Number} projectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    projectProjectIdDelete(projectId) {
      return this.projectProjectIdDeleteWithHttpInfo(projectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * patch project
     * @param {Number} projectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectInput} [project] project information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    projectProjectIdPatchWithHttpInfo(projectId, opts) {
      opts = opts || {};
      let postBody = opts['project'];
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdPatch");
      }

      let pathParams = {
        'project_id': projectId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = Project;
      return this.apiClient.callApi(
        '/project/{project_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * patch project
     * @param {Number} projectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectInput} opts.project project information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    projectProjectIdPatch(projectId, opts) {
      return this.projectProjectIdPatchWithHttpInfo(projectId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}