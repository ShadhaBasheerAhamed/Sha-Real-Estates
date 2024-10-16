import React from "react";

const TeamItem = ({ name, position, imageUrl, facebookUrl, twitterUrl, instagramUrl, linkedinUrl }) => {
    return (
        <div className="col-lg-4">
            <div className="team">
                <div className="team-img">
                    <img src={imageUrl} alt={`${name}`} />
                </div>
                <div className="team-info">
                    <h5 className="team-name">{name}</h5>
                    <h6 className="team-position">{position}</h6>
                    <div className="social-links">
                        {facebookUrl && (
                            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="social-item">
                                <i className="fab fa-facebook"></i>
                            </a>
                        )}
                        {twitterUrl && (
                            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="social-item">
                                <i className="fab fa-twitter"></i>
                            </a>
                        )}
                        {instagramUrl && (
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-item">
                                <i className="fab fa-instagram"></i>
                            </a>
                        )}
                        {linkedinUrl && (
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-item">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamItem;
