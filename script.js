document.addEventListener("DOMContentLoaded", () => {
  const trailElements = [];
  const maxTrail = 20;

  // Создаем trail элементы
  for (let i = 0; i < maxTrail; i++) {
    const trail = document.createElement("div");
    trail.className = "trail";
    trail.style.opacity = (1 - i / maxTrail).toFixed(2); // Прозрачность
    document.body.appendChild(trail);
    trailElements.push(trail);
  }

  let mouseX = 0, mouseY = 0;
  let currentTrail = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    // Перемещаем текущий trail элемент
    const trail = trailElements[currentTrail];
    trail.style.left = `${mouseX}px`;
    trail.style.top = `${mouseY}px`;

    // Обновляем следующий trail
    currentTrail = (currentTrail + 1) % maxTrail;
  });
});
