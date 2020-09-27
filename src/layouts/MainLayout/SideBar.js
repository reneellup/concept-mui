import { Hidden, Paper, Tab, Tabs } from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/Dashboard";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import React from "react";
import SignalCellularConnectedNoInternet3BarIcon from "@material-ui/icons/SignalCellularConnectedNoInternet3Bar";
import TodayIcon from "@material-ui/icons/Today";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    height: "100vh",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const stylesTab = (theme) => ({
  root: {
    minWidth: "80px",
    minHeight: "70px",
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
  root: {},
  indicator: {
    width: "7px",
  },
});
const StyledTab = withStyles(stylesTab)(Tab);
const StyledTabs = withStyles(stylesTabs)(Tabs);

const SideBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.grow}>
      <Hidden lgUp>
        <Paper>
          <StyledTabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <StyledTab icon={<DashboardIcon />} aria-label="dashboard" />
            <StyledTab icon={<LocalActivityIcon />} aria-label="activities" />
            <StyledTab icon={<LoyaltyIcon />} aria-label="badges" />
            <StyledTab icon={<TodayIcon />} aria-label="calendar" />
            <StyledTab
              icon={<SignalCellularConnectedNoInternet3BarIcon />}
              aria-label="connections"
            />
            <StyledTab icon={<DeviceHubIcon />} aria-label="devices" />
          </StyledTabs>
        </Paper>
      </Hidden>
    </div>
  );
};

export default SideBar;
