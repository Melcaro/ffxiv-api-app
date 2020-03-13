const isPlainObject = require('lodash.isplainobject');

function formatData(data) {
  const formattedData = Object.entries(data);

  return formattedData.reduce((acc, [key, value]) => {
    if (isPlainObject(value)) {
      return { ...acc, [key.toLowerCase()]: formatData(value) };
    }
    return { ...acc, [key.toLowerCase()]: value };
  }, {});
}

module.exports = { formatData };
