const MealData = [
    {
      "name": "Italy",
      "dishes": [
        {
          "name": "Spaghetti Carbonara",
          "ingredients": [
            "Spaghetti - 400g",
            "Eggs - 4",
            "Pancetta - 150g",
            "Parmesan Cheese - 50g",
            "Black Pepper - to taste",
            "Salt - to taste"
          ],
          "time_to_cook": "30 minutes",
          "cooking_instructions": [
            "Boil salted water and cook spaghetti until al dente.",
            "In a bowl, whisk eggs and grated Parmesan cheese.",
            "Cook pancetta in a pan until crispy.",
            "Drain spaghetti and combine with pancetta, removing from heat.",
            "Quickly stir in egg mixture to coat the pasta and create a creamy sauce.",
            "Season with black pepper and serve immediately."
          ],
          "difficulty": "Medium"
        },
        {
          "name": "Margherita Pizza",
          "ingredients": [
            "Pizza Dough - 1",
            "Tomato Sauce - 100g",
            "Mozzarella Cheese - 200g",
            "Fresh Basil Leaves - a few",
            "Olive Oil - 1 tbsp"
          ],
          "time_to_cook": "40 minutes",
          "cooking_instructions": [
            "Preheat the oven to 250°C (480°F).",
            "Roll out the pizza dough and spread tomato sauce evenly over it.",
            "Add slices of mozzarella cheese on top.",
            "Bake in the oven for 10-12 minutes until the crust is golden.",
            "Garnish with fresh basil leaves and drizzle with olive oil."
          ],
          "difficulty": "Easy"
        }
      ]
    },
    {
      "name": "Japan",
      "dishes": [
        {
          "name": "Sushi",
          "ingredients": [
            "Sushi Rice - 300g",
            "Nori Sheets - 5",
            "Fresh Salmon - 200g",
            "Cucumber - 1",
            "Soy Sauce - for serving",
            "Pickled Ginger - for serving",
            "Wasabi - for serving"
          ],
          "time_to_cook": "60 minutes",
          "cooking_instructions": [
            "Cook sushi rice and let it cool slightly.",
            "Place a nori sheet on a bamboo mat, shiny side down.",
            "Spread a thin layer of sushi rice over the nori, leaving a small border at the top.",
            "Add thin slices of salmon and cucumber as fillings.",
            "Roll the sushi tightly using the bamboo mat.",
            "Cut the roll into bite-sized pieces and serve with soy sauce, pickled ginger, and wasabi."
          ],
          "difficulty": "Hard"
        },
        {
          "name": "Miso Soup",
          "ingredients": [
            "Miso Paste - 2 tbsp",
            "Dashi Stock - 4 cups",
            "Tofu - 100g",
            "Wakame Seaweed - 1 tbsp",
            "Spring Onion - 2 stalks"
          ],
          "time_to_cook": "15 minutes",
          "cooking_instructions": [
            "Heat dashi stock in a pot until it simmers.",
            "Dissolve miso paste into the stock using a ladle.",
            "Add diced tofu and wakame seaweed to the soup.",
            "Simmer for 5 minutes and garnish with chopped spring onions before serving."
          ],
          "difficulty": "Easy"
        }
      ]
    },
    {
      "name": "Mexico",
      "dishes": [
        {
          "name": "Tacos",
          "ingredients": [
            "Taco Shells - 8",
            "Ground Beef - 500g",
            "Lettuce - 1 cup",
            "Tomato - 1",
            "Cheddar Cheese - 1 cup",
            "Sour Cream - to taste",
            "Taco Seasoning - 1 packet"
          ],
          "time_to_cook": "20 minutes",
          "cooking_instructions": [
            "Cook ground beef with taco seasoning in a pan until browned.",
            "Warm taco shells in the oven as per package instructions.",
            "Chop lettuce and tomato.",
            "Assemble tacos by filling each shell with beef, lettuce, tomato, cheese, and a dollop of sour cream."
          ],
          "difficulty": "Easy"
        },
        {
          "name": "Guacamole",
          "ingredients": [
            "Avocados - 2",
            "Lime - 1",
            "Cilantro - 2 tbsp",
            "Tomato - 1",
            "Red Onion - 1/4",
            "Garlic - 1 clove",
            "Salt - to taste"
          ],
          "time_to_cook": "10 minutes",
          "cooking_instructions": [
            "Mash avocados in a bowl.",
            "Dice tomato, onion, and garlic, and add to the mashed avocados.",
            "Add cilantro, lime juice, and salt.",
            "Mix everything together and serve with tortilla chips."
          ],
          "difficulty": "Easy"
        }
      ]
    },
    {
      "name": "India",
      "dishes": [
        {
          "name": "Butter Chicken",
          "ingredients": [
            "Chicken - 500g",
            "Butter - 2 tbsp",
            "Tomato Puree - 1 cup",
            "Heavy Cream - 1/2 cup",
            "Garlic - 2 cloves",
            "Ginger - 1 tbsp",
            "Cumin - 1 tsp",
            "Coriander - 1 tsp",
            "Chili Powder - 1 tsp"
          ],
          "time_to_cook": "40 minutes",
          "cooking_instructions": [
            "Cook chicken pieces in butter until browned.",
            "Add garlic, ginger, and spices, and sauté for 2 minutes.",
            "Add tomato puree and simmer for 10 minutes.",
            "Stir in cream and cook for another 5 minutes until the sauce is thick.",
            "Serve with naan or rice."
          ],
          "difficulty": "Medium"
        },
        {
          "name": "Chana Masala",
          "ingredients": [
            "Chickpeas - 2 cups",
            "Onion - 1",
            "Tomato - 1",
            "Garlic - 2 cloves",
            "Ginger - 1 tbsp",
            "Cumin - 1 tsp",
            "Coriander - 1 tsp",
            "Garam Masala - 1 tsp",
            "Cilantro - for garnish"
          ],
          "time_to_cook": "30 minutes",
          "cooking_instructions": [
            "Sauté onions, garlic, and ginger in a pan.",
            "Add tomatoes and cook for 5 minutes.",
            "Add spices and chickpeas, and cook for another 10 minutes.",
            "Garnish with cilantro and serve with rice or flatbread."
          ],
          "difficulty": "Medium"
        }
      ]
    },
    {
      "name": "Thailand",
      "dishes": [
        {
          "name": "Pad Thai",
          "ingredients": [
            "Rice Noodles - 200g",
            "Shrimp - 200g",
            "Eggs - 2",
            "Peanuts - 1/4 cup",
            "Green Onion - 2 stalks",
            "Tamarind Paste - 1 tbsp",
            "Fish Sauce - 2 tbsp",
            "Sugar - 1 tbsp",
            "Lime - 1"
          ],
          "time_to_cook": "30 minutes",
          "cooking_instructions": [
            "Cook rice noodles according to package instructions.",
            "Stir-fry shrimp and scrambled eggs in a pan.",
            "Add cooked noodles and mix with tamarind paste, fish sauce, and sugar.",
            "Garnish with peanuts, green onions, and lime wedges."
          ],
          "difficulty": "Medium"
        },
        {
          "name": "Tom Yum Soup",
          "ingredients": [
            "Shrimp - 200g",
            "Mushrooms - 100g",
            "Lemongrass - 2 stalks",
            "Kaffir Lime Leaves - 2",
            "Galangal - 1-inch piece",
            "Chili Paste - 1 tbsp",
            "Fish Sauce - 2 tbsp",
            "Lime - 1",
            "Coriander - for garnish"
          ],
          "time_to_cook": "25 minutes",
          "cooking_instructions": [
            "Bring water to a boil with lemongrass, lime leaves, and galangal.",
            "Add shrimp and mushrooms and cook until the shrimp turns pink.",
            "Add chili paste and fish sauce and simmer for 5 minutes.",
            "Serve with a squeeze of lime and garnish with coriander."
          ],
          "difficulty": "Medium"
        }
      ]
    }
  ];
  
  export default MealData;
  