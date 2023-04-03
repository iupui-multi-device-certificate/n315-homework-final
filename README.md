# N315

## Homework 9

Firebase URL:
https://rah-iupui-n315-final.web.app

## DESCRIPTION

The Jungle Cook is a Vanilla JavaScript Single-Page CRUD Application that allows users to create and edit recipes, as well as view their recipes or browse for recipes.

## NOTES

- Appearance per this Adobe XD: https://xd.adobe.com/spec/000d9233-c620-4eb6-5884-adaea1a04abb-763c/
- Vanilla JavaScript Single-Page Application using Hash Routing
- Using an MVC approach using template literals for the views
- This is 100% client-side (no Node/Express)
- Using Firestore for authentication
- Trying to avoid jQuery (instructor taught this mostly)

## ISSUES

- Initially, used an ES6 modular approach.
- In the latest version, I have attempted to make app similar to Net Ninja - Lessons 1-15 (https://www.youtube.com/watch?v=aN1LnNq4z54&list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ, https://github.com/iamshaunjp/firebase-auth), but he is using a true single page with less generated HTML, so his is easier to not have it separated out into views.
- Struggling to access data in dynamic views with MVC.
- I know this is related to promises and am trying to do things in the .then clauses. However, I have not been able to overcome passing data to the view with the routing and getting the promises to resolve.
- Working on passing data to the yourRecipes so can display user data including firstName and the recipes array

## Data model

- User - email, password via Firestore Auth
- Users collection:
  - Doc id set to user.uid
  - firstName
  - lastName,
  - recipes (array)
