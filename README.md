# Sweet Treat Vixen
- npm create vite@latest .

***To Install Tailwind***
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

***In package.json add the following to content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",]***

***Add the following to frontend/src/index.css***   
@tailwind base;  
@tailwind components;  
@tailwind utilities;  
- delete app.css
- delete all contents of app.jsx and create a new component with code snippet rafce

Install React Icons, Type Animation and Intersection Observer
- npm i react-icons react-type-animation react-intersection-observer

<!-- *Note to self. Github does not count non main branch pushes as commit contributions use*
*To back date commits*
git commit --date='YYYY-MM-DD' -m "commit comments" -->

<!-- <a target="_blank" href="https://www.youtube.com/watch?v=r1auJEf9ISo&t=618s&ab_channel=ColbyFayock">Click here for Colby Fayock's **Intersection Observer** useInView() hook tutorial</a>
- npm i react-icons react-type-animation react-intersection-observer

<a target="_blank" href="https://www.youtube.com/watch?v=nJ81DFmgHdU&ab_channel=WebDevSimplified">Click here for WebDevSimplified's tutorial on **CSS Key Frame Animations**</a>

<a target="_blank" href="https://tailwindcss.com/docs/guides/vite">Click here for **Tailwind Vite Docs**</a>

<a target="_blank" href="https://www.npmjs.com/package/react-type-animation">Click here for the **React Animations Docs**</a>

<a target="_blank" href="https://www.youtube.com/watch?v=22CxRxryQFE&t=1733s&ab_channel=CodeCommerce" >Click here for Code Commerce's **Portfolio Guide** using React and Tailwind</a> -->

<!-- modal needed position fixed with z index to be a popup -->
<!-- # Next step create a form field of post and get to email 1:04:00 
[click here](https://www.youtube.com/watch?v=22CxRxryQFE&t=1733s&ab_channel=CodeCommerce) -->
# Next step create app.getform.io account and use .env VITE_VARIABLE with form action of action={`${import.meta.env.VITE_FORM}`}
*.env must be a root level!*