import React from 'react'
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>what's happening</h2>
            </div>
        </div>
    )
}
