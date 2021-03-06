import React from "react";
import styles from "./Card.module.scss";

const Card = ({ results }) => {
    let display;
  
    if (results) {
        display = results.map((x) => {
            let { id, image, name, location } = x;
          
              return (
                <div key={id} className="col-4 position-relative">
                    <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                        <img className={`${styles.img} img-fluid`} src={image} alt="" />
                        <div className={`${styles.content}`}>
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6 fw-normal">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    else{
      display = "No Characters Found :/";
    }
  
    return <>{display}</>;
};

export default Card;