import React from "react";
import "./Home.scss";
import { SplitCard, CenteredCard } from "components";
import MeetingsImg from "assets/images/meeting.jpg";
import TeaImg from "assets/images/teacup.png";

export function Home(): JSX.Element {
  return (
    <div className="View">
      <h1>University of Delaware CS + Social Good</h1>

      <div className="Cards">
        <SplitCard
          left={<img src={MeetingsImg} alt="CS + Social Good Logo" />}
          right = {
            <div>
              <h2>General Body Meetings</h2>
              Our general body meetings are hosted every other Tuesday from 7pm to 8pm. Meetings will resume again during the spring semester, so check back to find the dates!
              </div>
          }
          />

          <SplitCard
            left= {
              <div>
                <h2>Tea++ Meetings</h2>
                Our Tea++ meetings are hosted every other Tuesday from 7pm to 8pm. Meetings will resume during winter session, so check back soon to find the dates for that! 
              </div>  
            }
            right={<img src={TeaImg} alt="CS + Social Good Logo" />}
          />

      </div>
    </div>
  );
}
