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
              Our first general body meeting will be held <b>Tuesday, February 23rd, 2021</b> from <b>7-8pm</b>. Our regular general body meeting time may be subject
              to change (depending on when members are available), so check back in later for any updates regarding meeting times. The link for our general body 
              meetings is <a href="https://udel.zoom.us/j/6748152461" target="_blank" rel="noopener noreferrer">https://udel.zoom.us/j/6748152461</a></div>
          }
          />

          <SplitCard
            left= {
              <div>
                <h2>Tea++ Meetings</h2>
                Our first Tea++ meeting of the semester will be held on <b>Tuesday, March 2nd, 2021</b> from <b>7-8pm</b> on <a href="https://udel.zoom.us/j/6748152461" target="_blank" rel="noopener noreferrer">https://udel.zoom.us/j/6748152461</a>
                 . Our meeting dates may be subject to change based on our members' availability, so check back in for more info regarding meeting times!
              </div>  
            }
            right={<img src={TeaImg} alt="CS + Social Good Logo" />}
          />

      </div>
    </div>
  );
}
