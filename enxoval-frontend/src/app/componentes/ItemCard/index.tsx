import { Paper } from "@mui/material";
import { IItem } from "../../@libs/types";

type ItemCardProps = {
    item: IItem;
}

function ItemCard({
    item
}: ItemCardProps) {
    return (
        <Paper
            component="a"
            elevation={0}
            href={item.id}
            sx={{
                minWidth: '10rem'
            }}
        >
            <img src={`images/${item.foto}`}
                style={{
                    width: '100%'
                }}
            />
        </Paper>
    )
}

export default ItemCard;