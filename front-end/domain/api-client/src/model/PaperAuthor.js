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
import PaperAuthorResponse from './PaperAuthorResponse';

/**
 * The PaperAuthor model module.
 * @module model/PaperAuthor
 * @version 1.0.0
 */
class PaperAuthor {
    /**
     * Constructs a new <code>PaperAuthor</code>.
     * @alias module:model/PaperAuthor
     */
    constructor() { 
        
        PaperAuthor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaperAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaperAuthor} obj Optional instance to populate.
     * @return {module:model/PaperAuthor} The populated <code>PaperAuthor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaperAuthor();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = PaperAuthorResponse.constructFromObject(data['response']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaperAuthor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaperAuthor</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `response`
        if (data['response']) { // data not null
          PaperAuthorResponse.validateJSON(data['response']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
PaperAuthor.prototype['description'] = undefined;

/**
 * @member {module:model/PaperAuthorResponse} response
 */
PaperAuthor.prototype['response'] = undefined;






export default PaperAuthor;
