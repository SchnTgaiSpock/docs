---
title: Events
---

Gastronomicon introduces several new events to listen to

## When Crafting: `PlayerGastroFoodCraftEvent`

This event includes the player and the recipe they are trying to craft. It is called when the player is about to craft the recipe. Cancelling the recipe will prevent the player from crafting and will send them a message if a message was set.

## When Eating: `PlayerGastroFoodConsumeEvent`

This event includes all the fields from its parent, `PlayerItemConsumeEvent`, as well as the `GastroFood` eaten. Cancelling the event will prevent the player from eating the item and will send them a message if a message was set.
