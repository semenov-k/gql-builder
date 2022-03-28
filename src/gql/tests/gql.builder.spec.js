import {generateCreatorsQuery} from './gql.query';

const creatorsGqlBuilder = generateCreatorsQuery({
    name: 'creators',
    searchText: 'text',
    platform: 'youtube',
    gamingPlatform: 'pc'
});

const expectedGqlString = 'creators (expression: {filters: [{field: "CreatorEntity.nickName", operation: "ILIKE",' +
    ' value: "text"}, {field: "channels.platforms", operation: "IN", value: "youtube"},' +
    ' {field: "CreatorEntity.gamingPlatform", operation: "IN", value: "pc"}]}) { id gamingPlatform channels { id }' +
    ' nickName }';

const expectedJson = {
    "creators": {
        "__args": {
            "expression": {
                "filters": [{
                    "field": "CreatorEntity.nickName",
                    "operation": "ILIKE",
                    "value": "text"
                }, {
                    "field": "channels.platforms",
                    "operation": "IN",
                    "value": "youtube"
                }, {"field": "CreatorEntity.gamingPlatform", "operation": "IN", "value": "pc"}]
            }
        }, "id": true, "gamingPlatform": true, "channels": {"id": true}, "nickName": true
    }
};

test('gql builder query result', function () {
    expect(creatorsGqlBuilder.json).toEqual(expectedJson)
    expect(creatorsGqlBuilder.gqlString).toEqual(expectedGqlString)
});