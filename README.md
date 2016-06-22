# pagination

This main topic about this project is to show how to use javascript to enhance the usability of a web page that has too 
much informations by using progressive enhancement to add pagination and search filter.

---

We use jquery library to meet the expectations:

1. Use regular expression to implement simple filter function over html content
2. Use jquery to make it easier to deal with the DOM
3. Create simple pagination depending of the number of elements we want to display
4. Use the implemented filter to quickly look for specific type of informations

Some important requirements are :

1. <b>Basic content should be accessible to browsers that don't support JavaScript</b>
In other words, the index.html file display the entire list of students for browsers that don't support JavaScript.  

2. <b>Unobstrusive JavaScript :</b>
This means that any content or functionality related to JavaScript has been added programmatically by JavaScript. 
For this project, that means, the search field and the pagination buttons haven't been added directly to the index.html file. 
You need to use JavaScript to add them.

---

To run this project, clone it, go to the pagination folder and launch the <i>index.html</i> in the browser 
