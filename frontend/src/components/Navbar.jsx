import { Link } from "react-router-dom"

import { 
    Box, 
    Grid,
    Stack,
    Button,
    IconButton,
    Input,
    FormControl,
    InputAdornment,
    Tooltip,
    Avatar,
    Divider
} from "@mui/material"

import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import AvatarIcon from "../assets/avatar.png"

const Navbar = () => {    
    return ( 
        <div className="navbar">
            <Box>
                <Stack direction="row" className="navigation">
                    <Link className="link" to="/">
                        <img className="logo" alt="" />
                    </Link>
                    <Button 
                        className="dropdown-btn" 
                        style={{display: "flex", justifyContent: "space-between"}}
                        endIcon={<ExpandMoreOutlinedIcon/>}
                    >
                        <HomeIcon /><span className="navigation-text">Home</span>
                    </Button>

                    <FormControl className="search">
                        <Input
                            id="input-with-icon-adornment"
                            disableUnderline={true}
                            placeholder="Search Reddit"
                            className="search-bar"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl> 

                    <Tooltip title="Popular" arrow>
                        <IconButton className="navbar-icon hidden-btn">
                            <WhatshotIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Coin" arrow>
                        <IconButton className="navbar-icon hidden-btn">
                            <MonetizationOnOutlinedIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Happening Now" arrow>
                        <IconButton className="navbar-icon hidden-btn">
                            <PodcastsOutlinedIcon />
                        </IconButton>
                    </Tooltip>

                    <Divider orientation="vertical" variant="middle" flexItem sx={{marginRight: 1}} className="hidden-btn"/>
                    
                    <Tooltip title="Chat" arrow>
                        <IconButton className="navbar-icon">
                            <SmsOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                        
                    <Tooltip title="Notifications" arrow>
                        <IconButton className="navbar-icon">
                            <NotificationsOutlinedIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Create Post" arrow>
                        <IconButton className="navbar-icon">
                            <AddOutlinedIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Advertise" arrow>
                        <IconButton variant="contained" disableElevation className="navbar-icon2">
                            <CampaignOutlinedIcon />
                        </IconButton>
                    </Tooltip>

                    <Button 
                        className="dropdown-btn user-container" 
                        style={{display: "flex", justifyContent: "space-between"}}
                        endIcon={<ExpandMoreOutlinedIcon />}
                    >
                        <Avatar
                            alt="user"
                            src={AvatarIcon}
                            sx={{ height: 25, width: 25, marginRight: 1 }}
                            variant="square"
                        />
                        <Stack direction="column" className="user-text">
                            <span className="username">User</span>
                            <span className="karma">1 karma</span>
                        </Stack>
                    </Button>
                </Stack>
            </Box>
        </div>
     );
}
 
export default Navbar;
