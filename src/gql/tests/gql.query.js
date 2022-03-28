import {GqlSelectionBuilder} from '../gql-selection.builder';
import {GqlFilterBuilder} from '../gql-filter.builder';
import {GqlExpressionBuilder} from '../gql-expression.builder';
import {GqlQueryBuilder} from '../gql-query.builder';

const creatorsChannelsSelection = new GqlSelectionBuilder()
    .selection('id');

const creatorFieldsSelection = new GqlSelectionBuilder()
    .selection('id')
    .selection('gamingPlatform')
    .subSelection('channels', creatorsChannelsSelection)
    .selection('nickName');

function generateSearchFilter(text) {
    return new GqlFilterBuilder()
        .field('CreatorEntity.nickName')
        .operation('ILIKE')
        .value(text);
}

function generatePlatformFilter(platform) {
    return new GqlFilterBuilder()
        .field('channels.platforms')
        .operation('IN')
        .value(platform);
}

function generateGamingPlatformFilter(platform) {
    return new GqlFilterBuilder()
        .field('CreatorEntity.gamingPlatform')
        .operation('IN')
        .value(platform);
}

function generateCreatorsQueryExpression(params) {
    return new GqlExpressionBuilder()
        .filters([
            generateSearchFilter(params.searchText),
            generatePlatformFilter(params.platform),
            generateGamingPlatformFilter(params.gamingPlatform),
        ]);
}

export function generateCreatorsQuery(params) {
    return new GqlQueryBuilder(params.name)
        .expression(generateCreatorsQueryExpression(params))
        .selections(creatorFieldsSelection);
}