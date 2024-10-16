import { useEffect, useState } from "react";
import banner from "../banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    const [search, setSearch] = useState();
    const [find, setFind] = useState([]);
    const [word, setWord] = useState("");

    useEffect(() => {
        setSearch(["Luxury Villas", "Modern Apartments", "Commercial Spaces", "Affordable Housing"]);
    }, []);

    const findSearch = (e) => {
        setWord(e.target.value);
        const filteredProperties = search.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));
        e.target.value.length === 0 ? setFind([]) : setFind(filteredProperties);
    }

    const findResult = () => {
        if (find.length === 0 && word.length > 0) {
            return <div className="find-search">No results found</div>;
        }
        if (find.length > 0) {
            return (
                <div className="find-search">
                    {find.map(item => {
                        return <Link key={item} to="#">{item}</Link>;
                    })}
                </div>
            );
        }
    }

    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Find your dream property with us, where luxury meets comfort.</p>
                                <h2 className="mt-2 mb-4 banner-title"><strong>Welcome to Your Future Home</strong></h2>
                                <div className="search-area">
                                    <input 
                                        value={word} 
                                        onChange={(e) => findSearch(e)} 
                                        type="text" 
                                        className="inp-search" 
                                        placeholder="Search for properties" 
                                    />
                                    <button className="btn-search m-2">Search All</button>
                                </div>
                                {findResult()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
