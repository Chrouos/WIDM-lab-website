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
 * The ProjectIconResponse model module.
 * @module model/ProjectIconResponse
 * @version 1.0.0
 */
class ProjectIconResponse {
    /**
     * Constructs a new <code>ProjectIconResponse</code>.
     * @alias module:model/ProjectIconResponse
     */
    constructor() { 
        
        ProjectIconResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectIconResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIconResponse} obj Optional instance to populate.
     * @return {module:model/ProjectIconResponse} The populated <code>ProjectIconResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectIconResponse();

            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'String');
            }
            if (data.hasOwnProperty('icon_name')) {
                obj['icon_name'] = ApiClient.convertToType(data['icon_name'], 'String');
            }
            if (data.hasOwnProperty('icon_path')) {
                obj['icon_path'] = ApiClient.convertToType(data['icon_path'], 'String');
            }
            if (data.hasOwnProperty('icon_uuid')) {
                obj['icon_uuid'] = ApiClient.convertToType(data['icon_uuid'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'Number');
            }
            if (data.hasOwnProperty('updated_time')) {
                obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectIconResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectIconResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
            throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
        }
        // ensure the json data is a string
        if (data['icon_name'] && !(typeof data['icon_name'] === 'string' || data['icon_name'] instanceof String)) {
            throw new Error("Expected the field `icon_name` to be a primitive type in the JSON string but got " + data['icon_name']);
        }
        // ensure the json data is a string
        if (data['icon_path'] && !(typeof data['icon_path'] === 'string' || data['icon_path'] instanceof String)) {
            throw new Error("Expected the field `icon_path` to be a primitive type in the JSON string but got " + data['icon_path']);
        }
        // ensure the json data is a string
        if (data['icon_uuid'] && !(typeof data['icon_uuid'] === 'string' || data['icon_uuid'] instanceof String)) {
            throw new Error("Expected the field `icon_uuid` to be a primitive type in the JSON string but got " + data['icon_uuid']);
        }
        // ensure the json data is a string
        if (data['updated_time'] && !(typeof data['updated_time'] === 'string' || data['updated_time'] instanceof String)) {
            throw new Error("Expected the field `updated_time` to be a primitive type in the JSON string but got " + data['updated_time']);
        }

        return true;
    }


}



/**
 * @member {String} created_time
 */
ProjectIconResponse.prototype['created_time'] = undefined;

/**
 * @member {String} icon_name
 */
ProjectIconResponse.prototype['icon_name'] = undefined;

/**
 * @member {String} icon_path
 */
ProjectIconResponse.prototype['icon_path'] = undefined;

/**
 * @member {String} icon_uuid
 */
ProjectIconResponse.prototype['icon_uuid'] = undefined;

/**
 * @member {Number} id
 */
ProjectIconResponse.prototype['id'] = undefined;

/**
 * @member {Number} project_id
 */
ProjectIconResponse.prototype['project_id'] = undefined;

/**
 * @member {String} updated_time
 */
ProjectIconResponse.prototype['updated_time'] = undefined;






export default ProjectIconResponse;
