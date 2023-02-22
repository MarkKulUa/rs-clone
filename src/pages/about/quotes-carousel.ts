function carousel() {
  // Get all the dot elements and carousel item elements
  const dots = document.querySelectorAll<HTMLDivElement>(".dot");
  const items = document.querySelectorAll<HTMLDivElement>(".carousel_item");

  let currentIndex = 0;
  let intervalId: NodeJS.Timeout | null = null;
  const intervalTime = 7000;

  function activateItem(index: number) {
    // Remove active class from currently active dot and item
    const activeDot = document.querySelector<HTMLDivElement>(".dot.active");
    const activeItem = document.querySelector<HTMLDivElement>(".carousel_item.active");
    activeDot?.classList.remove("active");
    activeItem?.classList.remove("active");

    // Add active class to corresponding dot and item
    dots[index].classList.add("active");
    items[index].classList.add("active");
  }

  function nextItem() {
    currentIndex += 1;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    activateItem(currentIndex);
  }

  function startInterval() {
    intervalId = setInterval(() => {
      nextItem();
    }, intervalTime);
  }

  function stopInterval() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  // Attach click event listener to each dot
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopInterval();
      activateItem(index);
      currentIndex = index;
      startInterval();
    });
  });

  // Start the interval
  startInterval();
}

export default carousel;
