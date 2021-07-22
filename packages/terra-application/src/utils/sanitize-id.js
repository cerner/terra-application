function sanitizeId(idString) {
  return idString.replace(/[^A-Za-z\w\-:.]+/g, () => '-');
}

export default sanitizeId;
