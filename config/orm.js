var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName){
    var query = "SELECT * FROM ??";
    connection.query(query,[tableName], function(error, result){
        if(error) throw error;
        console.log(result);
    });  
    },
    insertOne: function(tableName, burgerName){
        var query = "INSERT INTO tableName (burgerName) VALUES(??)"
    }
    
}
module.exports = orm;