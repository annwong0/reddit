import { Link } from "react-router-dom"

import {
    ListItem,
    Card,
    Stack,
    Typography,
    Divider
} from "@mui/material"

import PostImage from '../assets/reddit-cartoon.jpg'

const RecentPost = () => {
    return ( 
        <div className="">
            <ListItem className="list-item">
                        <Link className="link"
                            to={{
                            pathname: "/"
                        }}>
                            <Card 
                                className="card"
                            >
                                <Stack direction="row" spacing={1}>
                                    <Stack direction="column">
                                        <img src={PostImage} alt="" />
                                    </Stack>
                                    <Stack direction="column">
                                        <Typography className="header2">Lorem Ipsum</Typography>
                                        <Typography className="list-info">
                                            <span>120 points · </span><span>201 comments · </span><span>1/2/2023</span>
                                        </Typography>
                                    </Stack>
                                </Stack>    
                            </Card>
                        </Link>
                    </ListItem>
                    <Divider />
        </div>
     );
}
 
export default RecentPost;