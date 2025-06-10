import Wrapper from "../../Wrapper";
import "../../css/OurTeam.css";

function OurTeam() {
  return (
    <>
      <Wrapper>
        <OurTeamPage />
      </Wrapper>
    </>
  );
}

export default OurTeam;

export function Mastercard() {
  return (
    <>
      <div className="main-card">
        <div className="photo-chief">
          <img src="img/team-1.jpg" alt="" className="chief-img" />
        </div>
        <div className="cheif-detail">
          <div>
            <h2 className="cheif-name">Peterson</h2>
          </div>
          <div>
            <h3 className="disi">Designation</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export function OurTeamPage() {
  return (
    <>
      <div className="section-6">
        <div className="our-team">
          <div>
            <h3 className="team">Team Member</h3>
          </div>
          <div>
            <h2 className="master">Our Master Chef</h2>
          </div>
        </div>
        <div className="master-card">
          <Mastercard />
          <Mastercard />
          <Mastercard />
          <Mastercard />
        </div>
      </div>
    </>
  );
}
