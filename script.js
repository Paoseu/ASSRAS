document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    var userType = document.getElementById('userType').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // You can add your authentication logic here
    
    // For demonstration purposes, let's just show an alert
    switch(userType) {
      case 'admin':
        alert('Logging in as Admin with username: ' + username + ' and password: ' + password);
        break;
      case 'clerk':
        alert('Logging in as Clerk with username: ' + username + ' and password: ' + password);
        break;
      case 'client':
        alert('Logging in as Client with username: ' + username + ' and password: ' + password);
        break;
      default:
        alert('Invalid user type!');
    }
  });