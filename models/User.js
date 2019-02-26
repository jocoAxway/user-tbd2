var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('User', {
    "fields": {
        "name": {
            "type": "string"
        },
        "zipcode": {
            "type": "string"
        },
        "age": {
            "type": "number"
        },
        "company": {
            "type": "string"
        }
    },
    "connector": "memory",
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ],
    "singular": "user",
    "plural": "users",
    "description": "User information"
});
module.exports = Model;