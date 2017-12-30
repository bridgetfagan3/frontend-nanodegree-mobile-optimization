# Frontend Nanodegree Optimization project

1. to view index.html on a local web server:

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

2. Open a browser and visit localhost:8080
3. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

4. Copy the public URL ngrok gives you and try running it through PageSpeed Insights!

### Optimizations made in index.html

1. Optimized pizzeria.jpg into two smaller photos and optimized profilepic.jpg.
2. removed inline script for analystics.js (one link was sufficient, did not need duplicate with the script).
3. moved google analytics script to the end of html.
4. Removed Google font line which blocked rendering.
5. Optimized CSS delivery by moving to the end of html.
6. Minified CSS and HTML.

### Optimizations made in views/js/main.js for pizza.html


1. Optimized pizzeria images.
2. within updatePositions...
  - moved "document.body.scrollTop/1250" out of the "for" loopin
  - changed left to TransformX
3. added will-change: transform to .mover in style.css
4. called for size of array before loops
5. got number of col and rows to have minimum visible requirement (no need to transform all the pizzas)

6. took out the need to calculate dx and newwidth in the for loop--all pizzas are the same size
