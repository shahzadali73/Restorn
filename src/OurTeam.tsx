import "./Section6.css";

function OurTeam() {
  return (
    <>
      <div className="section-6">
        <div className="our-team">
          <div>
            <h3 className="team">Team Member</h3>
          </div>
          <div>
            <h2 className="master">Our Master Cheif</h2>
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

export default OurTeam;

export function Mastercard() {
  return (
    <>
      <div className="main-card">
        <div>
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
