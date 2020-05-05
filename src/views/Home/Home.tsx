import React  from 'react';
import './Home.scss';
import { Card } from 'components';
import MeetingsImg from 'assets/images/meeting.jpg';

export function Home(): JSX.Element {
  return (
    <div className="Home">
      <h1>University of Delaware CS + Social Good</h1>

      <div className="Cards">
        <Card
          left={
            <img src={MeetingsImg} alt='CS + Social Good Logo'/>
          }
          right={
            <div>
              <h2>General Body Meetings</h2>
              Our next general body meetings will be at 7:00pm on Tuesday,
              March 10th in the Evans iSuite 
            </div>
          }
        />
      </div>

    </div>
  );
}
