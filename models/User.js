var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('User', {
    "description": "User information",
    "connector": "memory",
    "fields": {
        "name": {
            "type": "string"
        },
        "zipcode": {
            "type": "string"
        },
        "age": {
            "type": "number"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;