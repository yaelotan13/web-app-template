const topicsMock = require('../data/topics');

const getTopics = (req, res) => {
    console.log('[GET] /topics')
    console.log('[OK] 200');
    const response = topicsMock.topics;
    
    return res.status(200).send(response);
};

module.exports = {
    getTopics
}