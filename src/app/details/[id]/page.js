import React from 'react'
import data from '../../../../data.json';
import '../../../style/Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faStar  } from '@fortawesome/free-solid-svg-icons';
import Card from '@/components/Card';

const Details = ({ params }) => {
    const { id } = params;

    const product = data.products.find((product) => product.id === id);

    if (!product) {
        return <div>Product Not Found!</div>;
    }

    const product1 = data.products.find((product) => product.id === "1");
    const product2 = data.products.find((product) => product.id === "2");
    const product3 = data.products.find((product) => product.id === "3");
    const product4 = data.products.find((product) => product.id === "4");

    return (
        <div>
            <section className="py-4">
                <div className="container">
                    <div className="row">

                        <aside className="col-lg-5">
                            <div className="gallery-wrap">

                                <div className="img-big-wrap img-thumbnail">
                                    <a data-type="image" data-fslightbox="mygallery">
                                        <img src={product.image} alt={product.title} />
                                    </a>
                                </div>

                                <div className="thumbs-wrap">
                                    {product.category === "Watch" ? 
                                        <div>
                                            <a data-type="image" data-fslightbox="mygallery">
                                                <img width="60" height="60" src="/1.jpeg" alt={product.title}/>
                                            </a>
                                            <a data-type="image" data-fslightbox="mygallery">
                                                <img width="60" height="60" src="/2.jpeg" alt={product.title}/>
                                            </a>
                                            <a data-type="image" data-fslightbox="mygallery">
                                                <img width="60" height="60" src="/3.jpeg" alt={product.title}/>
                                            </a>
                                            <a data-type="image" data-fslightbox="mygallery">
                                                <img width="60" height="60" src="/4.jpeg" alt={product.title}/>
                                            </a>
                                            <a data-type="image" data-fslightbox="mygallery">
                                                <img width="60" height="60" src="/5.jpeg" alt={product.title}/>
                                            </a>
                                        </div>
                                        :
                                        <div>
                                            <a data-type="image" data-fslightbox="mygallery">
                                                <img width="60" height="60" src="/6.jpeg" alt={product.title}/>
                                            </a>
                                            <a data-type="image" data-fslightbox="mygallery">
                                                <img width="60" height="60" src="/7.jpeg" alt={product.title}/>
                                            </a>
                                            <a data-type="image" data-fslightbox="mygallery">
                                                <img width="60" height="60" src="/8.jpeg" alt={product.title}/>
                                            </a>
                                        </div>
                                    }
                                </div>

                            </div>
                        </aside>

                        <main className="col-lg-7">
                            <article>

                                <h4 className="title text-dark">{product.title}</h4>

                                <div className="rating-wrap">
                                    <FontAwesomeIcon icon={faStar} className="icon checked" />
                                    <FontAwesomeIcon icon={faStar} className="icon checked" />
                                    <FontAwesomeIcon icon={faStar} className="icon checked" />
                                    <FontAwesomeIcon icon={faStar} className="icon checked" />
                                    <FontAwesomeIcon icon={faStar} className="icon" />
                                </div>

                                <p className="text-success">In Stock</p>

                                <div className="mb-3">
                                    <b className="price h5 me-2">{product.price}</b>
                                    <del className="price h5 text-danger">{product.oldPrice}</del>
                                </div>

                                <div className="product-desc">
                                    <p>{product.detail}</p>
                                </div>

                                <dl className="row">
                                    <dt className="col-lg-4">Color:</dt>
                                    <dd className="col-lg-8">{product.color}</dd>
                                    <dt className="col-lg-4">Connection Features:</dt>
                                    <dd className="col-lg-8">{product.connectionFeatures}</dd>
                                    {product.category === "Phone" &&
                                        <div className="row">
                                            <dt className="col-lg-4">Ram:</dt>
                                            <dd className="col-lg-8">{product.ram}</dd>
                                            <dt className="col-lg-4">CPU Speed:</dt>
                                            <dd className="col-lg-8">{product.cpuSpeed}</dd>
                                            <dt className="col-lg-4">Memory Storage Capacity:</dt>
                                            <dd className="col-lg-8">{product.memoryStorageCapacity}</dd>
                                        </div>
                                    }
                                </dl>

                                <div className="row mb-4">
                                    <div className="col-6 col-md-4 mb-2">
                                        <label htmlFor="" className="form-label">Kasa Boyutu</label>
                                        <select name="" id="" className="form-select">
                                            <option value="0">41 mm</option>
                                            <option value="1">45 mm</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="buttons">
                                    <a href="#" className="btn btn-warning me-2" onClick={console.log(product1)}>
                                        <FontAwesomeIcon icon={faShoppingCart} className="icon me-1" />
                                        Add Cart
                                    </a>
                                    <a href="#" className="btn btn-light me-2">
                                        <FontAwesomeIcon icon={faHeart} className="icon me-1" />
                                        Add Favorites
                                    </a>
                                </div>

                            </article>
                        </main>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="container">

                    <header className="section-heading">
                        <h4 className="mb-3">Bu ürüne bakanlar bu ürünlere de baktılar</h4>
                    </header>

                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Card product={product1} />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Card product={product2} />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Card product={product3} />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Card product={product4} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Details