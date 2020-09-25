import React from 'react';
import { Election, ElectionForm, Voter } from '../models/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RegisterVotersComponent } from './RegisterVotersComponent';
import { CaptureVotesContainer } from '../containers/CaptureVotesContainer';
import NavBar from './NavBar';
import { CreateElectionComponent } from './CreateElectionComponent';
import { TableSorting } from './RegisteredVotersTableComponent';
import { ElectionTableComponent } from './ElectionTableComponent';
import { Container } from '@material-ui/core';
import { HomeComponent } from './HomeComponent';

export type MainComponentProps = {
  voters: Voter[];
  elections: Election[];

  expandedElectionId: number;
  onExpandElectionRow: (expandedElectionId: number) => void;
  onCreateElection: (electionForm: ElectionForm) => void;
  registeredVotersTableSort: TableSorting;
  registeredVotersTablePage: number;
  registeredVotersRowsPerPage: number;
  registeredVotersSelectedVoters: number[];
  registeredVotersSelectedTab: number;
  registeredVoterBeingEdited: Voter | null;
  registerVotersTabSelected: (tabSelected: number) => void;
  registeredVotersDeleteVoters: (voters: number[]) => void;
  registeredVotersSortSelected: (sort: TableSorting) => void;
  registeredVotersVotersSelected: (voters: number[]) => void;
  registeredVotersTablePageUpdated: (page: number) => void;
  registeredVotersRowsPerPageUpdated: (rows: number) => void;
  registeredVotersRowEdited: (voter: Voter) => void;
  onAddVoter: (voter: Voter) => void;
  onSaveVoter: (voter: Voter) => void;
};

export function MainComponent(props: MainComponentProps) {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/voters">
          <NavBar />
          <RegisterVotersComponent
            voters={props.voters}
            registeredVotersRowsPerPage={props.registeredVotersRowsPerPage}
            registeredVotersSelectedVoters={props.registeredVotersSelectedVoters}
            registeredVotersTablePage={props.registeredVotersTablePage}
            registeredVotersTableSort={props.registeredVotersTableSort}
            registeredVotersTabSelected={props.registerVotersTabSelected}
            registeredVotersSelectedTab={props.registeredVotersSelectedTab}
            registeredVotersDeleteVoters={props.registeredVotersDeleteVoters}
            registeredVotersSortSelected={props.registeredVotersSortSelected}
            registeredVotersSelected={props.registeredVotersVotersSelected}
            registeredVotersTablePageUpdated={props.registeredVotersTablePageUpdated}
            registeredVotersRowsPerPageUpdated={props.registeredVotersRowsPerPageUpdated}
            registeredVotersRowEdited={props.registeredVotersRowEdited}
            onAddVoter={props.onAddVoter}
            onSaveVoter={props.onSaveVoter}
            registeredVoterBeingEdited={props.registeredVoterBeingEdited}
          />
        </Route>
        <Route path="/capturevotes">
          <NavBar />
          <CaptureVotesContainer />
        </Route>
        <Route path="/elections">
          <NavBar />
          <Container maxWidth="md">
            <ElectionTableComponent
              elections={props.elections}
              expandedElectionId={props.expandedElectionId}
              onExpandElectionRow={props.onExpandElectionRow}
            />
          </Container>
          <Container maxWidth="md">
            <CreateElectionComponent onCreateElection={props.onCreateElection} />
          </Container>
        </Route>
        <Route path="/">
          <Container maxWidth="md">
            <HomeComponent />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}
