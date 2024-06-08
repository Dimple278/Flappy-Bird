class Bird {
    constructor() {
      this.x = 150;
      this.y = 200;
      this.vy = 0;
      this.width = 20;
      this.height = 20;
      this.weight = 1;
    }
  
    update() {
      let curve = Math.sin(angle) * 20; // To make the bird wobble when idle
      if (this.y > canvas.height - 3 * this.height + curve) { // To not let the bird move out of the boundary
        this.y = canvas.height - 3 * this.height + curve;
        this.vy = 0;
      } else if (this.y < 0 + 3 * this.height + curve) {
        this.y = 0 + 3 * this.height + curve;
        this.vy = 0;
      } else {
        this.vy += this.weight; // Simulate gravity by increasing vertical velocity
        this.vy *= 0.9;         // Apply damping to reduce velocity slightly
        this.y += this.vy;      // Update the position by adding velocity to y
      }
      if (spacePressed && this.y>this.height*3) this.flap();
    }
  
    draw() {
      context.fillStyle = "red";
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  
    flap() {
      this.vy -= 2;
    }
  }
  
  const bird = new Bird();
  