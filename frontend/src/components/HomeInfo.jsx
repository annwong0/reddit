import { Link } from "react-router-dom"

import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Divider,
    Button,
    Grid
} from "@mui/material"

import HomeInfoBGImage from "../assets/reddit-cartoon.jpg"

const HomeInfo = () => {
    return ( 
        <div className="home-info-component">
            <Card className="card">
                <CardMedia
                    sx={{ height: 70 }}
                    image={HomeInfoBGImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="header">Home</Typography>
                    <Typography variant="body2">Your personal Reddit frontpage. Come here to check in with your favorite communities.</Typography>
                </CardContent>
                <Divider className="divider"/>
                <CardActions className="btn-container">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Link to="/submit">
                                <Button variant="contained" disableElevation className="home-info-btn">Create Post</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" disableElevation className="home-info-btn">Create Community</Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </div>
     );
}
 
export default HomeInfo