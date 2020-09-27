import { AppBar, Avatar, Paper, Tab, Tabs, Toolbar } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as MenuIcon } from "../../icons/menuicon.svg";
import React from "react";
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
  account: {
    display: "flex",
  },
  user: {
    paddingLeft: "10px",
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <div className={classes.account}>
            <div>
              {/* Avatar */}
              <Avatar className={classes.avatar}>TW</Avatar>
            </div>
            <div className={classes.user}>
              {/* User name */}
              <Typography variant="h6" color="textPrimary">
                Tyler Wain
              </Typography>
              {/* Role - Location */}
              <Typography
                variant="caption"
                color="textPrimary"
                display="block"
                gutterBottom
              >
                UI Designer - Austin, TX
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
