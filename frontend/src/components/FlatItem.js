import { Link } from "react-router-dom";

const FlatItem = ({ slug }) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Modern 2-Bedroom Apartment in Downtown</span>
                        <span className="item-price">$1,200/month</span>
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>2 Bedrooms</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span>2 Bathrooms</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Open Kitchen</span>
                        </div>
                        <Link to={`/flat/${slug}`} className="item-title">
                            <button className="btn btn-detail">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlatItem;
