export const shortenAddressChars = (address) => {
  let result = `${address.slice(0, 5)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
  return result;
};
