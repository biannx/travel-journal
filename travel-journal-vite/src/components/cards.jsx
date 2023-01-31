import React from "react";

export default function Cards(props) {
    return (
        <div className="row my-5">
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
                <img className="card-img rounded" src={props.imageUrl} alt={props.alt} />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 ">
                <div className="card-details">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="card-location text-uppercase px-2">{props.location}</span>
                    <span className="card-map">
                        <a href={props.googleMapsUrl} className="map">
                            <u>View on Google Maps</u>
                        </a>
                    </span>
                    <h1 className="card-title fw-bold py-3">{props.title}</h1>
                    <span className="card-date fw-semibold">{props.startDate} - {props.endDate}</span>
                    <p className="card-description py-3">{props.description}</p>
                </div>
            </div>
        </div>

    )

}