let menu = {
   drinks : [
      "Water", "Tea", "Sweet Tea",
      "Coke", "Dr. Pepper", "Sprite"
   ],
   entrees : [
      "Hamburger w/ Fries",
      "Grilled Cheese w/ Tater Tots",
      "Grilled Chicken w/ Veggies",
      "Chicken Fried Steak w/ Mashed Potatoes",
      "Fried Shrimp w/ Coleslaw",
      "Veggie Plate"
   ],
   desserts: [
      "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
   ]
};

let foodMenu = document.getElementById('foodMenu');

let menuCategoryLists = [];
let keyArray = Object.keys(menu);

for (items in menu) {
   let theOption = new Option(items);
   foodMenu.appendChild(theOption); 
   menuCategoryLists.push(menu[items]);
}

foodMenu.onchange = getItems;

function getItems() {
   for (let i = 0; i < keyArray.length; i++) {
      if (foodMenu.value == keyArray[i]) {
         console.log(`You have options to choose: ${menuCategoryLists[i]}`);
      }
   }
}




