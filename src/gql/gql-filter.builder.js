import { GqlBaseBuilder } from './gql-base.builder';
import { extendConstructor, addMethod } from '../oop-utils';

/**
 * Builder of the filter part of GraphQL query.
 * @constructor
 * @extends GqlBaseBuilder
 */
export function GqlFilterBuilder() {
  GqlBaseBuilder.call(this, {});
}

extendConstructor(GqlFilterBuilder, GqlBaseBuilder);

/**
 * Adds a field name to the filter query.
 * @memberof GqlFilterBuilder#
 * @method field
 * @param {string} fieldName
 * @returns {GqlFilterBuilder}
 */
addMethod(GqlBaseBuilder, 'field', function (fieldName) {
  this._json['field'] = fieldName;

  return this;
});

/**
 * Adds a operation name to the filter query.
 * @memberof GqlFilterBuilder#
 * @method operation
 * @param {string} operationName
 * @returns {GqlFilterBuilder}
 */
addMethod(GqlBaseBuilder, 'operation', function (operationName) {
  this._json['operation'] = operationName;

  return this;
});

/**
 * Adds fieldName to the filter query.
 * @memberof GqlFilterBuilder#
 * @method value
 * @param {string|number} value
 * @returns {GqlFilterBuilder}
 */
addMethod(GqlBaseBuilder, 'value', function (value) {
  this._json['value'] = value;

  return this;
});