import React, { FC } from "react";
import "../../style/Car.css";

export type CarProps = {
    id: number;
    model: string;
    photo_url: string;
    manufacturer_name: string;
    model_year: number;
    fuel_name: string;
    drivetrain: string;
    electric_range: string;
}

export const Car: FC<{ obj: CarProps }> = (props): JSX.Element => {
    const capitalizeWords = (input: string) => {
        if (input) {
            const processedWords = input.split(" ").map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            return processedWords.join(" ");
        }
        return "";
    }

    const processMileage = (input: string) => {
        if (input) {
            return input.includes("-") || Number(input) > 70 ? input + " mi range" : input + " MPG";
        } else {
            return "Unknown MPG"
        }
    }

    return (
        <div className="mainPageCar">
            <h3 className="carModelTitle">{capitalizeWords(props.obj.manufacturer_name) + " " + capitalizeWords(props.obj.model)}</h3>
            <div className="carShortInfoSection">
                <div className="carShortInfoSectionItem">{props.obj.model_year}</div>
                <div className="carShortInfoSectionItem">{capitalizeWords(props.obj.fuel_name)}</div>
                <div className="carShortInfoSectionItem">{processMileage(props.obj.electric_range)}</div>
            </div>
            <img src={props.obj.photo_url ? props.obj.photo_url : "unknownCar.jpeg"} alt="car" className="carThumbnail"/>
        </div>
    )
}