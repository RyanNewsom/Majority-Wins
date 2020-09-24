import React from "react";
import { Voter } from "../models/App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RegisterVotersContainer } from "../containers/RegisterVotersContainer";
import { CaptureVotesContainer } from "../containers/CaptureVotesContainer";
import { ElectionCreationContainer } from "../containers/ElectionCreationContainer";
import NavBar from "./NavBar";
export type MainComponentProps = {
  voters: Voter[];
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
            <RegisterVotersContainer />
          </Route>
          <Route path="/capturevotes">
            <CaptureVotesContainer />
          </Route>
          <Route path="/elections">
            <ElectionCreationContainer />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
