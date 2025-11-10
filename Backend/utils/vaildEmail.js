function isValidEmail(email)
{
  const emailRegex = /^[^\s@]+@gmail\.com$/;
  return emailRegex.test(email);
}
export default isValidEmail