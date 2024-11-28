import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Container, Stack, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { ItemService } from "../../services/item-service";
import { IItem } from "../../@libs/types";

function HighLightSection() {
    const params = useParams();
    const [item, setItem] = useState<IItem>({} as IItem);
    const [openDialog, setOpenDialog] = useState(false);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
        const itemId = params.id ? params.id : "ebe96f98-3bcc-48ea-a08a-8ceec077e0a3";

        ItemService.getItensById(itemId)
            .then((result) => {
                if (result) setItem(result);
            })
            .catch((error) => {
                console.log("Erro: ", error);
            });
    }, [params]);

    const handleComprar = () => {
        if (!item.id) {
            console.error("UUID do item não encontrado!");
            return; 
        }
    
        const updatedItem = { ...item, vendido: true }; 
        
        ItemService.putItem(item.id, updatedItem)
            .then(() => {
                console.log("Item comprado:", { nome, cpf });
                setOpenDialog(false);  
            })
            .catch((error) => {
                console.error("Erro ao atualizar item:", error);
            });
    };

    return (
        <Box>
            <Container>
                <Stack direction="row">
                    <img src={`images/${item.foto}`} alt={item.nome} />
                    <Stack
                        sx={{
                            display: "flex",
                            direction: "column",
                            justifyContent: "center",
                            paddingLeft: "3rem",
                        }}
                    >
                        <Typography variant="h4">{item.nome}</Typography>
                        <Typography variant="subtitle2">
                            <span
                                style={{
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    padding: "0.2rem",
                                    marginRight: "0.3rem",
                                }}
                            >
                                {item.preco}
                            </span>
                            {item.categoria && item.categoria.descricao}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                paddingTop: "2rem",
                                marginBottom: "0.5rem",
                            }}
                        >
                            {item.descricao}
                        </Typography>
                        <Stack
                            gap={1}
                            direction="row"
                            sx={{
                                paddingY: "1rem",
                            }}
                        >
                            <Button
                                variant="outlined"
                                onClick={() => setOpenDialog(true)} 
                            >
                                Comprar
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Comprar Item</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Nome"
                        fullWidth
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                    />
                    <TextField
                        margin="dense"
                        label="CPF"
                        fullWidth
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)} 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
                    <Button onClick={handleComprar} variant="contained" color="primary">
                        Comprar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default HighLightSection;