import Mysql from 'mysql'

let conection_sql = Mysql.createConnection({
    host: '127.0.0.1',
    database: 'db_front_23',
    user: 'root',
    password: '12345'
})

conection_sql.connect(function(err){
    if(err){
        console.log("Error connecting to the database", err)
    }
    else {
        console.log("Succesfull connection to database")
    }
})

export function add_user(id, name, lastname, birthday){
    let instruction_sql = "INSERT INTO users (id, name, lastname, birthday) VALUES ("+id+", '"+name+"', '"+lastname+"', '"+birthday+"')"
    conection_sql.query(instruction_sql, function(err){
            if(err){
                console.log("Error adding the user", err)
            }    
            else {
                console.log("User added succesfully")
            }        
    })
}

export function consult_user(id, callback){
    let instruction_sql = "SELECT * FROM users WHERE id ="+id+";"
    conection_sql.query(instruction_sql, function(err, result){
        if(err){            
            callback(err, null)
        }
        else {            
            callback(null, result)
        }
    })
}
