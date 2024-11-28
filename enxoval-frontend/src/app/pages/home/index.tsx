import { useEffect, useState } from "react";
import { ICategoria } from "../../@libs/types";
import { CategoriaService } from "../../services/categoria-service";
import HighLightSection from "../../componentes/item-selecionado";
import Section from "../../componentes/seccao";
import MenuLateral from "../../componentes/menu-lateral";
import './style.css';

function HomePage() {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
  
    useEffect(() => {
      CategoriaService.getAll()
        .then(result => {
          console.log('=>', result);
          setCategorias(result.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <div className="main-content">
        <div className="content">
          <MenuLateral />
          <div className="highlight-container">
            <HighLightSection />
            {categorias.map((item) => (
              <Section key={item.id} categoria={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }

export default HomePage;