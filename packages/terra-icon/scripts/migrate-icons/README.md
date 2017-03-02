# Migrate Icons

```
yarn migrate-icons
```

* Copies svgs from the repository `cerner-one-icons` to `terra-icon`.
* Renames svgs to concept. Filename to concept mapping is in a csv file in the `/src` directory.
* Adds `is-bidi` class to svgs. Bidi attribute value is found in a csv file in the `/src` directory.
* Uses svgo to optimize svgs.
