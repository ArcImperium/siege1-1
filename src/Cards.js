import React from "react";
import {Link} from "react-router-dom";
import "./Cards.css";

export const items = [
    {
        title: "Waffles",
        link: "/waffles"
    },
    {
        title: "Pancakes",
        link: "/pancakes"
    },
    {
        title: "French Toast",
        link: "/french-toast"
    }
];

const Cards = ({items}) => {
    return (
        <div className="card-container">
            {items.map((item,index) => (
                <Link to={item.link} key={index} className="card">
                    <h3>{item.title}</h3>
                </Link>
            ))}
        </div>
    );
};

export default Cards;