import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { RegisterVoterFormComponent } from "./RegisterVoterFormComponent";
import {
  RegisteredVotersTableComponent,
  TableSorting,
} from "./RegisteredVotersTableComponent";
import { Voter } from "../models/App";

function TabPanel(props: any) {
  const { children, selectedTab, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={selectedTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {selectedTab === index && (
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
  selectedTab: PropTypes.any.isRequired,
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

export type RegisterVotersProps = {
  voters: Voter[];
  onAddVoter: (voter: Voter) => void;
  registeredVotersTableSort: TableSorting;
  registeredVotersTablePage: number;
  registeredVotersRowsPerPage: number;
  registeredVotersSelectedVoters: number[];
  registeredVotersSelectedTab: number;
  registeredVotersTabSelected: (tabSelected: number) => void;
  registeredVotersDeleteVoters: (voters: number[]) => void;
  registeredVotersSortSelected: (sort: TableSorting) => void;
  registeredVotersSelected: (voters: number[]) => void;
  registeredVotersTablePageUpdated: (page: number) => void;
  registeredVotersRowsPerPageUpdated: (rows: number) => void;
};

export function RegisterVotersComponent(props: RegisterVotersProps) {
  const classes = useStyles();

  const handleChange = (event: any, newValue: number) => {
    props.registeredVotersTabSelected(newValue);
  };

  const { onAddVoter: addVoter } = props;

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" elevation={0}>
          <Tabs
            value={props.registeredVotersSelectedTab}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Register Voter" {...a11yProps(0)} />
            <Tab label="View Registered Voters" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel selectedTab={props.registeredVotersSelectedTab} index={0}>
          <RegisterVoterFormComponent
            buttonText="Add Voter"
            onSubmitVoter={addVoter}
          />
        </TabPanel>
        <TabPanel selectedTab={props.registeredVotersSelectedTab} index={1}>
          <RegisteredVotersTableComponent
            voters={props.voters}
            sort={props.registeredVotersTableSort}
            selectedVoters={props.registeredVotersSelectedVoters}
            tablePage={props.registeredVotersTablePage}
            rowsPerPage={props.registeredVotersRowsPerPage}
            deleteVoters={props.registeredVotersDeleteVoters}
            sortSelected={props.registeredVotersSortSelected}
            votersSelected={props.registeredVotersSelected}
            tablePageUpdated={props.registeredVotersTablePageUpdated}
            rowsPerPageUpdated={props.registeredVotersRowsPerPageUpdated}
          />
        </TabPanel>
      </div>
    </>
  );
}
