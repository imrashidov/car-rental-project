import downloadGoogle from "../assets/images/download/download-google.png";
import downloadApp from "../assets/images/download/download-appstore.png";

const Download = () => {
  return (
    <section id="download" className="download-section">
      <div className="download-container">
        <div className="download-container__left">
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="download-container__left-buttons">
            <img src={downloadGoogle} alt="Google Play" />
            <img src={downloadApp} alt="App Store" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
