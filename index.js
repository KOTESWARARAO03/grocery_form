// Function to add item to the list
function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    const category = document.querySelector('input[name="category"]:checked')?.value;
    const tags = Array.from(document.querySelectorAll('input[name="tags"]:checked')).map(tag => tag.value);
    const additionalNotes = document.getElementById('additionalNotes').value;

    if (!itemName || !itemQuantity || !category) {
        alert('Please fill in all required fields');
        return;
    }

    const itemEntry = document.createElement('div');
    itemEntry.classList.add('item');
    itemEntry.innerHTML = `
        <strong>Item Name:</strong> ${itemName} <br>
        <strong>Quantity:</strong> ${itemQuantity} <br>
        <strong>Category:</strong> ${category} <br>
        <strong>Tags:</strong> ${tags.join(', ') || 'None'} <br>
        <strong>Notes:</strong> ${additionalNotes || 'None'}
    `;

    document.getElementById('itemList').appendChild(itemEntry);
    document.getElementById('groceryForm').reset();
}

// Function to save items and display a popup
function saveItems() {
    const itemList = document.getElementById('itemList');
    const popup = document.getElementById('popup');

    if (itemList.children.length === 0) {
        popup.innerText = "Add at least one item";
    } else {
        popup.innerText = "Item(s) list saved successfully";
    }

    // Display popup
    popup.style.display = 'block';

    // Hide popup after 2 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}

