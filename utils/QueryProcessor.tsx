function findSquareAndCubeNumbers(numbers:number[]) : number[] {
  // Filter the array to find numbers that are both perfect squares and cubes
  return numbers.filter(number => {
      const sixthRoot = Math.pow(number, 1/6);
      // Check if the sixth root is an integer
      return sixthRoot === Math.floor(sixthRoot);
  });
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew ID is mkarim."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Kian"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g); 
    if (numbers) {
      const num1 = parseInt(numbers[0]);
      const num2 = parseInt(numbers[1]);
      return String(num1 + num2);
    } 
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g); 
    if (numbers) {
      const num1 = parseInt(numbers[0]);
      const num2 = parseInt(numbers[1]);
      return String(num1 * num2);
    } 
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g); 
    if (numbers) {
      const num1 = parseInt(numbers[0]);
      const num2 = parseInt(numbers[1]);
      const num3 = parseInt(numbers[2]);
      return String(Math.max(num1, num2, num3));
    } 
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const numArray = numbers.map(number => parseInt(number));
      const squareAndCubeNumbers = findSquareAndCubeNumbers(numArray);
      return squareAndCubeNumbers.join(", ");;
    }
  }

return "";
}
