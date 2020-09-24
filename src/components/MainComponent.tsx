import React from 'react';
import { Voter } from '../models/App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RegisterVotersContainer } from '../containers/RegisterVotersContainer';
import { CaptureVotesContainer } from '../containers/CaptureVotesContainer';
import { ElectionCreationContainer } from '../containers/ElectionCreationContainer';

export type MainComponentProps = {
  voters: Voter[];
};

export function MainComponent(props: MainComponentProps) {
  console.log(props.voters);
  return (
    <>
      <h1>Majority Wins </h1>
      <p>It's Time for a Change</p>
      <div>Registered Voters List: TODO DELETE ME</div>
      {props.voters?.map(voter => {
        return (
          <p>
            {voter.firstName} {voter.lastName}
          </p>
        );
      })}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/voters">Register Voters</Link>
              </li>
              <li>
                <Link to="/capturevotes">Capture Votes</Link>
              </li>
              <li>
                <Link to="/elections">Election Creation</Link>
              </li>
            </ul>
          </nav>

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
        </div>
      </Router>
    </>
  );
}
