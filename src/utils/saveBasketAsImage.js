import html2canvas from "html2canvas";

export const saveBasketAsImage = async (element, totalPrice) => {
  if (!element) return;

  const originalWidth = element.style.width;
  const originalBoxSizing = element.style.boxSizing;

  const totalDiv = document.createElement("div");
  totalDiv.className = "basket__total-print";
  totalDiv.innerText = `Сумма ростера: ${totalPrice} очков`;

  try {
    element.classList.add("is-exporting");
    element.style.width = "885px";
    element.style.boxSizing = "border-box";
    element.appendChild(totalDiv);

    const canvas = await html2canvas(element, {
      width: 885,
      windowWidth: 885,
      backgroundColor: null,
      scale: 4,
      useCORS: true,
      allowTaint: true,
      logging: false,
      x: 0,
      scrollX: 0,
      scrollY: -window.scrollY,
    });

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `army-roster-${Date.now()}.png`;
    link.click();
  } catch (error) {
    console.error("Ошибка экспорта:", error);
  } finally {
    element.classList.remove("is-exporting");
    element.style.width = originalWidth;
    element.style.boxSizing = originalBoxSizing;
    if (element.contains(totalDiv)) {
      element.removeChild(totalDiv);
    }
  }
};
