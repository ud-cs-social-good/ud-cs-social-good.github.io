import React from "react";
import { SplitCard, CenteredCard, NameCard } from "components";
import MariaImage from "assets/images/maria.png";
import DianeImage from "assets/images/diane.png";
import EmilyImage from "assets/images/emily.jpg";
import LaurenImage from "assets/images/lauren.jpg";
import "./Team.scss";

export function Team(): JSX.Element {
  return (
    <div className="View">
      <h1>Meet The CS+SG 2020-2021 Executive Board</h1>

      <div className="Cards">

        <NameCard
          picture={<img src={MariaImage} alt="The Meticulous Maria" />}
          info={
            <div>
              <h1>Maria van Venrooy</h1>
              <h3>President</h3>
              <ul>
                <li>Major: Computer Science </li>
                <li>Minors: Mathematics and Women's Studies</li>
                <li>Hobbies: My hobbies include reading, playing ukulele, printmaking, removing invasive plants from White Clay Creek, and saving the world</li>
              </ul>
            </div>
          }
        />

<NameCard
          picture={<img src={DianeImage} alt="The Dynamic Diane" />}
          info={
            <div>
              <h1>Diane Vinson</h1>
              <h3>Vice President</h3>
              <ul>
                <li>Major: Computer Science with a concentration in cybersecurity </li>
                <li>Minors: Mathematics, Cybersecurity, and Legal Studies</li>
                <li>Fun Fact: I've never been on a plane</li>
              </ul>
            </div>
          }
        />

        
<NameCard
          picture={<img src={EmilyImage} alt="The Enticing Emily" />}
          info={
            <div>
              <h1>Emily Taylor</h1>
              <h3>Treasurer</h3>
              <ul>
                <li>Major: Computer Science with a concentration in software engineering </li>
                <li>Fun Fact: I have been to Universal Studios in Florida at least 8 times, and the one in California once</li>
              </ul>
            </div>
          }
        />

<NameCard
          picture={<img src={LaurenImage} alt="Lord Lauren" />}
          info={
            <div>
              <h1>Lauren Baron</h1>
              <h3>Secretary</h3>
              <ul>
                <li>Major: Computer Science</li>
                <li>Hobbies: I work out of the HCI Lab to apply Virtual Reality to healthcare problems and am a backend developer for a website for our Department of Agriculture research. I also love to travel and paint/draw :)</li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
}
