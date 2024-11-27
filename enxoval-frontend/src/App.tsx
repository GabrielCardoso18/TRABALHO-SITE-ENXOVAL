import { Route, Routes} from "react-router-dom"
import HomePage from "./app/pages/home"
import Header from "./app/componentes/cabecalho"
import Footer from "./app/componentes/roda-pe"

function App() {

 

  return (
    <div className="wrapper">
      <Header/>
      <div>
        <Routes>
          <Route path="/:id?" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </div>

  )
}

export default App