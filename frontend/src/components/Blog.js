import BlogItem from "./BlogItem";

const Blog = () => {
    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Real Estate Insights</h1>
                            <h2 className="page-description">Latest Trends and Tips</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row"> 
                        <BlogItem link="blog-1" title="5 Tips for First-Time Home Buyers" />
                        <BlogItem link="blog-2" title="Understanding Market Trends: A Guide for Investors" />
                        <BlogItem link="blog-3" title="How to Stage Your Home for a Quick Sale" />
                        <BlogItem link="blog-4" title="The Importance of Location in Real Estate" />
                        <BlogItem link="blog-5" title="Top 10 Renovations to Increase Property Value" />
                        <BlogItem link="blog-6" title="Navigating Real Estate Financing Options" />
                        <BlogItem link="blog-7" title="The Benefits of Working with a Real Estate Agent" />
                        <BlogItem link="blog-8" title="Understanding Property Taxes and Fees" />
                        <BlogItem link="blog-9" title="How to Choose the Right Neighborhood for Your Family" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
