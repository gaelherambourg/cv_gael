import React from 'react';
import Experience from '../components/kwnoledges/Experience';
import Hobbies from '../components/kwnoledges/Hobbies';
import Languages from '../components/kwnoledges/Languages';
import OtherSkills from '../components/kwnoledges/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;