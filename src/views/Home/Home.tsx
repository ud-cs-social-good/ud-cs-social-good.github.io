import React  from 'react';
import './Home.scss';
import { SplitCard, Card } from 'components';
import MeetingsImg from 'assets/images/meeting.jpg';

export function Home(): JSX.Element {
  return (
    <div className="Home">
      <h1>University of Delaware CS + Social Good</h1>

      <div className="Cards">
        <Card>
          <div>
            <h2>Header Header Header</h2>
            Cool this is awesome. Text text text.
          </div>
        </Card>

        <SplitCard
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
