import React  from 'react';
import './Button.scss'

type ButtonProps = {
  children: JSX.Element,
  onClick: () => void,
}

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
