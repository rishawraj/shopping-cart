import plant_img from "../styles/plant2.jpg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-container2">
          <div className="text-contact">
            <h3>Github</h3>
            <h3>LinkedIn</h3>
            <h3>Instagram</h3>
            <h3>Twitter</h3>
          </div>
          <div className="image-contact">
            <img src={plant_img} alt="plant-img" width="300px" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Contact };
