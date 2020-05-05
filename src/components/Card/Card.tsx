import React, { ReactNode } from 'react';
import './Card.scss'

type CardProps = {
  children: ReactNode
}

type SplitCardProps = {
  left: JSX.Element,
  right: JSX.Element
}

export function Card(props: CardProps): JSX.Element {
  return (
    <div className="Card">
      {props.children}
    </div>
  )
}

export function SplitCard(props: SplitCardProps): JSX.Element {
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
