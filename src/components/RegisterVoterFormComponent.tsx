import React from "react";

import { useForm } from "../hooks/useForm";
import { Voter } from "../models/App";

export type VoterFormProps = {
  buttonText: string;
  onSubmitVoter: (voterForm: Voter) => void;
  onSaveVoter: (voterForm: Voter) => void;
  voterBeingEdited: Voter | null;
};

const setupSubmitVoter = (
  props: VoterFormProps,
  voterForm: any,
  resetVoterForm: () => void
) => {
  return () => {
    if (props.voterBeingEdited) {
      props.onSaveVoter({ ...voterForm });
    } else {
      props.onSubmitVoter({
        ...voterForm,
      });
    }

    resetVoterForm();
  };
};

export function RegisterVoterFormComponent(props: VoterFormProps) {
  const [voterForm, change, resetVoterForm] = useForm({
    id: props?.voterBeingEdited?.id || "",
    firstName: props?.voterBeingEdited?.firstName || "",
    lastName: props?.voterBeingEdited?.lastName || "",
    address: props?.voterBeingEdited?.address || "",
    city: props?.voterBeingEdited?.city || "",
    birthDate: props?.voterBeingEdited?.birthDate || "",
    email: props?.voterBeingEdited?.email || "",
    phone: props?.voterBeingEdited?.phone || "",
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
            {props.voterBeingEdited ? "Save" : props.buttonText}
          </button>
        </tr>
      </table>
    </form>
  );
}
