import { Link } from "react-router-dom"

import { 
    Card, 
    Stack, 
    Avatar, 
    FormControl, 
    Input, 
    Tooltip, 
    IconButton,
    Grid
} from "@mui/material"

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';

import AvatarIcon from "../assets/avatar.png"

const CreatePost = () => {
    return ( 
        <div className="createPost">
            <Card className="card">
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <Link to={{
                            pathname: "/user/:username"
                        }}>
                            <Avatar src={AvatarIcon} alt="User"/>
                        </Link>
                    </Grid>
                    <Grid item xs={8}>
                        <FormControl className="form-control">
                            <Input 
                                disableUnderline={true}
                                placeholder="Create Post"
                                className="card-input"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="btn-container">
                            <Tooltip title="Create Media Post" arrow>
                                <IconButton className="card-btn">
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>
                            </Tooltip>
        
                            <IconButton className="card-btn">
                                <AttachFileSharpIcon />
                            </IconButton>
                        </div>                       
                    </Grid>
                </Grid>
                
                
            </Card>
        </div>
     );
}
 
export default CreatePost;