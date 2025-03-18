import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../style/Card.css';

const Card = ( product ) => {

    const {badge = "", badgeClass = "", image = "", title = "", price = "0.00$", oldPrice = "0.00$"} = product;

    return (
        <figure className="card shadow">

            <a href="details.html" className="img-wrap">
                <b className={`badge ${badgeClass}`}> {badge} </b>
                <img src={image} alt={title} />
            </a>

            <figcaption className="info-wrap border-top">

                <a href="" className="float-end btn btn-light btn-icon">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                </a>

                <a href="" className="title text-truncate">
                    {title}
                </a>

                <div className="price-wrap">
                    <span className="price">{price}</span>
                    <del className="price-old">{oldPrice}</del>
                </div>

            </figcaption>

        </figure>
    )
}

export default Card