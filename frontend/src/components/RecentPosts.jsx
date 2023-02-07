import {
    Card,
    List,
    Typography,
    Button,
} from "@mui/material"

import RecentPost from "./RecentPost";

const RecentPosts = () => {
    return ( 
        <div className="recent-posts-component">
            <Card className="card">
                <Typography className="header">Recent Posts</Typography>
                <List className="list">
                    <RecentPost />
                    <RecentPost />
                    <RecentPost />
                </List>
                <Button className="clear-btn"><span className="clear-btn-text">Clear</span></Button>
            </Card>
        </div>
     );
}
 
export default RecentPosts;