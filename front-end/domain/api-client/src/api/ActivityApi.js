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
import Activity from '../model/Activity';

/**
* Activity service.
* @module api/ActivityApi
* @version 1.0.0
*/
export default class ActivityApi {

    /**
    * Constructs a new ActivityApi. 
    * @alias module:api/ActivityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * delete activity
     * @param {Number} activityId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Activity} and HTTP response
     */
    activityActivityIdDeleteWithHttpInfo(activityId) {
      let postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling activityActivityIdDelete");
      }

      let pathParams = {
        'activity_id': activityId
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
      let returnType = Activity;
      return this.apiClient.callApi(
        '/activity/{activity_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete activity
     * @param {Number} activityId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Activity}
     */
    activityActivityIdDelete(activityId) {
      return this.activityActivityIdDeleteWithHttpInfo(activityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get activity
     * @param {Number} activityId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Activity} and HTTP response
     */
    activityActivityIdGetWithHttpInfo(activityId) {
      let postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling activityActivityIdGet");
      }

      let pathParams = {
        'activity_id': activityId
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
      let returnType = Activity;
      return this.apiClient.callApi(
        '/activity/{activity_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get activity
     * @param {Number} activityId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Activity}
     */
    activityActivityIdGet(activityId) {
      return this.activityActivityIdGetWithHttpInfo(activityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * patch activity
     * @param {Number} activityId 
     * @param {Object} opts Optional parameters
     * @param {String} [activityTitle] 
     * @param {String} [activitySubTitle] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Activity} and HTTP response
     */
    activityActivityIdPatchWithHttpInfo(activityId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling activityActivityIdPatch");
      }

      let pathParams = {
        'activity_id': activityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'activity_title': opts['activityTitle'],
        'activity_sub_title': opts['activitySubTitle']
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = Activity;
      return this.apiClient.callApi(
        '/activity/{activity_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * patch activity
     * @param {Number} activityId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.activityTitle 
     * @param {String} opts.activitySubTitle 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Activity}
     */
    activityActivityIdPatch(activityId, opts) {
      return this.activityActivityIdPatchWithHttpInfo(activityId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * put activity
     * @param {Number} activityId 
     * @param {String} activityTitle 
     * @param {String} activitySubTitle 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Activity} and HTTP response
     */
    activityActivityIdPutWithHttpInfo(activityId, activityTitle, activitySubTitle) {
      let postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling activityActivityIdPut");
      }
      // verify the required parameter 'activityTitle' is set
      if (activityTitle === undefined || activityTitle === null) {
        throw new Error("Missing the required parameter 'activityTitle' when calling activityActivityIdPut");
      }
      // verify the required parameter 'activitySubTitle' is set
      if (activitySubTitle === undefined || activitySubTitle === null) {
        throw new Error("Missing the required parameter 'activitySubTitle' when calling activityActivityIdPut");
      }

      let pathParams = {
        'activity_id': activityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'activity_title': activityTitle,
        'activity_sub_title': activitySubTitle
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = Activity;
      return this.apiClient.callApi(
        '/activity/{activity_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * put activity
     * @param {Number} activityId 
     * @param {String} activityTitle 
     * @param {String} activitySubTitle 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Activity}
     */
    activityActivityIdPut(activityId, activityTitle, activitySubTitle) {
      return this.activityActivityIdPutWithHttpInfo(activityId, activityTitle, activitySubTitle)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * put activity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Activity} and HTTP response
     */
    activityGetWithHttpInfo() {
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
      let returnType = Activity;
      return this.apiClient.callApi(
        '/activity', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * put activity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Activity}
     */
    activityGet() {
      return this.activityGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * post activity
     * @param {String} activityTitle 
     * @param {String} activitySubTitle 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Activity} and HTTP response
     */
    activityPostWithHttpInfo(activityTitle, activitySubTitle) {
      let postBody = null;
      // verify the required parameter 'activityTitle' is set
      if (activityTitle === undefined || activityTitle === null) {
        throw new Error("Missing the required parameter 'activityTitle' when calling activityPost");
      }
      // verify the required parameter 'activitySubTitle' is set
      if (activitySubTitle === undefined || activitySubTitle === null) {
        throw new Error("Missing the required parameter 'activitySubTitle' when calling activityPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'activity_title': activityTitle,
        'activity_sub_title': activitySubTitle
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = Activity;
      return this.apiClient.callApi(
        '/activity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * post activity
     * @param {String} activityTitle 
     * @param {String} activitySubTitle 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Activity}
     */
    activityPost(activityTitle, activitySubTitle) {
      return this.activityPostWithHttpInfo(activityTitle, activitySubTitle)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}