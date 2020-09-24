import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { RegisterVoterFormComponent } from "./RegisterVoterFormComponent";
import { RegisteredVotersTableComponent } from "./RegisteredVotersTableComponent";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function RegisterVotersComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Register Voter" {...a11yProps(0)} />
          <Tab label="View Registered Voters" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <RegisterVoterFormComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegisteredVotersTableComponent
          voters={[
            {
              id: 0,
              firstName: "Ryan",
              lastName: "Newsom",
              address: "123 main st",
              city: "San Diego",
              birthDate: "06/04/1993",
              email: "rydev@gmail.com",
              phone: "8586037832",
              //votedIn: [],
            },
            {
              id: 1,
              firstName: "John",
              lastName: "Snow",
              address: "21 main st",
              city: "The Wall",
              birthDate: "01/04/1992",
              email: "johnsnow@thewall.org",
              phone: "1234567890",
              //votedIn: [],
            },
          ]}
        />
      </TabPanel>
    </div>
  );
}
