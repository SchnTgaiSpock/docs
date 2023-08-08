---
title: Custom Food
---

Gastronomicon allows other addons to register custom food via its API.

## 🍞 Custom Ingredients: `SimpleGastroFood`

A `SimpleGastroFood` takes a `SlimefunItemStack`, item group, and its recipe. Some examples from Gastronomicon include **Toast**, **Peanut Butter**, and **Soy Sauce**, as well as all the cooked versions of all the new raw meat.

Although they can be initialized normally with a constructor, using the `SimpleGastroFoodBuilder` is recommended to avoid null values, empty lists, and mistaking recipe components.

### 🏗️ How to Use the `SimpleGastroFoodBuilder`

Here is the **Toast** example from earlier, initalized using the builder class.

```java
new SimpleGastroFoodBuilder()
    .type(GastroRecipeType.MULTI_STOVE)
    .item(GastroStacks.TOAST)
    .ingredients(new ItemStack(Material.BREAD))
    .temperature(Temperature.LOW)
    .register(Gastronomicon.getInstance());
```

You should replace `Gastronomicon.getInstance()` with your own plugin instance.

Full documentation:

| Method | Description | Notes / Requirements |
|:--|:--|:--|
| `research(Research research)` | Sets the required research of this recipe. Set to null for no research | Defaults to `GastroResearch.PROCESSED_INGREDIENTS` |
| `type(GastroRecipeType type)` | Sets the recipe type of its recipe | Must be set when building / registering |
| `item(SlimefunItemStack itemStack)` | Sets the itemstack | Must be set when building / registering |
| `ingredients(ItemStack... ingredients)` | Sets the ingredients (3x3 grid) of the recipe | Must be set when building / registering. |
| `ingredients(RecipeComponent<?>... ingredients)` | Same as above. See [Recipes](/gastronomicon/recipes) for more information on `RecipeComponent`. | '' |
| `ingredients(Object... ingredients)` | Same as above. This method facilitates mixing group recipe components with simple itemstacks. Allowed types are `ItemStack`, `RecipeComponent<?>`, `Material`, and `String` (treated as a `SlimefunItem` id). All other types are treated as null/air | '' |
| `container(ItemStack container)` | Sets the container of the recipe | Defaults to null/air if unset |
| `container(RecipeComponent<?> container)` | Same as above | '' |
| `tools(ItemStack... items)` | Sets the tools of the recipe | Defaults to none if unset |
| `amount(int amount)` | Sets the amount crafted by the recipe | Defaults to 1 if unset |
| `temperature(Temperature temperature)` | Sets the temperature of the recipe | **This should only be set on `GastroRecipeType.MULTI_STOVE` recipes.** Defaults to `Temperature.MEDIUM` if unset |
| `build()` | Returns an initialized `SimpleGastroFood` | - |
| `register(SlimefunAddon addon)` | Builds the `SimpleGastroFood` and registers it using the given addon | - |

## 🥪 Custom Food: `FoodItemStack` and `GastroFood`

A `GastroFood` is similar to a `SimpleGastroFood` except that it uses a `FoodItemStack` instead of a `SlimefunItemStack`, and it has a perfect version. Addons do not have to worry about setting up perfect food.

The `GastroFood` has a builder, `GastroFoodBuilder` which mostly has the same methods as `SimpleGastroFoodBuilder`, except for a few differences:

| Method | Description | Notes / Requirements |
|:--|:--|:--|
| `research(Research research)` | Sets the required research of this recipe. Set to null for no research | Defaults to **`GastroResearch.FOOD`** |
| **`item(FoodItemStack itemStack)`** | Sets the **`FoodItemStack`** used as a base itemstack | Must be set when building / registering |
| `build()` | Returns an initialized **`GastroFood`** | - |
| `register(SlimefunAddon addon)` | Builds the **`GastroFood`** and registers it using the given addon | - |

The `FoodItemStack` also has a builder, `FoodItemStackBuilder`, which makes setting hunger and effects easier.

### 🏗️ How to Use the `FoodItemStackBuilder`

Here is an example from Gastronomicon:

```java
public static final FoodItemStack BAKED_BEANS_AND_TOAST = new FoodItemStackBuilder()
    .id("GN_BAKED_BEANS_AND_TOAST")
    .texture(HeadTextures.TOAST_ORANGE)
    .name("Baked Beans and Toast")
    .hunger(8)
    .effects(
        FoodEffect.chanceOf(FoodEffect.positivePotionEffect(
            PotionEffectType.DAMAGE_RESISTANCE, 90), 0.5))
    .build();
```

Full documentation:

| Method | Description | Notes / Requirements |
|:--|:--|:--|
| `id(String id)` | Sets the id of the item | Must be a valid id and be set when building. It is recommended to prefix ids with something that represents your addon (Gastronomicon uses `GN`, as in the example above) |
| `texture(String texture)` | Sets the texture of the item | Must be a valid texture (as used in a normal `SlimefunItem` constructor). Either the texture or material must be set when building |
| `material(Material material)` | Sets the material of the item | Either the texture or material must be set when building |
| `name(String name)` | Sets the display name of the item | Must be set when building |
| `lore(String... lore)` | Sets the lore of the item | Optional |
| `perfectLore(String... lore)` | Sets the lore of the perfect version of the food | Optional, defaults to the regular lore if not set |
| `hunger(int hunger, double saturationRatio)` | Sets the hunger and saturation ratio (to hunger). For example, a hunger value of 8 and a saturation ratio of 1.5 would mean the food restores 12 saturation | Hunger defaults to 0 and saturation ratio defaults to 1 if not set |
| `hunger(int hunger)` | Same as above, with a saturation ratio of 1 | '' |
| `effects(FoodEffect... effect)` | Sets the effects of the item when eaten | Optional, more info on `FoodEffect`s below |

### 🍴 Producing effects when eaten: `FoodEffect`

A `FoodEffect` is composed of a callback function (to be called when the player eats it) and descriptions (for use in the lore of the item). There are also static factory methods to generate default `FoodEffects`

| Method | Description | Notes / Requirements |
|:--|:--|:--|
| `chanceOf(FoodEffect effect, double chance)` | Takes another `FoodEffect` and instead gives it only a chance of occuring | `chance` must be between 0 and 1, inclusive |
| `heal(int health)` | Heals the player | Health healed over the max health is discarded. `health` must be >= 1 |
| `positivePotionEffect(PotionEffectType type, int durationSeconds, ...)` | Gives the player the specified effect. | There isn't a restriction on the type of the effect, but it will be coloured blue in the lore. There are other methods that also specify the amplifier, particles, etc. which are pretty straightforward |
| `negativePotionEffect(PotionEffectType type, int durationSeconds)` | Gives the player the specified effect | Same as above, but with red text in the lore |
| `removePotionEffect(PotionEffectType)` | Removes the specified effect from the player | - |
| `clearPotionEffects()` | Removes all potion effects from the player | - |
| `xp(int xp)` | Gives the player xp | - |
| `giveItem(ItemStack item)` | Gives the player an item | There are other variations on this method that are straightforward to use |
| `giveSlimefunItem(String id)` | Gives the player a Slimefun item | Must be a valid id. |
| `air(int amount)` | Refills the player's air | - |
| `warm(int amount)` | Reduces the players freeze ticks | Freeze ticks go from 0-140 |
| `teleport(int radius)` | Teleports the player randomly within the specified radius | Radius is bounded to 10 for performance reasons |
| `move(Vector velocity, String description)` | Adds `velocity` to the player's current velocity | This is `bukkit.util.Vector`, not `java.util.Vector`. Note that a description is not automatically generated and is explicitly required |
| `extinguish()` | Extinguishes the player | - |
