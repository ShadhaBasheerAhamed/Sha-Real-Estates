import Title from "./Title";
import TeamItem from "./TeamItem";

const TeamList = () => {
    const title = {
        text: "Meet Our Team",
        description: "Dedicated professionals committed to helping you find your dream property"
    };

    const teamMembers = [
        {
            name: "Alice Johnson",
            position: "Real Estate Agent",
            imageUrl: "/img/alice.jpg",
            facebookUrl: "https://facebook.com/alice",
            twitterUrl: "https://twitter.com/alice",
            instagramUrl: "https://instagram.com/alice",
            linkedinUrl: "https://linkedin.com/in/alice"
        },
        {
            name: "Bob Smith",
            position: "Property Manager",
            imageUrl: "/img/bob.jpg",
            facebookUrl: "https://facebook.com/bob",
            twitterUrl: "https://twitter.com/bob",
            instagramUrl: "https://instagram.com/bob",
            linkedinUrl: "https://linkedin.com/in/bob"
        },
        {
            name: "Carol White",
            position: "Real Estate Consultant",
            imageUrl: "/img/carol.jpg",
            facebookUrl: "https://facebook.com/carol",
            twitterUrl: "https://twitter.com/carol",
            instagramUrl: "https://instagram.com/carol",
            linkedinUrl: "https://linkedin.com/in/carol"
        }
    ];

    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <TeamItem key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamList;
