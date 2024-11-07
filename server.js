import express from 'express'
import path from 'path'
import {add_user, consult_user} from './db.js'

const app = express()
let dir_front = path.resolve() + "/frontend/build/index.html"

app.use(express.static("frontend/build"))
app.use(express.urlencoded())
app.use(express.json())

const port = 5000
app.listen(port, function(pet, resp){
    console.log("Server started on port", port )
})

app.get("/", (pet, resp)=>{
    resp.sendFile(dir_front)
})

app.post("/register_user", function(req, resp){
    let {id, name, lastname, birthday} = req.body
    console.log(id, name, lastname, birthday)
    resp.send("The user was created")
    add_user(id, name, lastname, birthday)
})

app.post("/consult_user", (req, resp)=>{
    let user_data = req.body
    console.log(user_data)
    consult_user(user_data.id, function(err, result){
        if(err){
            user = ""
            console.log("Error consulting the user", err)
        }
        else {
            let data = {
                "status": "ok",
                "id": user_data.id,
                "name": result[0].name,
                "lastname": result[0].lastname,
                "birthday": result[0].birthday      
            }
            resp.send(data)
        }
    })
    
})
