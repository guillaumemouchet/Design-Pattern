let roots = [];

let depthSlider;
let maxLenSlider;
let animCheckbox;
let treesNumberInput;

let maxDepth;
let maxLen;
let minLen = 10;
let maxChilds = 4;
let childProba = 0.5;
let anim = true;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // Paragraph for the depth value
  pDepth = createP("Depth value : 5");
  // Slider for the depth value
  depthSlider = createSlider(1, 10, 5);
  depthSlider.input(generateTrees);

  // Paragraph for the maximum length
  pMaxLen = createP("Max len : 50");
  // Slider for the maximum length
  maxLenSlider = createSlider(5, 100, 50);
  maxLenSlider.input(generateTrees);

  // Input for the number of trees
  treesNumberInput = createInput("3");
  treesNumberInput.position(150, 500);
  treesNumberInput.size(100);
  treesNumberInput.input(generateTrees);
  // Paragraph for the number of trees
  pTreesNumber = createP("Number of trees :");
  pTreesNumber.position(150, 450);

  // Checkbox to toogle the animation
  animCheckbox = createCheckbox("Animation?", true);
  animCheckbox.position(150, 420);

  // Generate trees
  generateTrees();

  // Check if singleton is working correctly
  //drawer1 = Singleton.getDrawer();
  //drawer2 = Singleton.getDrawer();
  //console.log(drawer1 == drawer2); // Should be 'true'
}

function draw() {
  background(0); // Black background
  translate(0, height); // Translate the initial drawing position to the bottom left corner
  anim = animCheckbox.checked();

  // Foreach root in roots
  for (let root of roots) {
    // Update the root is the animation checkbox is checked
    if (anim) root.update();
    // Draw the root
    root.draw();
  }
}

function generateTrees() {
  // Get values from sliders
  maxDepth = depthSlider.value();
  maxLen = maxLenSlider.value();

  let nbOfTrees = int(treesNumberInput.value());

  if (!nbOfTrees) nbOfTrees = 3;

  // Display values in paragraphes
  pMaxLen.html("Max len : " + maxLen + "px");
  pDepth.html("Depth value : " + maxDepth);

  roots = []; // Clear the array of roots

  // Create roots
  let step = width / (nbOfTrees + 1);
  let currentStep = 0;
  for (let i = 0; i < nbOfTrees; i++) {
    currentStep += step;
    let leafCol = color(
      random(0, 255), 
      random(0, 255), 
      random(0, 255)
    );
    
    roots.push(
      new Branch(createVector(currentStep, 0), 0, 0, round(random(0, 2)), leafCol)
    );
  }
}
