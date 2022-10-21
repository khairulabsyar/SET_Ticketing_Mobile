export const firstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getBackgroundColor = (type: string) => {
  switch (type) {
    case "In Progress":
      return "#A8A877";
    case "Complete":
      return "#C03028";
    case "Backlog":
      return "#A890F0";
    default:
      return "white";
  }
};
