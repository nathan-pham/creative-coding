const fs = require("fs");

const separateSketch = (name) => {
    const capitalizeArray = (title) =>
        title
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
            .replace(".html", "");

    const [number, ...title] = name.split("_");
    return [number, capitalizeArray(title)];
};

const buildSketches = () => {
    const sketchesDir = "sketches";
    const sketches = fs.readdirSync(sketchesDir);

    const html = [];

    for (const sketch of sketches) {
        const [number, name] = separateSketch(sketch);

        html.push(`
            <li class="wrapper__list__item">
            <a href="/sketches/${sketch}" target="_blank">
                Sketch ${number.padStart(3, "0")}: ${name}
            </a>
            </li>
        `);
    }

    const indexContent = fs.readFileSync("index.html", "utf-8");

    const startTag = `<ul class="wrapper__list">`;
    const endTag = `</ul>`;

    const startIndex = indexContent.indexOf(startTag);
    const endIndex = indexContent.indexOf(endTag);

    const compiledIndexContent = `
        ${indexContent.slice(0, startIndex + startTag.length)}
        ${html.join("\n")}
        ${indexContent.slice(endIndex)}
    `;

    fs.writeFileSync("index.html", compiledIndexContent);
};

buildSketches();
