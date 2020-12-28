import React from "react";
import "./About.scss";
import { DenseCard } from "components";

export function About(): JSX.Element {
  return (
    <div className="View">
      <h1>About Us</h1>

      <div className="Cards">
        <DenseCard>
          <div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to foster interest in applying technical knowledge and experience
              in ways that will help our community and promote technology as a
              means for positive social change
            </p>
            <hr />
            <h2>Our Goals</h2>
            <ul>
              <li>
                Connect students with technical projects that help promote
                social good
              </li>
              <li>
                Discuss and address topics relating to technological ethics
              </li>
              <li>Help educated K-12 student on basic programing concepts</li>
            </ul>
            <hr />
            <h2>What We Do</h2>
            <ul>
              <li>
                Work with other UD RSOs to develop websites and applications for their clubs (check out our work with UDance on our <a href="./events">events</a> page!)
              </li>
              <li>
                Assistant teach and plan curricula for local middle schools and
                high schools good
              </li>
              <li>
                Work on programing projects that aim to positively effect the
                local community
              </li>
              <li>
                Host discussions regarding ethical topics related to computing
              </li>
              <li>
                Host social and networking events for University of Delaware
                Computer Science majors
              </li>
            </ul>
          </div>
        </DenseCard>
      </div>
    </div>
  );
}
