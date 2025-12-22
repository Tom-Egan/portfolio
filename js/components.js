async function loadComponent(selector, url) {
  const target = document.querySelector(selector);
  if (!target) return;

  const response = await fetch(url);
  target.innerHTML = await response.text();
}

// Load components
loadComponent("#header", "../components/header.html");
loadComponent("#footer", "../components/footer.html");
