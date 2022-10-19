export const firstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getBackgroundColor = (type: string) => {
  switch (type) {
    case "normal":
      return "#A8A877";
    case "fighting":
      return "#C03028";
    case "flying":
      return "#A890F0";
    case "poison":
      return "#9F409F";
    case "ground":
      return "#E0C068";
    case "rock":
      return "#B8A038";
    case "bug":
      return "#A8B720";
    case "ghost":
      return "#705898";
    case "steel":
      return "#B8B8D0";
    case "water":
      return "#6790F0";
    case "fire":
      return "#EF8030";
    case "grass":
      return "#78C84F";
    case "electric":
      return "#F8CF30";
    case "physic":
      return "#F85787";
    case "ice":
      return "#98D8D8";
    case "dragon":
      return "#7038F8";
    case "dark":
      return "#705848";
    case "fairy":
      return "#FF9BE0";
    case "unknown":
      return "yellow";
    case "shadow":
      return "#1F203E";
    default:
      return "white";
  }
};
