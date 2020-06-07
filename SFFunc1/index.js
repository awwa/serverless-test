var AWS = require('aws-sdk'),
  region = "ap-northeast-1",
  secretName = "service1secret",
  secret,
  decdedBinarySecret;
var client = new AWS.SecretsManager({region: region});

exports.handler = async (event, context, callback) => {
    console.log(event.Comment);
    const data = await client.getSecretValue({SecretId: secretName}).promise();
    if ('SecretString' in data) {
      secret = data.SecretString;
      console.log(secret);
    } else {
      let buff = new Buffer(data.SecretBinary, 'base64');
      decodedBinarySecret = buff.toSTring('ascii');
      console.log(decdedBinarySecret);
    }
    const response = {
        Comment: true
    };
    if (!event.Comment) {
        var e = new Error('hoge');
        callback(e, "error");
    }
    return response;
};
