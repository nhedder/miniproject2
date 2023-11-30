import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomDialogue from "./CustomDialogue";
// wraps the default MUI Card component to customise it with props
export default function CustomCard({ title, id, img, children, recipe, ingredients}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          alt="Drinks"
          image={img}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          {/* <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
        <Link to={"/cocktails/" + id}>
        {title}
      </Link>
        </Button>
        <Button size="small" color="primary">
        <Link to={"/cocktails/" + id}>
        Recipe
      </Link>
        </Button> */}
        
      </CardActions>
{recipe? <CustomDialogue  ingredients = {ingredients} recipe={recipe}/> :null}
    </Card>
    
  );
}
// ++ Add support for a button text prop as well, test rendering it
