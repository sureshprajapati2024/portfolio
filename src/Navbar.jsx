import {
    AppBar,
    Toolbar,
    ListItem,
   
    IconButton,
    
    Avatar,
    Divider, List,
    Typography, Box, ListItemIcon
} from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import ListItemText from '@material-ui/core/ListItemText'; 
import { makeStyles } from '@material-ui/core/styles';
import avatar from './suresh.jpg';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

import React,{ useState}from 'react';

//css style 
const useStyles =makeStyles(theme=>({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13)
         

    },
    listItem:{
        color:"tan"
    }
}));
const menuItems = [
    {
        listIcon:<Home/>,
        listText:"home"
    },{
        listIcon:<AssignmentInd/>,
        listText:"Resume"
    },{
        listIcon:<Apps/>,
        listText:"portfolio"
    },{
        listIcon:<ContactMail/>,
        listText:"contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({right:false})
    const toggleSlider = (slider,open) =>() => {
        setState({ ...state,[slider]:open})
    }
    const classes =useStyles()
    const sideList =slider =>(
        <Box className={classes.menuSliderContainer} component="div"
        onClick={toggleSlider(slider,false)}>
        <Avatar className={classes.avatar} src={avatar} alt="suresh" />
        <Divider/>
        <List>
        {menuItems.map((lsItem, key) => ( 

        
            <ListItem botton key={key}>
                <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText}/>
              </ListItem>
            ))}
        </List>
    </Box>

    )
    return (
        <>
       
        <Box component="nav">
            <AppBar position="static" style={{background:"#222"}}>
                <Toolbar>
                <IconButton onClick={toggleSlider("right",true)}>
                <ArrowBack  style={{color:"tomato"}}/>
                </IconButton>
                <Typography variant="h5" style={{color:"tan"}}>
                portfolio
                </Typography>
                    <MobilRightMenuSlider anchor="right" onClose={toggleSlider("right",false)}
                    open={state.right}>
                    {sideList("right")}

                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar;
