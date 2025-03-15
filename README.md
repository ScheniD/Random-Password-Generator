# Random Password Generator

A minimalistic web application that generates secure, 15-character passwords. Users can select which character types to include (uppercase, lowercase, numbers, symbols) and toggle between dark/light modes for an optimal viewing experience.

## Features

1. **Random Password Generation**  
   - Generates 15-character passwords using a customizable set of characters.  
   - Supports uppercase letters, lowercase letters, numbers, and symbols.

2. **Rules Selection**  
   - Checkboxes let you choose which character types to include.  
   - Ensures you always have a valid password (prompts if no rule is selected).

3. **Copy to Clipboard**  
   - Quickly copy the generated password by clicking the copy icon.

4. **Dark/Light Mode Toggle**  
   - Switch between a sleek dark mode or a bright light mode with a single click.

## How to Use

1. **Clone or Download** the repository to your local machine.  
2. Open `index.html` in your web browser.  
3. Check or uncheck the desired password rules (uppercase, lowercase, numbers, symbols).  
4. Click **Generate Password** to create a new random password.  
5. Click the **Copy** icon to copy the generated password to your clipboard.  
6. Use the **Toggle Theme** icon/button to switch between dark and light mode.

## Technologies Used

- **HTML5** for the structure  
- **CSS3** (including `accent-color` for checkbox styling in modern browsers)  
- **JavaScript (ES6)** for password generation, copy functionality, and mode toggling

## Project Structure
├── index.html // Main entry point ├── style.css // App styling └── script.js // Logic for password generation, copying, and theme toggling


## Customization

- **Password Length**: Adjust the `length` variable in `script.js` if you want a different default length.  
- **Character Sets**: Modify the strings for uppercase, lowercase, numbers, or symbols in `script.js`.  
- **Styling**: Update the color variables in `style.css` (e.g., `--accent-color`) to match your branding or preference.

## Contributing

Feel free to open issues or submit pull requests to help improve this project. All contributions are welcome!

## License

This project is open source and available under the [MIT License](LICENSE). Feel free to use and modify it as you see fit.
