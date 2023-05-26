import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material"
import {FC, ReactElement} from "react";
import {IResources} from "../../../interfaces/resources";
import {useNavigate} from "react-router-dom";

const ResourceCard: FC<IResources> = (props): ReactElement => {

    const navigate = useNavigate()

     return (
        <Card sx={{ maxWidth: 400 }}>
            <CardActionArea onClick={() => navigate(`/unknown/${props.id}`)}>
                <CardMedia
                    component="img"
                    height="250"
                    image={props.color}
                    alt={props.name}
                />
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pantone Value: {props.pantone_value} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Year: {props.year}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ResourceCard