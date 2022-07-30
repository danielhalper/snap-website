// create everything for this problem, functions, assertion function, and test cases
// call your function "generateLaceDetails", and let it take the inventory as its parameter

function generateLaceDetails(inventory) {
    let index=0;
    currentInventory.forEach(designers => {
        designers.shoes.forEach(shoe => {
            let arrOfWords=shoe.name.split(" ");
            if(arrOfWords.toString().match("lace")) {
                for(i=0; i<arrOfWords.length; i++) {
                    if(arrOfWords[i].match("lace")) {
                        index=i;
                    }
                }
                let obj={};
                obj["nameWords"]= arrOfWords;
                
                obj["targetWordIndex"] = index;
                console.log(obj);
                
            }

        })

    })


    //get arrary of namewords

    //inidicate index for lace
}


var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

generateLaceDetails(currentInventory);