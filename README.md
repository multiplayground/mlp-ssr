This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

## Table of Contents

-   [Table of Contents](#table-of-contents)
-   [Folder Structure](#folder-structure)
-   [Available Scripts](#available-scripts)
    -   [`npm run dev`](#npm-run-dev)
    -   [`npm run build`](#npm-run-build)
    -   [`npm run start`](#npm-run-start)

## Folder Structure

```
.
├── components        // react компоненты
├── layout            // nextjs layouts
├── pages             // nextjs pages
│   └── index.js      // entry point
├── static            // nextjs static folder
├── ui                // Блоки страниц
├── store             // содержит events и store с редьюсерами (effector)
├── api               // для описания побочных эффектов createEffect (effector)
├── theme             // глобальный источник "DefaultTheme" (styled-components)
├── types             // стандартныей каталог для описания кастомных типов d.ts

* sandbox директории позже будут удалены
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.
