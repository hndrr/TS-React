import React from "react";
type HelloProps = {
  message: String;
};

const Hello = (props: HelloProps) => {
  return (
    <div>
      <h1>Hello {props.message}</h1>
    </div>
  );
};

export default Hello;
