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
                <li>2:00 - 2:15pm</li>
                <li>2:40 - 2:55pm</li>
              </ul>
              The meetings will be held over Zoom at the following link: <br></br>
              <a href="https://udel.zoom.us/j/97000606334">https://udel.zoom.us/j/97000606334</a><br></br>
              We hope to see you there!
                          </div>
          }
        />

      </div>
    </div>
  );
}
