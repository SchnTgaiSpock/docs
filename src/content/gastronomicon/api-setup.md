---
title: API Setup
---

## 📝 Adding the Dependency

Gastronomicon is hosted on JitPack.

Adding the JitPack repository:

```xml
<repositories>
  <repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>
```

Adding Gastronomicon:

```xml
<dependency>
  <groupId>com.github.SchnTgaiSpock</groupId>
  <artifactId>Gastronomicon</artifactId>
  <version>v1.1.0</version>
  <scope>provided</scope>
</dependency>
```

The API changelog below will be updated as new features get added.

|Version|Changes|
|:--|:--|
|v1.1.0|Lombok scope changed to `provided`|
|v1.0.1|`GastroRecipeType.REFRIDGERATOR` was changed to `GastroRecipeType.REFRIGERATOR` (oops)|
|v1.0.0|Some classes were moved around to more suitable subfolders. This won't change from now on.|
|v0.1.0|Initial API Release|

## Up next

- [Adding Custom Food](/gastronomicon/custom-food)
