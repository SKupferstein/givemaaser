function total(total, num) {
  return (total += num);
}
export function GetTotal(array) {
  return array.map((item) => item.amount).reduce(total)
    ? array.map((item) => item.amount).reduce(total)
    : 0;
}
