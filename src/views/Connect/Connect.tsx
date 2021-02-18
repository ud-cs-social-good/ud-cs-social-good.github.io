import React from "react";
import "./Connect.scss";
import { SocialCard } from "components";

export function Connect(): JSX.Element {
  return (
    <div className="View">
      <h1>Get Involved With CS+SG</h1>

      <div className="Cards">
        <SocialCard>
          <div>
            <h2>Connect With Us!</h2>
                <div>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png" alt="Discord Logo"></img>
                    <p>Join our <a href="https://discord.gg/3wtbBfvcZq" target="_blank" rel="noopener noreferrer">Discord</a></p>
                    
                </div>                
                <div>
                <img src="https://fanapeel.com/wp-content/uploads/logo_-university-of-delaware-fightin-blue-hens-ud.png" alt="University of Delaware"></img>
                  <p>Add us on <a href="https://studentcentral.udel.edu/organization/cssocialgood" target="_blank" rel="noopener noreferrer">Student Central</a></p>
                </div>
                <hr />
                <div>
                  <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="GitHub Logo"></img>
                  <p>Connect with us on <a href="https://github.com/ud-cs-social-good" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
          </div>
        </SocialCard>
      </div>
    </div>
  );
}
