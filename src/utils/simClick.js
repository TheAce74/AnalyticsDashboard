const simulateClick = (e) => {
  if (e.key === "Enter") {
    e.target.click();
  }
};

export { simulateClick };
