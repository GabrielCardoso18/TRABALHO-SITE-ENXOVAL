import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem } from "../../@libs/types";
import { ItemService } from "../../services/item-service";

function HighLightSection() {

    const params = useParams();

    const [item, setItem] = useState<IItem>({} as IItem);

    useEffect(() => {

        const itemId = (params.id) ? (params.id) : 'ebe96f98-3bcc-48ea-a08a-8ceec077e0a3'


        ItemService.getItensById(itemId)
        .then(result => {
        if(result) setItem(result)
        })
        .catch(error => {
        console.log("PAU: ", error)
        })  
        
    }, [params]);

    return (
        <Box>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src={`images/${item.foto}`}/>
                    <Stack
                        sx={{
                            display: 'flex',
                            direction: 'column',
                            justifyContent: 'center',
                            paddingLeft: '3rem'
                        }}
                    >
                        <Typography
                            variant="h4"
                        >
                            {item.nome}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                            <span
                                style={{
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    padding: '0.2rem',
                                    marginRight: '0.3rem'
                                }}
                            >
                            </span>    
                           {item.categoria && item.categoria.descricao}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                paddingTop: '2rem',
                                marginBottom: '0.5rem'
                            }}
                        >
                            {item.descricao}
                        </Typography>
                        <Stack
                            gap={1}
                            direction="row"
                            sx={{
                                paddingY: '1rem'
                            }}
                        >
                            <Button
                                variant="outlined"
                            >Comprar</Button>
                            <Button
                                 variant="outlined"
                            >
                                Detalhes
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default HighLightSection;