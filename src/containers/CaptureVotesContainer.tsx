import React, { useState, ChangeEvent} from "react";
import { Election } from '../models/App';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export type CaptureVotesContainerProps = {
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
  console.log(props.elections);
  const classes = useStyles();
  const [ election, setElection ] = useState('');
  const [ votingClicked, setvotingClicked ] = useState(false);
  const [ inputEmail, setInputEmail ] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setElection(event.target.value as string);
  }

  const beginVoting = () => {
    setvotingClicked(true);
  }

  const validateUser = (inputEmail: string) => {
    console.log(inputEmail);
  }

  type HTMLFormControls =
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

  const change = (e: ChangeEvent<HTMLFormControls>) => {
    setInputEmail(e.target.value);
  };

  return (
    <>
      <h1>Lets Capture Votes !</h1>
      <p>Select a Ballot from the dropdown: </p>
      <Select
          labelId="election-list-select-label"
          id="select-election"
          value={election}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
        <MenuItem value=""><em>None</em></MenuItem>
        {props.elections.map(election => <MenuItem value={election.name}>{election.name}</MenuItem>)}
      </Select>
      {election &&
        <p>
          <p>You have selected: {election}></p>
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
    </>
  )
}
