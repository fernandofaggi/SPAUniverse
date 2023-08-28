// ***********Orientação a Objetos no JavaScript******************
// Nessa aula aprenderemos sobre os princípios da 
// POO (Programação Orientada a Objetos). 
// Aprofundaremos em Classes e o valor this.



export class Router {
  
  routes = {} //inicializar o objeto

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event){
    event = event || window.event // verifica se passou o evento ou pega do window 
    event.preventDefault() // nao redireciona por padrão 

  window.history.pushState({}, "", event.target.href) // coloca o estado no histórico 
 
   

    this.handle()
}

handle (){
  // const pathname = window.location.pathname //Modo Estruturado
  const {pathname} = window.location  // modo desestruturado
  // const {hostname} = window.location
  // const {port} = window.location
  // const {href} = window.location
 
  const route = this.routes[pathname] || this.routes[404]
  
//  fetch(route).then(data => {console.log(data)})
 
fetch(route)  // API que faz uma tarefa assíncrona retorna uma promessa, em geral pega dados Json de retorna para o FrontEnd
  .then(data=> data.text()) // converte o data para texto 
  .then(html => {document.querySelector('#app').innerHTML = html}) // mostra o conteúdo html dentro da tag APP  
  
  // console.log (pathname , hostname ,port ,href)
  //console.log(route)
  
   
}


}

