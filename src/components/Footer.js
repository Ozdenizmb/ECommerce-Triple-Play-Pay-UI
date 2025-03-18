import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer class="bg-primary py-4">
        <div class="container">
            <div class="row gy-3">

                <div class="col-md-4">
                    <form action="">
                        <div class="input-group">
                            <input type="text" placeholder="Email" class="form-control" />
                            <button class="btn btn-outline-warning">Subscribe</button>
                        </div>
                    </form>
                </div>

                <div class="col-md-8">
                    <nav class="text-center text-md-end">
                        <a href="#" class="btn btn-outline-warning btn-icon me-1">
                            <FontAwesomeIcon icon={faFacebookF} style={{width: "18px", height: "18px"}} />
                        </a>
                        <a href="#" class="btn btn-outline-warning btn-icon me-1">
                            <FontAwesomeIcon icon={faInstagram} style={{width: "18px", height: "18px"}} />
                        </a>
                        <a href="#" class="btn btn-outline-warning btn-icon me-1">
                            <FontAwesomeIcon icon={faYoutube} style={{width: "18px", height: "18px"}} />
                        </a>
                        <a href="#" class="btn btn-outline-warning btn-icon me-1">
                            <FontAwesomeIcon icon={faTwitter} style={{width: "18px", height: "18px"}} />
                        </a>
                    </nav>
                </div>

                <div class="col-md-12">
                    <p class="text-center text-white">@2025 All Rights Reserved.</p>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer