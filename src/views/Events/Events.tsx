import React from "react";
import "./Events.scss";
import { SplitCard, CenteredCard } from "components";

export function Events(): JSX.Element {
  return (
    <div className="View">
      <h1>Events</h1>
      <div className="Cards">
      <CenteredCard>
          <div>
            <h2>No Events Right Now</h2>
            <p>Check back in a couple days to see all of our past and future events!</p>
          </div>
        </CenteredCard>
        </div>
    </div>
    
  );
}
