import React, { useEffect } from "react";
import { bindActionCreators } from 'redux';
import { Voter } from "../models/App";
import { VoterRegisterState } from "../models/VoterRegisterState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegisterVotersComponent } from "./RegisterVotersComponent";
import { CaptureVotesContainer } from "../containers/CaptureVotesContainer";
import { ElectionCreationContainer } from "../containers/ElectionCreationContainer";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from 'react-redux';
import * as AppActions  from '../actions/AppActions';


export type MainComponentProps = {
  voters: Voter[];
};

export function MainComponent(props: MainComponentProps) {

  const voters = useSelector<VoterRegisterState, Voter[]>(state => state.voters);
  const dispatch = useDispatch();

  const boundActions = bindActionCreators({
    onAddVoter: AppActions.createAddVotersRequestAction,
    
  }, dispatch);

  useEffect(() => {
    dispatch(AppActions.addVoter);
  }, [dispatch]);
  return (
    <Router>
      <>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/voters">
          {/* ReactDOM.render(
  <Provider store={carToolStore}>
    <CarToolContainer />
  </Provider>,
  document.querySelector('#root'),
); */}
            <RegisterVotersComponent {...boundActions} voters={voters} />
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
