import React from "react";
import "./Volunteering.scss";
import { DenseCard } from "components";

export function Volunteering(): JSX.Element {
  return (
    <div className="View">
      <h1>Volunteering</h1>
      <div className="Cards">
        <DenseCard>
          <div>
          <h2>Current Volunteering Opportunities</h2>
          <p>Unfortunately, due to the onset of COVID19, all of the in-person volunteering we had been doing at Elkton Middle School
            and the Gateway Labs School has been postponed until conditions are safer. At this time, we're focused on working with UDance to 
            develop an app for the club in order to continue helping the community. If you're interested in learning more about this project 
            or getting involved, check out our <a href="./events">events</a> page.
          </p>
          </div>
        </DenseCard>
      </div>
    </div>
  );
}
