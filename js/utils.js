import palettes from "nice-color-palettes" assert { type: "json" };

// create grid
export const createGrid = (size) => {
    const points = [];

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const u = size <= 1 ? 0.5 : x / (size - 1);
            const v = size <= 1 ? 0.5 : y / (size - 1);
            points.push([u, v]);
        }
    }

    return points;
};

export const createPalette = (maxLength) => {
    return palettes[Math.floor(Math.random() * palettes.length)].slice(
        0,
        maxLength
    );
};

export const expose = (state) => Object.assign(window, state);
