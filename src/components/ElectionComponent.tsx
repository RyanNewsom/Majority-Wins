import React from 'react';
import { Election } from '../models/App';

export type ElectionComponentProps = {
  elections: Election[];
};

export function ElectionComponent(props: ElectionComponentProps) {
  console.log(props.elections);
  return (
    <>
      <h1>Elections!</h1>
      <ul>
        {props.elections?.map(election => {
          return <li key={election.id}>{election.name}</li>;
        })}
      </ul>
    </>
  );
}
