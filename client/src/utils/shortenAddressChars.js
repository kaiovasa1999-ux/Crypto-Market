export const shortenAddressChars = (address) => {
  let result = `${address.slice(0, 5)}***${address.slice(
    address.length - 3,
    address.length
  )}...`;
  return result;
};
