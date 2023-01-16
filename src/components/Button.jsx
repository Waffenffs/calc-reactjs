import React from "react"
import '../App.css'

export default function Button(props) {

    function whatRow(row){
        switch(row){
            case "1":
                return "row--buttons"
            case "2":
                return "second-row--buttons"
            case "3":
                return "third-row--buttons"
            case "4":
                return "fourth-row--buttons"
        }
    }

    return(
        <button 
            className={`${whatRow(props.row)} ${props.last && "last"}`}
            onClick={props.special ? props.altHandleClick : props.handleClick} 
            value={props.specialValue}
        >
            {props.text}
        </button>
    )
}