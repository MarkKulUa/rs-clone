function animationRecords() {
  const container = document.querySelector<HTMLDivElement>(".records-animation");

  const items = document.querySelectorAll<HTMLDivElement>(".animation-item");

  if (container && items.length) {
    const containerRect = container.getBoundingClientRect();
    const itemRect = items[0].getBoundingClientRect();
    const itemWidth = itemRect.width;
    const itemGap = 20; // Gap between items
    const halfItemCount = Math.ceil(items.length / 2);

    // Calculate start left position
    const startLeft = containerRect.left + containerRect.width / 2
    - halfItemCount * (itemWidth + itemGap) + itemWidth / 2;

    // Add scroll event listener
    window.addEventListener("scroll", () => {
      const viewportHeight = window.innerHeight;
      const containerCenter = containerRect.top + containerRect.height / 2;
      const scroll = window.scrollY;
      const maxScrollY = container.scrollHeight - container.clientHeight;
      const ratio = scroll / maxScrollY;

      // Check if container center is within viewport
      if (containerCenter >= 0 && containerCenter < viewportHeight) {
        // Calculate target positions for items
        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const currentLeft = rect.left;
          const targetLeft = parseInt(getComputedStyle(item).left, 10);
          const distanceFromCenter = currentLeft - containerRect.left - containerRect.width / 2;
          let finalLeft = currentLeft;

          if (distanceFromCenter < 0) {
            finalLeft = Math.max(startLeft - index * (itemWidth + itemGap) * ratio, targetLeft);
          } else if (distanceFromCenter > 0) {
            finalLeft = Math.min(startLeft + (index - items.length + 1)
            * (itemWidth + itemGap) * ratio, targetLeft);
          }

          item.style.left = `${finalLeft}px`;
        });
      }
    });
  }
}

export default animationRecords;
