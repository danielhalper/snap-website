function calculateAveragePricePerDesigner(inventory) {
    let designerArr=[];
    currentInventory.forEach(designer => {
       let sum=0;
       designer.shoes.forEach(shoe => {
          sum+=shoe.price;
       })
       let average=(sum/designer.shoes.length);
       let obj={};
       obj.name=designer.name;
       obj.averagePrice=average;
       designerArr.push(obj)
    })
    let totalObj={'designers': designerArr};
    console.log(totalObj);
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
  
  calculateAveragePricePerDesigner(currentInventory);