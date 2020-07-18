## Vendors Folder

Most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – _Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered_, and so on. Putting those aside in the same folder is a better idea.

- `_normalize.scss`
- `_bootstrap.scss`
- `_jquery-ui.scss`
- `_select2.scss`

If you have to override a section of any vendor, It is recommended to have an 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite.

For instance, `vendors-extensions/_bootstrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.
