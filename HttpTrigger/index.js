const lodash = require('lodash')

module.exports = async function (context, req) {
    const randomNumber = lodash.random(true);
    context.log('Lodash imported successfully: ', randomNumber);

    context.res = {
        status: 200,
        body: 'Hello Functions World!'
    };
}