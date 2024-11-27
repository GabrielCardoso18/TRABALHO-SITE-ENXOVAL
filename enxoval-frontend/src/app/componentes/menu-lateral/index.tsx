import { Box, Drawer, List } from "@mui/material";

function MenuLateral() {
    return (
        <Box sx={{ display: 'flex' }}>
          <Drawer
            variant="permanent"
            sx={{
              width: 240,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box'},
            }}
          >
            <List>
            </List>
          </Drawer>
        </Box>
      )
}

export default MenuLateral;