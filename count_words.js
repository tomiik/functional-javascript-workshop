function countWords(inputWords) {
  // return inputWords.reduce(function(allNames,name){
  //   if(name in allNames){
  //     allNames[name]++;
  //   }else{
  //     allNames[name] = 1;
  //   }
  //   return allNames;
  // }, {});
  return inputWords.reduce(function(countMap, word){
    countMap[word] = ++countMap[word] || 1
    return countMap;
  }, {})
}
module.exports = countWords
