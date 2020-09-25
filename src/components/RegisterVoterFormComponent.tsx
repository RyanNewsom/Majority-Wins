import React from "react";
import AppBar from "@material-ui/core/FormControl";
import Toolbar from "@material-ui/core/TextField";

import { useForm } from "../hooks/useForm";
import { Voter, VoterFormData } from "../models/App";
import { makeStyles } from "@material-ui/core/styles";

// export function RegisterVoterFormComponent() {
//   return  <h1>Register Form</h1>;

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
    <form>
      <table>
        <tr>
          <td>
            <label>First Name</label>
          </td>
          <td>
            <input
              type="text"
              name="firstName"
              value={voterForm.firstName}
              onChange={change}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Last Name</label>
          </td>
          <td>
            {" "}
            <input
              type="text"
              name="lastName"
              value={voterForm.lastName}
              onChange={change}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Address</label>
          </td>{" "}
          <td>
            <input
              type="text"
              name="address"
              value={voterForm.address}
              onChange={change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <label>City</label>
          </td>{" "}
          <td>
            {" "}
            <input
              type="text"
              name="city"
              value={voterForm.city}
              onChange={change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <label>State</label>
          </td>
          <td>
            {" "}
            <input
              type="text"
              name="state"
              value={voterForm.state}
              onChange={change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <label>Birthdate</label>
          </td>
          <td>
            {" "}
            <input
              type="text"
              name="birthDate"
              value={voterForm.birthDate}
              onChange={change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <label>Email</label>
          </td>
          <td>
            {" "}
            <input
              type="text"
              name="email"
              value={voterForm.email}
              onChange={change}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <label>Phone</label>
          </td>
          <td>
            {" "}
            <input
              type="number"
              name="phone"
              value={voterForm.phone}
              onChange={change}
            />
          </td>
        </tr>
        <tr>
          <button
            type="button"
            onClick={setupSubmitVoter(props, voterForm, resetVoterForm)}
          >
            {props.buttonText}
          </button>
        </tr>
      </table>
    </form>
  );
}
