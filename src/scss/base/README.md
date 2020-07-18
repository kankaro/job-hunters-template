## Base Folder

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements.

- `_base.scss`
- `_reset.scss`
- `_typograhpy.scss`

## Note

If your project uses a lot of CSS animations, you might consider adding an `_animations.scss` file in there containing the `@keyframes` definitions of all your animations. If you only use a them sporadically, let them live along the selectors that use them.
