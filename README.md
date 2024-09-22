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
npm install
npm build
npm preview
```

## List of missing functionalities:
- Edit action
- Delete action
- Connect users action
- "Order by" column action and UI

## Lighthouse report
![image](https://github.com/user-attachments/assets/06d0a41a-a587-48d6-9fc7-bd52ef219a33)

## Tests
![image](https://github.com/user-attachments/assets/a1bc06a2-2126-4b4a-a750-9f73ad1e5ead)


## Notes on UI solution
Missing from the design:
- Different states (hover,active, disabled). Some states were added to the buttons. Focus would be good to add for accessibility.
- The UserRow's "name" when selected/hovered had 2 different colors in the Figma: #2D3748 and #1A202C. The colors are similar enough, so it is not clear if that was on purpose.
- The color names in the theme do not have a great system right now. The names would usually come from the designers' color schema.
- Search input style should be specified, for example the X doesn't look great in all browsers.

## Improvements
- Loading, error and empty states are very simple at the moment, these could be improved. For example, it would be better to use Skeleton items for the users list instead of a spinner.
- Texts are currently inside the .tsx files. In a bigger project, a library for localization could be used and texts would be in separate files. This way in the tests it would be also possible to use the text variables.
- Design didn't have a scrollbar, so it was removed in the implementation as well. It's not very good UX as it might not be obvious for the user that the list is scrollable, so it would be a good idea to return the scrollbar.
- The dataset is very large, I would expect the pagination, ordering and search would be done on the server side as it would be more performant. If even larger datasets are expected, then client-side pagination or streams could be considered, but it would increase the complexity of code at the moment. 
- In case of even larger datasets, Search could be optimised with web workers.
- Some places are using pixel values to match the designs pixel-perfectly, it would be better to use relative units.
