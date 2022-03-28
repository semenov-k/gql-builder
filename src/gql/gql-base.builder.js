import {assign, cloneDeep} from 'lodash';
import {jsonToGraphQLQuery} from 'json-to-graphql-query';

// base constructor
export function GqlBaseBuilder(source) {
    this._json = {};

    assign(this, cloneDeep(source));
}

Object.defineProperty(GqlBaseBuilder.prototype, 'json', {
    get: function () {
        return this._json;
    },
    configurable: true
});

Object.defineProperty(GqlBaseBuilder.prototype, 'gqlString', {
    get: function () {
        return jsonToGraphQLQuery(this.json);
    },
    configurable: true
});