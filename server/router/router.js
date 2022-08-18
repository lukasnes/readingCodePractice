const { getInfo, addInfo, deleteInfo, changeInfo, getHTML } = require('../controller/controller.js')

module.exports = app => {
    app.route('/').get(getHTML)
    app.route('/api/info').get(getInfo).post(addInfo).put(changeInfo)
    app.route('/api/info/:info').delete(deleteInfo)
}