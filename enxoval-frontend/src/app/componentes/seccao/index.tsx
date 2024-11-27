import { Box, Container, Stack, Typography } from "@mui/material";
import { ICategoria} from "../../@libs/types";



type SectionProps = {
    categoria: ICategoria;
}
function Section({
    categoria
}: SectionProps) {


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

                </Stack>
            </Container>
        </Box>
    )
}

export default Section;