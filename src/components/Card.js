import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../style/Card.css';
import Link from 'next/link';

const Card = ( {product} ) => {

    const {id = "", badge = "", badgeClass = "", image = "", title = "", price = "0.00$", oldPrice = "0.00$"} = product;

    return (
        <figure className="card shadow">

            <Link href={`details/${id}`} className="img-wrap">
                <b className={`badge ${badgeClass}`}> {badge} </b>
                <img src={image || null} alt={title} />
            </Link>

            <figcaption className="info-wrap border-top">

                <Link href={`details/${id}`} className="float-end btn btn-light btn-icon">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                </Link>

                <Link href="" className="title text-truncate">
                    {title}
                </Link>

                <div className="price-wrap">
                    <span className="price">{price}</span>
                    <del className="price-old">{oldPrice}</del>
                </div>

            </figcaption>

        </figure>
    )
}

export default Card