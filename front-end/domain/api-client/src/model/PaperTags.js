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
import PaperTagResponse from './PaperTagResponse';

/**
 * The PaperTags model module.
 * @module model/PaperTags
 * @version 1.0.0
 */
class PaperTags {
    /**
     * Constructs a new <code>PaperTags</code>.
     * @alias module:model/PaperTags
     */
    constructor() { 
        
        PaperTags.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaperTags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaperTags} obj Optional instance to populate.
     * @return {module:model/PaperTags} The populated <code>PaperTags</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaperTags();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], [PaperTagResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaperTags</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaperTags</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['response']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['response'])) {
                throw new Error("Expected the field `response` to be an array in the JSON data but got " + data['response']);
            }
            // validate the optional field `response` (array)
            for (const item of data['response']) {
                PaperTagResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} description
 */
PaperTags.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/PaperTagResponse>} response
 */
PaperTags.prototype['response'] = undefined;






export default PaperTags;
