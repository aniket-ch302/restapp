const requestJson=require('./requestjson')

module.exports = {
    signup: function () {
        return requestJson.signupJson
    }
}