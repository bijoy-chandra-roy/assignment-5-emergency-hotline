1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
   ⇒ getElementById returns one element by id. getElementsByClassName returns a collection of elements by class. querySelector returns the first element matching a CSS selector, querySelectorAll returns all matches as a static list.

2. How do you create and insert a new element into the DOM?<br>
   ⇒ To create and insert a new element, use document.createElement to make it, set its content or attributes, then add it to the DOM with appendChild.

3. What is Event Bubbling and how does it work?<br>
   ⇒ Event bubbling is when an event on a child element automatically triggers the same event on its parent elements, moving up the DOM tree. The event starts from the innermost element and “bubbles” outward to ancestors unless stopPropagation() is used.

4. What is Event Delegation in JavaScript? Why is it useful?<br>
   ⇒ Event delegation is when you attach a single event listener to a parent element to handle events on its child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?<br>
    ⇒ preventDefault() stops the browser’s default action for an event, like following a link or submitting a form. stopPropagation() stops the event from bubbling up or capturing down the DOM, so parent or ancestor handlers don’t run.
