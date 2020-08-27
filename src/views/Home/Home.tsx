import React from "react";
import "./Home.scss";
import { SplitCard, CenteredCard } from "components";
import MeetingsImg from "assets/images/meeting.jpg";

export function Home(): JSX.Element {
  return (
    <div className="View">
      <h1>University of Delaware CS + Social Good</h1>

      <div className="Cards">
      <SplitCard
          left={<img src={MeetingsImg} alt="CS + Social Good Logo" />}
          right={
            <div>
              <h2>Interest Sessions 8/31</h2>
              Join us at one of our three interest sessions on Monday, August 31st, 2020. We'll be talking more about what our club does and answering any questions you may have.<br>
              </br>Our interest sessions will be held from:
              <ul>
                <li>1:15 - 1:30pm</li>
                <li>2 - 2:15pm</li>
                <li>2:40 - 2:55pm</li>
              </ul>
              Location is TBD! (For sure online; we'll post a zoom link)
            </div>
          }
        />

      </div>
    </div>
  );
}
