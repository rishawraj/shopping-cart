import plant_img from "../styles/plant2.jpg";
// import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="text-contact">
        <div>Phone: 555-555-5555</div>
        <div>
          Email: <a href="#"> info@artificialeden.com </a>
        </div>
        <div>
          Website: <a href="#">www.artificialeden.com</a>
        </div>
        <div className="address">
          Address: 123 Fake Street, Faketown USA 12345
        </div>
      </div>
      <div className="image-contact">
        <img src={plant_img} alt="plant-img" width="300px" />
      </div>
    </div>
  );
};

export { Contact };
