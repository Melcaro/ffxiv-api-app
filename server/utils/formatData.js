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

function formatGearSet(gear) {
  const formattedGear = Object.entries(gear);
  return formattedGear.reduce((acc, [key, value]) => {
    return [...acc, { category: key, ...value }];
  }, []);
}

module.exports = { formatData, formatGearSet };
