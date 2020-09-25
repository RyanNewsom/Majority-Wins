import React from 'react';
import { Election, ElectionForm, Voter } from '../models/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RegisterVotersComponent } from './RegisterVotersComponent';
import { CaptureVotesContainer } from '../containers/CaptureVotesContainer';
import NavBar from './NavBar';
import { CreateElectionComponent } from './CreateElectionComponent';
import { ElectionTableComponent } from './ElectionTableComponent';
import { HomeComponent } from './HomeComponent';
import { Container, Grid } from '@material-ui/core';

export type MainComponentProps = {
  voters: Voter[];
  elections: Election[];
  expandedElectionId: number;
  onExpandElectionRow: (expandedElectionId: number) => void;
  onCreateElection: (electionForm: ElectionForm) => void;
  onAddVoter: (voter: Voter) => void;
};

export function MainComponent(props: MainComponentProps) {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/voters">
          <NavBar />
          <RegisterVotersComponent voters={props.voters} onAddVoter={props.onAddVoter} />
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
