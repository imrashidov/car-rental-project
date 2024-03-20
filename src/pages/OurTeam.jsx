import HeroPages from "../components/HeroPages/HeroPages.jsx";
import BookBanner from "../components/BookBanner/BookBanner.jsx";
import Members from "../data/Members.jsx";

const OurTeam = () => {
  return (
    <section id="our-team" className="our-team-section">
      <HeroPages name="Our Team" />
      <div className="container">
        <div className="team-container">
          {Members.map((member) => (
            <div className="member-box" key={member.id}>
              <div className="member-box__img">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="member-box__name">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookBanner />
    </section>
  );
};

export default OurTeam;
