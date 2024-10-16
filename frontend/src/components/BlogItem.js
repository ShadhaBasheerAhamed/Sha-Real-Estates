import { Link } from "react-router-dom";

const BlogItem = ({ title, link }) => {
    return (
        <div className="col-lg-4">
            <div className="blog-item">
                <div className="blog-img">
                    <img src="/img/product1.jpeg" alt="real estate" className="w-100" />
                </div>
                <div className="blog-content">
                    <h2 className="blog-title"><Link to={`/blog/${link}`}>{title}</Link></h2>
                    <div className="blog-info">
                        <div className="blog-info-item"><i className="far fa-calendar-alt"></i><span>20.10.2020</span></div>
                        <div className="blog-info-item"><i className="far fa-comments"></i><span>0 Comments</span></div>
                    </div>
                    <div className="blog-text">
                        Explore the latest trends in the real estate market and discover tips for buying your first home. Learn how to assess property values and what to look for during a home inspection to ensure you make the best investment.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;
