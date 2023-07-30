import React, { FC } from "react";

export interface CarProps {
  // Define your props interface here
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export const Car: FC<CarProps> = (props): JSX.Element => {
    console.log("hello")
    return (
        <div>
            <h3>{props.Model_ID}</h3>
            <p>{props.Model_Name}</p>
            <p>{props.Make_ID}</p>
            <p>{props.Make_Name}</p>
        </div>
    )
}