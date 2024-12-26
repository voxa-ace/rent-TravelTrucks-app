export function firstLetterUpperCase (word) {
  if (!word) return ''; // Handle empty or undefined input
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }