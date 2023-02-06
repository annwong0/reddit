import { 
    Stack, 
    Card,
    Button
} from "@mui/material"

import SecurityIcon from '@mui/icons-material/Security';

const Premium = () => {
    return ( 
        <div className="premium-component">
            <Card className="card">
                <Stack direction="column" spacing={1}>
                    <Stack direction="row" spacing={1}>
                        <SecurityIcon className="theme-color shield-icon"/>
                        <Stack direction="column" className="text">
                            <div className="header">Reddit Premium</div>
                            <div className="para">The best Reddit experience, with monthly Coins</div>
                        </Stack>  
                    </Stack>
                    <Stack direction="row">
                        <Button variant="contained" disableElevation className="premium-btn theme-bgcolor">Try Now</Button>
                    </Stack>
                </Stack>
            </Card>
        </div>
     );
}
 
export default Premium;
