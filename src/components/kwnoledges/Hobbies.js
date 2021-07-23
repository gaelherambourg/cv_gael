import React from 'react';

const Hobbies = () => {
    return (
        
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby"><i className="fas fa-hiking"></i><span>Randonnées</span> </li>
                <li className="hobby"><i className="fas fa-passport"></i><span>Voyages</span> </li>
                <li className="hobby"><i className="fas fa-basketball-ball"></i><span>Sports</span> </li>
                <li className="hobby"><i className="fas fa-water"></i><span>Snorkeling</span> </li>
                <li className="hobby"><i className="fas fa-skiing"></i><span>Ski</span> </li>
            </ul>
        </div>
    
    );
};

export default Hobbies;