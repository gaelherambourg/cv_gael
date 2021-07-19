import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { findAllInRenderedTree } from 'react-dom/test-utils';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header">

                </div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i><span>Nantes</span></li>
                        <li><i className="fas fa-mobile-alt">
                            <CopyToClipboard text="0638180364">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié !');}}>06 38 18 03 64</span>
                            </CopyToClipboard></i>
                        </li>
                        <li><i className="far fa-envelope">
                            <CopyToClipboard text="g.herambourg.gh@gmail.com">
                                <span className="clickInput" onClick={() => { alert('Email copié !');}}>g.herambourg.gh@gmail.com</span>
                            </CopyToClipboard></i>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="http://www.github.com/gaelherambourg" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/gael-herambourg/" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;