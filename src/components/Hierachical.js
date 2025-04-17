import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import './Hierarchical.css'; // Import CSS for animation

const Hierarchical = () => {
    const [showChild, setChild] = useState(false);

    const MyChild = () => {
        return (
            <div className="child">
                MyChild Component
            </div>
        );
    };

    useEffect(() => {
        console.warn('rendered');
        return () => {
            console.warn('re-rendered');
        };
    });

    return (
        <div>
            <Nav />
            <button className="mt-5" onClick={() => setChild(!showChild)}>
                Toggle MyChild
            </button>

            <div className={`circle ${showChild ? 'startAnimation' : 'stopAnimation'}`} />

            {showChild && <MyChild />}
        </div>
    );
};

export default Hierarchical;
