const path = require('path')
const express = require('express')
const ejs = require('ejs')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080


//enables cors module to handle cors
app.use(cors())

//JSON object
let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 27,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 28,
        'birthName': 'dylan',
        'birthLocation': 'dylan'
    }
}

app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, '/index.html'))    
})

//GET request when fetching API
// :queryParameterVariable
app.get('/api/rappers/:rapperName', (req, res) => {
    const rapName = req.params.rapperName.toLowerCase()
    console.log(rapName);
    if (rappers[rapName]){
        res.json(rappers[rapName])
    } else {
        res.json(rappers['dylan'])
    }
})

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))