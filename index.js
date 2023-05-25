const express = require('express')
const { stdout } = require('process')
const servidor = express()
const exec = require('child_process').exec
servidor.set('puerto',process.env.PORT || 80)

servidor.listen(servidor.get('puerto'))

servidor.get('/',(req,res)=>{
  let comando
    exec('ls',(err,stdout)=>{
        if(err){
            console.log(err)
        }
        comando=stdout
        res.send(comando)
   })
    
    
})