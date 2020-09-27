import {
  AppBar,
  Avatar,
  Button,
  Hidden,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Tab,
  Tabs,
  Toolbar,
} from "@material-ui/core";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as MenuIcon } from "../../icons/menuicon.svg";
import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: ["Aquatico", "Roboto"],
    fontSize: "18px",
    fontWeight: theme.typography.fontWeightRegular,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  account: {
    display: "flex",
  },
  user: {
    paddingLeft: "10px",
    textTransform: "none",
  },
  avatar: {
    color: "#ffffff",
    backgroundColor: "#fcb415",
  },
}));

const stylesTab = (theme) => ({
  root: {
    height: "64px",
    textTransform: "none",
    color: "#ffffff",
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 20,
    letterSpacing: "-0.06px",
    "&:hover": {
      color: "#fcb415",
    },
    "&$selected": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  selected: {},
});

const stylesTabs = () => ({
  root: {
    height: "64px",
  },
  indicator: {
    top: "0px",
    height: "7px",
  },
});

const StyledTab = withStyles(stylesTab)(Tab);
const StyledTabs = withStyles(stylesTabs)(Tabs);

const TopBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            color="textPrimary"
            variant="h3"
          >
            CONCEPT
          </Typography>
          <Paper className={classes.grow}></Paper>
          <Hidden mdDown>
            <Paper className={classes.grow}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                centered
              >
                <StyledTab label="Dashboard" />
                <StyledTab label="Activities" />
                <StyledTab label="Badges" />
                <StyledTab label="Calendar" />
                <StyledTab label="Connections" />
                <StyledTab label="Devices" />
              </StyledTabs>
            </Paper>
          </Hidden>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <div className={classes.account}>
              <div>
                {/* Avatar */}
                <Avatar className={classes.avatar}>TW</Avatar>
              </div>
              <div className={classes.user}>
                {/* User name */}
                <Typography variant="h6" color="textPrimary" align="justify">
                  Tyler Wain
                </Typography>
                {/* Role - Location */}
                <Typography
                  variant="caption"
                  color="textPrimary"
                  display="block"
                  align="justify"
                >
                  UI Designer - Austin, TX
                </Typography>
              </div>
            </div>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AccountCircleOutlinedIcon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SettingsIcon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
