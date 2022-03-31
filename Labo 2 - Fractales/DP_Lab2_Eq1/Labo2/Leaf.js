class Leaf extends Component {
  constructor(pos, col) {
    super(pos);
    this.col = col;
  }

  draw() {
    // Draw a circle
    this.drawer.drawCircle(this.pos, 5, this.col);
  }
  update() {}
}
