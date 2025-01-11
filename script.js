document.addEventListener("DOMContentLoaded", () => {
  const trailElements = [];
  const maxTrail = 30; // Увеличиваем количество частиц для плавности

  // Создаём trail элементы
  for (let i = 0; i < maxTrail; i++) {
    const trail = document.createElement("div");
    trail.className = "trail";
    trail.style.opacity = (1 - i / maxTrail).toFixed(2); // Постепенная прозрачность
    document.body.appendChild(trail);
    trailElements.push(trail);
  }

  let positions = Array(maxTrail).fill({ x: 0, y: 0 });

  document.addEventListener("mousemove", (event) => {
    const { clientX: mouseX, clientY: mouseY } = event;

    // Обновляем первую позицию с курсором
    positions[0] = { x: mouseX, y: mouseY };

    // Распространяем движение на остальные элементы
    for (let i = 1; i < maxTrail; i++) {
      positions[i] = {
        x: positions[i - 1].x * 0.9 + positions[i].x * 0.1,
        y: positions[i - 1].y * 0.9 + positions[i].y * 0.1,
      };
    }

    // Перемещаем trail элементы
    trailElements.forEach((trail, index) => {
      trail.style.left = `${positions[index].x}px`;
      trail.style.top = `${positions[index].y}px`;
    });
  });
});
