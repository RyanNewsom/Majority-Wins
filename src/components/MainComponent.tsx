import React from 'react';
import { Voter } from '../models/App';

export type MainComponentProps = {
  voters: Voter[];
};

export function MainComponent(props: MainComponentProps) {
  console.log(props.voters);
  return (
    <>
      <h1>Hello!!! from MainComponent </h1>
      {props.voters?.map(voter => {
        return (
          <p>
            {voter.firstName} {voter.lastName}
          </p>
        );
      })}
    </>
  );
}
