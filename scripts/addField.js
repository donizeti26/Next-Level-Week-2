//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click',cloneField)


//execultar uma ação

function cloneField(){
     //duplicar os campos(QUAIS??)

    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos (QUE CAMPOS??)
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar (LIMPANDO)

    fields.forEach(function(field){
        //pegar o field do momento e limpar
        field.value = ""
    })

    //colocar na pagina(ONDE?)
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

   