// Generate a random 15-character password
function generatePassword() {
    const length = 15;
  
    // Gather which rules are selected
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeNumbers   = document.getElementById('include-numbers').checked;
    const includeSymbols   = document.getElementById('include-symbols').checked;
  
    // Build the character set based on checkboxes
    let chars = '';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers)   chars += '0123456789';
    if (includeSymbols)   chars += '!@#$%^&*()_+{}|:"<>?~';
  
    // If no rules are selected, alert the user
    if (!chars) {
      alert('Please select at least one rule!');
      return;
    }
  
    // Generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  
    document.getElementById('password').textContent = password;
  }
  
  // Copy the generated password to clipboard
  function copyPassword() {
    const passwordText = document.getElementById('password').textContent;
    if (!passwordText) return;
    navigator.clipboard.writeText(passwordText)
      .then(() => alert('Password copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  }
  
  // Toggle between light and dark modes
  function toggleMode() {
    document.body.classList.toggle('light-mode');
  }
  