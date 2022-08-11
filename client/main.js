// --------------------------Getting the Elements-----------------------------
const getInfoBtn = document.querySelector('#info-btn')
console.log(getInfoBtn)
const addInfoForm = document.querySelector('#add-info')
const changeInfoForm = document.querySelector('#change-info')
const list = document.querySelector('#list')
// --------------------------Functions that do things-------------------------
const baseURL = 'http://localhost:4000/api'

const createInfoList = infoArray => {
    // ----------------------Emptying out the list----------------------------
    list.innerHTML = ""
    // ----------------------Looping over the info array----------------------
    infoArray.forEach(information => {
        //-------------------Creating a list element--------------------------
        console.log(information)
        let listItem = document.createElement('li')
        //-------------------Creating a span with the text--------------------
        let listText = document.createElement('span')
        listText.textContent = information
        //------------Creating a delete button for the list element-----------
        let listDeleteBtn = document.createElement('button')
        listDeleteBtn.textContent = 'X'
        listDeleteBtn.addEventListener('click', deleteInfo)
        //------------Appending the span, and btn to the list element---------
        listItem.appendChild(listText)
        listItem.appendChild(listDeleteBtn)
        //------------Appending the list item to the list--------------------------
        console.log(listItem)
        list.appendChild(listItem)
    })
}

// --------------------------Functions that request things--------------------
const getInfo = evt => {
    console.log(evt.target)
    // ---------------------Requesting the information------------------------
    axios.get(`${baseURL}/info`)
        .then(response => {
            let { data } = response
            createInfoList(data)
        })
        .catch(err => console.log(err))
}

const addInfo = evt => {
    evt.preventDefault()
    console.log(evt.target)
    // ---------------------Getting the input field---------------------------
    const addInfoInput = document.querySelector('#send-input')
    // ---------------------Getting the value of the input--------------------
    let inputValue = addInfoInput.value
    let inputObj = {
        input: inputValue
    }
    console.log(inputObj)
    // ---------------------Sending the value of the input--------------------
    axios.post(`${baseURL}/info`, inputObj)
        .then(response => {
            let { data } = response
            console.log(data)
            createInfoList(data)
        })
        .catch(err => console.log(err))
}

const changeInfo = evt => {
    evt.preventDefault()
    // ----------Getting the info to change, and what to----------------------
    const changeFromInfo = document.querySelector('#change-from')
    const changeToInfo = document.querySelector('#change-to')
    // ----------Packaging the info into an object----------------------------
    let changeObj = {
        from: changeFromInfo.value,
        to: changeToInfo.value
    }
    console.log(changeObj)
    // -----------Sending the change info obj to backend----------------------
    axios.put(`${baseURL}/info`, changeObj)
        .then(response => {
            let { data } = response
            createInfoList(data)
        })
        .catch(err => console.log(err))
}

const deleteInfo = evt => {
    // ---------------------Getting the info to delete------------------------
    console.log(evt.target)
    let targetList = evt.target.parentNode
    console.log(targetList)
    console.log('--------------------')
    console.log(targetList.children)

    let targetInfo = targetList.children[0].textContent
    console.log(targetInfo)
    // --------------------Sending the info to delete-------------------------
    axios.delete(`${baseURL}/info/${targetInfo}`)
        .then(response => {
            // ------------Creating an updated list---------------------------
            let { data } = response
            createInfoList(data)
        })
        .catch(err => console.log(err))
}

// --------------------------Listening for things to happen-------------------
getInfoBtn.addEventListener('click', getInfo)
addInfoForm.addEventListener('submit', addInfo)
changeInfoForm.addEventListener('submit', changeInfo)