const getPosition = require("./getPosition")

const getRankedData = (fileData) => {
    const rankedData = []
    const sortedData = fileData.sort((a, b) => {
        return b.score - a.score;
      });

   fileData.sort((a, b) => {
        return b.score - a.score;
      });
  
      const allScores = sortedData.map((data)=> data.score)
  
      // get all unique scores
      const allUniqueScores = [...new Set(allScores)]
  
  
      for (let data of sortedData) {
         let rank = allUniqueScores.indexOf(data.score)
         
         data["position"] = getPosition(rank + 1)
         rankedData.push(data)
      }

    return rankedData
}

module.exports = getRankedData