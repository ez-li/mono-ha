var $c = $('#c'),
    $window = $(window);

$c.attr({
    width: $window.width(),
    height: $window.height()
});


const canvas = new fabric.Canvas('c');

const addThing = (thing) => {
    fabric.Image.fromURL(thing, (img) => {
        var randX = Math.random() * ($window.width() - (img.width / 4));
        var randY = Math.random() * ($window.height() - (img.height / 4));
        img.scale(.5)
        canvas.add(img.set({
            left: randX,
            top: randY
        }));
    });
}

const changeBg = (bg) => {
    fabric.Image.fromURL(bg, function (img) {
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
        });
    });
}

const bgConcrete = 'assets/bg-concrete.jpeg';
const bgGrass = 'assets/bg-grass.jpg';
const bgSand = 'assets/bg-sand.jpg';

const elbow = 'assets/elbow.png';
const metalRing1 = 'assets/metal-ring1.png';
const metalRing2 = 'assets/metal-ring2.png';
const threadedRing = 'assets/threaded-ring.png';
const knot = 'assets/knot.png';
const metalCan = 'assets/metal-can.png';
const metalBall = 'assets/metal-ball.png';
const metalPlate = 'assets/metal-plate.png';
const circularSaw = 'assets/circular-saw.png';
const nail = 'assets/nail.png';

const rock1 = 'assets/rock1.png';
const rock2 = 'assets/rock2.png';
const rock3 = 'assets/rock3.png';
const rock4 = 'assets/rock4.png';
const cloud1 = 'assets/cloud1.png';
const cloud2 = 'assets/cloud2.png';
const leafDead = 'assets/leaf-dead.png';
const leafRed = 'assets/leaf-red.png';
const leafThin = 'assets/leaf-thin.png';
const orange = 'assets/orange.png';

const natureThings = [rock1, rock2, rock3, rock4,
    cloud1, cloud2, leafDead,
    leafRed, leafThin, orange];

const machineThings = [elbow, metalRing1, metalRing2,
    threadedRing, knot, metalBall, metalPlate];

const backgrounds = [bgConcrete, bgGrass, bgSand];

const randomThings = () => {
    const pickNatureThing = () => natureThings[Math.floor(Math.random() * natureThings.length)];
    const pickMachineThing = () => machineThings[Math.floor(Math.random() * machineThings.length)];

    const randomExtraThing = Math.random();
    const pickExtraThing = () => {
        if (randomExtraThing < .5) {
            return pickNatureThing();
        } else {
            return pickMachineThing();
        }
    }

    const natureThing = pickNatureThing();
    const machineThing = pickMachineThing();
    const extraThing = pickExtraThing();

    const pickBg = () => backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const bg = pickBg();

    addThing(natureThing);
    addThing(machineThing);
    addThing(extraThing);
    changeBg(bg)

}

randomThings();


// addThing
// changeBg