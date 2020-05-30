import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';
import { Popper } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = (theme) => ({
    root: {
        // padding: '1rem 5rem',
        // width: '20vw',
      },
      navButtonBar: {
        [theme.breakpoints.down('xs')]:{
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
        // boxShadow: 'none'
      },
      buttonHover:{
          backgroundColor: '#45484D',
          color: '#fff'
      },
      hamburgerMenu:{
        [theme.breakpoints.up('sm')]:{
            display: 'none'    
        }
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
        text: 'About',
        url: '/about'
    },
    {
        id: 2,
        text: 'Products',
        url: '/products'
    },
    {
        id: 3,
        text: 'Where to buy?',
        url: '/wheretobuy'
    },
    {
        id: 4,
        text: 'Contact Us',
        url: '/index#findUs'
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

    const handleMenuItemClose = value => e => {
        e.preventDefault();
        console.log(value);
        setAnchorEl(false);
    }

    const handleMenuItemClickAway = e => {
        e.preventDefault();
        setAnchorEl(false);
    }

    return (
        <div>
            <div className={props.classes.navButtonBar}>
                {
                    menuData.map(x => (
                        <Button key={x.id} onClick={handleMenuItemClose(x.url)} color="primary" className={props.classes.button}>
                            {x.text}
                        </Button>
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
                                menuData.map(x => (
                                    <MenuItem key={x.id} onClick={handleMenuItemClose(x.url)} url={x.url}>{x.text}</MenuItem>
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