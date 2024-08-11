Here's a JavaScript code snippet to demonstrate the use of `tagName` and `nodeName` properties:

```javascript
// HTML structure for reference
// <div id="example">
//     <p>This is a paragraph.</p>
//     <!-- This is a comment -->
//     <span>This is a span element.</span>
//     <text>This is a text node.</text>
// </div>

document.addEventListener("DOMContentLoaded", () => {
    // Select the example div
    const exampleDiv = document.getElementById("example");

    // Iterate over all child nodes
    exampleDiv.childNodes.forEach(node => {
        // Print nodeName for all nodes
        console.log("nodeName:", node.nodeName);

        // Print tagName if the node is an element
        if (node.nodeType === Node.ELEMENT_NODE) {
            console.log("tagName:", node.tagName);
        }
    });
});
```

In this code:

- `node.nodeName` is used to get the node name of each child node, which is defined for any type of node (Element, Text, Comment, etc.).
- `node.tagName` is used to get the tag name, but only if the node is an element node (`node.nodeType === Node.ELEMENT_NODE`). 

When this script runs, it will log the `nodeName` for all child nodes of the `exampleDiv` and the `tagName` for element nodes. For example, it will output:

```
nodeName: #text
nodeName: P
tagName: P
nodeName: #comment
nodeName: SPAN
tagName: SPAN
nodeName: TEXT
tagName: TEXT
```


## Insertion Through DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Manipulation</title>
</head>
<body>
    <div id="container">Original Content</div>
    <script>
        // 1. innerHTML
        let container = document.getElementById('container');
        container.innerHTML = container.innerHTML + '<h1>Hello World!</h1>';

        // 2. document.createElement()
        let newDiv = document.createElement('div');
        newDiv.innerHTML = '<h1>Hello World!</h1>';
        container.appendChild(newDiv);
        newDiv.className = "alert";

        // 3. document.createTextNode()
        let textNode = document.createTextNode('This Is Text Node');
        container.appendChild(textNode);

        // Node Insertion Methods
        // 4. node.append()
        let appendDiv = document.createElement('div');
        appendDiv.innerHTML = '<p>This is appended.</p>';
        container.append(appendDiv);

        // 5. node.prepend()
        let prependDiv = document.createElement('div');
        prependDiv.innerHTML = '<p>This is prepended.</p>';
        container.prepend(prependDiv);

        // 6. node.before()
        let beforeDiv = document.createElement('div');
        beforeDiv.innerHTML = '<p>This is inserted before.</p>';
        container.before(beforeDiv);

        // 7. node.after()
        let afterDiv = document.createElement('div');
        afterDiv.innerHTML = '<p>This is inserted after.</p>';
        container.after(afterDiv);

        // 8. node.replaceWith()
        let replaceDiv = document.createElement('div');
        replaceDiv.innerHTML = '<p>This is replacing the original container.</p>';
        container.replaceWith(replaceDiv);
    </script>
</body>
</html>
```

### Explanation:

1. **`innerHTML`**:
   - Sets or retrieves the HTML content inside an element.
   - Here, it appends an `<h1>Hello World!</h1>` to the existing content of the `container` div.

2. **`document.createElement()`**:
   - Creates a new HTML element.
   - In this case, a new `div` is created, its inner HTML is set, and it is appended to the `container` div. Additionally, a class name `alert` is assigned.

3. **`document.createTextNode()`**:
   - Creates a new text node.
   - This text node is appended to the `container` div.

4. **`node.append()`**:
   - Inserts nodes or strings after the last child of the specified parent node.
   - Here, a new `div` with a paragraph is appended to the `container` div.

5. **`node.prepend()`**:
   - Inserts nodes or strings before the first child of the specified parent node.
   - A new `div` with a paragraph is prepended to the `container` div.

6. **`node.before()`**:
   - Inserts nodes or strings before the specified node.
   - A new `div` with a paragraph is inserted before the `container` div.

7. **`node.after()`**:
   - Inserts nodes or strings after the specified node.
   - A new `div` with a paragraph is inserted after the `container` div.

8. **`node.replaceWith()`**:
   - Replaces the specified node with a given node.
   - The `container` div is replaced with a new `div` containing a paragraph.


## Insertion Method

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Manipulation</title>
</head>
<body>
    I am start of this container (outer)
    <div class="container">
        I am start of this container (inner)
        <div>I am the first element</div>
        I am end of this container (inner)
    </div>
    I am end of this container (outer)
    <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js

// 1. innerHTML
let container = document.querySelector('.container');
container.innerHTML = container.innerHTML + '<h1>Hello World!</h1>';

// Output after innerHTML:
// I am start of this container (outer)
// <div class="container">
//     I am start of this container (inner)
//     <div>I am the first element</div>
//     I am end of this container (inner)
//     <h1>Hello World!</h1>
// </div>
// I am end of this container (outer)

// 2. document.createElement()
let newDiv = document.createElement('div');
newDiv.innerHTML = '<h1>Hello World!</h1>';
container.appendChild(newDiv);
newDiv.className = "alert";

// Output after createElement and appendChild:
// I am start of this container (outer)
// <div class="container">
//     I am start of this container (inner)
//     <div>I am the first element</div>
//     I am end of this container (inner)
//     <h1>Hello World!</h1>
//     <div class="alert"><h1>Hello World!</h1></div>
// </div>
// I am end of this container (outer)

// 3. document.createTextNode()
let textNode = document.createTextNode('This Is Text Node');
container.appendChild(textNode);

// Output after createTextNode:
// I am start of this container (outer)
// <div class="container">
//     I am start of this container (inner)
//     <div>I am the first element</div>
//     I am end of this container (inner)
//     <h1>Hello World!</h1>
//     <div class="alert"><h1>Hello World!</h1></div>
//     This Is Text Node
// </div>
// I am end of this container (outer)

// Node Insertion Methods

// 4. node.append()
let appendDiv = document.createElement('div');
appendDiv.innerHTML = '<p>This is appended.</p>';
container.append(appendDiv);

// Output after node.append():
// I am start of this container (outer)
// <div class="container">
//     I am start of this container (inner)
//     <div>I am the first element</div>
//     I am end of this container (inner)
//     <h1>Hello World!</h1>
//     <div class="alert"><h1>Hello World!</h1></div>
//     This Is Text Node
//     <div><p>This is appended.</p></div>
// </div>
// I am end of this container (outer)

// 5. node.prepend()
let prependDiv = document.createElement('div');
prependDiv.innerHTML = '<p>This is prepended.</p>';
container.prepend(prependDiv);

// Output after node.prepend():
// I am start of this container (outer)
// <div class="container">
//     <div><p>This is prepended.</p></div>
//     I am start of this container (inner)
//     <div>I am the first element</div>
//     I am end of this container (inner)
//     <h1>Hello World!</h1>
//     <div class="alert"><h1>Hello World!</h1></div>
//     This Is Text Node
//     <div><p>This is appended.</p></div>
// </div>
// I am end of this container (outer)

// 6. node.before()
let beforeDiv = document.createElement('div');
beforeDiv.innerHTML = '<p>This is inserted before.</p>';
container.before(beforeDiv);

// Output after node.before():
// I am start of this container (outer)
// <div><p>This is inserted before.</p></div>
// <div class="container">
//     <div><p>This is prepended.</p></div>
//     I am start of this container (inner)
//     <div>I am the first element</div>
//     I am end of this container (inner)
//     <h1>Hello World!</h1>
//     <div class="alert"><h1>Hello World!</h1></div>
//     This Is Text Node
//     <div><p>This is appended.</p></div>
// </div>
// I am end of this container (outer)

// 7. node.after()
let afterDiv = document.createElement('div');
afterDiv.innerHTML = '<p>This is inserted after.</p>';
container.after(afterDiv);

// Output after node.after():
// I am start of this container (outer)
// <div><p>This is inserted before.</p></div>
// <div class="container">
//     <div><p>This is prepended.</p></div>
//     I am start of this container (inner)
//     <div>I am the first element</div>
//     I am end of this container (inner)
//     <h1>Hello World!</h1>
//     <div class="alert"><h1>Hello World!</h1></div>
//     This Is Text Node
//     <div><p>This is appended.</p></div>
// </div>
// <div><p>This is inserted after.</p></div>
// I am end of this container (outer)

// 8. node.replaceWith()
let replaceDiv = document.createElement('div');
replaceDiv.innerHTML = '<p>This is replacing the original container.</p>';
container.replaceWith(replaceDiv);

// Output after node.replaceWith():
// I am start of this container (outer)
// <div><p>This is inserted before.</p></div>
// <div><p>This is replacing the original container.</p></div>
// <div><p>This is inserted after.</p></div>
// I am end of this container (outer)
```

### Explanation:

1. **`innerHTML`**:
   - Appends `<h1>Hello World!</h1>` to the end of the `container` div's content.

2. **`document.createElement()`**:
   - Creates a new `div`, sets its inner HTML to `<h1>Hello World!</h1>`, and appends it to the `container` div. It also adds a class name `alert` to this new `div`.

3. **`document.createTextNode()`**:
   - Creates a text node with the content `This Is Text Node` and appends it to the `container` div.

4. **`node.append()`**:
   - Appends a new `div` containing a paragraph with the text `This is appended.` to the end of the `container` div's content.

5. **`node.prepend()`**:
   - Prepends a new `div` containing a paragraph with the text `This is prepended.` to the beginning of the `container` div's content.

6. **`node.before()`**:
   - Inserts a new `div` containing a paragraph with the text `This is inserted before.` before the `container` div.

7. **`node.after()`**:
   - Inserts a new `div` containing a paragraph with the text `This is inserted after.` after the `container` div.

8. **`node.replaceWith()`**:
   - Replaces the `container` div with a new `div` containing a paragraph with the text `This is replacing the original container.`

By the end of the script execution, the DOM structure will be significantly modified as per the explained output comments.

## Browser Events

### Mouse Events
1. `click` - Fired when an element is clicked.
2. `dblclick` - Fired when an element is double-clicked.
3. `mousedown` - Fired when a mouse button is pressed down on an element.
4. `mouseup` - Fired when a mouse button is released over an element.
5. `mousemove` - Fired when the mouse pointer is moving while it is over an element.
6. `mouseover` - Fired when the mouse pointer is moved onto an element.
7. `mouseout` - Fired when the mouse pointer is moved out of an element.
8. `mouseenter` - Fired when the mouse pointer is moved onto an element (does not bubble).
9. `mouseleave` - Fired when the mouse pointer is moved out of an element (does not bubble).
10. `contextmenu` - Fired when the right mouse button is clicked (or a context menu key is pressed).

### Keyboard Events
1. `keydown` - Fired when a key is pressed down.
2. `keyup` - Fired when a key is released.
3. `keypress` - Fired when a key that produces a character value is pressed down.

### Form Events
1. `submit` - Fired when a form is submitted.
2. `change` - Fired when an element's value changes (for `<input>`, `<textarea>`, and `<select>`).
3. `input` - Fired when an element receives user input.
4. `focus` - Fired when an element receives focus.
5. `blur` - Fired when an element loses focus.
6. `reset` - Fired when a form is reset.
7. `select` - Fired when some text is selected in a text field.

### Clipboard Events
1. `copy` - Fired when the user copies content.
2. `cut` - Fired when the user cuts content.
3. `paste` - Fired when the user pastes content.

### Drag and Drop Events
1. `drag` - Fired when an element is being dragged.
2. `dragstart` - Fired when the user starts dragging an element.
3. `dragend` - Fired when the user stops dragging an element.
4. `dragenter` - Fired when a dragged element enters a valid drop target.
5. `dragover` - Fired when a dragged element is over a valid drop target.
6. `dragleave` - Fired when a dragged element leaves a valid drop target.
7. `drop` - Fired when a dragged element is dropped on a valid drop target.

### Focus Events
1. `focus` - Fired when an element receives focus.
2. `blur` - Fired when an element loses focus.
3. `focusin` - Similar to `focus`, but bubbles.
4. `focusout` - Similar to `blur`, but bubbles.

### Touch Events
1. `touchstart` - Fired when a touch point is placed on the touch surface.
2. `touchmove` - Fired when a touch point is moved along the touch surface.
3. `touchend` - Fired when a touch point is removed from the touch surface.
4. `touchcancel` - Fired when a touch point has been disrupted.

### View Events
1. `resize` - Fired when the document view (window) is resized.
2. `scroll` - Fired when the document view (window) is scrolled.

### Media Events
1. `play` - Fired when the media has started playing.
2. `pause` - Fired when the media is paused.
3. `ended` - Fired when the media has reached the end.
4. `volumechange` - Fired when the volume changes.
5. `timeupdate` - Fired when the time indicated by the `currentTime` attribute has been updated.
6. `progress` - Fired periodically to indicate the progress of the media downloading.
7. `waiting` - Fired when the media is paused, but expected to resume (e.g., buffering).

### Network Events
1. `online` - Fired when the browser goes online.
2. `offline` - Fired when the browser goes offline.

### Miscellaneous Events
1. `load` - Fired when the whole page has loaded.
2. `unload` - Fired when the page is unloading.
3. `error` - Fired when an error occurs (typically for scripts, images, etc.).
4. `abort` - Fired when the loading of a resource has been aborted.
5. `beforeunload` - Fired when the page is about to be unloaded.
6. `hashchange` - Fired when the fragment identifier of the URL has changed.
7. `popstate` - Fired when the active history entry changes.

To add multiple event listeners to an element in JavaScript, you can use the `addEventListener` method for each event you want to listen to. Each call to `addEventListener` can attach a different event and handler to the same element.

### Example: Adding Multiple Events to a Button

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Events Example</title>
</head>
<body>

<button id="myButton">Click Me</button>

<script>
    // Get the button element
    const button = document.getElementById('myButton');

    // Add a click event listener
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });

    // Add a mouseover event listener
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = 'lightblue';
    });

    // Add a mouseout event listener
    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = '';
    });

    // Add a double click event listener
    button.addEventListener('dblclick', function() {
        alert('Button double-clicked!');
    });
</script>

</body>
</html>
```

### Explanation:
- **Click Event:** Displays an alert when the button is clicked.
- **Mouseover Event:** Changes the button's background color when the mouse hovers over it.
- **Mouseout Event:** Resets the button's background color when the mouse moves away.
- **Double Click Event:** Displays an alert when the button is double-clicked.
