import { useEffect, useState } from "react";
import { ICategoria } from "../../@libs/types";
import { CategoriaService } from "../../services/categoria-service";
import HighLightSection from "../../componentes/item-selecionado";
import Section from "../../componentes/seccao";

function HomePage() {

    const [categorias, setCategorias] = useState<ICategoria[]>([]);

    useEffect(()=> {
      CategoriaService.getAll()
      .then(result => {
        console.log('=>', result)
        setCategorias(result.data)
      })
      .catch(error => {
        console.log(error)
      })
    }, []);
    return (
        <main
        style={{
          marginTop: '8rem'
        }}
      >
        <HighLightSection />
        {
          categorias.map(item => (
            <Section key={item.id} categoria={item}/>
          ))
        }
      </main>

    )
}

export default HomePage;