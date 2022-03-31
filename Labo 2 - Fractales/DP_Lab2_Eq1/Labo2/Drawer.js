class Drawer {
  drawLine(pos1, pos2, color, strokeW){
    // Change the color
    fill(color);
    stroke(color);
    strokeWeight(strokeW);
    // Draw a line
    line(pos1.x, pos1.y, pos2.x, pos2.y);
  }
    
  drawCircle(pos, diameter, color){
    // Change the color
    stroke(color);
    fill(color);
    // Draw a circle
    circle(pos.x, pos.y, diameter);
  }
}