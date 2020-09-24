import React from 'react';
import { Election, Voter } from '../models/App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RegisterVotersContainer } from '../containers/RegisterVotersContainer';
import { CaptureVotesContainer } from '../containers/CaptureVotesContainer';
import { ElectionComponent } from './ElectionComponent';

export type MainComponentProps = {
  voters: Voter[];
  elections: Election[];
};

export function MainComponent(props: MainComponentProps) {
  // FIXME: delete these
  console.log(props.voters);
  console.log(props.elections);

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
              <ElectionComponent elections={props.elections} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
