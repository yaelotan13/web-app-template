const topicsResponse = require('../response/topics');

function register(app) {
    app.get('/topics', topicsResponse.getTopics);
}

module.exports = {
    register: register
}