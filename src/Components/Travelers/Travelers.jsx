import Aos from "aos";
import { useEffect } from "react";

const Travelers = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const Travelers = [
    {
      destinationImages: "/t.jpg",
      travelerImage: "/t.jpg",
      travelerName: "Nicol",
      socialLink: "@Nicol5",
      id: "1",
    },
    {
      destinationImages: "/t1.jpg",
      travelerImage: "/t1.jpg",
      travelerName: "Johan",
      socialLink: "@Johan",
      id: "2",
    },
    {
      destinationImages: "/t2.jpg",
      travelerImage: "/t2.jpg",
      travelerName: "Mary",
      socialLink: "@mary",
      id: "3",
    },
    {
      destinationImages: "/t4.jpg",
      travelerImage: "/t4.jpg",
      travelerName: "Jasmina",
      socialLink: "@Jasmina9",
      id: "4",
    },
  ];
  return (
    <div className="travelers container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="sectionContainer"
      >
        <h2 data-aos="fade-down" data-aos-duration="2200">
          Top Travelers of the month!
        </h2>

        <div className="travelersContainer grid">
          {Travelers.map(
            ({
              id,
              destinationImages,
              travelerImage,
              travelerName,
              socialLink,
            }) => (
              <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="singleTravelers"
                key={id}
              >
                <img
                  src={destinationImages}
                  alt=""
                  className="destinationImages"
                />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} alt="" className="travelerImage" />
                  </div>
                  <div className="travelerName">
                    <span> {travelerName}</span>
                    <p> {socialLink}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
