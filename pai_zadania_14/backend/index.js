const express = require('express');
const pokedex = require('./pokedex.json')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

var pokedex_copy = Object.assign(pokedex);

app.get('/api', (req, res) => {

    let response = Object.assign(pokedex_copy);

    if(req.query['name']){
        response = response.filter(el => el.name.english.toLowerCase().includes(req.query['name'].toLowerCase()));
    }

    if(req.query['sorting']){
        switch(req.query['sorting']){
            case '1':
                response.sort(function(a, b){
                    if(a.name.english < b.name.english) { return -1; }
                    if(a.name.english > b.name.english) { return 1; }
                    return 0;
                });
                break;
            case '2':
                response.sort(function(a, b){
                    if(a.name.english < b.name.english) { return 1; }
                    if(a.name.english > b.name.english) { return -1; }
                    return 0;
                });
                break;
            case '3':
                response.sort(function(a, b){
                    if(parseInt(a.id) < parseInt(b.id)) { return -1; }
                    if(parseInt(a.id) > parseInt(b.id)) { return 1; }
                    return 0;
                });
                break;
            case '4':
                response.sort(function(a, b){
                    if(parseInt(a.id) < parseInt(b.id)) { return 1; }
                    if(parseInt(a.id) > parseInt(b.id)) { return -1; }
                    return 0;
                });
                break;
            default:
                break;
        }
    }

    if(req.query['filters']){
        req.query['filters'].forEach(filter => {
            response = response.filter(el => el.type.includes(filter))
        })
    }

    res.json(response);
})

app.delete('/api', (req, res) => {
    let id = req.query['id'];
    pokedex_copy.splice(pokedex_copy.findIndex(el => parseInt(el.id) === parseInt(id)), 1);
    res.sendStatus(200);
})

app.listen(4000);