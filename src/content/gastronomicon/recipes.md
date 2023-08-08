---
title: Recipes
---

Gastronomicon's recipe system allows for shapeless recpies and group (tag) recipe components. (Not at the same time, unfortunately)

## The Building Blocks: `RecipeComponent`

There are two main types of components, the `SingleRecipeComponent`, which represents a single item in a recipe, and the `GroupRecipeComponent`, which represents any amount of possible items that can be used in a recipe, a.k.a. tags.

There is also a third component, found at `RecipeComponent.EMPTY`, which represents null/air.

## Alternate Recipes

Most of the time, addons do not have to manually craft and register recipes. However if an alternate recipe is desired (e.g., **Dough**, **Oatmeal**), it must be registered directly using `RecipeRegister#registerRecipe(GastroRecipe... recipes)`. For now, this is the only way to have shapeless recipes with "tags."
