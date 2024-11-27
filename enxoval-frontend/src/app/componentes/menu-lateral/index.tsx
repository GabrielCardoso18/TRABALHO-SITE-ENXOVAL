import { Box,  Drawer, ListItemButton, Typography } from "@mui/material";
import { ICategoria } from "../../@libs/types";
import { useEffect, useState } from "react";
import { CategoriaService } from "../../services/categoria-service";


function MenuLateral() {
    const [categorias, setCategorias] = useState<ICategoria[]>([]);

    useEffect(() => {
      CategoriaService.getAll()
        .then(result => {
          setCategorias(result.data);
        })
        .catch(error => {
          console.error('Erro ao buscar categorias:', error);
        });
    }, []);

    return (
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <Box p={2}>
            <ListItemButton>
              <Typography variant="body1">Todos</Typography>
            </ListItemButton>
            {categorias.map((categoria) => (
              <ListItemButton key={categoria.id}>
                <Typography variant="body1">{categoria.descricao}</Typography>
              </ListItemButton>
            ))}
          </Box>
        </Drawer>
      );
}

export default MenuLateral;