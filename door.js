class door {
  constructor(x, y, w, h, num, col) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.num = num
    this.r = col[0]
    this.g = col[1]
    this.b = col[2]
  }

  draw() {
    noStroke()
    if (this.num > day()) {
      fill(this.r, this.g, this.b);
      rect(this.x, this.y, this.w, this.h)
      fill(255)
      textFont('Roboto Thin')
      textSize(this.w / 3);
      textAlign(CENTER, CENTER);
      fill(0)
      rect(this.x + this.w / 2, this.y, 1,this.h)
      fill(255)
      text(' ' + this.num, this.x, this.y, this.w, this.h)
    } else {
      fill(255)
      rect(this.x, this.y, this.w, this.h)
      fill(0)
      textFont('Roboto Thin')
      textSize(this.w / 3);
      textAlign(CENTER, CENTER);
      fill(0)
      text(' ' + this.num, this.x, this.y, this.w, this.h)
      fill(this.r, this.g, this.b);
      rect(this.x - 10,this.y,10,this.h)
      rect(this.x + this.w + 10,this.y,-10,this.h)
    }
  }
  clicked() {
    if (this.num < day()) {
      window.location.href =     'https://raw.githubusercontent.com/MainTime/MainTime.github.io/master/img/annadvkal/' + this.num + ".png"
    }
  }
}