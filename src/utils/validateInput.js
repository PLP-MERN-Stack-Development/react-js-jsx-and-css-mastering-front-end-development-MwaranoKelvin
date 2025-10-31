/**
 * Validates if the input is a non-empty string.
 * @param {string} input - The input to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isNonEmptyString(input) {
  return typeof input === 'string' && input.trim().length > 0;
}

/**
 * Validates if the input is a valid email address.
 * @param {string} email - The email to validate.
 * @returns {boolean} True if valid email, false otherwise.
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates if the input is a valid password.
 * Password rules: minimum 8 characters, at least one letter and one number.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if valid password, false otherwise.
 */
export function isValidPassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Validates if the input is a valid number within optional min and max range.
 * @param {number|string} input - The input to validate.
 * @param {number} [min] - Optional minimum value.
 * @param {number} [max] - Optional maximum value.
 * @returns {boolean} True if valid number within range, false otherwise.
 */
export function isValidNumber(input, min = -Infinity, max = Infinity) {
  const num = Number(input);
  return !isNaN(num) && num >= min && num <= max;
}