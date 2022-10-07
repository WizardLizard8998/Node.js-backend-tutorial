

const fs =require("fs");

fs.writeFile("./employees.json",'{"name": "kerem" ," age": 22}' ,"utf-8" ,err => {
    console.log("write error"); 
});


fs.readFile("./employees.json","utf-8", (data,err) => {

    console.log(data);
});


fs.appendFile("./employees.json", '{"name": "merek" , "age": 11}',"utf-8",err => {
    console.log("update error"); 
})


fs.unlink("./employees.json" , err =>{console.log(err)});
