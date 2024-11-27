import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ICategoria, IItem } from "../../@libs/types";
import ItemCard from "../ItemCard";
import { ItemService } from "../../services/item-service";



type SectionProps = {
    categoria: ICategoria;
}
function Section({
    categoria
}: SectionProps) {

    const [itens, setItens] = useState<IItem[]>([]);

    useEffect(() => {

        if(categoria.id){
            ItemService.getByCategoriaId(categoria.id)
            .then(result => {
                setItens(result)
            });
        }

    }, []);

    return (
        <Box>
            <Container>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 400,
                        paddingTop: '2rem'
                    }}
                >
                    { categoria.descricao }
                </Typography>
                <Stack
                    direction="row"
                    gap="{0.5}"
                    sx={{
                        overflowY: 'hidden',
                        whiteSpace: 'nowrap',
                        paddingY: '1rem'
                    }}
                >
                    {itens.map(item => (
                       <ItemCard key={item.id} item={item}/> 
                    )) }

                </Stack>
            </Container>
        </Box>
    )
}

export default Section;