# fe-task-account-users
Front-end application for listing users

## Notes on UI solution
Missing from the design:
- Different button states (hover,active). Some states were added. Focus would be good to add for accessibility.
- The UserRow name when selected had 2 different colors in the Figma: #2D3748 and #1A202C. The colors are similar enough, so it is not clear if that was on purpose.
- The color names in the theme do not have a great system right now. The names would usually come from the designers' color schema.
- Lots of the sizes are in pixels in the design. It would be better to use relative units instead.

## Improvements
- Loading, error and empty states are very simple at the moment, these could be improved. For example, it would be better to use Skeleton items for the users list instead of a spinner.
- Texts are currently inside the .tsx files. In a bigger project, a library for localization could be used and texts would be in separate files. This way in the tests it would be also possible to use the text variables.
- Search input style can be updated to match the overall theme better. For example the X button doesn't look great in all browsers.
- Design didn't have a scrollbar, so it was removed in the implementation as well. It's not very good UX as it might not be obvious for the user that the list is scrollable, so it would be a good idea to return the scrollbar.