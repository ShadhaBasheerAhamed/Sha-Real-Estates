import Sidebar from "./Sidebar";

const BlogDetail = () => {
    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-detail">
                        <img className="w-100" src="/img/product1.jpeg" alt="real estate" />
                        <span className="blog-detail-category">Real Estate</span>
                        <h1 className="blog-detail-title">10 Tips for First-Time Home Buyers</h1>
                        <span className="blog-detail-date">03.06.2021</span>
                        <p className="blog-detail-content">
                            Buying your first home is an exciting journey, but it can also be overwhelming. To help you navigate this process, here are ten essential tips. Start by understanding your budget and getting pre-approved for a mortgage. This will give you a clear picture of what you can afford. 
                        </p>
                        <h2 className="blog-detail-alttitle">Understand Your Needs</h2>
                        <p className="blog-detail-content">
                            Consider what you need in a home. Think about the number of bedrooms, location, and amenities that are important to you and your family. Creating a list of must-haves will help narrow down your search.
                        </p>
                        <h2 className="blog-detail-alttitle">Research the Market</h2>
                        <p className="blog-detail-content">
                            Take the time to research neighborhoods and property values. Understanding the market trends in your desired area will help you make informed decisions and potentially save you money.
                        </p>
                        <h2 className="blog-detail-alttitle">Hire a Real Estate Agent</h2>
                        <p className="blog-detail-content">
                            A qualified real estate agent can be invaluable. They can guide you through the buying process, negotiate on your behalf, and provide insights that you may not have considered. Choose someone with a good reputation and experience in the area you're interested in.
                        </p>
                        <h2 className="blog-detail-alttitle">Get a Home Inspection</h2>
                        <p className="blog-detail-content">
                            Before finalizing your purchase, ensure you get a thorough home inspection. This can help identify potential issues and give you leverage in negotiations. Always be prepared for unexpected repairs after moving in.
                        </p>
                        <h2 className="blog-detail-alttitle">Be Patient and Stay Flexible</h2>
                        <p className="blog-detail-content">
                            The home buying process can take time, and things may not always go as planned. Stay patient, remain flexible, and keep an open mind as you search for your dream home.
                        </p>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}

export default BlogDetail;
