import { Link } from "@mui/material"

import {
    Card,
    Stack,
    Grid,
    Divider
} from "@mui/material"

const SiteInfo = () => {
    return ( 
        <div className="site-info-component">
            <Card className="card">
                <Grid container spacing={1} className="container">
                    <Grid item xs={6}>
                        <Stack direction="column">
                            <Link to="" className="link">User Agreement</Link>
                            <Link to="" className="link">Privacy Policy</Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="column">
                            <Link to="" className="link">Content Policy</Link>
                            <Link to="" className="link">Moderator Code of Conduct</Link>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider className="divider"/>
                <Grid container spacing={1} className="container">
                    <Grid item xs={6}>
                        <Stack direction="column">
                            <Link to="" className="link">English</Link>
                            <Link to="" className="link">Français</Link>
                            <Link to="" className="link">Italiano</Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="column">
                            <Link to="" className="link">Deutsch</Link>
                            <Link to="" className="link">Español</Link>
                            <Link to="" className="link">Português</Link>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider className="divider"/>
                <Grid container spacing={1} className="container">
                    <Grid item xs={12}>
                        <div className="">Reddit Inc © 2023. All rights reserved</div>
                    </Grid>
                </Grid>
            </Card>
        </div>
     );
}
 
export default SiteInfo
