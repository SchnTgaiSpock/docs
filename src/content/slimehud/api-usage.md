---
title: API Usage
---

The SlimeHUD API allows addon devlopers to add custom text for their blocks when looked at.

## Including SlimeHUD in your addon

Latest Version:  
[![](https://jitpack.io/v/SchnTgaiSpock/SlimeHUD.svg)](https://jitpack.io/#SchnTgaiSpock/SlimeHUD)

The following should go into your addon's `pom.xml` under `<dependencies>`

```xml
<dependency>
    <groupId>com.github.schntgaispock</groupId>
    <artifactId>SlimeHUD</artifactId>
    <version>VERSION</version>
    <scope>provided</scope>
</dependency>
```

1.2.0 is the minimum required version.  
Make sure to also add SlimeHUD as a softdepend in `plugin.yml`

```yml
softdepend:
- SlimeHUD
```

## Registering custom text

First, make sure SlimeHUD exists on the server, and that it is a high enough version.

```java
if (Plugin.getServer().getPluginManager().isPluginEnabled("SlimeHUD")) {
    try {
        // Setup goes here
    } catch (NoClassDefFoundError e) {
        // Version too old
    }
}
```

To register custom text, call `SlimeHUD.getHudController().registerCustomHandler()`.

For example:

```java
SlimeHUD.getHudController().registerCustomHandler(FireCake.class, (HudRequest request) -> {
    return "&7| &4HOT!";
});
```

The `HudRequest` comes with extra information that you can use: the `SlimefunItem` being looked at, the `Location` of the block, and the `Player` looking at it.

## Formatting custom text

SlimeHUD provides `HudBuilder`, similar to Slimefun's `LoreBuilder`, to help format text before sending it to the HUD. Usage is optional.

### Progress bars

`HudBuilder.getProgressBar()` will return a colored progress bar

### Formatted numbers

`HudBuilder` provides two ways of formatting numbers.  

- `getAbbreviatedNumber()`:
  - `123` -> `123`
  - `45678` -> `45.67K`
  - `9012345` -> `9.01M`

- `getCommaNumber()`:
  1. `123` -> `123`
  2. `45678` -> `45,678`
  3. `9012345` -> `9,012,345`
