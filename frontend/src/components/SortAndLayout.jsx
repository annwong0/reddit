import { 
    Button,
    Card,
    Grid,
    IconButton,
    Stack
} from "@mui/material"

import RocketIcon from '@mui/icons-material/Rocket';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';

const SortAndLayout = () => {
    return ( 
        <div className="sortAndLayout">
            <Card className="card">
                <Grid container>
                    <Grid item xs={10}>
                        <Stack direction="row" spacing={1}>
                            <Button className="card-btn-active" startIcon={<RocketOutlinedIcon />}>Best</Button>
                            <Button className="card-btn" startIcon={<LocalFireDepartmentOutlinedIcon />}>Hot</Button>
                            <Button className="card-btn" startIcon={<StarOutlineOutlinedIcon />}>New</Button>
                            <Button className="card-btn" startIcon={<TrendingUpIcon />}>Top</Button>
                            <IconButton aria-label="more">
                                <MoreHorizIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton aria-label="layout" className="card-btn2">
                            <ViewStreamOutlinedIcon /><ExpandMoreOutlinedIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </div>
     );
}
 
export default SortAndLayout;