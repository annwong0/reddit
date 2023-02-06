import {
    Card
} from "@mui/material"

import RecentPost from "./RecentPost"

const RecentPosts = () => {
    return ( 
        <div className="recent-posts-component">
            <Card className="card">
                <div className="header">Recent Posts</div>
                <RecentPost />
            </Card>
        </div>
     );
}
 
export default RecentPosts;