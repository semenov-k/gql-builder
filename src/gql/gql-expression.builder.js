import { GqlBaseBuilder } from './gql-base.builder';
import { GqlFilterBuilder } from './gql-filter.builder';
import { extendConstructor, addMethod } from '../oop-utils';

/**
 * Builder of the expression part of GraphQL query.
 * @constructor
 * @extends GqlBaseBuilder
 */
export function GqlExpressionBuilder() {
  GqlBaseBuilder.call(this, {})
}

extendConstructor(GqlExpressionBuilder, GqlBaseBuilder);

/**
 * Adds the filters to the expression.
 * @memberof GqlExpressionBuilder#
 * @method filters
 * @param {GqlFilterBuilder[]} filterBuilders
 * @returns {GqlExpressionBuilder}
 */
addMethod(GqlExpressionBuilder, 'filters', function (filterBuilders) {
  this._json['filters'] = filterBuilders.map(function (filter) {
    return filter.json;
  });

  return this;
});
