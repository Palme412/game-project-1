var canvas = document.querySelector("#game"),
    ctx = canvas.getContext("2d"),
    width = 1000,
    height = 600,
    playerwidth = 30,
    playerheight = 30,
    player = {
        x: width / 2 - (playerwidth / 2),
        y: height - 80,
        width: playerwidth,
        height: playerheight,
        color: "red",
        speed: 3,
    },
    boxes = [];

boxes.push({
    x: 0,
    y: 0, //border
    width: 5,
    height: height
});
boxes.push({
    x: 0,
    y: height - 5,
    width: width, //border
    height: 50
});

boxes.push({
    x: width - 5,
    y: 0,
    width: 5,   //border
    height: height
});
boxes.push({
    x: 0,
    y: 0,
    width: width,
    height: 5
})

boxes.push({
    x: 90,
    y: 510,      //platforms all the way down
    width: 70,
    height: 5
});
boxes.push({
    x: 190,
    y: 460,
    width: 70,
    height: 5
});
boxes.push({
    x: 290,
    y: 410,
    width: 70,
    height: 5
});
boxes.push({
    x: 10,
    y: 340,
    width: 240,
    height: 5
});
boxes.push({
    x: 20,
    y: 270,
    width: 30,
    height: 5
});
boxes.push({
    x: 80,
    y: 210,
    width: 70,
    height: 5
});
boxes.push({
    x: 300,
    y: 150,
    width: 20,
    height: 5
});
boxes.push({
    x: 90,
    y: 100,
    width: 20,
    height: 5
});
boxes.push({
    x: 30,
    y: 50,
    width: 20,
    height: 5
});
boxes.push({
    x: 290,
    y: 270,
    width: 70,
    height: 5
});
boxes.push({
    x: 370,
    y: 200,
    width: 70,
    height: 5
});
boxes.push({
    x: 270,
    y: 150,
    width: 70,
    height: 5
});
boxes.push({
    x: 370,
    y: 90,
    width: 350,
    height: 5
});
boxes.push({
    x: 790,
    y: 180,
    width: 70,
    height: 5
});
boxes.push({
    x: 995,
    y: 80,
    width: -50,
    height: 5
});
boxes.push({
    x: 880,
    y: 120,
    width: 10,
    height: 5
});
boxes.push({
    x: 995,
    y: 300,
    width: -400,
    height: 5
});
boxes.push({
    x: 570,
    y: 410,
    width: 70,
    height: 5
});
boxes.push({
    x: 700,
    y: 480,
    width: 70,
    height: 5
});
boxes.push({
    x: 810,
    y: 420,
    width: 20,
    height: 5
});
boxes.push({
    x: 995,
    y: 370,
    width: -100,
    height: 5
});
boxes.push({
    x: 600,
    y: 550,
    width: 70,
    height: 5
});
boxes.push({
    x: 400,
    y: 595,
    width: 5,
    height: -95
});
boxes.push({
    x: 500,
    y: 595,
    width: 5,
    height: -100
});
boxes.push({
    x: 405,
    y: 570,
    width: 20,
    height: 5
});
boxes.push({
    x: 500,
    y: 540,
    width: -20,
    height: 5
});
boxes.push({
    x: 405,
    y: 500,
    width: 40,
    height: 5
});

canvas.width = width;
canvas.height = height;

for (var i = 0; i < boxes.length; i++) {
    ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
    ctx.fill();
}