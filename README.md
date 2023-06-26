# AI Chef

Welcome to the AI Chef project! This project allows you to select three ingredients and generates a recipe and an image based on those ingredients using artificial intelligence. The generated recipe is presented in a modal with a creative and fun title, the selected ingredients, and the instructions. Let's get started!

## Installation

To use the AI Chef project, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/ai-chef.git
   ```

2. Open the project folder:

   ```
   cd ai-chef
   ```

3. Create a `config.js` file in the project root directory.

4. In the `config.js` file, add the following code:

   ```javascript
   // config.js

   const _CONFIG_ = {
       API_BASE_URL: "https://api.example.com", // Replace with the base URL of your API
       API_KEY: "YOUR_API_KEY", // Replace with your actual API key
       GPT_MODEL: "your_gpt_model_name" // Replace with the name of your GPT model
   };

   ```

   Replace the `API_BASE_URL` with the base URL of your API, `API_KEY` with your actual API key, and `GPT_MODEL` with the name of your GPT model.

5. Save the `config.js` file.

6. Open the `index.html` file in your web browser.

That's it! Now you're ready to start using the AI Chef project.

## Usage

1. Select Ingredients:

   - Click on the ingredients displayed on the screen to add them to your recipe bowl. You can select up to three ingredients.
   - The selected ingredients will be displayed in the bowl slots.

2. Create Recipe:

   - Once you have selected three ingredients, the "Cook" button will become visible.
   - Click on the "Cook" button to create a recipe based on the selected ingredients.

3. View Recipe and Image:

   - After clicking the "Cook" button, a modal will appear displaying the generated recipe and an image related to the recipe.
   - The recipe includes a creative and fun title, the selected ingredients, and the instructions.
   - The image visually represents the recipe.

Please note that this project relies on external AI services and APIs. Make sure to review and comply with their respective terms and conditions.

---

Enjoy your cooking adventure with the AI Chef project! If you have any questions or need assistance, please feel free to reach out.
