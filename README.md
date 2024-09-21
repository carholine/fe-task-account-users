# fe-task-account-users
Front-end application for listing users

## How to run
Locally run with 
```
npm install
npm run dev
```

And open in localHost.

Run all tests with
```
npm run test
```

To see a more optimized minified build locally, run:
```
npm build
npm preview
```

## List of missing functionalities:
- Edit action
- Delete action
- Connect users action
- "Order by" column action and UI

## Notes on UI solution
Missing from the design:
- Different states (hover,active, disabled). Some states were added to the buttons. Focus would be good to add for accessibility.
- The UserRow's "name" when selected/hovered had 2 different colors in the Figma: #2D3748 and #1A202C. The colors are similar enough, so it is not clear if that was on purpose.
- The color names in the theme do not have a great system right now. The names would usually come from the designers' color schema.

## Improvements
- Loading, error and empty states are very simple at the moment, these could be improved. For example, it would be better to use Skeleton items for the users list instead of a spinner.
- Texts are currently inside the .tsx files. In a bigger project, a library for localization could be used and texts would be in separate files. This way in the tests it would be also possible to use the text variables.
- Search input style can be updated to match the overall theme better. For example the X button doesn't look great in all browsers.
- Design didn't have a scrollbar, so it was removed in the implementation as well. It's not very good UX as it might not be obvious for the user that the list is scrollable, so it would be a good idea to return the scrollbar.
- The dataset is very large, I would expect the pagination, ordering and search would be done on the server side as it would be more performant.
- Some places are using pixel values to match the designs pixel-perfectly, it would be better to use relative units.