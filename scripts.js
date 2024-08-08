document.addEventListener('DOMContentLoaded', function() {
    const initialAssets = [
        { category: 'Computer', type: 'Laptop', quantity: 10, availability: 'Available' },
        { category: 'Computer', type: 'Desktop', quantity: 5, availability: 'Not Available' },
        { category: 'Computer', type: 'Monitor', quantity: 15, availability: 'Available' },
        { category: 'Computer', type: 'Keyboard', quantity: 20, availability: 'Available' },
        { category: 'Computer', type: 'Mouse', quantity: 25, availability: 'Available' },
        { category: 'Computer', type: 'Printer', quantity: 3, availability: 'Not Available' },
        { category: 'Computer', type: 'Scanner', quantity: 2, availability: 'Available' },
        { category: 'Computer', type: 'Webcam', quantity: 8, availability: 'Not Available' },
        { category: 'Computer', type: 'External Hard Drive', quantity: 10, availability: 'Available' },
        { category: 'Computer', type: 'Network Switch', quantity: 7, availability: 'Available' }
    ];

    initialAssets.forEach(asset => {
        addAssetToTable(asset.category, asset.type, asset.quantity, asset.availability);
    });
});

function addAsset() {
    const category = document.getElementById('assetCategory').value;
    const type = document.getElementById('assetType').value;
    const quantity = document.getElementById('quantity').value;
    const availability = document.getElementById('availability').value;

    if (category && type && quantity) {
        addAssetToTable(category, type, quantity, availability);
        document.getElementById('assetCategory').value = '';
        document.getElementById('assetType').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('availability').value = 'Available';
    } else {
        alert('Please enter all asset details.');
    }
}

function addAssetToTable(category, type, quantity, availability) {
    const table = document.getElementById('assetTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const categoryCell = newRow.insertCell(0);
    const typeCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);
    const availabilityCell = newRow.insertCell(3);
    const statusCell = newRow.insertCell(4);
    const actionsCell = newRow.insertCell(5);

    categoryCell.innerHTML = category;
    typeCell.innerHTML = type;
    quantityCell.innerHTML = quantity;
    availabilityCell.innerHTML = availability;
    statusCell.innerHTML = 'Active';
    statusCell.className = 'active';

    statusCell.addEventListener('click', function() {
        if (this.className === 'active') {
            this.className = 'disposed';
            this.innerHTML = 'Disposed';
        } else {
            this.className = 'active';
            this.innerHTML = 'Active';
        }
    });

    actionsCell.innerHTML = `
        <button onclick="modifyQuantity(this)">Modify Quantity</button>
        <button onclick="removeAsset(this)">Remove</button>
    `;
    actionsCell.className = 'actions';
}

function modifyQuantity(button) {
    const row = button.parentElement.parentElement;
    const quantityCell = row.cells[2];
    const newQuantity = prompt("Enter new quantity:", quantityCell.innerHTML);
    if (newQuantity !== null && !isNaN(newQuantity) && newQuantity >= 0) {
        quantityCell.innerHTML = newQuantity;
    } else {
        alert("Please enter a valid quantity.");
    }
}

function removeAsset(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
