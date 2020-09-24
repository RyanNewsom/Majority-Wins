import React from "react";
import { Item } from "../models/App";

export type MainComponentProps = {
  items: Item[];
};

export function MainComponent(props: MainComponentProps) {
  console.log(props.items);
  return (
    <>
      <h1>hello</h1>
      {props.items?.map((item) => {
        return <p>{item.title}</p>;
      })}
    </>
  );
}
