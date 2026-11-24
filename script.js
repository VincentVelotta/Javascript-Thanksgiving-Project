 const recipes = [
            {
                name: "Classic Thanksgiving Turkey",
                ingredients: [
                    "1 whole turkey",
                    "1/2 cup butter",
                    "Salt and pepper",
                    "Garlic and herbs"
                ],
                instructions:
                    "Season the turkey, rub with butter, and roast at 325°F until it reaches a safe internal temperature."
            },

            {
                name: "Homemade Mashed Potatoes",
                ingredients: [
                    "5 potatoes",
                    "1/2 cup milk",
                    "4 tablespoons butter",
                    "Salt and pepper"
                ],
                instructions:
                    "Boil peeled potatoes until soft. Drain, mash with butter and milk, and season to taste."
            },

            {
                name: "Pumpkin Pie",
                ingredients: [
                    "1 pie crust",
                    "1 can pumpkin puree",
                    "2 eggs",
                    "1 cup sugar",
                    "Pumpkin pie spice"
                ],
                instructions:
                    "Mix the ingredients, pour into the pie crust, and bake at 350°F until the filling is set."
            },

            {
                name: "Thanksgiving Stuffing",
                ingredients: [
                    "6 cups bread cubes",
                    "1 onion",
                    "2 celery stalks",
                    "2 cups broth",
                    "Butter and seasoning"
                ],
                instructions:
                    "Cook the onion and celery in butter. Mix with bread and broth, then bake at 350°F until heated through."
            },

            {
                name: "Sweet Potato Casserole",
                ingredients: [
                    "4 sweet potatoes",
                    "1/4 cup brown sugar",
                    "3 tablespoons butter",
                    "Mini marshmallows"
                ],
                instructions:
                    "Mash cooked sweet potatoes with butter and brown sugar. Add marshmallows and bake at 350°F until golden."
            },

            {
                name: "Homemade Apple Pie",
                ingredients: [
                    "2 pie crusts",
                    "5 apples",
                    "1/2 cup sugar",
                    "1 teaspoon cinnamon",
                    "2 tablespoons butter"
                ],
                instructions:
                    "Mix sliced apples with sugar and cinnamon. Place in the pie crust, add the top crust, and bake at 375°F until golden."
            }
        ];

        function generateRecipe() {

            
            const randomIndex = Math.floor(
                Math.random() * recipes.length
            );

            const recipe = recipes[randomIndex];

           
            document.getElementById("recipeResult").innerHTML = `
                <h3>🍽️ ${recipe.name}</h3>

                <h4>Ingredients:</h4>

                <ul>
                    ${recipe.ingredients.map(item =>
                        `<li>${item}</li>`
                    ).join("")}
                </ul>

                <h4>Instructions:</h4>

                <p>${recipe.instructions}</p>
            `;
        }