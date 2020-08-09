

//servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses,saveClasses} = require ('./pages')


//configurando nunjucks(tamplate engine)

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})



server
.use(express.urlencoded({extended: true}))
//configurando arquivos estaticos (css,scripts, imagens)
.use(express.static("public"))

//rotas da aplicação

.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)

//start servidor
.listen(5500)