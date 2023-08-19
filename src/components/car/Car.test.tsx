import React from 'react'
import renderer from 'react-test-renderer';
import { Car } from "./Car"

it('changes the class when hovered', () => {
    const component = renderer.create(
        <Car 
            obj={{
                "id": 1,
                "model": "test-model",
                "photo_url": "test-url",
                "manufacturer_name": "test-manufacturer",
                "model_year": 2023,
                "fuel_name": "test-fuel",
                "drivetrain": "test-drivetrain",
                "electric_range": "test-range"
            }}
        />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});