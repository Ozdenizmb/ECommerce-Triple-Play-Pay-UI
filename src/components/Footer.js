import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary py-4">
        <div className="container">
            <div className="row gy-3">

                <div className="col-md-4">
                    <form action="">
                        <div className="input-group">
                            <input type="text" placeholder="Email" className="form-control" />
                            <button className="btn btn-outline-warning">Subscribe</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-8">
                    <nav className="text-center text-md-end">
                        <a href="#" className="btn btn-outline-warning btn-icon me-1">
                            <FontAwesomeIcon icon={faFacebookF} style={{width: "18px", height: "18px"}} />
                        </a>
                        <a href="#" className="btn btn-outline-warning btn-icon me-1">
                            <FontAwesomeIcon icon={faInstagram} style={{width: "18px", height: "18px"}} />
                        </a>
                        <a href="#" className="btn btn-outline-warning btn-icon me-1">
                            <FontAwesomeIcon icon={faYoutube} style={{width: "18px", height: "18px"}} />
                        </a>
                        <a href="#" className="btn btn-outline-warning btn-icon me-1">
                            <FontAwesomeIcon icon={faTwitter} style={{width: "18px", height: "18px"}} />
                        </a>
                    </nav>
                </div>

                <div className="col-md-12">
                    <p className="text-center text-white">@2025 All Rights Reserved.</p>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer