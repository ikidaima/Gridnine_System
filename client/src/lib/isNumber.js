export default function isNumber(userNumber) {
  return !isNaN(parseFloat(userNumber)) && !isNaN(Number(userNumber)) && isFinite(userNumber);
}