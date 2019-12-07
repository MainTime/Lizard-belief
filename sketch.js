
let doors = []
let cHover

//-----------------------------------------------------------------------------------
const backcolor = (46, 46, 46)       //
const itemSizeDivider = 12           //
const itemBorderSize = 15            //
const itemColorer = function() {
  return itemColorGen()
} // function used to get the colors of the doors
//-----------------------------------------------------------------------------------

//works
function setup() {
  console.log('v1.1')
  itemColorer()
  createCanvas(windowWidth, windowHeight);
  for (let i = 1; i < 25; i++) {
    generateNewDoor(i);
  }
}

//works
function generateNewDoor(num) {
  let rnd = getRandomRect()

  if (checkIfDoorFits(round(rnd[0], 0), round(rnd[1], 0), round(rnd[2], 0), round(rnd[3], 0)) == true) {
    addDoor(round(rnd[0], 0), round(rnd[1], 0), round(rnd[2], 0), round(rnd[3], 0), num)
  } else {
    generateNewDoor(num);

  }
}

//works
function draw() {
  background(backcolor);  
  fill(36)
  rect(0,0,windowWidth, 85)
  //console.log('cnt', doors.length)
  for (let i = 0; i < doors.length; i++) {

    doors[i].draw()
  }
  textSize(64)
  textFont('Roboto Black')
  text("Anne's Adventskalender", 0, 0, windowWidth, 100)
  redraw()
}

//idk
function checkIfDoorFits(x, y, w, h) {

  if (ifFirstDoor() == true) {

    return true

  } else {

    let ind = 0

    for (let doorIndex = 0; doorIndex < doors.length; doorIndex++) { 
      if (checkOverlapWithIndex(x, y, w, h, doorIndex) == true) {
        ind = ind + 1
      }

    } 
    if (ind == 0) {
      return true
    } else {
      return false
    }

  }

}

//idk
function checkOverlapWithIndex(x, y, w, h, i) {
  let cd = doors[i]
  return checkRectOverlap([
    [x, y],
    [x + w, y + h]
  ], [
    [cd.x, cd.y],
    [cd.x + cd.w, cd.y + cd.h]
  ])
}

//works
function ifFirstDoor() {
    return (doors.length == 0)
}

//works
function addDoor(x, y, w, h, num) {
  doors.push(new door(x, y, w, h, num, itemColorer()))
}

//works
function checkRectOverlap(rect1, rect2) {
  if ((rect1[0][0] < rect2[0][0] && rect2[0][0] < rect1[1][0]) || (rect1[0][0] < rect2[1][0] && rect2[1][0] < rect1[1][0]) || (rect2[0][0] < rect1[0][0] && rect1[1][0] < rect2[1][0])) {
    if ((rect1[0][1] < rect2[0][1] && rect2[0][1] < rect1[1][1]) || (rect1[0][1] < rect2[1][1] && rect2[1][1] < rect1[1][1]) || (rect2[0][1] < rect1[0][1] && rect1[1][1] < rect2[1][1])) {
      return true;
    }
  }
  return false;
}

//works
function getRandomRect() {
  var w = random(windowHeight / itemSizeDivider, windowWidth / (itemSizeDivider / 2))
  var h = random(windowHeight / itemSizeDivider +50, windowHeight / (itemSizeDivider / 2))
  var x = random(itemBorderSize, windowWidth - (w + itemBorderSize))
  var y = random(100, windowHeight - (h + itemBorderSize))

  return [x, y, w, h]
}

//works
function itemColorGen() {
  return [random(0, 255), random(0, 255), random(0, 255)]
}

//works not
function checkIfMouseIsOver(i) { 
  let cd = doors[i]
return mouseIsOver(cd)
}

//works
function mouseIsOver(obj) {

    if (mouseX >= obj.x && mouseX < obj.x + obj.w) {

      if (mouseY >= obj.y && mouseY < obj.y + obj.h) {

        return true;

      }

      return false;

    }

    return false;

  }
  
//works
function mouseClicked() {
  doors[cHover].clicked()
}

function mouseMoved() {
  let i = 0
  for (let i = 0; i < doors.length; i++) {
    
    if (checkIfMouseIsOver(i) == true) {
      
      cHover = i
      
    }
    
  }
  console.log(cHover)
}
