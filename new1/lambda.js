let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_D10y3fy0o",
        AttributesToGet: ["given_name", "picture"],
        Limit: 10
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });

    callback(null, { "message": "Successfully executed!!!" });
}