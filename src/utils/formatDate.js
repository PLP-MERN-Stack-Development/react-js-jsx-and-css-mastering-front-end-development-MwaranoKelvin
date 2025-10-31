/**
 * Formats a Date object or date string into 'YYYY-MM-DD' format.
 * @param {Date|string} date - The date to format.
 * @returns {string} Formatted date string.
 */
export function formatDate(date) {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Formats a Date object or date string into 'MM/DD/YYYY' format.
 * @param {Date|string} date - The date to format.
 * @returns {string} Formatted date string.
 */
export function formatDateMMDDYYYY(date) {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '';
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
}

/**
 * Formats a Date object or date string into a readable string with time.
 * Example: 'Aug 5, 2025, 02:52 AM'
 * @param {Date|string} date - The date to format.
 * @returns {string} Formatted date and time string.
 */
export function formatDateTime(date) {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '';
  return d.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}