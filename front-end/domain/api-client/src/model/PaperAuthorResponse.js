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

import ApiClient from '../ApiClient';

/**
 * The PaperAuthorResponse model module.
 * @module model/PaperAuthorResponse
 * @version 1.0.0
 */
class PaperAuthorResponse {
    /**
     * Constructs a new <code>PaperAuthorResponse</code>.
     * @alias module:model/PaperAuthorResponse
     */
    constructor() { 
        
        PaperAuthorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaperAuthorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaperAuthorResponse} obj Optional instance to populate.
     * @return {module:model/PaperAuthorResponse} The populated <code>PaperAuthorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaperAuthorResponse();

            if (data.hasOwnProperty('author_name')) {
                obj['author_name'] = ApiClient.convertToType(data['author_name'], 'String');
            }
            if (data.hasOwnProperty('create_time')) {
                obj['create_time'] = ApiClient.convertToType(data['create_time'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('paper_id')) {
                obj['paper_id'] = ApiClient.convertToType(data['paper_id'], 'Number');
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaperAuthorResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaperAuthorResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['author_name'] && !(typeof data['author_name'] === 'string' || data['author_name'] instanceof String)) {
            throw new Error("Expected the field `author_name` to be a primitive type in the JSON string but got " + data['author_name']);
        }
        // ensure the json data is a string
        if (data['create_time'] && !(typeof data['create_time'] === 'string' || data['create_time'] instanceof String)) {
            throw new Error("Expected the field `create_time` to be a primitive type in the JSON string but got " + data['create_time']);
        }
        // ensure the json data is a string
        if (data['update_time'] && !(typeof data['update_time'] === 'string' || data['update_time'] instanceof String)) {
            throw new Error("Expected the field `update_time` to be a primitive type in the JSON string but got " + data['update_time']);
        }

        return true;
    }


}



/**
 * @member {String} author_name
 */
PaperAuthorResponse.prototype['author_name'] = undefined;

/**
 * @member {String} create_time
 */
PaperAuthorResponse.prototype['create_time'] = undefined;

/**
 * @member {Number} id
 */
PaperAuthorResponse.prototype['id'] = undefined;

/**
 * @member {Number} paper_id
 */
PaperAuthorResponse.prototype['paper_id'] = undefined;

/**
 * @member {String} update_time
 */
PaperAuthorResponse.prototype['update_time'] = undefined;






export default PaperAuthorResponse;
