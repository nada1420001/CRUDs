var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById(
  "productDescriptionInput"
);
var productsContainer = [];

if (localStorage.getItem("products") != null) {
  productsContainer = JSON.parse(localStorage.getItem("products"));
  display();
}
// Function to add product
function addProduct() {
  if (
    validateProductName &&
    validateProductPrice &&
    ValidateCategory &&
    validateProductDescription == true
  ) {
    var product = {
      productName: productNameInput.value,
      productPrice: productPriceInput.value,
      productCategory: productCategoryInput.value,
      productDescription: productDescriptionInput.value,
    };
    productsContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    display();
    console.log(product);
  } else {
    alert("ENTER VALID DATA");
  }
}

// function to display products
function display() {
  var cartona = ``;
  for (var i = 0; i < productsContainer.length; i++) {
    cartona += `
         <tr>
  <td>${i + 1}</td>
              <td>${productsContainer[i].productName} </td>
              <td>${productsContainer[i].productPrice}</td>
              <td>${productsContainer[i].productCategory}</td>
              <td>${productsContainer[i].productDescription}</td>
          <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">Delete</button></td>
                    <td><button class="btn btn-outline-warning">Update</button></td>

            </tr>
        `;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}

// Function Clear
function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescriptionInput.value = "";
}

// function to delete product
function deleteProduct(deletedIndex) {
  productsContainer.splice(deletedIndex, 1);
  localStorage.setItem("products", JSON.stringify(productsContainer));
  display();
}

// function to search in products
function searchProduct(term) {
  var cartoona = ``;

  for (var i = 0; i < productsContainer.length; i++) {
    if (
      productsContainer[i].productName
        .toLowerCase()
        .includes(term.toLowerCase()) == true
    ) {
      cartoona += `<tr>
              <td>${i}</td>
              <td>${productsContainer[i].productName} </td>
              <td>${productsContainer[i].productPrice}</td>
              <td>${productsContainer[i].productCategory}</td>
              <td>${productsContainer[i].productDescription}</td>
              <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">Delete</button></td>
              <td><button class="btn btn-outline-warning">Update</button></td>
      </tr>`;
      console.log(i);
    }
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}

function validateProductName() {
  regex = /^[A-Z][a-z]{3,8}$/;
  if (regex.test(productNameInput) == true) {
    return true;
  } else {
    return false;
  }
}
function validateProductPrice() {
  regex = /^[1-9]{2,9}$/;
  if (regex.test(productPriceInput) == true) {
    return true;
  } else {
    return false;
  }
}
function ValidateCategory() {
  regex = /^[A-Z][a-z]{3,8}$/;
  if (regex.test(productNameInput) == true) {
    return true;
  } else {
    return false;
  }
}

function validateProductDescription() {
  regex = /[^D]{10-100}$/;
  if (regex.test(productDescriptionInput) == true) {
    return true;
  } else {
    return false;
  }
}
