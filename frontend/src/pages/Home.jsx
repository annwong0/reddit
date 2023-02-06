import { 
    Stack,
    Grid
} from "@mui/material"

import CreatePost from "../components/CreatePost"
import SortAndLayout from "../components/SortAndLayout"
import Post from "../components/Post"

import Premium from "../components/Premium"
import HomeInfo from "../components/HomeInfo"
import RecentPosts from "../components/RecentPosts"
import SiteInfo from "../components/SiteInfo"

const Home = () => {
    return ( 
        <div className="pages home-page">
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} className="main-nav">
                    <Stack direction="column" spacing={2}>
                        <CreatePost />
                        <SortAndLayout />
                        <Post />
                    </Stack>
                </Grid>
                <Grid item md={4} className="side-nav">
                    <Stack direction="column" spacing={2}>
                        <Premium />
                        <HomeInfo />
                        <RecentPosts />
                        <SiteInfo />
                    </Stack>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Home;