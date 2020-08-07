//data
const proffys = [
    {
        name:"Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "40028922",
        bio :"Entusiasta das melhores tecnologias de química avançada Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    
    },
    {
        name:"Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "40028922",
        bio :"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    
    }
]


const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Fisica",
    "Fisica",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Quimica",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Quarta-feira",
    "Terça-feira",
    "QUinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
function getSubject (subjectNumber){
    const arrayPosition = subjectNumber - 1
    return subjects[subjectNumber]
}



function pageLanding(req, res) {
    return res.render("index.html")
}
function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req, res) {
    const data = req.query
    //se tiver data, adicionar
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty){

        data.subject = getSubject(data.subject)
    //adicionar data ao objeto proffys
        proffys.push(data)
        return res.redirect("/study")

    //se não, mostar a pagina
    }
    return res.render("give-classes.html",{subjects, weekdays})
}

//servidor
const express = require('express')
const server = express()



//configurando nunjucks(tamplate engine)

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache: true,
})


//configurando arquivos estaticos (css,scripts, imagens)
server.use(express.static("public"))

//rotas da aplicação

.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)

//start servidor
.listen(5500)