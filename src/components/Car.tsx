import React, { FC } from "react";

export type CarProps = {
    model: string;
    photo_url: string;
}

export const Car: FC<{ obj: CarProps }> = (props): JSX.Element => {
    console.log("Car component rendered")
    return (
        <div>
            <h3>{props.obj.model}</h3>
            <img src={props.obj.photo_url} alt="car" />
        </div>
    )
}