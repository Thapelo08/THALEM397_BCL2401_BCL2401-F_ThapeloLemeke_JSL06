// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");
    // Loop through each category and its items in the menu object
      for (const category in menu) {
        if(menu.hasOwnProperty(category)) {

            // Create an element to represent the category
            const categoryElement = document.createElement("h2");
            categoryElement.textContent = category;
            menuContainer.appendChild(categoryElement);

            // Create an element to represent a list of items
            const itemListElement = document.createElement("ul");
            menuContainer.appendChild(itemListElement);

            // Loop through the items in the category and create list items
            menu[category].forEach((item) => {
                const listeItem = document.createElement("list");
                listeItem.textContent = item;
                listeItem.addEventListener("click", () => addToOrder(item));
                itemListElement.appendChild(listItem);
            });
        }
      }     
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    
   // Create a list item for the order
   const listItem = document.createElement("li");
   listItem.textContent = itemName;
   orderItemList.appendChild(listItem);

    // Calculate and update the total price
    let totalPrice = parseInt(orderTotalElement.textContent) || 0;
    totalPrice += 60;
    orderTotalElement.textContent = totalPrice;

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
