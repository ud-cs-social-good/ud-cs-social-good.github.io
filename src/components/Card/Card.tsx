import React from 'react';
import './Card.scss'

type CardProps = {
  left: JSX.Element,
  right: JSX.Element
}

export function Card(props: CardProps): JSX.Element {
  return (
    <div className="Card">
      <div className="Left">
        {props.left}
      </div>
      <div className="Right">
        {props.right}
      </div>
    </div>
  )
}
