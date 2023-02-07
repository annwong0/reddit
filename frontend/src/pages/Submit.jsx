import {
    Grid,
    Card,
    CardContent,
    List,
    ListItem,
    Typography,
    Button,
    Divider,
    Stack,
    TextField
} from "@mui/material"

import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import RulesLogo from '../assets/reddit-rules-logo.jpg'

const Submit = () => {
    return ( 
        <div className="pages submit-page">
            <Grid container spacing={3}>
                <Grid item xs={8} className="form-input">
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography className="header">Create a Post</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button className="draft-btn">Drafts</Button>
                        </Grid>
                    </Grid>
                    <Divider className="divider"/>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Button 
                                startIcon={<PanoramaFishEyeIcon/>} 
                                endIcon={<KeyboardArrowDownIcon/>}
                                style={{display: "flex", justifyContent: "space-between"}}
                                className="choose-community-btn"
                            >
                                <Typography className="text">Choose a Community</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Card className="card">
                                <CardContent>

                                </CardContent>
                                <CardContent>
                                    <TextField placeholder="Title"/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} className="rules">
                    <Card className="card">
                        <Stack direction="row">
                        <img src={RulesLogo} alt="" />
                        <Typography className="header">Posting to Reddit</Typography>
                        </Stack>
                        <List className="list-item">
                            <Divider/>
                            <ListItem>
                                1. Remember the human
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                2. Behave like you would in real life
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                3. Look for the original source of content
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                4. Search for duplicates before posting
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                5. Read the community’s rules
                            </ListItem>
                            <Divider/>
                        </List>
                    </Card>
                    <Typography className="notes">
                        Please be mindful of reddit's <span>content policy</span> <br/>and practice good <span>reddiquette</span>.
                    </Typography>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Submit;
<div className="">

</div>