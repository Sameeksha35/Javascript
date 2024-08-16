const fs = require('fs');
const path = require('path')
const replaceThis = "harry"
const replaceWith = "john"
const preview = false//can be true if you don't want preview 
const folder = __dirname
try{
    fs.readdir(folder,(err,data)=>{
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldFile = path.join(folder, item);
            let newFile = path.join(folder, item.replaceAll(replaceThis,replaceWith))
            if(!preview){
                fs.rename(oldFile,newFile,()=>{
                    console.log("Rename success")
                })  
            }
            else{
                if("data/" + item !== newFile) console.log("data/" + item + " will be renamed to " + newFile)
            }  
        }
    })
}catch(err)
{
    console.error(err);  
}





