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
import ProjectIcon from '../model/ProjectIcon';

/**
* ProjectIcon service.
* @module api/ProjectIconApi
* @version 1.0.0
*/
export default class ProjectIconApi {

    /**
    * Constructs a new ProjectIconApi. 
    * @alias module:api/ProjectIconApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * post project icon
     * @param {Number} projectId 
     * @param {File} projectIcon 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectIcon} and HTTP response
     */
    projectProjectIdProjectIconPostWithHttpInfo(projectId, projectIcon) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdProjectIconPost");
      }
      // verify the required parameter 'projectIcon' is set
      if (projectIcon === undefined || projectIcon === null) {
        throw new Error("Missing the required parameter 'projectIcon' when calling projectProjectIdProjectIconPost");
      }

      let pathParams = {
        'project_id': projectId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'project_icon': projectIcon
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = ProjectIcon;
      return this.apiClient.callApi(
        '/project/{project_id}/project-icon', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * post project icon
     * @param {Number} projectId 
     * @param {File} projectIcon 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectIcon}
     */
    projectProjectIdProjectIconPost(projectId, projectIcon) {
      return this.projectProjectIdProjectIconPostWithHttpInfo(projectId, projectIcon)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete project icon
     * @param {Number} projectId 
     * @param {String} projectIconUuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectIcon} and HTTP response
     */
    projectProjectIdProjectIconProjectIconUuidDeleteWithHttpInfo(projectId, projectIconUuid) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdProjectIconProjectIconUuidDelete");
      }
      // verify the required parameter 'projectIconUuid' is set
      if (projectIconUuid === undefined || projectIconUuid === null) {
        throw new Error("Missing the required parameter 'projectIconUuid' when calling projectProjectIdProjectIconProjectIconUuidDelete");
      }

      let pathParams = {
        'project_id': projectId,
        'project_icon_uuid': projectIconUuid
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
      let returnType = ProjectIcon;
      return this.apiClient.callApi(
        '/project/{project_id}/project-icon/{project_icon_uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete project icon
     * @param {Number} projectId 
     * @param {String} projectIconUuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectIcon}
     */
    projectProjectIdProjectIconProjectIconUuidDelete(projectId, projectIconUuid) {
      return this.projectProjectIdProjectIconProjectIconUuidDeleteWithHttpInfo(projectId, projectIconUuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get project icon
     * @param {Number} projectId 
     * @param {String} projectIconUuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    projectProjectIdProjectIconProjectIconUuidGetWithHttpInfo(projectId, projectIconUuid) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdProjectIconProjectIconUuidGet");
      }
      // verify the required parameter 'projectIconUuid' is set
      if (projectIconUuid === undefined || projectIconUuid === null) {
        throw new Error("Missing the required parameter 'projectIconUuid' when calling projectProjectIdProjectIconProjectIconUuidGet");
      }

      let pathParams = {
        'project_id': projectId,
        'project_icon_uuid': projectIconUuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/project/{project_id}/project-icon/{project_icon_uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get project icon
     * @param {Number} projectId 
     * @param {String} projectIconUuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    projectProjectIdProjectIconProjectIconUuidGet(projectId, projectIconUuid) {
      return this.projectProjectIdProjectIconProjectIconUuidGetWithHttpInfo(projectId, projectIconUuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}