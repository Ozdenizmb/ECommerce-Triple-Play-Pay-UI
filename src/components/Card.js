import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../style/Card.css';

const Card = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <figure className="card shadow">

                    <a href="details.html" className="img-wrap">
                        <b className="badge bg-success"> İndirim </b>
                        <img src="1.jpeg" alt="" />
                    </a>

                    <figcaption className="info-wrap border-top">

                        <a href="" className="float-end btn btn-light btn-icon">
                            <FontAwesomeIcon icon={faHeart} className="icon" />
                        </a>

                        <a href="" className="title text-truncate">
                            Apple Watch Yıldız Işığı Alüminyum Kasa ve Spor Kordon
                        </a>

                        <div className="price-wrap">
                            <span className="price">6.599 TL</span>
                            <del className="price-old">6.999 TL</del>
                        </div>

                    </figcaption>

                </figure>
            </div>
        </div>
    )
}

export default Card