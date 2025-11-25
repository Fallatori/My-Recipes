# My Recipes

You can find a demo of the app at https://my-recipies.netlify.app/

## About the App

My Recipes is a modern digital cookbook designed to help you organize your culinary creations and share them with the world. Built with performance and ease of use in mind, it serves as a central hub for all your favorite dishes.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Fallatori/My-Recipes.git
   cd My-recipes
   ```

2. **Install dependencies**  
   `npm install`

3. **Add environment variables**  
   Create file .env.local,
   should look like this

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=

   NEXT_PUBLIC_SANITY_DATASET=production

   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Set up sanity**  
   Add existing or create new project on https://www.sanity.io/  
   Add the ProjectID to the env.local file

5. **Run the project**

   `npm run dev`

6. **Create recipes**

   Press the studio button in the navbar and login with your Sanity account  
   From here you can create new recipes and add new profiles
