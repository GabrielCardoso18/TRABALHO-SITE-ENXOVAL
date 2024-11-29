import { useEffect, useState } from "react";
import { ICategoria } from "../../@libs/types";
import { CategoriaService } from "../../services/categoria-service";
import HighLightSection from "../../componentes/item-selecionado";
import Section from "../../componentes/seccao";
import MenuLateral from "../../componentes/menu-lateral";
import './style.css';

function HomePage() {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<ICategoria | null>(null);
  
  useEffect(() => {
    CategoriaService.getAll()
      .then(result => {
        setCategorias(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const categoriasFiltradas = categoriaSelecionada
    ? categorias.filter(categoria => categoria.id === categoriaSelecionada.id)
    : categorias; 

  return (
    <div className="main-content">
      <div className="content">
        <MenuLateral setCategoriaSelecionada={setCategoriaSelecionada} />
        <div className="highlight-container">
          <HighLightSection />
          {categoriasFiltradas.map((item) => (
            <Section key={item.id} categoria={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;