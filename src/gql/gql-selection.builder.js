import { GqlBaseBuilder } from './gql-base.builder';
import { extendConstructor, addMethod } from '../oop-utils';

/**
 * Builder of the selection part of GraphQL query.
 * @constructor
 * @extends GqlBaseBuilder
 */
export function GqlSelectionBuilder() {
  GqlBaseBuilder.call(this, {});
}

extendConstructor(GqlSelectionBuilder, GqlBaseBuilder);

/**
 * Adds a new selection field.
 * @memberof GqlSelectionBuilder#
 * @method selection
 * @param {string} fieldName
 * @returns {GqlSelectionBuilder}
 */
addMethod(GqlSelectionBuilder, 'selection', function (fieldName) {
  this._json[fieldName] = true;

  return this;
});

/**
 * Adds a new selection entity with fields from other builder.
 * @memberof GqlSelectionBuilder#
 * @method subSelection
 * @param {string} entityName
 * @param {GqlBaseBuilder} selectionBuilder
 * @returns {GqlSelectionBuilder}
 */
addMethod(GqlSelectionBuilder, 'subSelection', function (entityName, selectionBuilder) {
  this._json[entityName] = selectionBuilder.json;

  return this;
});
