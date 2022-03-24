const sketches = [
    "Atomic Fishes",
    "Drawn Lines",
    "Circular Death",
    "Pyramids",
    "Shifting Sands",
    "Returning Spheres",
    "Asteroid",
    "Creative Link",
    "Slick Link",
    "Origin Lines",
    "Landscape",
    "Flow Fields",
    "Sunset",
    "Fluid Grid",
    "Camo",
    "Waavy Input",
    "Rainbow Road",
    "Depth Lines",
];

const $wrapperList = document.querySelector(".wrapper__list");
const $skeletons = [];

sketches.forEach((sketch) => {
    const $skeleton = document.createElement("div");
    $skeleton.classList.add("skeleton");
    $skeleton.style.setProperty(
        "--width",
        `${
            ((sketch.length + "Sketch 00: ".length) * 10000) /
            $wrapperList.offsetWidth
        }px`
    );

    $wrapperList.appendChild($skeleton);
    $skeletons.push($skeleton);
});

setTimeout(() => {
    for (let i = 0; i < $skeletons.length; i++) {
        const $skeleton = $skeletons[i];
        $skeleton.style.opacity = 0;

        const sketchI = i + 1;

        $skeleton.ontransitionend = () => {
            const $li = document.createElement("li");
            $li.classList.add("wrapper__list__item");

            const $a = document.createElement("a");
            $a.href = `/sketch_${sketchI.toString().padStart(2, "0")}.html`;
            $a.innerText = `Sketch ${sketchI}: ${sketches[i]}`;
            $li.appendChild($a);

            $skeleton.replaceWith($li);

            setTimeout(() => {
                $li.style.opacity = 1;
            }, 500);
        };
    }
}, 1000);
