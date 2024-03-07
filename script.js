var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "images/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.png";
  }
};

function openImg(element) {
  window.open(element.src);
}

var i = 0;
var t = "Buy Cheap Text Books Online";

function typing() {
  if (i < t.length) {
    document.getElementById("text").innerHTML += t.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

async function fetchData() {
  try {
    const response = await fetch('https://replit.com/@MizhabAnsar/StudentBookExchangeHubBE/api/products');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

const registrationData = {
  username: 'example_user',
  password: 'example_password',
  // Add other registration data as needed
};

async function registerUser() {
  try {
    const response = await fetch('https://replit.com/@MizhabAnsar/StudentBookExchangeHubBE/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    });
    const data = await response.json();
    console.log(data); // Message indicating successful registration
  } catch (error) {
    console.error('Error:', error);
  }
}

const loginData = {
  username: 'example_user',
  password: 'example_password',
};

async function loginUser() {
  try {
    const response = await fetch('https://replit.com/@MizhabAnsar/StudentBookExchangeHubBE/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    console.log(data); // Token received upon successful login
  } catch (error) {
    console.error('Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
      sideNav.style.right = "0";
      menu.src = "images/close.png";
    } else {
      sideNav.style.right = "-250px";
      menu.src = "images/menu.png";
    }
  };

  // Other event listeners or setup can go here
  // ...

  // Call the fetchData function
  fetchData();

  // Example of user registration
  // registerUser();

  // Example of user login
  // loginUser();
});
