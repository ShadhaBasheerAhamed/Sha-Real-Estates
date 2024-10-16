import Slider from "react-slick";
import Title from "./Title";
import ReferenceItem from "./ReferenceItem";

const References = () => {
    const title = {
        text: "Our Happy Clients",
        description: "See what our satisfied clients have to say about us"
    };

    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className="section-references">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...settings}>
                            <ReferenceItem name="John Doe" feedback="I had a fantastic experience buying my first home! The team was incredibly helpful." />
                            <ReferenceItem name="Jane Smith" feedback="Selling my property was a breeze. They handled everything professionally!" />
                            <ReferenceItem name="Michael Johnson" feedback="Their expertise in the market helped me find the perfect investment property." />
                            <ReferenceItem name="Emily Davis" feedback="I appreciate their dedication and support throughout the entire process!" />
                            <ReferenceItem name="Robert Brown" feedback="They really listened to my needs and found me the best options!" />
                            <ReferenceItem name="Linda Wilson" feedback="Their attention to detail made the whole experience enjoyable!" />
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default References;
