# freeCodeCamp Curriculum

## JavaScript Algorithms and Data Structures

While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.

Once you have the fundamentals down, you'll apply that knowledge by creating algorithms to manipulate strings, factorialize numbers, and even calculate the orbit of the International Space Station.

Along the way, you'll also learn two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).

Note: Some browser extensions, such as ad-blockers and script-blockers can interfere with the tests. If you face issues, we recommend disabling extensions that modify or block the content of pages while taking the course.

### Courses

### Basic Data Structures

Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.

In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.

### Basic Algorithm Scripting

An algorithm is a series of step-by-step instructions that describe how to do something.

To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.

In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything from converting temperatures to handling complex 2D arrays.

### Object Oriented Programming

OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes organize code to describe things and what they can do.

In this course, you'll learn the basic principles of OOP in JavaScript, including the this keyword, prototype chains, constructors, and inheritance.

### Functional Programming

Functional Programming is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.

In this course, you'll learn the core concepts of Functional Programming including pure functions, how to avoid mutations, and how to write cleaner code with methods like .map() and .filter().

### Intermediate Algorithm Scripting

Now that you know the basics of algorithmic thinking, along with OOP and Functional Programming, test your skills with the Intermediate Algorithm Scripting challenges.

### JavaScript Algorithms and Data Structures Projects

This is it — time to put your new JavaScript skills to work. These projects are similar to the algorithm scripting challenges you've done before – just much more difficult.

Complete these 5 JavaScript projects to earn the JavaScript Algorithms and Data Structures certification.

## Front End Development Libraries

Now that you're familiar with HTML, CSS, and JavaScript, level up your skills by learning some of the most popular front end libraries in the industry.

In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass.

Later, you'll build a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.

### Courses

### Bootstrap

Bootstrap is a front end framework used to design responsive web pages and applications. It takes a mobile-first approach to web development, and includes pre-built CSS styles and classes, plus some JavaScript functionality.

In this course, you'll learn how to build responsive websites with Bootstrap, and use its included classes to style buttons, images, forms, navigation, and other common elements.

#### Use Responsive Design with Bootstrap Fluid Containers

In the HTML5 and CSS section of freeCodeCamp we built a Cat Photo App. Now let's go back to it. This time, we'll style it using the popular Bootstrap responsive CSS framework.

Bootstrap will figure out how wide your screen is and respond by resizing your HTML elements - hence the name responsive design.

With responsive design, there is no need to design a mobile version of your website. It will look good on devices with screens of any width.

You can add Bootstrap to any app by adding the following code to the top of your HTML:

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
  crossorigin="anonymous"
/>
```

In this case, we've already added it for you to this page behind the scenes. Note that using either > or /> to close the link tag is acceptable.

To get started, we should nest all of our HTML (except the link tag and the style element) in a div element with the class container-fluid.

Tests
Waiting:Your div element should have the class container-fluid.
Waiting:Your div element should have a closing tag.
Waiting:All HTML elements after the closing style tag should be nested in .container-fluid.

#### Make Images Mobile Responsive

First, add a new image below the existing one. Set its src attribute to `https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg`.

It would be great if this image could be exactly the width of our phone's screen.

Fortunately, with Bootstrap, all we need to do is add the `img-responsive` class to your image. Do this, and the image should perfectly fit the width of your page.

Tests
Waiting:You should have a total of two images.
Waiting:Your new image should be below your old one and have the class img-responsive.
Waiting:Your new image should not have the class smaller-image.
Waiting:Your new image should have a src of `https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg`.
Waiting:Your new img element should have a closing angle bracket.

#### Center Text with Bootstrap

Now that we're using Bootstrap, we can center our heading element to make it look better. All we need to do is add the class `text-center` to our `h2` element.

Remember that you can add several classes to the same element by separating each of them with a space, like this:

```html
<h2 class="red-text text-center">your text</h2>
```

Tests
Waiting:Your h2 element should be centered by applying the class text-center
Waiting:Your h2 element should still have the class red-text

#### Create a Bootstrap Button

Bootstrap has its own styles for button elements, which look much better than the plain HTML ones.

Create a new button element below your large kitten photo. Give it the `btn` and `btn-default` classes, as well as the text of Like.

Tests
Waiting:You should create a new button element with the text Like.
Waiting:Your new button should have two classes: btn and btn-default.
Waiting:All of your button elements should have closing tags.

#### Create a Bootstrap Button

Bootstrap has its own styles for button elements, which look much better than the plain HTML ones.

Create a new button element below your large kitten photo. Give it the `btn` and `btn-default` classes, as well as the text of Like.

Tests
Waiting:You should create a new button element with the text Like.
Waiting:Your new button should have two classes: btn and btn-default.
Waiting:All of your button elements should have closing tags.

#### Create a Block Element Bootstrap Button

Normally, your button elements with the `btn` and `btn-default` classes are only as wide as the text that they contain. For example:

```html
<button class="btn btn-default">Submit</button>
```

This button would only be as wide as the word Submit.

By making them block elements with the additional class of btn-block, your button will stretch to fill your page's entire horizontal space and any elements following it will flow onto a "new line" below the block.

```html
<button class="btn btn-default btn-block">Submit</button>
```

This button would take up 100% of the available width.

Note that these buttons still need the `btn` class.

Add Bootstrap's `btn-block` class to your Bootstrap button.

Tests
Passed:Your button should still have the `btn` and `btn-default` classes.
Failed:Your button should have the class `btn-block`.
Passed:All of your button elements should have closing tags.

#### Taste the Bootstrap Button Color Rainbow

The `btn-primary` class is the main color you'll use in your app. It is useful for highlighting actions you want your user to take.

Replace Bootstrap's `btn-default` class with `btn-primary` in your button.

Note that this button will still need the `btn` and `btn-block` classes.

Tests
Waiting:Your button should have the class `btn-primary`.
Waiting:Your button should still have the `btn` and `btn-block` classes.
Waiting:All your button elements should have closing tags.

#### Call out Optional Actions with btn-info

Bootstrap comes with several pre-defined colors for buttons. The `btn-info` class is used to call attention to optional actions that the user can take.

Create a new block-level Bootstrap button below your Like button with the text Info, and add Bootstrap's `btn-info` class to it.

Note that these buttons still need the `btn` and `btn-block` classes.

Tests
Waiting:You should create a new button element with the text Info.
Waiting:Both of your Bootstrap buttons should have the btn and btn-block classes.
Waiting:Your new button should have the class `btn-info`.
Waiting:All of your button elements should have closing tags.

#### Warn Your Users of a Dangerous Action with btn-danger

Bootstrap comes with several pre-defined colors for buttons. The `btn-danger` class is the button color you'll use to notify users that the button performs a destructive action, such as deleting a cat photo.

Create a button with the text Delete and give it the class `btn-danger`.

Note that these buttons still need the `btn` and `btn-block` classes.

Tests
Waiting:You should create a new button element with the text Delete.
Waiting:All of your Bootstrap buttons should have the btn and `btn-block` classes.
Waiting:Your new button should have the class `btn-danger`.
Waiting:All of your button elements should have closing tags.

#### Use the Bootstrap Grid to Put Elements Side By Side

Bootstrap uses a responsive 12-column grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.

Bootstrap has different column width attributes that it uses depending on how wide the user's screen is. For example, phones have narrow screens, and laptops have wider screens.

Take for example Bootstrap's col-md-_ class. Here, md means medium, and _ is a number specifying how many columns wide the element should be. In this case, the column width of an element on a medium-sized screen, such as a laptop, is being specified.

In the Cat Photo App that we're building, we'll use col-xs-_, where xs means extra small (like an extra-small mobile phone screen), and _ is the number of columns specifying how many columns wide the element should be.

Put the Like, Info and Delete buttons side-by-side by nesting all three of them within one

```html
<div class="row"></div>
```

element, then each of them within a

```html
<div class="col-xs-4"></div>
```

element.

The row class is applied to a 'div', and the buttons themselves can be nested within it.

Tests
Waiting:Your buttons should all be nested within the same div element with the class row.
Waiting:Each of your Bootstrap buttons should be nested within its own div element with the class col-xs-4.
Waiting:Each of your button elements should have a closing tag.
Waiting:Each of your div elements should have a closing tag.

#### Ditch Custom CSS for Bootstrap

We can clean up our code and make our Cat Photo App look more conventional by using Bootstrap's built-in styles instead of the custom styles we created earlier.

Don't worry - there will be plenty of time to customize our CSS later.

Delete the `.red-text`, `p`, and `.smaller-image` CSS declarations from your style element so that the only declarations left in your style element are `h2` and `thick-green-border`.

Then delete the `p` element that contains a dead link. Then remove the `red-text` class from your `h2` element and replace it with the `text-primary` Bootstrap class.

Finally, remove the `smaller-image` class from your first img element and replace it with the `img-responsive` class.

Tests
Waiting:Your h2 element should no longer have the class red-text.
Waiting:Your h2 element should now have the class text-primary.
Waiting:Your paragraph elements should no longer use the font Monospace.
Waiting:The smaller-image class should be removed from your top image.
Waiting:You should add the img-responsive class to your top image.

#### Use a span to Target Inline Elements

You can use spans to create inline elements. Remember when we used the `btn-block` class to make the button fill the entire row?

That illustrates the difference between an "inline" element and a "block" element.

By using the inline span element, you can put several elements on the same line, and even style different parts of the same line differently.

Using a `span` element, nest the word love inside the `p` element that currently has the text Things cats love. Then give the span the class text-danger to make the text red.

Here's how you would do this for the p element that has the text Top 3 things cats hate:

```html
<p>Top 3 things cats <span class="text-danger">hate:</span></p>
```

Tests
Waiting:Your span element should be inside your `p` element.
Waiting:Your span element should have just the text love.
Waiting:Your span element should have class text-danger.
Waiting:Your span element should have a closing tag.

#### Create a Custom Heading

We will make a simple heading for our Cat Photo App by putting the title and relaxing cat image in the same row.

Remember, Bootstrap uses a responsive grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.

Nest your first image and your `h2` element within a single

```javascript
<div class="row">
```

element.

Nest your `h2` element within a

```javascript
<div class="col-xs-8">
```

and your image in a

```javascript
<div class="col-xs-4">
```

so that they are on the same line.

Notice how the image is now just the right size to fit along the text?

Tests
Waiting:Your h2 element and topmost img element should both be nested together within a div element with the class row.
Waiting:Your topmost img element should be nested within a div with the class col-xs-4.
Waiting:Your h2 element should be nested within a div with the class col-xs-8.
Waiting:All of your div elements should have closing tags.

#### Add Font Awesome Icons to our Buttons

Font Awesome is a convenient library of icons. These icons can be webfonts or vector graphics. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements.

You can include Font Awesome in any app by adding the following code to the top of your HTML:

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
  crossorigin="anonymous"
/>
```

In this case, we've already added it for you to this page behind the scenes.

The `i` element was originally used to make other elements italic, but is now commonly used for icons. You can add the Font Awesome classes to the i element to turn it into an icon, for example:

```html
<i class="fas fa-info-circle"></i>
```

Note that the span element is also acceptable for use with icons.

Use Font Awesome to add a thumbs-up icon to your like button by giving it an `i` element with the classes `fas` and `fa-thumbs-up`. Make sure to keep the text `Like` next to the icon.

Tests
Waiting:You should add an i element with the classes fas and fa-thumbs-up.
Waiting:Your fa-thumbs-up icon should be located within the Like button.
Waiting:Your i element should be nested within your button element.
Waiting:Your icon element should have a closing tag.

#### Add Font Awesome Icons to all of our Buttons

Font Awesome is a convenient library of icons. These icons can be web fonts or vector graphics. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements.

Use Font Awesome to add an `info-circle` icon to your info button and a trash icon to your delete button.

Note: The span element is an acceptable alternative to the i element for the directions below.

Tests
Waiting:You should add a <i class="fas fa-info-circle"></i> within your info button element.
Waiting:You should add a <i class="fas fa-trash"></i> within your delete button element.
Waiting:Each of your i elements should have a closing tag and <i class="fas fa-thumbs-up"></i> is in your like button element.

#### Responsively Style Radio Buttons

You can use Bootstrap's col-xs-\* classes on form elements, too! This way, our radio buttons will be evenly spread out across the page, regardless of how wide the screen resolution is.

Nest both your radio buttons within a

```html
<div class="row"></div>
```

element. Then nest each of them within a

```html
<div class="col-xs-6"></div>
```

element.

Note: As a reminder, radio buttons are input elements of type radio.

Tests
Waiting:All of your radio buttons should be nested inside one div with the class row.
Waiting:Each of your radio buttons should be nested inside its own div with the class col-xs-6.
Waiting:All of your div elements should have closing tags.

#### Responsively Style Checkboxes

Since Bootstrap's `col-xs-*` classes are applicable to all form elements, you can use them on your checkboxes too! This way, the checkboxes will be evenly spread out across the page, regardless of how wide the screen resolution is.

Nest all three of your checkboxes in a ```html

<div class="row">``` element. Then nest each of them in a ```html <div class="col-xs-4">``` element.

Tests
Waiting:All of your checkboxes should be nested inside one div with the class row.
Waiting:Each of your checkboxes should be nested inside its own div with the class col-xs-4.
Waiting:All of your div elements should have closing tags.

#### Style Text Inputs as Form Controls

You can add the fa-paper-plane Font Awesome icon by adding <i class="fa fa-paper-plane"></i> within your submit button element.

Give your form's text input field a class of `form-control`. Give your form's `submit` button the classes `btn` `btn-primary`. Also give this button the Font Awesome icon of fa-paper-plane.

All textual <input>, <textarea>, and <select> elements with the class .form-control have a width of 100%.

Tests
Waiting:The submit button in your form should have the classes btn btn-primary.
Waiting:You should add a <i class="fa fa-paper-plane"></i> within your submit button element.
Waiting:The text input in your form should have the class form-control.
Waiting:Each of your i elements should have a closing tag.

#### Line up Form Elements Responsively with Bootstrap

Now let's get your form input and your submission button on the same line. We'll do this the same way we have previously: by using a `div` element with the class `row`, and other `div` elements within it using the `col-xs-\*` class.

Nest both your form's text input and submit button within a `div` with the class `row`. Nest your form's text input within a `div` with the class of `col-xs-7`. Nest your form's submit button in a `div` with the class `col-xs-5`.

This is the last challenge we'll do for our Cat Photo App for now. We hope you've enjoyed learning Font Awesome, Bootstrap, and responsive design!

Tests
Waiting:Your form submission button and text input should be nested in a div with class row.
Waiting:Your form text input should be nested in a div with the class col-xs-7.
Waiting:Your form submission button should be nested in a div with the class col-xs-5.
Waiting:All of your div elements should have closing tags.

#### Create a Bootstrap Headline

Now let's build something from scratch to practice our HTML, CSS and Bootstrap skills.

We'll build a jQuery playground, which we'll soon put to use in our jQuery challenges.

To start with, create an h3 element, with the text jQuery Playground.

Color your `h3` element with the `text-primary` Bootstrap class, and center it with the `text-center` Bootstrap class.

Tests
Waiting:You should add an h3 element to your page.
Waiting:Your h3 element should have a closing tag.
Waiting:Your h3 element should be colored by applying the class text-primary
Waiting:Your h3 element should be centered by applying the class text-center
Waiting:Your h3 element should have the text jQuery Playground.

#### House our page within a Bootstrap container-fluid div

Now let's make sure all the content on your page is mobile-responsive.

Let's nest your `h3` element within a `div` element with the class `container-fluid`.

Tests
Waiting:Your div element should have the class container-fluid.
Waiting:Each of your div elements should have closing tags.
Waiting:Your h3 element should be nested inside a div element.

#### Create a Bootstrap Row

Now we'll create a Bootstrap `row` for our inline elements.

Create a `div` element below the `h3` tag, with a class of `row`.

Tests
Waiting:You should add a div element below your h3 element.
Waiting:Your div element should have the class row
Waiting:Your row div should be nested inside the container-fluid div
Waiting:Your div element should have a closing tag.

#### Split Your Bootstrap Row

Now that we have a Bootstrap Row, let's split it into two columns to house our elements.

Create two div elements within your row, both with the class `col-xs-6`.

Tests
Waiting:Two div class="col-xs-6" elements should be nested within your div class="row" element.
Waiting:All your div elements should have closing tags.

#### Create Bootstrap Wells

Bootstrap has a class called `well` that can create a visual sense of depth for your columns.

Nest one `div` element with the class well within each of your `col-xs-6 div` elements.

Tests
Waiting:You should add a div element with the class well inside each of your div elements with the class col-xs-6
Waiting:Both of your div elements with the class col-xs-6 should be nested within your div element with the class row.
Waiting:All your div elements should have closing tags.

#### Add Elements within Your Bootstrap Wells

Now we're several `div` elements deep on each column of our `row`. This is as deep as we'll need to go. Now we can add our `button` elements.

Nest three `button` elements within each of your `div` elements having the class name `well`.

Tests
Waiting:Three button elements should be nested within each of your div elements with class well.
Waiting:You should have a total of 6 button elements.
Waiting:All of your button elements should have closing tags.

#### Apply the Default Bootstrap Button Style

Bootstrap has another button class called `btn-default`.

Apply both the `btn` and `btn-default` classes to each of your button elements.

Tests
Waiting:You should apply the `btn` class to each of your button elements.
Waiting:You should apply the `btn-default` class to each of your button elements.

#### Create a Class to Target with jQuery Selectors

Not every class needs to have corresponding CSS. Sometimes we create classes just for the purpose of selecting these elements more easily using jQuery.

Give each of your `button` elements the class `target`.

Tests
Waiting:You should apply the `target` class to each of your `button` elements.

#### Add id Attributes to Bootstrap Elements

Recall that in addition to `class` attributes, you can give each of your elements an `id` attribute.

Each `id` must be unique to a specific element and used only once per page.

Let's give a unique `id` to each of our div elements of class well.

Remember that you can give an element an `id` like this:

```html
<div class="well" id="center-well"></div>
```

Give the well on the left the id of left-well. Give the well on the right the id of right-well.

Tests
Waiting:Your left well should have the id of left-well.
Waiting:Your right well should have the id of right-well.

#### Label Bootstrap Wells

For the sake of clarity, let's label both of our wells with their ids.

Above your left-well, inside its` col-xs-6` div element, add a `h4` element with the text `#left-well`.

Above your right-well, inside its `col-xs-6` div element, add a `h4` element with the text` #right-well`.

Tests
Waiting:You should add an h4 element to each of your <div class="col-xs-6"> elements.
Waiting:One h4 element should have the text #left-well.
Waiting:One h4 element should have the text #right-well.
Waiting:All of your h4 elements should have closing tags.

#### Give Each Element a Unique id

We will also want to be able to use jQuery to target each button by its unique id.

Give each of your buttons a unique id, starting with target1 and ending with target6.

Make sure that target1 to target3 are in #left-well, and target4 to target6 are in #right-well.

Tests
Waiting:One button element should have the id target1.
Waiting:One button element should have the id target2.
Waiting:One button element should have the id target3.
Waiting:One button element should have the id target4.
Waiting:One button element should have the id target5.
Waiting:One button element should have the id target6.

#### Label Bootstrap Buttons

Just like we labeled our wells, we want to label our buttons.

Give each of your `button` elements text that corresponds to its `id` selector.

Tests
Waiting:Your button element with the id target1 should have the text #target1.
Waiting:Your button element with the id target2 should have the text #target2.
Waiting:Your button element with the id target3 should have the text #target3.
Waiting:Your button element with the id target4 should have the text #target4.
Waiting:Your button element with the id target5 should have the text #target5.
Waiting:Your button element with the id target6 should have the text #target6.

#### Use Comments to Clarify Code

When we start using jQuery, we will modify HTML elements without needing to actually change them in HTML.

Let's make sure that everyone knows they shouldn't actually modify any of this code directly.

Remember that you can start a comment with <!-- and end a comment with -->

Add a comment at the top of your HTML that says Code below this line should not be changed

Tests
Waiting:You should start a comment with <!-- at the top of your HTML.
Waiting:Your comment should have the text Code below this line should not be changed.
Waiting:You should close your comment with -->.
Waiting:You should have the same number of comment openers and closers.

### jQuery

jQuery is one of the most widely used JavaScript libraries in the world.

In 2006 when it was released, all major browsers handled JavaScript slightly differently. jQuery simplified the process of writing client-side JavaScript, and also ensured that your code worked the same way in all browsers.

In this course, you'll learn how to use jQuery to select, remove, clone, and modify different elements on the page.

#### Learn How Script Tags and Document Ready Work

Now we're ready to learn jQuery, the most popular JavaScript tool of all time.

Before we can start using jQuery, we need to add some things to our HTML.

First, add a `script` element at the top of your page. Be sure to close it on the following line.

Your browser will run any JavaScript inside a `script` element, including jQuery.

Inside your `script` element, add this code: `$(document).ready(function() {` to your `script`. Then close it on the following line (still inside your `script` element) with: `});`;

We'll learn more about `functions` later. The important thing to know is that code you put inside this `function` will run as soon as your browser has loaded your page.

This is important because without your `document ready function`, your code may run before your HTML is rendered, which would cause bugs.

Tests
Waiting:You should create a script element making sure it is valid and has a closing tag.
Waiting:You should add $(document).ready(function() { to the beginning of your script element.
Waiting:You should close your $(document).ready(function() { function with });

#### Target HTML Elements with Selectors Using jQuery

Now we have a `document ready` function.

Now let's write our first jQuery statement. All jQuery functions start with a `$`, usually referred to as a dollar sign operator, or as bling.

jQuery often selects an HTML element with a _selector_, then does something to that element.

For example, let's make all of your `button` elements bounce. Just add this code inside your document ready function:

```javascript
$('button').addClass('animated bounce')
```

Note that we've already included both the `jQuery library` and the `Animate.css` library in the background so that you can use them in the editor. So you are using jQuery to apply the `Animate.css` `bounce` class to your `button` elements.

Tests
Waiting:You should use the jQuery addClass() function to give the classes animated and bounce to your button elements.
Waiting:You should only use jQuery to add these classes to the element.
Waiting:Your jQuery code should be within the $(document).ready(); function.

###### Installing animate.css

Install with npm:

```sh
$ npm install animate.css --save
```

Or install with Yarn (this will only work with appropriate tooling like Webpack, Parcel, etc. If you are not using any tool for packing or bundling your code, you can simply use the CDN method below):

```sh
$ yarn add animate.css
```

Import it into your file:

```js
import 'animate.css'
```

Or add it directly to your webpage using a CDN:

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
```

#### Target Elements by Class Using jQuery

You see how we made all of your button elements bounce? We selected them with `$("button")`, then we added some CSS classes to them with `.addClass("animated bounce");`.

You just used jQuery's `.addClass()` function, which allows you to add classes to elements.

First, let's target your `div` elements with the class well by using the `$(".well")` selector.

Note that, just like with CSS declarations, you type a `.` before the class's name.

Then use jQuery's `.addClass()` function to add the classes animated and shake.

For example, you could make all the elements with the class text-primary shake by adding the following to your document ready function:

```js
$('.text-primary').addClass('animated shake')
```

Tests
Waiting:You should use the jQuery addClass() function to give the classes animated and shake to all your elements with the class well.
Waiting:You should only use jQuery to add these classes to the element.

#### Target Elements by id Using jQuery

You can also target elements by their `id` attributes.

First target your button element with the `id` `target3` by using the `$("#target3")` selector.

Note that, just like with CSS declarations, you type a # before the `id`'s name.

Then use jQuery's `.addClass()` function to add the classes `animated` and `fadeOut`.

Here's how you'd make the button element with the id target6 fade out:

```js
$('#target6').addClass('animated fadeOut')
```

Tests
Waiting:You should select the button element with the id of target3 and use the jQuery addClass() function to give it the class of animated.
Waiting:You should target the element with the id target3 and use the jQuery addClass() function to give it the class fadeOut.
Waiting:You should only use jQuery to add these classes to the element.

#### Delete Your jQuery Functions

These animations were cool at first, but now they're getting kind of distracting.

Delete all three of these jQuery functions from your document ready function, but leave your document ready function itself intact.

Tests
Waiting:All three of your jQuery functions should be deleted from your document ready function.
Waiting:You should leave your script element intact.
Waiting:You should leave your $(document).ready(function() { at the beginning of your script element.
Waiting:You should leave the document.ready function's closing }) intact.
Waiting:You should leave your script element closing tag intact.

#### Target the Same Element with Multiple jQuery Selectors

Now you know three ways of targeting elements: by type: `$("button")`, by class:` $(".btn")`, and by id `$("#target1")`.

Although it is possible to add multiple classes in a single `.addClass()` call, let's add them to the same element in three separate ways.

Using `.addClass()`, add only one class at a time to the same element, three different ways:

Add the `animated` class to all elements with type `button`.

Add the `shake` class to all the buttons with class `.btn`.

Add the `btn-primary `class to the button with id `#target1`.

Note: You should only be targeting one element and adding only one class at a time. Altogether, your three individual selectors will end up adding the three classes `shake`, `animated`, and `btn-primary` to `#target1`.

Tests
Waiting:Your code should use the $("button") selector.
Waiting:Your code should use the $(".btn") selector.
Waiting:Your code should use the $("#target1") selector.
Waiting:You should only add one class with each of your three selectors.
Waiting:Your #target1 element should have the classes animated‚ shake and btn-primary.
Waiting:You should only use jQuery to add these classes to the element.

#### Remove Classes from an Element with jQuery

In the same way you can add classes to an element with jQuery's addClass() function, you can remove them with jQuery's` removeClass()` function.

Here's how you would do this for a specific button:

```js
$('#target2').removeClass('btn-default')
```

Let's remove the `btn-default` class from all of our `button` elements.

Tests
Waiting:The btn-default class should be removed from all of your button elements.
Waiting:You should only use jQuery to remove this class from the element.
Waiting:You should only remove the btn-default class.

#### Change the CSS of an Element Using jQuery

We can also change the CSS of an HTML element directly with jQuery.

jQuery has a function called `.css()` that allows you to change the CSS of an element.

Here's how we would change its color to blue:

```js
$('#target1').css('color', 'blue')
```

This is slightly different from a normal CSS declaration, because the CSS property and its value are in quotes, and separated with a comma instead of a colon.

Delete your jQuery selectors, leaving an empty document ready function.

Select `target1` and change its `color` to `red`.

Tests
Waiting:Your target1 element should have red text.
Waiting:You should only use jQuery to add these classes to the element.

#### Disable an Element Using jQuery

You can also change the non-CSS properties of HTML elements with jQuery. For example, you can disable buttons.

When you disable a button, it will become grayed-out and can no longer be clicked.

jQuery has a function called `.prop()` that allows you to adjust the properties of elements.

Here's how you would disable all buttons:

```js
$('button').prop('disabled', true)
```

Disable only the target1 button.

Tests
Waiting:Your target1 button should be disabled.
Waiting:No other buttons should be disabled.
Waiting:You should only use jQuery to add these classes to the element.

#### Change Text Inside an Element Using jQuery

Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

Here's how you would rewrite and emphasize the text of our heading:

```js
$('h3').html('<em>jQuery Playground</em>')
```

jQuery also has a similar function called `.text()` that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.

Change the `button` with `id` `target4` by emphasizing its text.

View our news article for `<em>` to learn the difference between `<i>` and `<em>` and their uses.

Note that while the `<i>` tag has traditionally been used to emphasize text, it has since been adopted for use as a tag for icons. The `<em>` tag is now widely accepted as the tag for emphasis. Either will work for this challenge.

Tests
Waiting:You should emphasize the text in your target4 button by adding HTML tags.
Waiting:The text should otherwise remain unchanged.
Waiting:You should not alter any other text.
Waiting:You should be using .html() and not .text().
Waiting:You should select button id="target4" with jQuery.

#### Remove an Element Using jQuery

Now let's remove an HTML element from your page using jQuery.

jQuery has a function called `.remove()` that will remove an HTML element entirely

Remove the `#target4` element from the page by using the `.remove()` function.

Tests
Waiting:You should use jQuery to remove your target4 element from your page.
Waiting:You should only use jQuery to remove this element.

#### Use appendTo to Move Elements with jQuery

Now let's try moving elements from one div to another.

jQuery has a function called `appendTo()` that allows you to select HTML elements and append them to another element.

For example, if we wanted to move `target4` from our right well to our left well, we would use:

```js
$('#target4').appendTo('#left-well')
```

Move your `target2` element from your `left-well` to your `right-well`.

Tests
Waiting:Your target2 element should not be inside your left-well.
Waiting:Your target2 element should be inside your right-well.
Waiting:You should only use jQuery to move these elements.

#### Clone an Element Using jQuery

In addition to moving elements, you can also copy them from one place to another.

jQuery has a function called clone() that makes a copy of an element.

For example, if we wanted to copy `target2` from our `left-well` to our `right-well`, we would use:

```js
$('#target2').clone().appendTo('#right-well')
```

Did you notice this involves sticking two jQuery functions together? This is called function _chaining_ and it's a convenient way to get things done with jQuery.

Clone your `target5` element and `append` it to your `left-well`.

Tests
Waiting:Your target5 element should be inside your right-well.
Waiting:A copy of your target5 element should also be inside your left-well.
Waiting:You should only use jQuery to move these elements.

#### Target the Parent of an Element Using jQuery

Every HTML element has a parent element from which it inherits properties.

For example, your jQuery Playground `h3` element has the parent element of <div class="container-fluid">, which itself has the parent body.

jQuery has a function called `parent()` that allows you to access the parent of whichever element you've selected.

Here's an example of how you would use the `parent()` function if you wanted to give the parent element of the `left-well` element a `background color` of `blue`:

```js
$('#left-well').parent().css('background-color', 'blue')
```

Give the parent of the `#target1` element a `background-color` of `red`.

Tests
Waiting:Your left-well element should have a red background.
Waiting:You should use the .parent() function to modify this element.
Waiting:The .parent() method should be called on the #target1 element.
Waiting:You should only use jQuery to add these classes to the element.

#### Target the Children of an Element Using jQuery

When HTML elements are placed one level below another they are called children of that _element_. For example, the button elements in this challenge with the text `#target1`, `#target2`, and `#target3` are all children of the <div class="well" id="left-well"> element.

jQuery has a function called `children()` that allows you to access the children of whichever element you've selected.

Here's an example of how you would use the `children()` function to give the children of your `left-well` element the `color` `blue`:

```js
$('#left-well').children().css('color', 'blue')
```

Give all the `children` of your `right-well` element the `color` `orange`.

Tests
Waiting:All children of #right-well should have orange text.
Waiting:You should use the children() function to modify these elements.
Waiting:You should only use jQuery to add these classes to the element.

#### Target a Specific Child of an Element Using jQuery

You've seen why `id` attributes are so convenient for targeting with jQuery selectors. But you won't always have such neat ids to work with.

Fortunately, jQuery has some other tricks for targeting the right elements.

jQuery uses CSS Selectors to target elements. The `target:nth-child(n)` CSS selector allows you to select all the nth elements with the target class or element type.

Here's how you would give the third element in each well the bounce class:

```js
$('.target:nth-child(3)').addClass('animated bounce')
```

Make the `second child` in each of your `well` elements `bounce`. You must select the elements' children with the target class.

Tests
Waiting:The second element in your target elements should bounce.
Waiting:Only two elements should bounce.
Waiting:You should use the :nth-child() selector to modify these elements.
Waiting:You should only use jQuery to add these classes to the element.

#### Target Even Elements Using jQuery

You can also target elements based on their positions using `:odd` or `:even` selectors.

Note that jQuery is zero-indexed which means the first element in a selection has a position of 0. This can be a little confusing as, counter-intuitively, `:odd` selects the second element (position 1), fourth element (position 3), and so on.

Here's how you would target all the odd elements with class `target` and give them classes:

```js
$('.target:odd').addClass('animated shake')
```

Try selecting all the even `target` elements and giving them the classes of `animated` and `shake`. Remember that even refers to the position of elements with a zero-based system in mind.

Tests
Waiting:All of the target elements that jQuery considers to be even should shake.
Waiting:You should use the :even selector to modify these elements.
Waiting:You should only use jQuery to add these classes to the element.

#### Use jQuery to Modify the Entire Page

We're done playing with our jQuery playground. Let's tear it down!

jQuery can target the `body` element as well.

Here's how we would make the entire body fade out:

```js
$('body').addClass('animated fadeOut')
```

But let's do something more dramatic. Add the classes `animated` and `hinge` to your body element.

Tests
Waiting:You should add the classes animated and hinge to your body element.

### SASS

Sass, or "Syntactically Awesome StyleSheets", is a language extension of CSS. It adds features that aren't available in basic CSS, which make it easier for you to simplify and maintain the style sheets for your projects.

In this Sass course, you'll learn how to store data in variables, nest CSS, create reusable styles with mixins, add logic and loops to your styles, and more.

#### Store Data with Sass Variables

One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.

Here are a couple examples:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

And to use the variables:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

Create a variable `$text-color` and set it to red. Then change the value of the color property for the `.blog-post` and `h2` to the `$text-color` variable.

Tests
Waiting:Your code should have a Sass variable declared for $text-color with a value of red.
Waiting:Your code should use the $text-color variable to change the color for the .blog-post and h2 items.
Waiting:Your .blog-post element should have a color of red.
Waiting:Your h2 elements should have a color of red.

#### Nest CSS with Sass

Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:

```scss
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```

For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:

```scss
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

Use the nesting technique shown above to re-organize the CSS rules for both children of `.blog-post` element. For testing purposes, the `h1` should come before the `p` element.

Tests
Waiting:Your code should re-organize the CSS rules so the h1 and p are nested in the .blog-post parent element.

#### Create Reusable CSS with Mixins

In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.

Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider box-shadow:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

It's a lot of typing to re-write this rule for all the elements that have a `box-shadow`, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:

```scss
@mixin box-shadow($x, $y, $blur, $c) {
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

The definition starts with `@mixin `followed by a custom name. The parameters (the `$x`, `$y`, `$blur`, and `$c` in the example above)are optional. Now any time a box-shadow rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the `@include` directive:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

Write a mixin for `border-radius` and give it a` $radius` parameter. It should use all the vendor prefixes from the example. Then use the `border-radius` mixin to give the `#awesome` element a border radius of `15px`.

Tests
Waiting:Your code should declare a mixin named border-radius which has a parameter named $radius.
Waiting:Your code should include the -webkit-border-radius vendor prefix that uses the $radius parameter.
Waiting:Your code should include the -moz-border-radius vendor prefix that uses the $radius parameter.
Waiting:Your code should include the -ms-border-radius vendor prefix that uses the $radius parameter.
Waiting:Your code should include the general border-radius rule that uses the $radius parameter.
Waiting:Your code should call the border-radius mixin using the @include keyword, setting it to 15px.

#### Use @if and @else to Add Logic To Your Styles

The `@if` directive in Sass is useful to test for a specific case - it works just like the `if` statement in JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

And just like in JavaScript, `@else if` and `@else` test for more conditions:

```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  } @else if $val == alert {
    color: yellow;
  } @else if $val == success {
    color: green;
  } @else {
    color: black;
  }
}
```

Create a mixin called `border-stroke` that takes a parameter $val. The mixin should check for the following conditions using `@if`, `@else if`, and `@else`:

light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
If `$val` is not `light`, `medium`, or `heavy`, the border should be set to `none`.

Tests
Waiting:Your code should declare a mixin named border-stroke which has a parameter named $val.
Waiting:Your mixin should have an @if statement to check if $val is light, and to set the border to 1px solid black.
Waiting:Your mixin should have an @else if statement to check if $val is medium, and to set the border to 3px solid black.
Waiting:Your mixin should have an @else if statement to check if $val is heavy, and to set the border to 6px solid black.
Waiting:Your mixin should have an @else statement to set the border to none.

#### Use @for to Create a Sass Loop

The` @for` directive adds styles in a loop, very similar to a for loop in JavaScript.

`@for` is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.

Here's a start through end example:

```scss
@for $i from 1 through 12 {
  .col-#{$i} {
    width: 100%/12 * $i;
  }
}
```

The `#{$i}` part is the syntax to combine a variable (i) with text to make a string. When the Sass file is converted to CSS, it looks like this:

```css
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

... .col-12 {
  width: 100%;
}
```

This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.

Write a `@for` directive that takes a variable `$j` that goes from 1 to 6.

It should create 5 classes called `.text-1` to `.text-5` where each has a `font-size` set to `15px` multiplied by the `index`.

Tests
Waiting:Your code should use the @for directive.
Waiting:Your .text-1 class should have a font-size of 15px.
Waiting:Your .text-2 class should have a font-size of 30px.
Waiting:Your .text-3 class should have a font-size of 45px.
Waiting:Your .text-4 class should have a font-size of 60px.
Waiting:Your .text-5 class should have a font-size of 75px.

#### Use @each to Map Over Items in a List

The last challenge showed how the `@for` directive uses a starting and ending value to loop a certain number of times. Sass also offers the `@each` directive which loops over each item in a `list` or `map`. On each iteration, the variable gets assigned to the current value from the `list` or `map`.

```scss
@each $color in blue, red, green {
  .#{$color}-text {
    color: $color;
  }
}
```

A map has slightly different syntax. Here's an example:

```scss
$colors: (
  color1: blue,
  color2: red,
  color3: green,
);

@each $key, $color in $colors {
  .#{$color}-text {
    color: $color;
  }
}
```

Note that the `$key` variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have color1, color2... in it. Both of the above code examples are converted into the following CSS:

```css
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

Write an `@each` directive that goes through a list: blue, black, red and assigns each variable to a `.color-bg` class, where the color part changes for each item. Each class should set the `background-color` the respective color.

Tests
Waiting:Your code should use the @each directive.
Waiting:Your .blue-bg class should have a background-color of blue.
Waiting:Your .black-bg class should have a background-color of black.
Waiting:Your .red-bg class should have a background-color of red.

#### Apply a Style Until a Condition is Met with @while

The `@while` directive is an option with similar functionality to the JavaScript while loop. It creates CSS rules until a condition is met.

The `@for` challenge gave an example to create a simple grid system. This can also work with `@while`.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} {
    width: 100%/12 * $x;
  }
  $x: $x + 1;
}
```

First, define a variable `$x` and set it to `1`. Next, use the `@while` directive to create the grid system while `$x` is less than `13`. After setting the CSS rule for width, `$x` is incremented by `1` to avoid an infinite loop.

Use `@while` to create a series of classes with different font-sizes.

There should be `5` different classes from `text-1` to` text-5`. Then set font-size to `15px` multiplied by the current index number. Make sure to avoid an infinite loop!

Tests
Waiting:Your code should use the @while directive.
Waiting:Your code should use an index variable which starts at an index of 1.
Waiting:Your code should increment the counter variable.
Waiting:Your .text-1 class should have a font-size of 15px.
Waiting:Your .text-2 class should have a font-size of 30px.
Waiting:Your .text-3 class should have a font-size of 45px.
Waiting:Your .text-4 class should have a font-size of 60px.
Waiting:Your .text-5 class should have a font-size of 75px.

#### Split Your Styles into Smaller Chunks with Partials

Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.

Names for partials start with the underscore (`_`) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the `.scss` file extension. To bring the code in the partial into another Sass file, use the` @import` directive.

For example, if all your mixins are saved in a partial named "\_mixins.scss", and they are needed in the "main.scss" file, this is how to use them in the main file:

```scss
@import 'mixins';
```

Note that the underscore and file extension are not needed in the import statement - Sass understands it is a partial. Once a partial is imported into a file, all variables, mixins, and other code are available to use.

Write an `@import` statement to import a partial named `_variables.scss` into the `main.scss` file.

Tests
Waiting:Your code should use the @import directive, and should not include the underscore in the file name.

#### Extend One Set of CSS Styles to Another Element

Sass has a feature called `extend` that makes it easy to borrow the CSS rules from one element and build upon them in another.

For example, the below block of CSS rules style a `.panel` class. It has a `background-color`, `height` and `border`.

```scss
.panel {
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Now you want another panel called `.big-panel`. It has the same base properties as `.panel`, but also needs a `width` and `font-size`. It's possible to copy and paste the initial CSS rules from `.panel`, but the code becomes repetitive as you add more types of panels. The `extend` directive is a simple way to reuse the rules written for one element, then add more for another:

```scss
.big-panel {
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

The `.big-panel` will have the same properties as `.panel` in addition to the new styles.

Make a class `.info-important` that extends `.info` and also has a `background-color` set to `magenta`.

Tests
Waiting:Your info-important class should have a background-color set to magenta.
Waiting:Your info-important class should use @extend to inherit the styling from the info class.

### React

React is a popular JavaScript library for building reusable, component-driven user interfaces for web pages or applications.

React combines HTML with JavaScript functionality into its own markup language called JSX. React also makes it easy to manage the flow of data throughout the application.

In this course, you'll learn how to create different React components, manage data in the form of state props, use different lifecycle methods like componentDidMount, and much more.

#### 1. Create a Simple JSX Element

React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. For the most part, JSX is similar to the HTML that you have already learned, however there are a few key differences that will be covered throughout these challenges.

For instance, because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }. Keep this in mind, since it's used in several future challenges.

However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The _transpiler_ Babel is a popular tool for this process. For your convenience, it's already added behind the scenes for these challenges. If you happen to write syntactically invalid JSX, you will see the first test in these challenges fail.

It's worth noting that under the hood the challenges are calling

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

. This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.

The current code uses JSX to assign a `div` element to the constant `JSX`. Replace the `div` with an `h1` element and add the text` Hello JSX!` inside it.

Tests
Waiting:The constant JSX should return an h1 element.
Waiting:The h1 tag should include the text Hello JSX!

#### 2. Create a Complex JSX Element

The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.

One important thing to know about nested JSX is that it must return a single element.

This one parent element would wrap all of the other levels of nested elements.

For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

Here's an example:

Valid JSX:

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

Invalid JSX:

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

Define a new constant JSX that renders a `div` which contains the following elements in order:

An `h1`, `a` `p`, and an unordered list that contains three `li` items. You can include any text you want within each element.

Note: When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a div tag to wrap all the child elements within a single parent element. If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.

Tests
Waiting:The constant JSX should return a div element.
Waiting:The div should contain an h1 tag as the first element.
Waiting:The div should contain a p tag as the second element.
Waiting:The div should contain a ul tag as the third element.
Waiting:The ul should contain three li elements.

#### 3. Add Comments in JSX

JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.

To put comments inside JSX, you use the syntax {/\* \*/} to wrap around the comment text.

The code editor has a JSX element similar to what you created in the last challenge. Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.

Tests
Waiting:The constant JSX should return a div element.
Waiting:The div should contain an h1 tag as the first element.
Waiting:The div should contain a p tag as the second element.
Waiting:The existing h1 and p elements should not be modified.
Waiting:The JSX should use valid comment syntax.

#### 4. Render HTML Elements to the DOM

So far, you've learned that JSX is a convenient tool to write readable HTML within JavaScript. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.

ReactDOM offers a simple method to render React elements to the DOM which looks like this: `ReactDOM.render(componentToRender, targetNode)`, where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

As you would expect, `ReactDOM.render()` must be called after the JSX element declarations, just like how you must declare variables before using them.

The code editor has a simple JSX component. Use the `ReactDOM.render()` method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use `document.getElementById()` to select the DOM node to render them to. There is a `div` with `id='challenge-node'` available for you to use. Make sure you don't change the JSX constant.

Tests
Waiting:The constant JSX should return a div element.
Waiting:The div should contain an h1 tag as the first element.
Waiting:The div should contain a p tag as the second element.
Waiting:The provided JSX element should render to the DOM node with id challenge-node.

#### 5. Define an HTML Class in JSX

Now that you're getting comfortable writing JSX, you may be wondering how it differs from HTML.

So far, it may seem that HTML and JSX are exactly the same.

One key difference in JSX is that you can no longer use the word `class` to define HTML classes. This is because `class` is a reserved word in JavaScript. Instead, JSX uses `className`.

In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is `onClick`, instead of `onclick`. Likewise, `onchange` becomes `onChange`. While this is a subtle difference, it is an important one to keep in mind moving forward.

Apply a `class` of `myDiv` to the `div` provided in the JSX code.

Tests
Waiting:The constant JSX should return a div element.
Waiting:The div should have a class of myDiv.

#### 6. Learn About Self-Closing JSX Tags

So far, you’ve seen how JSX differs from HTML in a key way with the use of className vs. class for defining HTML classes.

Another important way in which JSX differs from HTML is in the idea of the self-closing tag.

In HTML, almost all tags have both an opening and closing tag: `<div></div>`; the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.

For example the line-break tag can be written as `<br>` or as `<br />`, but should never be written as `<br></br>`, since it doesn't contain any content.

In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as `<br />` in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as `<div />` or `<div></div>`. The difference is that in the first syntax version there is no way to include anything in the `<div />`. You will see in later challenges that this syntax is useful when rendering **_React components_**.

Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.

Tests
Waiting:The constant JSX should return a div element.
Waiting:The div should contain a br tag.
Waiting:The div should contain an hr tag.

#### 7. Create a Stateless Functional Component

Components are the core of React. Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)

To create a component with a function, you simply write a JavaScript function that returns either JSX or `null`. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of a stateless functional component that assigns an HTML class in JSX:

```jsx
const DemoComponent = function () {
  return <div className='customClass' />
}
```

After being transpiled, the `<div>` will have a CSS class of `customClass`.

Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

The code editor has a function called `MyComponent`. Complete this function so it returns a single `div` element which contains some string of text.

Note: The text is considered a `child` of the `div` element, so you will not be able to use a self-closing tag.

Tests
Waiting:MyComponent should return JSX.
Waiting:MyComponent should return a div element.
Waiting:The div element should contain a string of text.

#### 8. Create a React Component

The other way to define a React component is with the ES6 `class` syntax. In the following example, Kitten extends React.Component:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <h1>Hi</h1>
  }
}
```

This creates an ES6 `class` `Kitten` which extends the `React.Component` class. So the `Kitten` class now has access to many useful React features, such as _local state_ and _lifecycle hooks_. Don't worry if you aren't familiar with these terms yet, they will be covered in greater detail in later challenges. Also notice the Kitten class has a constructor defined within it that calls `super()`. It uses `super()` to call the constructor of the parent class, in this case` React.Component`. The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's `constructor` with `super`, and pass `props` to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the `constructor` as well as `props`.

MyComponent is defined in the code editor using `class` syntax. Finish writing the render method so it returns a `div` element that contains an `h1` with the text `Hello React!`.

Tests
Waiting:The React component should return a div element.
Waiting:The returned div should render an h1 heading element within it.
Waiting:The h1 heading element should contain the string Hello React!.

#### 9. Create a Component with Composition

Now we will look at how we can compose multiple React components together. Imagine you are building an app and have created three components: a `Navbar`, `Dashboard`, and `Footer`.

To compose these components together, you could create an App parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the render method you could write:

```jsx
return (
  <App>
    <Navbar />
    <Dashboard />
    <Footer />
  </App>
)
```

When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the `App` `component` and the `Navbar`, `Dashboard`, and `Footer`.

In the code editor, there is a simple functional component called `ChildComponent` and a class component called `ParentComponent`. Compose the two together by rendering the `ChildComponent` within the `ParentComponent`. Make sure to close the `ChildComponent` tag with a forward slash.

Note: `ChildComponent` is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.

Tests
Waiting:The React component should return a single div element.
Waiting:The component should return two nested elements.
Waiting:The component should return the ChildComponent as its second child.

#### 10. Use React to Render Nested Components

The last challenge showed a simple way to compose two components, but there are many different ways you can compose components with React.

Component composition is one of React's powerful features. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.

There are two functional components defined in the code editor, called `TypesOfFruit` and `Fruits`. Take the `TypesOfFruit` component and compose it, or nest it, within the `Fruits` component. Then take the `Fruits` component and nest it within the `TypesOfFood` component. The result should be a child component, nested within a parent component, which is nested within a parent component of its own!

Tests
Waiting:The TypesOfFood component should return a single div element.
Waiting:The TypesOfFood component should return the Fruits component.
Waiting:The Fruits component should return the TypesOfFruit component.
Waiting:The TypesOfFruit component should return the h2 and ul elements.

#### 11. Compose React Components

As the challenges continue to use more complex compositions with React components and JSX, there is one important point to note. Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last few challenges. You can render JSX elements, stateless functional components, and ES6 class components within other components.

In the code editor, the `TypesOfFood` component is already rendering a component called `Vegetables`. Also, there is the `Fruits` component from the last challenge.

Nest two components inside of `Fruits` — first `NonCitrus`, and then `Citrus`. Both of these components are provided for you behind the scenes. Next, nest the `Fruits` class component into the `TypesOfFood` component, below the `h1` heading element and above `Vegetables`. The result should be a series of nested components, which uses two different component types.

Tests
Waiting:The `TypesOfFood` component should return a single div element.
Waiting:The `TypesOfFood` component should return the `Fruits` component.
Waiting:The `Fruits` component should return the `NonCitrus` component and the `Citrus` component.
Waiting:The `TypesOfFood` component should return the Vegetables component below the `Fruits` component.

#### 12. Render a Class Component to the DOM

You may remember using the ReactDOM API in an earlier challenge to render JSX elements to the DOM. The process for rendering React components will look very similar. The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the React code you write will render to the DOM without making a call to the ReactDOM API.

Here's a refresher on the syntax: `ReactDOM.render(componentToRender, targetNode)`. The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.

React components are passed into ReactDOM.render() a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example `ReactDOM.render(<ComponentToRender />, targetNode)`. You use this syntax for both ES6 class components and functional components.

Both the `Fruits` and `Vegetables` components are defined for you behind the scenes. Render both components as children of the `TypesOfFood` component, then render `TypesOfFood` to the DOM. There is a `div` with `id='challenge-node'` available for you to use.

Tests
Waiting:The TypesOfFood component should return a single div element.
Waiting:The TypesOfFood component should render the Fruits component after the h1 element.
Waiting:The TypesOfFood component should render the Vegetables component after Fruits.
Waiting:The TypesOfFood component should render to the DOM within the div with the id challenge-node.

#### 13. Write a React Component from Scratch

Now that you've learned the basics of JSX and React components, it's time to write a component on your own. React components are the core building blocks of React applications so it's important to become very familiar with writing them. Remember, a typical React component is an ES6 class which extends `React.Component`. It has a render method that returns HTML (from JSX) or `null`. This is the basic form of a React component. Once you understand this well, you will be prepared to start building more complex React projects.

Define a class `MyComponent` that extends `React.Component`. Its render method should return a `div` that contains an `h1` tag with the text: `My First React Component!` in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.

Render this component to the DOM using `ReactDOM.render()`. There is a `div` with `id='challenge-node'` available for you to use.

Tests
Waiting:There should be a React component called MyComponent.
Waiting:MyComponent should contain an h1 tag with text My First React Component! Case and punctuation matter.
Waiting:MyComponent should render to the DOM.
Waiting:MyComponent should have a constructor calling super with props.

#### 14. Pass Props to a Stateless Functional Component

The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: `props`. In React, you can pass `props`, or properties, to child components. Say you have an `App` component which renders a `child` component called `Welcome` which is a stateless functional component. You can pass `Welcome` a user property by writing:

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

You use **_custom HTML attributes_** created by you and supported by React to be passed to the component. In this case, the created property user is passed to the component `Welcome`. Since `Welcome` is a stateless functional component, it has access to this value like so:

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.

There are `Calendar` and `CurrentDate` components in the code editor. When rendering `CurrentDate` from the `Calendar` component, pass in a property of `date` assigned to the current `date` from JavaScript's `Date` object. Then access this `prop` in the `CurrentDate` component, showing its value within the `p` tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance `date={Date()}`.

Tests
Waiting:The Calendar component should return a single div element.
Waiting:The second child of the Calendar component should be the CurrentDate component.
Waiting:The CurrentDate component should have a prop called date.
Waiting:The date prop of the CurrentDate should contain a string of text.
Waiting:The date prop should be generated by calling Date()
Waiting:The CurrentDate component should render the value from the date prop in the p tag.

#### 15. Pass an Array as Props

The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

```jsx
<ParentComponent>
  <ChildComponent colors={['green', 'blue', 'red']} />
</ParentComponent>
```

The child component then has access to the array property colors. Array methods such as `join()` can be used when accessing the property. const `ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` This will join all colors array items into a comma separated string and produce: `<p>green, blue, red</p>` Later, we will learn about other common methods to render arrays of data in React.

There are `List` and `ToDo` components in the code editor. When rendering each `List` from the `ToDo` component, pass in a tasks property assigned to an array of to-do tasks, for example `["walk dog", "workout"]`. Then access this tasks array in the `List` component, showing its value within the `p` element. Use `join(", ")` to display the `props.tasksarray` in the `p` element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

Tests
Waiting:The ToDo component should return a single outer div.
Waiting:The third child of the ToDo component should be an instance of the List component.
Waiting:The fifth child of the ToDo component should be an instance of the List component.
Waiting:Both instances of the List component should have a property called tasks and tasks should be of type array.
Waiting:The first List component representing the tasks for today should have 2 or more items.
Waiting:The second List component representing the tasks for tomorrow should have 3 or more items.
Waiting:The List component should render the value from the tasks prop in the p tag.

#### 16. Use Default Props

React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare

```jsx
MyComponent.defaultProps = { location: 'San Francisco' }
```

, you have defined a location prop that's set to the string `San Francisco`, unless you specify otherwise. React assigns default props if props are undefined, but if you pass `null` as the value for a prop, it will remain `null`.

The code editor shows a `ShoppingCart` component. Define default props on this component which specify a prop `items` with a value of `0`.

Tests
Waiting:The ShoppingCart component should render.
Waiting:The ShoppingCart component should have a default prop of { items: 0 }.

#### 17. Override Default Props

The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.

The `ShoppingCart` component now renders a child component `Items`. This `Items` component has a default prop `quantity` set to the integer `0`. Override the default prop by passing in a value of `10` for `quantity`.

Note: Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for `quantity` is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, `{100}`. This syntax tells JSX to interpret the value within the braces directly as JavaScript.

Tests
Waiting:The component ShoppingCart should render.
Waiting:The component Items should render.
Waiting:The Items component should have a prop of { quantity: 10 } passed from the ShoppingCart component.

#### 18. Use PropTypes to Define the Props You Expect

React provides useful **_type-checking_** features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set `propTypes` on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.

It's considered a best practice to set `propTypes` when you know the type of a prop ahead of time. You can define a `propTypes` property for a component in the same way you defined `defaultProps`. Doing this will check that props of a given key are present with a given type. Here's an example to require the type function for a prop called `handleClick`:

```jsx
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

In the example above, the `PropTypes.func` part checks that `handleClick` is a function. Adding `isRequired` tells React that `handleClick` is a required property for that component. You will see a warning if that prop isn't provided. Also notice that `func` represents `function`. Among the seven JavaScript primitive types, `function` and `boolean` (written as `bool`) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the documentation for all of the options.

Note: As of React v15.5.0, `PropTypes` is imported independently from React, like this:

```jsx
import PropTypes from 'prop-types'
```

Define `propTypes` for the `Items` component to require `quantity` as a prop and verify that it is of type `number`.

Tests
Waiting:The ShoppingCart component should render.
Waiting:The Items component should render.
Waiting:The Items component should include a propTypes check to require a value for quantity and ensure that its value is a number.

#### 19. Access Props Using this.props

The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an **_ES6 class component_**, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the `this` keyword. To access props within a class component, you preface the code that you use to access it with `this`. For example, if an ES6 class component has a prop called `data`, you write `{this.props.data}` in JSX.

Render an instance of the `Welcome` component in the parent component `App`. Here, give `Welcome` a prop of `name` and assign it a value of a `string`. Within the child, `Welcome`, access the `name` prop within the `strong` tags.

Tests
Waiting:The App component should return a single div element.
Waiting:The child of App should be the Welcome component.
Waiting:The Welcome component should have a prop called name.
Waiting:The Welcome component should display the string you pass as the name prop within strong tags.

#### 20. Review Using Props with Stateless Functional Components

Except for the last challenge, you've been **_passing props to stateless functional components_**. These components act like **_pure functions_**. They accept props as input and return the same view every time they are passed the same props. You may be wondering what **_state_** is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components.

A **_stateless functional component_** is any function you write which accepts props and returns JSX. A **_stateless component_**, on the other hand, is a class that extends `React.Component`, but does not use internal state (covered in the next challenge). Finally, a **_stateful component_** is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

**_A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior._**

The code editor has a `CampSite` component that renders a `Camper` component as a child. Define the `Camper` component and assign it default props of `{ name: 'CamperBot' }`. Inside the `Camper` component, render any code that you want, but make sure to have one `p` element that includes only the `name` value that is passed in as a prop. Finally, define `propTypes` on the Camper component to require `name` to be provided as a prop and verify that it is of type `string`.

Tests
Waiting:The `CampSite` component should render.
Waiting:The `Camper` component should render.
Waiting:The `Camper` component should include default props which assign the string `CamperBot` to the key `name`.
Waiting:The `Camper` component should include prop types which require the `name` prop to be of type string.
Waiting:The `Camper` component should contain a `p` element with only the text from the `name` prop.

#### 21. Create a Stateful Component

One of the most important topics in React is `state`. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.

You create state in a React component by declaring a `state` property on the component class in its `constructor`. This initializes the component with `state` when it is created. The `state` property must be set to a JavaScript `object`. Declaring it looks like this:

```jsx
this.state = {}
```

You have access to the `state` object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The `state` object can be as complex or as simple as you need it to be. Note that you must create a class component by extending `React.Component` in order to create `state` like this.

There is a component in the code editor that is trying to render a `firstName` property from its state. However, there is no `state` defined. Initialize the component with `state` in the `constructor` and assign your name to a property of `firstName`.

Tests
Waiting:StatefulComponent should exist and render.
Waiting:StatefulComponent should render a div and an h1 element.
Waiting:The state of StatefulComponent should be initialized with a property firstName set to a string.
Waiting:The property firstName in the state of StatefulComponent should render in the h1 element.

#### 22. Render State in the User Interface

Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in `state` in its `render()` method. You can access the data with `this.state`.

If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.

`state` is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.

Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. **_This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code._**

In the code editor, MyComponent is already stateful. Define an `h1` tag in the component's render method which renders the value of name from the component's state.

Note: The `h1` should only render the value from state and nothing else. In JSX, any code you write with curly braces `{ }` will be treated as JavaScript. So to access the value from state just enclose the reference in curly braces.

Tests
Waiting:MyComponent should have a key name with value freeCodeCamp stored in its state.
Waiting:MyComponent should render an h1 heading element enclosed in a single div.
Waiting:The rendered h1 heading element should only contain text rendered from the component's state.

#### 23. Render State in the User Interface Another Way

There is another way to access `state` in a component. In the `render()` method, before the `return` statement, you can write JavaScript directly. For example, you could declare functions, access data from `state` or `props`, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.

In the `MyComponent` render method, define a `const` called `name` and set it equal to the name value in the component's `state`. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.

Next, in the return statement, render this value in an `h1` tag using the variable `name`. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.

Tests
Waiting:MyComponent should have a key name with value freeCodeCamp stored in its state.
Waiting:MyComponent should render an h1 heading element enclosed in a single div.
Waiting:The rendered h1 tag should include a reference to {name}.
Waiting:The rendered h1 heading element should contain text rendered from the component's state.

#### 24. Set State with this.setState

The previous challenges covered component `state` and how to initialize state in the `constructor`. There is also a way to change the component's state. React provides a method for updating component state called `setState`. You call the `setState` method within your component class like so: `this.setState()`, passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a username in state and wanted to update it, it would look like this:

```jsx
this.setState({
  username: 'Lewis',
})
```

React expects you to never modify `state` directly, instead always use `this.setState()` when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous. There is an alternative syntax for the `setState` method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult our [React article](https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/) for further details.

There is a button element in the code editor which has an `onClick()` handler. This handler is triggered when the button receives a click event in the browser, and runs the `handleClick` method defined on `MyComponent`. Within the handleClick method, update the component state using `this.setState()`. Set the name property in state to equal the string `React Rocks!`.

Click the button and watch the rendered state update. Don't worry if you don't fully understand how the click handler code works at this point. It's covered in upcoming challenges.

Tests
Waiting:The state of MyComponent should initialize with the key value pair { name: Initial State }.
Waiting:MyComponent should render an h1 heading element.
Waiting:The rendered h1 heading element should contain text rendered from the component's state.
Waiting:Calling the handleClick method on MyComponent should set the name property in state to equal `React Rocks!`.

#### 25. Bind 'this' to a Class Method

In addition to setting and updating `state`, you can also define methods for your component class. A class method typically needs to use the `this` keyword so it can access properties on the class (such as `state` and `props`) inside the scope of the method. There are a few ways to allow your class methods to access `this`.

One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used `this.handleClick = this.handleClick.bind(this)` for its `handleClick` method in the constructor. Then, when you call a function like `this.setState()` within your class method, `this` refers to the class and will not be `undefined`.

Note: The `this` keyword is one of the most confusing aspects of JavaScript but it plays an important role in React. Although its behavior here is totally normal, these lessons aren't the place for an in-depth review of `this` so please refer to other lessons if the above is confusing!

The code editor has a component with a state that keeps track of the text. It also has a method which allows you to set the text to `You clicked!`. However, the method doesn't work because it's using the `this` keyword that is undefined. Fix it by explicitly binding this to the `handleClick()` method in the component's constructor.

Next, add a click handler to the `button` element in the render method. It should trigger the` handleClick()` method when the button receives a click event. Remember that the method you pass to the `onClick` handler needs curly braces because it should be interpreted directly as JavaScript.

Once you complete the above steps you should be able to click the button and see `You clicked!`.

Tests
Waiting:MyComponent should return a div element which wraps two elements, a button and an h1 element, in that order.
Waiting:The state of MyComponent should initialize with the key value pair { text: "Hello" }.
Waiting:Clicking the button element should run the handleClick method and set the state text to You clicked!.

#### 26. Use State to Toggle an Element

Sometimes you might need to know the previous state when updating the state. **_However, state updates may be asynchronous - this means React may batch multiple `setState()` calls into a single update. This means you can't rely on the previous value of `this.state` or `this.props` when calculating the next value._** So, you should not use code like this:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment,
})
```

Instead, you should pass `setState` a function that allows you to access state and props. Using a function with `setState` guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}))
```

You can also use a form without `props` if you need only the `state`:

```jsx
this.setState((state) => ({
  counter: state.counter + 1,
}))
```

**_Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code._**

`MyComponent` has a `visibility` property which is initialized to `false`. The render method returns one view if the value of `visibility` is true, and a different view if it is false.

Currently, there is no way of updating the `visibility` property in the component's `state`. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called `toggleVisibility()`. Pass a function to `setState` to define this method so that the `state` of `visibility` toggles to the opposite value when the method is called. If `visibility` is `false`, the method sets it to `true`, and vice versa.

Finally, click the button to see the conditional rendering of the component based on its `state`.

Hint: Don't forget to bind the `this` keyword to the method in the `constructor`!

Tests
Waiting:MyComponent should return a div element which contains a button.
Waiting:The state of MyComponent should initialize with a visibility property set to false.
Waiting:Clicking the button element should toggle the visibility property in state between true and false.
Waiting:An anonymous function should be passed to setState.
Waiting:this should not be used inside setState

#### 27. Write a Simple Counter

You can design a more complex stateful component by combining the concepts covered so far. **_These include initializing `state`, writing methods that set `state`, and assigning click handlers to trigger these methods._**

The `Counter` component keeps track of a `count` value in `state`. There are two buttons which call methods `increment()` and `decrement()`. Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a `reset()` method so when the reset button is clicked, the count is set to 0.

Note: Make sure you don't modify the `className`s of the buttons. Also, remember to add the necessary bindings for the newly-created methods in the constructor.

Tests
Waiting:Counter should return a div element which contains three buttons with text content in this order Increment!, Decrement!, Reset.
Waiting:The state of Counter should initialize with a count property set to 0.
Waiting:Clicking the increment button should increment the count by 1.
Waiting:Clicking the decrement button should decrement the count by 1.
Waiting:Clicking the reset button should reset the count to 0.

#### 28. Create a Controlled Input

Your application may have more complex interactions between `state` and the rendered UI. For example, form control elements for text input, such as `input` and `textarea`, maintain their own state in the DOM as the user types. With React, you can move this mutable state into a React component's `state`. The user's input becomes part of the application `state`, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.

The code editor has the skeleton of a component called `ControlledInput` to create a controlled `input` element. The component's `state` is already initialized with an `input` property that holds an empty string. This value represents the text a user types into the `input` field.

First, create a method called `handleChange()` that has a parameter called `event`. When the method is called, it receives an `event` object that contains a string of text from the `input` element. You can access this string with `event.target.value` inside the method. Update the `input` property of the component's `state` with this new string.

In the `render` method, create the `input` element above the `h4` tag. Add a `value` attribute which is equal to the `input` property of the component's `state`. Then add an `onChange()` event handler set to the `handleChange()` method.

When you type in the input box, that text is processed by the `handleChange()` method, set as the `input` property in the local `state`, and rendered as the value in the `input` box on the page. The component `state` is the single source of truth regarding the input data.

Last but not least, don't forget to add the necessary bindings in the constructor.

Tests
Waiting:ControlledInput should return a div element which contains an input and a p tag.
Waiting:The state of ControlledInput should initialize with an input property set to an empty string.
Waiting:Typing in the input element should update the state and the value of the input, and the p element should render this state as you type.

#### 29. Create a Controlled Form

The last challenge showed that React can control the internal state for certain elements like `input` and `textarea`, which makes them controlled components. This applies to other form elements as well, including the regular HTML `form` element.

The `MyForm` component is set up with an empty `form` with a submit handler. The submit handler will be called when the form is submitted.

We've added a button which submits the form. You can see it has the `type` set to `submit` indicating it is the button controlling the form. Add the `input` element in the `form` and set its `value` and `onChange()` attributes like the last challenge. You should then complete the `handleSubmit` method so that it sets the component state property `submit` to the current input value in the local `state`.

Note: **_You also must call `event.preventDefault()` in the submit handler, to prevent the default form submit behavior which will refresh the web page._** For camper convenience, the default behavior has been disabled here to prevent refreshes from resetting challenge code.

Finally, create an `h1` tag after the `form` which renders the `submit` value from the component's `state`. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.

Tests
Waiting:MyForm should return a div element which contains a form and an h1 tag. The form should include an input and a button.
Waiting:The state of MyForm should initialize with input and submit properties, both set to empty strings.
Waiting:Typing in the input element should update the input property of the component's state.
Waiting:Submitting the form should run handleSubmit which should set the submit property in state equal to the current input.
Waiting:handleSubmit should call event.preventDefault
Waiting:The h1 heading element should render the value of the submit field from the component's state.

#### 30. Pass State as Props to Child Components

You saw a lot of examples that passed props to child JSX elements and child React components in previous challenges. You may be wondering where those props come from. A common pattern is to have a stateful component containing the `state` important to your app, that then renders child components. You want these components to have access to some pieces of that `state`, which are passed in as props.

For example, maybe you have an `App` component that renders a `Navbar`, among other components. In your `App`, you have `state` that contains a lot of user information, but the `Navbar` only needs access to the user's username so it can display it. You pass that piece of state to the Navbar component as a prop.

This pattern illustrates some important paradigms in React. **_The first is unidirectional data flow. State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need. The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state._** It begins to create a separation where state management is handled in one part of code and UI rendering in another. This principle of separating state logic from UI logic is one of React's key principles. When it's used correctly, it makes the design of complex, stateful applications much easier to manage.

The `MyApp` component is stateful and renders a Navbar component as a child. Pass the name property in its state down to the child component, then show the name in the `h1` tag that's part of the `Navbar` render method. name should appear after the text `Hello, my name is:`.

Tests
Waiting:The MyApp component should render with a Navbar component inside.
Waiting:The Navbar component should receive the MyApp state property name as props.
Waiting:The h1 element in Navbar should render the name prop.

#### 31. Pass a Callback as Props

You can pass `state` as props to child components, but you're not limited to passing data. You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components. You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under `this.props` in the child component.

There are three components outlined in the code editor. The `MyApp` component is the parent that will render the `GetInput` and `RenderInput` child components. Add the `GetInput` component to the render method in `MyApp`, then pass it a prop called `input` assigned to `inputValue` from `MyApp`'s state. Also create a prop called `handleChange` and pass the input handler `handleChange` to it.

Next, add `RenderInput` to the render method in `MyApp`, then create a prop called `input` and pass the `inputValue` from state to it. Once you are finished you will be able to type in the `input` field in the `GetInput` component, which then calls the handler method in its parent via props. This updates the input in the `state` of the parent, which is passed as props to both children. Observe how the data flows between the components and how the single source of truth remains the `state` of the parent component. Admittedly, this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between React components.

Tests
Waiting:The MyApp component should render.
Waiting:The GetInput component should render.
Waiting:The RenderInput component should render.
Waiting:The GetInput component should receive the MyApp state property inputValue as props and contain an input element which modifies MyApp state.
Waiting:The RenderInput component should receive the MyApp state property inputValue as props.

#### 32. Use the Lifecycle Method componentWillMount

**_React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time._** This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods:
`componentWillMount()`
`componentDidMount()`
`shouldComponentUpdate()`
`componentDidUpdate()`
`componentWillUnmount()`
The next several lessons will cover some of the basic use cases for these lifecycle methods.

Note: The `componentWillMount` Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. Learn more in this [article](https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/)

The `componentWillMount()` method is called before the `render()` method when a component is being mounted to the DOM. Log something to the console within `componentWillMount()` - you may want to have your browser console open to see the output.

Tests
Waiting:MyComponent should render a div element.
Waiting:console.log should be called in componentWillMount.

#### 33. Use the Lifecycle Method componentDidMount

Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.

**_The best practice with React is to place API calls or any calls to your server in the lifecycle method `componentDidMount()`._** This method is called after a component is mounted to the DOM. Any calls to `setState()` here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

**_There is a mock API call in `componentDidMount()`. It sets state after 2.5 seconds to simulate calling a server to retrieve data._**

```jsx
  componentDidMount() {
    setTimeout(() => { // mock API call setTimeout()
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
```

This example requests the current total active users for a site. In the render method, render the value of `activeUsers` in the `h1` after the text `Active Users:`. Watch what happens in the preview, and feel free to change the timeout to see the different effects.

Tests
Waiting:MyComponent should render a div element which wraps an h1 tag.
Waiting:Component state should be updated with a timeout function in componentDidMount.
Waiting:The h1 tag should render the activeUsers value from MyComponent's state.

#### 34. Add Event Listeners

The `componentDidMount()` method is also the best place to attach any event listeners you need to add for specific functionality. **_React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers._**

You've already been using some of these synthetic event handlers such as `onClick()`. React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.

Attach an event listener in the `componentDidMount()` method for `keydown` events and have these events trigger the callback `handleKeyPress()`. You can use `document.addEventListener()` which takes the event (in quotes) as the first argument and the callback as the second argument.

Then, in `componentWillUnmount()`, remove this same event listener. You can pass the same arguments to `document.removeEventListener()`. It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.

Tests
Waiting:MyComponent should render a div element which wraps an h1 tag.
Waiting:A keydown listener should be attached to the document in componentDidMount.
Waiting:The keydown listener should be removed from the document in componentWillUnmount.
Waiting:Once the component has mounted, pressing enter should update its state and the rendered h1 tag.

#### 35. Optimize Re-Renders with shouldComponentUpdate

So far, if any component receives new `state` or new `props`, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new `state` or `props`, and declare specifically if the components should update or not. The method is `shouldComponentUpdate()`, and it takes `nextProps` and `nextState` as parameters.

This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new `props`, even if the `props` haven't changed. You can use `shouldComponentUpdate()` to prevent this by comparing the `props`. The method must return a `boolean` value that tells React whether or not to update the component. You can compare the current props (`this.props`) to the next props (`nextProps`) to determine if you need to update or not, and return `true` or `false` accordingly.

The `shouldComponentUpdate()` method is added in a component called `OnlyEvens`. Currently, this method returns `true` so `OnlyEvens` re-renders every time it receives new `props`. Modify the method so `OnlyEvens` updates only if the `value` of its new props is even. Click the `Add` button and watch the order of events in your browser's console as the lifecycle hooks are triggered.

Tests
Waiting:The Controller component should render the OnlyEvens component as a child.
Waiting:The shouldComponentUpdate method should be defined on the OnlyEvens component.
Waiting:The OnlyEvens component should return an h1 tag which renders the value of this.props.value.
Waiting:OnlyEvens should re-render only when nextProps.value is even.

#### 36. Introducing Inline Styles

There are other complex concepts that add powerful capabilities to your React code. But you may be wondering about the more simple problem of how to style those JSX elements you create in React. You likely know that it won't be exactly the same as working with HTML because of the way you apply classes to JSX elements.

If you import styles from a stylesheet, it isn't much different at all. You apply a class to your JSX element using the className attribute, and apply styles to the class in your stylesheet. Another option is to apply inline styles, which are very common in ReactJS development.

You apply inline styles to JSX elements similar to how you do it in HTML, but with a few JSX differences. Here's an example of an inline style in HTML:

```jsx
<div style='color: yellow; font-size: 16px'>Mellow Yellow</div>
```

JSX elements use the style attribute, but because of the way JSX is transpiled, you can't set the value to a string. Instead, you set it equal to a JavaScript object. Here's an example:

```jsx
<div style={{ color: 'yellow', fontSize: 16 }}>Mellow Yellow</div>
```

Notice how we camelCase the fontSize property? This is because React will not accept kebab-case keys in the style object. React will apply the correct property name for us in the HTML.

Add a style attribute to the div in the code editor to give the text a color of red and font size of 72px.

Note that you can optionally set the font size to be a number, omitting the units px, or write it as 72px.

Tests
Waiting:The component should render a div element.
Waiting:The div element should have a color of red.
Waiting:The div element should have a font size of 72px.

### Front End Development Libraries Projects

It's time to put your front end development libraries skills to the test. Use Bootstrap, jQuery, Sass, React, and Redux to build 5 projects that will test everything you've learned up to this point.

Complete all 5 projects, and you'll earn the Front End Development Libraries certification.

Build a Random Quote Machine
[_] Passed
Build a Markdown Previewer
[_] Passed
Build a Drum Machine
[_] Passed
Build a JavaScript Calculator
[_] Passed
Build a 25 + 5 Clock
[_] Passed

### Build a Random Quote Machine

Objective: Build an app that is functionally similar to this: https://random-quote-machine.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I can see a wrapper element with a corresponding id="quote-box".

User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: [](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js)

Once you're done, submit the URL to your working project with all its tests passing.

Note: Twitter does not allow links to be loaded in an iframe. Try using the target="\_blank" or target="\_top" attribute on the #tweet-quote element if your tweet won't load. target="\_top" will replace the current tab so make sure your work is saved.

Solution Link
