const { getInfo, addInfo, deleteInfo, changeInfo } = require('../controller/controller.js')

module.exports = app => {
    app.route('/api/info').get(getInfo).post(addInfo).put(changeInfo)
    app.route('/api/info/:info').delete(deleteInfo)
}