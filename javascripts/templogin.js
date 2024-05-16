const users = [
    { username: "1", password: "1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" }
  ];

  // Function to prompt for username and password
  function login() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    // Verify the entered credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      alert("Login successful!");
      window.location.href = "confrence.html"
    } else {
      alert("Invalid username or password. Please try again.");
      window.location.href = "/error/wrongcreds.html"
    }
  }

  // Call the login function when the page is loaded
  window.onload = login;

