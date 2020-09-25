import React from "react";
import {
  Button,
  Container,
  createStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "../hooks/useForm";
import { Voter } from "../models/App";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

export type VoterFormProps = {
  buttonText: string;
  onSubmitVoter: (voterForm: Voter) => void;
};

const setupSubmitVoter = (
  props: VoterFormProps,
  voterForm: any,
  resetVoterForm: () => void
) => {
  return () => {
    props.onSubmitVoter({
      ...voterForm,
    });

    resetVoterForm();
  };
};

export function RegisterVoterFormComponent(props: VoterFormProps) {
  const classes = useStyles();
  const [voterForm, change, resetVoterForm] = useForm({
    id: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    birthDate: "",
    email: "",
    phone: "",
  });

  return (
    <Container maxWidth="md">
    <form>
      
       <TextField
        name="firstName"
        label="First Name"
        fullWidth
        color="primary"
        onChange={change}
        value={voterForm.firstName}
      />
         <TextField
        name="lastName"
        label="Last Name"
        fullWidth
        color="primary"
        onChange={change}
        value={voterForm.lastName}
      />
       <TextField
        name="address"
        label="Address"
        fullWidth
        color="primary"
        onChange={change}
        value={voterForm.address}
      />   
      <TextField
        name="city"
        label="City"
        fullWidth
        color="primary"
        onChange={change}
        value={voterForm.city}
      />   
       <TextField
        name="state"
        label="State"
        fullWidth
        color="primary"
        onChange={change}
        value={voterForm.state}
      />   
       <TextField
        name="birthDate"
        label="DOB"
        fullWidth
        color="primary"
        onChange={change}
        value={voterForm.birthDate}
      />   
        <TextField
        name="email"
        label="Email"
        fullWidth
        color="primary"
        onChange={change}
        value={voterForm.email}
      />   
       <TextField
        name="phone"
        label="Phone"
        fullWidth
        color="primary"
        onChange={change}
        value={voterForm.phone}
      />   
        <div className={classes.root}>
        <Button variant="contained" color="primary"  onClick={setupSubmitVoter(props, voterForm, resetVoterForm)}>
          {props.buttonText}
        </Button> 
        </div>
    </form>
    </Container>
  );
}
