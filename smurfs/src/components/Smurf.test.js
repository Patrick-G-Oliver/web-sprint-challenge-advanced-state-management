import React from "react";
import { render, findAllByTestId } from "@testing-library/react";

import Smurf from "./Smurf";

test("compnent renders list of smurfs", () => {
    const { rerender, getAllByTestId, queryAllByTestId } = 
    render(<Smurf smurfs={[]} />);

    const initialSmurfRender = queryAllByTestId(/smurfs/i);
    expect(initialSmurfRender).toHaveLength(0);
    expect(initialSmurfRender).toStrictEqual([]);

    rerender(<Smurf smurfs={mockData} />);

    const SmurfRerender = getAllByTestId(/smurfs/i);
    expect(SmurfRerender).toHaveLength(3);
});

const mockData = [
    {
    "name": "Brainey",
    "age": 200,
    "height": "5cm",
    "id": 0
    },
    {
    "name": "Smurfette",
    "age": "25",
    "height": "4cm",
    "id": 1
    },
    {
    "name": "Papa",
    "age": "800",
    "height": "5cm",
    "id": 2
    }
];