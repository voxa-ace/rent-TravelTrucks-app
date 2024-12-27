export function firstLetterUpperCase (word) {
  if (!word) return ''; // Handle empty or undefined input
  if (word.length === 2) {
    return word.toUpperCase()
  }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }