const isPlainObject = require('lodash.isplainobject');

//these functions return object keys in camelCase

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

//this function return an array of results in camelCase
function formatResults(arrayOfResults) {
  return arrayOfResults.map((result) => formatData(result));
}

module.exports = { formatData, formatGearSet, formatResults };
