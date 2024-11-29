import { Container, IconButton, Stack, Typography } from "@mui/material";
import{Instagram, Facebook, WhatsApp} from "@mui/icons-material";

function RodaPe() {
    return (
        <footer>
            <Container
                sx={{
                    padding: '3rem'
                }}
            >
                <Typography
                    variant="overline"
                    textAlign="center"
                    component="p"
                >
                    Enxoval Gabriel & Maria - Todos os direitos reservados.
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                >
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                    <IconButton>
                        <WhatsApp />
                    </IconButton>
                </Stack>
            </Container>
        </footer>
    )
}

export default RodaPe;