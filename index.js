import axios from "axios";
require('dotenv').config();

// console.log(process.env.REACT_SERVER)

function SendToBackEnd(Server, apiPath, data){
    axios.post(`${Server} ${apiPath}`)
    console.log(Server, apiPath)
}

module.exports = {
    SendToBackEnd,
}
