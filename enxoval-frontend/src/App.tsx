import { Route, Routes} from "react-router-dom"
import HomePage from "./app/pages/home"
import Header from "./app/componentes/cabecalho"
import Footer from "./app/componentes/roda-pe"
import MenuLateral from "./app/componentes/menu-lateral"

function App() {

 

  return (
    <div className="wrapper">
      <Header/>
      <MenuLateral />
      <Routes>
        <Route path="/:id?" element={<HomePage/>} />
      </Routes>
      <Footer/>
    </div>

  )
}

export default App