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
import PaperAuthor from '../model/PaperAuthor';
import PaperAuthors from '../model/PaperAuthors';

/**
* PaperAuthor service.
* @module api/PaperAuthorApi
* @version 1.0.0
*/
export default class PaperAuthorApi {

    /**
    * Constructs a new PaperAuthorApi. 
    * @alias module:api/PaperAuthorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * delete author
     * @param {Number} paperId 
     * @param {Number} authorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaperAuthor} and HTTP response
     */
    paperPaperIdPaperAuthorAuthorIdDeleteWithHttpInfo(paperId, authorId) {
      let postBody = null;
      // verify the required parameter 'paperId' is set
      if (paperId === undefined || paperId === null) {
        throw new Error("Missing the required parameter 'paperId' when calling paperPaperIdPaperAuthorAuthorIdDelete");
      }
      // verify the required parameter 'authorId' is set
      if (authorId === undefined || authorId === null) {
        throw new Error("Missing the required parameter 'authorId' when calling paperPaperIdPaperAuthorAuthorIdDelete");
      }

      let pathParams = {
        'paper_id': paperId,
        'author_id': authorId
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
      let returnType = PaperAuthor;
      return this.apiClient.callApi(
        '/paper/{paper_id}/paper-author/{author_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete author
     * @param {Number} paperId 
     * @param {Number} authorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaperAuthor}
     */
    paperPaperIdPaperAuthorAuthorIdDelete(paperId, authorId) {
      return this.paperPaperIdPaperAuthorAuthorIdDeleteWithHttpInfo(paperId, authorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get author
     * @param {Number} paperId 
     * @param {Number} authorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaperAuthor} and HTTP response
     */
    paperPaperIdPaperAuthorAuthorIdGetWithHttpInfo(paperId, authorId) {
      let postBody = null;
      // verify the required parameter 'paperId' is set
      if (paperId === undefined || paperId === null) {
        throw new Error("Missing the required parameter 'paperId' when calling paperPaperIdPaperAuthorAuthorIdGet");
      }
      // verify the required parameter 'authorId' is set
      if (authorId === undefined || authorId === null) {
        throw new Error("Missing the required parameter 'authorId' when calling paperPaperIdPaperAuthorAuthorIdGet");
      }

      let pathParams = {
        'paper_id': paperId,
        'author_id': authorId
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
      let returnType = PaperAuthor;
      return this.apiClient.callApi(
        '/paper/{paper_id}/paper-author/{author_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get author
     * @param {Number} paperId 
     * @param {Number} authorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaperAuthor}
     */
    paperPaperIdPaperAuthorAuthorIdGet(paperId, authorId) {
      return this.paperPaperIdPaperAuthorAuthorIdGetWithHttpInfo(paperId, authorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update author
     * @param {Number} paperId 
     * @param {Number} authorId 
     * @param {String} authorName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaperAuthor} and HTTP response
     */
    paperPaperIdPaperAuthorAuthorIdPatchWithHttpInfo(paperId, authorId, authorName) {
      let postBody = null;
      // verify the required parameter 'paperId' is set
      if (paperId === undefined || paperId === null) {
        throw new Error("Missing the required parameter 'paperId' when calling paperPaperIdPaperAuthorAuthorIdPatch");
      }
      // verify the required parameter 'authorId' is set
      if (authorId === undefined || authorId === null) {
        throw new Error("Missing the required parameter 'authorId' when calling paperPaperIdPaperAuthorAuthorIdPatch");
      }
      // verify the required parameter 'authorName' is set
      if (authorName === undefined || authorName === null) {
        throw new Error("Missing the required parameter 'authorName' when calling paperPaperIdPaperAuthorAuthorIdPatch");
      }

      let pathParams = {
        'paper_id': paperId,
        'author_id': authorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'author_name': authorName
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = PaperAuthor;
      return this.apiClient.callApi(
        '/paper/{paper_id}/paper-author/{author_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update author
     * @param {Number} paperId 
     * @param {Number} authorId 
     * @param {String} authorName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaperAuthor}
     */
    paperPaperIdPaperAuthorAuthorIdPatch(paperId, authorId, authorName) {
      return this.paperPaperIdPaperAuthorAuthorIdPatchWithHttpInfo(paperId, authorId, authorName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get paper author
     * @param {Number} paperId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaperAuthors} and HTTP response
     */
    paperPaperIdPaperAuthorGetWithHttpInfo(paperId) {
      let postBody = null;
      // verify the required parameter 'paperId' is set
      if (paperId === undefined || paperId === null) {
        throw new Error("Missing the required parameter 'paperId' when calling paperPaperIdPaperAuthorGet");
      }

      let pathParams = {
        'paper_id': paperId
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
      let returnType = PaperAuthors;
      return this.apiClient.callApi(
        '/paper/{paper_id}/paper-author', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get paper author
     * @param {Number} paperId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaperAuthors}
     */
    paperPaperIdPaperAuthorGet(paperId) {
      return this.paperPaperIdPaperAuthorGetWithHttpInfo(paperId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * post paper author
     * @param {Number} paperId 
     * @param {String} authorName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaperAuthor} and HTTP response
     */
    paperPaperIdPaperAuthorPostWithHttpInfo(paperId, authorName) {
      let postBody = null;
      // verify the required parameter 'paperId' is set
      if (paperId === undefined || paperId === null) {
        throw new Error("Missing the required parameter 'paperId' when calling paperPaperIdPaperAuthorPost");
      }
      // verify the required parameter 'authorName' is set
      if (authorName === undefined || authorName === null) {
        throw new Error("Missing the required parameter 'authorName' when calling paperPaperIdPaperAuthorPost");
      }

      let pathParams = {
        'paper_id': paperId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'author_name': authorName
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['*/*'];
      let returnType = PaperAuthor;
      return this.apiClient.callApi(
        '/paper/{paper_id}/paper-author', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * post paper author
     * @param {Number} paperId 
     * @param {String} authorName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaperAuthor}
     */
    paperPaperIdPaperAuthorPost(paperId, authorName) {
      return this.paperPaperIdPaperAuthorPostWithHttpInfo(paperId, authorName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}