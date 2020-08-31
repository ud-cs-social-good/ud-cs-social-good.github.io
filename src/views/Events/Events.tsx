import React from "react";
import "./Events.scss";
import GatewayImage from "assets/images/gateway.png";
import LogoImage from "assets/images/cssg_logo_purple.svg";
import { SplitCard, CenteredCard, DenseCard } from "components";

export function Events(): JSX.Element {
  return (
    <div className="View">
      <h1>Events</h1>
      <div className="Cards">
      <SplitCard
        left={
          <div>
            <h2>The Computer Club at Gateway Labs School</h2>
            <p>During the fall 2019 semster, our team created a computer science after school program for the middle schoolers at Gateway Lab Charter School in Wilmmington, DE.
              Our club created a curriculum for the club that explored fundamental ideas in computer science and more modern topics like ethics and security. Our club members also went
              in twice a week to teach the the students in the after school program about these ideas.
            </p>
          </div>}
          right={
            <img src={GatewayImage} alt="Gateway" />
          }
        />

<SplitCard
        right={
          <div>
            <h2>Technica 2019</h2>
            <p>In October 2019, our club was able to send 7 participants and 2 mentors to Technica, the world's largest women and non-binary hackathon! Our participants had a great time listening 
              to panels, attending fun activites, and learning new skills for their projects. 
            </p>
          </div>}
          left={
            <img src={LogoImage} alt="Gateway" />
          }
        />

<SplitCard
        left={
          <div>
            <h2>Assisting Teachers at Elkton Middle School</h2>
            <p>Throughout the fall of 2019, our club was able to send several students to Elkton Middle School in Elkton, Maryland each week to help their computer science teacher run his
              class. Our club members helped to answer students' questions, debug their Scratch based projects, and explain concepts to them. Our team loved going to Elkton and hopes to return soon! 
            </p>
          </div>}
          right={
            <img src={LogoImage} alt="Gateway" />
          }
        />
        </div>
    </div>
    
  );
}
