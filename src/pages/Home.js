import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div>
            <div className="home">
                <Navigation />
                    <div className="homeContent">
                    <div className="content">
                        
                        <h1>Gael Herambourg</h1>
                        <h2>Concepteur Développeur d'application</h2>
                        <div className="pdf">
                            <a href="./media/CV_Gael_Herambourg(v_c).pdf" target="_blank">Télécharger CV</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;