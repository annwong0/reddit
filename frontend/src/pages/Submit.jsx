import { useState } from "react";

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
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Tooltip,
    Tab,
    Tabs,
    Box,
    InputAdornment
} from "@mui/material"

import {
    TabContext,
    TabList,
    TabPanel
} from "@mui/lab"

import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AddIcon from '@mui/icons-material/Add';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WindowIcon from '@mui/icons-material/Window';

import RulesLogo from '../assets/reddit-rules-logo.jpg'

const Submit = () => {
    const [tabValue, setTabValue] = useState('1')
    const [title, setTitle] = useState('')

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    return ( 
        <div className="pages submit-page">
            <Grid container spacing={3}>
                <Grid item xs={8} className="form-input">
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography className="header">Create a Post</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button className="draft-btn">Drafts<span className="badge">2</span></Button>
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
                                    <TabContext value={tabValue}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleTabChange}>
                                                <Tab label="Post" value="1" />
                                                <Tab label="Images & Video" value="2" />
                                                <Tab label="Link" value="3" />
                                                <Tab label="Poll" value="4" />
                                                <Tab label="Talk" value="5" disabled />
                                            </TabList>
                                        </Box>
                                        <TextField 
                                            placeholder="Title"
                                            fullWidth
                                            className="title-box"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">{title.length}/300</InputAdornment>,
                                            }}
                                            onChange={(e) => setTitle(e.target.value)}
                                            sx={{ marginTop: 2 }}
                                        />
                                        <TabPanel value="1" sx={{ padding: 0 }}>
                                            <TextField
                                                placeholder="Text (required)"
                                                fullWidth
                                                multiline
                                                minRows={5}
                                                sx={{ marginTop: 1}}
                                            />
                                        </TabPanel>
                                        <TabPanel value="2" sx={{ padding: 0 }}>
                                            <Card 
                                                className="" 
                                                sx={{ 
                                                    border: "1px dashed lightgray", 
                                                    boxShadow: 0, 
                                                    marginTop: 1,
                                                    height: "230px"
                                                }}>
                                                <Typography 
                                                    sx={{ 
                                                        textAlign: "center", 
                                                        color: "#2196f3", 
                                                        marginTop: "100px" 
                                                    }}>
                                                    Drag and drop images or <Button variant="outlined" sx={{ borderRadius: "30px", fontWeight: "bold", textTransform: "inherit"}}>Upload</Button>
                                                </Typography>
                                            </Card>
                                        </TabPanel>
                                        <TabPanel value="3" sx={{ padding: 0 }}>
                                            <TextField
                                                placeholder="Url"
                                                fullWidth
                                                multiline
                                                minRows={2}
                                                sx={{ marginTop: 1}}
                                            />
                                        </TabPanel>
                                        <TabPanel value="4" sx={{ padding: 0 }}>
                                            <TextField
                                                placeholder="Text (required)"
                                                fullWidth
                                                multiline
                                                minRows={5}
                                                sx={{ marginTop: 1, borderRadius: "0"}}
                                            />
                                            <Grid 
                                                container 
                                                spacing={1} 
                                                sx={{ 
                                                    border: "1px solid lightgray",
                                                    width: "100%",
                                                    marginLeft: "0px",
                                                    marginTop: 1,
                                                    marginBottom: "1px",
                                                    borderRadius: "6px"
                                                }}
                                            >
                                                <Grid item xs={8}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={1}>
                                                            <WindowIcon sx={{ color: "gray", paddingTop: 2, paddingLeft: "3px" }}/>
                                                        </Grid>
                                                        <Grid item xs={11}>
                                                            <TextField fullWidth placeholder="Option 1"/>
                                                        </Grid>
                                                        <Grid item xs={1}>
                                                            <WindowIcon sx={{ color: "gray", paddingTop: 2, paddingLeft: "3px" }}/>
                                                        </Grid>
                                                        <Grid item xs={11}>
                                                            <TextField fullWidth placeholder="Option 2"/>
                                                        </Grid>
                                                        <Grid item xs={7}>
                                                            <Button className="add-option-btn">Add Option</Button>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Typography sx={{ fontSize: "13px", color: "gray"}}>Voting length: <Button className="days-btn" endIcon={<KeyboardArrowDownIcon/>}>3 days</Button></Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}><ErrorOutlineIcon sx={{ marginBottom: -1}}/> Tips on Better Polls</Typography>
                                                    <List sx={{ fontSize: "12px", fontWeight: "bold" }}>
                                                        <ListItem sx={{ paddingTop: 0 }}>1. Suggest short clear options</ListItem>
                                                        <ListItem sx={{ paddingTop: 0 }}>2. The more options, the better</ListItem>
                                                        <ListItem sx={{ paddingTop: 0 }}>3. Choose the poll duration</ListItem>
                                                        <ListItem sx={{ paddingTop: 0 }}>4. Options can't be edited after post creation</ListItem>
                                                    </List>
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                    </TabContext>
                                </CardContent>
                                <CardContent>                                    
                                    <Stack direction="row" spacing={1} className="btn-container">
                                        <Tooltip arrow placement="top" title="Mark as Original Content">
                                            <Button className="btn" variant="outlined" disableElevation startIcon={<AddIcon/>}>OC</Button>
                                        </Tooltip>
                                        <Tooltip arrow placement="top" title="Mark as a spoiler">
                                            <Button className="btn" variant="outlined" disableElevation startIcon={<AddIcon/>}>Spoiler</Button>
                                        </Tooltip>
                                        <Tooltip arrow placement="top" title="Mark as Not Sfe For Work">
                                            <Button className="btn" variant="outlined" disableElevation startIcon={<AddIcon/>}>NSFW</Button>
                                        </Tooltip>
                                        <Tooltip arrow placement="top" title="Add Flair">
                                            <Button className="btn" variant="outlined" disableElevation startIcon={<LocalOfferIcon/>} endIcon={<KeyboardArrowDownIcon/>}>Flair</Button>
                                        </Tooltip>                                  
                                    </Stack>
                                    <Divider sx={{ marginTop: 2, marginBottom: 2 }}/>
                                    <Stack direction="row" spacing={1} className="btn-container2">
                                        <Button className="btn" variant="outlined" disableElevation>Save Draft</Button>
                                        <Button className="btn" variant="contained" disableElevation>Post</Button>
                                    </Stack>

                                </CardContent>
                                <CardContent className="footer">
                                    <FormGroup>
                                        <FormControlLabel 
                                            className="checkbox-input"
                                            control={<Checkbox defaultChecked size="small" className="checkbox" />} 
                                            label="Send me post reply notifications" 
                                        />
                                    </FormGroup>
                                    <Typography>
                                        <span className="connect-accounts">Connect accounts to share your post </span> 
                                        <Tooltip 
                                            arrow 
                                            placement="top"
                                            title="Connect a Twitter account in your User Settings. With a connected accounted you can choose to share new posts you make directly to Twitter.">
                                            <ErrorOutlineIcon className="connect-accounts-icon"/>
                                        </Tooltip>
                                    </Typography>
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
                            <ListItem>1. Remember the human</ListItem>
                            <Divider/>
                            <ListItem>2. Behave like you would in real life</ListItem>
                            <Divider/>
                            <ListItem>3. Look for the original source of content</ListItem>
                            <Divider/>
                            <ListItem>4. Search for duplicates before posting</ListItem>
                            <Divider/>
                            <ListItem>5. Read the community’s rules</ListItem>
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
