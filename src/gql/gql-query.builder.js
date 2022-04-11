import { assign } from 'lodash';
import { GqlBaseBuilder } from './gql-base.builder';
import { extendConstructor, addMethod } from '../oop-utils';
import { GqlExpressionBuilder } from './gql-expression.builder';
import { GqlSelectionBuilder } from './gql-selection.builder';

/**
 * Builder of the GraphQL query.
 * @constructor
 * @extends GqlBaseBuilder
 */
export function GqlQueryBuilder(name) {
  GqlBaseBuilder.call(this, {});

  this._body = {};
  this._json[name] = this._body;
}

extendConstructor(GqlQueryBuilder, GqlBaseBuilder);

/**
 * Adds a new expression to the query.
 * @memberof GqlQueryBuilder#
 * @method expression
 * @param {GqlExpressionBuilder} expressionBuilder
 * @returns {GqlQueryBuilder}
 */
addMethod(GqlQueryBuilder, 'expression', function (expressionBuilder) {
  const args = this._body['__args'] || {};

  args['expression'] = expressionBuilder.json;
  this._body['__args'] = args;

  return this;
});

/**
 * Adds a selection part to the query.
 * @memberof GqlQueryBuilder#
 * @method selections
 * @param {GqlSelectionBuilder} selectionBuilder
 * @returns {GqlQueryBuilder}
 */
addMethod(GqlQueryBuilder, 'selections', function (selectionBuilder) {
  assign(this._body, selectionBuilder.json);

  return this;
});
