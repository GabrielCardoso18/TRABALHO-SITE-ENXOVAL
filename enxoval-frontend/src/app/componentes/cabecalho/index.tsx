import { AppBar, Box,  Container, Toolbar, Typography } from '@mui/material';

function Header () {
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography variant="h6">
                        Enxoval Gabriel && Maria
                    </Typography>
                    <Box
                        sx={{
                            paddingLeft:'1rem'
                        }}
                    >
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header;