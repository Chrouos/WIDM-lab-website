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
import News from '../model/News';
import NewsInput from '../model/NewsInput';
import Newses from '../model/Newses';

/**
* News service.
* @module api/NewsApi
* @version 1.0.0
*/
export default class NewsApi {

    /**
    * Constructs a new NewsApi. 
    * @alias module:api/NewsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * get newses
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Newses} and HTTP response
     */
    newsGetWithHttpInfo() {
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
      let returnType = Newses;
      return this.apiClient.callApi(
        '/news', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get newses
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Newses}
     */
    newsGet() {
      return this.newsGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete news
     * @param {Number} newsId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/News} and HTTP response
     */
    newsNewsIdDeleteWithHttpInfo(newsId) {
      let postBody = null;
      // verify the required parameter 'newsId' is set
      if (newsId === undefined || newsId === null) {
        throw new Error("Missing the required parameter 'newsId' when calling newsNewsIdDelete");
      }

      let pathParams = {
        'news_id': newsId
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
      let returnType = News;
      return this.apiClient.callApi(
        '/news/{news_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete news
     * @param {Number} newsId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/News}
     */
    newsNewsIdDelete(newsId) {
      return this.newsNewsIdDeleteWithHttpInfo(newsId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get news
     * @param {Number} newsId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/News} and HTTP response
     */
    newsNewsIdGetWithHttpInfo(newsId) {
      let postBody = null;
      // verify the required parameter 'newsId' is set
      if (newsId === undefined || newsId === null) {
        throw new Error("Missing the required parameter 'newsId' when calling newsNewsIdGet");
      }

      let pathParams = {
        'news_id': newsId
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
      let returnType = News;
      return this.apiClient.callApi(
        '/news/{news_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get news
     * @param {Number} newsId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/News}
     */
    newsNewsIdGet(newsId) {
      return this.newsNewsIdGetWithHttpInfo(newsId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * patch news
     * @param {Number} newsId 
     * @param {module:model/NewsInput} news 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/News} and HTTP response
     */
    newsNewsIdPatchWithHttpInfo(newsId, news) {
      let postBody = news;
      // verify the required parameter 'newsId' is set
      if (newsId === undefined || newsId === null) {
        throw new Error("Missing the required parameter 'newsId' when calling newsNewsIdPatch");
      }
      // verify the required parameter 'news' is set
      if (news === undefined || news === null) {
        throw new Error("Missing the required parameter 'news' when calling newsNewsIdPatch");
      }

      let pathParams = {
        'news_id': newsId
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
      let returnType = News;
      return this.apiClient.callApi(
        '/news/{news_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * patch news
     * @param {Number} newsId 
     * @param {module:model/NewsInput} news 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/News}
     */
    newsNewsIdPatch(newsId, news) {
      return this.newsNewsIdPatchWithHttpInfo(newsId, news)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * post news
     * @param {module:model/NewsInput} news 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/News} and HTTP response
     */
    newsPostWithHttpInfo(news) {
      let postBody = news;
      // verify the required parameter 'news' is set
      if (news === undefined || news === null) {
        throw new Error("Missing the required parameter 'news' when calling newsPost");
      }

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
      let returnType = News;
      return this.apiClient.callApi(
        '/news', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * post news
     * @param {module:model/NewsInput} news 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/News}
     */
    newsPost(news) {
      return this.newsPostWithHttpInfo(news)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}