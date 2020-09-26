import { AppBar, Paper, Tab, Tabs, Toolbar } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import AccountCircle from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import { Height } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MailIcon from "@material-ui/icons/Mail";
import Menu from "@material-ui/core/Menu";
import { ReactComponent as MenuIcon } from "../../icons/menuicon.svg";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
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
  const [setAnchorEl] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const menuId = "primary-search-account-menu";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
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
          <div>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
