import React, { useState, ChangeEvent} from "react";
import { Election, Voter } from '../models/App';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CaptureVotesComponent }from '../components/CaptureVotesComponent';

export type CaptureVotesContainerProps = {
  voters: Voter[],
  elections: Election[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export function CaptureVotesContainer(props:CaptureVotesContainerProps ) {
  const classes = useStyles();
  // const [ election, setElection ] = useState('');
  const [ votingClicked, setvotingClicked ] = useState(false);
  const [ inputEmail, setInputEmail ] = useState('');
  const [ currentVoter, setCurrentVoter ] = useState({} as Voter);
  const [ currentElection, setCurrentElection ] = useState({} as Election);

  const handleDrodownChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentElection(props.elections.filter(election => election.name === event.target.value)[0]);
  }

  const beginVoting = () => {
    setvotingClicked(true);
  }

  const isValidVoter = !(Object.keys(currentVoter) && Object.keys(currentVoter).length === 0);

  const validateUser = (inputEmail: string) => {
    const voter = props.voters.filter(voter => voter.email === inputEmail)[0];
    setCurrentVoter(voter);
  }

  type HTMLFormControls =
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

  const change = (e: ChangeEvent<HTMLFormControls>) => {
    setInputEmail(e.target.value);
  };

  return (
    <>
      <h1>Capture Votes</h1>
      <p>Select a Ballot from the dropdown: </p>
      <Select
          labelId="election-list-select-label"
          id="select-election"
          value={currentElection.name}
          onChange={handleDrodownChange}
          className={classes.selectEmpty}
        >
        <MenuItem value=""><em>None</em></MenuItem>
        {props.elections.map(election => <MenuItem value={election.name}>{election.name}</MenuItem>)}
      </Select>
      {currentElection &&
        <p>
          <p>You have selected: {currentElection.name}</p>
          <Button variant="contained" color="primary" onClick={() => beginVoting()}>Begin Voting</Button>
        </p>
      }

      {votingClicked &&
        <>
          <label>Enter Email Address: </label>
          <TextField id="email-input" label="email address" onChange={change}/>
          <Button variant="contained" color="primary" onClick={() => validateUser(inputEmail)}>Validate User</Button>
        </>
      }
      {isValidVoter && <CaptureVotesComponent elections={props.elections} currentElection={currentElection} currentVoter={currentVoter}/> }
    </>
  )
}
