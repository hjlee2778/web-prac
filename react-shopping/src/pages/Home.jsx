import React from 'react';
import './Home.css';
import { ImHeadphones } from "react-icons/im";

const Home = () => {
    return (
        <div className="container">
            <div className="music-visualizer">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ImHeadphones className="icon"/>
            <div className="box">
                지금, 이 사운드를 느껴보세요.
            </div>
        </div>
    );
};

export default Home;

