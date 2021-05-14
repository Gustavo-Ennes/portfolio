const axios = require("axios").default

const translate = async (text) => {
    const sourceLang = 'en'
    const targetLang = 'pt'

    // making url
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(text)}`

    // calling
    let res = await axios({
        method:'get',
        url: url,
    })
    // the return data is an array of strings, from the original string striped by '.'
    // let's concat this array
    let string = ''
    for(let i = 0; i < res.data[0].length; i++){
        string += res.data[0][i][0]
    }
    
    // and return 
    console.log(string)
    return string
}

module.exports = translate