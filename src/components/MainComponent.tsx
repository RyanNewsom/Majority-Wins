import React from "react";
import { Election, ElectionForm, Voter } from "../models/App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegisterVotersComponent } from "./RegisterVotersComponent";
import { CaptureVotesContainer } from "../containers/CaptureVotesContainer";
import NavBar from "./NavBar";
import { ElectionTableComponent } from "./ElectionTableComponent";
import { CreateElectionComponent } from "./CreateElectionComponent";

export type MainComponentProps = {
  voters: Voter[];
  elections: Election[];
  onRegisterVotersTabSelected: (tabSelected: number) => void;
  registeredVotersSelectedTab: number;
  deleteVoters: (voters: number[]) => void;
  expandedElectionId: number;
  onExpandElectionRow: (expandedElectionId: number) => void;
  onCreateElection: (electionForm: ElectionForm) => void;
};

export function MainComponent(props: MainComponentProps) {
  return (
    <Router>
      <>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/voters">
            <RegisterVotersComponent
              voters={props.voters}
              onTabSelected={props.onRegisterVotersTabSelected}
              selectedTab={props.registeredVotersSelectedTab}
              deleteVoters={props.deleteVoters}
            />
          </Route>
          <Route path="/capturevotes">
            <CaptureVotesContainer />
          </Route>
          <Route path="/elections">
            <ElectionTableComponent
              elections={props.elections}
              expandedElectionId={props.expandedElectionId}
              onExpandElectionRow={props.onExpandElectionRow}
            />
            <CreateElectionComponent
              onCreateElection={props.onCreateElection}
            />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
