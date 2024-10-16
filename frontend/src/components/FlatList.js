import Title from "./Title";
import FlatItem from "./FlatItem";

const FlatList = () => {
    const title = {
        text: "Available Flats for Rent",
        description: "Explore our range of modern and spacious apartments"
    };

    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <FlatItem slug="modern-2-bedroom" />
                    <FlatItem slug="luxury-3-bedroom" />
                    <FlatItem slug="cozy-1-bedroom" />
                    <FlatItem slug="spacious-studio" />
                    <FlatItem slug="penthouse-apartment" />
                    <FlatItem slug="family-friendly-flat" />
                </div>
            </div>
        </section>
    );
}

export default FlatList;
