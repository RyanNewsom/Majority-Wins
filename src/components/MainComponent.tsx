import React from "react";
import { Election, Voter } from "../models/App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegisterVotersComponent } from "./RegisterVotersComponent";
import { CaptureVotesContainer } from "../containers/CaptureVotesContainer";
import NavBar from "./NavBar";
import { ElectionComponent } from "./ElectionComponent";

export type MainComponentProps = {
  voters: Voter[];
  elections: Election[];
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
            <RegisterVotersComponent />
          </Route>
          <Route path="/capturevotes">
            <CaptureVotesContainer />
          </Route>
          <Route path="/elections">
            <ElectionComponent elections={props.elections} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
