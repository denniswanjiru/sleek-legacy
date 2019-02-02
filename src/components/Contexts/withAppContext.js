import React from "react";
import { Consumer } from "./PlayerContext";

export default function withAppContext(Component) {
  return function WrapperContext(props) {
    return (
      <Consumer>
        {(state) => {
          return <Component  {...props} context={state}/>
        }}
      </Consumer>
    )
  }
}