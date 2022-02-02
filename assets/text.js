var data = [
    ["Get the plague, loose 15 tiles", 1],
    ["Get the plague, loose 10 tiles", 2],
    ["Move 2 tiles.", 3],
    ["Move 3 tiles.", 2],
      ["Get stuck in the snow, loose 2 tiles.", 1],
      ["Move 1 tiles.", 5],
      ["Move 9 tiles.", 1],
      ["You ate raw meet, loose 2 tiles.", 3],
      ["You go over hilly ground, loose 1 tile.", 5],
      ["You got the typhoid fever, loose 2 tiles", 2],
      ["You got dysentery, loose 3 tiles", 1],
      ["You got Cholera, loose 3 tiles", 1],
      ["You meet a nice group of Indians, they help you along 5 tiles.", 6],
      ["You met a mean group of Indians, they fought you off. Loose 5 tiles.", 5],
  ];
  document.getElementById("tile").innerHTML = getTile();
  function getTile(){
  let out = [];
  
  // Loop through the master entries.
  for (let i = 0; i < data.length; ++i) {
      // Push the value over and over again according to its
      // weight.
      for (let j = 0; j < data[i][1]; ++j) {
          out.push(data[i][0]);
      }
  }
  
  // And done!
  return out[Math.floor(Math.random() * out.length)];
}