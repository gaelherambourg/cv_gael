import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "C#", xp:0.8},
            {id: 2, value: "Java", xp:0.3},
            {id: 3, value: "Php", xp:0.4},
            {id: 4, value: "Javascript", xp:0.2},
            {id: 5, value: "Css", xp:0.8},
        ],
        frameworks: [
            {id: 1, value: "Spring", xp:0.3},
            {id: 2, value: "Symfony", xp:0.4},
            {id: 2, value: "Bootstrap", xp:0.8},
            {id: 3, value: ".NET", xp:0.8},
            {id: 4, value: "Angular", xp:0.2},
            {id: 5, value: "React", xp:0.1},
        ]
    }
    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    title="frameworks & bibliothèques"
                    className="framworksDisplay"
                    languages={frameworks}
                />

            </div>
        );
    }
}

export default Languages;