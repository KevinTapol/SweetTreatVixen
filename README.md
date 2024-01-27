# Sweet Treat Vixen
<!-- ![Relative](/public/imgs/SweetTreatVixen.gif) -->
<img src="./public/imgs/SweetTreatVixenAirTableFinal.gif" width="100%" alt="#"/>
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

---

<!-- *Note to self. Github does not count non main branch pushes as commit contributions use*
*To back date commits*
git commit --date='YYYY-MM-DD' -m "commit comments" -->

<!-- <a target="_blank" href="https://www.youtube.com/watch?v=r1auJEf9ISo&t=618s&ab_channel=ColbyFayock">Click here for Colby Fayock's **Intersection Observer** useInView() hook tutorial</a>
- npm i react-icons react-type-animation react-intersection-observer

<a target="_blank" href="https://www.youtube.com/watch?v=nJ81DFmgHdU&ab_channel=WebDevSimplified">Click here for WebDevSimplified's tutorial on **CSS Key Frame Animations**</a>

<a target="_blank" href="https://tailwindcss.com/docs/guides/vite">Click here for **Tailwind Vite Docs**</a>

<a target="_blank" href="https://www.npmjs.com/package/react-type-animation">Click here for the **React Animations Docs**</a>

<a target="_blank" href="https://www.youtube.com/watch?v=22CxRxryQFE&t=1733s&ab_channel=CodeCommerce" >Click here for Code Commerce's **Portfolio Guide** using React and Tailwind</a> -->

<!--[click here](https://www.youtube.com/watch?v=22CxRxryQFE&t=1733s&ab_channel=CodeCommerce) -->

- [x] modal needed position fixed with z index to be a popup

- [x] create a form field of post with intention to send via email

-[x] create app.getform.io account and use .env VITE_VARIABLE with form action *.env must be a root level!* 
used 

`<form action={`${import.meta.env.VITE_FORM}`}>`

-[x] Learn Airtable and Airtable JS Library automation emails based on table data per email recipient for an alternative to app.getform.io due to getform restrictions of 50 emails for free tier
***You can add collaborators on mobile with an email confirmation***


*Should I change navbar for big screens to include the menu or change the icon to something more descriptive?*


Add a tag with mailto href with subject and body inputs e.target.value javascript functions? 
- [x] instead I used getform.io

- [x] add sizes and prices to modal per each category

- [ ] onClick={(e) => e.stopPropagation()} not working on menus but is working on modals
- [x] fix onClick events so that both menus cannot be open at the same time  

I used an arrow function with `{() => {fn1;fn2}}` to call 2 functions in line specifically on the onClick for menus

`onClick={() => {setNav(false);setCart(true)}}` 
<!-- airtable has a js library to install with npm i airtable. Then you can grab your api by specific database form. Log into your airtable account on airtable.com/api for documentation, api key and base id (database id).-->

*I added the following to the header of index.html to use Pacifico font. I also created a CSS class in index.css called font_pacifico*  
`<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">`

*Consider adding a carousel to the cake model using another json file like cake.json or display a grid of images per model*

-[x] Airtable custom JSON object created with bearer token and api 1/7/2024
-[x] Add environmental variables to netlify hosting site
-[] Create new screen to gif of user interaction and Airtable data creation
-[x] Create QRCode for website url
<img src="./public/imgs/qrcode.jpg" width="100%" alt="#"/>
-[x] create a separate airtable for Marlet since free tier includes emails only from collaborators
*Also created brand new env for Marlet's free airtable account. Awaiting response for success.*

-[x]change useState logic for forms to 1 object instead of 5 useState strings
*I had to update the AirData object to reflect changes and the onChange per each input by name value*

-npm i --save-dev --save-exact prettier
-npx prettier --write index.html
replace index.html with whatever file you wish to format by default

- consider using window.localStorage() with useEffect() to maintain useState() on refresh
[The NetNinja localStorage.setItem('key','value') localStorage.getItem() JSON.stringify(object) JSON.parse() localStorage.getItem()](https://www.youtube.com/watch?v=SOnMln3W0U8&ab_channel=NetNinja)

***Idea create an item cart menu with checkboxes to save the state object to local storage on submit. Then get the item on page refresh with useEffect() with the condition of the state object***