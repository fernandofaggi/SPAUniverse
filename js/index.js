  
  
  import {Router} from './router.js'

  const router = new Router()

    router.add("/" , "./pages/home.html")
    router.add("/theUniverse" , "/pages/theUniverse.html")
    router.add("/explorer" , "/pages/Explorer.html")
    router.add("404" , "/pages/404.html")
  // //Mapeamento da rota 
  // const routes = {
  //   "/" : "/pages/home.html",
  //   "/about" : "/pages/about.html",
  //   "/contacts" : "/pages/contacts.html",
  //   404 : "/pages/404.html"
  // }

  //console.log(routes["/about"]) //modo de ver o valor 

  
  
router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()