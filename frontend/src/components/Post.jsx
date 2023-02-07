import { Link } from "react-router-dom"

import {
    Card,
    Avatar,
    CardMedia,
    CardContent,
    CardActions,
    Grid,
    Stack,
    IconButton,
    Button,
    Typography
} from "@mui/material"

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import CommunityAvatar from '../assets/reddit-logo.png';
import PostImage from '../assets/reddit-cartoon.jpg';

const Post = () => {
    return ( 
        <div className="post-component">
            <Link className="link" to={{
                pathname: "/r/:communityName/comments/:id"
            }}>
                <Card className="card">
                    <Grid container>
                        <Grid item xs={1} className="vote">
                            <Grid item>
                                <KeyboardArrowUpOutlinedIcon className="vote-icon"/>
                                <div className="likes">3.5k</div>
                                <KeyboardArrowDownOutlinedIcon className="vote-icon" />
                            </Grid>
                        </Grid>
                        <Grid item xs={11} className="content">
                            <CardContent>
                                <Stack direction="column">
                                    <Stack direction="row" spacing={1}>
                                        <Avatar
                                            alt="community"
                                            src={CommunityAvatar}
                                            className="community-avatar"
                                            sx={{ width: 20, height: 20 }}
                                        />
                                        <Typography className="post-info">
                                            <span className="community-name">/r/community</span>
                                            <span className="username"> · Posted by u/user </span>
                                            <span className="time">22 hours ago</span>
                                        </Typography>
                                    </Stack>
                                    <Typography variant="h6" className="header">
                                        Lorem Ipsum
                                    </Typography>
                                    <CardMedia
                                            component="img"
                                            height="194"
                                            image={PostImage}
                                            alt="image"
                                            className="post-img"
                                        />
                                </Stack>
                            </CardContent>
                            <CardActions className="btn-container">
                                <Button className="post-btn" startIcon={<ChatBubbleOutlineIcon/>}>1.2k Comments</Button>
                                <Button className="post-btn" startIcon={<CardGiftcardIcon />}>Award</Button>
                                <Button className="post-btn" startIcon={<ShortcutIcon />}>Share</Button>
                                <Button className="post-btn" startIcon={<BookmarkBorderIcon />}>Save</Button>
                                <IconButton className="post-btn2">
                                    <MoreHorizIcon/>
                                </IconButton>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Link>
        </div>
     );
}
 
export default Post;