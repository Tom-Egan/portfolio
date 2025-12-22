const ia = document.getElementById("ia");
const svg = ia.querySelector("svg");

function drawLine(x1, y1, x2, y2) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  svg.appendChild(line);
}

function centerTop(el) {
  const r = el.getBoundingClientRect();
  const p = ia.getBoundingClientRect();
  return { x: r.left + r.width / 2 - p.left, y: r.top - p.top };
}

function centerBottom(el) {
  const r = el.getBoundingClientRect();
  const p = ia.getBoundingClientRect();
  return { x: r.left + r.width / 2 - p.left, y: r.bottom - p.top };
}

function redraw() {
  svg.innerHTML = "";
  svg.setAttribute("viewBox", `0 0 ${ia.offsetWidth} ${ia.offsetHeight}`);

  const parent = document.querySelector('[data-node="top"]');
  const children = [...document.querySelectorAll('[data-child]')];

  const parentBottom = centerBottom(parent);
  const childTops = children.map(centerTop);

  const midY =
    (parentBottom.y + Math.min(...childTops.map(p => p.y))) / 2;

  // Vertical from parent
  drawLine(parentBottom.x, parentBottom.y, parentBottom.x, midY);

  // Horizontal bar (first → last child)
  drawLine(
    childTops[0].x,
    midY,
    childTops[childTops.length - 1].x,
    midY
  );

  // Drops to each child
  childTops.forEach(p => {
    drawLine(p.x, midY, p.x, p.y);
  });
}

window.addEventListener("resize", redraw);
window.addEventListener("load", redraw);
