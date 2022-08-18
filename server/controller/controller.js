let infoArray = ['This is top secret info', 'I know things you never will', 'I know the taste of the number purple']
const path = require('path')

module.exports = {
    getInfo: (req,res) => {
        // -------------------Listening for the get request--------------------
        console.log(infoArray)
        res.status(200).send(infoArray)
    },
    addInfo: (req,res) => {
        // -------------------Listening for the post request------------------- 
        console.log('=================================')
        console.log(req.params)
        console.log(req.body)
        console.log(req.query)
        console.log('=================================')

        let { input } = req.body
        infoArray.push(input)
        console.log(infoArray)
        res.status(200).send(infoArray)
    },
    deleteInfo: (req,res) => {
        // -------------------Listening for the delete request-----------------
        console.log(req.params)
        let { info } = req.params
        // -------------------Filtering out what we want to delete-------------
        infoArray = infoArray.filter(infoElement => infoElement != info)
        res.status(200).send(infoArray)
    },
    changeInfo: (req,res) => {
        // -------------------Listening for the put request--------------------
        console.log(req.body)
        let { from, to } = req.body
        // -------------------Changing the information in the array------------
        infoArray = infoArray.map(information => information.replaceAll(from, to))
        res.status(200).send(infoArray)
    },
    getHTML: (req,res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'))
    }
}