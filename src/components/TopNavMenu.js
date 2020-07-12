import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';
import { Popper } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Link} from "gatsby";

const useStyles = (theme) => ({
    root: {
        // padding: '1rem 5rem',
        // width: '20vw',
      },
      navButtonBar: {
        [theme.breakpoints.down('sm')]:{
            display: 'none'    
        }
      },
      button: {
        margin: '.5rem .5rem',
        // backgroundColor: '#45484D'
        // backgroundColor: 'none',
        // background: 'transparent',
        // border: 'none',
        color: '#45484D',
        // boxShadow: 'none',
      },
      buttonHover:{
          backgroundColor: '#45484D',
          color: '#fff'
      },
      hamburgerMenu:{
        [theme.breakpoints.up('md')]:{
            display: 'none'    
        }
      },
      menuLink: {
        textDecoration: 'none',
        color: '#45484D',
      },
      menuButton: {
        // marginRight: theme.spacing(2),
      },
      menuList: {
          backgroundColor: 'rgba(249, 189, 59, .76)'
      },
});

const menuData = [
    {
        id: 1,
        text: 'Home',
        url: '/'
    },
    {
        id: 2,
        text: 'Products',
        url: '/products'
    },
    {
        id: 3,
        text: 'About',
        url: '/about'
    },
    {
        id: 5,
        text: 'Contact Us',
        url: '/#findUs'
    }
]

const TopNavMenu = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);    
    const open = Boolean(anchorEl);
    const id = open ? 'topNavMenu-popper' : undefined;

    const handleMenuClick = (e) => {
        e.preventDefault();
        setAnchorEl(anchorEl ? null : e.currentTarget);
    }

    // const handleMenuItemClose = value => e => {
    //     e.preventDefault();
    //     // console.log(value);
    //     // window.location.href = value;
    //     setAnchorEl(false);
    // }

    const handleMenuItemClickAway = e => {
        e.preventDefault();
        setAnchorEl(false);
    }

    return (
        <div>
            <div className={props.classes.navButtonBar}>
                {
                    menuData.map( (x, index) => (
                        <Link key={index} to={x.url} className={props.classes.menuLink}>
                            <Button key={x.id} 
                                // onClick={handleMenuItemClose(x.url)} 
                                color="primary" 
                                className={props.classes.button}
                            >
                                {x.text}
                            </Button>
                        </Link>
                    ))
                }
            </div>
            <div className={props.classes.hamburgerMenu}>
                <IconButton edge="end" 
                    onClick={handleMenuClick}
                    className={props.classes.menuButton} 
                    color="inherit" 
                    aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Popper id={id} anchorEl={anchorEl} open={open}>
                    <ClickAwayListener onClickAway={handleMenuItemClickAway}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" className={props.classes.menuList}>
                            {
                                menuData.map( (x, index) => (
                                    <Link key={index} to={x.url} className={props.classes.menuLink}>
                                        <MenuItem key={x.id} 
                                            // onClick={handleMenuItemClose(x.url)} 
                                            url={x.url}
                                        >
                                            {x.text}
                                        </MenuItem>
                                    </Link>
                                ))
                            }
                        </MenuList>
                    </ClickAwayListener>
                </Popper>
            </div>
        </div>
    );
}

export default withStyles(useStyles)(TopNavMenu);