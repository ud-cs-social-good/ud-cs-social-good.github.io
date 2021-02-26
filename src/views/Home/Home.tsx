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
            left= {
              <div>
                <h2>Tea++ Meetings</h2>
                Our first Tea++ meeting of the semester will be held on <b>Wednesday, March 3rd, 2021</b> from <b>6-7pm</b> on <a href="https://udel.zoom.us/j/6748152461" target="_blank" rel="noopener noreferrer">https://udel.zoom.us/j/6748152461</a>
                 . We'll be working more on the UDance app and helping our new members get set up with Flutter and Android studio!
              </div>  
            }
            right={<img src={TeaImg} alt="CS + Social Good Logo" />}
          />

        <SplitCard
          left={<img src={MeetingsImg} alt="CS + Social Good Logo" />}
          right = {
            <div>
              <h2>General Body Meetings</h2>
              Our first general body meeting will be held <b>Wednesday, February 24th, 2021</b> from <b>6-7pm</b>.  The link for our general body 
              meetings is <a href="https://udel.zoom.us/j/6748152461" target="_blank" rel="noopener noreferrer">https://udel.zoom.us/j/6748152461</a></div>
          }
          />



      </div>
    </div>
  );
}
