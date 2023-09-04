// Get element value
function getInputById(elementId) {
  const value = parseFloat(document.getElementById(elementId).value);
  if (value < 0 || isNaN(value)) {
    alert('Enter Valid value.');
  } else {
    return value;
  }
}

// Set element value
function setElementTextById(elementId, value) {
  const element = document.getElementById(elementId);

  if (isNaN(value)) {
    element.innerText = '00.00';
  } else {
    element.innerText = value.toFixed(2);
  }
}

// Add converter function
function converterToMeter(shape, shapeArea) {
  if (!isNaN(shapeArea)) {
    const converterDiv = document.getElementById('converter');

    const node = document.createElement('div');
    const childCount = converterDiv.childElementCount;

    const nodeHtml = `<p>${childCount + 1}. ${shape}</p>
  <p>${(shapeArea / 10000).toFixed(2)}  m<sup>2</sup></p>`;
    node.classList.add('flex', 'justify-between', 'mx-3');

    node.innerHTML = nodeHtml;
    converterDiv.appendChild(node);
  }
}

// Triangle shape
const triangle = document.getElementById('triangleBtn');
triangle.addEventListener('click', (event) => {
  const Area = getInputById('tBase') * getInputById('tHight') * 0.5;
  setElementTextById('tArea', Area);

  converterToMeter('Triangle', Area);
});

// rectangle shape
const rectangle = document.getElementById('rectangleBtn');
rectangle.addEventListener('click', (event) => {
  const Area = getInputById('rWidth') * getInputById('rLong');
  setElementTextById('rArea', Area);
  converterToMeter('Rectangle', Area);
});

// parallelogram shape
const parallelogram = document.getElementById('parallelogramBtn');
parallelogram.addEventListener('click', (event) => {
  const Area = getInputById('pBase') * getInputById('pHight');
  setElementTextById('pArea', Area);
  converterToMeter('Parallelogram', Area);
});

// parallelogram shape
const rhombus = document.getElementById('rhombusBtn');
rhombus.addEventListener('click', (event) => {
  const Area = getInputById('rd1') * getInputById('rd2');
  setElementTextById('rhArea', Area);
  converterToMeter('Rhombus', Area);
});

// pentagon shape
const pentagon = document.getElementById('pentagonBtn');
pentagon.addEventListener('click', (event) => {
  const Area = getInputById('peBase') * getInputById('peHight') * 0.5;
  setElementTextById('peArea', Area);
  converterToMeter('Pentagon', Area);
});

// ellipse shape
const ellipse = document.getElementById('ellipseBtn');
ellipse.addEventListener('click', (event) => {
  const Area = getInputById('eRedious') * getInputById('eRedious') * Math.PI;
  setElementTextById('eArea', Area);
  converterToMeter('Ellipse', Area);
});
