## Joey Harig's Personal Portfolio


### Front End Development

The website is built using React js. The state managment tool, React Hooks, manages the state of the users location on a page, form validation, and the display of navigation menu. 

The style are written in Scss to make use of custom mixin variables for colors, margin sizes, and screen sizes. 


### Back End 

The site is hosted on Netlify, using their CMS for the handeling of form submissions. Netlify listens to new commits to the master branch of this github repo and automatically deploys the site with the revisions. 


### Features to Check Out!

* #### Icon Component
  * The custom icon svg component takes the icon name as a parameter and then pulls the svg <path> tags from a json file. The component then returns an svg element. This process ensures that all svgs are proportionate and easy to work with. 

* #### Form Validator
  * The contact form component utilizes the useReducer and useCallback hooks to manage the state of the input values and validations to dynamically update the css classes and render error labels. 
