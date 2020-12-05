import React from "react"
import pecs from "./images/justhavethepec.jpg"

export const Home = ({data}) => {
    return (
        <div className="w-screen h-screen b-blue">
            <img src={pecs} className="h-screen w-auto"/>
        </div>
    )
}