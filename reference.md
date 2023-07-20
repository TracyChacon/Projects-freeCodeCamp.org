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

#### 37. Add Inline Styles in React

You may have noticed in the last challenge that there were several other syntax differences from HTML inline styles in addition to the style attribute set to a JavaScript object. First, the names of certain CSS style properties use camel case. For example, the last challenge set the size of the font with `fontSize` instead of `font-size`. Hyphenated words like `font-size` are invalid syntax for JavaScript object properties, so React uses camel case. As a rule, any hyphenated style properties are written using camel case in JSX.

All property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified. If you want to use em, for example, you wrap the value and the units in quotes, like {fontSize: "4em"}. Other than the length values that default to px, all other property values should be wrapped in quotes.

If you have a large set of styles, you can assign a style object to a constant to keep your code organized. Declare your styles constant as a global variable at the top of the file. Initialize styles constant and assign an object with three style properties and their values to it. Give the `div` a color of `purple`, a `font-size` of `40`, and a `border` of `2px solid purple`. Then set the style attribute equal to the styles constant.

Tests
Waiting:The styles variable should be an object with three properties.
Waiting:The styles variable should have a color property set to a value of purple.
Waiting:The styles variable should have a fontSize property set to a value of 40.
Waiting:The styles variable should have a border property set to a value of 2px solid purple.
Waiting:The component should render a div element.
Waiting:The div element should have its styles defined by the styles object.

#### 38. Use Advanced JavaScript in React Render Method

In previous challenges, you learned how to inject JavaScript code into JSX code using curly braces, `{ }`, for tasks like accessing props, passing props, accessing state, inserting comments into your code, and most recently, styling your components. These are all common use cases to put JavaScript in JSX, but they aren't the only way that you can utilize JavaScript code in your React components.

You can also write JavaScript directly in your render methods, before the `return` statement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the `return` statement, you place the variable name inside curly braces.

In the code provided, the `render` method has an array that contains 20 phrases to represent the answers found in the classic 1980's Magic Eight Ball toy. The button click event is bound to the `ask` method, so each time the button is clicked a random number will be generated and stored as the `randomIndex` in state. On line 52, delete the string `change me!` and reassign the `answer` const so your code randomly accesses a different index of the `possibleAnswers` array each time the component updates. Finally, insert the `answer` const inside the `p` tags.

Tests
Waiting:The MagicEightBall component should exist and should render to the page.
Waiting:MagicEightBall's first child should be an input element.
Waiting:MagicEightBall's third child should be a button element.
Waiting:MagicEightBall's state should be initialized with a property of userInput and a property of randomIndex both set to a value of an empty string.
Waiting:When MagicEightBall is first mounted to the DOM, it should return an empty p element.
Waiting:When text is entered into the input element and the button is clicked, the MagicEightBall component should return a p element that contains a random element from the possibleAnswers array.

#### 39. Render with an If-Else Condition

Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard `if/else` statement in the `render()` method of a React component.

`MyComponent` contains a `boolean` in its state which tracks whether you want to display some element in the UI or not. The `button` toggles the state of this value. Currently, it renders the same UI every time. Rewrite the `render()` method with an `if/else` statement so that if `display` is true, you return the current markup. Otherwise, return the markup without the `h1` element.

Note: You must write an `if/else` to pass the tests. Use of the ternary operator will not pass here.

Tests
Waiting:MyComponent should exist and render.
Waiting:When display is set to true, a div, button, and h1 should render.
Waiting:When display is set to false, only a div and button should render.
Waiting:The render method should use an if/else statement to check the condition of this.state.display.

#### 40. Use && for a More Concise Conditional

The `if/else` statements worked in the last challenge, but there's a more concise way to achieve the same result. Imagine that you are tracking several conditions in a component and you want different elements to render depending on each of these conditions. If you write a lot of `else if` statements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the `&&` logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is `true`, and if it is, return some markup. Here's an example:

```jsx
{
  condition && <p>markup</p>
}
```

If the `condition` is `true`, the markup will be returned. If the condition is `false`, the operation will immediately return `false` after evaluating the `condition` and return nothing. You can include these statements directly in your JSX and string multiple conditions together by writing `&&` after each one. This allows you to handle more complex conditional logic in your `render()` method without repeating a lot of code.

Solve the previous example again, so the `h1` only renders if `display` is `true`, but use the `&&` logical operator instead of an `if/else` statement.

Tests
Waiting:MyComponent should exist and render.
Waiting:When display is set to true, a div, button, and h1 should render.
Waiting:When display is set to false, only a div and button should render.
Waiting:The render method should use the && logical operator to check the condition of this.state.display.

#### 41. Use a Ternary Expression for Conditional Rendering

Before moving on to dynamic rendering techniques, there's one last way to use built-in JavaScript conditionals to render what you want: the ternary operator. The ternary operator is often utilized as a shortcut for `if/else` statements in JavaScript. They're not quite as robust as traditional `if/else` statements, but they are very popular among React developers. One reason for this is because of how JSX is compiled, **_ `if/else` statements can't be inserted directly into JSX code._** You might have noticed this a couple challenges ago — when an `if/else` statement was required, it was always outside the return statement. Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:

```js
condition ? expressionIfTrue : expressionIfFalse
```

The code editor has three constants defined within the `CheckUserAge` component's `render()` method. They are called `buttonOne`, `buttonTwo`, and `buttonThree`. Each of these is assigned a simple JSX expression representing a button element. First, initialize the `state` of `CheckUserAge` with `input` and `userAge` both set to values of an empty string.

Once the component is rendering information to the page, users should have a way to interact with it. Within the component's return statement, set up a ternary expression that implements the following logic: when the page first loads, render the submit button, `buttonOne`, to the page. Then, when a user enters their `age` and clicks the button, render a different button based on the age. If a user enters a number less than `18`, render `buttonThree`. If a user enters a number greater than or equal to `18`, render `buttonTwo`.

Tests
Failed:The CheckUserAge component should render with a single input element and a single button element.
Failed:The CheckUserAge component's state should be initialized with a property of userAge and a property of input, both set to a value of an empty string.
Failed:When the CheckUserAge component is first rendered to the DOM, the button's inner text should be Submit.
Failed:When a number of less than 18 is entered into the input element and the button is clicked, the button's inner text should read You Shall Not Pass.
Failed:When a number greater than or equal to 18 is entered into the input element and the button is clicked, the button's inner text should read You May Enter.
Failed:Once a number has been submitted, and the value of the input is once again changed, the button should return to reading Submit.
Passed:Your code should not contain any if/else statements.

#### 42. Render Conditionally from Props

So far, you've seen how to use `if/else`, `&&`, and the ternary operator (`condition ? expressionIfTrue : expressionIfFalse`) to make conditional decisions about what to render and when. However, there's one important topic left to discuss that lets you combine any or all of these concepts with another powerful React feature: `props`. Using `props` to conditionally render code is very common with React developers — that is, they use the value of a given prop to automatically make decisions about what to render.

In this challenge, you'll set up a child component to make rendering decisions based on props. You'll also use the ternary operator, but you can see how several of the other concepts that were covered in the last few challenges might be just as useful in this context.

The code editor has two components that are partially defined for you: a parent called `GameOfChance`, and a child called `Results`. They are used to create a simple game where the user presses a button to see if they win or lose.

First, you'll need a simple expression that randomly returns a different value every time it is run. You can use `Math.random()`. This method returns a value between 0 (inclusive) and 1 (exclusive) each time it is called. So for 50/50 odds, use` Math.random() >= .5` in your expression. Statistically speaking, this expression will return `true` 50% of the time, and `false` the other 50%. In the render method, replace `null` with the above expression to complete the variable declaration.

Now you have an expression that you can use to make a randomized decision in the code. Next you need to implement this. Render the `Results` component as a child of `GameOfChance`, and pass in `expression` as a prop called `fiftyFifty`. In the Results component, write a ternary expression to render the `h1` element with the text `You Win!` or `You Lose!` based on the `fiftyFifty` prop that's being passed in from `GameOfChance`. Finally, make sure the `handleClick()` method is correctly counting each turn so the user knows how many times they've played. This also serves to let the user know the component has actually updated in case they win or lose twice in a row.

Tests
Waiting:The GameOfChance component should exist and render to the page.
Waiting:GameOfChance should return a single button element.
Waiting:GameOfChance should return a single instance of the Results component, which has a prop called fiftyFifty.
Waiting:GameOfChance state should be initialized with a property of counter set to a value of 1.
Waiting:When the GameOfChance component is first rendered to the DOM, a p element should be returned with the inner text of Turn: 1.
Waiting:Each time the button is clicked, the counter state should be incremented by a value of 1, and a single p element should be rendered to the DOM that contains the text Turn: N, where N is the value of the counter state.
Waiting:When the GameOfChance component is first mounted to the DOM and each time the button is clicked thereafter, a single h1 element should be returned that randomly renders either You Win! or You Lose!. Note: this can fail randomly. If that happens, please try again.

#### 43. Change Inline CSS Conditionally Based on Component State

At this point, you've seen several applications of conditional rendering and the use of inline styles. Here's one more example that combines both of these topics. You can also render CSS conditionally based on the state of a React component. To do this, you check for a condition, and if that condition is met, you modify the styles object that's assigned to the JSX elements in the render method.

**_This paradigm is important to understand because it is a dramatic shift from the more traditional approach of applying styles by modifying DOM elements directly (which is very common with `jQuery`, for example). In that approach, you must keep track of when elements change and also handle the actual manipulation directly._** It can become difficult to keep track of changes, potentially making your UI unpredictable. When you set a style object based on a condition, you describe how the UI should look as a function of the application's state. There is a clear flow of information that only moves in one direction. This is the preferred method when writing applications with React.

The code editor has a simple controlled input component with a styled border. You want to style this `border` `red` if the user types more than 15 characters of text in the input box. Add a condition to check for this and, if the condition is valid, set the input border style to `3px solid red`. You can try it out by entering text in the input.

Tests
Waiting:The GateKeeper component should render a div element.
Waiting:The GateKeeper component should be initialized with a state key input set to an empty string.
Waiting:The GateKeeper component should render an h3 tag and an input tag.
Waiting:The input tag should initially have a style of 1px solid black for the border property.
Waiting:The input tag should be styled with a border of 3px solid red if the input value in state is longer than 15 characters.

#### 44. Use Array.map() to Dynamically Render Elements

Conditional rendering is useful, but you may need your components to render an unknown number of elements. Often in **_reactive programming_**, a programmer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with that program. Programmers need to write their code to correctly handle that unknown state ahead of time. Using `Array.map()` in React illustrates this concept.

For example, you create a simple "To Do List" app. As the programmer, you have no way of knowing how many items a user might have on their list. You need to set up your component to dynamically render the correct number of list elements long before someone using the program decides that today is laundry day.

The code editor has most of the `MyToDoList` component set up. Some of this code should look familiar if you completed the controlled form challenge. You'll notice a `textarea` and a `button`, along with a couple of methods that track their states, but nothing is rendered to the page yet.

Inside the `constructor`, create a `this.state` object and define two states: `userInput` should be initialized as an empty string, and `toDoList` should be initialized as an empty array. Next, delete the `null` value in the `render()` method next to the items variable. In its place, map over the `toDoList` array stored in the component's internal state and dynamically render a `li` for each item. Try entering the string eat, code, sleep, repeat into the `textarea`, then click the `button` and see what happens.

Note: You may know that all sibling child elements created by a mapping operation like this do need to be supplied with a unique `key` attribute. Don't worry, this is the topic of the next challenge.

Tests
Waiting:The MyToDoList component should exist and render to the page.
Waiting:The first child of MyToDoList should be a textarea element.
Waiting:The second child of MyToDoList should be a br element.
Waiting:The third child of MyToDoList should be a button element.
Waiting:The state of MyToDoList should be initialized with toDoList as an empty array.
Waiting:The state of MyToDoList should be initialized with userInput as an empty string.
Waiting:When the Create List button is clicked, the MyToDoList component should dynamically return an unordered list that contains a list item element for every item of a comma-separated list entered into the textarea element.

#### 45. Give Sibling Elements a Unique Key Attribute

The last challenge showed how the `map` method is used to dynamically render a number of elements based on user input. However, there was an important piece missing from that example. When you create an array of elements, each one needs a `key` attribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way.

Note: Keys only need to be unique between sibling elements, they don't need to be globally unique in your application.

The code editor has an array with some front end frameworks and a stateless functional component named `Frameworks()`. `Frameworks()` needs to map the array to an unordered list, much like in the last challenge. Finish writing the `map` callback to return an `li` element for each framework in the `frontEndFrameworks` array. This time, make sure to give each `li` a key attribute, set to a unique value. The `li` elements should also contain text from `frontEndFrameworks`.

Normally, you want to make the key something that uniquely identifies the element being rendered. As a last resort the array index may be used, but typically you should try to use a unique identification.

Tests
Waiting:The Frameworks component should exist and render to the page.
Waiting:Frameworks should render an h1 element.
Waiting:Frameworks should render a ul element.
Waiting:The ul tag should render 6 child li elements.
Waiting:Each list item element should have a unique key attribute.
Waiting:Each list item element should contain text from frontEndFrameworks.

#### 46. Use Array.filter() to Dynamically Filter an Array

The `map` array method is a powerful tool that you will use often when working with React. Another method related to `map` is `filter`, which filters the contents of an array based on a condition, then returns a new array. For example, if you have an array of users that all have a property `online` which can be set to `true` or `false`, you can `filter` only those users that are online by writing:

```js
let onlineUsers = users.filter((user) => user.online)
```

In the code editor, `MyComponent`'s state is initialized with an array of users. Some users are online and some aren't. Filter the array so you see only the users who are online. To do this, first use filter to return a new array containing only the users whose online property is true. Then, in the `renderOnline` variable, map over the filtered array, and return a `li` element for each user that contains the text of their `username`. Be sure to include a unique key as well, like in the last challenges.

Tests
Waiting:MyComponent should exist and render to the page.
Waiting:MyComponent's state should be initialized to an array of six users.
Waiting:MyComponent should return a div, an h1, and then an unordered list containing li elements for every user whose online status is set to true.
Waiting:MyComponent should render li elements that contain the username of each online user.
Waiting:Each list item element should have a unique key attribute.

#### 47. Render React on the Server with renderToString

So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a `renderToString()` method you can use for this purpose.

There are two key reasons why rendering on the server may be used in a real world app. **_First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines._** Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.

The `renderToString()` method is provided on `ReactDOMServer`, which is available here as a global object. The method takes one argument which is a React element. Use this to render `App` to a string.

Tests
Waiting:The App component should render to a string using ReactDOMServer.renderToString.

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

### Build a Markdown Previewer

Objective: Build an app that is functionally similar to this: https://markdown-previewer.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I can see a textarea element with a corresponding id="editor".

User Story #2: I can see an element with a corresponding id="preview".

User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Solution Link
ex: https://codepen.io/camperbot/full/oNvPqqo

Build a Drum Machine
Objective: Build an app that is functionally similar to this: https://drum-machine.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

Here are some audio samples you can use for your drum machine:

Heater 1
Heater 2
Heater 3
Heater 4
Clap
Open-HH
Kick-n'-Hat
Kick
Closed-HH
You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Solution Link
ex: https://codepen.io/camperbot/full/oNvPqqo

### Build a Drum Machine

Objective: Build an app that is functionally similar to this: https://drum-machine.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

Here are some audio samples you can use for your drum machine:

Heater 1
Heater 2
Heater 3
Heater 4
Clap
Open-HH
Kick-n'-Hat
Kick
Closed-HH
You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Solution Link
ex: https://codepen.io/camperbot/full/oNvPqqo

### Build a JavaScript Calculator

Objective: Build an app that is functionally similar to this: https://javascript-calculator.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

User Story #5: My calculator should contain a clickable element with an id="clear".

User Story #6: My calculator should contain an element to display values with a corresponding id="display".

User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

User Story #12: I should be able to perform any operation (+, -, \*, /) on numbers containing decimal points.

User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + _ 7 = is entered, the result should be 35 (i.e. 5 _ 7); if 5 _ - 5 = is entered, the result should be -25 (i.e. 5 _ (-5)).

User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.

EXAMPLE: 3 + 5 x 6 - 2 / 4 =

Immediate Execution Logic: 11.5
Formula/Expression Logic: 32.5
You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Solution Link
ex: https://codepen.io/camperbot/full/oNvPqqo

Build a 25 + 5 Clock
Objective: Build an app that is functionally similar to this: https://25--5-clock.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length").

User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length").

User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".

User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".

User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.

User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25.

User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").

User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

User Story #9: I can see a clickable element with a corresponding id="start_stop".

User Story #10: I can see a clickable element with a corresponding id="reset".

User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state.

User Story #12: When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.

User Story #13: When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.

User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.

User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.

User Story #16: I should not be able to set a session or break length to <= 0.

User Story #17: I should not be able to set a session or break length to > 60.

User Story #18: When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.

User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

User Story #20: If the timer is running and I click the element with id="start_stop", the countdown should pause.

User Story #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.

User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.

User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.

User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.

User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".

User Story #27: The audio element with id="beep" must be 1 second or longer.

User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Solution Link
ex: https://codepen.io/camperbot/full/oNvPqqo

## Data Visualization Certifiction

Data is all around us, but it doesn't mean much without shape or context.

In the Data Visualization Certification, you'll build charts, graphs, and maps to present different types of data with the D3.js library.

You'll also learn about JSON (JavaScript Object Notation), and how to work with data online using an API (Application Programming Interface).

### 0. Data Visualization with D3

D3, or D3.js, stands for Data Driven Documents. It's a JavaScript library for creating dynamic and interactive data visualizations in the browser.

D3 is built to work with common web standards – namely HTML, CSS, and Scalable Vector Graphics (SVG).

D3 supports many different kinds of input data formats. Then, using its powerful built-in methods, you can transform those data into different charts, graphs, and maps.

In the Data Visualization with D3 courses, you'll learn how to work with data to create different charts, graphs, hover elements, and other ingredients to create dynamic and attractive data visualizations.

### 1. Add Document Elements with D3

D3 has several methods that let you add and change elements in your document.

The `select()` method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:

```js
const anchor = d3.select('a')
```

The above example finds the first anchor tag on the page and saves an HTML node for it in the variable anchor. You can use the selection with other methods. The d3 part of the example is a reference to the D3 object, which is how you access D3 methods.

Two other useful methods are `append()` and `text()`.

The `append()` method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

The `text()` method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

Here's an example that selects an unordered list, appends a list item, and adds text:

```js
d3.select('ul').append('li').text('Very important item')
```

D3 allows you to chain several methods together with periods to perform a number of actions in a row.

Use the `select` method to select the `body` tag in the document. Then `append` an `h1` tag to it, and add the text `Learning D3` into the `h1` element.

Tests
Waiting:The body should have one h1 element.
Waiting:The h1 element should have the text Learning D3 in it.
Waiting:Your code should access the d3 object.
Waiting:Your code should use the select method.
Waiting:Your code should use the append method.
Waiting:Your code should use the text method.

### 2. Select a Group of Elements with D3

D3 also has the `selectAll()` method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

```js
const anchors = d3.selectAll('a')
```

Like the `select()` method, `selectAll()` supports method chaining, and you can use it with other methods.

Select all of the `li` tags in the document, and change their text to the string `list item` by chaining the `.text()` method.

Tests
Waiting:There should be 3 li elements on the page, and the text in each one should say list item. Capitalization and spacing should match exactly.
Waiting:Your code should access the d3 object.
Waiting:Your code should use the selectAll method.

### 3. Work with Data in D3

The D3 library focuses on a data-driven approach. When you have a set of data, you can apply D3 methods to display it on the page. Data comes in many formats, but this challenge uses a simple array of numbers.

The first step is to make D3 aware of the data. The `data()` method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.

A common workflow pattern is to create a new element in the document for each piece of data in the set. D3 has the `enter()` method for this purpose.

When `enter()` is combined with the `data()` method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.

Here is an example that selects a `ul` element and creates a new list item based on the number of entries in the array:

```html
<body>
  <ul></ul>
  <script>
    const dataset = ['a', 'b', 'c']
    d3.select('ul')
      .selectAll('li')
      .data(dataset)
      .enter()
      .append('li')
      .text('New item')
  </script>
</body>
```

It may seem confusing to select elements that don't exist yet. This code is telling D3 to first select the ul on the page. Next, select all list items, which returns an empty selection. Then the `data()` method reviews the dataset and runs the following code three times, once for each item in the array. The `enter()` method sees there are no `li` elements on the page, but it needs 3 (one for each piece of data in dataset). New `li` elements are appended to the `ul` and have the text New item.

Select the `body` node, then select all `h2` elements. Have D3 create and append an `h2` tag for each item in the dataset array. The text in the `h2` should say `New Title`. Your code should use the `data()` and `enter()` methods.

Tests
Waiting:Your document should have 9 h2 elements.
Waiting:The text in the h2 elements should say New Title. The capitalization and spacing should match exactly.
Waiting:Your code should use the data() method.
Waiting:Your code should use the enter() method.

### 4. Work with Dynamic Data in D3

The last two challenges cover the basics of displaying data dynamically with D3 using the `data()` and `enter()` methods. These methods take a data set and, together with the `append()` method, create a new DOM element for each entry in the data set.

In the previous challenge, you created a new `h2` element for each item in the dataset array, but they all contained the same text, `New Title`. This is because you have not made use of the data that is bound to each of the `h2` elements.

The D3 `text()` method can take a string or a `callback function` as an argument:

```js
selection.text((d) => d)
```

In the example above, the parameter `d` refers to a single entry in the dataset that a selection is bound to.

Using the current example as context, the first `h2` element is bound to `12`, the second `h2` element is bound to `31`, the third `h2` element is bound to `22`, and so on.

Change the `text()` method so that each `h2` element displays the corresponding value from the dataset array with a single space and the string USD. For example, the first heading should be `12 USD`.

Tests
Waiting:The first h2 should have the text 12 USD.
Waiting:The second h2 should have the text 31 USD.
Waiting:The third h2 should have the text 22 USD.
Waiting:The fourth h2 should have the text 17 USD.
Waiting:The fifth h2 should have the text 25 USD.
Waiting:The sixth h2 should have the text 18 USD.
Waiting:The seventh h2 should have the text 29 USD.
Waiting:The eighth h2 should have the text 14 USD.
Waiting:The ninth h2 should have the text 9 USD.

### 5. Add Inline Styling to Elements

D3 lets you add inline CSS styles on dynamic elements with the `style()` method.

The `style()` method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text `color` to `blue`:

```js
selection.style('color', 'blue')
```

Add the `style()` method to the code in the editor to make all the displayed text have a `font-family` of `verdana`.

Tests
Waiting:Your h2 elements should have a font-family of verdana.
Waiting:Your code should use the style() method.

### 6. Change Styles Based on Data

D3 is about visualization and presentation of data. It's likely you'll want to change the styling of elements based on the data. For example, you may want to color a data point `blue` if it has a value less than `20`, and `red` otherwise. You can use a callback function in the `style()` method and include the conditional logic. The callback function uses the `d` parameter to represent the data point:

```js
selection.style('color', (d) => {})
```

The `style()` method is not limited to setting the color - it can be used with other CSS properties as well.

Add the `style()` method to the code in the editor to set the color of the `h2` elements conditionally. Write the callback function so if the data value is less than `20`, it returns `red`, otherwise it returns `green`.

Note: You can use if-else logic, or the ternary operator.

Tests
Waiting:The first h2 should have a color of red.
Waiting:The second h2 should have a color of green.
Waiting:The third h2 should have a color of green.
Waiting:The fourth h2 should have a color of red.
Waiting:The fifth h2 should have a color of green.
Waiting:The sixth h2 should have a color of red.
Waiting:The seventh h2 should have a color of green.
Waiting:The eighth h2 should have a color of red.
Waiting:The ninth h2 should have a color of red.

### 7. Add Classes with D3

Using a lot of inline styles on HTML elements gets hard to manage, even for smaller apps. It's easier to add a class to elements and style that class one time using CSS rules. D3 has the `attr()` method to add any HTML attribute to an element, including a class name.

The `attr()` method works the same way that` style()` does. It takes comma-separated values, and can use a callback function. Here's an example to add a class of container to a selection:

```js
selection.attr('class', 'container')
```

Note that the class parameter will remain the same whenever you need to add a class and only the container parameter will change.

Add the `attr()` method to the code in the editor and put a class of `bar` on the `div` elements.

Tests
Waiting:Your div elements should have a class of bar.
Waiting:Your code should use the attr() method.

### 8. Update the Height of an Element Dynamically

The previous challenges covered how to display data from an array and how to add CSS classes. You can combine these lessons to create a simple bar chart. There are two steps to this:

Create a `div` for each data point in the `array`

Give each `div` a dynamic height, using a callback function in the `style()` method that sets height equal to the data value

Recall the format to set a style using a callback function:

```js
selection.style('cssProperty', (d) => d)
```

Add the `style()` method to the code in the editor to set the height property for each element. Use a callback function to return the value of the data point with the string `px` added to it.

Tests
Waiting:The first div should have a height of 12 pixels.
Waiting:The second div should have a height of 31 pixels.
Waiting:The third div should have a height of 22 pixels.
Waiting:The fourth div should have a height of 17 pixels.
Waiting:The fifth div should have a height of 25 pixels.
Waiting:The sixth div should have a height of 18 pixels.
Waiting:The seventh div should have a height of 29 pixels.
Waiting:The eighth div should have a height of 14 pixels.
Waiting:The ninth div should have a height of 9 pixels

### 9. Change the Presentation of a Bar Chart

The last challenge created a bar chart, but there are a couple of formatting changes that could improve it:

1. Add space between each `bar` to visually separate them, which is done by adding a margin to the CSS for the bar class

2. Increase the height of the bars to better show the difference in values, which is done by multiplying the value by a number to scale the height

First, add a `margin` of `2px` to the `bar` class in the `style` tag. Next, change the callback function in the `style()` method so it returns a value `10` times the original data value (plus the `px`).

```css
margin: 2px;
```

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

d3.select('body')
  .selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style('height', (d) => d * 10 + 'px') // Change this line
```

Note: Multiplying each data point by the same constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.

Tests
Waiting:The first div should have a height of 120 pixels and a margin of 2 pixels.
Waiting:The second div should have a height of 310 pixels and a margin of 2 pixels.
Waiting:The third div should have a height of 220 pixels and a margin of 2 pixels.
Waiting:The fourth div should have a height of 170 pixels and a margin of 2 pixels.
Waiting:The fifth div should have a height of 250 pixels and a margin of 2 pixels.
Waiting:The sixth div should have a height of 180 pixels and a margin of 2 pixels.
Waiting:The seventh div should have a height of 290 pixels and a margin of 2 pixels.
Waiting:The eighth div should have a height of 140 pixels and a margin of 2 pixels.
Waiting:The ninth div should have a height of 90 pixels and a margin of 2 pixels.

### 10 Learn About SVG in D3

SVG stands for Scalable Vector Graphics.

Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, whether it's on a small mobile screen or a large TV monitor.

SVG is used to make common geometric shapes. Since D3 maps data into a visual representation, it uses SVG to create the shapes for the visualization. SVG shapes for a web page must go within an HTML `svg` tag.

CSS can be scalable when styles use relative units (such as `vh`, `vw`, or percentages), but using SVG is more flexible to build data visualizations.

Add an `svg` node to the body using `append()`. Give it a `width` attribute set to the provided `w` constant and a `height` attribute set to the provided `h` constant using the `attr()` or `style()` methods for each. You'll see it in the output because there's a `background-color` of `pink` applied to it in the style tag.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100

const svg = d3
  .select('body')

  .append('svg')
  .attr('width', w)
  .style('height', h)
```

Note: When using `attr()` `width` and `height` attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.

Tests
Waiting:Your document should have 1 svg element.
Waiting:The svg element should have a width attribute set to 500 or styled to have a width of 500px.
Waiting:The svg element should have a height attribute set to 100 or styled to have a height of 100px.

### 11. Display Shapes with SVG

The last challenge created an `svg` element with a given `width` and `height`, which was visible because it had a `background-color` applied to it in the `style` tag. The code made space for the given width and height.

The next step is to create a shape to put in the `svg` area. There are a number of supported shapes in SVG, such as rectangles and circles. They are used to display data. For example, a rectangle (`<rect>`) SVG shape could create a bar in a bar chart.

When you place a shape into the `svg` area, you can specify where it goes with `x` and `y` coordinates. The origin point of (0, 0) is in the upper-left corner. Positive values for `x` push the shape to the right, and positive values for `y` push the shape down from the origin point.

To place a shape in the middle of the 500 (width) x 100 (height) `svg` from last challenge, the `x` coordinate would be `250` and the `y` coordinate would be `50`.

An SVG `rect` has four attributes. There are the `x` and `y` coordinates for where it is placed in the svg area. It also has a `height` and `width` to specify the size.

Add a `rect` shape to the `svg` using `append()`, and give it a `width` attribute of `25` and `height` attribute of `100`. Also, give the rect `x` and `y` attributes each set to `0`.

Tests
Waiting:Your document should have 1 rect element.
Waiting:The rect element should have a width attribute set to 25.
Waiting:The rect element should have a height attribute set to 100.
Waiting:The rect element should have an x attribute set to 0.
Waiting:The rect element should have a y attribute set to 0.

### 12. Create a Bar for Each Data Point in the Set

The last challenge added only one rectangle to the `svg` element to represent a bar. Here, you'll combine what you've learned so far about `data()`, `enter()`, and SVG shapes to create and append a rectangle for each data point in `dataset`.

A previous challenge showed the format for how to create and append a `div` for each item in `dataset`:

```js
d3.select('body').selectAll('div').data(dataset).enter().append('div')
```

There are a few differences working with rect elements instead of div elements. The `rect` elements must be appended to an `svg` element, not directly to the body. Also, you need to tell D3 where to place each `rect` within the `svg` area. The bar placement will be covered in the next challenge.

Use the `data()`, `enter()`, and `append()` methods to create and append a `rect` for each item in dataset. The bars should display all on top of each other; this will be fixed in the next challenge.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('rect')
  // Add your code below this line
  .data(dataset)
  .enter()
  .append('rect')
  // Add your code above this line
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 25)
  .attr('height', 100)
```

Tests
Waiting:Your document should have 9 rect elements.
Waiting:Your code should use the data() method.
Waiting:Your code should use the enter() method.
Waiting:Your code should use the append() method.

### 13. Dynamically Set the Coordinates for Each Bar

The last challenge created and appended a rectangle to the `svg` element for each point in dataset to represent a bar. Unfortunately, they were all stacked on top of each other.

The placement of a rectangle is handled by the `x` and `y` attributes. They tell D3 where to start drawing the shape in the svg area. The last challenge set them each to `0`, so every bar was placed in the upper-left corner.

For a bar chart, all of the bars should sit on the same vertical level, which means the `y` value stays the same (at `0`) for all bars. The `x` value, however, needs to change as you add new bars. Remember that larger `x` values push items farther to the right. As you go through the array elements in dataset, the `x` value should increase.

The `attr()` method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one for the data point itself (usually `d`) and one for the index of the data point in the array. The second argument for the index is optional. Here's the format:

```js
selection.attr('property', (d, i) => {})
```

It's important to note that you do NOT need to write a for loop or use `forEach()` to iterate over the items in the data set. Recall that the `data()` method parses the data set, and any method that's chained after `data()` is run once for each item in the data set.

Change the `x` attribute callback function so it returns the index times `30`.

Note: Each bar has a width of `25`, so increasing each `x` value by `30` adds some space between the bars. Any value greater than `25` would work in this example.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => {
    // Add your code below this line
    return i * 30

    // Add your code above this line
  })
  .attr('y', 0)
  .attr('width', 25)
  .attr('height', 100)
```

Tests
Waiting:The first rect should have an x value of 0.
Waiting:The second rect should have an x value of 30.
Waiting:The third rect should have an x value of 60.
Waiting:The fourth rect should have an x value of 90.
Waiting:The fifth rect should have an x value of 120.
Waiting:The sixth rect should have an x value of 150.
Waiting:The seventh rect should have an x value of 180.
Waiting:The eighth rect should have an x value of 210.
Waiting:The ninth rect should have an x value of 240.

### 14. Dynamically Change the Height of Each Bar

The height of each bar can be set to the value of the data point in the array, similar to how the `x` value was set dynamically.

```js
selection.attr('property', (d, i) => {})
```

Here `d` would be the data point value, and `i` would be the index of the data point in the array.

Change the callback function for the height attribute to return the data value times `3`.

Note: Remember that multiplying all data points by the same constant scales the data (like zooming in). It helps to see the differences between bar values in this example.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', 0)
  .attr('width', 25)
  .attr('height', (d, i) => {
    // Add your code below this line

    return d * 3

    // Add your code above this line
  })
```

Tests
Waiting:The first rect should have a height of 36.
Waiting:The second rect should have a height of 93.
Waiting:The third rect should have a height of 66.
Waiting:The fourth rect should have a height of 51.
Waiting:The fifth rect should have a height of 75.
Waiting:The sixth rect should have a height of 54.
Waiting:The seventh rect should have a height of 87.
Waiting:The eighth rect should have a height of 42.
Waiting:The ninth rect should have a height of 27.

### 15. Invert SVG Elements

You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.

In SVG, the origin point for the coordinates is in the upper-left corner. An `x` coordinate of `0` places a shape on the left edge of the SVG area. A `y` coordinate of `0` places a shape on the top edge of the SVG area. Higher `x` values push the rectangle to the right. Higher `y` values push the rectangle down.

To make the bars right-side-up, you need to change the way the `y` coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.

The height of the SVG area is `100`. If you have a data point of `0` in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the y coordinate needs a value of `100`. If the data point value were `1`, you would start with a `y` coordinate of `100` to set the bar at the bottom. Then you need to account for the height of the bar of `1`, so the final `y` coordinate would be `99`.

The `y` coordinate that is y = heightOfSVG - heightOfBar would place the bars right-side-up.

Change the callback function for the `y` attribute to set the bars right-side-up. Remember that the height of the bar is `3` times the data value `d`.

Note: In general, the relationship is `y = h - m * d`, where `m` is the constant that scales the data points.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100
let heightScale = 3

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => {
    // Add your code below this line
    return h - d * heightScale

    // Add your code above this line
  })
  .attr('width', 25)
  .attr('height', (d, i) => 3 * d)
```

Tests
Waiting:The first rect should have a y value of 64.
Waiting:The second rect should have a y value of 7.
Waiting:The third rect should have a y value of 34.
Waiting:The fourth rect should have a y value of 49.
Waiting:The fifth rect should have a y value of 25.
Waiting:The sixth rect should have a y value of 46.
Waiting:The seventh rect should have a y value of 13.
Waiting:The eighth rect should have a y value of 58.
Waiting:The ninth rect should have a y value of 73.

### 16. Change the Color of an SVG Element

The bars are in the right position, but they are all the same black color. SVG has a way to change the color of the bars.

In SVG, a `rect` shape is colored with the `fill` attribute. It supports `hex` codes, `color` names, and `rgb` values, as well as more complex options like `gradients` and `transparency`.

Add an `attr()` method to set the `fill` of all the bars to the color `navy`.

Tests
Waiting:The bars should all have a fill color of navy.

### 17. Add Labels to D3 Elements

D3 lets you label a graph element, such as a bar, using the SVG `text` element.

Like the `rect` element, a `text` element needs to have `x` and `y` attributes, to place it on the SVG. It also needs to access the data to display those values.

D3 gives you a high level of control over how you label your bars.

The code in the editor already binds the data to each new `text` element. First, append `text` nodes to the svg. Next, add attributes for the `x` and `y` coordinates. They should be calculated the same way as the `rect` ones, except the `y` value for the text should make the label sit `3` units higher than the bar. Finally, use the D3 `text()` method to set the label equal to the data point value.

Note: For the label to sit higher than the bar, decide if the `y` value for the text should be `3` greater or `3` less than the `y` value for the bar.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d)
  .attr('width', 25)
  .attr('height', (d, i) => 3 * d)
  .attr('fill', 'navy')

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  // Add your code below this line

  .append('text')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d) => h - 3 - 3 * d)
  .text((d) => d)
```

Tests
Waiting:The first text element should have a label of 12 and a y value of 61.
Waiting:The second text element should have a label of 31 and a y value of 4.
Waiting:The third text element should have a label of 22 and a y value of 31.
Waiting:The fourth text element should have a label of 17 and a y value of 46.
Waiting:The fifth text element should have a label of 25 and a y value of 22.
Waiting:The sixth text element should have a label of 18 and a y value of 43.
Waiting:The seventh text element should have a label of 29 and a y value of 10.
Waiting:The eighth text element should have a label of 14 and a y value of 55.
Waiting:The ninth text element should have a label of 9 and a y value of 70.

### 18. Style D3 Labels

D3 methods can add styles to the bar labels. The `fill` attribute sets the `color` of the text for a `text` node. The `style()` method sets CSS rules for other styles, such as `font-family` or `font-size`.

Set the `font-size` of the text elements to `25px`, and the `color` of the text to `red`.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d)
  .attr('width', 25)
  .attr('height', (d, i) => d * 3)
  .attr('fill', 'navy')

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text((d) => d)
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d - 3)
  // Add your code below this line
  .style('font-size', '25px')
  .attr('fill', 'red')
```

       // Add your code above this line

Tests
Waiting:The labels should all have a fill color of red.
Waiting:The labels should all have a font-size of 25 pixels.

### 19. Add a Hover Effect to a D3 Element

It's possible to add effects that highlight a bar when the user hovers over it with the mouse. So far, the styling for the rectangles is applied with the built-in D3 and SVG methods, but you can use CSS as well.

You set the CSS class on the SVG elements with the `attr()` method. Then the `:hover` pseudo-class for your new class holds the style rules for any hover effects.

Use the `attr()` method to add a class of `bar` to all the `rect` elements. This changes the `fill` color of the bar to `brown` when you mouse over it.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d)
  .attr('width', 25)
  .attr('height', (d, i) => 3 * d)
  .attr('fill', 'navy')
  // Add your code below this line
  .attr('class', 'bar')

// Add your code above this line

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text((d) => d)
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d - 3)
```

Tests
Waiting:Your rect elements should have a class of bar.

### 20. Add a Tooltip to a D3 Element

A tooltip shows more information about an item on a page when the user hovers over that item. There are several ways to add a tooltip to a visualization. This challenge uses the SVG `title` element.

`title` pairs with the `text()` method to dynamically add data to the bars.

Append a `title` element under each rect node. Then call the `text()` method with a callback function so the text displays the data value.

```js
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]

const w = 500
const h = 100

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d)
  .attr('width', 25)
  .attr('height', (d, i) => d * 3)
  .attr('fill', 'navy')
  .attr('class', 'bar')
  // Add your code below this line

  .append('title')
  .text((d) => d)

// Add your code above this line

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text((d) => d)
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - (d * 3 + 3))
```

Tests
Waiting:Your code should have 9 title elements.
Waiting:The first title element should have tooltip text of 12.
Waiting:The second title element should have tooltip text of 31.
Waiting:The third title element should have tooltip text of 22.
Waiting:The fourth title element should have tooltip text of 17.
Waiting:The fifth title element should have tooltip text of 25.
Waiting:The sixth title element should have tooltip text of 18.
Waiting:The seventh title element should have tooltip text of 29.
Waiting:The eighth title element should have tooltip text of 14.
Waiting:The ninth title element should have tooltip text of 9.

### 21. Create a Scatterplot with SVG Circles

A scatter plot is another type of visualization. It usually uses circles to map data points, which have two values each. These values tie to the `x` and `y` axes, and are used to position the circle in the visualization.

SVG has a `circle` tag to create the circle shape. It works a lot like the `rect` elements you used for the bar chart.

Use the `data()`, `enter()`, and `append()` methods to bind dataset to new circle elements that are appended to the SVG.

Note: The circles won't be visible because we haven't set their attributes yet. We'll do that in the next challenge.

Tests
Waiting:Your code should have `10` circle elements.

### 22. Add Attributes to the Circle Elements

The last challenge created the circle elements for each point in the `dataset`, and appended them to the SVG. But D3 needs more information about the position and size of each circle to display them correctly.

A circle in SVG has three main attributes. The `cx` and `cy` attributes are the coordinates. They tell D3 where to position the center of the shape on the SVG. The radius (`r` attribute) gives the size of the circle.

Just like the `rect` `y` coordinate, the `cy` attribute for a circle is measured from the top of the SVG, not from the bottom.

All three attributes can use a callback function to set their values dynamically. Remember that all methods chained after data(dataset) run once per item in dataset. The `d` parameter in the callback function refers to the current item in dataset, which is an array for each point. You use bracket notation, like `d[0]`, to access the values in that array.

Add `cx`, `cy`, and `r` attributes to the circle elements. The `cx` value should be the first number in the array for each item in dataset. The `cy` value should be based off the second number in the array, but make sure to show the chart right-side-up and not inverted. The `r` value should be `5` for all circles.

```js
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
]

const w = 500
const h = 500

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  // Add your code below this line
  .attr('cx', (d, i) => d[0])
  .attr(`cy`, (d) => h - d[1])
  .attr('r', 5)

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .attr('x', (d, i) => d[0])
  .attr('y', (d, i) => h - 10 - d[1])
  .text((d) => d)
  .attr('fill', 'green')

// Add your code above this line
```

Tests
Waiting:Your code should have 10 circle elements.
Waiting:The first circle element should have a cx value of 34, a cy value of 422, and an r value of 5.
Waiting:The second circle element should have a cx value of 109, a cy value of 220, and an r value of 5.
Waiting:The third circle element should have a cx value of 310, a cy value of 380, and an r value of 5.
Waiting:The fourth circle element should have a cx value of 79, a cy value of 89, and an r value of 5.
Waiting:The fifth circle element should have a cx value of 420, a cy value of 280, and an r value of 5.
Waiting:The sixth circle element should have a cx value of 233, a cy value of 355, and an r value of 5.
Waiting:The seventh circle element should have a cx value of 333, a cy value of 404, and an r value of 5.
Waiting:The eighth circle element should have a cx value of 222, a cy value of 167, and an r value of 5.
Waiting:The ninth circle element should have a cx value of 78, a cy value of 180, and an r value of 5.
Waiting:The tenth circle element should have a cx value of 21, a cy value of 377, and an r value of 5.

### 23. Add Labels to Scatter Plot Circles

You can add text to create labels for the points in a scatter plot.

The goal is to display the comma-separated values for the first (x) and second (y) fields of each item in dataset.

The text nodes need `x` and `y` attributes to position it on the SVG. In this challenge, the `y` value (which determines height) can use the same value that the circle uses for its `cy` attribute. The `x` value can be slightly larger than the `cx` value of the circle, so the label is visible. This will push the label to the right of the plotted point.

Label each point on the scatter plot using the text elements. The text of the label should be the two values separated by a comma and a space. For example, the label for the first point is `34, 78`. Set the `x` attribute so it's `5` units more than the value you used for the `cx` attribute on the circle. Set the `y` attribute the same way that's used for the `cy` value on the circle.

Tests
Waiting:Your code should have 10 text elements.
Waiting:The first label should have text of 34, 78, an x value of 39, and a y value of 422.
Waiting:The second label should have text of 109, 280, an x value of 114, and a y value of 220.
Waiting:The third label should have text of 310, 120, an x value of 315, and a y value of 380.
Waiting:The fourth label should have text of 79, 411, an x value of 84, and a y value of 89.
Waiting:The fifth label should have text of 420, 220, an x value of 425, and a y value of 280.
Waiting:The sixth label should have text of 233, 145, an x value of 238, and a y value of 355.
Waiting:The seventh label should have text of 333, 96, an x value of 338, and a y value of 404.
Waiting:The eighth label should have text of 222, 333, an x value of 227, and a y value of 167.
Waiting:The ninth label should have text of 78, 320, an x value of 83, and a y value of 180.
Waiting:The tenth label should have text of 21, 123, an x value of 26, and a y value of 377.

### 24. Create a Linear Scale with D3

The bar and scatter plot charts both plotted data directly onto the SVG. However, if the height of a bar or one of the data points were larger than the SVG height or width values, it would go outside the SVG area.

In D3, there are scales to help plot data. `scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG.

For example, say you have a 100x500-sized SVG and you want to plot Gross Domestic Product (GDP) for a number of countries. The set of numbers would be in the billion or trillion-dollar range. You provide D3 a type of scale to tell it how to place the large GDP values into that 100x500-sized area.

It's unlikely you would plot raw data as-is. Before plotting it, you set the scale for your entire data set, so that the x`and`y` values fit your SVG width and height.

D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

By default, a scale uses the identity relationship. The value of the input is the same as the value of the output. A separate challenge covers how to change this.

Change the scale variable to create a linear scale. Then set the output variable to the scale called with an input argument of `50`.

```js
// Add your code below this line

const scale = d3.scaleLinear() // Create the scale here
const output = scale(50) // Call scale with an argument here

// Add your code above this line

d3.select('body').append('h2').text(output)
```

Tests
Waiting:The text in the h2 should be 50.
Waiting:Your code should use the scaleLinear() method.
Waiting:The output variable should call scale with an argument of 50.

### 25. Set a Domain and a Range on a Scale

**_By default, scales use the identity relationship. This means the input value maps to the output value._** However, scales can be much more flexible and interesting.

Say a dataset has values ranging from `50` to `480`. This is the input information for a scale, also known as the domain.

You want to map those points along the `x` axis on the SVG, between `10` units and `500` units. This is the output information, also known as the range.

The `domain()` and `range()` methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:

```js
scale.domain([50, 480])
scale.range([10, 500])
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

In order, the following values would be displayed in the
console: `10`, `500`, `323.37`, and `807.67`.

Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (`50`) maps to the minimum value (`10`) in the range.

Create a scale and set its domain to `[250, 500]` and range to `[10, 150]`.

Note: You can chain the `domain()` and `range()` methods onto the scale variable.

```js
// Add your code below this line
const scale = d3.scaleLinear()

scale.domain([250, 500]).range([10, 150])

// Add your code above this line
const output = scale(50)
d3.select('body').append('h2').text(output)
```

Tests
Waiting:Your code should use the domain() method.
Waiting:The domain() of the scale should be set to [250, 500].
Waiting:Your code should use the range() method.
Waiting:The range() of the scale should be set to [10, 150].
Waiting:The text in the h2 should be -102.

### 26. Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset

The D3 methods `domain()` and `range()` set that information for your scale based on the data. There are a couple methods to make that easier.

Often when you set the domain, you'll want to use the minimum and maximum values within the data set. Trying to find these values manually, especially in a large data set, may cause errors.

D3 has two methods - min() and max() to return this information. Here's an example:

```js
const exampleData = [34, 234, 73, 90, 6, 52]
d3.min(exampleData)
d3.max(exampleData)
```

A dataset may have nested arrays, like the [x, y] coordinate pairs that were in the scatter plot example. In that case, you need to tell D3 how to calculate the maximum and minimum. Fortunately, both the `min()` and `max()` methods take a callback function. In this example, the callback function's argument `d` is for the current inner array. The callback needs to return the element from the inner array (the `x` or `y` value) over which you want to compute the maximum or minimum. Here's an example for how to find the min and max values with an array of arrays:

```js
const locationData = [
  [1, 7],
  [6, 3],
  [8, 3],
]
const minX = d3.min(locationData, (d) => d[0])
```

`minX` would have the value 1.

The `positionData` array holds sub arrays of `x`, `y`, and `z` coordinates. Use a D3 method to find the maximum value of the `z` coordinate (the third value) from the arrays and save it in the `output` variable.

```js
const positionData = [
  [1, 7, -4],
  [6, 3, 8],
  [2, 9, 3],
]
// Add your code below this line

const output = d3.max(positionData, (d) => d[2]) // Change this line

// Add your code above this line

d3.select('body').append('h2').text(output)
```

Tests
Waiting:The text in the h2 should be 8.
Waiting:Your code should use the max() method.

### 27. Use Dynamic Scales

The D3 `min()` and `max()` methods are useful to help set the scale.

Given a complex data set, one priority is to set the scale so the visualization fits the SVG container's width and height. You want all the data plotted inside the SVG so it's visible on the web page.

The example below sets the x-axis scale for scatter plot data. The `domain()` method passes information to the scale about the raw data values for the plot. The `range()` method gives it information about the actual space on the web page for the visualization.

In the example, the domain goes from 0 to the maximum in the set. It uses the `max()` method with a callback function based on the x values in the arrays. The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

```JS
const dataset = [
[ 34, 78 ],
[ 109, 280 ],
[ 310, 120 ],
[ 79, 411 ],
[ 420, 220 ],
[ 233, 145 ],
[ 333, 96 ],
[ 222, 333 ],
[ 78, 320 ],
[ 21, 123 ]
];
const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
.domain([0, d3.max(dataset, (d) => d[0])])
.range([padding, w - padding]);
```

The padding may be confusing at first. Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). Including the padding in the `range()` method forces the plot to start at `30` along that line (instead of `0`), and end at `470` (instead of `500`).

Use the `yScale` variable to create a linear y-axis scale. The domain should start at zero and go to the maximum y value in the set. The range should use the SVG height (`h`) and include padding.

Note: Remember to keep the plot right-side-up. When you set the range for the y coordinates, the higher value (height minus padding) is the first argument, and the lower value is the second argument.

```js
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
]

const w = 500
const h = 500

// Padding between the SVG boundary and the plot
const padding = 30

// Create an x and y scale

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding])

// Add your code below this line

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding])

// Add your code above this line

const output = yScale(411) // Returns 30
d3.select('body').append('h2').text(output)
```

Tests
Waiting:The text in the h2 should be 30.
Waiting:The domain() of yScale should be equivalent to [0, 411].
Waiting:The range() of yScale should be equivalent to [470, 30].

### 28 Use a Pre-Defined Scale to Place Elements

With the scales set up, it's time to map the scatter plot again. The scales are like processing functions that turn the `x` and `y` raw data into values that fit and render correctly on the SVG. They keep the data within the screen's plotting area.

You set the coordinate attribute values for an SVG shape with the scaling function. This includes `x` and `y` attributes for `rect` or text elements, or `cx` and `cy` for `circles`. Here's an example:

```js
shape.attr('x', (d) => xScale(d[0]))
```

Scales set shape coordinate attributes to place the data points onto the SVG. You don't need to apply scales when you display the actual data value, for example, in the `text()` method for a tooltip or label.

Use `xScale` and `yScale` to position both the `circle` and `text` shapes onto the SVG. For the `circles`, apply the scales to set the `cx` and `cy` attributes. Give them a `radius` of `5` units, too.

For the `text` elements, apply the scales to set the `x` and `y` attributes. The labels should be offset to the right of the dots. To do this, add `10` units to the `x` data value before passing it to the `xScale`.

```js
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
]

const w = 500
const h = 500
const padding = 60

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding])

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding])

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  // Add your code below this line
  .attr('cx', (d) => xScale(d[0]))
  .attr('cy', (d) => yScale(d[1]))
  .attr('r', 5)

// Add your code above this line

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text((d) => d[0] + ', ' + d[1])
  // Add your code below this line
  .attr('x', (d) => xScale(d[0] + 10))
  .attr('y', (d) => yScale(d[1]))

// Add your code above this line
```

Tests
Waiting:Your code should have 10 circle elements.
Waiting:The first circle element should have a cx value of approximately 91 and a cy value of approximately 368 after applying the scales. It should also have an r value of 5.
Waiting:The second circle element should have a cx value of approximately 159 and a cy value of approximately 181 after applying the scales. It should also have an r value of 5.
Waiting:The third circle element should have a cx value of approximately 340 and a cy value of approximately 329 after applying the scales. It should also have an r value of 5.
Waiting:The fourth circle element should have a cx value of approximately 131 and a cy value of approximately 60 after applying the scales. It should also have an r value of 5.
Waiting:The fifth circle element should have a cx value of approximately 440 and a cy value of approximately 237 after applying the scales. It should also have an r value of 5.
Waiting:The sixth circle element should have a cx value of approximately 271 and a cy value of approximately 306 after applying the scales. It should also have an r value of 5.
Waiting:The seventh circle element should have a cx value of approximately 361 and a cy value of approximately 351 after applying the scales. It should also have an r value of 5.
Waiting:The eighth circle element should have a cx value of approximately 261 and a cy value of approximately 132 after applying the scales. It should also have an r value of 5.
Waiting:The ninth circle element should have a cx value of approximately 131 and a cy value of approximately 144 after applying the scales. It should also have an r value of 5.
Waiting:The tenth circle element should have a cx value of approximately 79 and a cy value of approximately 326 after applying the scales. It should also have an r value of 5.
Waiting:Your code should have 10 text elements.
Waiting:The first label should have an x value of approximately 100 and a y value of approximately 368 after applying the scales.
Waiting:The second label should have an x value of approximately 168 and a y value of approximately 181 after applying the scales.
Waiting:The third label should have an x value of approximately 350 and a y value of approximately 329 after applying the scales.
Waiting:The fourth label should have an x value of approximately 141 and a y value of approximately 60 after applying the scales.
Waiting:The fifth label should have an x value of approximately 449 and a y value of approximately 237 after applying the scales.
Waiting:The sixth label should have an x value of approximately 280 and a y value of approximately 306 after applying the scales.
Waiting:The seventh label should have an x value of approximately 370 and a y value of approximately 351 after applying the scales.
Waiting:The eighth label should have an x value of approximately 270 and a y value of approximately 132 after applying the scales.
Waiting:The ninth label should have an x value of approximately 140 and a y value of approximately 144 after applying the scales.
Waiting:The tenth label should have an x value of approximately 88 and a y value of approximately 326 after applying the scales.

### 29. Add Axes to a Visualization

Another way to improve the scatter plot is to add an x-axis and a y-axis.

D3 has two methods, `axisLeft()` and `axisBottom()`, to render the y-axis and x-axis, respectively. Here's an example to create the x-axis based on the `xScale` in the previous challenges:

```js
const xAxis = d3.axisBottom(xScale)
```

The next step is to render the axis on the SVG. To do so, you can use a general SVG component, the `g` element. The g stands for group. Unlike `rect`, `circle`, and `text`, an axis is just a straight line when it's rendered. Because it is a simple shape, using `g` works. The last step is to apply a transform attribute to position the axis on the SVG in the right place. Otherwise, the line would render along the border of the SVG and wouldn't be visible. SVG supports different types of transforms, but positioning an axis needs translate. When it's applied to the `g` element, it moves the whole group over and down by the given amounts. Here's an example:

```js
const xAxis = d3.axisBottom(xScale)

svg
  .append('g')
  .attr('transform', 'translate(0, ' + (h - padding) + ')')
  .call(xAxis)
```

The above code places the x-axis at the bottom of the SVG. Then it's passed as an argument to the `call()` method. The y-axis works in the same way, except the translate argument is in the form (x, 0). Because translate is a string in the `attr()` method above, you can use concatenation to include variable values for its arguments.

The scatter plot now has an x-axis. Create a y-axis in a variable named yAxis using the `axisLeft()` method. Then render the axis using a g element. Make sure to use a transform attribute to translate the axis by the amount of padding units right, and 0 units down. Remember to `call()` the axis.

```js
const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
]

const w = 500
const h = 500
const padding = 60

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding])

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding])

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', (d) => xScale(d[0]))
  .attr('cy', (d) => yScale(d[1]))
  .attr('r', (d) => 5)

svg
  .selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text((d) => d[0] + ',' + d[1])
  .attr('x', (d) => xScale(d[0] + 10))
  .attr('y', (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale)
// Add your code below this line
const yAxis = d3.axisLeft(yScale)
// Add your code above this line

svg
  .append('g')
  .attr('transform', 'translate(0,' + (h - padding) + ')')
  .call(xAxis)

// Add your code below this line

svg.append('g').attr('transform', `translate(${padding}, 0)`).call(yAxis)

// Add your code above this line
```

Tests
Waiting:Your code should use the axisLeft() method with yScale passed as the argument.
Waiting:The y-axis g element should have a transform attribute to translate the axis by (60, 0).
Waiting:Your code should call the yAxis.

## Relational Database

For these courses, you will use real developer tools and software including VS Code, PostgreSQL, and the Linux / Unix command line to complete interactive tutorials and build projects.

These courses start off with basic Bash commands. Using the terminal, you will learn everything from navigating and manipulating a file system, scripting in Bash, all the way to advanced usage.

Next, you will learn how to create and use a relational database with PostgreSQL, a database management system, and SQL, the language of these databases.

Finally, you will learn Git, the version control system, an essential tool of every developer.

### Learn Bash by Building a Boilerplate

The terminal allows you to send text commands to your computer that can manipulate the file system, run programs, automate tasks, and much more.

In this 170-lesson course, you will learn terminal commands by creating a website boilerplate using only the command line.

Create a GitHub account if you don't have one. You'll need it when you create the virtual Linux server machine. This process may take a few minutes.

# Learn Bash by Building a Boilerplate

> Welcome to the Introduction to Bash lessons. I know it's scary, but you can do this!

## 5. Restart Terminal

### 5.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 10. Print Working Directory

### 10.1

What you see in the terminal below is a folder (or directory) on this machine. Type `pwd` into the terminal and press enter to see the path of the folder. `pwd` stands for "print working directory".

#### HINTS

- Type `pwd` into the terminal and press enter
- Make sure you are in the `project` folder when you enter the command
- Enter `cd ~/project` to get to the `project` folder if you aren't there

## 20. List

### 20.1

The output tells you where the folder you are in is located. You are in the `project` folder, which is in the `CodeAlly` folder, which is in the `home` folder. Type `ls` into the terminal to see what's in this folder. `ls` stands for "list".

#### HINTS

- Type `ls` into the terminal and press enter
- Make sure you are in the `project` folder when you enter the command
- Enter `cd ~/project` to get to the `project` folder if you aren't there

## 30. Change Directory

### 30.1

The output is showing everything in this folder. There's two folders here. You can use `cd <folder_name>` to go into a folder. `cd` stands for "change directory". Change to the `freeCodeCamp` directory.

#### HINTS

- Capitalization matters
- Type `cd freeCodeCamp` into the terminal and press enter
- Make sure you start in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there

## 40. Print Working Directory

### 40.1

You are in the `freecodecamp` folder now. You may have noticed that the prompt changed to include it. Print the working directory of the `freeCodeCamp` folder to see the full path of where you are.

#### HINTS

- Use the "print working directory" command
- Type `pwd` into the terminal and press enter
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd ~/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 50. List

### 50.1

You can see the path of the `freeCodeCamp` folder. It's in the `project` folder you were just in. List the contents of the `freeCodeCamp` folder to see what's here.

#### HINTS

- Use the "list" command
- Try typing `ls` into the terminal
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd ~/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 60. Change Directory

### 60.1

There's two folders and three files here. The folders are blue and the files include their extension. Next, change to that `test` directory.

#### HINTS

- Use the "change directory" command
- Here's an example: `cd folder-name`
- Try entering `cd test`
- Make sure you enter the command from the `freeCodeCamp` folder
- Enter `cd ~/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 70. Print Working Directory

### 70.1

You can see you are in the `test` folder now. It shows `test` in the prompt. Print the full path of this directory. Remember that "folder" and "directory" are the same thing.

#### HINTS

- Use the "print working directory" command
- Type `pwd` into the terminal
- Make sure you are in the `test` folder first
- Enter `cd ~/project/freeCodeCamp/test` to get to the `test` folder if you aren't there

## 80. List

### 80.1

That's the path to the `test` folder, it's in the `freeCodeCamp` folder. **List** the contents of this folder.

#### HINTS

- Use the "list" command
- Type `ls` into the terminal
- Make sure you are in the `test` folder first
- Enter `cd ~/project/freeCodeCamp/test` to get to the `test` folder if you aren't there

## 90. Change Directory

### 90.1

These are all files. There's no more folders to go into here. You can use `cd ..` to go back a folder level. The two dots will take you back one level. Go back to the `freeCodeCamp` folder.

#### HINTS

- Use the "change directory" command
- Type `cd ..` into the terminal end press enter
- Type the command from the `test` folder
- Enter `cd ~/project/freeCodeCamp/test` to get to the `test` folder if you aren't there

## 100. List

### 100.1

`test` got removed from the prompt since you left that folder and you're back in the `freeCodeCamp` folder. List the contents of what's here to remind yourself.

#### HINTS

- Use the "list" command
- Type `ls` into the terminal
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd ~/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 110. More

### 110.1

There's the `test` folder you were just in. You can see what's in a file with `more <filename>`. Use it to view what's in the `package.json` file.

#### HINTS

- Type `more package.json` into the terminal
- Press enter until you have seen the whole file
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd ~/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 120. Clear

### 120.1

It looks like a JSON object. You can empty the terminal with `clear`. The terminal looks a little cluttered, why don't you clear it.

#### HINTS

- Commands are case sensitive
- Enter `clear` into the terminal

## 130. List

### 130.1

Now you have a fresh screen :smile: List what's in here again.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `freeCodeCamp` folder first
- Enter `cd ~/project/freeCodeCamp` to get to the `freeCodeCamp` folder if you aren't there

## 140. Change Directory

### 140.1

You checked out the `test` folder and the `package.json` file. What next? Why don't you go into that `node_modules` directory.

#### HINTS

- Use the "change directory" command
- Here's an example: `cd <folder_name>`
- Enter `cd node_modules` into the terminal
- Enter `cd ~/project/freeCodeCamp` to get back to the `freeCodeCamp` folder and try again

## 150. List

### 150.1

Now the prompt includes `node_modules` since that's where you are. List what's in the folder.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `node_modules` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules` to get to the `node_modules` folder if you aren't there

## 160. Long List Format

### 160.1

That's a lot of folders. You can add a **flag** to a command to use it different ways like this: `ls <flag>`. List the contents of the `node_modules` folder in "long list format". Do that by adding the `-l` flag to the "list" command.

#### HINTS

- Use the "list" command
- Add the `-l` flag to the command
- That's a lowercase letter `l`, not the number `1`
- Enter `ls -l` into the terminal
- Make sure you are in the `node_modules` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules` to get to the `node_modules` folder if you aren't there

## 170. Change Directory

### 170.1

It is showing more details about each item in here and it's a little easier to read. One of the folders is named `has`, why don't you change into it.

#### HINTS

- Use the "change directory" command
- Enter `cd has` into the terminal
- Enter the command from the `node_modules` folder
- Enter `cd ~/project/freeCodeCamp/node_modules` to get to the `node_modules` folder if you aren't there

## 180. List

### 180.1

You are now in the `has` folder. List its contents.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Enter the command from the `has` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 181. More

### 181.1

There's a few files and folders here. Can you tell the difference? Take a look at **more** of that `README.md` file.

#### HINTS

- Commands and filenames are case sensitive
- Use the "more" command
- Enter `more README.md` into the terminal
- Press "enter" until you have seen the whole file
- Make sure you are in the `has` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 182. List

### 182.1

Nothing noteworthy in there. You can't see what's in the here anymore, list the contents again.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `has` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 183. More

### 183.1

That one file doesn't appear to have an extension. Strange. Take a look at **more** of the that "license" file that doesn't show an extension.

#### HINTS

- Use the "more" command
- Enter `more LICENSE-MIT` into the terminal
- Press "enter" until you have seen the whole file
- Make sure you are in the `has` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 184. Clear

### 184.1

Pretend you read all that. It looks a little messy in here again so why don't you clear the terminal.

#### HINTS

- Use the "clear" command
- Enter `clear` into the terminal

## 185. List

### 185.1

Better. Remind yourself what's in here with the list command.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `has` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 190. Change Directory

### 190.1

Go into that `src` directory to see what you can find in there.

#### HINTS

- Use the "change directory" command
- Enter `cd src` into the terminal
- Make sure you are in the `has` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 200. Print Working Directory

### 200.1

View the full path of this folder.

#### HINTS

- Use the "print working directory" command
- Enter `pwd` into the terminal
- Make sure you are in the `src` folder
- Enter `cd ~/project/freeCodeCamp/node_modules/has/src` to get to the `src` folder if you aren't there

## 210. List

### 210.1

Getting deeper still. You can see that each new folder has a `/` in front of it. Take a look at what's in this folder.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `src` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has/src` to get to the `src` folder if you aren't there

## 220. More

### 220.1

Only one file here. Show me what's in it with `more`.

#### HINTS

- Use the `more` command
- Here's and example: `more filename`
- Enter `more index.js` into the terminal
- Press enter until you've seen all the content
- Make sure you are in the `src` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has/src` to get to the `src` folder if you aren't there

## 230. Change Directory

### 230.1

It's some JavaScript :smile: I think you've fooled around enough. Why don't you navigate out of here. Change back to the `has` directory.

#### HINTS

- Use the "change directory" command
- Add `..` after `cd` to go back a folder
- Type `cd ..` into the terminal
- Make sure you are in the `src` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has/src` to get to the `src` folder if you aren't there

## 240. Change Directory

### 240.1

You're getting pretty good. Change back to the `node_modules` directory.

#### HINTS

- Use the same `cd` command as the last lesson
- You can press the up arrow to cycle through previous commands
- Type `cd ..` into the terminal
- Make sure you are in the `has` folder first
- Enter `cd ~/project/freeCodeCamp/node_modules/has` to get to the `has` folder if you aren't there

## 250. Change Directory

### 250.1

You can go back two folders with `cd ../..`. Each set of dots represents another folder level. Go back to the `project` directory from the `node_modules` directory.

#### HINTS

- Be sure to go back two folders with one command
- Type `cd ../..` into the terminal from the `node_modules` folder
- Make sure you go from `node_modules` to `project`
- Enter `cd ~/project/freeCodeCamp/node_modules` to get to the `node_modules` folder if you aren't there

## 260. List

### 260.1

You are back in the `project` folder where you started. List what's in here again.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there

## 270. Clear

### 270.1

That's right. Why don't you get a fresh start by clearing the terminal.

#### HINTS

- Use the "clear" command
- Enter `clear` into the terminal

## 280. Make Directory

### 280.1

You will be making a website boilerplate. You can make a new folder with `mkdir <folder_name>`. `mkdir` stands for "make directory". Make a `website` directory in this `project` folder. Remember that "directory" and "folder" mean the same thing.

#### HINTS

- Enter `mkdir website` into the terminal
- Make sure to make it in the `project` folder
- Don't try to create it with a different method
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there

## 285. List

### 285.1

List what's here to make sure it got created.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 290. Change Directory

### 290.1

It worked. The website files will be in the new directory. Change to the `website` directory so you can start creating them.

#### HINTS

- Use the "change directory" command
- Enter `cd website` into the terminal
- Enter the command from the `project` folder
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 300. List

### 300.1

List the contents of the `website` folder.

#### HINTS

- Use the "list" command
- Enter `ls` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 310. Echo

### 310.1

It's brand new, there's nothing in it yet. The `echo` command lets you print anything to the terminal. You used it in the first lesson. Just type what you want to print after it. Use it to print `hello website` to the terminal.

#### HINTS

- Here's an example: `echo <text_here>`
- Capitalization matters
- Enter `echo hello website` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 320. Touch

### 320.1

Websites usually have an `index.html` file. You can use `touch <filename>` to create a new file. Create `index.html` in the `website` folder.

#### HINTS

- Be sure to include the filename and extension
- Don't try to create the file with another method
- Capitalization matters
- Enter `touch index.html` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 330. Touch

### 330.1

They usually have a CSS file as well. Create `styles.css` in the `website` folder using the same method.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch styles.css` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 340. List

### 340.1

List the contents of the `website` folder to make sure they got created.

#### HINTS

- Use the `list` command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 350. Touch

### 350.1

There they are. Next is a JavaScript file. Create `index.js` in the `website` folder with the method you have been using.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch index.js` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 360. Touch

### 360.1

You might turn this into a git repository. Create `.gitignore` in the `website` folder with the same method.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch .gitignore` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 370. List

### 370.1

List the contents of the `website` folder to see your new files.

#### HINTS

- Use the `list` command
- Make sure you are in the `website` folder
- Enter `ls` in the terminal
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 380. Help

### 380.1

There's three files, but where's the `.gitignore` file? I think it's hidden. Most commands have a `--help` flag to show what the command can do. Display the "help" menu for the `ls` command. Here's an example: `command <flag>`

#### HINTS

- Use the `list` command with the "help" flag
- You previously used: `ls -l`
- Enter `ls --help` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 390. List All

### 390.1

Scroll through the menu to see the flags that go with `ls`. The flag you are looking for is `--all`, or `-a` for short. List **all** the contents of the `website` folder using the correct flag.

#### HINTS

- Use the `list` command with the "all" flag
- Here's an exmple: `command <flag>`
- Enter `ls -a` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 400. Change Directory

### 400.1

There's the hidden file. Do you see it? It didn't display before. It also includes `.` and `..`. You used `cd ..` to go back a folder earlier. Change to the `.` directory.

#### HINTS

- Use the "change directory" command
- Enter `cd .` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 410. Touch

### 410.1

You didn't go anywhere. The `.` takes you to the folder you are in, and `..` takes you back, or up, a folder. Websites need some images. Create `background.jpg` in the `website` folder.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch background.jpg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 420. Touch

### 420.1

Next, add a header image. Create `header.png` in the `website` folder.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch header.png` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 430. Touch

### 430.1

Finally, create `footer.jpeg` in the `website` folder.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <filename>`
- Don't try to create the file with another method
- Enter `touch footer.jpeg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 440. List

### 440.1

Use the **list** command to check out the images you just added.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 450. Touch

### 450.1

Looks like images show up in pink. There's also three fonts to use for the website. The first one is "roboto". Create `roboto.font` in the `website` folder.

#### HINTS

- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch roboto.font` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 460. Touch

### 460.1

The next one is "lato". Create `lato.font` in the `website` folder.

#### HINTS

- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch lato.font` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 470. Touch

### 470.1

Lastly, create `menlo.font` in the `website` folder.

#### HINTS

- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch menlo.font` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 480. List

### 480.1

List the contents of this folder to see your new font files.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 490. Touch

### 490.1

Your three font files are there. There's three icons for the website as well. Create `CodeAlly.svg` in the `website` folder.

#### HINTS

- Capitalization matters
- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch CodeAlly.svg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 500. Touch

### 500.1

Next, create `CodeRoad.svg` in the `website` folder.

#### HINTS

- Capitalization matters
- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch CodeRoad.svg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 510. Touch

### 510.1

Finally, create `freeCodeCamp.svg` in the `website` folder.

#### HINTS

- Capitalization matters
- Use the "touch" command
- Don't try to create the file with another method
- Enter `touch freeCodeCamp.svg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 520. List

### 520.1

Check out the new icons you just added by listing the contents of the folder they are in.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 530. Make Directory

### 530.1

The icons are pink as well. I think the images should go in a separate folder to clean it up a little. Make an `images` directory in the `website` folder to put them in.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- Add the folder name after the command
- Here's an example: `mkdir <folder_name>`
- Enter `mkdir images` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 540. List

### 540.1

List the contents of the `website` folder to make sure your new folder is there.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 550. Copy

### 550.1

There's your new `images` folder. It's blue. You can copy a file with `cp <file> <destination>`. `cp` stands for "copy". Copy `background.jpg` to your `images` folder.

#### HINTS

- Enter `cp background.jpg images` into the terminal
- Don't try to use a different method to copy it
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 560. Change Directory

### 560.1

Better make sure it worked. Change to the `images` directory.

#### HINTS

- Use the "change directory" command
- Enter `cd images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 570. List

### 570.1

List the contents to see if `background.jpg` is here.

#### HINTS

- Use the "list" command
- Make sure you are in the `images` folder
- Enter `ls` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 580. Change Directory

### 580.1

There it is. Looks like the copy worked. Change back to the `website` directory so you can copy the other ones.

#### HINTS

- Use the "change directory" command
- Add `..` to the command to go back a folder
- Enter `cd ..` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 585. List

### 585.1

Remind yourself of the files here by listing the contents.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 590. Remove

### 590.1

You copied the background image to the `images` folder so you don't need the one here anymore. You can remove a file with `rm <filename>`. Remove `background.jpg` from the `website` folder.

#### HINTS

- Enter `rm background.jpg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 600. List

### 600.1

List the contents to make sure it's gone.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 610. Copy

### 610.1

Okay, it's gone. Next, copy `header.png` to the `images` folder.

#### HINTS

- Here's the example again: `cp <file> <destination>`
- You previously used `cp background.jpg images`
- Don't try to use a different method to copy it
- Enter `cp header.png images`
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 620. Copy

### 620.1

Last, copy the "footer" image to the `images` folder.

#### HINTS

- Here's the example again: `cp <file> <destination>`
- You previously used `cp header.png images`
- Don't try to use a different method to copy it
- Enter `cp footer.jpeg images`
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 630. Change Directory

### 630.1

All the images should be copied over. Change to the `images` directory so you can make sure.

#### HINTS

- Use the "change directory" command
- Add the path of where you want to go to the command
- Enter `cd images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 640. List

### 640.1

Check if the images are here by listing the contents.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 650. Change Directory

### 650.1

They all made it here. Go back to the `website` folder so you can delete the original files.

#### HINTS

- Use the "change directory" command
- Add `..` to the command to go back a folder
- Enter `cd ..` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 660. List

### 660.1

List the contents to remind yourself of the filenames to delete.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 670. Remove

### 670.1

There's two that you don't need anymore. Remove the "header" image file from the `website` folder since you copied to the images folder.

#### HINTS

- Use the "remove" command
- Here's an example: `rm <filename>`
- You previously used `rm background.jpg`
- It's the `header.png` file
- Enter `rm header.png` in the terminal
- Don't try to use a different method to delete the file
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 680. Remove

### 680.1

It should be gone. Remove the "footer" image from the `website` folder as well.

#### HINTS

- Use the "remove" command
- You previously used `rm header.png`
- The file to remove is `footer.jpg`
- Don't try to use a different method to delete the file
- Enter `rm footer.jpeg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 690. List

### 690.1

List the contents of the `website` folder to check if they are gone.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 700. Rename

### 700.1

Looks like they're all deleted. There was a mistake with the extensions for the font files. You can rename them with `mv` like this: `mv <filename> <new_filename>`. `mv` stands for "move", it can **rename or move** something. Rename `roboto.font` to `roboto.woff`.

#### HINTS

- Enter `mv roboto.font roboto.woff`
- Don't try to rename it with other methods
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 710. List

### 710.1

Use "list" to check if it worked.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 720. Rename

### 720.1

Do you see the "roboto" font? The rename worked. Next, rename the "lato" font file to `lato.ttf`.

#### HINTS

- Use the "move" command to rename a file
- Here's the example: `mv <filename> <new_filename>`
- You previously used: `mv roboto.font roboto.woff`
- It's the `lato.font` file
- Don't try to rename it with other methods
- Enter `mv lato.font lato.ttf`
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 730. Rename

### 730.1

Lastly, rename the "menlo" font to `menlo.otf`.

#### HINTS

- Use the "move" command to rename a file
- Here's the example: `mv <filename> <new_filename>`
- You previously used: `mv lato.font lato.ttf`
- It's the `menlo.font` file
- Don't try to rename it with other methods
- Enter `mv menlo.font menlo.otf`
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 740. List

### 740.1

Use the "list" command to make sure those last two got renamed.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 750. Make Directory

### 750.1

Take a look at the files to make sure they got renamed. Those font files could be organized into a folder as well. Make a `fonts` directory in the `website` folder to put them in.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- Here's an example: `mkdir <directory_name>`
- Don't try to create the folder with another method
- Enter `mkdir fonts` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 755. List

### 755.1

List the contents of the `website` folder to make sure your new folder is there.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 760. Move

### 760.1

See it? You renamed the font files with `mv`, you can also move files with it. Move the "roboto" font to the new `fonts` folder. Here's an example: `mv <file> <destination>`.

#### HINTS

- Use the "move" command
- The file to move is `roboto.woff`
- Don't try to move the file with another method
- Enter `mv roboto.woff fonts`
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 770. Find

### 770.1

You can use `find` to find things or view a file tree. Enter `find` to view the file tree of the `website` folder to see all the files and folders within it.

#### HINTS

- Use the "find" command
- Make sure you are in the `website` folder
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 780. Move

### 780.1

You can see everything in this `website` folder and its descendant folders. Notice that they all start with `./` to represent this folder. You can see that your font moved to the `fonts` folder. Next, move the "lato" font to the `fonts` folder.

#### HINTS

- Use the "move" command
- Here's an example: `mv <file> <destination>`
- The file to move is `lato.ttf`
- You previously used: `mv roboto.woff fonts`
- Don't try to move the file with another method
- Enter `mv lato.ttf fonts`
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 790. Move

### 790.1

There's one more font to move. Move the "menlo" font to the `fonts` folder.

#### HINTS

- Use the "move" command
- Here's an example: `mv <file> <destination>`
- The file to move is `menlo.otf`
- You previously used: `mv lato.ttf fonts`
- Don't try to move the file with another method
- Enter `mv menlo.otf fonts`
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 800. Find

### 800.1

Use `find` again to list the whole file tree and make sure those two got moved.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 850. Make Directory

### 850.1

Yes, you can see them all in the `fonts` folder. Let's organize some more. Make a `client` directory in the `website` folder for the client side files.

#### HINTS

- Use the "make directory" command
- Here's an example: `mkdir <directory_name>`
- Enter `mkdir client` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 860. Make Directory

### 860.1

You can make a folder in that `client` folder from here by adding it to the path like this: `mkdir client/<new_folder_name>`. Make a `src` directory in the `client` folder from here.

#### HINTS

- Use the "make directory" command
- Enter `mkdir client/src` from the `website` folder
- Don't try to create the folder with another method
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 870. Move

### 870.1

You can move files all the way across the system from here with the right path. Move `index.html` to the `client/src` folder from here.

#### HINTS

- Use the "move" command
- You previously used: `mv menlo.otf fonts`
- Enter `mv index.html client/src` from the `website` folder
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 880. Find

### 880.1

Use `find` to view the file tree and make sure it moved.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 890. Move

### 890.1

Can you see the `index.html` file in your new `src` folder? Looks like it moved :smile: There's some more files that can go in the `src` folder. Move `index.js` to it from here.

#### HINTS

- Use the "move" command
- You previously used: `mv index.html client/src`
- Enter `mv index.js client/src` from the `website` folder
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 900. Move

### 900.1

Last is the CSS file. Move `styles.css` to the `src` folder.

#### HINTS

- Use the "move" command
- Don't try to move the file with another method
- You've used `mv index.js client/src` to move a file
- Enter `mv styles.css client/src` from the `website` folder
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 910. Find

### 910.1

Seems like you can do anything right from here. Take another look at the tree with `find`.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 920. Find Subfolder

### 920.1

Things are looking more organized :smile: You can use `find <folder_name>` to display the tree of a different folder. View the file tree of the `client` folder from the `website` folder.

#### HINTS

- Use the "find" command
- Add `client` at the end of the command
- Enter `find client` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 930. Find

### 930.1

Now you just see what's in the `client` folder. What else can `find` do? View the "help" menu of the `find` command to look around.

#### HINTS

- Use the "find" command with the "help" flag
- The help flag is: `--help`
- You previously used `ls --help`
- Enter `find --help` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 940. Find

### 940.1

The menu isn't very pretty, but there's a `-name` flag in there. You can use it to search for something with `find -name <filename>`. Use `find` with the `-name` flag to search for `index.html`.

#### HINTS

- Enter `find -name index.html` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 950. Find

### 950.1

It shows you where that file is. Using the same command, find where the `styles.css` file is.

#### HINTS

- Use the "find" command with the "name" flag and the filename
- The name flag is: `-name`
- You previously used `find -name index.html`
- Enter `find -name style.css` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 960. Find

### 960.1

You can search for folders with it, as well. Using the same command and flag, find the `src` folder.

#### HINTS

- Use the "find" command with the "name" flag
- The name flag is: `-name`
- You previously used `find -name index.html`
- Enter `find -name src` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 970. Find

### 970.1

:smile: View the file tree of the `website` folder to see what else you need to do.

#### HINTS

- Use the "find" command
- Don't use any flags this time
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 980. Change Directory

### 980.1

What's next? More organizing! You should put all the assets in one spot. Change into the `client` folder.

#### HINTS

- Use the "change directory" command
- Enter `cd client` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 990. Make Directory

### 990.1

Make a new directory named `assets` in the `client` folder.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- Here's an example: `mkdir <directory_name>`
- You previously used `mkdir client`
- Enter `mkdir assets` in the terminal
- Make sure you are in the `client` folder first
- Enter `cd ~/project/website/client` to get to the `client` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1000. Change Directory

### 1000.1

Change into the new `assets` folder.

#### HINTS

- Use the "change directory" command
- It's the `cd` command
- Enter `cd assets` in the terminal
- Make sure you are in the `client` folder first
- Enter `cd ~/project/website/client` to get to the `client` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1010. Make Directory

### 1010.1

All the images and other assets can go here. Make an `images` directory in the `assets` folder for all the images.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- You previously used `mkdir assets`
- Enter `mkdir images` in the terminal
- Make sure you are in the `assets` folder first
- Enter `cd ~/project/website/client/assets` to get to the `assets` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1020. Change Directory

### 1020.1

Go to your new `images` folder.

#### HINTS

- Use the "change directory" command
- It's the `cd` command
- Enter `cd images` in the terminal
- Make sure you are in the `assets` folder first
- Enter `cd ~/project/website/client/assets` to get to the `assets` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1030. Touch

### 1030.1

You want the images here. Create `background.jpg` in this folder.

#### HINTS

- Use the "touch" command
- You previously used `touch freeCodeCamp.svg`
- Enter `touch background.jpg` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/client/assets/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1040. Change Directory

### 1040.1

Wait. You don't need to recreate them. You can just move the other images here. Go back to the `website` folder from here. It's three folder back.

#### HINTS

- Use the "change directory" command
- You went back two folders with `cd ../..`
- Enter `cd ../../..` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/client/assets/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1050. Change Directory

### 1050.1

Now go to where the original images are. Change into the `images` folder.

#### HINTS

- Use the "change directory" command
- Enter `cd images` in the terminal from the `website` folder
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1055. List

### 1055.1

List the contents of the `images` folder to see the files here.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1060. Move

### 1060.1

Umm, first I think you should move them back to the website folder. Move `header.png` back to the `website` folder. The destination for the file is `..`

#### HINTS

- Use the "move" command
- Here's an example: `mv <file> <destination>`
- Don't try to move the file with another method
- Enter `mv header.png ..` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1065. List

### 1065.1

List the contents of the `images` folder to see if it's gone.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1070. Change Directory

### 1070.1

It's gone. Go back to the `website` folder.

#### HINTS

- Use the "change directory" command
- Enter `cd ..` in the terminal from the `images` folder
- Make sure you are in the `images` folder first
- Enter `cd ~/project/website/images` to get to the `images` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1080. List

### 1080.1

List what's here.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1090. Find

### 1090.1

There's the file you just moved. Next, you will move it to the `client/assets/images` folder. First, use `find` with the correct flag to search for `images`.

#### HINTS

- Use the "find" command with the "name" flag
- The name flag is: `-name`
- Here's an example `find -name <folder>`
- You previously used `find -name src`
- Enter `find -name images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1100. Move

### 1100.1

There's your two image folders. Move `header.png` to the one with the longer path. Just use it as the destination to do so.

#### HINTS

- Use the "move" command
- Here's an example: `mv <file> <destination>`
- The destination you want is `client/assets/images`
- Don't try to move the file with another method
- Enter `mv header.png client/assets/images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1110. Find

### 1110.1

Use `find` to search for your `header.png` file and make sure it moved.

#### HINTS

- Don't forget the correct flag
- You want the "name" flag
- The name flag is: `-name`
- You previously used `find -name images`
- Enter `find -name header.png` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1120. Find

### 1120.1

There it is. Right where you put it. Next, search for your `footer.jpeg` file so you can move that over there.

#### HINTS

- Use the "find" command with the "name" flag
- The name flag is: `-name`
- You previously used `find -name header.png`
- Enter `find -name footer.jpeg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1130. Move

### 1130.1

It's in the original `images` folder. You can **use that path** with the move command to move it. Move `footer.jpeg` to the `client/assets/images` folder while in the `website` folder.

#### HINTS

- Use the "move" command
- You previously used `mv header.png client/assets/images`
- Make sure you put in the correct two paths
- The first path is `images/footer.jpeg`
- The second path is `client/assets/images`
- Enter `mv images/footer.jpeg client/assets/images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1135. Find

### 1135.1

View the file tree of this folder to make sure all your images are over in their new folder. Don't use any flags.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1150. Remove Directory

### 1150.1

You don't need the old `images` folder anymore. You can use `rmdir <directory_name>` to remove a folder. `rmdir` stands for "remove directory". Try to remove the `images` folder with `rmdir`. Make sure it's the one in the `website` folder.

#### HINTS

- Enter `rmdir images` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1170. Remove

### 1170.1

Directory not empty? Oh yeah, there's still the background image in there. Remove the background image file in the `images` folder from here. Make sure it's the one in the `website/images` folder.

#### HINTS

- Use the `rm` command
- Here's an example: `rm <file_path>`
- The file path you want is `images/background.jpg`
- Enter `rm images/background.jpg` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1190. Remove Directory

### 1190.1

Try to remove the `images` folder again with `rmdir`. Make sure it's the one in the `website` folder.

#### HINTS

- Use the "remove directory" command
- Enter `rmdir images` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1195. List

### 1195.1

I think it worked this time. List the contents to find out.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1200. Make Directory

### 1200.1

It worked, the `images` folder is gone. Make a new `icons` folder in your `assets` folder while in the `website` folder.

#### HINTS

- Use the `mkdir` command
- Your `assets` folder is in the `client` folder
- Don't try to create the directory with another method
- Enter `mkdir client/assets/icons` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1210. Move

### 1210.1

Move the `CodeAlly.svg` file to your new `icons` folder.

#### HINTS

- Use the "move" command
- Here's a tip: `mv CodeAlly.svg <path_to_icons_folder>`
- The destination path is `client/assets/icons`
- Enter `mv CodeAlly.svg client/assets/icons` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1215. Find

### 1215.1

View the file tree of the `website` folder and make sure it moved.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1220. Move

### 1220.1

Verify that the file moved to the `icons` folder. Next, move the "CodeRoad" file to your `icons` folder.

#### HINTS

- Use the "move" command
- The filename is `CodeRoad.svg`
- Here's a tip: `mv CodeRoad.svg <path_to_icons_folder>`
- Enter `mv CodeRoad.svg client/assets/icons` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1230. Move

### 1230.1

Lastly, move the "freeCodeCamp" file to your `icons` folder.

#### HINTS

- Use the "move" command
- Here's a tip: `mv freeCodeCamp.svg <path_to_icons_folder>`
- The path is `client/assets/icons`
- Enter `mv freeCodeCamp.svg client/assets/icons` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1240. Find

### 1240.1

View the file tree and make sure the files moved.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1250. Make Directory

### 1250.1

This looks much better. The three icons are now in the `icons` folder. Make a `fonts` folder in your `assets` folder from here for all the font files.

#### HINTS

- Use the `mkdir` command
- Put the `fonts` folder in the `client/assets` folder
- Enter `mkdir client/assets/fonts` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1260. Touch

### 1260.1

Turns out you want some different fonts for the website. From here, create `roboto-bold.woff` in your new `fonts` folder. You can put the path in front of the filename of where you want it to go.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <path/filename>`
- The file needs to be created in the `client/assets/fonts` folder
- Enter `touch client/assets/fonts/roboto-bold.woff` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1270. Touch

### 1270.1

Next, create `roboto-light.woff` in your new `fonts` folder from here.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <path/filename>`
- Put the file in the `client/assets/fonts` folder
- You previously used: `touch client/assets/fonts/roboto-bold.woff`
- Enter `touch client/assets/fonts/roboto-light.woff` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1275. Find

### 1275.1

View the file tree of the `client/assets/fonts` folder from here to see if your new files are there.

#### HINTS

- Use the "find" command with the folder path you want to see
- Here's an example: `find <path_to_folder>`
- Enter `find client/assets/fonts` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1280. Touch

### 1280.1

Two more fonts to go. Create `lato-bold.ttf` in the new `fonts` folder from here.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <path/filename>`
- Put the file in the `client/assets/fonts` folder
- You previously used: `touch client/assets/fonts/roboto-light.woff`
- Enter `touch client/assets/fonts/lato-bold.ttf` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1290. Touch

### 1290.1

Lastly, create `lato-light.ttf` in your new `fonts` folder from here.

#### HINTS

- Use the "touch" command
- Here's an example: `touch <path/filename>`
- You previously used: `touch client/assets/fonts/lato-bold.ttf`
- Enter `touch client/assets/fonts/lato-light.ttf` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1300. Find

### 1300.1

View your file tree and make sure the files are there.

#### HINTS

- Use the "find" command
- Enter `find` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1310. Remove Help

### 1310.1

Things are looking more organized :smile: The new fonts are there. Now you can remove the old `fonts` folder and everything in it. You can't do that with `rmdir` since it's not empty. View the "help" menu of the `rm` command to see if you can find anything.

#### HINTS

- Use the "remove" command with the "help" flag
- The "help" flag is `--help`
- Enter `rm --help` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1315. Remove Recursively

### 1315.1

There's a `-r` flag that says, `remove directories and their contents recursively`. That will remove the folder and everything in it. Use the "remove" command with that flag to remove the `fonts` folder. Make sure it's the one in the `website` folder. Be careful not to remove the wrong folder.

#### HINTS

- The "remove" command is `rm`
- The flag you want is `-r`
- Here's an example: `rm -r <folder>`
- Enter `rm -r fonts` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there

## 1320. List

### 1320.1

List what's here to see if it's gone.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1330. Touch

### 1330.1

Looks like it’s gone. Surely, it went to the trash can right? No, it’s just gone. You should **be very careful when recursively removing files** like that. It will delete everything, and can destroy your operating system. There's a few more files for the boilerplate. Create `package.json` in the `website` folder.

#### HINTS

- Use the "touch" command
- Enter `touch package.json` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1340. Touch

### 1340.1

Next, create `server.js` in the `website` folder.

#### HINTS

- Use the "touch" command
- Enter `touch server.js` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1350. Touch

### 1350.1

Lastly, create `README.md` in the `website` folder.

#### HINTS

- Use the "touch" command
- Capitalization matters
- Enter `touch README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1360. List

### 1360.1

List the content of this folder to make sure your new files are there.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1370. Echo

### 1370.1

The boilerplate is complete. Use `echo` to print `Yay!` to the terminal.

#### HINTS

- Use the "echo" command
- Here's an example: `echo <text>`
- Enter `echo Yay!` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1380. Echo

### 1380.1

Print `I finished the boilerplate!` to the terminal.

#### HINTS

- Use the "echo" command
- Enter `echo I finished the boilerplate!` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1390. Echo

### 1390.1

Print `one more thing...` to the terminal

#### HINTS

- Use the "echo" command
- Enter `echo one more thing...` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1400. Echo to File

### 1400.1

You can print to a file instead of the terminal with `echo text >> filename`. Use it to print `I made this boilerplate` to your `README.md` file.

#### HINTS

- Use the "echo" command
- Enter `echo I made this boilerplate >> README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1405. More

### 1405.1

Use `more` to view your `README.md` file.

#### HINTS

- Use the "more" command
- Enter `more README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1410. Echo to File

### 1410.1

Now that line is in the file. Add `from the command line` to your `README.md` file with the `echo` command and the same method.

#### HINTS

- Use the "echo" command with `>>` to add text to a file
- Here's an example: `echo <text> >> <filename>`
- You previously used: `echo I made this boilerplate >> README.md`
- Enter `echo from the command line >> README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1415. More

### 1415.1

Use `more` to view the "readme" file again.

#### HINTS

- Use the "more" command
- Enter `more README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1420. Echo to File

### 1420.1

Now the file has two lines. Add `for the freeCodeCamp bash lessons` to your "readme" file with the `echo` command like you did before.

#### HINTS

- Use the "echo" command with `>>` to add text to a file
- Here's an example: `echo <text> >> <filename>`
- You previously used: `echo from the command line >> README.md` in the terminal
- Enter `echo for the freeCodeCamp bash lessons >> README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1430. More

### 1430.1

View your "readme" file again like you did before.

#### HINTS

- Use the "more" command
- Enter `more README.md` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1440. Change Directory

### 1440.1

:smile: Change to the `project` folder.

#### HINTS

- Use the "change directory" command
- Enter `cd ..` in the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1445. List

### 1445.1

You are back where you started. List what's here.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1450. Rename

### 1450.1

Still the same two folders. Rename the `website` folder to `website-boilerplate`.

#### HINTS

- Use the "move" command
- You previously used: `mv menlo.font menlo.otf` to rename a file
- Here's an example: `mv <folder_name> <new_folder_name>`
- Enter `mv website website-boilerplate` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1460. List

### 1460.1

List the contents of this folder to see the new name.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1470. Copy Help

### 1470.1

Thanks for making this. You need to make a copy of it. Take a look at the "help" menu of the "copy" command.

#### HINTS

- The "copy" command is `cp`
- The "help" flag is `--help`
- Enter `cp --help` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1475. Copy

### 1475.1

Scroll up to find that "recursive" flag. You need to use it again to copy the whole folder. Copy the whole boilerplate into a folder named `toms-website`.

#### HINTS

- The "copy" command is `cp`
- The "recursive" flag is `-r`
- Here's an example: `cp -r <folder_to_copy> <name_of_copy>`
- Enter `cp -r website-boilerplate toms-website` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1480. List

### 1480.1

List the contents of the `project` folder to see the new copy.

#### HINTS

- Use the "list" command
- Enter `ls` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1490. Find

### 1490.1

Thanks. Use `find` to view the tree of `toms-website`.

#### HINTS

- Use the "find" command
- Add the folder name to the command
- Here's an example: `find <folder_name>`
- It's the `toms-website` folder
- Enter `find toms-website` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1500. Find

### 1500.1

Use `find` to view the tree of the boilerplate folder to make sure it matches.

#### HINTS

- Use the "find" command
- Add the folder name to the command
- It's the `website-boilerplate` folder
- Enter `find website-boilerplate` in the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- If you used the reset button, you may need to enter the above command to get to the correct folder even if it looks like you're already there

## 1510. Clear

### 1510.1

Awesome! You are finished for now. Clear the terminal one last time.

#### HINTS

- Use the "clear" command
- Enter `clear` into the terminal

## 1520. Echo

### 1520.1

Print "goodbye terminal" to the terminal.

#### HINTS

- Use the "echo" command
- Here's an example: `echo <text>`
- Enter `echo goodbye terminal` into the terminal

## 1530. Exit

### 1530.1

Use the "exit" command to exit the terminal.

#### HINTS

- Enter `exit` into the terminal
- Have a nice day

### Learn Relational Databases by Building a Mario Database

A relational database organizes data into tables that are linked together through relationships.

In this 165-lesson course, you will learn the basics of a relational database by creating a PostgreSQL database filled with video game characters.

# Learn Relational Databases by Building a Mario Database

> Welcome to the Relational Database Lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello PostgreSQL` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. Login

### 20.1

Your virtual machine comes with PostgreSQL installed. You will use the Psql terminal application to interact with it. Log in by typing `psql --username=freecodecamp --dbname=postgres` into the terminal and pressing enter.

#### HINTS

- Capitalization matters
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal and press enter
- If the terminal isn't open, find the "hamburger" menu at the top left of the window, navigate to the "Terminal" tab, and click "New Terminal"

## 30. View Databases

### 30.1

Notice that the prompt changed to let you know that you are now interacting with PostgreSQL. First thing to do is see what databases are here. Type `\l` into the prompt to **l**ist them.

#### HINTS

- Type `\l` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 40. Create `first_database`

### 40.1

The databases you see are there by default. You can make your own like this:

```sql
CREATE DATABASE database_name;
```

The capitalized words are keywords telling PostgreSQL what to do. The name of the database is the lowercase word. Note that **all commands need a semi-colon at the end.** Create a new database named `first_database`.

#### HINTS

- Don't forget the semi-colon at the end
- Type `CREATE DATABASE first_database;` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 50. View `first_database`

### 50.1

Use the **l**ist shortcut command again to make sure your new database is there.

#### HINTS

- Type `\` followed by the "list" shortcut letter
- Enter `\l` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 60. Create `second_database`

### 60.1

It worked. Your new database is there. If you don't get a message after entering a command, it means it's incomplete and you likely forgot the semi-colon. You can just add it on the next line and press enter to finish the command. Create another database named `second_database`.

#### HINTS

- Use the "CREATE DATABASE" keywords
- Here's the example again: `CREATE DATABASE database_name;`
- Don't forget the semi-colon
- Try entering `CREATE DATABASE second_database;`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 70. View Databases

### 70.1

You should have another new database now. **L**ist the databases to make sure.

#### HINTS

- Use the **l**ist shortcut command
- Enter `\l` into the prompt
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 80. Connect to `second_database`

### 80.1

You can **c**onnect to a database by entering `\c database_name`. You need to connect to add information. Connect to your `second_database`.

#### HINTS

- Enter `\c second_database` into the psql prompt to connect
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 90. View `second_database` Tables

### 90.1

You should see a message that you are connected. Notice that the prompt changed to `second_database=>`. So the `postgres=>` prompt before must have meant you were connected to that database. A database is made of tables that hold your data. Enter `\d` to **d**isplay the tables.

#### HINTS

- Type `\d` in the prompt and press enter
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 100. Create `first_table`

### 100.1

Looks like there's no tables or relations yet. Similar to how you created a database, you can create a table like this:

```sql
CREATE TABLE table_name();
```

Note that the parenthesis are needed for this one. It will create the table in the database you are connected to. Create a table named `first_table` in `second_database`.

#### HINTS

- Enter `CREATE TABLE first_table();` into the prompt
- Don't forget the semi-colon
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 110. View `second_database` Tables

### 110.1

View the tables in `second_database` again with the **d**isplay command. You should see your new table there with a little meta data about it.

#### HINTS

- Use the **d**isplay shortcut command
- Try entering `\d` into the prompt
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 120. Create `second_table`

### 120.1

Create another new table in this database. Give it a name of `second_table`.

#### HINTS

- Use the "CREATE TABLE" keywords
- Don't forget the parenthesis and semi-colon at the end
- Here's an example: `CREATE TABLE table_name();`
- Enter `CREATE TABLE second_table();` into the prompt
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 130. View `second_database` Tables

### 130.1

There should be two tables in this database now. **D**isplay them again to make sure.

#### HINTS

- Use the **display** shortcut command
- Enter `\d` into the prompt
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 140. View `second_table` Details

### 140.1

You can view more details about a table by adding the table name after the **d**isplay command like this: `\d table_name`. View more details about your `second_table`.

#### HINTS

- Enter `\d second_table` into the prompt
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 150. Create `first_column`

### 150.1

Tables need **columns** to describe the data in them, yours doesn't have any yet. Here's an example of how to add one:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE;
```

Add a column to `second_table` named `first_column`. Give it a data type of `INT`. `INT` stands for integer. Don't forget the semi-colon. :smile:

#### HINTS

- Try entering `ALTER TABLE second_table ADD COLUMN first_column INT;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 160. View `second_table` Details

### 160.1

Looks like it worked. **D**isplay the details of `second_table` again to see if your new column is there.

#### HINTS

- Use the **d**isplay shortcut command
- Put the table name after the command
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 170. Add `id` Column

### 170.1

Your column is there :smile: Use `ALTER TABLE` and `ADD COLUMN` to add another column to `second_table` named `id` that's a type of `INT`.

#### HINTS

- Here's the example again: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Don't forget the semi-colon :wink:
- You added the last column with: `ALTER TABLE second_table ADD COLUMN first_column INT;`
- Try entering `ALTER TABLE second_table ADD COLUMN id INT;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 180. View `second_table` Details

### 180.1

Your table should have an `id` column added. View the details of `second_table` to make sure.

#### HINTS

- Use the **d**isplay command
- Add a table name after the **d**isplay command to view details
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 190. Add `age` Column

### 190.1

Add another column to `second_table` named `age`. Give it a data type of `INT`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's the example again: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- You added the last column with: `ALTER TABLE second_table ADD COLUMN id INT;`
- Try using `ALTER TABLE second_table ADD COLUMN age INT;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 200. View `second_table` Details

### 200.1

Take a look at the details of `second_table` again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the shortcut command to see details
- Here's an example: `\d table_name`
- Enter `\d second_table`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 210. Drop `age` Column

### 210.1

Those are some good looking columns. You will probably need to know how to remove them. Here's an example:

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

Drop your `age` column.

#### HINTS

- Try entering `ALTER TABLE second_table DROP COLUMN age;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 220. View `second_table` Details

### 220.1

View the details of `second_table` to see if it's gone.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the shortcut command to see details
- Here's an example: `\d table_name`
- Enter `\d second_table`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 230. Drop `first_column` Column

### 230.1

It's gone. Use the `ALTER TABLE` and `DROP COLUMN` keywords again to drop `first_column`.

#### HINTS

- Here's the example again: `ALTER TABLE table_name DROP COLUMN column_name;`
- You dropped the last column with: `ALTER TABLE second_table DROP COLUMN age;`
- Try entering `ALTER TABLE second_table DROP COLUMN first_column;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 240. Add `name` Column

### 240.1

A common data type is `VARCHAR`. It's a short string of characters. You need to give it a maximum length when using it like this: `VARCHAR(30)`.

Add a new column to `second_table`, give it a name of `name` and a data type of `VARCHAR(30)`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- You added the last column like this: `ALTER TABLE second_table ADD COLUMN age INT;`
- Try entering `ALTER TABLE second_table ADD COLUMN name VARCHAR(30);`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 250. View `second_table` Details

### 250.1

Take a look at the details of `second_table` to see your columns.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d second_table`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 260. Rename `name` Column

### 260.1

You can see the `VARCHAR` type there. The `30` means the data in it can be a max of 30 characters. You named that column `name`, it should have been `username`. Here's how you can rename a column:

```sql
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;
```

Rename the `name` column to `username`.

#### HINTS

- Use `second_table` as the table name, `name` as the column name, and `username` as the new name for the column
- Try entering `ALTER TABLE second_table RENAME COLUMN name TO username;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 270. View `second_table` Details

### 270.1

Take a look at the details of `second_table` again to see if it got renamed.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Enter `\d second_table`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 280. Insert Samus Row

### 280.1

It worked. Rows are the actual data in the table. You can add one like this:

```sql
INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);
```

Insert a row into `second_table`. Give it an `id` of `1`, and a `username` of `Samus`. The username column expects a `VARCHAR`, so you need to put Samus in single quotes like this: `'Samus'`.

#### HINTS

- The table is `second_table`, the column names are `id` and `username`, and the values to add are `1` and `'Samus'`
- Don't forget the semi-colon
- Try entering `INSERT INTO second_table(id, username) VALUES(1, 'Samus');`
- If you missed a matching single quote, try entering `');` to finish the command and try again
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 290. View `second_table` Data

### 290.1

You should have one row in your table. You can view the data in a table by querying it with the `SELECT` statement. Here's how it looks:

```sql
SELECT columns FROM table_name;
```

Use a `SELECT` statement to view **all** the columns in `second_table`. Use an asterisk (`*`) to denote that you want to see all the columns.

#### HINTS

- Replace `columns` in the example with the all (`*`) symbol
- Use `second_table` as the table name
- Enter `SELECT * FROM second_table;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 300. Insert Mario Row

### 300.1

There's your one row. **Insert** another row **into** `second_table`. Fill in the `id` and `username` columns with the **values** `2` and `'Mario'`.

#### HINTS

- Here's the example: `INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);`
- Did you make `Mario` a string?
- You added the last row with `INSERT INTO second_table(id, username) VALUES(1, 'Samus');`
- Try entering `INSERT INTO second_table(id, username) VALUES(2, 'Mario');`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 310. View `second_table` Data

### 310.1

You should now have two rows in the table. Use `SELECT` again to view **all** the columns and rows **from** `second_table`.

#### HINTS

- Here's the example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM second_table;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 320. Insert Luigi Row

### 320.1

**Insert** another row **into** `second_table`. Use `3` as the `id`, and `Luigi` as the `username` this time.

#### HINTS

- Did you put `Luigi` in single quotes?
- Here's the example: `INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);`
- You added the last row with `INSERT INTO second_table(id, username) VALUES(2, 'Mario');`
- Try entering `INSERT INTO second_table(id, username) VALUES(3, 'Luigi');`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 330. View `second_table` Data

### 330.1

You should now have three rows. Use `SELECT` again to see **all** the data you entered.

#### HINTS

- Here's the example again: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM second_table;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 340. Delete Luigi Row

### 340.1

That gives me an idea :smiley: You can make a database of Mario video game characters. You should start from scratch for it. Why don't you delete the record you just entered. Here's an example of how to delete a row:

```sql
DELETE FROM table_name WHERE condition;
```

Remove Luigi from your table. The condition you want to use is `username='Luigi'`.

#### HINTS

- Check your table name and condition closely
- Try entering `DELETE FROM second_table WHERE username='Luigi';`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 350. View `second_table` Data

### 350.1

Luigi should be gone. Use `SELECT` again to see all the data and make sure he's not there.

#### HINTS

- Here's the example: `SELECT columns FROM table_name;`
- Use `*` to see all the columns
- Try `SELECT * FROM second_table;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 360. Delete Mario Row

### 360.1

It's gone. You can scrap all this for the new database. **Delete** Mario **from** `second_table` using the same command as before, except make the condition `username='Mario'` this time.

#### HINTS

- Use the `DELETE FROM` and `WHERE` keywords
- Here's the example: `DELETE FROM table_name WHERE condition;`
- You deleted Luigi with `DELETE FROM second_table WHERE username='Luigi';`
- Try entering `DELETE FROM second_table WHERE username='Mario';`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 370. Delete Samus Row

### 370.1

Only one more row should remain. **Delete** Samus **from** `second_table`.

#### HINTS

- Here's the example: `DELETE FROM table_name WHERE condition;`
- You deleted Mario with `DELETE FROM second_table WHERE username='Mario';`
- Use `username='Samus'` as the condition
- Try entering `DELETE FROM second_table WHERE username='Samus';`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 380. View `second_table` Data

### 380.1

Use `SELECT` again to see all the rows in `second_table` to make sure they're gone.

#### HINTS

- Here's the example `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Enter `SELECT * FROM second_table;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 390. View `second_table` Details

### 390.1

Looks like they're all gone. Remind yourself what columns you have in `second_table` by looking at its **d**etails.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the shortcut command
- Here's an example: `\d table_name`
- Try `\d second_table`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 400. Drop `username` Column

### 400.1

There's two columns. You won't need either of them for the Mario database. **Alter** the **table** `second_table` and **drop** the **column** `username`.

#### HINTS

- Use the `ALTER TABLE` and `DROP COLUMN` keywords
- Here's an example: `ALTER TABLE table_name DROP COLUMN column_name;`
- You dropped a column before with: `ALTER TABLE second_table DROP COLUMN age;`
- Try `ALTER TABLE second_table DROP COLUMN username;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 410. Drop `id` Column

### 410.1

Next, drop the `id` column.

#### HINTS

- Use the `ALTER TABLE` and `DROP COLUMN` keywords
- Here's an example: `ALTER TABLE table_name DROP COLUMN column_name;`
- You previously dropped a column with `ALTER TABLE second_table DROP COLUMN username;`
- Enter `ALTER TABLE second_table DROP COLUMN id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 420. View `second_database` Tables

### 420.1

Okay, the table has no rows or columns left. View the tables in this database to see what is here.

#### HINTS

- Use the **d**isplay shortcut command
- You don't need a table name with the command
- Try entering `\d`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 430. Drop `second_table`

### 430.1

Still two. You won't need either of those for the new database either. Drop `second_table` from your database. Here's an example:

```sql
DROP TABLE table_name;
```

#### HINTS

- Enter `DROP TABLE second_table;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 440. Drop `first_table`

### 440.1

Next, drop `first_table` from the database.

#### HINTS

- Here's an example: `DROP TABLE table_name;`
- Enter `DROP TABLE first_table;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 450. View Databases

### 450.1

All the tables are gone now, too. View all the databases using the command to **l**ist them.

#### HINTS

- Use the **l**ist shortcut command
- Enter `\l` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 460. Rename `first_database`

### 460.1

Rename `first_database` to `mario_database`. You can rename a database like this:

```sql
ALTER DATABASE database_name RENAME TO new_database_name;
```

#### HINTS

- Try entering `ALTER DATABASE first_database RENAME TO mario_database;`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 470. View Databases

### 470.1

List the databases to make sure it got renamed.

#### HINTS

- Use the **l**ist shortcut command
- Enter `\l`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 480. Connect to `mario_database`

### 480.1

**C**onnect to your newly named database so you can start adding your characters.

#### HINTS

- Use the `\c` shortcut command to connect to a database
- Add the database name after the command
- Here's an example: `\c database_name`
- Enter `\c mario_database`
- Enter `psql --username=freecodecamp --dbname=second_database` into the terminal to log in if you aren't already

## 490. Drop `second_database`

### 490.1

Now that you aren't connected to `second_database`, you can drop it. Use the `DROP DATABASE` keywords to do that.

#### HINTS

- Add the database name after the keywords
- Don't forget the semi-colon
- Here's an example: `DROP DATABASE database_name;`
- Enter `DROP DATABASE second_database;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 500. View Databases

### 500.1

List the databases again to make sure it's gone.

#### HINTS

- Use the **l**ist shortcut command
- Enter `\l`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 530. Display `mario_database` Tables

### 530.1

Okay, I think you're ready to get started. I don't think you created any tables here, take a look to make sure.

#### HINTS

- Use the **d**isplay shortcut command
- Try entering `\d`
- Try entering `\c mario_database`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 540. Create `characters` Table

### 540.1

Create a new table named `characters`, it will hold some basic information about Mario characters.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis and semi-colon at the end
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE characters();`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 550. Add `character_id` column

### 550.1

Next, you can add some columns to the table. Add a column named `character_id` to your new table that is a type of `SERIAL`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE;`
- Try entering `ALTER TABLE characters ADD COLUMN character_id SERIAL;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 560. View `characters` Details

### 560.1

The `SERIAL` type will make your column an `INT` with a `NOT NULL` constraint, and automatically increment the integer when a new row is added. View the details of the `characters` table to see what `SERIAL` did for you.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d characters`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 570. Add `name` Column

### 570.1

Add a column to `characters` called `name`. Give it a data type of `VARCHAR(30)`, and a constraint of `NOT NULL`. Add a constraint by putting it right after the data type.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT;`
- Try entering `ALTER TABLE characters ADD COLUMN name VARCHAR(30) NOT NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 580. Add `homeland` Column

### 580.1

You can make another column for where they are from. Add another column named `homeland`. Give it a data type of `VARCHAR` that has a max length of `60`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE characters ADD COLUMN homeland VARCHAR(60);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 590. Add `favorite_color` Column

### 590.1

Video game characters are quite colorful. Add one more column named `favorite_color`. Make it a `VARCHAR` with a max length of `30`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE characters ADD COLUMN favorite_color VARCHAR(30);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 600. View `characters` Details

### 600.1

You should have four columns in `characters`. Take a look at the details of it to see how things are going.

#### HINTS

- Use the **d**isplay shortcut command
- Add a table name to the shortcut command to see details
- Here's an example: `\d table_name`
- Try entering `\d characters`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 610. Insert Mario Row

### 610.1

You are ready to start adding some rows. First is Mario. Earlier, you used this command to add a row:

```sql
INSERT INTO second_table(id, username) VALUES(1, 'Samus');
```

The first parenthesis is for the column names, you can put as many columns as you want. The second parenthesis is for the values for those columns. Add a row to your table, give it a `name` of `Mario`, a `homeland` of `Mushroom Kingdom`, and a `favorite_color` of `Red`. Make sure to use single quotes where needed.

#### HINTS

- Here's an example: `INSERT INTO table_name(column1, column2, column3) VALUES(value1, value2, value3);`
- Try using `INSERT INTO characters(name, homeland, favorite_color) VALUES('Mario', 'Mushroom Kingdom', 'Red');`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 620. View `characters` Data

### 620.1

Mario should have a row now and his `character_id` should have been automatically added. View **all** the data in your `characters` table with `SELECT` to see this.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 630. Insert Luigi Row

### 630.1

Add another row for Luigi. Give it a `name` of `Luigi`, a `homeland` of `Mushroom Kingdom`, and a `favorite_color` of `Green`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column1, column2, column3) VALUES(value1, value2, value3);`
- Don't forget the quotes and semi-colon
- Try using `INSERT INTO characters(name, homeland, favorite_color) VALUES('Luigi', 'Mushroom Kingdom', 'Green');`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 640. View `characters` Data

### 640.1

View all the data in your `characters` table with `SELECT` again.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 650. Insert Peach Row

### 650.1

Okay, it looks like it's all working. Add another row for Peach. Give her the values: `Peach`, `Mushroom Kingdom`, and `Pink`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column1, column2, column3) VALUES(value1, value2, value3);`
- Don't forget the quotes and semi-colon
- Try using `INSERT INTO characters(name, homeland, favorite_color) VALUES('Peach', 'Mushroom Kingdom', 'Pink');`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 660. Add Toadstool and Bowser Rows

### 660.1

Adding rows one at a time is quite tedious. Here's an example of how you could have added the previous three rows at once:

```sql
INSERT INTO characters(name, homeland, favorite_color)
VALUES('Mario', 'Mushroom Kingdom', 'Red'),
('Luigi', 'Mushroom Kingdom', 'Green'),
('Peach', 'Mushroom Kingdom', 'Pink');
```

Add two more rows. Give the first one the values: `Toadstool`, `Mushroom Kingdom`, and `Red`. Give the second one: `Bowser`, `Mushroom Kingdom`, and `Green`. Try to add them with one command.

#### HINTS

- Make sure you added commas and quotes where needed
- Try entering `INSERT INTO characters(name, homeland, favorite_color) VALUES('Toadstool', 'Mushroom Kingdom', 'Red'), ('Bowser', 'Mushroom Kingdom', 'Green');` in the psql prompt
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 670. Add Daisy and Yoshi Rows

### 670.1

If you don't get a message after a command, it is likely incomplete. This is because you can put a command on multiple lines. Add two more rows. Give the first one the values: `Daisy`, `Sarasaland`, and `Yellow`. The second: `Yoshi`, `Dinosaur Land`, and `Green`. Try to do it with one command.

#### HINTS

- Make sure you added commas and quotes where needed
- You previously used `INSERT INTO characters(name, homeland, favorite_color) VALUES('Toadstool', 'Mushroom Kingdom', 'Red'), ('Bowser', 'Mushroom Kingdom', 'Green');`
- Try entering `INSERT INTO characters(name, homeland, favorite_color) VALUES('Daisy', 'Sarasaland', 'Yellow'), ('Yoshi', 'Dinosaur Land', 'Green');`
- If you missed a matching single quote, try entering `');` to finish the command
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 680. View `characters` Data

### 680.1

Take a look at all the data in your table with `SELECT` to see where you stand.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try `SELECT * FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 690. Update Daisy's `favorite_color`

### 690.1

It looks good, but there's a few mistakes. You can change a value like this:

```sql
UPDATE table_name SET column_name=new_value WHERE condition;
```

You used `username='Samus'` as a condition earlier. `SET` Daisy's `favorite_color` to `Orange`. You can use the condition `name='Daisy'` to change her row.

#### HINTS

- There should be two sets of single quotes in this command
- Without the keywords, it looks like this: `characters favorite_color='Orange' name='Daisy';`
- Try `UPDATE characters SET favorite_color='Orange' WHERE name='Daisy';`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 700. View `characters` Data

### 700.1

The command you just used does exactly what it sounds like. It finds the row where `name` is `Daisy`, and sets her `favorite_color` to `Orange`. Take a look at all the data in your table again to see if she got updated.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try `SELECT * FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 710. Update Toadstool's `name`

### 710.1

Her favorite color was updated. Toadstool's name is wrong as well, it's actually `Toad`. Use `UPDATE` to `SET` his `name` to `Toad`. Use the condition `favorite_color='Red'`.

#### HINTS

- Here's an example: `UPDATE table_name SET column_name=new_value WHERE condition;`
- Here's the second part of the command: `SET name='Toad' WHERE favorite_color='Red';`
- Try entering `UPDATE characters SET name='Toad' WHERE favorite_color='Red';`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 720. View `characters` Data

### 720.1

Take a look at all the data in your table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try `SELECT * FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 730. Update Mario's `name`

### 730.1

Using `favorite_color='Red'` was not a good idea. Mario's name changed to Toad because he likes red, and now there's two rows that are the same. Well, almost. Only the `character_id` is different. You will have to use that to change it back to `Mario`. Use `UPDATE` to set the `name` to `Mario` for the row with the lowest `character_id`.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords and strings where needed
- Here's an example: `UPDATE table_name SET column_name=new_value WHERE condition;`
- Try entering `UPDATE characters SET name='Mario' WHERE character_id=1;` in the psql prompt. Or whatever the correct `character_id` is.
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 740. View `characters` Data

### 740.1

Take a look at all the data in your table again to see if Mario's name got changed back.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try `SELECT * FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 750. Update Toad's `favorite_color`

### 750.1

Looks like it worked. Toad's favorite color is wrong. He likes blue. Change Toad's favorite color to `Blue`. Use whatever condition you want, but don't change any of the other rows.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE table_name SET column_name=newvalue WHERE condition;`
- I recommend using `character_id=4` as the condition
- Try entering `UPDATE characters SET favorite_color='Blue' WHERE character_id=4;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 760. Update Bowser's `favorite_color`

### 760.1

Bowser's `favorite_color` is wrong. He likes `Yellow`. Why don't you update it without changing any of the other rows?

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE table_name SET column_name=new_value WHERE condition;`
- I recommend using `character_id=5` as the condition
- Try entering `UPDATE characters SET favorite_color='Yellow' WHERE character_id=5;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 770. Update Bowser's `homeland`

### 770.1

Bowser's `homeland` is wrong as well. He's from the `Koopa Kingdom`. Why don't you change it to that without changing any other rows?

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE table_name SET column_name=new_value WHERE condition;`
- I recommend using `character_id=5` as the condition
- Try entering `UPDATE characters SET homeland='Koopa Kingdom' WHERE character_id=5;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 780. View `characters` Data

### 780.1

Take a look at all the data in your table again to make sure there's no more issues.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example; `SELECT rows FROM table_name;`
- Try entering `SELECT * FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 790. View Sorted `characters` Data

### 790.1

Actually, you should put that in order. Here's an example:

```sql
SELECT columns FROM table_name ORDER BY column_name;
```

View all the data again, but put it in order by `character_id`.

#### HINTS

- Try entering `SELECT * FROM characters ORDER BY character_id;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 800. Add `name` Primary Key

### 800.1

It looks good. Next, you are going to add a **primary key**. It's a column that uniquely identifies each row in the table. Here's an example of how to set a `PRIMARY KEY`:

```sql
ALTER TABLE table_name ADD PRIMARY KEY(column_name);
```

The `name` column is pretty unique, why don't you set that as the primary key for this table.

#### HINTS

- You don't need quotes, but you do need a semi-colon :smile:
- Try entering `ALTER TABLE characters ADD PRIMARY KEY(name);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 810. View `characters` Details

### 810.1

You should set a primary key on every table and there can only be one per table. Take a look at the details of your `characters` table to see the primary key at the bottom.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d characters`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 820. Drop `name` Primary Key

### 820.1

You can see the key for your `name` column at the bottom. It would have been better to use `character_id` for the primary key. Here's an example of how to drop a constraint:

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

Drop the primary key on the `name` column. You can see the **constraint name** is `characters_pkey`.

#### HINTS

- Try using `ALTER TABLE characters DROP CONSTRAINT characters_pkey;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 830. View `characters` Details

### 830.1

View the details of the `characters` table to make sure it's gone.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d characters`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 840. Add `character_id` Primary Key

### 840.1

It's gone. Set the primary key again, but use the `character_id` column this time.

#### HINTS

- Use the `ALTER TABLE` and `ADD PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD PRIMARY KEY(column_name);`
- Try entering `ALTER TABLE characters ADD PRIMARY KEY(character_id);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 850. View `characters` Details

### 850.1

View the details of the `characters` table to see the new primary key.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d characters`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 860. Create `more_info` Table

### 860.1

That's better. The table looks complete for now. Next, create a new table named `more_info` for some extra info about the characters.

#### HINTS

- Use the `CREATE TABLE` keywords
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE more_info();`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 870. View `mario_database` Tables

### 870.1

View the tables in `mario_database` again with the **d**isplay command. You should have two tables now.

#### HINTS

- Don't put a table name after the command
- Enter the `\d` command
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 880. View `characters` Details

### 880.1

I wonder what that third one is. It says `characters_character_id_seq`. I think I have a clue. View the details of the `characters` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- You previously used `\d second_table`
- Enter `\d characters`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 890. Create `more_info_id` Column

### 890.1

That is what finds the next value for the `character_id` column. Add a column to your new table named `more_info_id`. Make it a type of `SERIAL`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE;`
- Try entering `ALTER TABLE more_info ADD COLUMN more_info_id SERIAL;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 895. Create `more_info` Primary Key

### 895.1

Set your new column as the primary key for this table.

#### HINTS

- Use the `ALTER TABLE` and `ADD PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD PRIMARY KEY(column_name);`
- Try entering `ALTER TABLE more_info ADD PRIMARY KEY(more_info_id);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 900. View `mario_database` Tables

### 900.1

View the tables in `mario_database` again with the display command. There should be another sequence there for the `more_info_id` because it also automatically increments.

#### HINTS

- Enter the `\d` command
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 910. Add `birthday` Column

### 910.1

There it is. Add another column to `more_info` named `birthday`. Give it a data type of `DATE`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE more_info ADD COLUMN birthday DATE;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 920. Add `height` Column

### 920.1

Add a `height` column to `more_info` that's a type of `INT`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE more_info ADD COLUMN height INT;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 930. Add `weight` Columns

### 930.1

Add a `weight` column. Give it a type of `NUMERIC(4, 1)`. That data type is for decimals. `NUMERIC(4, 1)` has up to four digits and one of them has to be to the right of the decimal.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`
- Try entering `ALTER TABLE more_info ADD COLUMN weight NUMERIC(4, 1);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 940. View `more_info` Details

### 940.1

Take a look at the details of `more_info` to see all your columns.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d more_info`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 950. Add `character_id` Foreign Key

### 950.1

There’s your four columns and the primary key you created at the bottom. To know what row is for a character, you need to set a **foreign key** so you can relate rows from this table to rows from your `characters` table. Here's an example that creates a column as a foreign key:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);
```

That's quite the command. In the `more_info` table, create a `character_id` column. Make it an `INT` and a foreign key that references the `character_id` column from the `characters` table. Good luck.

#### HINTS

- You can do it!
- Give it one more try
- Without the keywords, it looks like this: `more_info character_id characters(character_id);`
- Try this `ALTER TABLE more_info ADD COLUMN character_id INT REFERENCES characters(character_id);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 960. View `more_info` Details

### 960.1

To set a row in `more_info` for Mario, you just need to set the `character_id` (foreign key) value to whatever it is in the `characters` table. Take a look at the details of `more_info` to see your foreign key.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d more_info`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 970. Add `UNIQUE`

### 970.1

There's your foreign key at the bottom. These tables have a "one-to-one" relationship. **One** row in the `characters` table will be related to exactly **one** row in `more_info` and vice versa. Enforce that by adding the `UNIQUE` constraint to your foreign key. Here's an example:

```sql
ALTER TABLE table_name ADD UNIQUE(column_name);
```

Add the `UNIQUE` constraint to the column you just added.

#### HINTS

- It's the `character_id` column in `more_info`
- Try `ALTER TABLE more_info ADD UNIQUE(character_id);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 980. Add `NOT NULL`

### 980.1

The column should also be `NOT NULL` since you don't want to have a row that is for nobody. Here's an example:

```sql
ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;
```

Add the `NOT NULL` constraint to your foreign key column.

#### HINTS

- The foreign key column is `character_id` in the `more_info` table
- Try `ALTER TABLE more_info ALTER COLUMN character_id SET NOT NULL;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 990. View `more_info` Details

### 990.1

Take a look at the details of your `more_info` table to see all the keys and constraints you added.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d more_info`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1000. Select `character_id`

### 1000.1

The structure is set, now you can add some rows. First, you need to know what `character_id` you need for the foreign key column. You have viewed all columns in a table with `*`. You can pick columns by putting in the column name instead of `*`. Use `SELECT` to view the `character_id` column **from** the `characters` table.

#### HINTS

- Here's an example: `SELECT column FROM table_name;`
- Enter `SELECT character_id FROM characters;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1010. Select `character_id` and `name`

### 1010.1

That list of numbers doesn't really help. Use `SELECT` again to display both the `character_id` and `name` columns from the `characters` table. You can separate the column names with a comma to view both.

#### HINTS

- Here's an example: `SELECT column1, column2 FROM table_name;`
- Try entering `SELECT character_id, name FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1020. Add `more_info` for Mario

### 1020.1

That's better. You can see Mario's id there. Here's some more info for him:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1981-07-09 | 155    | 64.5   |

Add a row to `more_info` with the above data for Mario using the `INSERT INTO` and `VALUES` keywords. Be sure to set his `character_id` when adding him. Also, `DATE` values need a string with the format: `'YYYY-MM-DD'`.

#### HINTS

- Here's an example: `INSERT INTO table_name(columns) VALUES(values);`
- You previously used `INSERT INTO characters(name, homeland, favorite_color) VALUES('Luigi', 'Mushroom Kingdom', 'Green');`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1981-07-09', 155, 64.5, 1);`
- Or, enter the above command and replace the `1` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1030. View `more_info` Data

### 1030.1

View all the data in `more_info` to make sure it's looking good.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM more_info;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1040. Select `character_id` and `name`

### 1040.1

Next, you are going to add some info for Luigi. Use `SELECT` again to view the `character_id` and `name` columns **from** the `characters` table to find his id.

#### HINTS

- Here's an example: `SELECT column1, column2 FROM table_name;`
- Try entering `SELECT character_id, name FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1050. Add `more_info` for Luigi

### 1050.1

You can see Luigi's id there. Here's his info:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1983-07-14 | 175    | 48.8   |

Add a row in `more_info` for Luigi using the above info. Be sure to add his `character_id` as well.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Be sure to put `DATE` values in quotes with the format: `'YYYY-MM-DD'`
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1981-07-09', 155, 64.5, 1);`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1983-07-14', 175, 48.8, 2);`
- Or, enter the above command and replace the `2` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1060. View `more_info` Data

### 1060.1

View all the data in `more_info` to see more info for Luigi.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM more_info;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1070. Select `character_id` and `name`

### 1070.1

Peach is next. View the `character_id` and `name` columns from the `characters` table again so you can find her id.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT column1, column2 FROM table_name;`
- Try entering `SELECT character_id, name FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1080. Add `more_info` for Peach

### 1080.1

Here's the additional info for Peach:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1985-10-18 | 173    | 52.2   |

Add a row for Peach using the above info. Be sure to add her `character_id` as well.

#### HINTS

- Be sure to put `DATE` values in quotes with the format: `'YYYY-MM-DD'`
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1983-07-14', 175, 48.8, 2);`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1985-10-18', 173, 52.2, 3);`
- Or, enter the above command and replace the `3` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1090. Select Toad's `character_id` and `name`

### 1090.1

Toad is next. Instead of viewing all the rows to find his id, you can just view his row with a `WHERE` condition. You used several earlier to delete and update rows. You can use it to view rows as well. Here's an example:

```sql
SELECT columns FROM table_name WHERE condition;
```

A condition you used before was `username='Samus'`. Find Toad's id by viewing the `character_id` and `name` columns from `characters` for only his row.

#### HINTS

- Don't forget the semi-colon :smile:
- Use `name='Toad'` for the condition
- Try entering `SELECT character_id, name FROM characters WHERE name='Toad';`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1100. Add `more_info` for Toad

### 1100.1

Here's what Toad's info looks like:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1950-01-10 | 66     | 35.6   |

Add the above info for Toad. Be sure to add his `character_id`.

#### HINTS

- Put `DATE` values in quotes
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1985-10-18', 173, 52.2, 3);`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1950-01-10', 66, 35.6, 4);`
- Or, enter the above command and replace the `4` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1110. View `more_info` Data

### 1110.1

View all the data in `more_info` to see the rows you added.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM more_info;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1120. Select Bowser's Row

### 1120.1

Bowser is next. Find his id by viewing the `character_id` and `name` columns for only his row.

#### HINTS

- Use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example: `SELECT columns FROM table_name WHERE condition;`
- I recommend `name='Bowser'` as the condition
- Try entering `SELECT character_id, name FROM characters WHERE name='Bowser';`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1130. Add `more_info` for Bowser

### 1130.1

Here's what Bowser's info looks like:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1990-10-29 | 258    | 300    |

Add the above info for Bowser. Don't forget to add his `character_id`.

#### HINTS

- Be sure to put `DATE` values in quotes with the format: `'YYYY-MM-DD'`
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1950-01-10', 66, 35.6, 4);`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1990-10-29', 258, 300, 5);`
- Or, enter the above command and replace the `5` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1140. Select Daisy's Row

### 1140.1

Daisy is next. Find her id by viewing the `character_id` and `name` columns for only her row.

#### HINTS

- Use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example: `SELECT columns FROM table_name WHERE condition;`
- Use `name='Daisy'` as the condition
- Try entering `SELECT character_id, name FROM characters WHERE name='Daisy';`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1150. Add `more_info` for Daisy

### 1150.1

The info for Daisy looks like this:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1989-07-31 | NULL   | NULL   |

Add the above info for Daisy to `more_info`. Be sure to add her `character_id` as well. You can use `NULL` or simply not include the null columns when inserting.

#### HINTS

- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1990-10-29', 173, 300, 5);`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1989-07-31', NULL, NULL, 6);`
- Or, enter the above command and replace the `6` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1160. View `more_info` Data

### 1160.1

View all the data in `more_info` to see the rows you added.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to see all columns
- Try entering `SELECT * FROM more_info;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1170. Select Yoshi's `character_id` and `name`

### 1170.1

Null values show up as blank. Yoshi is last. Find his id by viewing the `character_id` and `name` columns for only his row.

#### HINTS

- Use the `SELECT`, `FROM` and `WHERE` keywords
- Here's an example: `SELECT columns FROM table_name WHERE condition;`
- Try entering `SELECT character_id, name FROM characters WHERE name='Yoshi';`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1180. Add `more_info` for Yoshi

### 1180.1

The info for Yoshi looks like this:

| birthday   | height | weight |
| ---------- | ------ | ------ |
| 1990-04-13 | 162    | 59.1   |

Add the above info for Yoshi to `more_info`. Be sure to include his `character_id`.

#### HINTS

- You got this one!
- You previously used `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1989-07-31', NULL, NULL, 6);`
- Try `INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1990-04-13', 162, 59.1, 7);`
- Or, enter the above command and replace the `7` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1190. View all `more_info` Data

### 1190.1

There should be a lot of data in `more_info` now. Take a look at **all** the rows and columns in it.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Try `SELECT * FROM more_info;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1200. Rename `height` Column

### 1200.1

It looks good. There is something you can do to help out though. What units do the `height` and `weight` columns use? It's centimeters and kilograms, but nobody will know. Rename the `height` column to `height_in_cm`.

#### HINTS

- Use the `ALTER TABLE`, `RENAME COLUMN` and `TO` keywords
- Here's an example: `ALTER TABLE table_name RENAME COLUMN column_name TO new_name;`
- Try `ALTER TABLE more_info RENAME COLUMN height TO height_in_cm;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1210. Rename `weight` Column

### 1210.1

Rename the `weight` column to `weight_in_kg`.

#### HINTS

- Use the `ALTER TABLE`, `RENAME COLUMN` and `TO` keywords
- Here's an example: `ALTER TABLE table_name RENAME COLUMN column_name TO new_name;`
- Try `ALTER TABLE more_info RENAME COLUMN weight TO weight_in_kg;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1230. View all `more_info` Data

### 1230.1

Take a quick look at all the data in `more_info` to see the new column names.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Try `SELECT * FROM more_info;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1240. Create `sounds` Table

### 1240.1

Next, you will make a `sounds` table that holds filenames of sounds the characters make. You created your other tables similar to this:

```sql
CREATE TABLE table_name();
```

Inside those parenthesis you can put columns for a table so you don't need to add them with a separate command, like this:

```sql
CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);
```

Create a new table named `sounds`. Give it a column named `sound_id` of type `SERIAL` and a constraint of `PRIMARY KEY`.

#### HINTS

- Try entering `CREATE TABLE sounds(sound_id SERIAL PRIMARY KEY);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1260. View `mario_database` Tables

### 1260.1

View the tables in `mario_database` to make sure it worked.

#### HINTS

- Use the **d**isplay shortcut command
- Try entering `\d`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1270. Add `filename` Column

### 1270.1

There's your `sounds` table. Add a column to it named `filename`. Make it a `VARCHAR` that has a max length of `40` and with constraints of `NOT NULL` and `UNIQUE`. You can put those constraints at the end of the query to add them all.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- Give it three properties: `VARCHAR(40) NOT NULL UNIQUE`
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINTS;`
- Try entering `ALTER TABLE sounds ADD COLUMN filename VARCHAR(40) NOT NULL UNIQUE;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1280. Add `sounds` Foreign Key

### 1280.1

You want to use `character_id` as a foreign key again. This will be a "one-to-many" relationship because **one** character will have **many** sounds, but no sound will have more than one character. Here's the example again:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT REFERENCES referenced_table_name(referenced_column_name);
```

Add a column to `sounds` named `character_id`. Give it the properties `INT`, `NOT NULL`, and set it as a foreign key that references `character_id` from `characters`.

#### HINTS

- You can do this!
- Give it one more try, take a close look at all those values and keywords
- Without the keywords, it looks like this: `sounds character_id characters(character_id);`
- Try using `ALTER TABLE sounds ADD COLUMN character_id INT NOT NULL REFERENCES characters(character_id);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1290. View `sounds` Details

### 1290.1

Take a look at the details of the `sounds` table to see all the columns.

#### HINTS

- Use the **d**isplay shortcut command
- Here's an example: `\d table_name`
- Try entering `\d sounds`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1300. View `characters` Data

### 1300.1

Next, you will add some rows. But first, view all the data in `characters` so you can find the correct id's again. **Order** them **by** `character_id` like you did earlier.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name ORDER BY column;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM characters ORDER BY character_id;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1310. Insert `its-a-me.wav`

### 1310.1

The first file is named `its-a-me.wav`. Insert it into the `sounds` table with Mario's id as the `character_id`.

#### HINTS

- Don't for get the quotes
- Use `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2);`
- Try `INSERT INTO sounds(filename, character_id) VALUES('its-a-me.wav', 1);`
- Or, enter the above command and replace the `1` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1320. Insert `yippee.wav`

### 1320.1

Add another row with a `filename` of `yippee.wav`. Use Mario's `character_id` again for the foreign key value.

#### HINTS

- Don't forget the quotes
- You previously used: `INSERT INTO sounds(filename, character_id) VALUES('its-a-me.wav', 1);`
- Try entering `INSERT INTO sounds(filename, character_id) VALUES('yippee.wav', 1);`
- Or, enter the above command and replace the `1` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1330. Insert `ha-ha.wav`

### 1330.1

Add another row to `sounds` for Luigi named `ha-ha.wav`. Use his `character_id` this time. Take a look at the data in `characters` to find his id if you need to.

#### HINTS

- You previously used: `INSERT INTO sounds(filename, character_id) VALUES('its-a-me.wav', 1);`
- Try entering `INSERT INTO sounds(filename, character_id) VALUES('ha-ha.wav', 2);`
- Or, enter the above command and replace the `2` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1340. Insert `oh-yeah.wav`

### 1340.1

Add another row with a filename of `oh-yeah.wav`. This one is for Luigi as well so use his `character_id` again.

#### HINTS

- Try `INSERT INTO sounds(filename, character_id) VALUES('oh-yeah.wav', 2);`
- Or, enter the above command and replace the `2` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1350. Insert Sounds for Peach

### 1350.1

Add two more rows for Peach sounds. The filenames are `yay.wav` and `woo-hoo.wav`. Don't forget her `character_id`. Try to do it with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- Find her `character_id` by viewing data in the `characters` table
- Try `INSERT INTO sounds(filename, character_id) VALUES('yay.wav', 3), ('woo-hoo.wav', 3);`
- Or, enter the above command and replace the `3` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1360. Insert Two More Sounds

### 1360.1

Add two more rows. The filenames are `mm-hmm.wav` and `yahoo.wav`. The first one is for Peach again, the second is for Mario, so use the correct foreign key values. Try to do it with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- Find their `character_id` by viewing data in the `characters` table
- Try `INSERT INTO sounds(filename, character_id) VALUES('mm-hmm.wav', 3), ('yahoo.wav', 1);`
- Or, enter the above command and replace the `3` and `1` with the correct `character_id`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1370. View `sounds` Data

### 1370.1

View all the data in the `sounds` table. You should be able to see the "one-to-many" relationship better. One character has many sounds.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM sounds;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1380. Create `actions` Table

### 1380.1

See the "one-to-many" relationship? Create another new table called `actions`. Give it a column named `action_id` that's a type of `SERIAL`, and make it the `PRIMARY KEY`. Try to create the table and add the column with one command.

#### HINTS

- Use `CREATE TABLE`, `SERIAL`, and `PRIMARY KEY`
- You previously used `CREATE TABLE sounds(sound_id SERIAL PRIMARY KEY);`
- Try entering `CREATE TABLE actions(action_id SERIAL PRIMARY KEY);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1390. Add `action` Column

### 1390.1

Add a column named `action` to your new table. Give it a type of `VARCHAR` that is a max length of `20` and has `UNIQUE` and `NOT NULL` constraints.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- You previously used `ALTER TABLE sounds ADD COLUMN filename VARCHAR(40) NOT NULL UNIQUE;`
- Try entering `ALTER TABLE actions ADD COLUMN action VARCHAR(20) UNIQUE NOT NULL;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1400. Insert `run`

### 1400.1

The actions table won't have any foreign keys. It's going to have a "many-to-many" relationship with the characters table. This is because **many** of the characters can perform **many** actions. You will see why you don't need a foreign key later. Insert a row into the `actions` table. Give it an `action` of `run`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Don't forget the single quotes
- Here's an example `INSERT INTO table(column) VALUES(value);`
- Try entering `INSERT INTO actions(action) VALUES('run');`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1410. Insert `jump`

### 1410.1

Insert another row into the `actions` table. Give it an `action` of `jump`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Don't forget the single quotes
- You previously used `INSERT INTO actions(action) VALUES('run');`
- Try entering `INSERT INTO actions(action) VALUES('jump');`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1420. Insert `duck`

### 1420.1

Add another action row with an `action` of `duck`.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Don't forget the single quotes
- You previously used `INSERT INTO actions(action) VALUES('jump');`
- Try entering `INSERT INTO actions(action) VALUES('duck');`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1430. View `actions` Data

### 1430.1

View all the data in `actions` to make sure there's no mistakes.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM actions;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1440. Create Junction Table

### 1440.1

It looks good. "Many-to-many" relationships usually use a **junction** table to link two tables together, forming two "one-to-many" relationships. Your `characters` and `actions` table will be linked using a junction table. Create a new table called `character_actions`. It will describe what actions each character can perform.

#### HINTS

- Use the `CREATE TABLE` keywords
- You previously used `CREATE TABLE more_info();`
- Try entering `CREATE TABLE character_actions();`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1450. Add `character_id` Column

### 1450.1

Your junction table will use the primary keys from the `characters` and `actions` tables as foreign keys to create the relationship. Add a column named `character_id` to your junction table. Give it the type of `INT` and constraint of `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- You previously used: `ALTER TABLE actions ADD COLUMN name VARCHAR(20) UNIQUE NOT NULL;`
- Try entering `ALTER TABLE character_actions ADD COLUMN character_id INT NOT NULL;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1460. Add `character_id` as Foreign Key

### 1460.1

The foreign keys you set before were added when you created the column. You can set an existing column as a foreign key like this:

```sql
ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
```

Set the `character_id` column you just added as a foreign key that references the `character_id` from the `characters` table.

#### HINTS

- Without the keywords, it looks like this: `character_actions character_id characters(character_id);`
- All the info you need is there, read it closely
- Try this: `ALTER TABLE character_actions ADD FOREIGN KEY(character_id) REFERENCES characters(character_id);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1470. View `character_actions` Details

### 1470.1

View the details of the `character_actions` table to see the foreign key you added.

#### HINTS

- Use the **d**isplay command
- Add the table name after the command
- Enter `\d character_actions`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1480. Add `action_id` Column

### 1480.1

Add another column to `character_actions` named `action_id`. Give it a type of `INT` and constraint of `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE` and `ADD COLUMN` keywords
- You previously used: `ALTER TABLE character_actions ADD COLUMN character_id INT NOT NULL;`
- Try entering `ALTER TABLE character_actions ADD COLUMN action_id INT NOT NULL;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1500. Add `action_id` as Foreign Key

### 1500.1

This will be a foreign key as well. Set the `action_id` column you just added as a foreign key that references the `action_id` column from the `actions` table.

#### HINTS

- Here's the example again: `ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);`
- Without the keywords, it looks like this: `character_actions action_id actions(action_id);`
- You previously used: `ALTER TABLE characters_actions ADD FOREIGN KEY(character_id) REFERENCES characters(character_id);`
- Here it is `ALTER TABLE character_actions ADD FOREIGN KEY(action_id) REFERENCES actions(action_id);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1510. View `character_actions` Details

### 1510.1

View the details of the `character_actions` table to see your keys.

#### HINTS

- Use the **d**isplay command
- Add the table name after the command
- Enter `\d character_actions`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1520. Create Composite Primary Key

### 1520.1

Every table should have a primary key. Your previous tables had a single column as a primary key. This one will be different. You can create a primary key from two columns, known as a **composite** primary key. Here's an example:

```sql
ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);
```

Use `character_id` and `action_id` to create a composite primary key for this table.

#### HINTS

- Try `ALTER TABLE character_actions ADD PRIMARY KEY(character_id, action_id);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1530. View `character_actions` Details

### 1530.1

This table will have multiple rows with the same `character_id`, and multiple rows the same `action_id`. So neither of them are unique. But you will never have the same `character_id` and `action_id` in a single row. So the two columns together can be used to uniquely identify each row. View the details of the `character_actions` table to see your composite key.

#### HINTS

- Use the **d**isplay command
- Add the table name after the command
- Enter `\d character_actions`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1540. Insert Yoshi Actions

### 1540.1

Insert three rows into `character_actions` for all the actions Yoshi can perform. He can perform all of them in the `actions` table. View the data in the `characters` and `actions` table to find the correct id's for the information.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(7, 1), (7, 2), (7, 3);`
- Or, enter the above command and use the correct id's
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1550. View `character_actions` Data

### 1550.1

View all the data in `character_actions` to see your rows.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM character_actions;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1560. Insert Daisy Actions

### 1560.1

Add three more rows into `character_actions` for all of Daisy's actions. She can perform all of the actions, as well.

#### HINTS

- View the data in the `characters` and `actions` table to find the correct id's for the information.
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(7, 1), (7, 2), (7, 3);`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(6, 1), (6, 2), (6, 3);`
- Or, enter the above command and use the correct id's
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1570. Insert Bowser Actions

### 1570.1

Bowser can perform all the actions. Add three rows to the table for him.

#### HINTS

- View the data in the `characters` and `actions` table to find the correct id's for the information.
- Use the `INSERT INTO` and `VALUES` keywords
- Use `1`, `2`, and `3` for the `action_id` values
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(6, 1), (6, 2), (6, 3);`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(5, 1), (5, 2), (5, 3);`
- Or, enter the above command and use the correct id's
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1580. Insert Toad Actions

### 1580.1

Next is Toad. Add three more rows for his actions.

#### HINTS

- Add a row into `character_actions` for each action `Toad` can perform
- View the data in the `characters` and `actions` table to find the correct id's for the information.
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(5, 1), (5, 2), (5, 3)`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(4, 1), (4, 2), (4, 3);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1590. Insert Peach Actions

### 1590.1

You guessed it. Peach can perform all the actions as well, so add three more rows for her.

#### HINTS

- Add a row into `character_actions` for each action `Peach` can perform
- View the data in the `characters` and `actions` table to find the correct id's for the information.
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(4, 1), (4, 2), (4, 3)`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(3, 1), (3, 2), (3, 3);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1600. Insert Luigi Actions

### 1600.1

Add three more rows for Luigi's actions.

#### HINTS

- Add a row into `character_actions` for each action `Luigi` can perform
- He can perform all the actions
- View the data in the `characters` and `actions` table to find the correct id's for the information.
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(3, 1), (3, 2), (3, 3)`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(2, 1), (2, 2), (2, 3);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1610. Insert Mario Actions

### 1610.1

Last is Mario, add three rows for his actions.

#### HINTS

- Add a row into `character_actions` for each action `Mario` can perform
- View the data in the `characters` and `actions` table to find the correct id's for the information.
- Here's an example: `INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2), (value_1, value_2);`
- You previously used `INSERT INTO character_actions(character_id, action_id) VALUES(2, 1), (2, 2), (2, 3)`
- Try `INSERT INTO character_actions(character_id, action_id) VALUES(1, 1), (1, 2), (1, 3);`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1620. View `character_actions` Data

### 1620.1

That was a lot of work. View all the data in `character_actions` to see the rows you ended up with.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM character_actions;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1630. Display Tables

### 1630.1

Well done. The database is complete for now. Take a look around to see what you ended up with. First, display all the tables you created.

#### HINTS

- Use the **d**isplay command
- Enter `\d`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1640. View `characters` Data

### 1640.1

There's five tables there. Nice job. Next, take a look at all the data in the `characters` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM characters;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1650. View `more_info` Data

### 1650.1

Those are some lovely characters. View all the data in the `more_info` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT columns FROM table_name;`
- Use `*` to select all the columns
- Try entering `SELECT * FROM more_info;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1660. Full Join `characters` on `more_info`

### 1660.1

You can see the `character_id` there so you just need to find the matching id in the `characters` table to find out who it's for. Or... You added that as a foreign key, that means you can get all the data from both tables with a `JOIN` command:

```sql
SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;
```

Enter a join command to see **all** the info from both tables. The two tables are `characters` and `more_info`. The columns are the `character_id` column from both tables since those are the linked keys.

#### HINTS

- Use `*` to see all the columns
- Give it one more try, read closely
- Without the keywords, it looks like this: `characters more_info characters.character_id = more_info.character_id`
- Try entering `SELECT * FROM characters FULL JOIN more_info ON characters.character_id = more_info.character_id;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1670. Full Join `characters` on `sounds`

### 1670.1

Now you can see all the info from both tables. If you recall, that's a "one-to-one" relationship. So there's one row in each table that matches a row from the other. Use another `JOIN` command to view the `characters` and `sounds` tables together. They both use the `character_id` column for their keys as well.

#### HINTS

- Here's the example again: `SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;`
- Use `*` to see all the columns
- You previously used `SELECT * FROM characters FULL JOIN more_info ON characters.character_id = more_info.character_id;`
- Try entering `SELECT * FROM characters FULL JOIN sounds ON characters.character_id = sounds.character_id;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already

## 1680. Join `character_actions` with `characters` and `actions`

### 1680.1

This shows the "one-to-many" relationship. You can see that some of the characters have more than one row because they have **many** sounds. How can you see all the info from the `characters`, `actions`, and `character_actions` tables? Here's an example that joins three tables:

```sql
SELECT columns FROM junction_table
FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column
FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;
```

Congratulations on making it this far. This is the last step. View all the data from `characters`, `actions`, and `character_actions` by joining all three tables. When you see the data, be sure to check the "many-to_many" relationship. Many characters will have many actions.

#### HINTS

- Use the `character_id` column to join `character_actions` and `characters`
- Use the `action_id` column to join `character_actions` and `actions`
- Without the keywords, it looks like this: `character_actions characters character_actions.character_id = characters.character_id actions character_actions.action_id = actions.action_id;`
- Try entering `SELECT * FROM character_actions FULL JOIN characters ON character_actions.character_id = characters.character_id FULL JOIN actions ON character_actions.action_id = actions.action_id;`
- Enter `psql --username=freecodecamp --dbname=mario_database` into the terminal to log in if you aren't already
- If the tests aren't running automatically, quit psql with `\q` and try logging in again

### Learn Bash Scripting by Building Five Programs

Bash scripts combine terminal commands and logic into programs that can execute or automate tasks, and much more.

In this 220-lesson course, you will learn more terminal commands and how to use them within Bash scripts by creating five small programs.

# Learn Bash Scripting by Building Five Programs

> Welcome to the Bash Scripting lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello bash` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 20. touch questionnaire.sh

### 20.1

You can run commands in the terminal or put them in a file to be run as a script. You will be making five small programs to learn some scripting. The first one will be a "questionnaire". Use the `touch` command to create `questionnaire.sh` in the `project` folder.

#### HINTS

- Type `touch questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 30. Add echo questionnaire

### 30.1

To start, open the file in the main editor by clicking the filename in the left side panel.
Then, add the text `echo hello questionnaire` at the top of the file.

#### HINTS

- If the left side panel isn't visible, click the icon that looks like two pieces of paper
  at the top left to open the panel. Then, click on your file to open it
- Add the suggested text to the `questionnaire.sh` file

## 35. sh questionnaire.sh

### 35.1

Your script has one command. Run it with `sh questionnaire.sh` to see what happens. `sh` stands for `shell`.

#### HINTS

- Type `sh questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 40. bash questionnaire.sh

### 40.1

Using `sh` to run your script uses the `shell` interpreter. Run your script again with `bash questionnaire.sh` to use the `bash` interpreter. `bash` stands for `bourne-again shell`.

#### HINTS

- Type `bash questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 50. which bash

### 50.1

The output was the same. There are many interpreters which may not give the output you expect. Find out where the `bash` interpreter is located by entering `which bash` in the terminal.

#### HINTS

- Type `which bash` in the terminal and press enter

## 60. Add shebang

### 60.1

That's the absolute path to the `bash` interpreter. You can tell your program to use it by placing a `shebang` at the very top of the file like this: `#!<path_to_interpreter>`. Add a `shebang` at the very top of your file, the one you want looks like this: `#!/bin/bash`.

#### HINTS

- Add `#!/bin/bash` at the top of your `questionnaire.sh` file

## 70. ./questionnaire

### 70.1

Now, instead of using `sh` or `bash` to run your script. You can run it by executing the file and it will default to `bash`. Run your script by executing it with `./questionnaire.sh`

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 80. ls -l

### 80.1

You should have got a permission denied message because you don't have permissions to execute the script. List what's in the `project` folder in long list format with `ls -l` to see the file permissions.

#### HINTS

- Type `ls -l` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 90. chmod +x questionnaire.sh

### 90.1

Next to your file is `-rw-r--r--`. All but the first character (`-`) describe permissions different users have with the file. `r` means `read`, `w` means `write`, `x` means `execute`. I don't see an `x` anywhere, so nobody can execute it. Enter `chmod +x questionnaire.sh` in the terminal to give everyone executable permissions.

#### HINTS

- Type `chmod +x questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 100. ls -l

### 100.1

List what's in the folder again with `ls -l` to see the new permissions.

#### HINTS

- Type `ls -l` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 110. ./questionnaire

### 110.1

The `x` was added by each type of user to denote that anyone can execute the file. Run your file again by executing it with `./questionnaire.sh`.

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 140. Add ls -l

### 140.1

Now it works. In your script, you can add any commands that you would be able to enter in the terminal. Test this by adding the `ls -l` command below your other command.

#### HINTS

- Add `ls -l` at the bottom of your `questionnaire.sh` file

## 150. ./questionnaire

### 150.1

Run the script by executing it again.

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 160. Delete all - shebang

### 160.1

Your script printed the result of the two commands as if you entered them in the terminal. Delete everything but the `shebang` from your file so you can start making the questionnaire.

#### HINTS

- Only `#!/bin/bash` should remain in your `questionnaire.sh` file

## 170. Add QUESTION1 variable

### 170.1

Bash has variables, functions, and other things you might be familiar with. You can create a variable with `VARIABLE_NAME=VALUE`. There cannot be any spaces around the equal (`=`) sign. If a variable has any spaces in it, place double quotes around it. Create a variable named `QUESTION1` and set it's value to `"What's your name?"`.

#### HINTS

- Add `QUESTION1="What's your name?"` at the bottom of your `questionnaire.sh` file

## 180. Add echo $QUESTION1

### 180.1

To use a variable, place `$` in front of it like this: `$VARIABLE_NAME`. Shell scripts run from top to bottom, so you can only use variable below where it's created. Use `echo` to print your variable.

#### HINTS

- Add `echo $QUESTION1` at the bottom of your `questionnaire.sh` file

## 190. ./questionnaire

### 190.1

Run the file like you did before to see if it worked.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 200. Add read NAME

### 200.1

The question was printed. Next, you want to be able to accept input from a user. You can do that with `read` like this: `read VARIABLE_NAME`. This will get user input and store it into a new variable. After you print the question, use `read` to get input and store it in a variable named `NAME`.

#### HINTS

- Add `read NAME` at the bottom of your `questionnaire.sh` file

## 210. Add echo Hello $NAME

### 210.1

At the bottom of your script, use `echo` to print `Hello <name>.` to the terminal.

#### HINTS

- You can use your `NAME` variable like this: `$NAME`
- Use your `$NAME` variable in place of `<name>`
- Don't forget the period
- Add `echo Hello $NAME.` at the bottom of your script

## 220. ./questionnaire

### 220.1

Run the file again. Type your name and press enter after it asks for it.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there
- You can press `ctrl+c` to close the program

## 230. Add QUESTION2 variable

### 230.1

Right below your first variable, create another one named `QUESTION2`. Set the value to, `Where are you from?`. Make sure to put it in double quotes.

#### HINTS

- Here's an example: `VARIABLE="value"`
- Add `QUESTION2="Where are you from?"` to your script

## 240. Add echo $QUESTION2

### 240.1

After your `read` command, use your new variable to print the next question.

#### HINTS

- Use `echo` to print the variable
- Add `echo $QUESTION2` below your `read` command

## 250. Add read LOCATION

### 250.1

Below where the second question is printed, use `read` to get input from the user into a variable named `LOCATION`.

#### HINTS

- Here's an example `read VARIABLE_NAME`
- Add `read LOCATION` to your script below `echo $QUESTION2`

## 260. Add echo Hello $NAME from $LOCATION

### 260.1

Change the existing response to `Hello <name> from <location>.`.

#### HINTS

- Use your two variables in place of `<name>` and `<location`
- Use your two variables with `$NAME` and `$LOCATION`
- Make sure the command is at the bottom of the file
- The suggested command should look like: `echo Hello $NAME from $LOCATION.`

## 270. ./questionnaire

### 270.1

Run the script and enter values when it is waiting for input.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close a program

## 280. Add echo "~~ Questionnaire ~~"

### 280.1

It's looking good. I want a title to appear when the program first starts. Use `echo` to print `~~ Questionnaire ~~` before anything else is printed.

#### HINTS

- Add `echo ~~ Questionnaire ~~` below your `shebang`

## 290. ./questionnaire

### 290.1

Run the script and enter values until it is done again so you can see what the title looks like.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close the program

## 300. echo --help

### 300.1

It would be nice if there was some empty lines around the title. You've probably used the `--help` flag before, see if you can use it with `echo` to try and find a way to add empty lines.

#### HINTS

- Enter the suggested command in the terminal
- Here's an example: `<command> <flag>`
- The command is `echo`, the flag is `--help`
- Type `echo --help` in the terminal and press enter

## 310. man echo

### 310.1

That didn't work as I hoped. Another way to find information about a command is with `man`. It stands for `manual` and you can use it like this: `man <command>`. See if there's a manual for `echo`.

#### HINTS

- Type `man echo` in the terminal and press enter
- Press enter until you have seen the whole menu

## 320. Add echo -e \n~~ Questionnaire ~~\n

### 320.1

At the top of the menu, the `-e` option looks promising. And the `\n` below it says `new line`. You should take a look at those. In your script, change the title to `echo -e \n~~ Questionnaire ~~\n` to see if that prints the empty lines.

#### HINTS

- Change the suggested line to `echo -e \n~~ Questionnaire ~~\n`

## 323. ./questionnaire

### 323.1

Run it to see if it worked. You can press `ctrl+c` to close the program after it starts if you don't want to enter values.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close the program

## 326. Change to echo -e "\n~~ Questionnaire ~~\n"

### 326.1

It didn't print the empty lines. `echo` will only print empty lines if the value is enclosed in quotes. Place double quotes around the title that gets printed to see if it works.

#### HINTS

- Change the suggested line to `echo -e "\n~~ Questionnaire ~~\n"`

## 330. ./questionnaire

### 330.1

Run your script again to see if that fixed it.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close the program

## 340. Add QUESTION3 variable

### 340.1

Now it's working :smile: Create a `QUESTION3` variable next to the other two, set it's value to `"What's your favorite coding website?"`

#### HINTS

- Add `QUESTION3="What's your favorite coding website?"` to your `questionnaire.sh` file
- Add it by the other two variables

## 345. echo QUESTION3 variable

### 345.1

Use `echo` to print the third question after you `read` the `LOCATION`.

#### HINTS

- Add `echo $QUESTION3` below the `read LOCATION`
- Add it to your `questionnaire.sh` file

## 350. read WEBSITE

### 350.1

After the question you just printed, add code to read input into a variable named `WEBSITE`.

#### HINTS

- Add `read WEBSITE` below the `echo $QUESTION3`

## 360. echo final sentence

### 360.1

Change the `echo` command of the response to print this sentence instead: `Hello <name> from <location>. I learned that your favorite coding website is <website>!`.

#### HINTS

- Replace the `echo Hello $NAME from $LOCATION.` with the suggested sentence
- Use your three variables in place of `<name>`, `<location>`, and `<website>`
- The command should look like this: `echo Hello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!`

## 363. ./questionnaire

### 363.1

Run the script and enter values when the program is waiting. Let's see the final output.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 366. Add line breaks around final sentence

### 366.1

One last thing. Change that final response to print an empty line at the beginning of the sentence.

#### HINTS

- Use `echo` with the `-e` flag and a new line (`\n`) character like you did for the title
- Don't forget to put the response in double quotes so it prints the empty line
- Here's an example: `echo -e "\n<message>"`
- Only add a new line at the beginning of the response, not the end
- The final command should look like this: `echo "\nHello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!"`

## 370. ./questionnaire

### 370.1

Run it one last time and enter values when it asks to see if you like how it looks.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 380. touch countdown.sh

### 380.1

It looks good. I think you are done with that script for now. The next program will be countdown timer. Use the `touch` command to create a new file named `countdown.sh` in your `project` folder.

#### HINTS

- Type `touch countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 390. chmod +x countdown.sh

### 390.1

Give your file executable permissions so you can run it like the other one. It's the `chmod` command with the `+x` flag.

#### HINTS

- Here's an example `chmod <permissions> <filename>`
- The value for permissions you want to use is `+x`
- You previously used `chmod +x questionnaire.sh`
- Type `chmod +x countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 400. Add shebang

### 400.1

You want to use the `bash` interpreter again. Add a `shebang` at the top of your new file to denote that.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in your first script to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `countdown.sh` file

## 410. Add comment

### 410.1

Comments in `bash` look like this: `# <comment>`. Add a comment below the `shebang` that says `Program that counts down to zero from a given argument` so people know what it does. Note that the `shebang` is a special case and is not treated like a comment.

#### HINTS

- Add `# Program that counts down to zero from a given argument` to your `countdown.sh` file

## 420. Add echo $\*

### 420.1

Programs can take arguments. You can access them a few different ways with `$`. Add `echo $*` in your script to print all arguments passed to it.

#### HINTS

- Add `echo $*` at the bottom of the `countdown.sh` file

## 425. ./countdown.sh

### 425.1

Execute your script with `./countdown.sh`.

#### HINTS

- Type `./countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 430. ./countdown.sh arg1 arg2 arg3

### 430.1

Nothing was printed. Run your script again, but this time add three arguments to the command; `arg1`, `arg2`, and `arg3`. Place them after the command with a space before each one.

#### HINTS

- Type `./countdown.sh arg1 arg2 arg3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 440. Change to echo $1

### 440.1

`$*` printed all the arguments passed to your script. To access any one of them, use `$<number>`. `arg2` could have been accessed with `$2`. Change your script to `echo` the first argument instead of all the arguments.

#### HINTS

- Try running your script with an argument to make sure it’s giving the expected output
- Use `echo $1` to print the second argument
- Change `echo $*` to `echo $1` in your `countdown.sh` file

## 450. ./countdown.sh arg1 arg2 arg3

### 450.1

Run your file with `./countdown.sh arg1 arg2 arg3` again.

#### HINTS

- Type `./countdown.sh arg1 arg2 arg3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 460. help

### 460.1

Now it just prints the first argument. Your program will accept an argument to count down from. You will test it with an `if` statement to make sure it's a positive integer. I wonder what that syntax would look like. Type `help` in the terminal to see if you can find anything.

#### HINTS

- Type `help` in the terminal and press enter

## 470. man if

### 470.1

This is a list of built-in commands. You should look over it, some of them may look familiar. I see `echo` in there. Another one is `if`. See if you can find out more about it by checking its `man` page.

#### HINTS

- Here's an example: `man <command>`
- Type `man if` in the terminal and press enter

## 480. help if

### 480.1

I guess there isn't a `man` page for it. At the top of the `help` screen, I noticed you can use `help <command>` to find out more. Yet another way to find out about a command :disappointed_relieved: See if you can find out more about `if` with that method.

#### HINTS

- Here's an example `help <command>`
- Type `help if` in the terminal and press enter

## 490. Add if arg1 print true

### 490.1

The syntax is at the top, not all of it is required. Here's another example:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

Remove the `echo $1` in your script and add an `if` condition that checks `if [[ $1 == arg1 ]]`. In its `then` area, use `echo` to print `true` to the screen. There must be spaces on the inside of the brackets (`[[ ... ]]`) and around the operator (`==`).

#### HINTS

- Make sure to remove the `echo $1`
- Add the following to your `countdown.sh` file:

```sh
if [[ $1 == arg1 ]]
then
  echo true
fi
```

## 500. ./countdown arg1

### 500.1

Notice that the end of the syntax is `fi` (`if` backwards). It should print `true` if you pass `arg1` to your script now. Run the script with `arg1` as the only argument.

#### HINTS

- Type `./countdown.sh arg1` in the terminal and press enter
- Make sure you are in the `project` folder first

## 505. ./countdown !arg1

### 505.1

The `if` condition worked, it printed `true`. Run it again with anything except `arg1` as the first argument.

#### HINTS

- Type `./countdown.sh arg2` in the terminal and press enter
- Make sure you are in the `project` folder first

## 510. Add else print false

### 510.1

Nothing was printed. One of the optional parts of `if` was an `else` area. You can use it like this:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```

Add an `else` to your existing `if` condition. Use `echo` to print `false` if the condition fails.

#### HINTS

- Your `if` should look like this:

```sh
if [[ $1 == arg1 ]]
then
  echo true
else
  echo false
fi
```

## 520. ./countdown !arg1

### 520.1

Run the script again and use anything except `arg1` as the only argument.

#### HINTS

- Type `./countdown.sh !arg1` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 530. Change if condition -lt 5

### 530.1

Now it printed `false`. Your program is expecting an integer to count down from as its argument. You can compare integers inside the brackets (`[[ ... ]]`) of your `if` with `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less than or equal), `-gt` (greater than), `-ge` (greater than or equal). Change your `if` condition to check if your first argument is less than `5`.

#### HINTS

- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-lt`)
- Your `if` condition should look like this: `[[ $1 -lt 5 ]]`
- The whole `if` should look like this:

```sh
if [[ $1 -lt 5 ]]
then
  echo true
else
  echo false
fi
```

## 540. ./countdown 4

### 540.1

Run the script again and use `4` as a first argument to make sure it's working.

#### HINTS

- Type `./countdown.sh 4` in the terminal and press enter
- Make sure you are in the `project` folder first

## 542. ./countdown 5

### 542.1

It printed `true` since your argument was less than `5`. Run it again with `5` as the argument.

#### HINTS

- Type `./countdown.sh 5` in the terminal and press enter
- Make sure you are in the `project` folder first

## 544. help

### 544.1

As expected, that printed `false`. Take a look at that `help` menu again. I want to see if we can find out more about how these expressions work.

#### HINTS

- Type `help` in the terminal and press enter

## 546. help [[expression]]

### 546.1

Near the top left, it says `[[ expression ]]`. Those look like the double brackets you are using. See if you can get more info about that with the `help` command like you did with `help if`.

#### HINTS

- Here's an example: `help <command>`
- Type `help [[ expression ]]` or `help [[` in the terminal and press enter

## 548. help test

### 548.1

It might not be a bad idea to read that. Looks like you can use some, probably familiar, things like `!`, `&&`, and `||` to compare multiple expressions. There's also `==` and `!=` operators for an individual expression. It says something about the `test` built-in command. See if you can bring up the `help` menu for that.

#### HINTS

- View the `help` menu of the suggested command like you did for the `help if`
- Here's an example: `help <command>`
- Type `help test` in the terminal and press enter

## 550. Change if to [[$1 -le 5]]

### 550.1

That's what I was looking for. At the top are some file operators. There's some string and other operators as well. You should take a look at them. Near the bottom, are the arithmetic operators you used with your `if` condition. Change the condition in your script to check if the first argument is less than or equal to `5`.

#### HINTS

- The `if` condition should look like this: `[[ $1 -le 5 ]]`
- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-le`)
- It's the `if` in your `countdown.sh` file

## 552. ./countdown 5

### 552.1

Run the script and use `5` as a first argument again.

#### HINTS

- Type `./countdown.sh 5` in the terminal and press enter
- Make sure you are in the `project` folder first

## 554. [[4 -le 5]]

### 554.1

Now it prints `true`. Remember I said any command can run in the terminal or a script. Try running an expression right in the terminal by entering `[[ 4 -le 5 ]]` in it.

#### HINTS

- Enter the suggested expression in the terminal
- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-le`)
- Type `[[ 4 -le 5 ]]` in the terminal and press enter

## 556. echo $?

### 556.1

Nothing happened? Each command has an exit status that can be accessed with `$?`. View the exit status of the **last command** with `echo $?`.

#### HINTS

- Type `echo $?` in the terminal and press enter
- Your second to last command should be `[[ 4 -le 5 ]]`. So enter that before `echo $?`

## 558. [[4 -ge 5]]

### 558.1

The exit status of `0` means it was true, `4` is indeed less or equal to `5`. Try it again with `[[ 4 -ge 5 ]]`.

#### HINTS

- Enter the suggested expression in the terminal
- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-ge`)
- Type `[[ 4 -ge 5 ]]` in the terminal and press enter

## 560. echo $?

### 560.1

Use `echo` to view the exit status of the command you just entered.

#### HINTS

- Type `echo $?` in the terminal and press enter
- Your second to last command should be `[[ 4 -ge 5 ]]`. So enter that right before `echo $?`

## 562. [[4 -ge 5]]; echo $?

### 562.1

It printed `1` this time for false. You can separate commands on a single line with `;`. Enter your last two commands on one line like this: `[[ 4 -ge 5 ]]; echo $?`. It will run the expression, then print the exit status of it since it was the last command.

#### HINTS

- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-ge`)
- Type `[[ 4 -ge 5 ]]; echo $?` in the terminal and press enter

## 564. [[10 -ne 5]]; echo $?

### 564.1

It's still false. Using the same syntax of `[[ ... ]]; echo$?`, check if `10` is not equal to `5` and print the exit status of the expression on one line.

#### HINTS

- Check the `help test` menu to find the `not equal` operator
- It's the `-ne` operator
- You previously used `[[ 4 -ge 5 ]]; echo $?`
- Make sure there's spaces inside the brackets and around the operator
- Type `[[ 10 -ne 5 ]]; echo $?` in the terminal and press enter

## 566. bad_command; echo $?

### 566.1

You can think of an exit status of `0` as true. But it means that the command had zero errors. All commands have an exit status. Using the same syntax, enter `bad_command;` and check its exit status on a single line.

#### HINTS

- The syntax looks like this: `<command>; echo $?`
- You previously used `[[ 10 -ne 5 ]]; echo $?`
- Type `bad_command; echo $?` in the terminal and press enter

## 568. ls; echo $?

### 568.1

`command not found`, with an exit status of `127`. Anything but `0` means there was an error with the command. `bad_command` didn't exist. Try it again with `ls`.

#### HINTS

- Use the same syntax you have been using
- Here's an example `<command>; echo $?`
- You previously used `bad_command; echo $?`
- Type `ls; echo $?` in the terminal and press enter

## 570. ls -y; echo $?

### 570.1

The command executed as expected and there were zero errors. So it gave you an exit status of `0`. Try it again with `ls -y`.

#### HINTS

- Use the same syntax you have been using
- Here's an example: `<command>; echo $?`
- You previously used `ls; echo $?`
- Type `ls -y; echo $?` in the terminal and press enter

## 572. help test

### 572.1

The `-y` flag doesn't work with `ls` so it gave you an exit status other than `0`, meaning that the command was unsuccessful. View the `help` menu of the `test` command again, I want to see what else is in that list.

#### HINTS

- Here's an example: `help <command>`
- Type `help test` in the terminal and press enter

## 574. [[-a countdown.sh]]; echo $?

### 574.1

You tried a few of the arithmetic operators, those work for integers. Try one of the file operators. The first one on the list checks if a file exists. Type `[[ -a countdown.sh ]]; echo $?` in the terminal to see if your file exists.

#### HINTS

- Enter the suggested commands in the terminal
- Type `[[ -a countdown.sh ]]; echo $?` in the terminal and press enter
- Don't forget the spaces inside the brackets
- Make sure you are in the `project` folder first

## 575. [[-a bad_file.txt]]; echo $?

### 575.1

The file must exist. It's checking the folder the command is entered from. Try it again with `bad_file.txt`.

#### HINTS

- Use the same syntax you have been using
- Here's an example: `<command>; echo $?`
- You previously used `[[ -a countdown.sh ]]; echo $?`
- Type `[[ -a bad_file.txt ]]; echo $?` in the terminal and press enter
- Don't forget the spaces inside the brackets

## 576. [[-x countdown.sh]]; echo $?

### 576.1

`bad_file.txt` doesn't exist. I think you're getting the hang of this. Using the same syntax, check if you have permissions to execute your `countdown.sh` file. You may want to look at that menu again.

#### HINTS

- View the `help test` menu to find the file operator for checking if a file is executable by you
- It's the `-x` operator
- The syntax you want is `[[ ... ]]; echo $?` to see if the condition is true
- Don't forget the spaces inside the brackets
- Type `[[ -x countdown.sh ]]; echo $?` in the terminal and press enter
- Make sure you are in the `project` folder first

## 582. help [[expression]]

### 582.1

You played around with a number of the expressions. View the `help [[ expression ]]` menu again that you looked at before to see a few more options. You can view the menu with just `help [[`.

#### HINTS

- Enter the suggested command in the terminal
- Type `help [[ expression ]]` or `help [[` in the terminal and press enter

## 584. [[-x countdown.sh && 5 -le 4]]; echo $?

### 584.1

As I mentioned before, you can test multiple expressions with `&&` and `||`. Enter `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` in the terminal to test the file is executable by you **and** five is less than or equal to four.

#### HINTS

- Enter the suggested command in the terminal
- Type `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` in the terminal and press enter
- Make sure there's spaces around the brackets and all the operators

## 586. [[-x countdown.sh || 5 -le 4]]; echo $?

### 586.1

Both conditions weren't true, so the exit status was `1` for `false`. Try testing the same two conditions with the `or` operator.

#### HINTS

- Modify this `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` with the suggestion and enter it in the terminal
- Use the `or` operator from the `help [[ expression ]]` menu
- The `or` operator is `||`
- Type `[[ -x countdown.sh || 5 -le 4 ]]; echo $?` in the terminal and press enter
- Make sure there's spaces around the brackets and all the operators

## 588. Change if to [[$1 -gt 0]]

### 588.1

One of the conditions was true so it printed `0`. I think that's enough of a detour. Back in your script, change the `if` condition to check if the first argument is **greater than zero** so you can be sure it's something you can count down from.

#### HINTS

- Use the `-gt` operator in your `if` condition
- The `if` condition should look like this: `[[ $1 -gt 0 ]]`
- It's in the `countdown.sh` file

## 590. Change if !# message

### 590.1

The condition you added checks if a positive integer was passed as an argument to the script and executes the `then` area. Change the existing `echo` command to print `Include a positive integer as the first argument.` if a positive integer is not used.

#### HINTS

- The `else` area should look like this: `echo Include a positive integer as the first argument.`
- The whole `if` condition should look like this:

```sh
if [[ $1 -gt 0 ]]
then
  echo true
else
  echo Include a positive integer as the first argument.
fi
```

## 600. ./countdown 1

### 600.1

Run your script and use `1` as a first argument to make sure the condition is working.

#### HINTS

- Type `./countdown.sh 1` in the terminal and press enter
- Make sure you are in the `project` folder first

## 610. ./countdown 0

### 610.1

Run it again and use anything but a positive integer as the only argument.

#### HINTS

- Type `./countdown.sh 0` in the terminal and press enter
- Make sure you are in the `project` folder first

## 615. help

### 615.1

Looks like your `if` condition is working. Next, you want to loop over the argument and count down to zero from it. Check the `help` menu to see if there's any commands for this.

#### HINTS

- Enter the suggested command in the terminal
- Type `help` in the terminal and press enter

## 620. Add for loop for countdown

### 620.1

There's two `for` loops in there, you want the second one. Here's an example:

```sh
for (( i = 10; i > 0; i-- ))
do
  echo $i
done
```

The above creates a variable (`i = 10`), then prints it, subtracts one, and repeats until `i` is not greater than `0`. So it prints `10` through `1`. In the `then` area of your condition, replace the `echo` with a `for` loop that prints from the argument (`$1`) to `1`.

#### HINTS

- Set the variable to the value of your argument (`$1`) initially
- Use the same syntax as the example except change the `10` to `$1`
- Don't include any extra commands in the `then` area
- Your `then` area should look like this:

```sh
for (( i = $1; i > 0; i-- ))
do
  echo $i
done
```

- The whole `if` condition should look like this:

```sh
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i > 0; i-- ))
  do
    echo $i
  done
else
  echo Include a positive integer as the first argument.
fi
```

## 630. ./countdown 10

### 630.1

Run your script and use `10` as the first argument.

#### HINTS

- Type `./countdown.sh 10` in the terminal and press enter
- Make sure you are in the `project` folder first

## 640. help

### 640.1

It works :smile: But I want it to pause for one second between each number. Check the `help` menu again to see if there's any commands that might help.

#### HINTS

- Enter the suggested command in the terminal
- Type `help` in the terminal and press enter

## 650. ls /

### 650.1

I'm not seeing the command I was hoping to. These are the built-in commands, where are the rest? Type `ls /` to look around.

#### HINTS

- Enter the suggested command in the terminal
- Type `ls /` in the terminal and press enter

## 660. ls /bin

### 660.1

The `/` listed what's in the root of the file system. I see a `bin` folder, `bin` stands for `binary`. View what's in it with `ls /bin`.

#### HINTS

- Enter the suggested command in the terminal
- Type `ls /bin` in the terminal and press enter

## 670. man sleep

### 670.1

These are some non built-in commands. There's quite a few that should look familiar. One is `bash`, that's the one you used for the `shebang` in your scripts. I see one called `sleep`. View the manual of it.

#### HINTS

- View a manual with the `man` command
- Here's an example: `man <command>`
- Enter `man sleep` in the terminal
- Press enter until you have seen the whole menu

## 675. sleep 3

### 675.1

At the top, it says you can pause execution for a number of seconds. Try it out by entering `sleep 3` in the terminal.

#### HINTS

- Enter the suggested command in the terminal
- Enter `sleep 3` in the terminal

## 680. Add sleep to for loop

### 680.1

That should work. In your `for` loop, use `sleep` to make the script pause for `1` second after each number is printed.

#### HINTS

- Add the suggestion to the `for` loop in your `countdown.sh` file
- Add `sleep 1` after you print `i` in your `for` loop

## 690. ./countdown 3

### 690.1

Run your script and use `3` as the first argument.

#### HINTS

- Type `./countdown.sh 3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 692. Change to >=

### 692.1

Awesome. Except it should print `0` instead of stopping at `1`. Change the condition in your for loop so that it checks for `i >= 0`.

#### HINTS

- Your `for` loop should look like this:

```sh
for (( i = $1; i >= 0; i-- ))
do
  echo $i
  sleep 1
done
```

- The whole `if` condition should look like this:

```sh
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i >= 0; i-- ))
  do
    echo $i
    sleep 1
  done
else
  echo Include a positive integer as the first argument.
fi
```

## 694. ./countdown 3

### 694.1

Run your script with `3` as the argument again.

#### HINTS

- Type `./countdown.sh 3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 696. Add echo -e "title"

### 696.1

Excellent. I want it to display a title like the other script. Make it so that it prints `~~ Countdown Timer ~~` before anything else. Include a new line before and after it like you did for the other title.

#### HINTS

- Use the `echo` command with the `-e` flag and the new line (`\n`) character
- Make sure to place the message in double quotes
- Here's an example: `echo -e "\n<message>\n"`
- Add `echo -e "\n~~ Countdown Timer ~~\n"` to the `countdown.sh` file after the comment

## 698. ./countdown 1

### 698.1

Run your script and use `1` as the first argument again to see the title.

#### HINTS

- Type `./countdown.sh 1` in the terminal and press enter
- Make sure you are in the `project` folder first

## 700. Add Multiline comment

### 700.1

This is fun. You can create a multiline comment like this:

```sh
: '
  comment here
  more comment here
'
```

Comment out your `for` loop with a multiline comment. I want to try and do this with a `while` loop.

#### HINTS

- Comment out the `for` loop in your `countdown.sh` file with a multiline comment
- Make sure there's a space between the `:` and `'`
- Your `for` loop should look like this:

```sh
: '
for (( i = $1; i >= 0; i-- ))
do
  echo $i
  sleep 1
done
'
```

## 710. help while

### 710.1

View the `help` menu for the `while` command to see if you can find anything.

#### HINTS

- Here's an example: `help <command>`
- Enter `help while` in the terminal

## 730. Add I variable

### 730.1

It shows the syntax. First, below your comment, create a variable named `I` that is set to the value of your first argument. It will start there, then on each iteration of the `while` loop you can subtract `1` from it until it reaches `0`.

#### HINTS

- Add `I=$1` in the `then` area of your `if` statements below the multi-line comment
- The `then` area should look like this:

```sh
: '
for (( i = $1; i >= 0; i-- ))
do
  echo $i
  sleep 1
done
'
I=$1
```

## 740. Add while loop

### 740.1

The menu showed that you can make a `while` loop like this:

```sh
while [[ CONDITION ]]
do
  STATEMENTS
done
```

Add a `while` loop below the `I` variable you made. The condition should be `$I -ge 0` and you should `echo` the `I` variable in the `do` statements.

#### HINTS

- Your `while` loop should look like this:

```sh
while [[ $I -ge 0 ]]
do
  echo $I
done
```

## 750. Add (( I-- ))

### 750.1

`I` never changes here, so you would have an infinite loop. You can subtract one from `I` with double parenthesis (`((...))`) and the `--` operator. In your while loop, add `(( I-- ))` after you `echo $I` to subtract one from `I` on each pass.

#### HINTS

- Your `while` loop should look like this:

```sh
while [[ $I -ge 0 ]]
do
  echo $I
  (( I-- ))
done
```

## 760. Add sleep 1

### 760.1

The last thing to do is to add the `sleep` again. In your `while` loop, add the code to make it `sleep` for `1` second. Add the code after the `(( I-- ))`.

#### HINTS

- Use the same `sleep 1` you used in the `for` loop
- Your `while` loop should look like this:

```sh
while [[ $I -ge 0 ]]
do
  echo $I
  (( I-- ))
  sleep 1
done
```

## 770. ./countdown.sh 5

### 770.1

Run the script and use 5 as the first argument.

#### HINTS

- Type `./countdown.sh 5` in the terminal and press enter
- Make sure you are in the `project` folder first

## 780. touch bingo.sh

### 780.1

I think the countdown timer is finished. Feel free to try it with some other arguments. The next one is a bingo number generator. Use `touch` to create `bingo.sh` in the same folder as the others.

#### HINTS

- Type `touch bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 790. chmod +x bingo.sh

### 790.1

Give your file executable permissions like you did for the other two.

#### HINTS

- Use the `chmod` command with the `+x` flag
- Here's an example `chmod <permissions> <filename>`
- You previously used `chmod +x countdown.sh`
- Type `chmod +x bingo.sh` in the terminal and press enter

## 800. Add shebang

### 800.1

Add a `shebang` at the top of your new script. It should use `bash` again like other two.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in one of your other scripts to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `bingo.sh` file

## 810. Add comment

### 810.1

Add a comment below the `shebang` that says, `Bingo Number Generator`.

#### HINTS

- Comments look like this: `# <comment>`
- Add `#Bingo Number Generator` below the `shebang`
- Capitalization matters

## 815. Add echo -e "title"

### 815.1

Before I forget, use a single `echo` command to print a title for this program. It should say `~~ Bingo Number Generator ~~` with an empty line before and after it.

#### HINTS

- Use the `echo` command with the `-e` flag and the new line (`\n`) character
- Don't forget the double quotes when using a new line character
- Take a look at one of the title's from a previous file for a hint
- Here's an example: `echo -e "\n<message>\n"`
- You previously used `echo -e "\n~~ Countdown Timer ~~\n"`
- Add `echo -e "\n~~ Bingo Number Generator ~~\n"` below the comment of your `bingo.sh` file

## 817. Add NUMBER=5 variable

### 817.1

In your script, create a `NUMBER` variable that equals `5`.

#### HINTS

- Here's an example: `VARIABLE_NAME=VALUE`
- Add `NUMBER=5` to the bottom of your `bingo.sh` file

## 818. echo $NUMBER

### 818.1

Below your new variable, use `echo` to print it to the screen.

#### HINTS

- Here's an example: `echo $<variable>`
- Use `NUMBER` in place of `<variable>`
- Add `echo $NUMBER` at the bottom of your `bingo.sh` file

## 819. ./bingo.sh

### 819.1

Run the script by executing it.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 820. printenv

### 820.1

The numbers in bingo go up to 75, each number has a letter from the word `bingo` associated with it. You will need to randomly generate a number between 1 and 75. Bash may have something that can help you here. A shell comes with environment variables. View them by entering `printenv` in the terminal.

#### HINTS

- Type `printenv` in the terminal and press enter

## 822. echo $LANG

### 822.1

These are all environment variables, they are predefined and loaded with each shell. Most of them aren’t very relevant, but it’s nice to know they’re there. One of them is `LANG`. Use `echo` to print it in the terminal.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $LANG` in the terminal and press enter

## 824. declare -p

### 824.1

View all variables in the shell with `declare -p`. `-p` stands for `print`

#### HINTS

- Type `declare -p` in the terminal and press enter

## 826. echo $RANDOM

### 826.1

This list includes all the environment variables, and any others that may have been created in the current shell. There's one named `RANDOM`. Use `echo` to print it in the terminal.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $RANDOM` in the terminal and press enter

## 828. Change to NUMBER=$RANDOM

### 828.1

Back in your script, use the `RANDOM` variable to set `NUMBER` to a random number instead of `5`.

#### HINTS

- Change `NUMBER=5` to `NUMBER=$RANDOM`

## 830. ./bingo.sh

### 830.1

Run the script a few times in a row to make sure it's working.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter two times in a row
- Make sure you are in the `project` folder first

## 835. Change to NUMBER=$RANDOM%75

### 835.1

The `RANDOM` variable will generate a random number between 0 and 32767. You can use the `modulus` operator to make it in the range you want. In your script, change the `NUMBER` variable to `$RANDOM%75`.

#### HINTS

- Change `NUMBER=$RANDOM` to `NUMBER=$RANDOM%75`

## 840. ./bingo.sh

### 840.1

Run the script again.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 881. I=0

### 881.1

Bash sees everything as a string so it just printed the `%75` part literally. In the terminal, create an `I` variable equal to `0` (zero), so you can play with it and figure out how to do some calculations.

#### HINTS

- Type `I=0` in the terminal and press enter

## 884. echo $I

### 884.1

In the terminal, use `echo` to print your new variable.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $I` in the terminal and press enter

## 887. (( I++ ))

### 887.1

I noticed that you used double parenthesis in the `while` loop of your countdown timer to subtract one from `I`. Type `(( I++ ))` in the terminal to see if anything happens.

#### HINTS

- Type `(( I++ ))` in the terminal and press enter

## 890. echo $I

### 890.1

There was no output. Use `echo` to print `I` in the terminal again.

#### HINTS

- Type `echo $I` in the terminal and press enter

## 891. help let

### 891.1

The double parenthesis performed the calculation, changing the value of `I` from `0` to `1`. Enter `help let` in the terminal to see the operators you can use with the double parenthesis.

#### HINTS

- Type `help let` in the terminal and press enter

## 893. (( I += 10 ))

### 893.1

You used several of these now, including in the `for` loop from the countdown timer. Enter `(( I += 10 ))` in the terminal to increment `I` by `10`. Note that you don't need to prepend variables with `$` inside these parenthesis.

#### HINTS

- Type `(( I += 10 ))` in the terminal and press enter

## 896. echo $I

### 896.1

Use `echo` to print your `I` variable again.

#### HINTS

- Type `echo $I` in the terminal and press enter.

## 897. $(( I + 4 ))

### 897.1

It should have printed `11` for the value of `I`. Using the double parenthesis like you have been is good for changing variable values or making comparisons. It makes the calculation in place and provides no output. If you want to make a calculation and do something with the result, add a `$` in front like this: `$(( ... ))`. Type `$(( I + 4 ))` in the terminal to see what happens.

#### HINTS

- If it didn't print `11` for `I`, enter `I=11` to set it to `11`
- Type `$(( I + 4 ))` in the terminal and press enter

## 899. echo $(( I + 4 ))

### 899.1

It should say, `bash: 15: command not found`. It replaced the command with the result of the calculation. Effectively, trying to run `15` as a command. Enter the same command, but put `echo` in front of it. The command was `$(( I + 4 ))`

#### HINTS

- Type `echo $(( I + 4 ))` in the terminal and press enter

## 902. echo $I

### 902.1

Again, it replaced the calculation with the result. So it was basically the same as if you entered `echo 15`. Use `echo` to print `I` to the screen again.

#### HINTS

- Type `echo $I` in the terminal and press enter

## 905. J=$(( I - 6 ))

### 905.1

It should still have printed `11` for `I`. See the hints if it didn't. These double parenthesis with a `$` are how you can assign a variable to some calculation. In the terminal, create a `J` variable, and use the `$(( ... ))` syntax to set its value to `I - 6`.

#### HINTS

- If it didn't print `11` for `I`, enter `I=11` to set it to `11`
- Type `J=$(( I - 6 ))` in the terminal and press enter

## 908. echo $J

### 908.1

Use `echo` to print `J`.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $J` in the terminal and press enter

## 911. echo $(( J \* 5 + 25 ))

### 911.1

`J` should equal `5`. For some more practice, use `echo` to print the value `J * 5 + 25`.

#### HINTS

- Type `echo $(( J * 5 + 25 ))` in the terminal and press enter

## 912. echo $J

### 912.1

It should have printed `50`. Print `J` with `echo` again.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $J` in the terminal and press enter

## 913. declare -p

### 913.1

So, as a reminder, `(( ... ))` will perform a calculation or operation and output nothing. `$(( ... ))` will replace the calculation with the result of it. You made a few variables in this shell, view them with `declare -p`.

#### HINTS

- Type `declare -p` in the terminal and press enter

## 914. declare -p J

### 914.1

`declare` can be used to create variables, but you are just going to use it to view them for now. If you scroll up a little, you should find your `I` and `J` variables in there. View `J` with `declare -p J`.

#### HINTS

- Type `declare -p J` in the terminal and press enter

## 916. declare -p RANDOM

### 916.1

I saw `RANDOM` in that list, too. View it with `declare -p <variable>` like you did for `J`.

#### HINTS

- Type `declare -p RANDOM` in the terminal and press enter

## 918. echo $(( RANDOM % 75 ))

### 918.1

Okay, I think I finally know how to get the random number for the Bingo Number Generator. Use `echo` and `RANDOM % 75` to print a random number in the terminal.

#### HINTS

- Use the `$(( ... ))` syntax to calculate the random number
- Here's an example: `echo $(( <calculation> ))`
- Type `echo $(( RANDOM % 75 ))` in the terminal and press enter

## 920. echo $(( RANDOM % 75 + 1 ))

### 920.1

One tiny problem, that calculation will give a number between 0 and 74. Enter the same command in the terminal, but add `1` to the calculation to get a random number between 1 and 75.

#### HINTS

- Type `echo $(( RANDOM % 75 + 1 ))` in the terminal and press enter

## 928. Set NUMBER=$(( RANDOM % 75 + 1))

### 928.1

Back in your `bingo.sh` script, change the `NUMBER` variable so that it starts as a random number between 1 and 75 using the syntax you have been practicing.

#### HINTS

- Change the `NUMBER` variable to the result of the calculation `RANDOM % 75 + 1`
- Use the `$(( ... ))` syntax to make the calculation
- It should look like this: `NUMBER=$(( RANDOM % 75 + 1 ))`

## 930. run ./bingo.sh

### 930.1

Run your script a few times in a row to make sure it's working.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Run it at least two times in a row

## 940. Add TEXT variable

### 940.1

Next, create a `TEXT` variable and set the value to `"The next number is, "`. When the script is finished, the output will be something like `The next number is B:15`.

#### HINTS

- Make sure there's a space after the comma
- Add `TEXT="The next number is, "` to the `bingo.sh` file

## 945. help let

### 945.1

The letter that goes with the random number depends on what the number is. If it's 15 or less, it will be a `B`. I saw some comparisons in the `help let` menu, take a look at it again.

#### HINTS

- Type `help let` in the terminal and press enter

## 950. Add first if <= 15

### 950.1

You used the double square brackets with your `if` statement in the last program, but you can use the double parenthesis with these operators as well. In your script, create an `if` statement that uses double parenthesis for the condition. Check if the number variable is less than or equal to 15. If it is, use your two variables to print `The next number is, B:<number>`.

#### HINTS

- Make sure you only have two `echo` statements in your script, the title being one of them
- Here's an example of how your `if` statement should look:

```sh
if (( CONDITION ))
then
  STATEMENTS
fi
```

- The condition you want is `(( NUMBER <= 15 ))`
- In the statements area, use `echo` and your two variables to print `The next number is, B:<number>`
- The statements area should look like this: `echo $TEXT B:$NUMBER`
- The whole `if` statement should look like this:

```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
fi
```

## 960. Add elif -le 30

### 960.1

`if` statements can have an "else if" area like this:

```sh
if (( CONDITION ))
then
  STATEMENTS
elif [[ CONDITION ]]
then
  STATEMENTS
fi
```

Using the double square brackets this time, add an `elif` condition that checks if the number variable is less than or equal to `30`. If it is, use your two variables again to print `The next number is, I:<number>`

#### HINTS

- View the `help test` menu to see the operators you can use with the double square brackets
- The condition you want is `[[ $NUMBER -le 30 ]]`. Don't forget the `$`
- In the statements area, use `echo` and your two variables to print `The next number is, I:<number>`
- The statements area should look like this: `echo $TEXT I:$NUMBER`
- The `elif` area should look like this:

```sh
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
fi
```

- The whole `if` statement should look like this:

```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
fi
```

## 970. Add elif < 46

### 970.1

You can add as many `elif` sections to an `if` statement as you want. Add another `elif`, below the last, one that uses the double parenthesis to check if the number variable is less than 46. If it is, use your two variables to print `The next number is, N:<number>`

#### HINTS

- View the `help let` menu to see the operators you can use with the double parenthesis
- The operator you want it `<`
- You can add another `elif` like this:

```sh
if CONDITION
then
  STATEMENTS
elif CONDITION
then
  STATEMENTS
elif CONDITION
then
  STATEMENTS
fi
```

- The condition you want is `(( NUMBER < 46 ))`
- In the statements area, use `echo` and your two variables to print `The next number is, N:<number>`
- The statements area should look like this: `echo $TEXT N:$NUMBER`
- This `elif` area should look like this:

```sh
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
fi
```

- The whole `if` statement should look like this:

```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
fi
```

## 980. Add elif -lt 61

### 980.1

Run your script if you want to see the output. It should print one of the sentences if the random number is less than 46. It may take a couple tries. Add another `elif`, below the last one, that uses double square brackets to check if the number variable is less than 61. If it is, use your two variables to print `The next number is, G:<number>`

#### HINTS

- View the `help test` menu to see the operators you can use with the double square brackets
- The operator you want it `-lt`
- The condition you want is `[[ $NUMBER -lt 61 ]]`. Don't forget the `$`
- The statements area should look like this: `echo $TEXT G:$NUMBER`
- This `elif` area should look like this:

```sh
elif [[ $NUMBER -lt 61 ]]
then
  echo $TEXT G:$NUMBER
fi
```

- The whole `if` statement should look like this:

```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
elif [[ $NUMBER -lt 61 ]]
then
  echo $TEXT G:$NUMBER
fi
```

## 990. Add else

### 990.1

One more case to handle. Add an `else` at the bottom of the `if` that uses your two variables to print `The next number is, O:<number>`.

#### HINTS

- View the `if/else` in your `countdown.sh` file to see how you did it before
- You don't need a condition or the `then` on this one
- Here's an example:

```sh
if CONDITION
then
  STATEMENTS
elif CONDITION
then
  STATEMENTS
...
else
  STATEMENTS
fi
```

- The `else` area should look like this:

```sh
else
  echo $TEXT O:$NUMBER
```

- The whole `if` should look like this:

```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
elif [[ $NUMBER -lt 61 ]]
then
  echo $TEXT G:$NUMBER
else
  echo $TEXT O:$NUMBER
fi
```

## 1000. ./bingo.sh

### 1000.1

Run your script a few times and make sure it's working.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Run it at least two times in a row

## 1010. touch fortune.sh

### 1010.1

I think the generator is done :smile: The next project is a fortune teller. Use the `touch` command to create `fortune.sh` in the same folder as the other scripts.

#### HINTS

- Type `touch fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1020. chmod +x fortune.sh

### 1020.1

Give your file executable permissions.

#### HINTS

- Use the `chmod` command with the `+x` flag
- Here's an example `chmod <permissions> <filename>`
- You previously used `chmod +x bingo.sh`
- Type `chmod +x fortune.sh` in the terminal and press enter

## 1030. Add shebang

### 1030.1

Add a `shebang` at the top of your new file that uses `bash` again.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in one of your other scripts to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `fortune.sh` file

## 1040. Add comment

### 1040.1

Add comment `Program to tell a persons fortune`

#### HINTS

- Comments look like this: `# <comment>`
- Add `#Program to tell a persons fortune` below the `shebang`
- Capitalization matters

## 1050. Add echo "title"

### 1050.1

Add a title for this one like the others. This one should say `~~ Fortune Teller ~~`. Don't forget the empty line before and after it.

#### HINTS

- Print the whole title and the empty lines with a single `echo` command
- Use the `echo` command with the `-e` flag and the new line (`\n`) character
- Don't forget to put it in double quotes
- Take a look at one of the title's from a previous file for a hint
- Here's an example: `echo -e "\n<message>\n"`
- You previously used `echo -e "\n~~ Bingo Number Generator ~~\n"`
- Add `echo -e "\n~~ Fortune Teller ~~\n"` below the comment of your `fortune.sh` file

## 1060. ./fortune.sh

### 1060.1

Run the file once to make sure it's working.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1070. ARR=("a" "b" "c")

### 1070.1

This program will have an array of responses. One will be printed randomly after a user inputs a question. Practice first :smile: In the terminal, create an array like this: `ARR=("a" "b" "c")`

#### HINTS

- Type the suggested command in the terminal
- Type `ARR=("a" "b" "c")` in the terminal and press enter

## 1080. echo ${ARR[1]}

### 1080.1

Each variable in the array is like any other variable, just combined into a single variable. In the terminal, print the second item in the array with `echo ${ARR[1]}`. Note that the first item would be index zero.

#### HINTS

- Type `echo ${ARR[1]}` in the terminal

## 1090. echo ${ARR[@]}

### 1090.1

If you recall, you were able to print all the arguments to your `countdown.sh` script with `echo $*`. `echo $@` would have worked as well. Similarly, you can use the `*` or `@` to print your whole array. In the terminal, use `echo` to print all the items in your array.

#### HINTS

- Here's an example `echo ${ARR[<index>]}`
- Type `echo ${ARR[@]}` in the terminal and press enter

## 1100. declare -p ARR

### 1100.1

The variable must be in that `declare` list. View your array variable using the `declare` command and the `-p` flag.

#### HINTS

- Here's an example: `declare -p <variable>`
- Type `declare -p ARR` in the terminal

## 1110. Add RESPONSES array

### 1110.1

The `-a` next to it stands for `array`. In your script, create an array named `RESPONSES`. Give it these six values: `Yes`, `No`, `Maybe`, `Outlook good`, `Don't count on it`, and `Ask again later`.

#### HINTS

- Here's an example: `VARIABLE=(value value ...)`
- Make sure any values with spaces are in proper quotes
- You created your other array with `ARR=("a" "b" "c")`
- Add `RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later")` in your script

## 1120. echo ${RESPONSES[5]}

### 1120.1

In your script, use `echo` to print the last item in the array.

#### HINTS

- Here's an example `echo ${ARR[<index>]}`
- Remember that the first item starts at zero
- Add `echo ${RESPONSES[5]}` to your `fortune.sh` file

## 1130. ./fortune.sh

### 1130.1

Run it to see the output.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1140. Add N=$(( RANDOM % 6 ))

### 1140.1

You will randomly print one of the values. In your script, create a variable named `N`. Set it equal to a random number between `0` and `5`, the first and last index of the array.

#### HINTS

- Use the modulus (`%`) operator and `6` to get a number between `0` and `5`
- Look at the random number you created in the `bingo.sh` file for a hint
- Here's an example: `VARIABLE=$(( <calculation> ))`
- Calculate a random number in the range you want with `RANDOM % 6`
- Add `N=$(( RANDOM % 6 ))` to the script

## 1150. Change to echo ${RESPONSES[$N]}

### 1150.1

Change your `echo` command to print the item in the array whose index is the random number you generated.

#### HINTS

- Use your `$N` variable as the index where you print an item from the array
- Don't forget that scripts run from top to bottom, so you can't use any variables before they are created
- Change the `echo` line to `echo ${RESPONSES[$N]}`

## 1160. help

### 1160.1

You will create a function to generate an answer. Check the `help` menu to see if you can find anything.

#### HINTS

- Enter the suggested command in the terminal
- Type `help` in the terminal

## 1170. help function

### 1170.1

See any that might help? There's one that says `function`. See if you can find out more about it.

#### HINTS

- Use the `help` command to find out more
- Here's an example: `help <command>`
- Type `help function` in the terminal

## 1180. Add GET_FORTUNE function

### 1180.1

It looks like you can create a function like this:

```sh
FUNCTION_NAME() {
  STATEMENTS
}
```

Add an empty function named `GET_FORTUNE` to your script. Make sure the response you are printing is the last thing in the script.

#### HINTS

- Add this to your script:

```sh
GET_FORTUNE() {}
```

- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1190. Add echo Ask a yes or no question

### 1190.1

In your function, use `echo` to print `Ask a yes or no question:`

#### HINTS

- Your function should look like this:

```sh
GET_FORTUNE() {
  echo Ask a yes or no question:
}
```

- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1200. Add GET_FORTUNE function call

### 1200.1

Call your function by putting the name of it below where you create it. No `$` needed. Make sure the response you are printing is at the bottom of the file.

#### HINTS

- Add `GET_FORTUNE` below where you create your function to call it
- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1210. ./fortune.sh

### 1210.1

Run your script to make sure it's working.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1220. Add read QUESTION

### 1220.1

In your function after you print the sentence, use `read` to get user input into a variable named `QUESTION`.

#### HINTS

- Add `read QUESTION` to your function below the `echo`
- Your function should look like this:

```sh
GET_FORTUNE() {
  echo Ask a yes or no question:
  read QUESTION
}
```

- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1230. ./fortune.sh

### 1230.1

Run the script again to test it out. Enter a question when it asks.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1240. help

### 1240.1

I want to make sure the input is a question. You are going to add a loop that asks for input until the input ends with a question mark. View the `help` menu to see if you can find an appropriate loop.

#### HINTS

- Type `help` in the terminal and press enter

## 1250. help until

### 1250.1

View more about that `until` command. That might be the one to use here.

#### HINTS

- Use `help <command>` to view more about a command
- Type `help until` in the terminal and press enter

## 1260. Add until loop

### 1260.1

The `until` loop is very similar to the `while` loop you used. It will execute the loop until a condition is met. Here's an example:

```sh
until [[ CONDITION ]]
do
  STATEMENTS
done
```

Add an `until` loop below your function. Use the double brackets to check if `QUESTION` is equal to `test?`. Move the `GET_FORTUNE` function call to the statements area of the loop. It should run the function until you input `test?` as the question.

#### HINTS

- View the `help [[` or `help test` menu to see if you can find the operator to use
- You want the `==` operator
- The condition should look like this: `[[ $QUESTION == test? ]]`
- Your `until` loop should look like this:

```sh
until [[ $QUESTION == test? ]]
do
  GET_FORTUNE
done
```

- You should only call the `GET_FORTUNE` function once
- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1270. ./fortune.sh

### 1270.1

Run the script and enter something other than `test?`. Then enter `test?` after it asks for a question the second time.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1280. help [[expression]]

### 1280.1

View that `help [[ expression ]]` menu again. You need to find out how to test if the input ends with a question mark (`?`).

#### HINTS

- Type `help [[` or `help [[ expression ]]` in the terminal and press enter

## 1290. [[hello == hello]]; echo $?

### 1290.1

Let's play with these again. You can test if two strings are the same with `==`. In the terminal, use the `[[ ... ]]; echo $?` syntax you used before to test if `hello` is equal to `hello`.

#### HINTS

- Be sure to use the `==` operator
- Type `[[ hello == hello ]]; echo $?` in the terminal and press enter

## 1300. [[hello == world]]; echo $?

### 1300.1

Exit status of `0`, it was true. Using the same syntax, test if `hello` is equal to `world`.

#### HINTS

- Use the `[[ ... ]]; echo $?` syntax
- Be sure to use the `==` operator
- Type `[[ hello == world ]]; echo $?` in the terminal and press enter

## 1310. [[hello =~ el]]; echo $?

### 1310.1

False. An important operator in that menu is `=~`. It allows for pattern matching. Using the same syntax but with this operator, check if `hello` contains the pattern `el`.

#### HINTS

- Use the `[[ ... ]]; echo $?` syntax
- Use the `=~` operator with it
- Type `[[ hello =~ el ]]; echo $?` in the terminal and press enter

## 1320. [["hello world" =~ "lo wor"]]; echo $?

### 1320.1

True. The condition was checking for `el` within the word `hello`. Using the same syntax, check if `hello world` contains the pattern `lo wor`. You will need to put them both in quotes so it recognizes the spaces.

#### HINTS

- Use the `[[ ... ]]; echo $?` syntax
- Use the `=~` operator with it
- Type `[[ "hello world" =~ "lo wor" ]]; echo $?` in the terminal and press enter

## 1330. [["hello world" =~ ^h]]; echo $?

### 1330.1

Your patterns have been checking for literal matches, `el` and `lo wor`. You can use regular expression characters as well, but you can't put the pattern in quotes when you do. Using the same syntax, check if `hello world` starts with an `h` by using `^h` as the pattern.

#### HINTS

- Make sure not to use quotes around the pattern when using regex characters it
- Type `[[ "hello world" =~ ^h ]]; echo $?` in the terminal

## 1340. [["hello world" =~ ^h.+d$]]; echo $?

### 1340.1

Do it again, but use `^h.+d$` as the pattern to see if the string starts with an `h`, has at least one character after it, and ends with a `d`.

#### HINTS

- Use the `[[ ... ]]; echo $?` syntax again
- Check if `hello world` contains the suggested pattern
- Make sure not to use quotes around the pattern when using regex characters it
- Type `[[ "hello world" =~ ^h.+d$ ]]; echo $?` in the terminal

## 1350. VAR="hello world"

### 1350.1

In the terminal, create a variable named `VAR` that equals `hello world`.

#### HINTS

- Type `VAR="hello world"` in the terminal

## 1360. echo $VAR

### 1360.1

Use `echo` to print the variable you just created.

#### HINTS

- Type `echo $VAR` in the terminal

## 1370. [[$VAR == "hello world"]]; echo $?

### 1370.1

Using the `[[ ... ]]; echo $?` syntax, check if your variable is equal to `hello world`.

#### HINTS

- Check the `help [[` menu to find the operator to use
- It's the `==` operator
- You want to check if `$VAR == "hello world"`
- Type `[[ $VAR == "hello world" ]]; echo $?` in the terminal

## 1380. [[ $VAR =~ \?$ ]; echo $?

### 1380.1

Using the same syntax, check if your variable ends with `?` by using the pattern `\?$`.

#### HINTS

- Be sure to use the pattern matching operator
- It's the `=~` operator
- You want to check if `$VAR =~ \?$`
- Type `[[ $VAR =~ \?$ ]]; echo $?` in the terminal

## 1385. [[ test? =~ \?$ ]; echo $?

### 1385.1

It doesn't end with `?`. Just to make sure I don't have the pattern wrong, check if `test?` ends with `?`.

#### HINTS

- Use the same `[[ ... ]]; echo $?` syntax you have been using
- Use the `\?$` pattern to see if a string ends with `?`
- Make sure you're using the pattern matching operator `=~`
- You want to check if `test? =~ \?$`
- Type `[[ test? =~ \?$ ]]; echo $?` in the terminal

## 1390. Change until condition

### 1390.1

I think that will work. Back in your script, change the `until` condition to see if your variable ends with `?`.

#### HINTS

- Use the pattern matching operator with `\?$`
- It's the `=~` operator
- Your condition should look like this: `[[ $QUESTION =~ \?$ ]]`
- Make sure there's spaces inside the brackets and around the operator

## 1400. ./fortune.sh

### 1400.1

Run the script and input something that doesn't end with `?` the first time, then something that does the second.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1410. Add if to GET_FORTUNE

### 1410.1

I know that it asks the same thing if the input isn't what you want. You should let users know that it needs to end with `?`. Add an `if` condition in your **function** that checks `if [[ ! $1 ]]`. Put the existing `echo` statement in the `then` area and make sure the existing `read` is below the whole `if` condition.

#### HINTS

- Here's an example:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi

read QUESTION
```

- Your function should look like this:

```sh
function GET_FORTUNE() {
  if [[ ! $1 ]]
  then
    echo Ask a yes or no question:
  fi

  read QUESTION
}
```

## 1412. Add else to if [[! $1]]

### 1412.1

You can pass arguments to functions like you did with your script. This condition will check if one isn't passed and print the sentence. Add an `else` to your `if`. Use `echo` to print `Try again. Make sure it ends with a question mark:` if the condition fails.

#### HINTS

- Here's an example:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```

- Your `if` condition should look like this:

```sh
if [[ ! $1 ]]
then
  echo Ask a yes or no question:
else
  echo Try again. Make sure it ends with a question mark:
fi
```

## 1413. Add argument to function call

### 1413.1

Now, your function will print one thing if you pass it any argument, and something else if not. In the `until` loop, add `again` as an argument to where you call the function.

#### HINTS

- Here's an example: `FUNCTION_NAME argument`
- Your function call should look like this: `GET_FORTUNE again`
- Your `until` loop should look like this:

```sh
until [[ $QUESTION =~ \?$ ]]
do
  GET_FORTUNE again
done
```

## 1416. Add Initial function call

### 1416.1

Now, each time the function is called in the `until` loop, it will pass `again` as an argument and print the `Try again...` sentence. Before your `until` loop, call the function without an argument so the first time it runs, it prints the initial sentence.

#### HINTS

- Add `GET_FORTUNE` before the `until` loop

## 1420. ./fortune.sh

### 1420.1

Run the script and enter something without a question mark when it asks the first time. Use a question mark the second time.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1425. Add line break in front of response

### 1425.1

Awesome. One last thing. Add an empty line in front of where you print the response.

#### HINTS

- Change the existing `echo ${RESPONSES[$N]}` line
- Use the `-e` flag and the new line (`\n`) character with the `echo` statement
- Make sure to use quotes so it prints the new line
- Run the script and see if it's working
- The suggested command should look like this: `echo -e "\n${RESPONSES[$N]}"`

## 1428. ./fortune.sh

### 1428.1

Run the script one more time to see if you like the output.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1430. touch five.sh

### 1430.1

Excellent. One last program to make. Use `touch` to create a new file named `five.sh` in the same folder as the others.

#### HINTS

- Type `touch five.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1440. chmod +x five.sh

### 1440.1

Give your file executable permissions.

#### HINTS

- Use the `chmod` command with the `+x` flag
- Here's an example `chmod <permissions> <filename>`
- You previously used `chmod +x fortune.sh`
- Type `chmod +x five.sh` in the terminal and press enter

## 1450. Add shebang

### 1450.1

Add a `shebang` to the new script that uses `bash` like the others.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in one of your other scripts to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `five.sh` file

## 1460. Add comment

### 1460.1

Add a comment below the `shebang` that says, `Program to run my other four programs`

#### HINTS

- Comments look like this: `# <comment>`
- Add `# Program to run my other four programs` below the `shebang`
- Capitalization matters

## 1470. Add ./questionnaire.sh

### 1470.1

This program will run all the programs you made so far consecutively. Add the command to run the `questionnaire.sh` file.

#### HINTS

- The command should look like how you would execute the file in the terminal
- Add `./questionnaire.sh` to the `five.sh` file

## 1480. ./five

### 1480.1

Run the file to see if it works. Enter input when it asks.

#### HINTS

- Type `./five.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1490. Add the rest of the scripts

### 1490.1

Add commands to run the rest of your scripts in the file. They should be in this order: `questionnaire`, `countdown`, `bingo`, and `fortune`. Don't forget that your `countdown.sh` file needs an argument, so put a `3` next to it.

#### HINTS

- Your `five.sh` file should have these commands:

```sh
./questionnaire.sh
./countdown.sh 3
./bingo.sh
./fortune.sh
```

## 1500. Clear

### 1500.1

Okay, use `clear` to empty out what's in the terminal before the big moment.

#### HINTS

- Type `clear` in the terminal

## 1510. ./five

### 1510.1

Run the script and enter input when it asks.

#### HINTS

- Type `./five.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1520. help

### 1520.1

Cool. I think all the scripts are done. View the `help` menu again I want to explore one more thing.

#### HINTS

- Type `help` in the terminal and press enter

## 1530. help type

### 1530.1

View more about that `type` command.

#### HINTS

- Use `help <command>` to find out more about a command
- Type `help type` in the terminal and press enter

## 1540. type echo

### 1540.1

It says you can view the type of a command with `type <command>`. Just for fun, lets take a look at the type of a few different commands. View the type of `echo`.

#### HINTS

- Type `type echo` in the terminal and press enter

## 1550. type read

### 1550.1

View the type of the `read` command.

#### HINTS

- Type `type read` in the terminal and press enter

## 1560. type if

### 1560.1

View the type of `if`

#### HINTS

- Type `type if` in the terminal and press enter

## 1570. type then

### 1570.1

View the type of `then`

#### HINTS

- Type `type then` in the terminal and press enter

## 1580. type bash

### 1580.1

Those were all from the `help` menu and described as a `shell builtin` or `shell keyword`. View the type of `bash`

#### HINTS

- Type `type bash` in the terminal and press enter

## 1590. type psql

### 1590.1

That's the location of the `bash` command. View the type of `psql`.

#### HINTS

- Type `type psql` in the terminal and press enter

## 1600. type ./five.sh

### 1600.1

It's showing the location of the commands. View the type of your `./five.sh` file.

#### HINTS

- Type `type ./five.sh` in the terminal and press enter

## 1610. exit

### 1610.1

Last step, close the terminal with the `exit` command. Thanks and happy coding!

#### HINTS

- Type `exit` in the terminal and press enter

### Build a Student Database: Part 1

In this 140-lesson course, you will create a `Bash script` that uses `SQL` to enter information about your computer science students into `PostgreSQL`.

Create a GitHub account if you don't have one. You'll need it when you create the virtual Linux server machine. This process may take a few minutes.

##### `courses.csv`

major,course
Database Administration,Data Structures and Algorithms
Web Development,Web Programming
Database Administration,Database Systems
Data Science,Data Structures and Algorithms
Network Engineering,Computer Networks
Database Administration,SQL
Data Science,Machine Learning
Network Engineering,Computer Systems
Computer Programming,Computer Networks
Database Administration,Web Applications
Game Design,Artificial Intelligence
Data Science,Python
Computer Programming,Object-Oriented Programming
System Administration,Computer Systems
Game Design,Calculus
Web Development,Data Structures and Algorithms
Data Science,Calculus
Web Development,Object-Oriented Programming
Game Design,Game Architecture
System Administration,Computer Networks
Game Design,Algorithms
System Administration,UNIX
System Administration,Server Administration
Computer Programming,Computer Systems
Computer Programming,Python
Network Engineering,Network Security
Web Development,Web Applications
Network Engineering,Algorithms

##### `students.csv`

first_name,last_name,major,gpa
Rhea,Kellems,Database Administration,2.5
Emma,Gilbert,null,null
Kimberly,Whitley,Web Development,3.8
Jimmy,Felipe,Database Administration,3.7
Kyle,Stimson,null,2.8
Casares,Hijo,Game Design,4.0
Noe,Savage,null,3.6
Sterling,Boss,Game Design,3.9
Brian,Davis,null,2.3
Kaija,Uronen,Game Design,3.7
Faye,Conn,Game Design,2.1
Efren,Reilly,Web Development,3.9
Danh,Nhung,null,2.4
Maxine,Hagenes,Database Administration,2.9
Larry,Saunders,Data Science,2.2
Karl,Kuhar,Web Development,null
Lieke,Hazenveld,Game Design,3.5
Obie,Hilpert,Web Development,null
Peter,Booysen,null,2.9
Nathan,Turner,Database Administration,3.3
Gerald,Osiki,Data Science,2.2
Vanya,Hassanah,Game Design,4.0
Roxelana,Florescu,Database Administration,3.2
Helene,Parker,Data Science,3.4
Mariana,Russel,Web Development,1.8
Ajit,Dhungel,null,3.0
Mehdi,Vandenberghe,Database Administration,1.9
Dejon,Howell,Web Development,4.0
Aliya,Gulgowski,System Administration,2.6
Ana,Tupajic,Data Science,3.1
Hugo,Duran,null,3.8

# Learn SQL by Building a Student Database: Part 1

> Welcome to the SQL Lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello SQL` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. psql login

### 20.1

You are started with two `.csv` files with info about your computer science students. You should take a look at them. The top row in each file has titles, and the rest are values for those titles. You will be adding all that info to a PostgreSQL database. Log into the psql interactive terminal with `psql --username=freecodecamp --dbname=postgres` to get started.

#### HINTS

- Type `psql --username=freecodecamp --dbname=postgres` into the terminal and press enter

## 30. \l

### 30.1

View the existing databases with the `\l` shortcut command to see what's here.

#### HINTS

- Type `\l` into the psql prompt and press enter

## 40. CREATE DATABASE students;

### 40.1

All the info from the CSV files will go into a single database. Create a new database named `students`.

#### HINTS

- Use the `CREATE DATABASE` keywords
- Here's an example: `CREATE DATABASE <database_name>;`
- Type `CREATE DATABASE students;` into the psql prompt and press enter

## 50. \l

### 50.1

View the databases again to make sure it got created.

#### HINTS

- Use the **list** shortcut command in the psql prompt
- Type `\l` into the psql prompt and press enter

## 60. \c students

### 60.1

There it is. Connect to your new database so you can start adding tables.

#### HINTS

- Use the `\c` shortcut command
- Here's an example: `\c <database_name>`
- Type `\c students` in the psql prompt

## 70. CREATE TABLE students

### 70.1

The CSV files have a bunch of students with info about them, and some courses and majors. You will have four tables. One for the students and their info, one for each major, another for each course, and a final one for showing what courses are included in each major. First, create the `students` table.

#### HINTS

- Use the `CREATE TABLE` keywords
- There should be parenthesis after the table name
- Here's an example: `CREATE TABLE <table_name>();`
- Type `CREATE TABLE students();` into the psql prompt

## 80. CREATE TABLE majors

### 80.1

The second table will be for each unique major that appears in the data. Create a table named `majors`.

#### HINTS

- Use the `CREATE TABLE` keywords
- There should be parenthesis after the table name
- Here's an example: `CREATE TABLE <table_name>();`
- Type `CREATE TABLE majors();` into the psql prompt

## 90. CREATE TABLE courses

### 90.1

The third table is for each unique course in the data. Create another table named `courses`.

#### HINTS

- Use the `CREATE TABLE` keywords
- There should be parenthesis after the table name
- Here's an example: `CREATE TABLE <table_name>();`
- Type `CREATE TABLE courses();` into the psql prompt

## 100. CREATE TABLE majors_courses

### 100.1

The final table will be a junction table for the majors and courses. Create it with the name `majors_courses`.

#### HINTS

- Use the `CREATE TABLE` keywords
- There should be parenthesis after the table name
- Here's an example: `CREATE TABLE <table_name>();`
- Type `CREATE TABLE majors_courses();` into the psql prompt

## 110. \d

### 110.1

Use the **d**isplay shortcut command to view your tables to make sure your satisfied with them.

#### HINTS

- It's the `\d` shortcut command
- Type `\d` in the psql prompt

## 120. Create student_id Column

### 120.1

Onto the columns. The `students.csv` file has four fields, you will make a column for each of those as well as an ID column. Add a column to your `students` table named `student_id`. Give it a type of `SERIAL` so it automatically increments and make it a `PRIMARY KEY`

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL` and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE students ADD COLUMN student_id SERIAL PRIMARY KEY;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 130. Create first_name Column

### 130.1

The first column in `students.csv` is `first_name`. Add a column to the `students` table with that name. Make it a type of `VARCHAR(50)` and give it the `NOT NULL` constraint.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()` and `NOT NULL` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE students ADD COLUMN first_name VARCHAR(50) NOT NULL;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 140. Create last_name Column

### 140.1

The next column in the data is `last_name`. Add it to the `students` table. Give it the same data type and max-length as `first_name` and make sure it has the `NOT NULL` constraint.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()` and `NOT NULL` keywords
- The max-length should be `50`
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE students ADD COLUMN last_name VARCHAR(50) NOT NULL;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 143. Create major_id Column

### 143.1

The next column is for the major. Since you will have each major in another table this column will be a foreign key that references it. Create a column in the `students` table named `major_id`, give it a data type of `INT` for now. You will come back and set the foreign key later.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, and `INT` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE>;`
- Type `ALTER TABLE students ADD COLUMN major_id INT;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 146. Create gpa Column

### 146.1

Create the last column, `gpa`. The data in the CSV shows that they are decimals with a length of `2` and `1` number is to the right of the decimal. So give it a data type of `NUMERIC(2,1)`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, and `NUMERIC()` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE>;`
- Type `ALTER TABLE students ADD COLUMN gpa NUMERIC(2,1);` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 150. \d students

### 150.1

Use the shortcut command to **d**isplay the details of the `students` table to make sure you like it.

#### HINTS

- It's the `\d` shortcut command
- Add the table name after the command
- Here's an example: `\d <table_name>`
- Type `\d students` in the psql prompt

## 160. Create major_id Column

### 160.1

The foreign key is still missing. Let's fill in the `majors` table next. Add a `major_id` column to it. Make it a type of `SERIAL` and the `PRIMARY KEY` for this table.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL` and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE majors ADD COLUMN major_id SERIAL PRIMARY KEY;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 170. Create major Column

### 170.1

This table will only have one other column for the name of the major. Add a column to it named `major`. Make it a `VARCHAR` with a max-length of `50` and give it the `NOT NULL` constraint.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()` and `NOT NULL` keywords
- The max-length of `50` should go in the parenthesis of `VARCHAR`
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE majors ADD COLUMN major VARCHAR(50) NOT NULL;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 180. \d majors

### 180.1

View the details of the majors table to make sure you like it.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d majors` into the psql prompt

## 183. Create major_id foreign key

### 183.1

This table looks good. Now, set the `major_id` column from the `students` table as a foreign key that references the `major_id` column from the `majors` table. Here's an example of how to do that: `ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);`

#### HINTS

- Type `ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);` in the psql prompt

## 187. \d students

### 187.1

View the details of the `students` table again to make sure the key is there.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d students` into the psql prompt

## 190. Create course_id Column

### 190.1

Next, is the `courses` table. Add a `course_id` column to it. Give it a type of `SERIAL` and make it the primary key.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL` and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE courses ADD COLUMN course_id SERIAL PRIMARY KEY;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 200. Create course Column

### 200.1

Add a `course` column to the `courses` table that's a type of `VARCHAR`. The course names are a little longer, so give them a max-length of `100`. Also, make sure it can't accept null values.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()` and `NOT NULL` keywords
- The max-length of `100` should go in the parenthesis of `VARCHAR`
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE courses ADD COLUMN course VARCHAR(100) NOT NULL;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 220. \d courses

### 220.1

View the details of the courses table to make sure it looks good.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d courses` into the psql prompt

## 230. Create major_id column

### 230.1

One more table to go. The `majors_courses` junction table will have two columns, each referencing the primary key from two related table. First, add a `major_id` column to it. Just give it a type of `INT` for now.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, and `INT` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE>;`
- Type `ALTER TABLE majors_courses ADD COLUMN major_id INT;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 240. Set major_id Foreign Key

### 240.1

Set the `major_id` column you just created as a foreign key that references the `major_id` column from the `majors` table.

#### HINTS

- Use the `ALTER TABLE`, `ADD FOREIGN KEY`, and `REFERENCES` keywords
- Here's an example: `ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);`
- You previously used: `ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);`
- Type `ALTER TABLE majors_courses ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);` into the psql prompt

## 250. Create course_id Column

### 250.1

Next, add a `course_id` column to the same table. Just give it a type of `INT` again for now.

#### HINTS

- It goes in the `majors_courses` table
- Use the `ALTER TABLE`, `ADD COLUMN`, and `INT` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE>;`
- Type `ALTER TABLE majors_courses ADD COLUMN course_id INT;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 260. Set course_id Foreign Key

### 260.1

Set your new `course_id` column as a foreign key that references the other `course_id` column.

#### HINTS

- The referenced column is `course_id` from the `courses` table
- Use the `ALTER TABLE`, `ADD FOREIGN KEY`, and `REFERENCES` keywords
- Here's an example: `ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);`
- You previously used: `ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);`
- Type `ALTER TABLE majors_courses ADD FOREIGN KEY(course_id) REFERENCES courses(course_id);` into the psql prompt

## 270. \d majors_courses

### 270.1

View the details of the table you just worked on to make sure the structure is finished.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d courses` into the psql prompt

## 280. Create Composite Primary Key

### 280.1

There's one thing missing. This table doesn't have a primary key. The data from `courses.csv` will go in this table. A single major will be in it multiple times, and same with a course. So neither of them can be a primary key. But there will never be a row with the same two values as another row. So the two columns together, are unique. You can create a composite primary key that uses more than one column as a unique pair like this: `ALTER TABLE <table_name> ADD PRIMARY KEY(<column_name>, <column_name>);` Add a composite primary key to the table using the two columns.

#### HINTS

- It's the `major_id` and `course_id` columns from the `majors_courses` table
- Type `ALTER TABLE majors_courses ADD PRIMARY KEY(major_id, course_id);` into the psql prompt

## 290. \d majors_courses

### 290.1

View the details of the table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d courses` into the psql prompt

## 300. \d

### 300.1

Okay, now it's finished. View all the tables you ended up with.

#### HINTS

- Use the **d**isplay shortcut command
- Don't include a table name after the command
- It's the `\d` command
- Type `\d` into the psql prompt

## 310. \d majors

### 310.1

Next, you can start adding some info. Since the `students` table needs a `major_id`, you can add a major first. View the details of the `majors` table to see what info it expects.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d majors` into the psql prompt

## 320. INSERT INTO majors

### 320.1

It only needs the name of a major. The ID will be added automatically. Add the first major from the `courses.csv` file into the `majors` table. It's a `VARCHAR`, so make sure to put the value in single quotes.

#### HINTS

- The major is `Database Administration`
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO <table_name>(<column_name>) VALUES(<value>);`
- Type `INSERT INTO majors(major) VALUES('Database Administration');`

## 340. SELECT \* FROM majors

### 340.1

Use `SELECT` to view all the data in the `majors` table to make sure it got inserted correctly.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>;`
- Type `SELECT * FROM majors;` into the psql prompt

## 350. INSERT INTO courses

### 350.1

Next, insert the first course from `courses.csv` into the `courses` table.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- View the details of the table with `\d courses` to see what it expects
- The course name is `Data Structures and Algorithms`
- Make sure to put `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO <table_name>(<column_name>) VALUES(<value>);`
- Type `INSERT INTO courses(course) VALUES('Data Structures and Algorithms');`

## 360. SELECT \* FROM courses

### 360.1

View all the data in the `courses` table to make sure it got added.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>;`
- Type `SELECT * FROM courses;` into the psql prompt

## 370. \d majors_courses

### 370.1

Next, you can add a row into the junction table. View the details of it to see what it expects.

#### HINTS

- It's the `majors_courses` table
- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d majors_courses` into the psql prompt

## 380. INSERT INTO majors_courses

### 380.1

It wants a `major_id` and `course_id`. Add a row to `majors_courses` for the first entry in `courses.csv`.

#### HINTS

- Use `SELECT * FROM <table_name>;` to find the two ID's you already added
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO <table_name>(<column_1_name>, <column_2_name>) VALUES(<value_1>, <value_2>);`
- Type `INSERT INTO majors_courses(major_id, course_id) VALUES(1, 1);` Note that your ID's may differ. You can reset the lesson to ensure they are the same

## 390. SELECT \* FROM majors_courses

### 390.1

View all the data in the table you just added to.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>;`
- Type `SELECT * FROM majors_courses;` into the psql prompt

## 400. \d students

### 400.1

Looks like the row got added. View the details of the `students` table to remind yourself what it expects so you can add the first student to the database.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d students` into the psql prompt

## 420. INSERT INTO students

### 420.1

The output shows what the table needs. Insert the first person from `students.csv` into the `students` table.

#### HINTS

- Enter `SELECT * FROM majors;` to find the `major_id` for the students major
- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO <table_name>(<column_1_name>, <column_N_name>) VALUES(<value_1>, <value_N>);`
- The first part to insert the student looks like this: `INSERT INTO students(first_name, last_name, major_id, gpa)`
- Type `INSERT INTO students(first_name, last_name, major_id, gpa) VALUES('Rhea', 'Kellems', 1, 2.5);` into the psql prompt

## 430. SELECT \* FROM students

### 430.1

Looks like it worked. View all the data in the students table to make sure.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>;`
- Type `SELECT * FROM students;` into the psql prompt

## 440. touch insert_data.sh

### 440.1

Okay, you added a row into each table. It might be wise to review the data and the database structure. Adding the rest of the info one at a time would be tedious. You are going to make a script to do it for you. I recommend "splitting" the terminal for this part. You can do that by clicking the "hamburger" menu at the top left of the window, going to the "Terminal" menu, and clicking "Split Terminal". Once you've done that, use the `touch` command to create a file named `insert_data.sh` in your `project` folder.

#### HINTS

- You cannot use regular terminal commands in the psql prompt. So follow the instructions to split the terminal. Then, type `touch insert_data.sh` in the new terminal and press enter
- Make sure you are in the `project` folder first
- You can get there by entering `cd ~/project` in the terminal

## 450. chmod +x insert_data.sh

### 450.1

You should have two terminals open. One connected to PostgreSQL, and one for entering terminal commands. In the one for terminal commands, use the `chmod` command with the `+x` flag to give you new script executable permissions.

#### HINTS

- Here's an example: `chmod +x <filename>`
- Type `chmod +x insert_data.sh` in the terminal and press enter
- Make sure it's the regular terminal and not the psql one
- You can log back in to psql with `psql --username=freecodecamp --dbname=students`

## 460. Add shebang

### 460.1

Open your new file and add a "shebang" that uses `bash` at the top. It looks like this: `#!/bin/bash`.

#### HINTS

- Add the text, `#!/bin/bash` to your `insert_data.sh` file

## 470. Add comment

### 470.1

Below that, add a single line comment with the text, `Script to insert data from courses.csv and students.csv into students database`.

#### HINTS

- A comment look like this: `# <comment>`
- Add `# Script to insert data from courses.csv and students.csv into students database` below the "shebang" in your `insert_data.sh` file

## 480. Add cat courses.csv

### 480.1

First, you should add all the info from the `courses.csv` file since you need the `major_id` for inserting the student info. `cat` is a terminal command for printing the contents of a file. Here's an example: `cat <filename>`. Below the comment you added, use it to print `courses.csv`.

#### HINTS

- Add `cat courses.csv` to your `insert_data.sh` file below your comment

## 490. ./insert_data.sh

### 490.1

Run your script to see if the file contents get printed.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 500. Add while read

### 500.1

It worked. Instead of printing the content, you can pipe that output into a while loop so you can go through the rows one at a time. It looks like this:

```sh
cat courses.csv | while read MAJOR COURSE
do
  <STATEMENTS>
done
```

Each new line will be read into the variables, `MAJOR` and `COURSE`. Add the above to your `cat` command. In the `STATEMENTS` area, use `echo` to print the `MAJOR` variable.

#### HINTS

- You can print the suggested variable with `echo $MAJOR`
- The whole loop should look like this:

```sh
cat courses.csv | while read MAJOR COURSE
do
  echo $MAJOR
done
```

## 510. ./insert_data

### 510.1

Run the script to see if it worked.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 515. declare -p IFS

### 515.1

It's looping, but the `MAJOR` variable is only being set to the first word. There's a default `IFS` variable in bash. IFS stands for "Internal Field Separator". View it with `declare -p IFS`.

#### HINTS

- Enter `declare -p IFS` in the terminal

## 520. Add IFS

### 520.1

This variable is used to determine word boundaries. It defaults to spaces, tabs, and new lines. This is why the `MAJOR` variable was set to only the first word on each line from the data. Between the `while` and `read` commands, set the `IFS` to a comma like this: `IFS=","`

#### HINTS

- Here's how it looks:

```sh
cat courses.csv | while IFS="," read MAJOR COURSE
do
  echo $MAJOR
done
```

## 530. ./insert_data.sh

### 530.1

Now, it should use the comma in the data to separate words instead of spaces. Run the script again to see if it's working.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 533. Add echo all variables

### 533.1

Looks like that worked. It prints the whole major, including the space. Print the `COURSE` variable on the same line as where you print `MAJOR` to make sure it's all working.

#### HINTS

- Change the `echo` line to `echo $MAJOR $COURSE`
- The whole loop should look like this:

```sh
cat courses.csv | while IFS="," read MAJOR COURSE
do
  echo $MAJOR $COURSE
done
```

## 536. ./insert_data.sh

### 536.1

Run the script again to check.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 540. Delete echo

### 540.1

Okay, your loop is working. You can use the `MAJOR` and `COURSE` variables to access the major or course when you need to insert data or query the database. Delete the echo line so you can figure out what to do next.

#### HINTS

- Delete the `echo $MAJOR $COURSE` line

## 550. Add comments

### 550.1

It helps to plan out what you want to happen. For each loop, you will want to add the major to the database if it isn't in there yet. Same for the course. Then add a row to the `majors_courses` table. Add these single line comments in your loop in this order: `get major_id`, `if not found`, `insert major`, `get new major_id`, `get course_id`, `if not found`, `insert course`, `get new course_id`, `insert into majors_courses`.

#### HINTS

- Here's an example of a single comment: `# <comment>`
- Add the nine suggested single line comments, each on their own line, in the order given
- It should look like this:

```sh
do
  # get major_id

  # if not found

  # insert major

  # get new major_id

  # get course_id

  # if not found

  # insert course

  # get new course_id

  # insert into majors_courses

done
```

## 560. Add PSQL Variable

### 560.1

You used the `psql` command to log in and interact with the database. You can use it to just run a single command and exit. Above your loop, add a `PSQL` variable that looks like this: `PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"`. This will allow you to query your database from your script. The important parts are the `username`, `dbname`, and the `-c` flag that is for running a single command and exiting. The rest of the flags are for formatting.

#### HINTS

- Add the suggested variable between your first comment and the loop
- The suggested area should look like this:

```sh
PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"
```

## 562. Add MAJOR_ID

### 562.1

Now, you can query your database using the `PSQL` variable like this: `$($PSQL "<query_here>")`. The code in the parenthesis will run in a subshell, which is a separate bash process. Below the `get major_id` comment in your loop, create a `MAJOR_ID` variable. Set it equal to the result of a query that gets the `major_id` of the current `MAJOR` in the loop. Make sure to put your `MAJOR` variable in single quotes.

#### HINTS

- Here's an example of how it looks: `MAJOR_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `major='$MAJOR'`
- Here's how the query should look: `SELECT major_id FROM majors WHERE major='$MAJOR'`
- Here's how the whole line should look: `MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")`

## 564. Add echo MAJOR_ID

### 564.1

Below the variable you just created, use `echo` to print it so you can see it's value when you run the script.

#### HINTS

- Add `echo $MAJOR_ID` below the `MAJOR_ID` variable you created

## 566. ./insert_data.sh

### 566.1

Run the script to see what happens.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 568. Add if -z MAJOR_ID

### 568.1

So it went through each major from the CSV file and tried to find `major_id` for each one from the database. Looks like it only found the one you manually inserted earlier. The rest were empty. Below your first `if not found` comment, add an `if` condition that checks if the `MAJOR_ID` variable is empty. You can do that with this test: `[[ -z $MAJOR_ID ]]`. Place the next two comments in the statements area of the `if`.

#### HINTS

- Here's an example of an `if`:

```sh
if CONDITION
then
  STATEMENTS
fi
```

- Make sure your `insert major` and `get new major_id` comments are in the statements area in that order
- Here's how it should look:

```sh
if [[ -z $MAJOR_ID ]]
then
  # insert major

  # get new major_id

fi
```

## 570. Add INSERT_MAJOR_RESULT

### 570.1

The loop will go into this `if` whenever a major isn't found. Here, you will want to insert the major and then get the new id. You will need the ID for inserting data into the `majors_courses` table later. Below your `insert major` comment, create an `INSERT_MAJOR_RESULT` variable. Set it's value to a query that inserts the current major into the database. Don't forget to use single quotes around the value.

#### HINTS

- Here's an example of how to query the database: `INSERT_MAJOR_RESULT=$($PSQL "<query_here>")`
- For the query, you want to use the `INSERT INTO`, and `VALUES` keywords
- Here's an example of how the query part looks: `INSERT INTO <table_name>(<column_name>) VALUES(<value>)`
- You want to insert the `$MAJOR` value
- Here's how the query looks: `INSERT INTO majors(major) VALUES('$MAJOR')`
- Here's how the whole line should look: `INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")`

## 580. Add echo INSERT_MAJOR_RESULT

### 580.1

Below the variable you just created, use `echo` to print it.

#### HINTS

- Add `echo $INSERT_MAJOR_RESULT` right below where you created it

## 590. cp courses.csv

### 590.1

Instead of running through all the data in the CSV file, you should make some test data. In the terminal, use the copy (`cp`) command to copy the `courses.csv` into a new file named `courses_test.csv`.

#### HINTS

- Here's an example: `cp <filename> <new_name>`
- Type `cp courses.csv courses_test.csv` in the terminal and press enter
- Make sure you are using the bash terminal and not the psql one

## 600. Add four records to courses_test.csv

### 600.1

In your new file, remove all the data except for the first five lines. Make sure there's a single empty line at the bottom.

#### HINTS

- Remove all but the first five lines from the `courses_test.csv` file
- Or, replace everything in `courses_test.csv` with the first five lines from `courses.csv`
- Make sure there's one empty line at the bottom
- The `courses_test.csv` file should look like this:

```csv
major,course
Database Administration,Data Structures and Algorithms
Web Development,Web Programming
Database Administration,Database Systems
Data Science,Data Structures and Algorithms

```

## 610. Change to cat courses_test.csv

### 610.1

Back in the `insert_data.sh` script, change your `cat` command to loop through the test file instead of the full one.

#### HINTS

- Change your `cat` command to `cat courses_test.csv` instead of `cat courses.csv`
- The suggested line should look like this:

```sh
cat courses_test.csv | while IFS="," read MAJOR COURSE
```

## 620. ./insert_data.sh

### 620.1

Run the script. It will go through the test data and insert a major into the database each time it doesn't find one already there and print the `MAJOR_ID` and `INSERT_MAJOR_RESULT` variables.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- The `majors` table should have four rows after running the script. If it doesn't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 625. Delete echo MAJOR_ID

### 625.1

Looks like it found an ID that was already in the database twice and inserted three new items into the database. You don't need to print the ID anymore so delete the `echo $MAJOR_ID` line.

#### HINTS

- Delete the `echo $MAJOR_ID` line

## 630. SELECT \* FROM majors

### 630.1

In the psql prompt, use `SELECT` to view all the data from the `majors` table to see what the script added.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 640. TRUNCATE majors

### 640.1

I forgot you inserted `Database Administration` earlier. The script ran and inserted `major` from the top line of the file. Then it added the other two that weren't already in there. You can use `TRUNCATE` to delete all data from a table. In the psql prompt, try to delete all the data in the majors table by entering `TRUNCATE majors;`

#### HINTS

- Enter `TRUNCATE majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 660. TRUNCATE majors, students, majors_courses

### 660.1

It says you "cannot truncate a table referenced in a foreign key constraint." The `students` and `majors_courses` tables use the `major_id` from `majors` as a foreign key. So if you want to delete the data from `majors`, you need to delete the data from those two tables at the same time. Use `TRUNCATE` to delete the data from those three tables. Separate the tables with commas.

#### HINTS

- Here's an example: `TRUNCATE <table_1>, <table_2>, <table_3>;`
- The three tables you want are `majors`, `students`, and `majors_courses`
- Enter `TRUNCATE majors, students, majors_courses;` in the psql prompt

## 670. SELECT \* FROM majors

### 670.1

View all the data in the `majors` table to make sure it's empty.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 680. SELECT \* FROM majors_courses

### 680.1

Looks like it worked. View all the data in the `majors_courses` table to see if that one is empty.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 690. SELECT \* FROM students

### 690.1

It is, check the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 700. SELECT \* FROM courses

### 700.1

Last, check the `courses` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 710. TRUNCATE courses, majors_courses

### 710.1

There should still be one entry in there. Use `TRUNCATE` to delete all the data from the `courses` table. You will need to truncate any tables that use a column from it as a foreign key at the same time.

#### HINTS

- Here's an example: `TRUNCATE <table_1>, <table_2>;`
- The tables you want are `courses`, and `majors_courses`
- Enter `TRUNCATE courses, majors_courses;` in the psql prompt

## 720. SELECT \* FROM courses

### 720.1

View all the data in the `courses` table again.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 730. ./insert_data.sh

### 730.1

Now the database is completely empty. Run the script again to see what gets inserted when the database is empty.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- The `majors` table should have four rows after running the script. If it doesn't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 740. SELECT \* FROM majors

### 740.1

It inserted four that time. In the psql prompt, view all the data in the `majors` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 750. Add if major

### 750.1

You won't want to add the first line from the CSV file to the database since those are just titles. In your script, add an `if` condition at the top of your loop that checks if `$MAJOR != major`. Put all the existing code and comments in your loop in it's statements area so it only does any of it if it's not the first line.

#### HINTS

- Here's an example of an `if`:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

- Your loop area should look like this:

```sh
do
  if [[ $MAJOR != major ]]
  then
    # get major_id
    MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")

    # if not found
    if [[ -z $MAJOR_ID ]]
    then
      # insert major
      INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
      echo $INSERT_MAJOR_RESULT

      # get new major_id

    fi

    # get course_id

    # if not found

    # insert course

    # get new course_id

    # insert into majors_courses

  fi
done
```

## 760. TRUNCATE majors CASCADE

### 760.1

In the psql prompt, use `TRUNCATE` to delete all the data in the `majors` table.

#### HINTS

- Make sure to delete data in the tables that use any of the `majors` columns as a foreign key at the same time
- Here's an example: `TRUNCATE <table_1>, <table_2>;`
- You need to truncate `majors`, `students`, and `majors_courses` together
- Enter `TRUNCATE majors, students, majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 770. SELECT \* FROM majors

### 770.1

View all the data in `majors` table to make sure it's empty.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 780. ./insert_data.sh

### 780.1

Run the script to make sure it's not adding the first line anymore.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- The `majors` table should have three rows after running the script. If it doesn't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 790. SELECT \* FROM majors

### 790.1

It only showed three inserts, that's a good sign. View all the data in `majors` table to make sure it's three you want.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 800. Delete echo INSERT_MAJOR_RESULT

### 800.1

There's three unique majors in your test data. Those were the three added to the database, so it looks like it's working. Delete the line where you print `INSERT_MAJOR_RESULT`.

#### HINTS

- Delete the `echo $INSERT_MAJOR_RESULT` line

## 810. Add if INSERT_MAJOR_RESULT

### 810.1

You want a nicer message when something get's inserted so it's more informative. Below your `INSERT_MAJOR_RESULT` variable, add an `if` statement that checks if the variable is equal to `INSERT 0 1`, which was what it was printing. Use `echo` to print `Inserted into majors, $MAJOR` in the statements area of the `if`.

#### HINTS

- Make sure to put the test value (`INSERT 0 1`) in double quotes since it has spaces.
- The condition you want is: `[[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]`
- The `echo` part looks like this: `echo "Inserted into majors, $MAJOR"`
- The whole thing should look like this:

```sh
if [[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]
then
  echo "Inserted into majors, $MAJOR"
fi
```

## 820. TRUNCATE majors CASCADE

### 820.1

In the psql prompt, truncate the `majors` table again so you can run the script and see the output.

#### HINTS

- Here's an example: `TRUNCATE <table_1>, <table_2>;`
- Make sure to delete data in the tables that use any of the `majors` columns as a foreign key at the same time
- You need to truncate `majors`, `students`, and `majors_courses` together
- Enter `TRUNCATE majors, students, majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 830. ./insert_data.sh

### 830.1

Check to make sure the table is empty. Then, run the script.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- The `majors` table should have three rows after running the script. If it doesn't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 835. Add MAJOR_ID

### 835.1

It's starting to come together. Below your `get new major_id` comment, set the `MAJOR_ID` variable to a query that gets the new `major_id` from the database.

#### HINTS

- Here's an example of how to query the database: `MAJOR_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `major='$MAJOR'`
- Here's how the query should look: `SELECT major_id FROM majors WHERE major='$MAJOR'`
- Here's how the whole line should look: `MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")`
- Make sure it's in the `if [[ -z $MAJOR_ID ]]` statements area

## 840. Add COURSE_ID

### 840.1

So the script will insert the majors correctly. Next are the courses. It will be the same steps as for the majors. Below your `get course_id` comment, add a `COURSE_ID` variable that gets the `course_id` from the database. Remember that your `COURSE` variable will have the current course in the loop.

#### HINTS

- Here's an example of how to query the database: `COURSE_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `course_id='$COURSE'`
- Here's how the query should look: `SELECT course_id FROM courses WHERE course='$COURSE'`
- Here's how the whole line should look: `COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")`

## 850. Add if -z COURSE_ID

### 850.1

It's the same as the majors, so below the second `if not found` comment, add an `if` statement that checks if the query was empty so you can insert the course if needed. Place the existing `insert course` and `get new course_id` comments in the statements area of the `if`.

#### HINTS

- Here's an example of an `if`:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

- Make sure your `insert course` and `get new course_id` comments are in the statements area in that order
- Here's how it should look:

```sh
if [[ -z $COURSE_ID ]]
then
  # insert course

  # get new course_id

fi
```

## 853. Add INSERT_COURSE_RESULT

### 853.1

Below the `insert course` comment, create an `INSERT_COURSE_RESULT` variable that inserts the course into the database.

#### HINTS

- Check the table structure in the psql prompt with `\d courses` if you need to see the columns
- Here's an example of how to query the database: `INSERT_COURSE_RESULT=$($PSQL "<query_here>")`
- For the query, you want to use the `INSERT INTO`, and `VALUES` keywords
- Here's an example of how the query part looks: `INSERT INTO <table_name>(<column_name>) VALUES(<value>)`
- You want to insert the `$COURSE` value
- Here's how the query looks: `INSERT INTO courses(course) VALUES('$COURSE')`
- Here's how the whole line should look: `INSERT_COURSE_RESULT=$($PSQL "INSERT INTO courses(course) VALUES('$COURSE')")`

## 857. Add if INSERT_COURSE_RESULT

### 857.1

The variable should be `INSERT 0 1` again if something gets inserted. Below the variable you just created, add an `if` condition that checks if it is and print `Inserted into courses, $COURSE` using `echo` in it's statements area.

#### HINTS

- The condition you want is: `[[ $INSERT_COURSE_RESULT == "INSERT 0 1" ]]`
- The `echo` part looks like this: `echo "Inserted into courses, $COURSE"`
- The whole thing should look like this:

```sh
if [[ $INSERT_COURSE_RESULT == "INSERT 0 1" ]]
then
  echo "Inserted into courses, $COURSE"
fi
```

## 860. TRUNCATE majors CASCADE

### 860.1

In the psql prompt, truncate the data from the `majors` table so you can run the script again.

#### HINTS

- Here's an example: `TRUNCATE <table_1>, <table_2>;`
- Make sure to delete data in the tables that use any of the `majors` columns as a foreign key at the same time
- You need to truncate `majors`, `students`, and `majors_courses` together
- Enter `TRUNCATE majors, students, majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 870. ./insert_data.sh

### 870.1

Run the script to see if the courses get inserted into the database.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- The `majors` and `courses` tables should have three rows each after running the script. If they don't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 877. SELECT \* FROM courses

### 877.1

It looks like it worked. The test data has three unique courses, and three got added to the database. View the data in the `courses` table to make sure they are correct.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 880. Add echo TRUNCATE tables

### 880.1

Excellent. Instead of manually deleting the data each time you want to run the script, add the command to do it for you. Near the top of the file below your `PSQL` variable, use `echo` to query the database. In the query, truncate your four tables in this order: `students`, `majors`, `courses`, `majors_courses`.

#### HINTS

- Here's an example: `echo $($PSQL "<query_here>")`
- The query you want looks like this: `TRUNCATE students, majors, courses, majors_courses`
- The whole line should look like this: `echo $($PSQL "TRUNCATE students, majors, courses, majors_courses")`

## 890. ./insert_data.sh

### 890.1

Run the script to see if it works.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- The `majors` and `courses` tables should have three rows each after running the script. If they don't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 900. Add COURSE_ID

### 900.1

Awesome. That makes it easier. Below your `get new course_id` comment, set the `COURSE_ID` to the newly inserted `course_id`.

#### HINTS

- Here's an example: `COURSE_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `course_id='$COURSE'`
- Here's how the query should look: `SELECT course_id FROM courses WHERE course='$COURSE'`
- Here's how the whole line should look: `COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")`
- Make sure it's in the `if [[ -z $COURSE_ID ]]` statements area

## 910. Add INSERT_MAJORS_COURSES_RESULT

### 910.1

One more thing to add for this file. Below the `insert into majors_courses` courses comment, create a `INSERT_MAJORS_COURSES_RESULT` variable. Use it and the `MAJOR_ID` and `COURSE_ID` variables you created to insert a row into the `majors_courses` table. Make sure the query has the `major_id` column first. Also, you won't need any quotes around the values for the ID's.

#### HINTS

- Here's an example: `INSERT_MAJORS_COURSES_RESULT=$($PSQL "<query_here>")`
- For the query, you want to use the `INSERT INTO`, and `VALUES` keywords
- Here's an example of how the query part looks: `INSERT INTO <table_name>(<column_name>) VALUES(<value>)`
- Check the table structure in the psql prompt with `\d majors_courses` if you need to see the columns
- You want to add values for the `major_id` and `course_id` columns
- The query you want is: `INSERT INTO majors_courses(major_id, course_id) VALUES($MAJOR_ID, $COURSE_ID)`
- Here's how the whole line should look: `INSERT_MAJORS_COURSES_RESULT=$($PSQL "INSERT INTO majors_courses(major_id, course_id) VALUES($MAJOR_ID, $COURSE_ID)")`

## 920. Add if INSERT_MAJORS_COURSES_RESULT

### 920.1

Below the variable you just created, add an if condition that checks if it's equal to `INSERT 0 1` like the others. In it's statements area, use `echo` to print `Inserted into majors_courses, $MAJOR : $COURSE`.

#### HINTS

- The condition you want is: `[[ $INSERT_MAJORS_COURSES_RESULT == "INSERT 0 1" ]]`
- The `echo` part looks like this: `echo "Inserted into majors_courses, $MAJOR : $COURSE"`
- The whole thing should look like this:

```sh
if [[ $INSERT_MAJORS_COURSES_RESULT == "INSERT 0 1" ]]
then
  echo "Inserted into majors_courses, $MAJOR : $COURSE"
fi
```

## 930. ./insert_data.sh

### 930.1

Run the script. Your tables should get truncated and then it should go through the loop and add all the data from the `courses_test.csv` into the three tables of the database.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- After running the script, the `majors` and `courses` tables should have three rows each, and the `majors_courses` table should have four. If they don't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 950. SELECT \* FROM majors

### 950.1

Looks like it works. You better look around to make sure. View the data in the `majors` table.

#### HINTS

- Use the psql prompt
- Use the `SELECT` and `FROM` keywords with `*` to view all the data in the `majors` table
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 960. SELECT \* FROM courses

### 960.1

Cool, check the `courses` table.

#### HINTS

- Use the psql prompt
- Use the `SELECT` and `FROM` keywords with `*` to view all the data in the `courses` table
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 965. SELECT \* FROM majors_courses

### 965.1

Lastly, view the data in the `majors_courses` table. There should be four rows.

#### HINTS

- Use the psql prompt
- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 970. cp students.csv

### 970.1

Alright, that part of the script is done. Next, you need to add everything from the `students.csv` file. Make some test data again. In the terminal, use the copy command to copy `students.csv` into a file named `students_test.csv`.

#### HINTS

- `cp` is the copy command
- Here's an example: `cp <filename> <new_name>`
- Enter `cp students.csv students_test.csv` in the terminal

## 975. Remove all but fours lines

### 975.1

In the `students_test.csv` file, remove everything but the first five lines like you did for the other test file. Make sure there's an empty line at the bottom again.

#### HINTS

- Remove all but the first five lines from the `students_test.csv` file
- Or, replace everything in `students_test.csv` with the first five lines from `students.csv`
- Make sure there's one empty line at the bottom
- The `students_test.csv` file should look like this:

```csv
first_name,last_name,major,gpa
Rhea,Kellems,Database Administration,2.5
Emma,Gilbert,null,null
Kimberly,Whitley,Web Development,3.8
Jimmy,Felipe,Database Administration,3.7

```

## 980. Add cat students_test.csv

### 980.1

You want to loop through all this info like you did for the other CSV file. The process is the same. Below your existing loop, use `cat` to print your new test file. Pipe the results into a `while` loop, setting the `IFS` to a comma again, and then use `read` to create `FIRST`, `LAST`, `MAJOR` and `GPA` variables from the data. In the loop, use `echo` to print the `FIRST` variable.

#### HINTS

- It should look real similar to your other loop like this
- Here's an example:

```sh
cat <filename> | while IFS="," read VARIABLE_1 VARIABLE_2 VARIABLE_3 VARIABLE_4
do
  STATEMENTS
done
```

- Here's how it looks:

```sh
cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
do
  echo $FIRST
done
```

## 985. ./insert_data.sh

### 985.1

Run the script to see if it prints the `FIRST` (`first_name`) variable correctly. It will take a second since it has to go through the first loop.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- After running the script, the `majors` and `courses` tables should have three rows each, and the `majors_courses` table should have four. If they don't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 1020. Delete echo all variables

### 1020.1

It works :sweat_smile: It printed the first item in each row of the CSV file. It's printing the first line again, you will have to take care of that. First, delete the `echo` line.

#### HINTS

- Delete the `echo $FIRST` line

## 1022. Add if first_name

### 1022.1

Add an if condition to the loop that checks if the `FIRST` variable is not equal to `first_name` so it doesn't do anything for the first line of the file. Don't put anything in the statements area for now.

#### HINTS

- Here's an example of an `if`:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

- The condition you want is `[[ $FIRST != "first_name" ]]`
- Your second loop should look like this:

```sh
cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
do
  if [[ $FIRST != "first_name" ]]
  then

  fi
done
```

## 1025. Add comments

### 1025.1

All the columns in the CSV file can be inserted directly into the database except for the major. You will need to get the `major_id` again for that. There's some `null` values in there as well, so you will need to use `null` if the `major_id` isn't found. Add four single line comments in your loop; `get major_id`, `if not found`, `set to null`, and `insert student` in that order.

#### HINTS

- Here's an example of a single comment: `# <comment>`
- Add the four suggested single line comments, each on their own line, in the order given in the `if` part of your new loop
- It should look like this:

```sh
cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
do
  if [[ $FIRST != "first_name" ]]
  then
    # get major_id

    # if not found

    # set to null

    # insert student

  fi
done
```

## 1030. Add MAJOR_ID

### 1030.1

Below the new `get major_id` comment, set the `MAJOR_ID` variable to a query that gets the `major_id` for the current students major.

#### HINTS

- Here's an example of how it looks: `MAJOR_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `major_id='$MAJOR'`
- Here's how the query should look: `SELECT major_id FROM majors WHERE major='$MAJOR'`
- Here's how the whole line should look: `MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")`

## 1033. Add echo MAJOR_ID

### 1033.1

Below that, use `echo` to print the variable so you can see if it's working.

#### HINTS

- Add `echo $MAJOR_ID` below the `MAJOR_ID` variable you just created

## 1037. ./insert_data.sh

### 1037.1

Run the script to see what happens.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- After running the script, the `majors` and `courses` tables should have three rows each, and the `majors_courses` table should have four. If they don't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 1047. Add if -z MAJOR_ID

### 1047.1

Looking at the test data, it found the ID for all of it except the `null` value. Below the newest `if not found` comment, add an `if` that checks if the variable is empty. Put the `set to null` comment in its statements area.

#### HINTS

- It looks similar to the `if` condition in your first loop
- The condition you want is `[[ -z $MAJOR_ID ]]`
- Make sure the `set to null` comment is in the statements area
- It should look like this:

```sh
if [[ -z $MAJOR_ID ]]
then
  # set to null

fi
```

## 1048. Set MAJOR_ID to null

### 1048.1

When you go to insert the student data, you want to use the `MAJOR_ID` if it's found, or `null` if not. Below the `set to null` comment, set the `MAJOR_ID` variable to `null` so you can use it to insert the data.

#### HINTS

- It should look like this:

```sh
if [[ -z $MAJOR_ID ]]
then
  # set to null
  MAJOR_ID=null
fi
```

## 1049. move echo MAJOR_ID

### 1049.1

Move the `echo $MAJOR_ID` line to below the `if` statement so you can run the script and see the value of the variable if the `major_id` is or isn't found.

#### HINTS

- Move the suggested line below the closing `fi` of the `if [[ -z $MAJOR_ID ]]` statement

## 1050. ./insert_data.sh

### 1050.1

Run the script.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- After running the script, the `majors` and `courses` tables should have three rows each, and the `majors_courses` table should have four. If they don't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 1053. Delete echo MAJOR_ID

### 1053.1

Okay, that should work for inserting the student. Delete the `echo $MAJOR_ID` line.

#### HINTS

- Delete the `echo $MAJOR_ID` line from the file

## 1057. \d students

### 1057.1

One last thing to add. In the psql prompt, view the details of the `students` table so you can see what columns to add.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d students` into the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1060. Add INSERT_STUDENT_RESULT

### 1060.1

You will need to set the four columns when adding the student info. All of them except `student_id`. Below the `insert student` comment, create an `INSERT_STUDENT_RESULT` variable that adds the student to the database. Add the columns in the order they appear in the data, and make sure to only put the two `VARCHAR` columns in single quotes.

#### HINTS

- Here's an example: `INSERT_STUDENT_RESULT=$($PSQL "<query_here>")`
- For the query, you want to use the `INSERT INTO`, and `VALUES` keywords
- Here's an example of how the query part looks: `INSERT INTO <table_name>(<column_1>, <column_N>) VALUES(<value_1>, <value_N>)`
- In your query, make sure the columns to add are in this order: `first_name`, `last_name`, `major_id`, and `gpa`
- The query you want is: `INSERT INTO students(first_name, last_name, major_id, gpa) VALUES('$FIRST', '$LAST', $MAJOR_ID, $GPA)`
- Here's how the whole line should look: `INSERT_STUDENT_RESULT=$($PSQL "INSERT INTO students(first_name, last_name, major_id, gpa) VALUES('$FIRST', '$LAST', $MAJOR_ID, $GPA)")`

## 1070. Add if INSERT_STUDENT_RESULT

### 1070.1

Below the variable you just created, add an `if` statement that checks if it's equal to `INSERT 0 1` like the others. If it is, use `echo` to print `Inserted into students, <first_name> <last_name>`.

#### HINTS

- The condition should look like this: `if [[ $INSERT_STUDENT_RESULT == "INSERT 0 1" ]]`
- Use the `FIRST` and `LAST` variables to print the students name
- The `echo` should look like this: `echo Inserted into students, $FIRST $LAST`
- The whole thing should look like this:

```sh
if [[ $INSERT_STUDENT_RESULT == "INSERT 0 1" ]]
then
  echo "Inserted into students, $FIRST $LAST"
fi
```

## 1080. ./insert_data.sh

### 1080.1

Run the script to see if the students are getting added.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- After running the script, the `majors` and `courses` tables should have three rows each, and the `majors_courses` and `students` tables should have four. If they don't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 1090. SELECT \* FROM students

### 1090.1

I think it's working. View all the data in the `students` table to make sure it matches the CSV file.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1120. Change to cat courses.csv

### 1120.1

Excellent. It added all the students from the test data. Time to try it with the original files. Change the `cat courses_test.csv` line to use the original file again.

#### HINTS

- Change `cat courses_test.csv` to `cat courses.csv`
- The suggested line should look like this: `cat courses.csv | while IFS="," read MAJOR COURSE`

## 1130. Change to cat students.csv

### 1130.1

Next, change the `cat students_test.csv` line to use the original file as well.

#### HINTS

- Change the `cat students_test.csv` to `cat students.csv`
- The suggested line should look like this: `cat students.csv | while IFS="," read FIRST LAST MAJOR GPA`

## 1140. ./insert_data.sh

### 1140.1

Time for the moment of truth. Run the script and see if it works.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- After running the script, the tables should have this many rows: `majors` has 7, `courses` has 17, `majors_courses` has 28, and `students` should have 31. If they don't, there might be something wrong in the script. You can use the reset button to reset the lesson and run the script again

## 1150. SELECT \* FROM students

### 1150.1

That was cool. View all the data in the `students` table to see what you ended up with.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1160. SELECT \* FROM majors

### 1160.1

31 rows. That's how many are in the CSV file. Perfect. Next, check the `majors` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1170. SELECT \* FROM courses

### 1170.1

7 rows. There must be 7 unique majors in the CSV file. View what's in the `courses` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1180. SELECT \* FROM majors_courses

### 1180.1

Looks like there's 17 unique courses in the CSV file. Last, view the data in `majors_courses`. This should have the same number of rows at the CSV file.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1190. ls

### 1190.1

28 rows, same as the CSV file. I think all the data got added correctly. You don't need your test files anymore. In the terminal, use the list command to check what files are in your project folder.

#### HINTS

- It's the `ls` command
- Don't use any flags with the command
- Enter `ls` in the terminal

## 1200. rm students_test.csv

### 1200.1

Use the remove command (`rm`) to delete the `students_test.csv` file.

#### HINTS

- Here's an example `rm <filename>`
- Enter `rm students_test.csv` in the terminal

## 1205. rm courses_test.csv

### 1205.1

Use the same command to delete the `courses_test.csv` file.

#### HINTS

- Here's an example `rm <filename>`
- Enter `rm courses_test.csv` in the terminal

## 1210. ls

### 1210.1

List the contents of the folder again to make sure they're gone.

#### HINTS

- Use the **l**ist command
- It's the `ls` command
- Don't use any flags with the command
- Enter `ls` in the terminal

## 1220. pg_dump --help

### 1220.1

The database is finished for now. The last thing you are going to do is make a "dump" of it. The `pg_dump` command can do that for you. Use the `--help` flag with the command to see what it can do.

#### HINTS

- Here's an example: `<command> <flag>`
- Enter `pg_dump --help` in the terminal
- The bash terminal, not the psql one
- Press enter until you have seen the whole manual

## 1230. dump database

### 1230.1

This is the last step. There's quite a few options there. Enter `pg_dump --clean --create --inserts --username=freecodecamp students > students.sql` in the terminal to dump the database into a `students.sql` file. It will save all the commands needed to rebuild it. Take a quick look at the file when you are done.

#### HINTS

- Enter the suggested command in the terminal
- The bash terminal, not the psql one
- Make sure you are in the `project` folder first

### Learn SQL by Building a Student Database: Part 2

> Welcome to Part 2 of the Build a Student Database Lessons!

### 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello SQL` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

### 20. psql login

### 20.1

In Part 1 of this tutorial, you created a `students` database and then a script to insert information about your computer science students into it. Log into the psql interactive terminal with `psql --username=freecodecamp --dbname=postgres` to see if it's here.

#### HINTS

- Type `psql --username=freecodecamp --dbname=postgres` into the terminal and press enter

### 30. \l

### 30.1

List the databases.

#### HINTS

- Use the **l**ist shortcut command
- It's the `\l` command
- Type `\l` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=postgres` in the terminal to log into the psql prompt if you aren't already

### 40. rebuild database

### 40.1

Your database isn't here. You can use the `.sql` file you created at the end of Part 1 to rebuild it. I recommend "splitting" the terminal. You can do that by clicking the "hamburger" menu at the top left of the window, going to the "Terminal" menu, and clicking "Split Terminal". Once you've done that, enter `psql -U postgres < students.sql` in it to rebuild the database.

#### HINTS

- Enter the suggested command in the terminal
- Make sure you are in the `project` folder first

### 50. \l

### 50.1

A lot of stuff happened in the terminal. That looks promising. In the psql prompt, view the databases again.

#### HINTS

- Use the **l**ist shortcut command
- It's the `\l` command
- Type `\l` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=postgres` in the terminal to log into the psql prompt if you aren't already

### 60. \c students

### 60.1

There's your `students` database. Connect to it.

#### HINTS

- Use the **c**onnect shortcut command with the database name after it
- It's the `\c` command
- Here's an example `\c <database>`
- Type `\c students` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=postgres` in the terminal to log into the psql prompt if you aren't already

### 70. \d

### 70.1

Now that you're connected. Display the tables and relations that are here to see if it's all correct.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Type `\d` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

### 80. \d students

### 80.1

That all looks right. View the details of the `students` table to make sure the stucture is right.

#### HINTS

- Use the **d**isplay shortcut command with the table name after it
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d students` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

### 90. select \* from students

### 90.1

Looks good. Make sure all the data is in the table, as well.

#### HINTS

- View all the data in the `students` table
- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>`;
- Type `SELECT * FROM students;` into the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

### 1220. touch student_info.sh

### 1220.1

The data is all there. You should take a look at the details of the other tables and the data in them to make sure they look good. When you are done, use `touch` in the bash terminal to create `student_info.sh`. You are going to make a script to print info about your students.

#### HINTS

- Here's an example: `touch <filename>`
- Enter `touch student_info.sh` in the terminal
- The bash terminal, not the psql one
- Make sure you are in the `project` folder first

### 1230. chmod +x student_info.sh

### 1230.1

Give your new file executable permissions.

#### HINTS

- It's the `chmod` command with the `+x` flag
- Here's an example: `chmod +x <filename>`
- Type `chmod +x student_info.sh` in the terminal and press enter

### 1240. Add shebang

### 1240.1

Add a shebang that uses bash at the top of your new script.

#### HINTS

- The shebang you want is `#!/bin/bash`
- Add `#!/bin/bash` to your `student_info.sh` file

### 1250. Add comment

### 1250.1

Below the shebang, add a comment that says `Info about my computer science students from students database`.

#### HINTS

- Make sure it's a single line comment
- A comment look like this: `# <comment>`
- Add `# Info about my computer science students from students database` below the "shebang" in your `student_info.sh` file

### 1260. Add echo title

### 1260.1

In the new script, use `echo` to print `~~ My Computer Science Students ~~`. Use the `-e` flag with it to put a new line at the beginning and end of the text.

#### HINTS

- The new line character is `\n`
- Here's an example: `echo -e "\n<text>\n"`
- Add `echo -e "\n~~ My Computer Science Students ~~\n"` below the comment in your `student_info.sh` file

### 1265. ./student_info.sh

### 1265.1

Run the script to make sure it's working.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

### 1270. Add PSQL Variable

### 1270.1

You will want to query the database again to get info about the students to display. Add the same `PSQL` variable you use in your `insert_data.sh` script. It looked like this: `PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"`

#### HINTS

- Add the suggested variable at the bottom of the `student_info.sh` file

### 1280. Add echo students with 4.0

### 1280.1

Below the PSQL variable you just added, use `echo` to print `First name, last name, and GPA of students with a 4.0 GPA:`. Use the `-e` flag to put a new line at the beginning of the sentence.

#### HINTS

- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nFirst name, last name, and GPA of students with a 4.0 GPA:"
```

### 1290. psql SELECT \* FROM students

### 1290.1

You will want to print what that sentence is asking for. You should know how to make that query, but lets practice a little first. `SQL` stands for "Structured Query Language". It's the language you have been using to manage your relational databases. In the psql prompt, view all the data in the students table like you have done many times.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

### 1300. psql SELECT first_name

### 1300.1

You should look at the column titles that were returned. The `*` gets all columns in a table with your query. You can return specific columns by putting the column name in the query instead of `*`. In the psql prompt, view just the `first_name` column from the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT <column_name> FROM <table_name>;`
- Enter `SELECT first_name FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

### 1310. psql SELECT first_name, last_name, gpa

### 1310.1

Just the `first_name` column was returned that time. You can specify as many columns you want returned by separating them with commas. View the `first_name`, `last_name` and `gpa` columns from the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT <column_1>, <column_2>, FROM <table_name>;`
- Enter `SELECT first_name, last_name, gpa FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already
- Don't filter any rows

### 1320. psql SELECT WHERE gpa < 2.5

### 1320.1

You can return only rows you want by adding `WHERE <condition>` to your query. A condition can consist of a column, an operator, and a value. Use one of these to view the same columns as before but only rows `WHERE gpa < 2.5`.

#### HINTS

- Here's an example: `SELECT <columns> FROM <table_name> WHERE <condition>;`
- The previous command you used was `SELECT first_name, last_name, gpa FROM students;`
- The condition you want is `WHERE gpa < 2.5`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa < 2.5;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1330. psql SELECT WHERE gpa >= 3.8

### 1330.1

The `<` only return rows where the `gpa` column was less than `2.5`. Some other operators are: `<`, `>`, `<=`, `>=`. View the same columns, but only rows for students with a `gpa` greater than or equal to `3.8`.

#### HINTS

- The greater than or equal to operator is `>=`
- Here's an example: `SELECT <columns> FROM <table_name> WHERE <condition>;`
- The previous command you used was `SELECT first_name, last_name, gpa FROM students WHERE gpa < 2.5;`
- The condition you want here is `WHERE gpa >= 3.8`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa >= 3.8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1340. psql SELECT WHERE != 4.0

### 1340.1

That only returned students with a GPA of 3.8 or better. There's equal (`=`) and not equal (`!=`) operators as well. View the same columns for students that don't have a 4.0 gpa.

#### HINTS

- Use the not equal (`!=`) operator
- The previous command you used was `SELECT first_name, last_name, gpa FROM students WHERE gpa >= 3.8;`
- The condition you want here is `WHERE gpa != 4.0`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa != 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1360. Add echo query result

### 1360.1

The right query will get you only the data you are looking for. Back in your `student_info.sh` file, add an `echo` command to the bottom that prints what the sentence above it asks for. Place double quotes around it like this: `echo "$($PSQL "<query_here>")"`. This will make it so the output isn't all on one line.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used, `SELECT first_name, last_name, gpa FROM students WHERE gpa != 4.0;` in the psql prompt
- The condition you want here is `WHERE gpa = 4.0`
- Practice the query in the psql prompt to make sure it's getting what you want
- If you run your script, the last echo statement should print:

```sh
Casares|Hijo|4.0
Vanya|Hassanah|4.0
Dejon|Howell|4.0
```

- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE gpa = 4.0")"` to the bottom of the `student_info.sh` file

## 1370. ./student_info.sh

### 1370.1

Run the script to see your students with the highest GPA's.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1380. Add echo courses before D

### 1380.1

Add another `echo` statement at the bottom of the script. Make it print `All course names whose first letter is before 'D' in the alphabet:`. Put a new line in front of it like the first sentence.

#### HINTS

- Use `echo` with the `-e` flag and a new line character
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nAll course names whose first letter is before 'D' in the alphabet:"
```

## 1390. psql SELECT \* FROM majors

### 1390.1

Practice first. In the psql prompt, view all the data in the `majors` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1400. psql SELECT WHERE major = Game Design

### 1400.1

The operators you used with numbers in the last section can be used on text as well. Use the `=` to view all majors named `Game Design`. Don't forget that You need single quotes around text values.

#### HINTS

- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major = 'Game Design'`
- Enter `SELECT * FROM majors WHERE major = 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1410. psql SELECT WHERE major != Game Design

### 1410.1

Next, view all the rows not equal to `Game Design`.

#### HINTS

- The not equal operator is `!=`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major != 'Game Design'`
- Enter `SELECT * FROM majors WHERE major != 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1420. psql SELECT WHERE major > Game Design

### 1420.1

Use the greater than operator to see majors that come after it alphabetically.

#### HINTS

- The greater than operator is `>`
- You want to see what rows are `> 'Game Design'`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major > 'Game Design'`
- Enter `SELECT * FROM majors WHERE major > 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1430. psql SELECT WHERE major >= Game Design

### 1430.1

`Game Design` was not included in the results because it is not `> 'Game Design'`. Try it with the greater than or equal to operator.

#### HINTS

- The greater than or equal to operator is `>=`
- You want to see what rows are `>= 'Game Design'`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major >= 'Game Design'`
- Enter `SELECT * FROM majors WHERE major >= 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1440. psql SELECT WHERE major < G

### 1440.1

It included `Game Design` in the results that time. So if you want to see results that start with a `G` or after, you could use `major >= 'G'`. View the majors that come before `G`.

#### HINTS

- Use the less than (`<`) operator to see rows that come before `G`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major < 'G'`
- Enter `SELECT * FROM majors WHERE major < 'G';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1450. Add echo query result

### 1450.1

In your script, add an `echo` at the bottom to print the suggested info like you did before. Make sure to use double quotes where needed.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used, `SELECT * FROM majors WHERE major < 'G';` in the psql prompt
- The condition you want here is `WHERE course < 'D'`
- You only want to get the `course` column from the `courses` table
- Practice the query in the psql prompt to make sure it's getting what you want
- If you run your script, the last echo statement should print:

```sh
Computer Networks
Computer Systems
Artificial Intelligence
Calculus
Algorithms
```

- Add `echo "$($PSQL "SELECT course FROM courses WHERE course < 'D'")"` to the bottom of the `student_info.sh` file

## 1460. ./student_info.sh

### 1460.1

Run the script to see what course names come before the letter `D`.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1470. Add echo students after R with gpa above 3.8 or below 2.0

### 1470.1

Looks like there is five of them. Add another sentence like the others that says: `First name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3.8 or less than 2.0:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nFirst name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3.8 or less than 2.0:"
```

## 1480. psql SELECT \* FROM students

### 1480.1

To find that, start by using the psql prompt to view all the data in the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1490. psql SELECT WHERE last_name < M

### 1490.1

It returned 31 rows. Use the same command, but only return the rows for students whose last name comes before `M` in the alphabet.

#### HINTS

- Use the less than (`<`) operator to see rows that come before `M`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `last_name < 'M'`
- Enter `SELECT * FROM students WHERE last_name < 'M';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1500. SELECT WHERE last_name < M OR gpa = 3.9

### 1500.1

That returned 18 rows. You can use multiple conditions after `WHERE` with `AND` or `OR`, among others. Just add the keyword and another condition. In the psql prompt, use the same command as before, but add an `OR` to also return rows of students with a 3.9 GPA.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M';`
- Here's an example of the `WHERE` part: `WHERE <condition_1> OR <condition_2>`
- Add an `OR <condition>` to the previous command
- The condition you want to add is `OR gpa = 3.9`
- The whole condition is `WHERE last_name < 'M' OR gpa = 3.9`
- Enter `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1510. psql SELECT WHERE last_name < M AND gpa = 3.9

### 1510.1

It showed rows where one of the conditions was true, there was one more than last time. Enter the previous command, but use `AND` to view only students that meet both conditions.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;`
- Here's an example of the `WHERE` part: `WHERE <condition_1> AND <condition_2>`
- Enter `SELECT * FROM students WHERE last_name < 'M' AND gpa = 3.9;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1520. psql SELECT WHERE last_name < M AND gpa = 3.9 OR gpa < 2.3

### 1520.1

Now it only shows rows where both conditions are true, one person. Enter the previous command, but add a third condition of `OR gpa < 2.3`.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;`
- Here's an example of the `WHERE` part: `WHERE <condition_1> AND <condition_2> OR <condition_2>`
- The conditions look like this: `WHERE last_name < 'M' AND gpa = 3.9 OR gpa < 2.3;`
- Enter `SELECT * FROM students WHERE last_name < 'M' AND gpa = 3.9 OR gpa < 2.3;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1530. psql SELECT WHERE last_name < M AND (gpa = 3.9 OR gpa < 2.3)

### 1530.1

This showed all students whose GPA is less than 2.3 because the final `OR` condition was true for them. It didn't matter what their last name started with. You can group conditions together with parenthesis like this: `WHERE <condition_1> AND (<condition_2> OR <condition_2>)`. This would only return rows where `<condition_1>` is true and one of the others is true. View students whose last name is before `M` that have a GPA of 3.9 or less than 2.3.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9 OR gpa < 2.3;`
- Enter the previous command but group your conditions with parenthesis to only view the suggested rows
- Enter `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1540. Add echo query result

### 1540.1

Two students meet those conditions. Back in the student info file, add an echo command at the bottom to print the suggested rows.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Practice the query in the psql prompt to make sure it's getting what you want
- The conditions should be `last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)`
- If you run your script, the last echo statement should print:

```sh
Efren|Reilly|3.9
Mariana|Russel|1.8
Mehdi|Vandenberghe|1.9
```

- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)")"` to the bottom of the `student_info.sh` file

## 1550. ./student_info

### 1550.1

Run the script to see the results.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1560. Add echo students containing sa or r as second to last letter

### 1560.1

Moving along. Add another `echo` command, like the others, with a sentence that says: `Last name of students whose last name contains a case insensitive 'sa' or have an 'r' as the second to last letter:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nLast name of students whose last name contains a case insensitive 'sa' or have an 'r' as the second to last letter:"
```

## 1570. psql SELECT \* FROM courses

### 1570.1

Start by viewing everything from the `courses` table in the psql prompt to see how you might be able to find this out.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1580. psql SELECT WHERE course LIKE \_lgorithms

### 1580.1

There's a few that contain the word `Algorithms`. You can use `LIKE` to find patterns in text like this: `WHERE <column> LIKE '<pattern>'`. An underscore (`_`) in a pattern will return rows that have any character in that spot. View the rows in this table with a course name that matches the pattern `'_lgorithms'`.

#### HINTS

- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- Enter `SELECT * FROM courses WHERE course LIKE '_lgorithms';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1590. psql SELECT WHERE course LIKE %lgorithms

### 1590.1

That pattern matched only rows that had exactly one character, followed by `lgorithms`. Another pattern character is `%`. It means anything can be there. To find names that start with `W`, you could use `W%`. View the courses that end in `lgorithms`.

#### HINTS

- Use `LIKE` and a pattern with `%` to view the courses ending in `lgorithms`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `%lgorithms`
- Enter `SELECT * FROM courses WHERE course LIKE '%lgorithms';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1600. psql SELECT WHERE course LIKE Web%

### 1600.1

It found two that time. Try viewing courses that start with `Web`.

#### HINTS

- Use `LIKE` and a pattern with `%` to view the courses starting with `Web`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `Web%`
- Enter `SELECT * FROM courses WHERE course LIKE 'Web%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1610. psql SELECT WHERE course LIKE \_e%

### 1610.1

Combine the two pattern matching characters to show courses that have a second letter of `e`.

#### HINTS

- Use `LIKE` and a pattern with `_` and `%` to view the courses whose second letter is `e`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- Remember that the `_` will match any single character and `%` will match any number of characters
- The pattern you want is `_e%`
- Enter `SELECT * FROM courses WHERE course LIKE '_e%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1620. psql SELECT WHERE course LIKE % %

### 1620.1

Nice job! Try viewing the courses with a space in their names.

#### HINTS

- Use `LIKE` and a pattern with two `%` to view the courses with a space
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `% %`
- Enter `SELECT * FROM courses WHERE course LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1630. psql SELECT WHERE course NOT LIKE % %

### 1630.1

There they are. You can use `NOT LIKE` to find things that don't match a pattern. View courses that don't contain a space.

#### HINTS

- Use `NOT LIKE` and a pattern with two `%`'s to view the courses without a space
- Here's an example: `SELECT * FROM courses WHERE course NOT LIKE '<pattern>';`
- The pattern you want is `% %`
- Enter `SELECT * FROM courses WHERE course NOT LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1640. psql SELECT WHERE course LIKE %A%

### 1640.1

Five courses without a space. Try finding the ones that contain an `A`.

#### HINTS

- Use `LIKE` and a pattern with two `%`'s to view the courses containing `A`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course LIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1650. psql SELECT WHERE course ILIKE %A%

### 1650.1

6 rows. This showed all the courses with a capital `A`. `ILIKE` will ignore the case of the letters when matching. Use it to see the courses with an `A` or `a`.

#### HINTS

- Use `ILIKE` and a pattern with two `%`'s to view the courses containing `A` in any case
- Here's an example: `SELECT * FROM courses WHERE course ILIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course ILIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1670. psql SELECT WHERE course NOT ILIKE %a%

### 1670.1

It found 11 rows that time. You can put `NOT` in front of `LIKE` as well. Use it to see the courses that don't contain an `A` or `a`.

#### HINTS

- Use `NOT ILIKE` and a pattern with two `%`'s to view the courses not containing `A` in any case
- Here's an example: `SELECT * FROM courses WHERE course NOT ILIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course NOT ILIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1680. psql SELECT WHERE course NOT ILIKE %A% AND LIKE % %

### 1680.1

You combine these like any other conditions. View the courses that don't have a capital or lowercase `A` and have a space.

#### HINTS

- Use two conditions, one with `NOT ILIKE` and one with `LIKE`
- Here's an example: `SELECT * FROM courses WHERE course NOT ILIKE '<pattern>' AND course LIKE <pattern> ;`
- The two patterns you want are `%A%` and `% %`
- Enter `SELECT * FROM courses WHERE course NOT ILIKE '%A%' AND course LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1690. Add echo query result

### 1690.1

In your student info script, add an `echo` statement at the bottom like the other to print the results of the suggested query.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used `SELECT * FROM courses WHERE course NOT ILIKE '%A%' AND course LIKE '% %';` in the psql prompt
- Practice the query in the psql prompt to make sure it's getting what you want
- The conditions should be `last_name ILIKE '%sa%' OR last_name LIKE %r_`
- If you run your script, the last echo statement should print:

```sh
Gilbert
Savage
Saunders
Hilpert
Hassanah
```

- Add `echo "$($PSQL "SELECT last_name FROM students WHERE last_name ILIKE '%sa%' OR last_name LIKE '%r_'")"` to the bottom of the `student_info.sh` file

## 1700. ./student_info.sh

### 1700.1

Run the script to see the results.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1710. Add echo students without major begin with D or gpa > 3.0

### 1710.1

Looks like five students meet those conditions. Add another `echo` command at the bottom, like the others. Make this one say: `First name, last name, and GPA of students who have not selected a major and either their first name begins with 'D' or they have a GPA greater than 3.0:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nFirst name, last name, and GPA of students who have not selected a major and either their first name begins with 'D' or they have a GPA greater than 3.0:"
```

## 1715. psql SELECT \* FROM students

### 1715.1

Start by looking at all the data in the students table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1720. psql SELECT \* FROM students WHERE gpa IS NULL

### 1720.1

All the fields that are empty or blank are `null`. You can access them using `IS NULL` as a condition like this: `WHERE <column> IS NULL`. View the students who don't have a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `IS NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `gpa IS NULL`
- Enter `SELECT * FROM students WHERE gpa IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1730. psql SELECT WHERE gpa IS NOT NULL

### 1730.1

Inversely, you can use `IS NOT NULL` to see rows that aren't null. View all the info on students that do have a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `IS NOT NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `gpa IS NOT NULL`
- Enter `SELECT * FROM students WHERE gpa IS NOT NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1740. psql SELECT WHERE major IS NULL

### 1740.1

View all the info on students who haven't chosen a major.

#### HINTS

- A null `major_id` field means that student hasn't chosen a major
- Use the `SELECT`, `FROM`, `WHERE`, and `IS NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major_id IS NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1750. psql SELECT WHERE major IS NULL and gpa IS NOT NULL

### 1750.1

View the students who don't have a major, but don't include students without a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, `AND` and `IS NOT NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition_1> AND <condition_2>;`
- The condition you want is `major_id IS NULL AND gpa IS NOT NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL AND gpa IS NOT NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1760. psql SELECT WHERE major_id IS NULL AND gpa IS NULL

### 1760.1

One more. View the students who don't have a major and gpa.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, and `AND` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition_1> AND <condition_2>;`
- The condition you want is `major_id IS NULL AND gpa IS NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL AND gpa IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1770. Add echo query result

### 1770.1

In your script, add an `echo` command at the bottom to print the results the sentence is looking for.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- Practice the query in the psql prompt to make sure it's getting what you want
- You will need to use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, `AND`, `LIKE`, and `OR` keywords
- If you run your script, the last echo statement should print:

```sh
Noe|Savage|3.6
Danh|Nhung|2.4
Hugo|Duran|3.8
```

- You previously used `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Here's an example of the conditions you want: `WHERE <condition_1> AND (<condition_2> OR <condition_3>)`
- The conditions should look like this: `WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0)`
- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0)")"` to the bottom of the `student_info.sh` file

## 1780. ./student_info.sh

### 1780.1

Run the script to see the students that meet those conditions.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1790. Add echo first five courses

### 1790.1

There's three of them. Add another sentence, like the others that says `Course name of the first five courses, in reverse alphabetical order, that have an 'e' as the second letter or end with an 's':`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nCourse name of the first five courses, in reverse alphabetical order, that have an 'e' as the second letter or end with an 's':"
```

## 1800. psql SELECT students ORDER BY gpa

### 1800.1

You can specify the order you want your results to be in by adding `ORDER BY <column_name>` at the end of a query. In the psql prompt, view all the info in the `students` table in order by the GPA's.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `ORDER BY` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> ORDER BY <column>;`
- You want to use `ORDER BY gpa` at the end of the query
- Enter `SELECT * FROM students ORDER BY gpa;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1810. psql SELECT students ORDER BY gpa DESC

### 1810.1

That put the lowest GPA's at the top. When using `ORDER BY`, it will be in ascending (`ASC`) order by default. Add `DESC` (descending) at the end of the last query to put the highest ones at the top.

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa;`
- Add `DESC` to the end of the last command
- Enter `SELECT * FROM students ORDER BY gpa DESC;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1820. psql SELECT students ORDER BY gpa DESC, first_name

### 1820.1

Now, the highest GPA's are at the top. You can add more columns to the order by separating them with a comma like this: `ORDER BY <column_1>, <column_2>`. Any matching values in the first ordered column will then be ordered by the next. View all the student info with the highest GPA's at the top, and in alphabetical order by `first_name` if the GPA's match.

#### HINTS

- Here's an example: `SELECT <columns> FROM <table> ORDER BY <column_1> DESC, <column_2>;`
- You want to use `ORDER BY gpa DESC, first_name` for the order
- Enter `SELECT * FROM students ORDER BY gpa DESC, first_name;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1830. psql SELECT students ORDER BY gpa DESC, first_name LIMIT 10

### 1830.1

#### `LIMIT <number>`

Many times, you only want to return a certain number of rows. You can add `LIMIT <number>` at the end of the query to only get the amount you want. View the students in the same order as the last command, but only return the first 10 rows.

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa DESC, first_name;`
- Add `LIMIT 10` to the end of the last command
- Enter `SELECT * FROM students ORDER BY gpa DESC, first_name LIMIT 10;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1835. psql SELECT students WHERE gpa IS NOT NULL ORDER BY gpa DESC, first_name LIMIT 10

### 1835.1

#### `order of the keywords in your query matters`

The order of the keywords in your query matters. You cannot put `LIMIT` before `ORDER BY`, or either of them before `WHERE`. View the same number of students, in the same order, but don't get the ones who don't have a GPA.

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa DESC, first_name LIMIT 10;`
- The keywords you want are `SELECT`, `FROM`, `WHERE`, `IS NOT NULL`, `ORDER BY`, and `LIMIT`, in that order
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition> ORDER BY <column> LIMIT <number>;`
- The condition you want is `gpa IS NOT NULL`
- Enter `SELECT * FROM students WHERE gpa IS NOT NULL ORDER BY gpa DESC, first_name LIMIT 10;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1840. Add echo query result

### 1840.1

In your script, add the `echo` command to print the rows the sentence is asking for.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:

```sh
Web Programming
Web Applications
Server Administration
Network Security
Database Systems
```

- Practice the query in the psql prompt to make sure it's getting what you want
- You will need the `SELECT`, `FROM`, `WHERE`, `LIKE`, `OR`, `ORDER BY`, `DESC`, and `LIMIT` keywords
- Add `echo "$($PSQL "SELECT course FROM courses WHERE course LIKE '_e%' OR course LIKE '%s' ORDER BY course DESC LIMIT 5")"` to the bottom of the `student_info.sh` file

## 1850. ./student_info.sh

### 1850.1

Run the script to see the courses.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1860. Add echo average GPA to two decimal places

### 1860.1

:sunglasses: Add another `echo` command at the bottom of the script like the others. Make this one say, `Average GPA of all students rounded to two decimal places:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nAverage GPA of all students rounded to two decimal places:"
```

## 1870. psql SELECT MIN(gpa)

### 1870.1

#### `SELECT MIN(<column>) FROM <table>`

There's a number of mathematic functions to use with numerical columns. One of them is `MIN`, you can use it when selecting a column like this: `SELECT MIN(<column>) FROM <table>`. It will find the lowest value in the column. In the psql prompt, view the lowest value in the `gpa` column of the `students` table.

#### HINTS

- Enter `SELECT MIN(gpa) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1880. psql SELECT MAX(gpa)

### 1880.1

#### `SELECT MAX(<column>) FROM <table>`

Another one is `MAX`, use it to see the largest `gpa` of the same table.

#### HINTS

- You previously used `SELECT MIN(gpa) FROM students;`
- Enter `SELECT MAX(gpa) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1890. psql SELECT SUM major_id

### 1890.1

#### `SELECT SUM(<COLUMN_NAME>) FROM students;`

In the same fashion, use a `SUM` function find out what all the values of the `major_id` column in the `students` table add up to.

#### HINTS

- Use `SUM` like you used `MIN` and `MAX`
- You previously used `SELECT MAX(gpa) FROM students;`
- Enter `SELECT SUM(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1900. psql SELECT AVG(major_id)

### 1900.1

`SELECT AVG(<COLUMN_NAME>) FROM students;`
`AVG` will give you the average of all the values in a column. Use it to see the average of the same column.

#### HINTS

- It's the `major_id` column in the `students` table
- Use `AVG` like you used `SUM`, `MIN` and `MAX`
- You previously used `SELECT SUM(major_id) FROM students;`
- Enter `SELECT AVG(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1910. psql SELECT CEIL(AVG(major_id))

### 1910.1

#### `SELECT CEIL(AVG(major_id)) FROM students;`

You can round decimals up or down to the nearest whole number with `CEIL` and `FLOOR`, respectively. Use `CEIL` to round the average `major_id` up to the nearest whole number. Here's an example: `CEIL(<number_to_round>)`.

#### HINTS

- Here's another example: `CEIL(<average_of_major_id's_here>)`
- You previously used `SELECT AVG(major_id) FROM students;` to get the average
- Put `AVG(major_id)` inside the parenthesis of the `CEIL` function
- Enter `SELECT CEIL(AVG(major_id)) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1920. psql SELECT ROUND(AVG(major_id))

### 1920.1

#### `SELECT ROUND(AVG(major_id)) FROM students;`

Or, you can round a number to the nearest whole number with `ROUND`. Use it to round the average of the `major_id` column to the nearest whole number.

#### HINTS

- Here's an example: `ROUND(<average_of_major_id's_here>)`
- You previously used `SELECT CEIL(AVG(major_id)) FROM students;` to round a number up
- Put `AVG(major_id)` inside the parenthesis of the `ROUND` function
- Enter `SELECT ROUND(AVG(major_id)) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1930. psql SELECT ROUND(AVG(major_id),5)

### 1930.1

You can round to a specific number of decimal places by adding a comma and number to `ROUND`, like this: `ROUND(<number_to_round>, <decimals_places>)`. Round the average of the `major_id` to five decimal places.

#### HINTS

- You previously used `SELECT ROUND(AVG(major_id)) FROM students;` to get the average
- Put `AVG(major_id), 5` inside the parenthesis of the `ROUND` function
- Enter `SELECT ROUND(AVG(major_id), 5) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1940. Add echo query result

### 1940.1

You should be able to find what your script is asking for now. Add the command to print it.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:

```sh
3.09
```

- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT ROUND(AVG(major_id), 5) FROM students;` in the psql prompt
- Add `echo "$($PSQL "SELECT ROUND(AVG(gpa), 2) FROM students")"` to the bottom of the `student_info.sh` file

## 1950. ./student_info.sh

### 1950.1

Run the script to see the average GPA of all your students.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1960. Add echo count of students per major with more than one student

### 1960.1

They're doing pretty good. Add another command to print `Major ID, total number of students in a column named 'number_of_students', and average GPA rounded to two decimal places in a column name 'average_gpa', for each major ID in the students table having a student count greater than 1:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nMajor ID, total number of students in a column named 'number_of_students', and average GPA rounded to two decimal places in a column name 'average_gpa', for each major ID in the students table having a student count greater than 1:"
```

## 1970. psql SELECT COUNT(\*) FROM majors

### 1970.1

Another function is `COUNT`. You can use it like this: `COUNT(<column>)`. It will tell you how many entries are in a table for the column. Try it out in the psql prompt by using `COUNT(*)` to see how many majors there are.

#### HINTS

- Use the `SELECT`, `COUNT`, and `FROM` keywords
- Here's an example `SELECT COUNT(<column>) FROM <table>;`
- Use `*` for the column and `majors` for the table
- Enter `SELECT COUNT(*) FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1980. psql SELECT COUNT(\*) FROM students

### 1980.1

Using the same method, check how many students you have.

#### HINTS

- You previously used: `SELECT COUNT(*) FROM majors;`
- Use the `SELECT`, `COUNT`, and `FROM` keywords
- Here's an example `SELECT COUNT(<column>) FROM <table>;`
- Use `*` for the column and `students` for the table
- Enter `SELECT COUNT(*) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1990. psql SELECT COUNT(major_id) FROM students

### 1990.1

Using `*` like that told you how many total rows are in the table. View the count of the `major_id` column in the `students` table to see how many of your students have picked a major.

#### HINTS

- Use the `SELECT`, `COUNT`, and `FROM` keywords
- Here's an example `SELECT COUNT(<column>) FROM <table>;`
- Use `major_id` for the column and `students` for the table
- Enter `SELECT COUNT(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2000. psql SELECT DISTINCT(major_id) FROM students

### 2000.1

Using `major_id` didn't count the `null` values in that column. 23 students have a major. `DISTINCT` is a function that will show you only unique values. You can use it like this: `DISTINCT(<column>)`. View the unique `major_id` values in the `students` table.

#### HINTS

- Use the `SELECT`, `COUNT`, and `FROM` keywords
- Here's an example `SELECT DISTINCT(<column>) FROM <table>;`
- Use `major_id` for the column and `students` for the table
- Enter `SELECT DISTINCT(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2010. psql SELECT FROM students GROUP BY major_id

### 2010.1

There's six unique `major_id` values in the `students` table. You can get the same results with `GROUP BY`. Here's an example of how to use it: `SELECT <column> FROM <table> GROUP BY <column>`. Use this method to view the unique `major_id` values in the `students` table again.

#### HINTS

- You want to **select** and **group** the `major_id` column
- Use the `SELECT`, `FROM`, and `GROUP BY` keywords
- Here's an example `SELECT COUNT(<column>) FROM <table>;`
- Use `major_id` for the column and `students` for the table
- Enter `SELECT major_id FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2020. psql SELECT major_id, count(\*) FROM students GROUP BY major_id

### 2020.1

The output was the same as `DISTINCT`, but with `GROUP BY` you can add any of the aggregate functions (`MIN`, `MAX`, `COUNT`, etc) to it to find more information. For instance, if you wanted to see how many students were in each major you could use `SELECT COUNT(*) FROM students GROUP BY major_id`. View the `major_id` column **and** number of students in each `major_id`.

#### HINTS

- You want to `SELECT` two columns, `major_id` and the `COUNT` of all (`*`) the rows
- Use the `SELECT`, `COUNT`, `FROM`, and `GROUP BY` keywords
- Here's an example `SELECT <column_1>, COUNT(<column_2>) FROM <table> GROUP BY <column_1>;`
- Enter `SELECT major_id, COUNT(*) FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2030. psql SELECT major_id, MIN(gpa) FROM students GROUP BY major_id

### 2030.1 `***`

When using `GROUP BY`, any columns in the `SELECT` area must be included in the `GROUP BY` area. Other columns must be used with any of the aggregate functions (`MAX`, `AVG`, `COUNT`, etc). View the unique `major_id` values with `GROUP BY` again, but see what the lowest GPA is in each of them.

#### HINTS

- The last query was `SELECT major_id, COUNT(*) FROM students GROUP BY major_id;`
- Use the `SELECT`, `MIN`, `FROM`, and `GROUP BY` keywords
- Here's an example `SELECT <column_1>, MIN(<column_2>) FROM <table> GROUP BY <column_1>;`
- Enter `SELECT major_id, MIN(gpa) FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2040. psql SELECT MIN(gpa), MAX(gpa) FROM students GROUP BY major_id

### 2040.1

Nice job. Enter the same query, but add a column that shows you the highest GPA in each major as well.

#### HINTS

- The last query was: `SELECT major_id, MIN(gpa) FROM students GROUP BY major_id;`
- Use the `SELECT`, `MIN`, `MAX`, `FROM`, and `GROUP BY` keywords
- Enter `SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2050. psql SELECT MIN(gpa), MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2050.1

Another option with `GROUP BY` is `HAVING`. You can add it at the end like this: `SELECT <column> FROM <table> GROUP BY <column> HAVING <condition>`. The condition must be an aggregate function with a test. An example to might be to use `HAVING COUNT(*) > 0` to only show what whatever column is grouped that have at least one row. Use `HAVING` to only show rows from the last query that have a maximum GPA of 4.0.

#### HINTS

- The last query was: `SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id;`
- Use the `SELECT`, `MIN`, `MAX`, `FROM`, `GROUP BY`, and `HAVING` keywords
- Here's an example `SELECT <column_1>, MIN(<column>), MAX(<column>) FROM <table> GROUP BY <column_1> HAVING <condition>;`
- The condition you want is `HAVING MAX(gpa) = 4.0`
- Enter `SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2060. psql SELECT MIN(gpa) AS, MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2060.1

Two of your majors have at least one student with a 4.0 GPA. Looking at the results, the column is named `min`. You can rename a column with `AS` like this: `SELECT <column> AS <new_column_name>` Enter the same command, but rename the `min` column to `min_gpa`.

#### HINTS

- The last query was: `SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;`
- Use the `SELECT`, `MIN`, `AS`, `FROM`, and `GROUP BY` keywords
- Rename the `MIN(gpa)` column like this: `MIN(gpa) AS min_gpa`
- Enter `SELECT major_id, MIN(gpa) AS min_gpa, MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2070. psql SELECT MIN(gpa) AS, MAX(gpa) AS FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2070.1

Now the column has a better name. Enter the same command, but rename the `max` column to `max_gpa` as well.

#### HINTS

- The last query was: `SELECT major_id, MIN(gpa) AS min_gpa, MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;`
- Use the `SELECT`, `MIN`, `AS`, `FROM`, and `GROUP BY` keywords
- Rename the `MAX(gpa)` column like this: `MAX(gpa) AS max_gpa`
- Enter `SELECT major_id, MIN(gpa) AS min_gpa, MAX(gpa) AS max_gpa FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2075. psql - SELECT major_id, COUNT() AS number_of_students FROM students GROUP BY major_id

### 2075.1

That's more descriptive. View the `major_id` and number of students in each `major_id` in a column named `number_of_students`.

#### HINTS

- Use the `SELECT`, `COUNT`, `AS`, `FROM`, and `GROUP BY` keywords
- Here's an example: `SELECT <column_1>, COUNT(*) AS <custom_column_name> FROM <table> GROUP BY <column_1>;`
- You want to `COUNT(*) AS number_of_students` and `GROUP BY major_id`
- Enter `SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2080. psql SELECT COUNT(_) AS FROM students GROUP BY major_id HAVING COUNT(_) < 8

### 2080.1

Use `HAVING` with the last query to only show the rows with less than eight students in the major.

#### HINTS

- The last query was: `SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id;`
- Here's an example: `SELECT <column_1>, COUNT(*) AS <custom_column_name> FROM <table> GROUP BY <column_1> HAVING <condition>;`
- The condition you want is `COUNT(*) < 8`
- Enter `SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id HAVING COUNT(*) < 8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2090. Add echo query result

### 2090.1

Well done. Back in your script, add the command the print the suggested results.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:

```sh
|8|2.97
37|6|3.38
36|6|2.92
41|6|3.53
38|4|2.73
```

- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id HAVING COUNT(*) < 8;` in the psql prompt
- Add `echo "$($PSQL "SELECT major_id, COUNT(*) AS number_of_students, ROUND(AVG(gpa),2) AS average_gpa FROM students GROUP BY major_id HAVING COUNT(*) > 1")"` to the bottom of the `student_info.sh` file

## 2100. ./student_info.sh

### 2100.1

Run the script to see the output.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2110. Add echo majors with no students or student with ma

### 2110.1

Add an echo command to your script like the others that prints `List of majors, in alphabetical order, that either no student is taking or has a student whose first name contains a case insensitive 'ma':`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nList of majors, in alphabetical order, that either no student is taking or has a student whose first name contains a case insensitive 'ma':"
```

## 2120. psql students FULL JOIN majors

### 2120.1

#### `JOIN`

The `majors` and `students` table are linked with the `major_id` foreign key. If you want to see the name of a major that a student is taking, you need to `JOIN` the two tables into one. Here's an example of how to do that:
`SELECT * FROM <table_1> FULL JOIN <table_2> ON <table_1>.<foreign_key_column> = <table_2>.<foreign_key_column>;`

In the psql prompt, join the two tables together with the above method.

#### HINTS

- Join the `students` and `majors` table with the method in the example. Use the `students` table first where applicable
- Enter `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2130. psql students LEFT JOIN majors

### 2130.1

#### `***`

It's showing all the columns from both tables, the two `major_id` columns are the same in each row for the ones that have it. You can see that there are some students without a major, and some majors without any students. The `FULL JOIN` you used will include **all** rows from both tables, whether or not they have a row using that foreign key in the other. From there, you could use any of the previous methods to narrow down, group, order, etc. Use a `LEFT JOIN` to join the same two tables in the same way.

#### HINTS

- Join the `students` and `majors` table with a `LEFT JOIN`. Use the `students` table first where applicable
- You previously entered: `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- Replace `FULL JOIN` from the previous command with `LEFT JOIN`
- Enter `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2140. psql students RIGHT JOIN majors

### 2140.1

There's a few less rows than the last query. In the `LEFT JOIN` you used, the `students` table was the left table since it was on the left side of the `JOIN`. `majors` was the right table. A `LEFT JOIN` gets all rows from the left table, but only rows from the right table that are linked to from the left one. Looking at the data, you can see that every student was returned, but the majors without any students were not. Join the same two tables with a `RIGHT JOIN` this time.

#### HINTS

- Join the `students` and `majors` table with a `RIGHT JOIN`. Use the `students` table first where applicable
- You previously entered: `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;`
- Replace `LEFT JOIN` from the previous command with `RIGHT JOIN`
- Enter `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2150. psql students INNER JOIN majors

### 2150.1

The right join showed all the rows from the right table (`majors`), but only rows from the left table (`students`) if they have a major. There's one more type you should know about. Join the two tables with an `INNER JOIN`.

#### HINTS

- Join the `students` and `majors` table with an `INNER JOIN`. Use the `students` table first where applicable
- You previously entered: `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;`
- Replace `RIGHT JOIN` from the previous command with `INNER JOIN`
- Enter `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2160. psql majors LEFT JOIN students

### 2160.1

The `INNER JOIN` only returned students if they have a major and majors that have a student. In other words, it only returned rows if they have a value in the foreign key column (`major_id`) of the opposite table. You should know a little about the four main types of joins now. Try using a `LEFT JOIN` to show **all the majors** but only students that have a major.

#### HINTS

- You want to join the `students` and `majors` tables again
- The left table is the on the left side of `LEFT JOIN`.
- A `LEFT JOIN` will show all rows from the left table.
- You previously entered: `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;`
- Enter `SELECT * FROM majors LEFT JOIN students ON majors.major_id = students.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2170. psql majors INNER JOIN students

### 2170.1

Excellent. All the majors are there. Next, use the appropriate join to show only students that are enrolled in a major, and only majors that have a student enrolled in it.

#### HINTS

- You want to join the `students` and `majors` tables again
- Join them with the join that only shows rows if they have a value in the foreign key column of the other table
- The types of joins you learned are `FULL JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `INNER JOIN`
- The previous query was: `SELECT * FROM majors RIGHT JOIN students ON majors.major_id = students.major_id;`
- You want to use an `INNER JOIN` with the two tables
- Enter `SELECT * FROM majors INNER JOIN students ON majors.major_id = students.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2180. psql majors RIGHT JOIN students

### 2180.1

:thumbsup: Try using a right join to show all students but only majors if a student is enrolled in it.

#### HINTS

- You want to join the `students` and `majors` tables again
- The left table is the on the left side of `RIGHT JOIN`.
- A `RIGHT JOIN` will show all rows from the right table.
- You previously entered: `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;`
- Enter `SELECT * FROM majors RIGHT JOIN students ON majors.major_id = students.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2190. psql majors FULL JOIN students

### 2190.1

That showed all the students since it was the right table of the `RIGHT JOIN`. Use the appropriate join with the same two table to show all rows in both tables whether they have a value in the foreign key column or not.

#### HINTS

- You want to join the `students` and `majors` tables again
- Join them with the join that only shows rows if they have a value in the foreign key column of the other table
- The previous query was: `SELECT * FROM majors INNER JOIN students ON majors.major_id = students.major_id;`
- You want to use an `INNER JOIN` with the two tables
- Enter `SELECT * FROM majors FULL JOIN students ON majors.major_id = students.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2200. psql SELECT \* students INNER JOIN majors

### 2200.1

Lets do some more experiments with joins. Say you wanted to find a list of majors that students are taking. Use the most efficient `JOIN` to join the two tables you need. Only join the tables for now, don't use any other conditions.

#### HINTS

- You want to join the `students` and `majors` tables again
- Use the join that shows you only students that have a major and only majors that have a student.
- Only use the join, don't use a `WHERE`, `HAVING`, or any other filters
- You previously used: `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You want to use an `INNER JOIN`
- Enter `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2210. psql SELECT major students INNER JOIN majors

### 2210.1

Good. To get the list, you don't need all the columns, though. Enter the same command, but just get the column you need.

#### HINTS

- The previous query was `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;`
- Enter the previous query, but only get the column you need
- You only need the `major` column
- Enter `SELECT major FROM students INNER JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2220. psql SELECT DISTINCT(major) students INNER JOIN majors

### 2220.1

You also don't want any duplicates. Use `DISTINCT` to only return the unique ones to see the list of majors who have students.

#### HINTS

- The previous query was `SELECT major FROM students INNER JOIN majors ON students.major_id = majors.major_id;`
- Enter the previous query, but only get the `DISTINCT` majors
- Here's an example: `DISTINCT(<column>)`
- You want to change `major` from the previous query to `DISTINCT(major)`
- Enter `SELECT DISTINCT(major) FROM students INNER JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2230. psql SELECT \* students RIGHT JOIN majors

### 2230.1

There's your list of majors that students are taking :smile: Next, say you wanted a list of majors that students aren't taking. Use the most efficient `JOIN` to join the two tables you need. Only join the tables for now, don't use any other conditions.

#### HINTS

- You want to join the `students` and `majors` tables again
- Use the join that shows you all majors, but only students that have a major
- Only use the join, don't use a `WHERE`, `HAVING`, or any other filters
- You previously used: `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You want to use a `RIGHT JOIN` with the `majors` table on the right of it
- Enter `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2240. psql SELECT \* students RIGHT JOIN majors WHERE student_id IS NULL

### 2240.1

That got you all the majors, you can see the ones that don't have any students. Add a `WHERE` condition to only see the majors without students, use `student_id` in it's condition.

#### HINTS

- The previous query was `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;`
- Enter the previous query, but add a `WHERE <condition>` at the end to only get the rows you need
- Use `IS NULL` with the condition
- The keywords you want are `SELECT`, `FROM`, `RIGHT JOIN`, `ON`, `WHERE` and `IS NULL`
- Use `student_id IS NULL` as the condition
- Enter `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id WHERE student_id IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2245. psql SELECT major students RIGHT JOIN majors WHERE student_id IS NULL

### 2245.1

Now you only have the rows you need. Only get the columns you need with it to see the list of majors without students.

#### HINTS

- The previous query was `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE student_id IS NULL;`
- Enter the previous query, but only get the column you need
- The column you need is the `major` column
- Enter `SELECT major FROM students RIGHT JOIN majors ON students.major_id = majors.major_id WHERE student_id IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2250. psql SELECT \* students LEFT JOIN majors

### 2250.1

You're doing great. Next, use the most efficient 'JOIN' to join the tables you would need if you were asked to get the first name, last name, major, and GPA of students who are taking Data Science or have a gpa of 3.8 or greater. Only join the tables for now, don't use any other conditions.

#### HINTS

- Use the join to get all students but only majors that have a student
- Only use the join, don't use a `WHERE`, `HAVING`, or any other conditional expressions.
- You previously used: `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;`
- You want to use a `LEFT JOIN` with `students` as the left table
- Enter `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2260. psql SELECT students LEFT JOIN majors WHERE major = Data Science OR gpa >= 3.8

### 2260.1

Enter the same command, but use `WHERE` to only get the students that meet the requirements. As a reminder, the goal was to find students who are taking Data Science or have a gpa of 3.8 or greater.

#### HINTS

- The previous query was `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;`
- You want to add two conditions one testing the `major` column, and another testing the `gpa` column
- Here's an example `SELECT * FROM <table_1> LEFT JOIN <table_2> ON <table_1>.<foreign_key> = <table_2>.<foreign> WHERE <condition_1> OR <condition_2>;`
- The two conditions you want are `major = 'Data Science'` and `gpa >= 3.8`
- Enter `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE major='Data Science' OR gpa >= 3.8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2265. psql SELECT columns LEFT JOIN WHERE major = Data Science OR gpa >= 3.8

### 2265.1

Now, you have narrowed it down the rows you are looking for. Enter the same command, but only get the columns you need. There was four of them, the students first name, last name, their major, and GPA. Get them in that order.

#### HINTS

- The previous query was `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE major='Data Science' OR gpa >= 3.8;`
- Enter the previous query, but only get the columns you need
- Get the `first_name`, `last_name`, `major`, and `gpa` columns in that order
- Enter `SELECT first_name, last_name, major, gpa FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE major='Data Science' OR gpa >= 3.8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2270. psql SELECT \* students FULL JOIN majors

### 2270.1

From there, you could put them in a specific order if you wanted or limit the results to a certain number among other things. Lastly, use the most efficient 'JOIN' to join the tables you would need if you were asked to get the first name and major for students whose `first_name`, or the `major`, contains `ri`. Only join the tables for now, don't use any other conditions.

#### HINTS

- Use the join that gets all students and majors
- You previously used: `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;`
- You want to use a `FULL JOIN`
- Enter `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2280. psql SELECT \* students FULL JOIN majors WHERE first_name || major LIKE ri

### 2280.1

Add a `WHERE` to the previous query so you only get the rows you need. The rows you wanted were the ones with a first name or major containing `ri`.

#### HINTS

- The previous query was `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You want to add two conditions one testing the `first_name` column, and another testing the `major` column
- Here's an example `SELECT * FROM <table_1> LEFT JOIN <table_2> ON <table_1>.<foreign_key> = <table_2>.<foreign> WHERE <condition_1> OR <condition_2>;`
- The two conditions you want should use the `LIKE` or `ILIKE` keywords
- They conditions are `WHERE first_name LIKE '%ri%' OR major LIKE '%ri%'`
- Enter `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2290. psql SELECT major FROM students FULL JOIN majors WHERE WHERE first_name || major LIKE ri

### 2290.1

Finally, you only wanted to display the `first_name` and `major` columns. Enter the previous query, but only get the columns you need.

#### HINTS

- The previous query was `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';`
- The two columns you want are `first_name` and `major`
- Enter `SELECT first_name, major FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2310. Add echo query result

### 2310.1

In your script, add the command to print what the sentence is asking for.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:

```sh
Computer Programming
Database Administration
Network Engineering
Web Development
```

- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT first_name, major FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';` in the psql prompt
- Add `echo "$($PSQL "SELECT major FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE major IS NOT NULL AND (student_id IS NULL OR first_name ILIKE '%ma%') ORDER BY major")"` to the bottom of the `student_info.sh` file

## 2320. ./student_info.sh

### 2320.1

Run the script to see the majors described.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2330. Add echo courses with no students or Obie Hilpert

### 2330.1

:smile: Almost done. In your script, add a command to print this sentence like the others: `List of unique courses, in reverse alphabetical order, that no student or 'Obie Hilpert' is taking:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nList of unique courses, in reverse alphabetical order, that no student or 'Obie Hilpert' is taking:"
```

## 2340. psql SELECT \* FROM students FULL JOIN majors

### 2340.1

Lets go over a few more things before you figure out how to see the courses a student is taking. Start by doing a `FULL JOIN` on your `students` and `majors` tables.

#### HINTS

- Join the `students` and `majors` table with a `FULL JOIN`. Use the `students` table first where applicable
- Enter `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2350. psql SELECT students.major_id students FULL JOIN majors

### 2350.1

#### `***`

If you look at the column names, it shows two `major_id` columns. One from the `students` table and one from the `majors` table. If you were to try and query it using `major_id`, you would get an error. You would need to specify what table you want the column from like this: `<table>.<column>`. Enter the same join but only get the `major_id` column from the `students` table.

#### HINTS

- The previous query was `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You can get the column you want with `students.major_id`
- Enter `SELECT students.major_id FROM students FULL JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2360. psql SELECT students.major_id FROM students FULL JOIN majors AS m

### 2360.1

Earlier, you used `AS` to rename columns. You can use it to rename tables, or give them aliases, as well. Here's an example: `SELECT * FROM <table> AS <new_name>;`. Enter the same query you just entered, but rename the `majors` table to `m`. Anywhere the `majors` table is referenced, you will need to use `m` instead of `majors`.

#### HINTS

- The previous query was `SELECT students.major_id FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You want to join `majors AS m` and use `m.major_id` when referencing the joining column
- Enter `SELECT students.major_id FROM students FULL JOIN majors AS m ON students.major_id = m.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2370. psql SELECT s.major_id FROM students AS s FULL JOIN majors AS m

### 2370.1

This doesn't affect the output. It can just make some queries easier to read. Enter the same query, but rename the `students` table to `s` as well.

#### HINTS

- The previous query was `SELECT students.major_id FROM students FULL JOIN majors AS m ON students.major_id = m.major_id;`
- You want to rename `students AS s` and use `s.<column>` when referencing columns from the `students` table
- Enter `SELECT s.major_id FROM students AS s FULL JOIN majors AS m ON s.major_id = m.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2390. psql SELECT \* FROM students FULL JOIN majors USING

### 2390.1

There's a shortcut keyword, `USING` to join tables if the foreign key column has the same name in both tables. Here's an example: `SELECT * FROM <table_1> FULL JOIN <table_2> USING(<column>);`. Use this method to see **all** the columns in the `students` and `majors` table. Don't use any aliases.

#### HINTS

- Enter `SELECT * FROM students FULL JOIN majors USING(major_id);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2400. psql SELECT \* FROM students FULL JOIN majors USING FULL JOIN major_courses USING

### 2400.1

Note that the two `major_id` columns were turned into one with `USING`. In order to find out what courses a student is taking, you will need to join all the tables together. You can add a third table to a join like this: `SELECT * FROM <table_1> FULL JOIN <table_2> USING(<column>) FULL JOIN <table_3> USING(<column>)`. This example will join the first two tables into one, turning it into the left table for the second join. Use this method to join the two tables from the previous query with the `majors_courses` table.

#### HINTS

- The previous query was `SELECT * FROM students FULL JOIN majors USING(major_id);`
- View the details of the `majors_courses` table with `\d majors_courses` to find the foreign key to join on
- It's the `major_id` column
- Enter `SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2410. psql SELECT \* students FULL JOIN majors USING JOIN major_courses USING JOIN courses USING

### 2410.1

You may need to adjust the terminal size to align the output. What you're seeing is every unique combination of rows in the database. Students with a major are listed multiple times, one for each course included in the major. The majors without any students are there along with the courses for them. The students without a major are included, they have no courses and are only listed once. You can join as many tables together as you want. Join the last table to the previous command to get the names of the courses with all this info.

#### HINTS

- The previous query was `SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id);`
- The last table is the `courses` table
- View the details of the `courses` table with `\d courses` to find the foreign key to join on
- Enter `SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses USING(course_id);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2420. Add echo query result

### 2420.1

Same amount of rows, but you get the course names now. In your script, add the command to print the suggested info.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:

```sh
Web Programming
Web Applications
Python
Object-Oriented Programming
Network Security
Data Structures and Algorithms
Computer Systems
Computer Networks
Algorithms
```

- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses USING(course_id);` in the psql prompt
- Add `echo "$($PSQL "SELECT DISTINCT(course) FROM students RIGHT JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) WHERE (first_name = 'Obie' AND last_name = 'Hilpert') OR student_id IS NULL ORDER BY course DESC")"` to the bottom of the `student_info.sh` file

## 2430. ./student_info.sh

### 2430.1

Run the script to see courses described.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2440. Add echo courses with only one student

### 2440.1

Last one. Add a command that prints `List of courses, in alphabetical order, with only one student enrolled:`.

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:

```sh
echo -e "\nList of courses, in alphabetical order, with only one student enrolled:"
```

## 2450. Add echo query result

### 2450.1

Go for it.

#### HINTS

- Add a command at the bottom of the script to print the suggested information
- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:

```sh
Computer Networks
Computer Systems
Server Administration
UNIX
```

- Practice the query in the psql prompt to make sure it's getting what you want
- You can do this
- Give it another try
- I don't know how to get it either
- So there's no answers here
- :confused:
- Try entering this in the psql prompt: `SELECT COUNT(course), COURSE FROM students INNER JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) GROUP BY course;`
- Add `echo "$($PSQL "SELECT course FROM students INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) GROUP BY course HAVING COUNT(student_id) = 1 ORDER BY course")"` to the bottom of the `student_info.sh` file

## 2460. ./student_info.sh

### 2460.1

This is the last step, you have done really well. Run the script one last time. :wave:

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

# Learn Advanced Bash by Building a Kitty Ipsum Translator

> Welcome to the Advanced Bash lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello bash` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. echo hello bash > stdout.txt

### 20.1

The command you just entered printed to the terminal. You can `redirect` that output to a file using `>`. Here’s an example: `<command> > <filename>`. Enter the same command but redirect the output into `stdout.txt`.

#### HINTS

- The last command was `echo hello bash`
- Enter `echo hello bash > stdout.txt` in the terminal

## 30. echo hello bash >> stdout.txt

### 30.1

A `stdout.txt` file was created. You should take a look at it. Instead of printing `hello bash` to the terminal, it **redirected** the output to the file. A single `>` will create or overwrite the file. Use the same command with `>>` to append to the file.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want to append the output of `echo hello bash` to `stdout.txt`
- The last command was `echo hello bash > stdout.txt`
- Enter `echo hello bash >> stdout.txt` in the terminal

## 40. echo hello bash > stdout.txt

### 40.1

Take a look at the file again. The output of `echo hello bash` was added to it.Use the command with one `>` again to overwrite the file.

#### HINTS

- Here's an example: `<command> > <filename>`
- Use `>` to redirect the output of `echo hello bash` to `stdout.txt` so it overwrites the file
- The last command was `echo hello bash >> stdout.txt`
- Enter `echo hello bash > stdout.txt` in the terminal

## 50. > stdout.txt

### 50.1

Take a look at the file. It was overwritten with the output of the command. Enter `> stdout.txt` in the terminal to redirect nothing into the file. Effectively, emptying it.

#### HINTS

- Enter `> stdout.txt` in the terminal

## 60. bad_command

### 60.1

Next, enter `bad_command` in the terminal to see what happens. You will get an error.

#### HINTS

- Enter `bad_command` in the terminal

## 70. bad_command > stderr.txt

### 70.1

Enter the same command, but try to redirect the output to `stderr.txt` using `>`.

#### HINTS

- Here's an example: `<command> > <filename>`
- Make sure to use `stderr.txt` as the filename
- Enter `bad_command > stderr.txt` in the terminal

## 80. bad_command 2> stderr.txt

### 80.1

There’s two types of output, `stdout` (standard out) for when a command is successful, and `stderr` (standard error) for when it’s not. Both of these will print to the terminal by default. `bad_command` was not a valid command, so it printed to `stderr`. You can redirect `stderr` with `2>`. Enter the same command but redirect `stderr` to `stderr.txt`

#### HINTS

- Here's an example: `<command> 2> <filename>`
- Make sure to use `stderr.txt` as the filename
- Enter `bad_command 2> stderr.txt` in the terminal

## 90. echo hello bash 1> stdout.txt

### 90.1

Take a look at the `stderr.txt` file. The error was redirected to the file and nothing printed in the terminal. You used `2>` to redirect `stderr`. Similarily, you can use `1>` to redirect `stdout`. Enter `echo hello bash` again and use it to redirect `stdout` to the `stdout.txt` file.

#### HINTS

- Make sure to use `1>` to redirect `stdout`
- Make sure it's redirected to `stdout.txt`
- Enter `echo hello bash 1> stdout.txt` in the terminal

## 100. read NAME

### 100.1

`stdout` and `stderr` are for output. `stdin` (standard in) is the third thing commands can use and is for getting input. The default is the keyboard. Enter `read NAME` in the terminal to see a command that uses `stdin`.

#### HINTS

- Enter `read NAME` in the terminal

## 110. Enter your name

### 110.1

The `read` command is looking at `stdin` for where to get input, which is pointing to the keyboard. Type your name and press enter.

#### HINTS

- The last command should be `read NAME`
- If the tests don't pass, enter `read NAME` in the terminal, type your name and press enter

## 115. echo $NAME

### 115.1

Use `echo` to print the variable you just created.

#### HINTS

- Here's an example: `echo <VARIABLE>`
- You can use a variable like this: `$<VARIABLE>`
- Enter `echo $NAME` in the terminal

## 120. echo $NAME > stdout.txt

### 120.1

Use `echo` to print the `NAME` variable again, but redirect the `stdout` to `stdout.txt` so it overwrites the file.

#### HINTS

- Here's an example: `<command> > <filename>`
- Make sure to use `stdout.txt` as the filename
- Enter `echo $NAME > stdout.txt` in the terminal

## 140. echo freeCodeCamp > name.txt

### 140.1

Use `echo` and _redirection_ to put the text `freeCodeCamp` in a `name.txt` file for some more testing. Remember that it will create the file if it doesn't exist.

#### HINTS

- Here's an example: `echo <text> > <filename>`
- Use `freeCodeCamp` as the text and `name.txt` as the filename
- Enter `echo freeCodeCamp > name.txt` in the terminal
- Make sure `freeCodeCamp` is the only text in the file

## 150. read NAME < name.txt

### 150.1

Just like you can redirect output, you can redirect `stdin` as well. Here's an example: `<command> < <filename_for_stdin>`. Use the `read` command to assign the `NAME` variable to the contents of `name.txt` by redirecting the `stdin`.

#### HINTS

- You want to use `read NAME` as the command and `name.txt` as the input
- Enter `read NAME < name.txt` in the terminal

## 160. echo $NAME

### 160.1

`stdin` was pointing to the `name.txt` file this time. Use `echo` to print the `NAME` variable again.

#### HINTS

- Here's an example: `echo <VARIABLE>`
- You can use a variable like this: `$<VARIABLE>`
- Enter `echo $NAME` in the terminal

## 170. echo your_name | read NAME

### 170.1

Now the variable is set to the content of the file, which was the input. Another way to set the `stdin` is by using the pipe (`|`). It will use the output from one command as input for another. Here's an example: `<command_1> | <command_2>`. This will take the `stdout` from `command_1` and use it as the `stdin` for `command_2`. Use this method to **echo** your name and pipe the output into the `read` command which reads your name into the `NAME` variable.

#### HINTS

- Enter `echo <your_name> | read NAME`
- Replace `<your_name>` with your name

## 175. echo $NAME

### 175.1

Use echo to print the variable again.

#### HINTS

- Here's an example: `echo <VARIABLE>`
- You can use a variable like this: `$<VARIABLE>`
- Enter `echo $NAME` in the terminal

## 178. cat

### 178.1

It worked, but it doesn't look like it. When you used the pipe (`|`) to set the input for `read`, it ran the command in a subshell or subprocess. Basically, another terminal instance within the one you see. The variable was set in there and didn't affect the one you had previously set. `cat` is another command that takes input. Enter it in the terminal.

#### HINTS

- Enter `cat` in the terminal

## 180. end cat

### 180.1

`cat` will print the contents of a file or input to `stdout`. You didn't specify any input for the command. Feel free to type something and press enter. When you are done, press `control+c` to finish the command.

#### HINTS

- `cat` should be the last command entered
- Close the command with `control+c`

## 185. cat name.txt

### 185.1

`cat` can take a filename as an argument. Use it again with your `name.txt` file as an arguement to print the contents of the file.

#### HINTS

- Here's an example: `cat <filename>`
- Use the `name.txt` file
- Enter `cat name.txt` in the terminal

## 190. cat < name.txt

### 190.1

Enter the same command but use redirection to set the `stdin` to `name.txt`

#### HINTS

- Use `<` to redirect input
- Here's an example `<commnad> < <filename>`
- It was the `cat` command with the `name.txt` file
- Enter `cat < name.txt` in the terminal

## 200. echo your_name | cat

### 200.1

Use `echo` to print your name and pipe the output into the `cat` command.

#### HINTS

- Here's an example: `<command_1> | <command_2>`
- The first command should be `echo <your_name>`
- The second is `cat`
- Enter `echo <your_name> | cat` in the terminal
- Replace `<your_name>` with your name

## 210. touch script.sh

### 210.1

You should be starting to get the hang of how `stdin`, `stdout`, and `stderr` work but let's try another example with your own command. Use `touch` to create a file named `script.sh`.

#### HINTS

- Here's an example: `touch <filename>`
- Enter `touch script.sh` in the terminal
- Make sure you are in the `project` folder first

## 220. chmod +x script.sh

### 220.1

Give your new script executable permissions with the `chmod` command and the `+x` flag.

#### HINTS

- Here's an example: `chmod +x <filename>`
- Enter `chmod +x script.sh` in the terminal

## 230. Add shebang

### 230.1

This will be a very simple script with only a few commands. At the top of file, add a shebang that looks like this: `#!/bin/bash`.

#### HINTS

- Add the suggestion at the top of the `script.sh` file
- Add `#!/bin/bash` at the top of the `script.sh` file

## 240. Add read NAME

### 240.1

Below the shebang, add a `read` command that reads input into a `NAME` variable.

#### HINTS

- Add the suggestion to the bottom of the `script.sh` file
- Add `read NAME` to the bottom of the `script.sh` file

## 250. Add echo Hello $NAME

### 250.1

Below that, use `echo` to print `Hello <name>` using the variable.

#### HINTS

- Add the suggestion to the bottom of the `script.sh` file
- Here's an example: `echo Hello <VARIABLE>`
- You can use a variable like this: `$<VARIABLE>`
- Use the `NAME` variable
- Add `echo Hello $NAME` to the bottom of the `script.sh` file

## 260. Add bad_command

### 260.1

One more thing. Add `bad_command` at the bottom of the file.

#### HINTS

- Add the suggestion to the bottom of the `script.sh` file
- Add `bad_command` to the bottom of the `script.sh` file

## 264. ./script.sh

### 264.1

Your script takes input from `stdin` and will output to `stdout` and `stderr`. Run your script and don't input anything for now.

#### HINTS

- Here's how you can run a script: `./<script_file>`
- Enter `./script.sh` in the terminal

## 266. end ./script.sh

### 266.1

The `read` command in your script is waiting for input. Type your name and press enter.

#### HINTS

- The last command should be `./script.sh`
- Run `./script.sh` in the terminal and enter input when it is waiting

## 270. echo your_name | ./script

### 270.1

You input your name, and your script output the result of the two commands. Run the script again, but use a pipe to echo your name as the input.

#### HINTS

- Here's an example: `<command_1> | <command_2>`
- Use `echo <your_name>` as the first command
- And `./script.sh` as the second
- Enter `echo <your_name> | ./script.sh` in the terminal
- Replace `<your_name>` with your name

## 280. echo your_name | ./script 2> stderr

### 280.1

It didn't ask for input this time because you gave it input with the pipe. The two types of output were printed in the terminal. Run the same command but redirect `stderr` output to the `stderr.txt`

#### HINTS

- The previous command was `echo <your_name> | ./script.sh`
- You can redirect `sterr` output with `2>`
- Here's an example: `<previous_command> 2> <filename>`
- Enter `echo <your_name> | ./script.sh 2> stderr.txt`

## 290. echo your_name | ./script 2> stderr 1> stdout

### 290.1

Again, it didn't ask for input. This time it only printed your name to the terminal and not the output of `bad_command`. That produced an error, which you redirected to `stderr.txt`. Take a look at that file. You can redirect both the `stderr` and `stdout` by adding another redirection at the end like this: `> <filename>`. Enter the same command, redirect the `stderr` to the same place again, and the `stdout` to `stdout.txt`.

#### HINTS

- Here's another example: `<commands> 2> <filename> > <filename>`
- The previous command was `echo <your_name> | ./script.sh 2> stderr.txt`
- Add `> stdout.txt` to the end of the previous command
- Enter `echo <your_name> | ./script.sh 2> stderr.txt > stdout.txt` in the terminal

## 300. ./script < name

### 300.1

It didn't ask for input and nothing was printed in the terminal that time. You redirected both outputs to files. You should take a look at them to see if they have what you expected. Run your script again, use redirection to set `name.txt` as the input. Don't redirect any of the output.

#### HINTS

- You should have a `name.txt` file with only the text `freeCodeCamp` in it
- Here's an example: `<command> < <filename>`
- Enter `./script.sh < name.txt` in the terminal

## 310. ./script < name 2> stderr

### 310.1

Excellent. Run the same command, but redirect the `stderr` to `stderr.txt`.

#### HINTS

- The previous command was `./script.sh < name.txt`
- You can redirect `sterr` output with `2>`
- Here's an example: `<previous_command> 2> <filename>`
- Enter `./script.sh < name.txt 2> stderr.txt`

## 320. ./script < name 2> stderr 1> stdout

### 320.1

Nice job! Run it again, redirect the `stderr` to the same place and the `stdout` to `stdout.txt`

#### HINTS

- You can redirect `stdout` with `>`
- Here's an example: `<commands> 2> <filename> > <filename>`
- The previous command was `./script.sh < name.txt 2> stderr.txt`
- Add `> stdout.txt` to the end of the previous command
- Enter `./script.sh < name.txt 2> stderr.txt > stdout.txt` in the terminal

## 324. cat kitty_ipsum_1.txt

### 324.1

:smile: You have two `kitty_ipsum` files. Find out what's in them by printing the first one in the terminal with `cat`.

#### HINTS

- Here's an example: `cat <filename>`
- It's the `kitty_ipsum_1.txt` file
- Enter `cat kitty_ipsum_1.txt` in the terminal

## 326. cat kitty_ipsum_2.txt

### 326.1

It's some kitty ipsum. You may enjoy reading it :smile: Look at the second one with `cat` like you did this one.

#### HINTS

- Here's an example: `cat <filename>`
- It's the `kitty_ipsum_2.txt` file
- Enter `cat kitty_ipsum_2.txt` in the terminal

## 330. wc kitty_ipsum_1

### 330.1

You will write a small script to translate both of them into doggy ipsum. For now, you will learn some commands to figure out how. The first one is `wc`. It prints some info about a file. It can take a file as an argument like the `cat` command. Use it to see what it shows you about your `kitty_ipsum_1.txt` file.

#### HINTS

- Here's an example: `wc <filename>`
- Enter `wc kitty_ipsum_1.txt` in the terminal

## 340. man wc

### 340.1

Not quite sure what all those numbers mean. Check the manual of the `wc` command to see if you can find out more.

#### HINTS

- View the manual of a command with `man`
- Here's an example: `man <command>`
- Enter `man wc` in the terminal
- Press enter until you have seen the whole manual

## 350. wc -l kitty_ipsum_1

### 350.1

`wc` stands for `word count`. It showed you how many lines were in the file, how many words, and how many bytes. Use the `-l` flag to only output how many lines are in the file. Don't do any redirecting of input or output.

#### HINTS

- Here's an example `<command> <flag> <filename>`
- Enter `wc -l kitty_ipsum_1.txt` in the terminal

## 360. wc -w kitty_ipsum_1

### 360.1

The file has 27 lines. Check how many words are in the file.

#### HINTS

- Don't use any redirection
- Check the manual with `man wc` to find the flag you need
- It's the `-w` flag
- Enter `wc -w kitty_ipsum_1.txt` in the terminal

## 370. wc -m kitty_ipsum_1

### 370.1

332 words are in the `kitty_ipsum_1.txt` file. Lastly, check how many characters it has.

#### HINTS

- Don't use any redirection
- Check the manual with `man wc` to find the flag you need
- It's the `-m` flag
- Enter `wc -m kitty_ipsum_1.txt` in the terminal

## 380. wc kitty_ipsum_1

### 380.1

Use the command without any flags to see if the numbers are the same.

#### HINTS

- Don't use any redirection
- Enter `wc kitty_ipsum_1.txt` in the terminal

## 390. cat kitty_ipsum_1 | wc

### 390.1

That shows the byte count instead of the character count. Some characters must be more than one byte. Use `cat` to pipe the content of the file as the input of the `wc` command to see if the output is the same.

#### HINTS

- Here's an example: `<command_1> | <command_2>`
- The first command should be `cat kitty_ipsum_1.txt`
- The second is `wc`
- Enter `cat kitty_ipsum_1.txt | wc` in the terminal

## 400. wc < kitty_ipsum_1

### 400.1

It looks like the way you give input to a command may affect the output. It only printed the numbers that time and not the filename. Try using redirection as the input with the same file and command to see what that outputs.

#### HINTS

- You can redirect input with `<`
- Here's an example: `<command> < <filename>`
- Enter `wc < kitty_ipsum_1.txt` in the terminal

## 420. echo ~~ kitty_ipsum_1.txt info ~~ > kitty_info

### 420.1

No filename again with fewer spaces that time. You may have to play with certain commands to get the output you are looking for. You are going to create a file that has some meta information about the two kitty ipsum files in it. Use `echo` and redirection to print `~~ kitty_ipsum_1.txt info ~~` to a file named `kitty_info.txt`. Make sure to place the text in quotes.

#### HINTS

- Remember that redirecting output will create the file if it doesn't exist
- You can redirect output with `>`
- Here's an example: `<command> > <filename>`
- Enter `echo "~~ kitty_ipsum_1.txt info ~~" > kitty_info.txt` in the terminal
- Make sure to use quotes around the text

## 430. echo Number of lines >> kitty_info

### 430.1

Open the file so you can keep track of what's in it. Use `echo` and the `-e` flag with the new line character (`\n`) to **append** `Number of lines:` to the `kitty_info.txt` file. Add the new line character at the beginning of the text so there's an empty line. Remember that you can append output to a file with `>>`.

#### HINTS

- Here's an example: `<command> >> <filename>`
- The command you want is `echo -e "\nNumber of lines:"`
- Enter `echo -e "\nNumber of lines:" >> kitty_info.txt`

## 440. cat kitty_ipsum_1 | wc -l >> kitty_info

### 440.1

You should be able to find out how many lines are in the `kitty_ipsum_1.txt` file and add that number to the `kitty_info.txt` file. Use the `cat` command to pipe the content of `kitty_ipsum_1.txt` as input for the `wc` command. Use the flag for getting the number of lines from that input and **append** the number to the `kitty_info.txt` file. **Tip:** enter the command without appending to see if it's working first.

#### HINTS

- Here's an example: `cat <filename> | wc <flag> >> <filename>`
- The flag you want is `-l`
- You previously used `cat kitty_ipsum_1.txt | wc`
- Enter `cat kitty_ipsum_1.txt | wc -l >> kitty_info.txt` in the terminal

## 450. echo -e Number of words: >> kitty_info

### 450.1

Next, you want to put a word count of the file in the info. Use `echo` again to append `Number of words:` to `kitty_info.txt`. Put a new line in front of the text like you did for the first one.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of lines:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of words:" >> kitty_info.txt` in the terminal

## 460. cat kitty_ipsum_1 | wc -w >> kitty_info

### 460.1

Use `cat` and the pipe method again to append the number of words in `kitty_ipsum_1.txt` to `kitty_info.txt`.

#### HINTS

- Here's an example: `cat <filename> | wc <flag> >> <filename>`
- The flag you want is `-w`
- You previously used `cat kitty_ipsum_1.txt | wc -l >> kitty_info.txt`
- Enter `cat kitty_ipsum_1.txt | wc -w >> kitty_info.txt` in the terminal

## 470. echo -e Number of characters: >> kitty_info

### 470.1

Next, you want to add the number of characters. Use the `echo` command with redirection to append `Number of characters:`, with a new line in front of it, to `kitty_info.txt` like you did with the other sentences.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of words:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of characters:" >> kitty_info.txt` in the terminal

## 480. wc -m < kitty_ipsum_1 >> kitty_info

### 480.1

Append the number of characters in `kitty_ipsum_1.txt` to `kitty_info.txt`. Use the redirection method as the input for the `wc` command this time instead of the piping method.

#### HINTS

- You can redirect input with `<`
- Here's an example: `<command> < <input_filename> >> <output_filename>`
- Use the `-m` flag with the `wc` command to find the number of characters in a file
- You previously used `wc < kitty_ipsum_1.txt`
- Enter `wc -m < kitty_ipsum_1.txt >> kitty_info.txt`

## 490. grep meow kitty_ipsum_1

### 490.1

`grep` is a command for searching for patterns in text. You can use it like this: `grep '<pattern>' <filename>`. Use it to search for the pattern `meow` in the `kitty_ipsum_1.txt` file.

#### HINTS

- Enter `grep 'meow' kitty_ipsum_1.txt` in the terminal

## 500. man grep

### 500.1

It showed you all the lines that contain `meow` somewhere in them, but it’s a little messy. View the manual of `grep` to see if you can find anything to help.

#### HINTS

- View a man with `man <command>`
- Enter `man grep` in the terminal
- Press enter until you have seen the whole manual

## 510. grep --color meow kitty_ipsum_1

### 510.1

That's a lot of options. Use `grep` to search for the `meow` pattern in the same file, but add that `--color` flag to see if it's a little more helpful.

#### HINTS

- Here's an example: `grep <flag> '<pattern>' <filename>`
- You previously entered `grep 'meow' kitty_ipsum_1.txt`
- Enter `grep --color 'meow' kitty_ipsum_1.txt` in the terminal

## 520. grep --color -n cat kitty_ipsum_1

### 520.1

That’s better. Add the flag to show all the line numbers with the command.

#### HINTS

- View the manual `man grep` to find the flag you need
- It's the `-n` flag
- The last command was `grep --color 'meow' kitty_ipsum_1.txt`
- Enter `grep --color -n 'meow' kitty_ipsum_1.txt` in the terminal

## 530. grep --color -n meow[a-z] kitty_ipsum_1

### 530.1

It's showing the line number of each match it found. `grep` can use regular expressions, too. Enter the previous command, but change the pattern to `meow[a-z]*` to see all words that start with `meow`.

#### HINTS

- The last command was `grep --color -n 'meow' kitty_ipsum_1.txt`
- Enter `grep --color -n 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 540. echo -e \nNumber of times meow or meowzer appears: >> kitty_info

### 540.1

Looking at the output, you can see that it matched `meow` and `meowzer`, instead of just `meow`. Use the `echo` command and redirection to append the text `Number of times meow or meowzer appears:`, with a new line in front of it, to the `kitty_info.txt` file.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of characters:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt` in the terminal

## 550. grep --color meow[a-z] kitty_ipsum_1

### 550.1

So how can you find how many times those two words appear? Use grep to find the `meow[a-z]*` pattern in the file again to see how many times they appear. Add the `--color` flag to the command.

#### HINTS

- Don't use the `-n` flag to show the line numbers.
- Enter `grep --color 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 560. grep -c meow[a-z] kittpy_ipsum_1

### 560.1

It looks like seven, but how can you get a count of that from the command line to append to the info file for the next piece of information? `grep` has a `-c` flag to give you a count. Enter the last command but use that instead of the `--color` flag.

#### HINTS

- The last command was `grep --color 'meow[a-z]*' kitty_ipsum_1.txt`
- Enter `grep -c 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 570. man grep

### 570.1

That gave you a count of the number lines that the pattern occurred on. Check the manual of grep to see if there's a way to find a count of all the words matched.

#### HINTS

- View a man with `man <command>`
- Enter `man grep` in the terminal
- Press enter until you have seen the whole manual

## 580. grep -o meow[a-z] kitty_1

### 580.1

It doesn't look like that's an option. But there is a `-o` flag that will says it will put the matches on their own lines. Try that one with that command instead of the `-c` flag.

#### HINTS

- The previous command was `grep -c 'meow[a-z]*' kitty_ipsum_1.txt`
- Replace the `-c` with `-o` in the previous command
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 590. grep -o meow[a-z] kitty_1 | wc -l

### 590.1

That gave you each match on it's own line. You can use the `wc` command again to get a count of the lines to find out how many matches there are. Pipe the output of the last command into the `wc` command and use the flag for showing the line count.

#### HINTS

- The last command was `grep -o 'meow[a-z]*' kitty_ipsum_1.txt`
- Here's an example: `<command_1> | <command_2>`
- You want to use the `-l` flag with the `wc` command
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc -l` in the terminal

## 600. grep -o meow[a-z] kitty_1 | wc -l >> kitty_info

### 600.1

Awesome. `wc` counted the lines in the output of the `grep`. That should be the count for how many times those words appear. Enter the same command but append the number to the `kitty_info.txt` file.

#### HINTS

- The last command was `grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc -l`
- Append output to a file with `>> <filename>`
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc -l >> kitty_info.txt` in the terminal

## 610. echo -e \nLines that they appear on: >> kitty_info

### 610.1

Append the text `Lines that they appear on:` to the `kitty_info.txt` file. Use the `echo` command with the `-e` flag again and put a new line in front of the text.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt`
- Enter `echo -e "\nLines that they appear on:" >> kitty_info.txt` in the terminal

## 620. grep -n meow[a-z] kitty_ipsum_1

### 620.1

There was a `-n` flag with `grep` to get line numbers. Use it to check the `kitty_ipsum_1.txt` file for the `meow[a-z]*` pattern again.

#### HINTS

- Here's an example: `grep <flag> '<pattern>' <filename>`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 630. man grep

### 630.1

Check the `grep` manual to see if there's a way to get just the line numbers.

#### HINTS

- View a man with `man <command>`
- Enter `man grep` in the terminal

## 635. cat name.txt

### 635.1

There doesn't appear to be a way to just get the line numbers. There's a `sed` command for replacing text that might work. First, some practice. Use `cat` to print the `name.txt` file in the terminal. It should still say `freeCodeCamp`.

#### HINTS

- Enter `cat name.txt` in the terminal
- The file should only have the text `freeCodeCamp`

## 640. sed s/r/2/ name.txt

### 640.1

`sed` can replace text like this: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`. By default, it won't replace the text in the file. It will output it to `stdout`. Use it to replace `r` with `2` in the `name.txt` file and the output prints to the terminal.

#### HINTS

- Check the example again
- The pattern is `r`, the replacement text is `2`
- Enter `sed 's/r/2/' name.txt` in the terminal

## 650. sed s/free/f233/ name.txt

### 650.1

You can see that it replaced the `r` with a `2` in `freeCodeCamp`. Use it again to replace `free` with `f233` in the same way.

#### HINTS

- Here's the example: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`
- The pattern is `free`, the replacement text is `f233`
- You previously used `sed 's/r/2/' name.txt`
- Enter `sed 's/free/f233/' name.txt` in the terminal

## 660. sed s/freecodecamp/f233C0d3C@mp/ name.txt

### 660.1

Try it again, replacing `freecodecamp` with `f233C0d3C@mp`.

#### HINTS

- Here's the example: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`
- The pattern is `freecodecamp`, the replacement text is `f233C0d3C@mp`
- You previously used `sed 's/free/f233/' name.txt`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/' name.txt` in the terminal

## 670. sed s/freecodecamp/f233C0d3C@mp/i name.txt

### 670.1

Nothing was replaced that time. It didn't find the `freecodecamp` text you tried to replace because the case of a few letters didn't match. You can add regex flags after the last `/` in the `sed` argument. A `g`, for `global`, would replace all instances of a matched pattern, or an `i` to ignore the case of the pattern. Enter the same command but add the correct regex flag to ignore the case.

#### HINTS

- Here's an example: `sed 's/<pattern>/<replacement>/<regex_flags>' <filename>`
- The pattern is `freecodecamp`, the replacement text is `f233C0d3C@mp` and the regex flag is `i`
- The last command was `sed 's/freecodecamp/f233C0d3C@mp/' name.txt`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/i' name.txt` in the terminal

## 675. sed s/freecodecamp/f233C0d3C@mp/i < name.txt

### 675.1

It worked that time since it wasn't required to match the case. As with any command, the input can be redirected. Use the same `sed` replacement and file but redirect the **input** this time.

#### HINTS

- The previous command was `sed 's/freecodecamp/f233C0d3C@mp/i' name.txt`
- Here's an example: `<command> < <filename>`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/i' < name.txt` in the terminal

## 680. cat name.txt | sed s/freecodecamp/f233C0d3C@mp/i

### 680.1

The method of input didn't affect the output. Use the `cat` and `pipe` method this time to set the input for the `sed` command, replacing the same text.

#### HINTS

- The previous command was `sed 's/freecodecamp/f233C0d3C@mp/i' < name.txt`
- Here's an example: `cat <filename> | <command>`
- Enter `cat name.txt | sed 's/freecodecamp/f233C0d3C@mp/i'` in the terminal

## 690. grep -n meow[a-z] kitty_1

### 690.1

Back to the task at hand. You want to add the line numbers asked for in the `kitty_info.txt` file. Use `grep` with the flag to show line numbers to find the `meow[a-z]*` pattern in the `kitty_ipsum_1.txt` file again.

#### HINTS

- Enter `man grep` to find the flag you need
- It's the `-n` flag
- Here's an example: `grep -n <pattern> <filename>`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 700. grep meow[a-z] kitty_1 -n | sed s/[0-9]/1/

### 700.1

You can use `sed` to each line in that output with just the line numbers. Start by entering the last command and pipe the output into `sed` that replaces `[0-9]` with `1`.

#### HINTS

- A `sed` argument looks like this: `'s/<pattern>/<replacement>/'`
- The `sed` argument is `s/[0-9]/1/`
- The last command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt`
- Here's an example: `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed '<pattern>'`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]/1/'` in the terminal

## 710. grep meow[a-z]\* kitty_1 -n | sed s/[0-9]+/1/

### 710.1

That matched the first digit it found on each line and replaced it with `1`. Enter the same command but change the matching pattern to `[0-9]+` to match one or more numbers.

#### HINTS

- The previous command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]/1/'`
- Change the `sed` argument to `'s/[0-9]+'/1/`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]+/1/'`

## 720. man sed

### 720.1

That didn't replace anything. Check the manual of `sed` quick to see if there's anything to help.

#### HINTS

- View a man with `man <command>`
- Enter `man sed` in the terminal
- Press enter until you have seen the whole manual

## 730. grep meow[a-z]\* kitty_1 -n | sed -E s/[0-9]+/1/

### 730.1

Looks like there's a lot of options with `sed` as well. There's a flag to use extended regular expressions. Add it to that previous command that didn't work so it recognizes the `+` in your pattern. The previous command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]+/1/'`.

#### HINTS

- Find the flag you need from the menu and add it to the previous command
- Here's an example: `<command> | sed <flag> '<argument>'`
- It's the `-E` flag
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/[0-9]+/1/'` in the terminal

## 740. grep meow[a-z]\* kitty_1 -n | sed -E s/([0-9]+)/\1/

### 740.1

It worked that time. It replaced all the numbers at the start with a `1`. Next, you will use a capture group in the regex to capture the numbers so you can use them in the replacement area. Enter the same command but use `s/([0-9]+)/\1/` with `sed` to capture the numbers at the start. It will replace them with themselves for now.

#### HINTS

- The previous command was `grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed -E 's/[0-9]+/1/'`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+)/\1/'` in the terminal

## 750. grep meow[a-z]_ kitty_1 -n | sed -E s/([0-9]+)._/\1/

### 750.1

That matched all the numbers and replaced them with the same numbers. All you need to do is match everything else on each line and replace it with only the numbers. Add `.*` at the end of the `sed` matching pattern so it matches everything, captures the numbers, and replaces everything with the captured numbers.

#### HINTS

- The previous command was `grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed -E 's/([0-9]+)/\1/'`
- The new `sed` argument should be `'s/([0-9]+).*/\1/'`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'` in the terminal

## 760. previous with >> kitty_info

### 760.1

There's your list of numbers for the `kitty_info.txt` file. Enter the same command and append the list of numbers to it.

#### HINTS

- The previous command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'`
- Here's an example: `<command> >> <filename>`
- Append the output of the previous command with `>> kitty_info.txt`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal

## 770. grep cat[a-z]\* kitty_1 —-color

### 770.1

Take a look at the file. Hopefully it doesn't look too messy. You can reset a lesson at any time if it doesn't look right, or if you accidentally change something in one of the other files. There's one more group of words to find info on for this file. Use `grep` with the `--color` flag to see all the words that start with `cat` in the same file. Use a similar pattern that you used to find words starting with `meow`.

#### HINTS

- You use `meow[a-z]*` to see all the words that start with `meow`
- Use `cat[a-z]*` as your pattern
- Here's an example: `grep --color '<pattern>' <filename>`
- Enter `grep --color 'cat[a-z]*' kitty_ipsum_1.txt` in the terminal

## 780. echo Number of times cat, cats, or catnip appears: >> kitty_info

### 780.1

There's three variations of words starting with `cat`. Use `echo` with the `-e` flag to append `Number of times cat, cats, or catnip appears:` to the `kitty_info.txt` file. Put a new line at the beginning of the text like the other lines.

#### HINTS

- You previously entered `echo -e "\nLines that they appear on:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt` in the terminal

## 790. grep cat[a-z]\* kitty_1 -o

### 790.1

You will want to find the number of times those words appear again. First, use `grep` with the correct flag to put all the matches of the `cat[a-z]*` pattern on their own line.

#### HINTS

- Here's an example: `grep <flag> '<pattern>' <filename>`
- Make sure to use the `kitty_ipsum_1.txt` file
- You want the `-o` flag
- Enter `grep -o 'cat[a-z]*' kitty_ipsum_1.txt` in the terminal

## 800. grep cat[a-z]\* kitty_1 -o | wc -l

### 800.1

Enter the same command and pipe the output into the command that outputs the count of those lines.

#### HINTS

- You want to pipe the output of the previous command into the `wc` command
- The previous command was `grep -o 'cat[a-z]*' kitty_ipsum_1.txt`
- Use the correct flag with `wc` to output the line count of the grep output
- It's the `-l` flag
- Enter `grep -o 'cat[a-z]*' kitty_ipsum_1.txt | wc -l`

## 810. grep cat[a-z]\* kitty_1 -o | wc -l >> kitty_info

### 810.1

That's a count of how many times `cat`, `cats`, or `catnip` appears in the file. Enter the same command and append the count to the `kitty_info.txt` file.

#### HINTS

- The previous command was `grep -o 'cat[a-z]*' kitty_ipsum_1.txt | wc -l`
- Append output like this: `>> <filename>`
- Enter `grep -o 'cat[a-z]*' kitty_ipsum_1.txt | wc -l >> kitty_info.txt` in the terminal

## 820. echo -e Lines that they appear on: >> kitty_info

### 820.1

Next, use `echo` to add the text `Lines that they appear on:` to the `kitty_info.txt` file again. Place a new line in front of the text like before.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt`
- Enter `echo -e "\nLines that they appear on:" >> kitty_info.txt` in the terminal

## 830. grep cat[a-z]\* kitty_1 -n

### 830.1

The process to add the lines to the file will be the same as you did before. Start by using `grep` to match the `cat` words in the file and showing the line numbers with the output.

#### HINTS

- Here's an example: `grep <flag> '<pattern>' <filename>`
- Make sure to use the `cat[a-z]*` pattern again
- Use the `-n` flag to show the line numbers
- Enter `grep -n 'cat[a-z]*' kitty_ipsum_1.txt` in the terminal

## 840. grep cat[a-z]_ kitty_1 -n | sed -E s/([0-9]+)._/\1/

### 840.1

That shows you the line numbers and text. You will have to use `sed` again to extract only the line numbers. Pipe the output of the last command into `sed` to do that. As a reminder, the `sed` pattern was `'s/([0-9]+).*/\1/'`.

#### HINTS

- The last command was `grep -n 'cat[a-z]*' kitty_ipsum_1.txt`
- Don't forget the `sed` flag for using extended regular expressions
- It's the `-E` flag
- You previously used `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'`
- Enter `grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'` in the terminal

## 850. previous with >> kitty_info

### 850.1

Awesome. Enter the last command and append the line numbers to the `kitty_info.txt` file.

#### HINTS

- The previous command was `grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'`
- Append to a file by adding `>> <filename>` at the end of a command
- You previously used `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt`
- Enter `grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal

## 860. echo -e \n\n~~ kitty_ipsum_2.txt info ~~ >> kitty_info

### 860.1

Hopefully your info file is looking good. Next, you want to do the same thing for the `kitty_ipsum_2.txt` file. Using `echo` in the terminal, append `~~ kitty_ipsum_2.txt info ~~` to the `kitty_info.txt` file. Put **two** new lines in front of the text this time.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`) twice
- Here's an example: `echo -e "\n\n<text>" >> <filename>`
- You previously entered `echo -e "\nLines that they appear on:" >> kitty_info.txt`
- Enter `echo -e "\n\n~~ kitty_ipsum_2.txt info ~~" >> kitty_info.txt` in the terminal

## 870. echo -e \nNumber of lines: >> kitty_info

### 870.1

The first piece of info you want to know is the number of lines in the file. Use the terminal to append `Number of lines:` to the file with a new line in front.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nLines that they appear on:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of lines:" >> kitty_info.txt` in the terminal

## 880. cat kitty_2 | wc -l >> kitty_info

### 880.1

Use `cat` with the pipe method to append the info to the `kitty_info.txt` file that it is asking for.

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `cat <filename> | <command> >> <filename>`
- You want to `cat kitty_ipsum_2.txt`
- And pipe the output of that into the `wc` command
- Which uses the `-l` flag to get the number of lines in the file
- And appends the number to the file like this: `>> kitty_info.txt`
- You previously used `cat kitty_ipsum_1.txt | wc -w >> kitty_info.txt`
- Enter `cat kitty_ipsum_2.txt | wc -l >> kitty_info.txt` in the terminal

## 890. echo -e \nNumber of words: >> kitty_info

### 890.1

Nice job! Next, use the terminal to append `Number of words:` to the `kitty_info.txt` file. Put a new line in front of the text again.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo "\nNumber of lines:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of words:" >> kitty_info.txt`

## 900. wc -w < kitty_ipsum_2.txt >> kitty_info

### 900.1

Append the suggested info the `kitty_info.txt` file. Use redirection instead of the pipe method for the input this time.

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `<command> < <input_filename> >> <output_filename>`
- You want to use `kitty_ipsum_2.txt` for the input of the `wc` command
- With the `-w` flag to get the number of words from the input
- And output the numbers of words to the file `>> kitty_info.txt`
- You previously used `wc -m < kitty_ipsum_1.txt >> kitty_info.txt`
- Enter `wc -w < kitty_ipsum_2.txt >> kitty_info.txt` in the terminal

## 910. echo -e \nNumber of characters: >> kitty_info

### 910.1

Next, is the character count. Append `Number of characters:` to the file with a new line in front of the text. Use the method you have been using.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nNumber of words:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of characters:" >> kitty_info.txt` in the terminal

## 920. wc -m < kitty_ipsum_2.txt >> kitty_info

### 920.1

Using the pipe or input redirection method, append the character count of `kitty_ipsum_2.txt` to the `kitty_info.txt` file.

#### HINTS

- Enter the commands one at a time to see the output first
- You will want to use the `wc` command with the `-m` flag
- Here's an example: `<command> < <input_filename> >> <output_filename>`
- You previously used `wc -w < kitty_ipsum_2.txt >> kitty_info.txt`
- Enter `wc -m < kitty_ipsum_2.txt >> kitty_info.txt` in the terminal

## 925. grep --color meow[a-z]\* kitty_2

### 925.1

Excellent. Next, use `grep` to see how many variations of `meow` there are in `kitty_ipsum_2.txt`. Use the same pattern you used before and add the flag to show colors so it's easier to see.

#### HINTS

- Here's an example `grep <flag> '<pattern>' <filename>`
- The pattern you want is `meow[a-z]*`
- Be sure to use the `--color` flag
- Enter `grep --color 'meow[a-z]*' kitty_ipsum_2.txt` in the terminal

## 930. echo -e \nNumber of times meow or meowzer appears: >> kitty_info

### 930.1

It's the same variations as the other file. Append `Number of times meow or meowzer appears:` to the `kitty_info.txt` file with a new line in front of it like before.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nNumber of characters:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt` in the terminal

## 940. grep -o 'meow[a-z]\*' kitty_ipsum_2.txt | wc -l >> kitty_info

### 940.1

Use `grep` and `wc` in the terminal to append the suggested number to the `kitty_info.txt` file.

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `<command_1> | <command_2> >> kitty_info.txt`
- You want to use `grep` to get the matches for `meow[a-z]*`
- Add the flag to put the matched words on their own line
- It's the `-o` flag
- Pipe the `grep` results into the `wc` command
- Add the `-l` flag to the `wc` to count the lines
- Append the results of that to the file with `>> kitty_info.txt`
- You previously used `grep -o 'cat[a-z]*' kitty_ipsum_1.txt | wc -l >> kitty_info.txt`
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_2.txt | wc -l >> kitty_info.txt` in the terminal

## 950. echo -e \nLines that they appear on: >> kitty_info

### 950.1

:sunglasses: Next, use the terminal to append `Lines that they appear on:` to the `kitty_info.txt` file with a new line in front of the text.

#### HINTS

- Use the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt`
- Enter `echo -e "\nLines that they appear on:" >> kitty_info.txt` in the terminal

## 960. grep -n meow[a-z]_ kitty_2 | sed -E s/([0-9]+)._/\1/ >> kitty_info

### 960.1

Use `grep` and `sed` in the terminal to append the suggested line numbers to the `kitty_info.txt` file.

#### HINTS

- Here's an example: `<command_1> | <command_2> >> kitty_info.txt`
- Enter the commands one at a time to see the output first
- You want to use `grep` to get the matches for `meow[a-z]*`
- Add the `-n` flag to `grep` to show the line numbers in front of the matches
- Pipe the `grep` results into the `sed` command
- The `sed` command should replace `([0-9]+).*'` with `\1` to get the line numbers
- Don't forget the `-E` flag with `sed` to allow extended regular expressions
- You `sed` arguments should be `-E 's/([0-9]+).*/\1/'`
- Append the results to the file with `>> kitty_info.txt`
- You previously used `grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_2.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal

## 965. grep --color cat[a-z]\* kitty_2

### 965.1

:sunglasses: :sunglasses: Use `grep` to see how many variations of `cat` there are in `kitty_ipsum_2.txt`. Use the same pattern you used before and include the flag to show colors so it's easier to see.

#### HINTS

- Here's an example `grep <flag> '<pattern>' <filename>`
- The pattern you want is `cat[a-z]*`
- Be sure to use the `--color` flag
- Enter `grep --color 'cat[a-z]*' kitty_ipsum_2.txt` in the terminal

## 970. echo -e \nNumber of times cat, cats, or catnip appears: >> kitty_info

### 970.1

Same variations as the other kitty ipsum file. Append `Number of times cat, cats, or catnip appears:` to the `kitty_info.txt` file. Use the method you have been using.

#### HINTS

- Don't forget the new line in front of the text
- Use the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nLines that they appear on:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt` in the terminal

## 980. grep -o 'cat[a-z]\*' kitty_2 | wc -l >> kitty_info

### 980.1

Use `grep` and `wc` in the terminal to append the suggested info to `kitty_info.txt`

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `<command_1> | <command_2> >> kitty_info.txt`
- You want to use `grep` to get the matches for `cat[a-z]*`
- Add the `-o` flag to `grep` to put each match on it's own line
- Pipe the `grep` results into the `wc` command
- Add the `-l` flag to the `wc` to count the lines
- Append the results of that to the file with `>> kitty_info.txt`
- You previously used `grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc -l >> kitty_info.txt`
- Enter `grep -o 'cat[a-z]*' kitty_ipsum_2.txt | wc -l >> kitty_info.txt` in the terminal

## 990. echo -e \nLines that they appear on: >> kitty_info

### 990.1

:sunglasses: :sunglasses: :sunglasses: One more. Append `Lines that they appear on:` to it like you did for the others.

#### HINTS

- Don't forget the new line
- Use the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt`
- Enter `echo -e "\nLines that they appear on:" >> kitty_info.txt` in the terminal

## 1000. grep -n cat[a-z]\* kitty_2 | sed -E >> kitty_info

### 1000.1

Use `grep` and `sed` in the terminal to append the suggested numbers to the `kitty_info.txt` file.

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `<command_1> | <command_2> >> kitty_info.txt`
- You want to use `grep` to get the matches for `cat[a-z]*`
- Add the `-n` flag to `grep` to show the line numbers in front of the matches
- Pipe the `grep` results into the `sed` command
- The `sed` command should replace `([0-9]+).*'` with `\1` to get the line numbers
- Don't forget the `-E` flag with `sed` to allow extended regular expressions
- You `sed` arguments should be `-E 's/([0-9]+).*/\1/'`
- Append the results to the file wiht `>> kitty_info.txt`
- You previously used `grep -n 'meow[a-z]*' kitty_ipsum_2.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal
- Enter `grep -n 'cat[a-z]*' kitty_ipsum_2.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal

## 1010. touch translate.sh

### 1010.1

:sunglasses: :sunglasses: :sunglasses: :sunglasses: The `kitty_info` file is done and it has some information about the two ipsum files. Next, you will create a small script to translate both them into doggy ipsum. It will be as simple as replacing all the cat references with similar words for dogs. In the terminal, use `touch` to create `translate.sh`.

#### HINTS

- Here's an example: `touch <filename>`
- Enter `touch translate.sh` in the terminal
- Make sure you are in the `project` folder first

## 1020. chmod +x ./translate.sh

### 1020.1

Give your new script executable permissions so you can run it in the terminal.

#### HINTS

- Here's an example: `chmod +x <filename>`
- Enter `chmod +x translate.sh` in the terminal

## 1030. Add shebang

### 1030.1

Add a shebang to the script that uses `bash` like you did for the other script you made.

#### HINTS

- The shebang for bash is `#!/bin/bash`
- Add the suggestion at the top of the `translate.sh` file
- Add `#!/bin/bash` at the top of the `translate.sh` file

## 1040. Add cat $1

### 1040.1

The script will take a file as input that can be passed as an argument or read from `stdin`. Below the shebang, use `cat` to print the content of the first argument passed to the script.

#### HINTS

- Here's an example: `cat <first_argument>`
- You can access an arguement with `$<argument_number>`
- Access the arguement with `$1`
- Add `cat $1` below the shebang in your `translate.sh` file

## 1050. ./translate.sh kitty_1

### 1050.1

Run the script and use the first kitty ipsum file as an argument to see if it's working.

#### HINTS

- Here's an example: `<command_to_run> <argument>`
- Enter `./translate.sh kitty_ipsum_1.txt` in the terminal

## 1060. ./translate.sh < kitty_1

### 1060.1

Try the same command using redirection to print the file.

#### HINTS

- Here's an example: `<command> < <filename>`
- Redirect the `kitty_ipsum_1.txt` file as input for your script
- Enter `./translate.sh < kitty_ipsum_1.txt` in the terminal

## 1070. cat kitty_1 | ./translate.sh

### 1070.1

Looks like that is working. Try the `cat` and pipe method.

#### HINTS

- Here's and example `cat <filename> | <command>`
- Use `cat` to set the content of `kitty_ipsum_1.txt` as input for your script
- Enter `cat kitty_ipsum_1.txt | ./translate.sh` in the terminal

## 1080. Add | sed s/catnip/dogchow/

### 1080.1

Using any of those three methods as input is working. Time to start replacing some of the text with doggy ipsum. In your script file, pipe the input into a `sed` that replaces `catnip` with `dogchow`.

#### HINTS

- Here's an example: `cat $1 | sed 's/<pattern>/<replacement>/'`
- The `sed` argument should be `s/catnip/dogchow/`
- The `translate.sh` file should look like this:

```sh
#!/bin/bash

cat $1 | sed 's/catnip/dogchow/'
```

## 1090. ./translate kitty_1

### 1090.1

Run the script passing the first kitty ipsum file as a argument to see if it's working.

#### HINTS

- Here's an example: `<command> <argument>`
- Use the `kitty_ipsum_1.txt` file as the argument
- Enter `./translate.sh kitty_ipsum_1.txt` in the terminal

## 1100. ./translate kitty_1 | grep --color dogchow

### 1100.1

If you look, you can find `dogchow` in there so it's probably working. To make sure pipe the results of that into a `grep` command that searches for `dogchow`. Output the results in color.

#### HINTS

- The previous command was `./translate.sh kitty_ipsum_1.txt`
- Pipe the results of the previous command into `grep` so it searches for `dogchow`
- Don't forget the `--color` flag to show the results in color
- Here's an example: `./translate.sh kitty_ipsum_1.txt | grep <flag> '<pattern>'`
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color 'dogchow'` in the terminal

## 1110. ./translate kitty_1 | grep --color catnip

### 1110.1

It's showing three places `catnip` was replaced with `dogchow`. To make sure you got them all, enter the previous command and search for `catnip` instead.

#### HINTS

- The previous command was `./translate.sh kitty_ipsum_1.txt | grep --color 'dogchow'`
- Replace `dogchow` with `catnip` in the previous command
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color 'catnip'` in the terminal

## 1120. Add s/cat/dog/

### 1120.1

It didn't output anything, so it must be replacing all the instances of `catnip`. You can replace many patterns using `sed` like this: `sed 's/<pattern_1>/<replacement_1>/; s/<pattern_2>/<replacement_2>/'`. Note that you need the semi-colon between the two replacement patterns and they both need to be wrapped in the quotes. In your script, add another pattern to the `sed` command that replaces `cat` with `dog`.

#### HINTS

- The code looks like this: `s/cat/dog/`
- The `translate.sh` file should look like this:

```sh
#!/bin/bash

cat $1 | sed 's/catnip/dogchow/; s/cat/dog/'
```

## 1130. ./translate.sh kitty_1 | grep --color dog[a-z]

### 1130.1

Now, it should replace `catnip` with `dogchow` and `cat` with `dog`. Use the script the translate the first ipsum file again. Search the results with `grep` for any words that start with `dog`. Part of that search pattern should be `[a-z]*`. Make sure to show the results in color.

#### HINTS

- You previously entered `./translate.sh kitty_ipsum_1.txt | grep --color 'catnip'`
- The `grep` pattern you want is `dog[a-z]*`
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color 'dog[a-z]*'` in the terminal

## 1135. ./translate.sh kitty_1 | grep --color cat[a-z]

### 1135.1

As expected, it replaced instances of `cat` with `dog`. Enter the same command, but search for anything starting with `cat` to make sure it replaced them all.

#### HINTS

- The previous command was `./translate.sh kitty_ipsum_1.txt | grep --color 'dog[a-z]*'`
- Replace `dog[a-z]*` with `cat[a-z]*` in the previous command
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color 'cat[a-z]*'` in the terminal

## 1140. Add s/meow/woof/

### 1140.1

It didn't find any so it must be replacing them all. You added two patterns as part of the `sed` in your script. Add a third that replaces all `meow` words with `woof`.

#### HINTS

- You can add another pattern to replace like before. Add a semi-colon and another pattern in the quotes of the `sed`
- Here's an example: `sed 's///; s///; s///'`
- The third pattern should be `s/meow/woof/`
- The `translate.sh` file should look like this:

```sh
#!/bin/bash

cat $1 | sed 's/catnip/dogchow/; s/cat/dog/; s/meow/woof/'
```

## 1150. ./translate.sh kitty_1 | grep --color dog[a-z]woof[a-z]

### 1150.1

Using your script, translate the first ipsum file again. Check the results with `grep` for words that start with `dog` or `woof`. Here's an example of the search pattern you want: `grep '<dog_words>|<woof_words>'`. To view "dog words", you would use `dog[a-z]*`. Be sure to view the result in color.

#### HINTS

- You previously entered `./translate.sh kitty_ipsum_1.txt | grep --color 'cat[a-z]*'`
- You want to find "dog" words with `dog[a-z]*` and "woof" words with `woof[a-z]*`
- The search pattern you should use is `'dog[a-z]*|woof[a-z]*'`
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color 'dog[a-z]*|woof[a-z]*'` in the terminal

## 1160. ./translate.sh kitty_1 | grep --color -E dog[a-z]woof[a-z]

### 1160.1

That didn't work. Enter the same command, but add the flag to use extended regular expressions to the `grep` search so it recognizes the `|`.

#### HINTS

- The last command was `./translate.sh kitty_ipsum_1.txt | grep --color 'dog[a-z]*|woof[a-z]*'`
- Find the flag you want in the `grep` manual
- View the manual with `man grep`
- It's the `-E` flag
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color -E 'dog[a-z]*|woof[a-z]*'` in the terminal

## 1170. Add g regex flag

### 1170.1

If you look closely, you can see that the `meow` part of `meowzer` on that one line didn't get replaced with `woof`. `grep` only matched the first instance of `meow` it found on that line. Add the "global" regex flag to all three patterns of the `sed` command in your script so it will replace all instances of any of the words.

#### HINTS

- Here's an example of one pattern: `s/<pattern>/<replacement>/<regex_flags>`
- It's the `g` flag
- Your `translate.sh` file should look like this:

```sh
#!/bin/bash

cat $1 | sed 's/catnip/dogchow/g; s/cat/dog/g; s/meow/woof/g'
```

## 1180. ./translate.sh kitty_1 | grep --color -E dog[a-z]woof[a-z]

### 1180.1

Enter the same command to translate the first ipsum file and see the matches of all words starting with `dog` or `woof` to see if that worked.

#### HINTS

- You can find previously entered commands using the arrow on the keyboard while the terminal is focused
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color -E 'dog[a-z]*|woof[a-z]*'` in the terminal

## 1190. Add -E s/meow|meowzer/woof/

### 1190.1

It worked, but `woofzer` doesn't sound quite right. Change your `sed` pattern that matched `meow` to match `meow|meowzer`. Add the flag to use extended regular expressions to the `sed` command so it recognizes the `|`.

#### HINTS

- The last `sed` pattern in you scrip should be `s/meow|meowzer/woof/`
- And you should add the `-E` flag to the `sed` command
- Your `translate.sh` file should look like this:

```sh
#!/bin/bash

cat $1 | sed -E 's/catnip/dogchow/g; s/cat/dog/g; s/meow|meowzer/woof/g'
```

## 1200. ./translate.sh kitty_1 | grep --color -E dog[a-z]woof[a-z]

### 1200.1

Now it should replace either of those two words with `woof`. Check it again with that command you entered before that searches for `dog` or `woof` words.

#### HINTS

- You can use the up arrow in the terminal to find previously entered commands
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color -E 'dog[a-z]*|woof[a-z]*'` in the terminal

## 1210. ./translate.sh kitty_1 | grep --color -E meow[a-z]cat[a-z]

### 1210.1

It replaced `meowzer` that time. To be sure it replaced all the words in the file, enter the same command but check for `meow` or `cat` words in the same way.

#### HINTS

- The last command was `./translate.sh kitty_ipsum_1.txt | grep --color -E 'dog[a-z]*|woof[a-z]*'`
- Replace the matching pattern with `meow[a-z]*|cat[a-z]*`
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color -E 'meow[a-z]*|cat[a-z]*'` in the terminal

## 1220. ./translate.sh kitty_2 | grep --color -E meow[a-z]cat[a-z]

### 1220.1

No results means it didn't find any matches for `cat` or `meow` words after being translated. Check the second kitty ipsum file for the same pattern to make sure it's replacing all those words.

#### HINTS

- You can find previously entered commands using the arrow on the keyboard while the terminal is focused
- The last command was `./translate.sh kitty_ipsum_1.txt | grep --color -E 'meow[a-z]*|cat[a-z]*'`
- Change the last command to use the `kitty_ipsum_2.txt` file
- Enter `./translate.sh kitty_ipsum_2.txt | grep --color -E 'meow[a-z]*|cat[a-z]*'` in the terminal

## 1230. ./translate.sh kitty_1 > doggy_1

### 1230.1

Okay, your script is finished. Translate the `kitty_ipsum_1.txt` file and put the output into a new `doggy_ipsum_1.txt` file.

#### HINTS

- Redirect the `stdout` of translating `kitty_ipsum_1.txt` to `doggy_ipsum_1.txt`
- Here's an example: `<translate_command> <input_filename> > <output_filename>`
- Enter `./translate.sh kitty_ipsum_1.txt > doggy_ipsum_1.txt` in the terminal

## 1240. cat doggy_1

### 1240.1

Use `cat` to print the new file to the terminal.

#### HINTS

- Here's an example: `cat <filename>`
- Enter `cat doggy_ipsum_1.txt` in the terminal

## 1250. diff kitty_1 doggy_1

### 1250.1

It looks good :thumbsup: `diff` is a command to view the difference between two files. You can use it like this: `diff <file_1> <file_2>`. Use it to view the difference between the `kitty_ipsum_1` and `doggy_ipsum_1` files.

#### HINTS

- Enter `diff kitty_ipsum_1.txt doggy_ipsum_1.txt` in the terminal

## 1260. man diff

### 1260.1

It may look a little cryptic, but it's showing the lines that don't match in the two files. Check the manual of `diff` to see if there's any way to make it prettier.

#### HINTS

- View the manual of a command with `man`
- Here's an example: `man <command>`
- Enter `man diff` in the terminal
- Press enter until you have seen the whole manual

## 1270. diff --color kitty_1 doggy_1

### 1270.1

Use the flag to show the diff of the same two files in color.

#### HINTS

- You previously entered `diff kitty_ipsum_1.txt doggy_ipsum_1.txt`
- The flag you want is `--color`
- Enter `diff --color kitty_ipsum_1.txt doggy_ipsum_1.txt` in the terminal

## 1280. ./translate.sh kitty_2 > doggy_2

### 1280.1

That's better. The red lines are lines that aren't in the second file, and the green lines are what they were replaced with. The line numbers that were changed are above each section. Translate your second kitty ipsum file and redirect the output into `doggy_ipsum_2.txt`.

#### HINTS

- You previously entered `./translate.sh kitty_ipsum_1.txt > doggy_ipsum_1.txt`
- Enter `./translate.sh kitty_ipsum_2.txt > doggy_ipsum_2.txt` in the terminal

## 1290. cat doggy_2

### 1290.1

View the content of your new file with `cat`

#### HINTS

- Here's an example: `cat <filename>`
- Enter `cat doggy_ipsum_2.txt` in the terminal

## 1300. diff --color kitty_2 doggy_2

### 1300.1

Lastly, view the `diff` of the two files in color again.

#### HINTS

- Here's the example again: `diff <file_1> <file_2>`
- Don't forget the flag to show the colors
- It's the `--color` flag
- You previosly entered `diff --color kitty_ipsum_1.txt doggy_ipsum_1.txt`
- Enter `diff --color kitty_ipsum_2.txt doggy_ipsum_2.txt` in the terminal

# Learn Bash and SQL by Building a Bike Rental Shop

> Welcome to the Bash and SQL lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. Log in to Psql

### 20.1

You are going to build a bike rental shop. It will have a database, and a bash script to interact with the database. Use the terminal to connect to PostgreSQL by entering `psql --username=freecodecamp --dbname=postgres`.

#### HINTS

- Type the above command into the terminal and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal and press enter

## 30. List Databases

### 30.1

List the databases with `\l` to see what databases are here.

#### HINTS

- Type `\l` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 40. Create Database `bikes`

### 40.1

You need your own database for the bike shop. Create a new database named `bikes`.

#### HINTS

- Use the `CREATE DATABASE` keywords
- Here's an example: `CREATE DATABASE database_name;`
- Type `CREATE DATABASE bikes;` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 50. List Databases

### 50.1

List databases again to make sure your database got created.

#### HINTS

- Use the **l**ist shortcut command
- Type `\l` into the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 60. Connect to `bikes`

### 60.1

There it is. **C**onnect to it so you can start building the structure of your bike shop database.

#### HINTS

- Use the **c**onnect shortcut command
- Add the database name to the command
- It's the `\c` command
- Here's an example: `\c database_name`
- Try entering `\c bikes` into the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 70. Create table `bikes`

### 70.1

Your database needs three tables. One for your bike inventory, one for your customers, and one for the bikes that are rented out. Create a table named `bikes` in your database for the inventory.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE bikes();` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 80. Display the tables

### 80.1

**D**isplay the tables to make sure your table got created.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Type `\d` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 90. Add column `bike_id`

### 90.1

The table will have a few columns for bike information. First, is a unique ID column. Add a column to the `bikes` table named `bike_id`. Give it a type of `SERIAL` and make it a `PRIMARY KEY`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 100. Display `bikes` Details

### 100.1

Use the **d**isplay command to view the details of the `bikes` table.

#### HINTS

- It's the `\d` command
- Add the table name to the command
- Try entering `\d bikes` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 110. Add `type` column

### 110.1

The first column is set. Add a column named `type` for the type of bike. Make it a `VARCHAR(50)` and give it a constraint of `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR(50)`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 120. Display `bikes` details

### 120.1

Display the details of the `bikes` table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d bikes` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 130. Add Column `size`

### 130.1

The first two columns look good. Add a column named `size` to the `bikes` table that is an `INT` and has the `NOT NULL` constraint. This will be for the size of each bike.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN size INT NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 140. Add Column `available`

### 140.1

Add another column to the table named `available`. Make it a `boolean` and has a constraint of `NOT NULL`. Also give it a default value of `TRUE`. This will be set to `false` when someone rents out a bike.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `BOOLEAN`, `NOT NULL` and `DEFAULT TRUE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS DEFAULT;`
- Try entering `ALTER TABLE bikes ADD COLUMN available BOOLEAN NOT NULL DEFAULT TRUE;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 150. Display `bikes` details

### 150.1

Display the details of the `bikes` table again so you can make sure it's how you want it.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d bikes` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 160. Create Table `customers`

### 160.1

That table is done for now. Create another table named `customers`. It will store a name and phone number for each customer that rents a bike.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE customers();` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 170. Add Column `customer_id`

### 170.1

Add a `customer_id` column to your new table that is a type of `SERIAL` and make it a `PRIMARY KEY`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 180. Display `customers` Details

### 180.1

Display the details of the `customers` table so you can make sure your new column is there.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d customers` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 190. Add Column `phone`

### 190.1

There it is. Add a column named `phone` for customers phone numbers. Make it a varying character that has a maximum length of `15` characters. Also make sure it can't be null, and that it has to be unique.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()`, `NOT NULL`, and `UNIQUE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 200. Add Column `name`

### 200.1

Add the last column. Call it `name` and make it a `VARCHAR(40)` that can't be null.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN name VARCHAR(40) NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 210. Display `customers` Details

### 210.1

Display the details of the `customers` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d customers` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 220. Create Table `rentals`

### 220.1

That table is finished. Lastly, you need a table to store which bikes are rented and who has rented them. Create a new table named `rentals`.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE rentals();` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 230. Add Column `rental_id`

### 230.1

Add a `rental_id` column to your new table. Make it automatically increment with `SERIAL` and make it the primary key for this table.

#### HINTS

- The other two properties are `SERIAL` and `PRIMARY KEY`
- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN rental_id SERIAL PRIMARY KEY;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 240. Display `rentals` Details

### 240.1

Display the details of the `rentals` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 250. Add Column `customer_id`

### 250.1

Next, you need a column for the customer who is renting a bike. Add column named `customer_id`. This will have an id of a customer from the customers table. Make the column an `INT` and `NOT NULL` to start.

#### HINTS

- Add the column to the `rentals` table
- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN customer_id INT NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 260. Set `customer_id` Foreign Key

### 260.1

Make the column you just added a foreign key that references the `customer_id` column from the `customers` table. Here's an example of how you can do that:

```sql
ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
```

#### HINTS

- Without the keywords, it looks like tihs: `rentals customer_id customers(customer_id)`
- Try entering `ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 270. Display `rentals` Details

### 270.1

Display the details of the `rentals` table to make sure your key is set.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 280. Add Column `bike_id`

### 280.1

That foreign key is set. You need another column so you know what bike a customer is renting. Add a column named `bike_id` and make it an `INT` and `NOT NULL`.

#### HINTS

- Add the column to the `rentals` table
- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN bike_id INT NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 290. Add `bike_id` Foreign Key

### 290.1

Make that column a foreign key that references the `bike_id` column from the `bikes` table so you know what bike the id is for.

#### HINTS

- Here's the example again: `ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);`
- Without the keywords, it looks like tihs: `rentals bike_id bikes(bike_id)`
- Try entering `ALTER TABLE rentals ADD FOREIGN KEY(bike_id) REFERENCES bikes(bike_id);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 300. Display `rentals` Details

### 300.1

Display the details of the `rentals` table so you can make sure the key is correct.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 310. Add `date_rented` Column

### 310.1

Moving along. You want to know when a customer rents a bike, and when it gets returned. Add a column to your `rentals` table named `date_rented` that's a type of `DATE`. Make sure the entry can't be null, and give it a default value of `NOW()`.

#### HINTS

- Add the column to the `rentals` table
- Use the `ALTER TABLE`, `ADD COLUMN`, `DATE`, `NOT NULL`, and `DEFAULT NOW()` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT NOW();` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 320. Display `rentals` Details

### 320.1

Display the details of the `rentals` table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 330. Add Column `date_returned`

### 330.1

It looks good. Lastly, you need a column for when a customer returns a bike. Add a column named `date_returned` that's a type of `DATE`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `DATE` keywords
- Add the column to the `rentals` table
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE;`
- Try entering `ALTER TABLE rentals ADD COLUMN date_returned DATE;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 340. Display `rentals` Details

### 340.1

View the details of the table again.

#### HINTS

- It's the `rentals` table
- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 350. Display Tables

### 350.1

The tables are all finished. Display all the tables so you can see what you ended up with.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Enter `\d` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 360. Insert 27 inch Mountain Bike

### 360.1

You have nine bikes in your inventory. Add the first one to your `bikes` table. It has a `type` of `Mountain` and a `size` of `27`. Make sure to put your `VARCHAR` values in single quotes. The `bike_id` and `available` columns should be filled in automatically, so you don't need to worry about those.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- View the details of the `bikes` table with `\d bikes` to see what values it expects
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 27);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 370. Select all from Bikes

### 370.1

View all the columns in your bikes table with `SELECT`.

#### HINTS

- Use `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 380. Insert 28 inch Mountain Bike

### 380.1

Looks like it's all working, the `bike_id` and `available` columns were filled in automatically. Insert another bike. Give it a `type` of `Mountain` and a `size` of `28`.

#### HINTS

- Make sure to put your `VARCHAR` values in single quotes
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 28);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 390. Insert 29 inch Mountain Bike

### 390.1

Add another `Mountain` bike to your inventory. Make it a `29` inch bike.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put your `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 29);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 400. Insert 27 inch Road Bike

### 400.1

Add a `27` inch `Road` bike to the table.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put your `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Road', 27);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 410. Select all from Bikes

### 410.1

Use `SELECT` to view all the data in the `bikes` table again.

#### HINTS

- Use `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 420. Insert 28 and 29 inch Road Bikes

### 420.1

Add the two bikes to your inventory, they are `28` and `29` inch `Road` bikes. Try to add them both with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value), (value, value);`
- Make sure to put your `VARCHAR` values in single quotes
- Try entering `INSERT INTO bikes(type, size) VALUES('Road', 28), ('Road', 29);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 430. Insert 19, 20, 21 inch BMX Bikes

### 430.1

There's three more bikes. Add `19`, `20`, and `21` inch `BMX` bikes to your table. Try to add them with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value), (value, value), (value, value);`
- Make sure to put your `VARCHAR` values in single quotes
- Try entering `INSERT INTO bikes(type, size) VALUES('BMX', 19), ('BMX', 20), ('BMX', 21);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 440. Select all from Bikes

### 440.1

View all the data in your bikes table.

#### HINTS

- Use `SELECT` with `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 450. touch bike-shop.sh

### 450.1

Your current inventory is all added. For the rest of the project, I recommend leaving that terminal open and connected, and that you should "split" the terminal so you have a second one to use for bash commands. Do that by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "split terminal". After you have opened it, use the `touch` command to create a file named `bike-shop.sh` in the `project` folder.

#### HINTS

- Try entering `touch bike-shop.sh` in the terminal
- Make sure it's the regular terminal, and not the psql one
- Make sure you are in the `project` folder first
- If you opened a new terminal instead of splitting it, you can close it by entering `exit` and try again
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you want

## 460. Add shebang!

### 460.1

This file will be the program for your bike rental shop. Open the file and add a "shebang" at the top so it uses `bash` when it's executed. If you don't remember, it looks like this: `#!/bin/bash`.

#### HINTS

- Add `#!/bin/bash` to the top of your `bike-shop.sh` file

## 470. Add echo Bike Rental Shop

### 470.1

In the file, use `echo` with the `-e` flag to print `~~~~~ Bike Rental Shop ~~~~~` with a new line at the beginning and end.

#### HINTS

- The newline character is `\n`
- Use double quotes around the message so the new lines are printed
- Here's an example: `echo -e "\n<message_here>\n"`
- Add `echo -e "\n~~~~~ Bike Rental Shop ~~~~~\n"` to the `bike-shop-sh` file

## 480. chmod +x bike-shop.sh

### 480.1

Use the terminal (not the psql one) and the `chmod` command to make your file executable. Add the `+x` flag and `bike-shop.sh` to the command to do that.

#### HINTS

- Here's an example: `chmod +x <filename>`
- Try entering `chmod +x bike-shop.sh` in the terminal
- Make sure you are in the `project` folder first

## 490. ./bike-shop.sh

### 490.1

Type `./bike-shop.sh` in the terminal to run your script.

#### HINTS

- Make sure to use the regular terminal and not the psql one
- Make sure you are in the `project` folder first

## 510. Add MAIN_MENU

### 510.1

:smile: In the script, create an empty function named `MAIN_MENU`. This will have a few options to enter when the script runs to rent or return a bike.

#### HINTS

- Here's an example:

```sh
FUNCTION_NAME() {

}
```

- Add this to the bottom of the script:

```sh
MAIN_MENU() {

}
```

## 520. Add echo How may I help you?

### 520.1

In your function, echo the text `How may I help you?` so that there's a greeting when you go to the menu.

#### HINTS

- Add `echo "How may I help you?"` in the designated area

## 530. Add MAIN_MENU function call

### 530.1

Call your `MAIN_MENU` at the bottom of the file so the function runs when you start the script.

#### HINTS

- Add `MAIN_MENU` at the bottom of the file

## 540. ./bike-shop.sh

### 540.1

Run the file in the terminal again so you can see what it is outputting.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 630. Add MAIN_MENU Options

### 630.1

It's coming along. Add another `echo` command **in the function** below the other one. Make it output text that looks like this:

```sh

1. Rent a bike
2. Return a bike
3. Exit
```

Note that there's an empty line at the start.

#### HINTS

- Use the `echo` command with the `-e` flag and line breaks (`\n`) to produce the suggested output
- Without the words, it looks like this: `echo -e "\n1. \n2. \n3. "`
- Run your script if you need to see if the output matches
- Add `echo -e "\n1. Rent a bike\n2. Return a bike\n3. Exit"` to your function

## 640. Run the file

### 640.1

Run the file to make sure it worked.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 650. Read MAIN_MENU_SELECTION

### 650.1

You have some options displaying. Next, you need to get input from whoever is using the program. Use the `read` command to read input into a variable called `MAIN_MENU_SELECTION` below the options.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Here's what the code looks like: `read MAIN_MENU_SELECTION`
- Add the code at the bottom of the `MAIN_MENU` function
- The `MAIN_MENU` function should look like this:

```sh
MAIN_MENU() {
  echo "How may I help you?"
  echo -e "\n1. Rent a bike\n2. Return a bike\n3. Exit"
  read MAIN_MENU_SELECTION
}
```

## 660. Add RENT_MENU

### 660.1

When an option gets entered, you need to take a user to one of those other menus. Add an empty `RENT_MENU` function below the `MAIN_MENU` function.

#### HINTS

- Make sure the `RENT_MENU` function is below the `MAIN_MENU` function and above where you call `MAIN_MENU`
- Add this in the suggested area:

```sh
RENT_MENU() {

}
```

## 670. Add echo Rent Menu

### 670.1

For the time being, just echo `Rent Menu` in the function so you can see if it's working.

#### HINTS

- Don't use any flags with the command
- Add `echo "Rent Menu"` in the `RENT_MENU` function

## 680. Add RETURN_MENU function

### 680.1

Add an empty `RETURN_MENU` function below the `RENT_MENU` function for when a user enters the option to return a bike.

#### HINTS

- Make sure the `RETURN_MENU` function is below the `RENT_MENU` function and above where you call `MAIN_MENU`
- Add this in the suggested area:

```sh
RETURN_MENU() {

}
```

## 690. Add echo Return Menu

### 690.1

Use `echo` to print `Return Menu` in the function you just added. You will change these later.

#### HINTS

- Don't use any flags with the command
- Add `echo "Return Menu"` in the `RETURN_MENU` function

## 700. Add EXIT function

### 700.1

Add an empty `EXIT` function below the `RETURN_MENU` function for when a user wants to exit the program.

#### HINTS

- Make sure the `EXIT` function is below the `RETURN_MENU` function and above where you call `MAIN_MENU`
- Add this in the suggested area:

```sh
EXIT() {

}
```

## 710. Add EXIT Message

### 710.1

This one probably doesn't need a placeholder message. In the `EXIT` function, use `echo` to print `Thank you for stopping in.` with a new line at the beginning and end of the message.

#### HINTS

- The newline character is `\n`
- Use double quotes around the message so the new lines are printed
- Here's an example: `echo -e "\n<message_here>\n"`
- Add `echo -e "\nThank you for stopping in.\n"` to the `EXIT` function

## 720. Add case statement to `MAIN_MENU`

### 720.1

When a user enters an option at the main menu, you want to take them to the appropriate sub-menu. You can use a `case` statement for this. Here's an example:

```sh
case EXPRESSION in
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  *) STATEMENTS ;;
esac
```

The expression you want is the `$MAIN_MENU_SELECTION` variable. You are expecting it to be a `1`, `2`, or `3` for your various menus. Add a `case` statement that takes users to their corresponding menus. The `*` is for when anything else is entered. Take users to the `MAIN_MENU` when the variable isn't a `1`, `2`, or `3`.

#### HINTS

- Add the `case` statement in the `MAIN_MENU` function below the `read MAIN_MENU_SELECTION` line
- Here's how it starts:

```sh
case $MAIN_MENU_SELECTION in
  1) RENT_MENU ;;
```

- Add this case statement below the;

```sh
case $MAIN_MENU_SELECTION in
  1) RENT_MENU ;;
  2) RETURN_MENU ;;
  3) EXIT ;;
  *) MAIN_MENU ;;
esac
```

## 730. ./bike-shop.sh

### 730.1

Run the script a few times and try out the different menus. Be sure to enter something other than one of the options to go to the main menu.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 740. Add arg to MAIN_MENU call in case

### 740.1

Add an argument to where you call `MAIN_MENU` in the `case` statement. It should be `Please enter a valid option.`. The next step will adjust the function so the message is printed when a user enters an invalid option.

#### HINTS

- Here's an example: `FUNCTION_CALL "<argument_message>"`
- Here's how the function call should look:

```sh
  *) MAIN_MENU "Please enter a valid option." ;;
```

- The whole `case` statement should look like this:

```sh
case $MAIN_MENU_SELECTION in
  1) RENT_MENU ;;
  2) RETURN_MENU ;;
  3) EXIT ;;
  *) MAIN_MENU "Please enter a valid option." ;;
esac
```

## 750. Add if $1 to MAIN_MENU

### 750.1

At the top of the `MAIN_MENU` function, add an `if` condition that checks if there's an argument (`$1`) passed to the function. If there is, print the message with a new line in front of it.

#### HINTS

- Here's an example of an `if`:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```

- The condition you want is `$1`
- Use `echo` with the `-e` flag and a new line character (`\n`) to print the argument with a new line at the beginning in the `<STATEMENTS>` area
- Here's an example of that part: `echo -e "\n<argument_here>"`
- The `if` statement should look like this:

```sh
if [[ $1 ]]
then
  echo -e "\n$1"
fi
```

- Make sure to put it at the top of the `MAIN_MENU` function

## 760. ./bike-shop.sh

### 760.1

Run the script and enter an invalid option to see the message. Exit the program when you are done.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 850. Delete echo Rent Menu

### 850.1

Looks good. Delete the `echo "Rent Menu"` from the `RENT_MENU` function so you can start adding the ability to rent a bike from the database.

#### HINTS

- The `RENT_MENU` function should be empty
- The `RENT_MENU` function should look like this:

```sh
RENT_MENU() {

}
```

## 860. Add comments to RENT_MENU

### 860.1

In the `RENT_MENU` function, add three single line comments; `get available bikes`, `if no bikes available`, and `send to main menu`, in that order.

#### HINTS

- Here's an example of a single line comment: `# <comment here>`
- The `RENT_MENU` function should look like this:

```sh
RENT_MENU() {
  # get available bikes

  # if no bikes available

  # send to main menu

}
```

## 920. Add PSQL Variable

### 920.1

To get the bikes available, you need to query the database from your script. Below the "shebang", add a `PSQL` variable that looks like this: `PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"`. You will then be able to use it to query the database like this: `$($PSQL "<query_here>")`.

#### HINTS

- Add the suggested variable below the "shebang" and above where you print the `Bike Rental Shop` line

## 970. Add AVAILABLE_BIKES

### 970.1

Below the `get available bikes` comment. Create an `AVAILABLE_BIKES` variable that gets the `bike_id`, `type`, and `size` columns from the `bikes` table for the bikes that are available. Order the results by their `bike_id` column. Here's an example: `AVAILABLE_BIKES=$($PSQL "<query_here>")`

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `ORDER BY` keywords in your query
- Get the three suggested columns in the same order they are listed; `bike_id, type, size`
- The condition you want is `WHERE available = true`
- Without the keywords, the query looks like this: `bike_id, type, size bikes available = true bike_id`
- The query should be `SELECT bike_id, type, size FROM bikes WHERE available = true ORDER BY bike_id`
- Add `AVAILABLE_BIKES=$($PSQL "SELECT bike_id, type, size FROM bikes WHERE available = true ORDER BY bike_id")` below the `get available bikes` comment

## 980. echo AVAILABLE_BIKES

### 980.1

Below the new variable, use `echo` to print it. Place it in double quotes so it prints any new lines.

#### HINTS

- Here's an example: `echo "<variable_here>"`
- Use the variable with `$AVAILABLE_BIKES`
- Add `echo "$AVAILABLE_BIKES"` to the suggested area

## 990. ./bike-shop.sh

### 990.1

Run your script and go to the rent menu to see if the available bikes are being printed.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 993. psql UPDATE bikes SET available = false

### 990.1

Awesome. In the psql prompt, set the `available` column to `false` for all the bikes so you can see what it prints when there's no bikes available.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- You want to set `available` to `false` for columns that are `true`
- After the `SET` can look like this: `available = false WHERE available = true`
- Try entering `UPDATE bikes SET available = false WHERE available = true;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in. I recommend "splitting" the terminal so you can have one for bash commands and one for psql commands. You can do that by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "split terminal".

## 995. ./bike-shop.sh

### 995.1

Run your script and go to the rent menu to see the output.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure it's the regular terminal and not the psql one
- Make sure you are in the `project` folder first

## 1000. Add if -z AVAILABLE_BIKES

### 1000.1

So if there's no bike available, the variable will be empty. In the script, below the `if no bikes available` comment, add an `if` condition that checks if the variable is empty. Use `-z` to check if it's empty. Place the `send to main menu` comment in its `STATEMENTS` area.

#### HINTS

- Use `-z <VARIABLE>` to see if a variable is empty
- Here's an example:

```sh
if [[ -z <VARIABLE> ]]
then
  <STATEMENTS>
fi
```

- The `if` condition should look like this:

```sh
if [[ -z $AVAILABLE_BIKES ]]
then
  # send to main menu
fi
```

- Make sure it's right below the suggested comment

## 1010. Add MAIN_MENU Sorry, we don't have any bikes available right now

### 1010.1

Below the comment in the `if` you just added. Send users to the main menu and give them the message, `Sorry, we don't have any bikes available right now.`

#### HINTS

- Here's an example `MAIN MENU "<message_here>"`
- Make sure it's in the `if` condition below the `send to main menu` comment
- The function call should look like this: `MAIN_MENU "Sorry, we don't have any bikes available right now."`
- The `if` condition should look like this:

```sh
if [[ -z $AVAILABLE_BIKES ]]
then
  # send to main menu
  MAIN_MENU "Sorry, we don't have any bikes available right now."
fi
```

## 1020. ./bike-shop.sh

### 1020.1

Run the script and go to the rent menu to see the message. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1100. Add else with comments

### 1100.1

If no bikes are available, you will get that message. Add an `else` to the `if` condition for when there is bikes available. In it, add four single line comments; `display available bikes`, `ask for bike to rent`, `if input is not a number`, and `send to main menu`.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- An `if/else` statement looks like this:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
else
  <STATEMENTS>
fi
```

- The `else` should look like this:

```sh
else
  # display available bikes

  # ask for bike to rent

  # if input is not a number

  # send to main menu

```

- The whole `if` should look like this:

```sh
if [[ -z $AVAILABLE_BIKES ]]
then
  # send to main menu
  MAIN_MENU "Sorry, we don't have any bikes available right now."
else
  # display available bikes

  # ask for bike to rent

  # if input is not a number

  # send to main menu

fi
```

## 1105. Add echo Here are the bikes we have available

### 1105.1

Below the `display available bikes` comment you just added, use `echo` to print `Here are the bikes we have available:` with a new line in front of the message

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nHere are the bikes we have available:"` below the suggested comment

## 1110. Move echo AVAILABLE_BIKES

### 1110.1

Move the `echo` command that prints all the available bikes below the message you just added.

#### HINTS

- It's the `echo $AVAILABLE_BIKES` command
- It should be below the `Here are the bikes we have available:` message
- You should only print the bikes available in that one spot
- Place the `echo "$AVAILABLE_BIKES"` line in the suggested spot

## 1115. psql UPDATE bikes SET all != BMX to TRUE

### 1115.1

In the psql prompt, set all the bikes, except for the `BMX` bikes, back to true so you can see a list of bikes to rent.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- You want to set `available` to `true` for columns that don't have a `type` of `BMX`
- You can use the `!=` operator to check for columns not equal to a value
- After the `SET` can look like this: `available = true WHERE type != 'BMX'`
- Try entering `UPDATE bikes SET available = true WHERE type != 'BMX';` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1130. ./bike-shop.sh

### 1130.1

Run the script and go to the rent menu to see the list of bikes available.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1140. pipe AVAILABLE_BIKES into while loop

### 1140.1

Instead of directly printing the list, `pipe` the output into a `while` loop that reads each line. Here's how that looks:

```sh
echo "$AVAILABLE_BIKES" | while read <VAR_1> <VAR_2> <VAR_3> <VAR_4> <VAR_5>
do
  <STATEMENTS>
done
```

It will read the first line of your `AVAILABLE_BIKES` variable into the five variables. Each variable being the next word in the line. Read each line into variables, `BIKE_ID BAR TYPE BAR SIZE`. In the `<STATEMENTS>` area, use `echo` to print the `BIKE_ID`, `TYPE`, and `SIZE` variables, in that order.

#### HINTS

- The first line should be `echo "$AVAILABLE_BIKES" | while read BIKE_ID BAR TYPE BAR SIZE`
- The `<STATEMENTS>` area looks like this: `echo "$BIKE_ID $TYPE $SIZE"`
- Here's how it should look:

```sh
echo "$AVAILABLE_BIKES" | while read BIKE_ID BAR TYPE BAR SIZE
do
  echo "$BIKE_ID $TYPE $SIZE"
done
```

## 1142. Run the script

### 1142.1

Run the script and go to the rent menu again to see if it's working.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1145. Adjust Available Bikes Display

### 1145.1

It's working :smile: Adjust the echo command that prints the bike info so that the first line printed would look like this: `1) 27" Mountain Bike`. The rest would look the same, but with their bike info. Make sure to escape any characters you need to.

#### HINTS

- Be sure to use double quotes and escape the `"` after `SIZE`
- Run your script and check the output if you want to see if it matches the suggestion
- Escape a `"` with `\"`
- Here's an example: `echo "<bike_id>) <size>" <type> Bike"`
- Make the suggested line look like this: `echo "$BIKE_ID) $SIZE\" $TYPE Bike"`
- The whole loop should look like this:

```sh
echo "$AVAILABLE_BIKES" | while read BIKE_ID BAR TYPE BAR SIZE
do
  echo "$BIKE_ID) $SIZE\" $TYPE Bike"
done
```

## 1150. Run the script

### 1150.1

Run the script and go to the rent menu again to see what it looks like now.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1160. Add echo Which one would you like to rent?

### 1160.1

That's better. Below the `ask for bike to rent` comment, print `Which one would you like to rent?` with a new line in front of it.

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nWhich one would you like to rent?"` below the suggested comment

## 1162. read BIKE_ID_TO_RENT

### 1162.1

Just below that, add a command to `read` input into a variable named `BIKE_ID_TO_RENT`.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Add this to the suggested area: `read BIKE_ID_TO_RENT`

## 1164. [[a =~ [0-9]]]; echo $?

### 1164.1

Next, you want to find out how to test if the user input is a number. In the terminal, enter `[[ a =~ [0-9] ]]; echo $?` to see if `a` is a number. The conditional expression will run, and `echo $?` will print the exit code of it (the last command).

#### HINTS

- Enter `[[ a =~ [0-9] ]]; echo $?` in the terminal
- It's the regular terminal, not the psql one

## 1165. echo [[a1 =~ [0-9]]]; echo $?

### 1165.1

It printed `1` for false. Meaning that `a` did not match the pattern [0-9], or `a` did not contain a number from `0-9`. Enter the same commands, but check if `a1` matches the pattern.

#### HINTS

- The previous command was `[[ a =~ [0-9] ]]; echo $?`
- Enter `[[ a1 =~ [0-9] ]]; echo $?` in the terminal

## 1166. echo [[a1 =~ ^[0-9]$]]; echo $?

### 1166.1

That printed `0` for true. `a1` does contain a number from `0-9`. Enter the same command, but change the pattern to `^[0-9]$`. The `^` signifies the start of the pattern, and `$` means the end. So the input will have to start, contain a number `0-9`, and end.

#### HINTS

- The previous command was `[[ a1 =~ [0-9] ]]; echo $?`
- Enter `[[ a1 =~ ^[0-9]$ ]]; echo $?` in the terminal

## 1167. echo [[1 =~ ^[0-9]$]]; echo $?

### 1167.1

`1` for false. `a1` does not match the pattern. Using the same syntax, check if `1` matches the pattern.

#### HINTS

- The previous command was `[[ a1 =~ ^[0-9]$ ]]; echo $?`
- Enter `[[ 1 =~ ^[0-9]$ ]]; echo $?` in the terminal

## 1168. echo [[11 =~ ^[0-9]$]]; echo $?

### 1168.1

`1` does match the pattern. It starts, contains a number, and ends. Check if `11` matches the same pattern.

#### HINTS

- The previous command was `[[ 1 =~ ^[0-9]$ ]]; echo $?`
- Enter `[[ 11 =~ ^[0-9]$ ]]; echo $?` in the terminal

## 1169. echo [[11 =~ ^[0-9]+$]]; echo $?

### 1169.1

That did not match because the pattern only allows a single number. Add a `+` after the `[0-9]` to allow any strings that start, contain one or more numbers, and end.

#### HINTS

- Enter the previous command with the suggested changed
- The previous command was `[[ 11 =~ ^[0-9]$ ]]; echo $?`
- Enter `[[ 11 =~ ^[0-9]+$ ]]; echo $?` in the terminal

## 1170. echo [[! 11 =~ ^[0-9]+$]]; echo $?

### 1170.1

So that pattern will match any positive integers. You want to check if the input is not a number. Add `!` in front of the comparison of the previous command to do that.

#### HINTS

- Enter the previous command with the suggested changed
- The previous command was `[[ 11 =~ ^[0-9]+$ ]]; echo $?`
- Enter `[[ ! 11 =~ ^[0-9]+$ ]]; echo $?` in the terminal

## 1176. Add if [[! $BIKE_ID_TO_RENT =~ ^[0-9]+$]]

### 1176.1

Back in your script, below the `if input is not a number` comment, add an `if` condition that checks if the input is not a number using the method you just practiced. Add the `send to main menu` comment in the `then` area of the `if`.

#### HINTS

- You want to check if the `$BIKE_ID_TO_RENT` variable is not a number
- You entered `[[ ! 11 =~ ^[0-9]+$ ]]; echo $?` in the terminal on the last step
- Here's an example:

```sh
if [[ <CONDITION> ]]
then
  # send to main menu
fi
```

- The condition you want is `[[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]`
- Add this in the suggestion area:

```sh
if [[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]
then
  # send to main menu
fi
```

## 1177. Add MAIN_MENU That is not a valid bike number

### 1177.1

If the `$BIKE_ID_TO_RENT` variable is not a number, add the code to send users to the main menu with the message, `That is not a valid bike number.`

#### HINTS

- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "That is not a valid bike number."` below the `send to main menu` comment

## 1178. ./bike-shop.sh

### 1178.1

Run the script, go to the rent menu, and enter something that isn't a number to make sure it is working. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1179. Add else with comments

### 1179.1

Add an `else` area for when the input is a number. Add these three single line comments in it; `get bike availability`, `if not available`, `send to main menu`.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- An `if/else` statement looks like this:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
else
  <STATEMENTS>
fi
```

- The `else` area should look like this:

```sh
else
  # get bike availability

  # if not available

  # send to main menu

```

- The whole `if` should look like this:

```sh
if [[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]
then
  # send to main menu
  MAIN_MENU "That is not a valid bike number."
else
  # get bike availability

  # if not available

  # send to main menu

fi
```

## 1180. Add BIKE_AVAILABILITY

### 1180.1

Below the `get bike availability` comment you just added, create a `BIKE_AVAILABILITY` variable. Set it equal to a query that gets the `available` column from the `bikes` table for the input. Also, make sure to only get the row if it is available.

#### HINTS

- Here's an example: `BIKE_AVAILABILITY=$($PSQL "<query_here>")`
- Use the `SELECT`, `FROM`, `WHERE`, and `AND` keywords
- Here's an example of the query: `SELECT <column> FROM <table> WHERE <condition1> AND <condition2>`
- You only want the `available` column for the bike with a `bike_id` equal to the `$BIKE_ID_TO_RENT` variable and only if the bike is available
- You want two conditions, `WHERE bike_id = $BIKE_ID_TO_RENT AND available = true`
- Add `BIKE_AVAILABILITY=$($PSQL "SELECT available FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT AND available = true")` below the `get bike availability` comment

## 1190. Add echo BIKE_AVAILABILITY

### 1190.1

Right below the variable you just created, use echo to print it so you can see what it looks like.

#### HINTS

- Print a variable like this: `echo $<VARIABLE_NAME>`
- The variable you want is `BIKE_AVAILABILITY`
- Add `echo $BIKE_AVAILABILITY` in the suggested area

## 1200. ./bike-shop.sh

### 1200.1

Run the script a few times, go to the rent menu, enter a bike that is available and one that isn't. You should have some `BMX` bikes that aren't available.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1210. Add if -z BIKE_AVAILABILITY

### 1210.1

The variable will be `t` or empty. Below the `if not available` comment, add an `if` condition that checks if it's empty. Put the `send to main menu` comment in it's statements area.

#### HINTS

- Here's an example:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```

- The condition you want is `-z $BIKE_AVAILABILITY`
- Place the `# send to main menu` comment in the `<STATEMENTS>` area
- The `if` condition should look like this:

```sh
if [[ -z $BIKE_AVAILABILITY ]]
then
  # send to main menu
fi
```

## 1215. Add MAIN_MENU That bike is not available

### 1215.1

In the `if` condition you just added, send users to the main menu with the message `That bike is not available.` if they input a number that isn't available.

#### HINTS

- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "That bike is not available."` below the `send to main menu` comment

## 1220. Remove echo BIKE_AVAILABILITY

### 1220.1

Remove the line where you print the `BIKE_AVAILABILITY` variable. You don't need it anymore.

#### HINTS

- Remove the `echo $BIKE_AVAILABILITY` line

## 1230. ./bike-shop.sh

### 1230.1

Run the script and go to the rent menu, enter a bike that isn't available to make sure it's working. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1233. psql UPDATE bikes SET add to true

### 1233.1

In the psql prompt, set all the bikes availability back to true.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- You want to set `available` to `true` for all the bikes
- After the `SET` can look like this: `available = true WHERE available = false`
- Try entering `UPDATE bikes SET available = true WHERE available = false;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1236. Add else with comments

### 1236.1

In your script, add an `else` for when a bike is available. Add these four comments in the `else` area `get customer info`, `if customer doesn't exist`, `get new customer name`, and `insert new customer`.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- An `if/else` statement looks like this:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
else
  <STATEMENTS>
fi
```

- The `else` area should look like this:

```sh
else
  # get customer info

  # if customer doesn't exist

  # get new customer name

  # insert new customer

```

- The whole `if` should look like this:

```sh
if [[ -z $BIKE_AVAILABILITY  ]]
then
  # send to main menu
  MAIN_MENU "That bike is not available."
else
  # get customer info

  # if customer doesn't exist

  # get new customer name

  # insert new customer

fi
```

## 1240. Add echo What's your phone number?

### 1240.1

As the comments say, you need to get the customer info and find out if they are an existing customer. Below the `get customer info` comment, print `What's your phone number?` with a new line in front of it.

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nWhat's your phone number?"` below the suggested comment

## 1250. read PHONE_NUMBER

### 1250.1

Below the line you just printed, read input into a `PHONE_NUMBER` variable. Since the phone number is unique, you can use it to identify a customer.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Add `read PHONE_NUMBER` to the suggested area
- Add it below where you print `What's your phone number?`

## 1260. Add CUSTOMER_NAME

### 1260.1

With the customer's phone number, you can get their name. Below where you get the phone number, create a `CUSTOMER_NAME` variable that gets the customers name from the database using the phone number.

#### HINTS

- Query the database to set the `CUSTOMER_NAME` variable
- Here's an example: `CUSTOMER_NAME=$($PSQL "<query_here>")`
- Use the `SELECT`, `FROM` and `WHERE` keywords for your query
- You want only the `name` column from the `customers` table
- The condition you want is `phone = '$PHONE_NUMBER'`
- The query should look like this: `SELECT name FROM customers WHERE phone = '$PHONE_NUMBER'`
- Add `CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone = '$PHONE_NUMBER'")` below the `read PHONE_NUMBER` line

## 1265. Add if -z CUSTOMER_NAME

### 1265.1

If the customer is in the database with the phone number used, the variable will be set to the name. If not, it will be empty. Add an `if` condition below the `if customer doesn't exist` comment that checks if the variable is empty. Place the next two comments in the `then` area.

#### HINTS

- Here's an example:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```

- The condition you want is `-z $CUSTOMER_NAME`
- Place the `# get new customer name` and `# insert new customer` comments in the `<STATEMENTS>` area
- The `if` condition should look like this:

```sh
if [[ -z $CUSTOMER_NAME ]]
then
  # get new customer name

  # insert new customer

fi
```

- Make sure it's below the `if customer doesn't exist` comment

## 1270. Add echo What's your name?

### 1270.1

If the customer isn't in the database, you need to get their name so you can add them. Below the `get new customer name` comment, print `What's your name?` with a new line in front of the message.

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nWhat's your name?"` below the suggested comment

## 1280. read CUSTOMER_NAME

### 1280.1

Below the question you just printed, read input into a variable named `CUSTOMER_NAME`.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Add `read CUSTOMER_NAME` to the suggested area
- Add it below where you print `What's your name?`

## 1290. Add INSERT_CUSTOMER_RESULT

### 1290.1

You have the two pieces of information you need. Below the `insert new customer` comment, create an `INSERT_CUSTOMER_RESULT` variable that inserts the customer into the database.

#### HINTS

- Here's an example: `INSERT_CUSTOMER_RESULT=$($PSQL "<query_here>")`
- View the `customers` table in the psql prompt with `\d customers` to see the columns you need to add data to
- Be sure to use single quotes around `VARCHAR` values
- The query looks similar to this: `INSERT INTO customers(column1, column2) VALUES('value1', 'value2')`
- You want to use the `CUSTOMER_NAME` and `PHONE_NUMBER` variables for the values
- Here's the query: `INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')`
- Add `INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')")` below the `insert new customer` comment

## 1300. Run the script

### 1300.1

Run your script and go to the rent menu. Pick a bike to rent, then enter `555-5555` when it asks for a phone number, and `Me` when it asks for your name.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Follow the instructions closely
- Make sure to use `555-5555` for the phone number and `Me` for the name
- The database should have a customer with `555-5555` as their phone number, and `Me` as their name in it

## 1310. psql SELECT \* FROM customers

### 1310.1

That should have added a new customer to the database. In the psql prompt, view all the data in the `customers` table to see if it's working.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM customers;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1311. psql SELECT \* FROM rentals

### 1311.1

Excellent. View all the data in the rentals table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM rentals;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1312. psql SELECT \* FROM bikes

### 1312.1

So you still need to add the rental to the rentals table when a bike is picked out. View all the data in the `bikes` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM bikes;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1315. Add comments

### 1315.1

And set the `available` column to false for the bike rented. Below the end of the `if` statement that inserts a new customer, add five more comments; `get customer_id`, `insert bike rental`, `set bike availability to false`, `get bike info`, and `send to main menu`

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The comments should be below (not in) the `if [[ -z $CUSTOMER_NAME ]]` statement
- The comments should look like this:

```sh
  if [[ -z $CUSTOMER_NAME ]]
  then
    # get new customer name
    echo -e "\nWhat's your name?"
    read CUSTOMER_NAME

    # insert new customer
    INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')")
  fi

  # get customer_id

  # insert bike rental

  # set bike availability to false

  # get bike info

  # send to main menu

```

## 1320. Add CUSTOMER_ID

### 1320.1

You're getting close to done with the rent functionality. To add a rental to the database, you need the customer ID. Below the `get customer_id` comment, create a `CUSTOMER_ID` variable that gets the `customer_id` using the phone number.

#### HINTS

- Here's an example: `CUSTOMER_ID=$($PSQL "<query_here>")`
- You want to get the `customer_id` column from the customers table using the `PHONE_NUMBER` variable in your condition to get it
- The condition you want is `WHERE phone = '$PHONE_NUMBER'`
- The query looks like this: `SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'`
- Add `CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'")` below the `get customer_id` comment

## 1330. Add INSERT_RENTAL_RESULT

### 1330.1

Now that you have the bike ID and customer ID, you can add the rental to the database. Below the `insert bike rental` comment, create a `INSERT_RENTAL_RESULT` variable that adds the rental to the database.

#### HINTS

- Here's an example: `INSERT_RENTAL_RESULT=$($PSQL "<query_here>")`
- View the `rentals` table by entering `\d rentals` in the psql prompt to see what the columns are
- The query looks similar to this: `INSERT INTO rentals(column1, column2) VALUES(value1, value2)`
- You want to insert the `BIKE_ID_TO_RENT` and `CUSTOMER_ID` variables into the `bike_id` and `customer_id` columns
- The query should look like this: `INSERT INTO rentals(bike_id, customer_id) VALUES($BIKE_ID_TO_RENT, $CUSTOMER_ID)`
- Add `INSERT_RENTAL_RESULT=$($PSQL "INSERT INTO rentals(customer_id, bike_id) VALUES($CUSTOMER_ID, $BIKE_ID_TO_RENT)")` below the `insert bike rental` comment

## 1370. Add SET_TO_FALSE_RESULT

### 1370.1

That should add the rental to the database. The last thing to do is set `available` to false for the bike. Below the `set bike availability to false` comment, create a `SET_TO_FALSE_RESULT` variable that does that.

#### HINTS

- Here's an example: `SET_TO_FALSE_RESULT=$($PSQL "<query_here>")`
- You want to use the `UPDATE`, `SET`, and `WHERE` keywords
- You want to set the `available` column to `false` for the `bike_id` of `BIKE_ID_TO_RENT`
- The query looks similar to this: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- The query looks like this: `UPDATE bikes SET available = false WHERE bike_id = $BIKE_ID_TO_RENT`
- Add `SET_TO_FALSE_RESULT=$($PSQL "UPDATE bikes SET available = false WHERE bike_id = $BIKE_ID_TO_RENT")` below the `set bike availability to false` comment

## 1380. Run the script

### 1380.1

Run the script and go to the rent menu. Pick the first bike on the list and enter `555-5555` when it asks for a phone number again. That phone number should already be in the database, so it won't ask for a name or insert a customer.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure to enter the correct bike number and phone number
- There should be a rental in the database for customer with phone number `555-5555` and name `Me`

## 1390. psql SELECT \* FROM rentals

### 1390.1

In the psql prompt, view all the data in the `rentals` table. There should be a new rental.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM rentals;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1400. psql SELECT \* FROM bikes ORDER BY bike_id

### 1400.1

The rental was added and the `date_rented` was filled in automatically. :smile: Next, view all the data in the `bikes` table. Order the results by `bike_id`

#### HINTS

- Use the `SELECT`, `FROM`, and `ORDER BY` keywords with `*` to view all the data
- Enter `SELECT * FROM bikes ORDER BY bike_id;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1401. Add BIKE_INFO

### 1401.1

The available column was set to false for the bike you rented. The last thing to do is give a nice message about the rental. Below the `get bike info` comment, create a `BIKE_INFO` variable that gets the `size` and `type`, in that order, of the bike rented.

#### HINTS

- Here's an example: `BIKE_INFO=$($PSQL "<query_here>")`
- You want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Use the `BIKE_ID_TO_RENT` variable to find the needed info for the bike
- The query looks similar to this: `SELECT size, type FROM <table> WHERE <condition>`
- The condition you want is `WHERE bike_id = $BIKE_ID_TO_RENT`
- The query looks like this: `SELECT size, type FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT`
- Add `BIKE_INFO=$($PSQL "SELECT size, type FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT")` below the `get bike info` comment

## 1402. Add echo BIKE_INFO

### 1402.1

Below the variable you just created, use `echo` to print it.

#### HINTS

- Print a variable like this: `echo $<VARIABLE_NAME>`
- The variable you want is `BIKE_INFO`
- Add `echo $BIKE_INFO` in the suggested area

## 1403. ./bike-shop.sh

### 1403.1

Run the script again and go to the rent menu, there should now be one less bike displayed. Pick the next bike on the list and rent it using the customer with phone number `555-5555` again so you can see the variable.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- There should be at least two rentals for the customer with phone nummber `555-5555` and name `Me`

## 1404. echo '28 | Mountain' | sed 's/ /=/g'

### 1404.1

It should have printed `28 | Mountain`. The message you want to print after someone rents a bike would have said `I have put you down for the 28" Mountain Bike, Me.`. You need to format that variable for the message. The `sed` command can be used to replace characters and patterns in text. It looks like this: `sed s/<regex_pattern_to_replace>/<characters_to_replace_with>/<regex_flags>`. In the terminal, enter `echo '28 | Mountain' | sed 's/ /=/g'` to practice.

#### HINTS

- Enter the suggested command in the terminal
- Not the psql one

## 1405. echo '28 | Mountain' | sed 's/ //g'

### 1405.1

The command you used, "piped" a string (`28 | Mountain`) to the `sed` command, where it replaced all the spaces with `=`. Enter the same command, but replace all the spaces with nothing.

#### HINTS

- The previous command was `echo '28 | Mountain' | sed 's/ /=/g'`
- Remove the `=` from the previous command
- Enter `echo '28 | Mountain' | sed 's/ //g'` in the terminal

## 1407. echo '28 | Mountain' | sed 's/ //'

### 1407.1

The `g` regex flag stands for "global". It will replace all instance of the pattern. In this case, it replaced all the spaces. Enter the same command but without that flag.

#### HINTS

- The previous command was `echo '28 | Mountain' | sed 's/ //g`
- Remove the `g` flag from the previous command
- Enter `echo '28 | Mountain' | sed 's/ //'` in the terminal

## 1408. echo '28 | Mountain' | sed 's/ |//'

### 1408.1

That time, only the first instance of the pattern was replaced. The first space was removed. Enter the same command, but replace the first instance of <code>&nbsp;|</code> (`<space>|`) with nothing.

#### HINTS

- The previous command was `echo '28 | Mountain' | sed 's/ //`
- You want to replace the space in the pattern of the last command with <code>&nbsp;|</code> (`<space_here>|`)
- Enter `echo '28 | Mountain' | sed 's/ |//'` in the terminal

## 1410. echo '28 | Mountain' | sed 's/ |/"/'

### 1410.1

Enter the same command, but make the output look like how you want in the message, `28" Mountain`.

#### HINTS

- The previous command was `echo '28 | Mountain' | sed 's/ |//`
- Use `"` as the character to replace <code>&nbsp;|</code> (`<space>|`) with
- Enter `echo '28 | Mountain' | sed 's/ |/"/'` in the terminal

## 1411. Add echo BIKE_INFO | sed 's/ |/"/'

### 1411.1

Back in your script, where you `echo` the `BIKE_INFO`, pipe the output into a `sed` command that replaces <code>&nbsp;|</code> (`<space>|`) with `"` so the text will read `<SIZE>" <TYPE>`. `28 | Mountain` would become `28" Mountain`, for instance.

#### HINTS

- The previous command was `echo '28 | Mountain' | sed 's/ |/"/'`
- You want to add the `| sed 's/ |/"/'` part of the previous command after your `echo $BIKE_INFO` line
- Make the suggested area look like this:

```sh
echo $BIKE_INFO | sed 's/ |/"/'
```

## 1413. ./bike-shop.sh

### 1413.1

Run the script and rent another bike using the customer with phone number `555-5555` again. Make sure the bike info printed looks like you want.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- The customer with phone number `555-5555` and name `Me` should have at least three bikes rented

## 1415. Add BIKE_INFO_FORMATTED

### 1415.1

Now it is formatted for the message. Take that `echo` command and the part that formats it, put it in a sub shell, and set the output into a variable named `BIKE_INFO_FORMATTED`. Here's an example: `BIKE_INFO_FORMATTED=$(<formatted info here>)`

#### HINTS

- You want to put the `echo $BIKE_INFO | sed 's/ |/"/'` part in the subshell
- It should look like this: `BIKE_INFO_FORMATTED=$(echo $BIKE_INFO | sed 's/ |/"/')`

## 1417. Add MAIN_MENU I have put you down for bike

### 1417.1

What you put the in subshell (`$(...)`) will be executed, and the result of it will replace the subshell. In this case, the formatted bike info was printed when you ran the script before, so the `BIKE_INFO_FORMATTED` variable will be set to that. Below the `send to main menu` comment, send users to the main menu with a message that would print `I have put you down for the 28" Mountain Bike, Me.` if `Me` rented the 28 inch Mountain Bike.

#### HINTS

- Use dynamic info for the bike info and the customer's name
- You want to use the `BIKE_INFO_FORMATTED` and `CUSTOMER_NAME` variables
- The message should look like this: `I have put you down for the $BIKE_INFO_FORMATTED Bike, $CUSTOMER_NAME.`
- Add `MAIN_MENU "I have put you down for the $BIKE_INFO_FORMATTED Bike, $CUSTOMER_NAME."` below the `send to main menu` comment

## 1418. ./bike-shop.sh

### 1418.1

Run the script and rent the next bike on the list. Use the customer with `555-5555` as their phone number. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- The customer with phone number `555-5555` and name `Me` should have at least four bikes rented

## 1420. echo ' M e '

### 1420.1

There's an extra space around the customer's name. You can use `sed` again to fix that. In the terminal, enter `echo ' M e '` to print `M e` with spaces around it to see if you can find out how.

#### HINTS

- Enter the `echo ' M e '` in the terminal
- Not the psql one

## 1422. echo "$(echo ' M e ')."

### 1422.1

It printed, but you can only assume there's a space at the end. Place the last command in a subshell with quotes around it. Put a period right after the subshell and echo the whole thing in the terminal. Here's how it looks: `echo "$(echo ' M e ')."`

#### HINTS

- Enter `echo "$(echo ' M e ')."` in the terminal

## 1424. echo "$(echo ' M e ' | sed 's/ //')."

### 1424.1

Now you can be certain there's a space at the end. Within the subshell of the last command, use a pipe and the `sed` command to replace the first space with no space. Here's the `sed` replacement pattern you want: `'s/ //'`.

#### HINTS

- The previous command was `echo "$(echo ' M e ')."`
- Here's an example of how the subshell should look: `$(echo ' M e ' | sed <pattern>)`
- This is the exact subshell: `$(echo ' M e ' | sed <pattern>)`
- Enter `echo "$(echo ' M e ' | sed 's/ //')."` in the terminal

## 1425. echo "$(echo ' M e ' | sed 's/ //g')."

### 1425.1

That removed only the first space it found. Change the previous command to replace all instances of a space instead of just the first one.

#### HINTS

- The previous command was `echo "$(echo ' M e ' | sed 's/ //')."`
- Use a regex flag to make the suggested modification
- You want to add the `g` flag to the `sed` replacement pattern.
- The `sed` pattern should look like this: `'s/ //g'`
- Enter `echo "$(echo ' M e ' | sed 's/ //g')."` in the terminal

## 1427. echo "$(echo ' M e ' | sed 's/^ //g')."

### 1427.1

That replaced all the spaces. You only had an extra space at the beginning of the customer name. Add a `^` in front of the space in the replacement pattern of the last command to only replace a space at the beginning of the text.

#### HINTS

- The previous command was `echo "$(echo ' M e ' | sed 's/ //g')."`
- You want to change the matching pattern to <code>^&nbsp;</code> (`^<space>`)
- The matching pattern is between the first and second forward slashes
- The `sed` pattern should look like this: `s/^ //g`
- Enter `echo "$(echo ' M e ' | sed 's/^ //g')."` in the terminal

## 1428. echo "$(echo ' M e ' | sed 's/^ //g')."

### 1428.1

The caret you added means that's the start of the text. So it will replace a space only if it's at the beginning. Enter the last command, but add two more spaces (three total) at the beginning of the **text**.

#### HINTS

- The previous command was `echo "$(echo ' M e ' | sed 's/^ //g')."`
- Change the `' M e '` part to include the suggestion
- The new text should be <code>'&nbsp;&nbsp;&nbsp;M e&nbsp;'</code> (`'<three_spaces>M e '`)
- In the terminal, enter <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e ' | sed 's/^ //g')."</code>

## 1430. echo "$(echo ' M e ' | sed 's/^ \*//g')."

### 1430.1

The <code>^&nbsp;</code> (`^<space>`) pattern only replaced the first space. Add `*` at the end of the matching pattern to replace all spaces at the beginning of text.

#### HINTS

- The previous command was <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e ' | sed 's/^ //g')."</code>
- The matching pattern is between the first and second forward slash
- The new pattern is: `'s/^ *//g'`
- Enter <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e ' | sed 's/^ \*//g')."</code> in the terminal

## 1432. echo "$(echo ' M e ' | sed 's/ $//g')."

### 1432.1

The customer name only had an extra space at the beginning. Unsure as to why, but there may be others with extra spaces at the end as well. You can match the end of text with `$`. Change the matching pattern of the last command so it replaces a single space at the end. The pattern is <code>&nbsp;$</code> (`<space>$`).

#### HINTS

- The previous command was <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e ' | sed 's/^ \*//g')."</code>
- The matching pattern is between the first and second forward slash
- Change the matching pattern to the suggestion
- Enter <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e ' | sed 's/ $//g')."</code> in the terminal

## 1433. echo "$(echo ' M e ' | sed 's/ $//g')."

### 1433.1

Add two more spaces to the end of the **text** in the previous command (three spaces total).

#### HINTS

- The previous command was <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e ' | sed 's/ $//g')."</code>
- The matching pattern is between the first and second forward slash
- Change the matching pattern to the suggestion
- Enter <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed 's/ $//g')."</code> in the terminal

## 1435. echo "$(echo '   M e   ' | sed 's/ *$//g')."

### 1435.1

The pattern only replaces a single space at the end. Change the last command so it replaces all spaces at the end of the text.

#### HINTS

- The previous command was <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed 's/ $//g')."</code>
- Use `*` in a pattern after a character to replace zero or more of that character
- The matching pattern you want is <code>&nbsp;_$</code> (`<space>_$`)
- Change the matching pattern to the suggestion
- Enter <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed 's/ *$//g')."</code> in the terminal

## 1436. echo "$(echo '   M e   ' | sed 's/^ *| *$//g')."

### 1436.1

That replaced all the spaces at the end of the text. You can use `|` as an "or" operator in a matching pattern to replace one pattern or another. Use it to change the matching pattern so it would replace any amount of spaces at the beginning and any amount of spaces at the end of the text.

#### HINTS

- The previous command was <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed 's/ *$//g')."</code>
- You want to replace the <code>^&nbsp;_</code> (`^<space>_`) pattern
- And the <code>&nbsp;_$</code> (`<space>_$`) pattern
- The matching pattern should look like this: `'s/^ *| *$//g'`
- Enter <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed 's/^ *| *$//g')."</code>

## 1437. man sed

### 1437.1

That didn't work. It doesn't like that "or" (`|`) operator for some reason. Check the manual of the `sed` command to see if you can find anything.

#### HINTS

- Here's an example of how to see a manual: `man <command>`
- Enter `man sed` in the terminal
- Press enter until you have seen the whole manual

## 1438. echo "$(echo '   M e   ' | sed -r 's/^ *| *$//g')."

### 1438.1

Somewhere in there is a flag for using extended regular expressions with `sed`. That might work. Add it to the <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed 's/^ *| *$//g')."</code> command that didn't work to find out.

#### HINTS

- :point_down:
- Find the flag in the terminal output for using extended regular expressions with `sed`
- It's the `-E` flag
- You previously entered <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed 's/^ *| *$//g')."</code>
- Add the `-E` flag to the `sed` part of that command
- Enter <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed -E 's/^ *| *$//g')."</code> in the terminal

## 1440. Change to trim CUSTOMER_NAME

### 1440.1

:wink: That trimmed all spaces from the front and end of the text. Back in the last message of your script, place the `CUSTOMER_NAME` variable in a subshell, echo and pipe it into a `sed` command that removes all spaces from the front and back. Use the same method you used in the terminal.

#### HINTS

- Here's an example: `$(echo $CUSTOMER_NAME | sed ...)`
- `^ *` will match all spaces at the beginning of text, and <code>&nbsp;\*$</code> will match spaces at the end
- The previous command was <code>echo "$(echo '&nbsp;&nbsp;&nbsp;M e&nbsp;&nbsp;&nbsp;' | sed -r 's/^ *| *$//g')."</code>
- Change the `$CUSTOMER_NAME` variable in the last message to `$(echo $CUSTOMER_NAME | sed -r 's/^ *| *$//g')`

## 1442. Run the script

### 1442.1

Run the script and rent another bike with the customer whose phone number is `555-5555`. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- The customer with phone number `555-5555` and name `Me` should have at least five bikes rented

## 1444. Run the script

### 1444.1

Run the script again. Rent another bike, use `000-0000` as the phone number this time, and `Test` as the name to create a new customer. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- The customer with phone number `000-0000` and name `Test` should have at least one bike rented

## 1446. Run the script

### 1446.1

Run the script again. Rent another bike with the customer you just created. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- The customer with phone number `000-0000` and name `Test` should have at least two bikes rented

## 1448. SELECT \* FROM bikes ORDER BY bike_id

### 1448.1

In the psql prompt, view all the data in your bikes table in order by the `bike_id`.

#### HINTS

- Use the `SELECT`, `FROM`, and `ORDER BY` keywords with `*` to view all the data
- Enter `SELECT * FROM bikes ORDER BY bike_id;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1449. SELECT \* FROM bikes ORDER BY bike_id

### 1449.1

There should be two bikes left available to rent. Next, look at all the data in the customers table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM customers;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1450. SELECT \* FROM bikes ORDER BY bike_id

### 1450.1

There should two customers in that table now. Lastly, look at all the data in the rentals table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM rentals;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1453. Delete echo Return Menu

### 1453.1

The rent functionality looks like it all works. Delete the `echo Return Menu` line in the `RETURN_MENU` function so you can get started with that.

#### HINTS

- The `RETURN_MENU` function should be empty
- The `RETURN_MENU` function should look like this:

```sh
RETURN_MENU() {

}
```

## 1457. Add comments to RETURN_MENU

### 1457.1

Add three single line comments to the return menu function; `get customer info`, `if not found`, and `send to main menu`, in that order.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The comments should be in the `RETURN_MENU` function
- The `RETURN_MENU` function should look like this:

```sh
RETURN_MENU() {
  # get customer info

  # if not found

  # send to main menu

}
```

## 1460. Start the Return Bike Functionality

### 1460.1

Below the `get customer info` comment you just added, print `What's your phone number?` with a new line in front of the sentence.

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nWhat's your phone number?"` below the suggested comment

## 1470. Read PHONE_NUMBER

### 1470.1

Just below that, use `read` to get input into a `PHONE_NUMBER` variable.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Add `read PHONE_NUMBER` to the suggested area
- Add it below where you print `What's your phone number?`

## 1472. Add CUSTOMER_ID

### 1472.1

Just below that, set the `CUSTOMER_ID` variable to a query that gets the customer ID from the database using the phone number they gave you.

#### HINTS

- Here's an example: `CUSTOMER_ID=$($PSQL "<query_here>")`
- You want to get the `customer_id` column from the customers table using the `PHONE_NUMBER` variable in your condition to get it
- The condition you want is `WHERE phone = '$PHONE_NUMBER'`
- The query looks like this: `SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'`
- Add `CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'")` below the `read PHONE_NUMBER` line in the `RETURN_MENU` function

## 1474. Add if -z CUSTOMER_ID

### 1474.1

If they are in the database, the variable will be their `customer_id`. If not, it will be empty. Below the `if not found` comment, add an `if` statement that checks if it's empty. Put the `send to main menu` comment in the `then` area.

#### HINTS

- Here's an example:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```

- The condition you want is `-z $CUSTOMER_ID`
- Place the `# send to main menu` comment in the `<STATEMENTS>` area
- The `if` condition should look like this:

```sh
if [[ -z $CUSTOMER_ID ]]
then
  # send to main menu

fi
```

## 1475. Add MAIN_MENU I could not find a record for that phone number

### 1475.1

If the customer isn't found, send them to the main menu with the message `I could not find a record for that phone number.`

#### HINTS

- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "I could not find a record for that phone number."` below the `send to main menu` comment

## 1476. ./bike-shop.sh

### 1476.1

Run the script and go to the return menu. Enter a phone number that is not in the database. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1478. Add else with comments

### 1478.1

Add an `else` to the `if` condition for if the phone number is found in the database. Place `get customer's rentals`, `if no rentals`, and `send to main menu` in the `else` area as single line comments.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The comments should be in the `else` area of the `if [[ -z CUSTOMER_ID ]]` statement
- An `if/else` statement looks like this:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
else
  <STATEMENTS>
fi
```

- The `else` area should look like this:

```sh
else
  # get customer's rentals

  # if no rentals

  # send to main menu

fi
```

- The whole `if` should look like this:

```sh
if [[ -z $CUSTOMER_ID  ]]
then
  # send to main menu
  MAIN_MENU "I could not find a record for that phone number."
else
  # get customer's rentals

  # if no rentals

  # send to main menu

fi
```

## 1480. psql SELECT \* FROM bikes

### 1480.1

You want to find out what rentals a customer has using their phone number and display them. You will need to join all the tables. Start by using the psql prompt to view all the data in the `bikes` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM bikes;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1485. psql SELECT \* FROM bikes LEFT JOIN rentals

### 1485.1

Next, use a `LEFT JOIN` with `bikes` as the left table to join the bikes and rentals tables. Use the `USING` keyword to join the two tables.

#### HINTS

- You need the `SELECT`, `FROM`, `LEFT JOIN`, and `USING` keywords
- Here's an example: `SELECT <column> FROM <table_1> LEFT JOIN <table_2> USING(<foreign_key>)`
- Enter `\d bikes` or `\d rentals` in the psql prompt to view the details of the table and find the foreign key column
- It's the `bike_id` column
- Enter `SELECT * FROM bikes LEFT JOIN rentals USING(bike_id);` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1490. psql SELECT bikes INNER JOIN rentals

### 1490.1

You only need the bikes that are being rented. Use an inner join with the same two tables to only get those. Use the `USING` keyword again.

#### HINTS

- It's an `INNER JOIN`
- You need the `SELECT`, `FROM`, `INNER JOIN`, and `USING` keywords
- Here's an example: `SELECT <column> FROM <table_1> INNER JOIN <table_2> USING(<foreign_key>)`
- Enter `SELECT * FROM bikes INNER JOIN rentals USING(bike_id);` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1500. psql SELECT bikes INNER JOIN rentals INNER JOIN customers

### 1500.1

Add a join to the previous command that joins the last table so you can get the customer information. Use an `INNER JOIN` and the `USING` keyword again.

#### HINTS

- The previous query was `SELECT * FROM bikes INNER JOIN rentals USING(bike_id);`
- Here's an example: `SELECT <column> FROM <table_1> INNER JOIN <table_2> USING(<foreign_key>) INNER JOIN <table_3> USING(foreign_key)`
- Enter `\d rentals` or `\d customers` in the psql prompt to view the details of the table and find the foreign key column
- It's the `customer_id` column
- Enter `SELECT * FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id);` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1510. psql Add conditions to the query

### 1510.1

Add two conditions to the last query to narrow down the results to the bikes that are currently being rented by customer with `555-5555` as their phone number. The second condition should check the `date_returned` column

#### HINTS

- The previous query was `SELECT * FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id);`
- You want to add a `WHERE <condition_1> AND <condition_2>` to the last query
- Use the `IS NULL` keyword to check the `date_returned` in one of the conditions
- The two conditions are `WHERE phone = '555-5555' AND date_returned IS NULL`
- Enter `SELECT * FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND date_returned IS NULL;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1520. psql SELECT only columns

### 1520.1

Now you have all the rentals for one specific customer. Only get the columns you need to display the bike information to them. They are the same three columns you used to display the list of available bikes.

#### HINTS

- The previous query was `SELECT * FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND date_returned IS NULL;`
- The three columns you want are `bike_id`, `type`, and `size`
- Enter `SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND date_returned IS NULL;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1525. psql SELECT ORDER BY

### 1525.1

One more thing, order the results of the last query by their `bike_id` column.

#### HINTS

- The previous query was `SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND date_returned IS NULL;`
- Add `ORDER BY bike_id` to the end of the last query
- Enter `SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND date_returned IS NULL ORDER BY bike_id;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1530. Add CUSTOMER_RENTALS

### 1530.1

That's the query you will need to use to get the bikes a customer is renting. In your script below the `get customer's rentals` comment. Create a `CUSTOMER_RENTALS` variable that gets the rentals for the customer. Use the `PHONE_NUMBER` variable to get them.

#### HINTS

- Here's an example: `CUSTOMER_RENTALS=$($PSQL "<query_here>")`
- You previously entered `SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND date_returned IS NULL ORDER BY bike_id;` in the psql prompt
- All the columns and tables should be in the same order as in the above query
- The query looks like this: `SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '$PHONE_NUMBER' AND date_returned IS NULL ORDER BY bike_id`
- Add `CUSTOMER_RENTALS=$($PSQL "SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '$PHONE_NUMBER' AND date_returned IS NULL ORDER BY bike_id")` below the `get customer's rentals` comment

## 1540. Add echo CUSTOMER_RENTALS

### 1540.1

Below the variable you just created, use `echo` to print it. Make sure to put double quotes around it.

#### HINTS

- Here's an example: `echo "<variable_here>"`
- Use the variable with `$CUSTOMER_RENTALS`
- Add `echo "$CUSTOMER_RENTALS"` to the suggested area

## 1550. ./bike-shop.sh

### 1550.1

Run the script and go to the return menu. Enter `555-5555` for the phone number to see the rentals for `Me`.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1560. Add if -z CUSTOMER_RENTALS

### 1560.1

The query is working. If the customer has no rentals, the variable will be empty. Below the `if no rentals` comment, add an `if` condition that checks if it's empty. Put the `send to main` menu comment in the `then` area again.

#### HINTS

- Here's an example:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```

- The condition you want is `-z $CUSTOMER_RENTALS`
- Place the `# send to main menu` comment in the `<STATEMENTS>` area
- The `if` condition should look like this:

```sh
if [[ -z $CUSTOMER_RENTALS ]]
then
  # send to main menu

fi
```

## 1563. Add MAIN_MENU You do not have any bikes rented

### 1563.1

If the customer has no rentals, send them to the main menu with the message `You do not have any bikes rented.` Add the code below the next comment.

#### HINTS

- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "You do not have any bikes rented."` below the `send to main menu` comment

## 1570. Add else with comments

### 1570.1

Add an `else` to the condition for when the customer does have rentals. Place four single line comments in it; `display rented bikes`, `ask for bike to return`, `if not a number`, and `send to main menu`.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The comments should be in the `else` area of the `if [[ -z CUSTOMER_RENTALS ]]` statement
- The `else` area should look like this:

```sh
else
  # display rented bikes

  # ask for bike to return

  # if not a number

  # send to main menu

fi
```

- The whole `if` should look like this:

```sh
if [[ -z $CUSTOMER_RENTALS  ]]
then
  # send to main menu
  MAIN_MENU "You do not have any bikes rented."
else
  # display rented bikes

  # ask for bike to return

  # if not a number

  # send to main menu

fi
```

## 1572. Add echo Here are your rentals

### 1572.1

Below the `display rented bikes` comment, print `Here are your rentals:` with a new line in front of it.

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nHere are your rentals:"` below the suggested comment

## 1575. Add echo CUSTOMER_RENTALS

### 1575.1

Move the `echo $CUSTOMER_RENTALS` line to below the line you just printed.

#### HINTS

- Move the suggested code below where you print `Here are your rentals:`
- You should only print the variable in that one spot
- Place the `echo "$CUSTOMER_RENTALS"` line in the suggested spot

## 1578. ./bike-shop.sh

### 1578.1

Run the script and go to the return menu. Enter `555-5555` for the phone number to see the rented bikes.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1580. Add pipe and while loop

### 1580.1

Where you print the list of rented bikes, pipe the command into a `while` loop that reads the data. You should read the data into `BIKE_ID`, `BAR`, `TYPE`, `BAR`, and `SIZE` variables. Make it print each rented bike in the same fashion as the list of available bikes.

#### HINTS

- Here's an example:

```sh
echo "$CUSTOMER_RENTALS" | while read <VARIABLES>
do
  echo <RENTED_BIKE_INFORMATION>
done
```

- The first line should look like this: `echo "$CUSTOMER_RENTALS" | while read BIKE_ID BAR TYPE BAR SIZE`
- The loop should print `1) 27" Mountain Bike` for each bike with the appropriate bike info
- The whole thing looks like this:

```sh
echo "$CUSTOMER_RENTALS" | while read BIKE_ID BAR TYPE BAR SIZE
do
  echo "$BIKE_ID) $SIZE\" $TYPE Bike"
done
```

## 1585. ./bike-shop.sh

### 1585.1

Run the script and go to the return menu. Enter the same phone number again to make sure the list is showing up correctly.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1590. Add echo Which bike would you like to return?

### 1590.1

Below the `ask for bike to return` comment, print `Which one would you like to return?` with a new line in front of it.

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nWhich one would you like to return?"` below the suggested comment

## 1600. read BIKE_ID_TO_RETURN

### 1600.1

Below the line you just printed, read input into a `BIKE_ID_TO_RETURN` variable.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Add `read BIKE_ID_TO_RETURN` to the suggested area
- Add it below where you print `Which one would you like to return?`

## 1602. Add if BIKE_ID_TO_RETURN not a number

### 1602.1

Below the `if not a number` comment, check if the input for the bike ID to return is a number using the same method you did earlier. Place the `send to main menu` comment in the statement.

#### HINTS

- Here's an example:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```

- The condition should check that the `$BIKE_ID_TO_RETURN` variable is not a number using the pattern matching operator (`=~`) and the pattern `^[0-9]+$`
- The condition you want is `[[ ! $BIKE_ID_TO_RETURN =~ ^[0-9]+$ ]]`
- Place the `# send to main menu` comment in the `<STATEMENTS>` area
- The `if` condition should look like this:

```sh
if [[ ! $BIKE_ID_TO_RETURN =~ ^[0-9]+$ ]]
then
  # send to main menu

fi
```

## 1605. Add MAIN_MENU That is not a valid bike number

### 1605.1

If they don't input a number, send them to the main menu with `That is not a valid bike number.` as the message.

#### HINTS

- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "That is not a valid bike number."` below the `send to main menu` comment

## 1607. Add else with comments

### 1607.1

Add an `else` for when they do input a number. Place `check if input is rented`, `if input not rented`, and `send to main menu` single line comments in it.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The comments should be in the `else` area of the `if [[ ! $BIKE_ID_TO_RETURN =~ ^[0-9]+$ ]]` statement
- The `else` area should look like this:

```sh
else
  # check if input is rented

  # if input not rented

  # send to main menu

fi
```

- The whole `if` should look like this:

```sh
if [[ ! $BIKE_ID_TO_RETURN =~ ^[0-9]+$ ]]
then
  # send to main menu
  MAIN_MENU "That is not a valid bike number."
else
  # check if input is rented

  # if input not rented

  # send to main menu

fi
```

## 1610. psql SELECT rentals INNER JOIN customers

### 1610.1

You need to check if the input is a `bike_id` rented by the customer so you can return it. In the psql prompt, join the `rentals` and `customers` tables with an `INNER JOIN` using the `USING` keyword.

#### HINTS

- You need the `SELECT`, `FROM`, `INNER JOIN`, and `USING` keywords
- Here's an example: `SELECT <column> FROM <table_1> INNER JOIN <table_2> USING(<foreign_key>)`
- Enter `\d rentals` or `\d customers` in the psql prompt to view the details of the table and find the foreign key column
- It's the `customer_id` column
- Enter `SELECT * FROM rentals INNER JOIN customers USING(customer_id);` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1620. psql Add conditions to the query

### 1620.1

Add three conditions to the previous query. Check the `phone`, `bike_id`, and `date_returned` columns to narrow the results to the first bike you rented with `Me`.

#### HINTS

- The previous query was `SELECT * FROM rentals INNER JOIN customers USING(customer_id);`
- You want to add a `WHERE <condition_1> AND <condition_2> AND <condition_3>` to the last query
- Use the `IS NULL` keyword to check the `date_returned` in one of the conditions
- The other two conditions should check the `phone` and `bike_id` of the first rental
- The three conditions are `WHERE phone = '555-5555' AND bike_id = 1 AND date_returned IS NULL`
- Enter `SELECT * FROM rentals INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND bike_id = 1 AND date_returned IS NULL;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1625. psql Only get columns needed

### 1625.1

You only need to know what bike is going to be returned. Narrow the columns from the last query to only get the one column you would need for returning a bike.

#### HINTS

- The previous query was `SELECT * FROM rentals INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND bike_id = 1 AND date_returned IS NULL;`
- Only column you need is the `rental_id` column
- Enter `SELECT rental_id FROM rentals INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND bike_id = 1 AND date_returned IS NULL;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1630. Add RENTAL_ID

### 1630.1

Back in the script, below the `check if input is rented` comment, create a `RENTAL_ID` variable that gets the rental ID of the bike that was input.

#### HINTS

- The input is the `BIKE_ID_TO_RETURN` variable
- Here's an example: `RENTAL_ID=$($PSQL "<query_here>")`
- You previously entered `SELECT rental_id FROM rentals INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND bike_id = 1 AND date_returned IS NULL;` in the psql prompt
- Be sure to use the same columns from the above query for the conditions with the `PHONE_NUMBER` and `BIKE_ID_TO_RETURN` variables
- Add `RENTAL_ID=$($PSQL "SELECT rental_id FROM rentals INNER JOIN customers USING(customer_id) WHERE phone = '$PHONE_NUMBER' AND bike_id = $BIKE_ID_TO_RETURN AND date_returned IS NULL")` below the `check if input is rented` comment

## 1640. Add if -z RENTAL_ID

### 1640.1

Below the `if input not rented` comment, add an `if` that checks if the `RENTAL_ID` variable is empty. Place the `send to main menu` comment in the `then` area.

#### HINTS

- Here's an example:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```

- The condition you want is `-z $RENTAL_ID`
- Place the `# send to main menu` comment in the `<STATEMENTS>` area
- The `if` condition should look like this:

```sh
if [[ -z $RENTAL_ID ]]
then
  # send to main menu

fi
```

## 1645. Add MAIN_MENU You do not have that bike rented

### 1645.1

If the input isn't rented by the given customer, send them to the main menu with `You do not have that bike rented.` as the message.

#### HINTS

- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "You do not have that bike rented."` below the `send to main menu` comment

## 1648. Add else echo Rental ID RENTAL_ID found

### 1648.1

Add an `else` to the `if` condition you just added. Use `echo` to print `Rental ID $RENTAL_ID found` in it so you can see if it's all working.

#### HINTS

- Here's an example:

```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
else
  <STATEMENTS>
fi
```

- Place `echo "Rental ID $RENTAL_ID found"` in the else area
- The `if` condition should look like this:

```sh
if [[ -z $RENTAL_ID ]]
then
  # send to main menu
  MAIN_MENU "You do not have that bike rented."
else
  echo "Rental ID $RENTAL_ID found"
fi
```

## 1650. Run the script

### 1650.1

Run the script and go to the return menu. Enter `555-5555` to see the rented bikes. Input a bike that isn't on the list, then go to the menu again and input a bike that is on the list.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1660. Delete echo Rental ID RENTAL_ID found

### 1660.1

Looks like it works. Delete the line where you print the rental ID.

#### HINTS

- Delete the `echo "Rental ID $RENTAL_ID found"` line

## 1680. Add else with comments

### 1680.1

Add three single line comments in the `else` area; `update date_returned`, `set bike availability to true`, and `send to main menu`.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The comments should be in the `else` area of the `if [[ -z $RENTAL_ID ]]` statement
- The `else` area should look like this:

```sh
else
  # update date_returned

  # set bike availability to true

  # send to main menu

fi
```

- The whole `if` should look like this:

```sh
if [[ -z $RENTAL_ID ]]
then
  # send to main menu
  MAIN_MENU "You do not have that bike rented."
else
  # update date_returned

  # set bike availability to true

  # send to main menu

fi
```

## 1690. Add RETURN_BIKE_RESULT

### 1690.1

After a person picks a bike to return and you know that it's a bike they have rented, you need to update all the info in the database to return it. Below the `update date_returned` comment, create a `RETURN_BIKE_RESULT` variable that sets the `date_returned` column to `NOW()` for the bike rented. Use the `RENTAL_ID` to figure out which row to update.

#### HINTS

- Here's an example: `RETURN_BIKE_RESULT=$($PSQL "<query_here>")`
- You want to use the `UPDATE`, `SET`, `NOW()`, and `WHERE` keywords in the query
- Here's an example of the query: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- The query you want is `UPDATE rentals SET date_returned = NOW() WHERE rental_id = $RENTAL_ID`
- Add `RETURN_BIKE_RESULT=$($PSQL "UPDATE rentals SET date_returned = NOW() WHERE rental_id = $RENTAL_ID")` below the `update date_returned` comment

## 1710. Add SET_TO_TRUE_RESULT

### 1710.1

That should update the rentals table. Lastly, you need to make the bike available again. Below the `set bike availability to true` comment, create a `SET_TO_TRUE_RESULT` variable that makes the bike available again.

#### HINTS

- Here's an example: `SET_TO_TRUE_RESULT=$($PSQL "<query_here>")`
- You want to use the `UPDATE`, `SET`, and `WHERE` keywords in the query
- You want to update the `available` column to `true` for the bike with `BIKE_ID_TO_RETURN`
- The query you want is `UPDATE bikes SET available = true WHERE bike_id = $BIKE_ID_TO_RETURN`
- Add `SET_TO_TRUE_RESULT=$($PSQL "UPDATE bikes SET available = true WHERE bike_id = $BIKE_ID_TO_RETURN")` below the `set bike availability to true` comment

## 1730. Add MAIN_MENU Thank you for returning your bike

### 1730.1

After all that is done, send them to the main menu with `Thank you for returning your bike.` as the message.

#### HINTS

- Add the code below the last `send to main menu` comment
- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "Thank you for returning your bike."` below the `send to main menu` comment

## 1740. ./bike-shop.sh

### 1740.1

Run the script and return one of the bikes that `Me` has rented out. When you are done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- The customer with phone number `555-5555` and name `Me` should have at least one rental with the `date_returned` column not null

## 1750. psql SELECT \* FROM rentals

### 1750.1

In the psql prompt, view all the data in the `rentals` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM rentals;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1760. psql SELECT \* FROM bikes ORDER BY bike_id

### 1760.1

Now the rental has been returned. View all the data in the bikes table in order by their `bike_id`.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM bikes ORDER BY bike_id;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1770. ./bike-shop.sh

### 1770.1

And the bike is available again. This is the last step. Run the script once more. Feel free to play around, rent and return some bikes. When you are ready to be done, return all the bikes you rented and exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- All rentals should have a `date_returned` value, and all bikes should have `available` set to `true`

# Learn Nano by Building a Castle

> Welcome to the Nano lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello nano` into the terminal and press enter.

#### HINTS

- Capitalization matters
- Make sure you are in the `project` folder when you enter the command
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. Touch `castle.sh`

### 20.1

Use `touch` to create a file named `castle.sh` in the `project` folder.

#### HINTS

- Use the touch command to create the file
- Make sure you are in the `project` folder when you enter the command
- Try entering `touch castle.sh` in the terminal
- Enter `cd ~/project` to get to the project folder if you aren't there

## 25. List contents

### 25.1

Use the list (`ls`) command to make sure your file is there.

#### HINTS

- Type `ls` into the terminal and press enter
- Make sure you are in the `project` folder when you enter the command
- Enter `cd ~/project` to get to the project folder if you aren't there

## 30. Nano `castle.sh`

### 30.1

There it is. Nano is a program for editing files that runs in the terminal. You can open a file with `nano filename`. Open the `castle.sh` file you created with Nano.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- You can exit nano by pressing `control + x` if you opened the wrong file

## 40. Write out `castle.sh`

### 40.1

The terminal is showing your file in Nano. At the bottom are the commands you can use. Your file is empty right now. Add `echo hello nano` at the top and press `control + o` to "write-out", or save, the file. You will be prompted at the bottom for a filename. Leave it as `castle.sh` and press enter to save the file.

#### HINTS

- Put `echo hello nano` at the top of the file, then press `control + o`, then `enter` to save the file
- Make sure the file was saved as `castle.sh`
- If you are trying to reset, exit nano first

## 50. Exit

### 50.1

Exit Nano by pressing `control + x`.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 60. Run `castle.sh`

### 60.1

This will be a small bash script. You can run it with `bash filename`. Run your `castle.sh` file in the terminal.

#### HINTS

- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 70. Nano `castle.sh`

### 70.1

You can see the command in your file ran and output text into the terminal. Open your file again with nano.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 80. Delete `echo hello nano`

### 80.1

You can "cut" text with `control + k`. Move the cursor to the line with your text and remove the whole line. When you are done, save the file with `control + o`. Note that you cannot use a mouse to move your cursor.

#### HINTS

- Remove the `echo hello nano` line of text and save the file
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first

## 90. Add `echo ""`

### 90.1

You are going to draw a castle that you can print to the terminal. Add `echo ""` to your file. Put an empty line in between the two quotes like this:

```
echo "

"
```

When you are done, save the file with `control + o`.

#### HINTS

- Your file should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first

## 100. Add the bottom row to castle

### 100.1

You will draw the castle between the quotes. Add ground level by putting 20 underscores (`_`) in the row between the quotes. It should look like this:

```
echo "
____________________
"
```

Save the file with `control + o` when you are done.

#### HINTS

- Your file should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first

## 110. Exit

### 110.1

The `^` in front of all the commands at the bottom means to press `control` and the letter to run the command. Exit Nano with the `Exit` command.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 120. Run `castle.sh`

### 120.1

Use the `bash` command to run your `castle.sh` file in the terminal again.

#### HINTS

- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 130. Nano `castle.sh`

### 130.1

Looks like it's working. Open your file with Nano.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 140. Add the bottom row sides

### 140.1

Add a vertical bar, or pipe (`|`), at each end of your ground level. It should look like this:

```
|____________________|
```

Save the file when you are done.

#### HINTS

- Don't change the other rows
- Your castle should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole file should look like this:

```sh
echo "
|____________________|
"
```

## 150. Add second row

### 150.1

Add another story to your castle above the ground level that has two more vertical bars. Each bar should be above your existing bars so you need spaces in between them. It should look like this:

```
|                    |
|____________________|
```

When you are done, save the file.

#### HINTS

- Don't change the other rows
- Your castle should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole file should look like this:

```sh
echo "
|                    |
|____________________|
"
```

## 160. Exit

### 160.1

Exit Nano so you can run the script again.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 170. Run `castle.sh`

### 170.1

Run your file again to see the progress.

#### HINTS

- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 180. Nano `castle.sh`

### 180.1

Open your file again so you can add some more.

#### HINTS

- Use Nano to open the file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 190. Add the sides of the castle

### 190.1

You can use `control + k` to "cut" and `control + u` to "uncut", or paste, a line. Add five more rows like the one you just added to make your castle six stories high. Try to use the cut and paste method. It should look like this:

```
|                    |
|                    |
|                    |
|                    |
|                    |
|____________________|
```

When you are done, save the file.

#### HINTS

- Your castle should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole file should look like this:

```sh
echo "
|                    |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 200. Add a roof to the castle

### 200.1

The existing top row is going to be the roof of the castle. Make it look like this:

```
|  |______________|  |
```

There's two spaces between the first and second bars, followed by 14 underscores (`_`), then a repeat of the bars and spaces. When you are done, save the file.

#### HINTS

- Make sure your castle is still six stories high
- Your top row should match the example
- You should not change any other rows
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this:

```sh
echo "
|  |______________|  |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 210. Exit

### 210.1

The `M` at the beginning of the other commands at the bottom stands for "meta". It's a key that doesn't exist on most keyboards. If you're on OSX it means press `escape` then the letter. If you are on another system, press `ALT` then the letter. Use the exit command to get back to the terminal.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 220. Run `castle.sh`

### 220.1

Run the script to make sure things are coming along as expected.

#### HINTS

- Use the `bash` command to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 230. Nano `castle.sh`

### 230.1

That construction team must be working hard :smile: . Open the file again to continue building.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 240. Add the second from top row

### 240.1

The top of the castle has a lookout tower on each end. Add a single row at the top of your castle to make the top look like this:

```
/  \              /  \
|  |______________|  |
```

The slashes are directly above the vertical bars. When you are done, save the file.

#### HINTS

- The top of the castle should match the top row of the example
- The castle should now be seven stories high
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this:

```sh
echo "
/  \              /  \
|  |______________|  |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 250. Add the peaks

### 250.1

Add the peaks of your lookout towers. Put another row at the top with `/\` above each lookout. It should look like this:

```
 /\                /\
/  \              /  \
```

When you are done, save the file.

#### HINTS

- Your top row should match the top row of the example
- The castle should now be nine stories high
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this:

```sh
echo "
 /\                /\
/  \              /  \
|  |______________|  |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 260. Exit

### 260.1

Go back to the terminal with the exit command.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 270. Run `castle.sh`

### 270.1

Run your script to bask in the glory of your work.

#### HINTS

- Use `bash` to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 280. Nano `castle.sh`

### 280.1

Oh no!! :open_mouth: Looks like a storm came through and blew the roof off! I think we can fix it. Open up the file.

#### HINTS

- Use the `nano` command to open your file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 290. Fix the roof

### 290.1

I'm not quite sure what happened here... Some of the `\` don't seem to be working. Try adding a space after the two `\` on the top right lookout tower. Put them where these `x`'s are:

```
 /\                /\x
/  \              /  \x
```

Maybe that will patch the roof. When you are done, save the file.

#### HINTS

- Put a space in place each `x` in the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this, but with spaces instead of `x`'s:

```sh
echo "
 /\                /\x
/  \              /  \x
|  |______________|  |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 300. Exit

### 300.1

Go back to the terminal so you can run the script again.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 310. Run `castle.sh`

### 310.1

Run the script to see if the roof is fixed.

#### HINTS

- Use `bash` to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 320. Nano `castle.sh`

### 320.1

Okay, it's all patched up. Open the file again.

#### HINTS

- Use the `nano` command to open your file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 330. Add windows

### 330.1

Add some windows to your castle. Use a left and right brackets for them (`[]`). Put three pairs on the fourth story, like this:

```
|   []    []    []   |
```

There's four spaces between each window and three between the window and the sides. Save the file when you are done.

#### HINTS

- Add three windows to the fourth row from the bottom exactly like the example
- There's three spaces between a `|` and window
- There's four spaces between a window and another window
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this, but with spaces instead of `x`:

```sh
echo "
 /\                /\x
/  \              /  \x
|  |______________|  |
|                    |
|   []    []    []   |
|                    |
|                    |
|____________________|
"
```

## 340. Add the door

### 340.1

Last is the door. Change the bottom two rows so there's a door right in the middle that looks like this:

```
|         __         |
|________|  |________|
```

The bottom row has two vertical bars with two spaces between them and the second story has two underscores to make the top of the door. When you are done, save the file.

#### HINTS

- Make sure your bottom two rows look like the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this, but with spaces instead of `x`:

```sh
echo "
 /\                /\x
/  \              /  \x
|  |______________|  |
|                    |
|   []    []    []   |
|                    |
|         __         |
|________|  |________|
"
```

## 350. Exit

### 350.1

Nano has a lot more features, but the basics will get you through most scenarios. Go back to the terminal with the command to exit nano.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 360. Run `castle.sh`

### 360.1

Run your script again. Hopefully the weather has been good.

#### HINTS

- Use `bash` to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 370. Nano `castle.sh`

### 370.1

Excellent. Open the file, I think there's one more thing you can add.

#### HINTS

- Use the `nano` command to open your file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 380. Add a welcome

### 380.1

At the very top of the file, add another `echo` command with two quotes and an empty line between the quotes. In the empty line put the message, "Welcome to my castle". Here's an example:

```
echo "
message here
"
```

When you are done, save the file.

#### HINTS

- Add the code above but replace `message here` with the correct message
- The correct message is `Welcome to my castle`
- Put all this at the very top of the file
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this, but with spaces instead of `x`:

```sh
echo "
Welcome to my castle
"

echo "
 /\                /\x
/  \              /  \x
|  |______________|  |
|                    |
|   []    []    []   |
|                    |
|         __         |
|________|  |________|
"
```

## 390. Exit

### 390.1

Go back to the terminal with the exit command so you can see if it's all done.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 400. Run `castle.sh`

### 400.1

This is the last step. Run the script to see your final product :smile:

#### HINTS

- Use `bash` to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

# Learn Git by Building an SQL Reference Object

> Welcome to the git lessons!

## 10. Start Terminal

### 10.1

The first thing you need to do is start the terminal. Open a new one by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello git` into the terminal and press enter.

#### HINTS

- Follow the directions closely
- If the tests don't pass, trash all the terminals with the trash can icon at the top right of the terminal. Then, redo those instructions

## 20. Make Directory

### 20.1

You should be in the `project` folder in the terminal you opened. Use the terminal to make a new directory named `sql_reference` in the `project` folder. As a reminder, you can use the `mkdir` command to make a new folder.

#### HINTS

- Enter `mkdir sql_reference` in the terminal from the `project` folder
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- Don't try to create the folder with another method

## 30. Change Directory

### 30.1

Use the "change directory" command in the terminal to change to your new folder.

#### HINTS

- Enter `cd sql_reference` into the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there

## 40. Initialize a git Repository

### 40.1

Git is a version control system to keep track of your code. This folder will be your git repository. Turn it into one by typing `git init` in the terminal from this folder.

#### HINTS

- Enter `git init` into the terminal while in the `sql_reference` folder
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to get to the folder if you aren't there

## 50. View .git Folder

### 50.1

Use the list command with the `-a` flag to list the hidden folders and files.

#### HINTS

- The list command is `ls`
- Type `ls -a` into the terminal and press enter
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 60. git status

### 60.1

The `git init` command created that `.git` folder for you. It's what keeps track of all the things in your repository. Use `git status` to see the status of where you are. This command will be your best friend.

#### HINTS

- Type `git status` into the terminal and press enter
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 70. Checkout main Branch

### 70.1

A git repository has branches to help keep track of things you are doing with your code. It's common to have a `main` branch which might be for your production code, and other branches for adding new features or fixing bugs. You can create and go to a new branch with `git checkout -b new_branch`. The `-b` stands for "branch". Use that command to switch to a new branch named `main`.

#### HINTS

- Capitalization matters
- Type `git checkout -b main` into the terminal
- Make sure you are in your `sql-reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 80. git status

### 80.1

Check your status again with `git status`.

#### HINTS

- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 90. touch README.md

### 90.1

Now you are on the `main` branch. Use the `touch` command to create `README.md` inside your repository. This is a file you will see in many repos to describe what the repo is for.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch README.md` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 100. Add Readme Text

### 100.1

Add the text `SQL Reference` at the top of your new file to let people know what your repo is for.

#### HINTS

- Add the suggested text in your `README.md` file

## 110. git status

### 110.1

Check the status of your repo again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 120. git add README.md

### 120.1

The file you created has not been added to git yet so it is showing that it is untracked. There's two steps to make git keep track of it for you. First you need to add it to the staging area like this: `git add file_name`. Add your `README.md` file to the staging area.

#### HINTS

- Replace `file_name` in the example with your `README.md` file
- Type `git add README.md` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 130. git status

### 130.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 140. touch sql_reference.json

### 140.1

Now your file is in staging and will be added with the next commit. You aren't quite ready to commit this yet though. Use `touch` again to create `sql_reference.json` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch sql_reference.json` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 150. git status

### 150.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 160. git add Initial commit

### 160.1

You now have one file in staging and one that is untracked. Add the new file you created to the staging area.

#### HINTS

- Here's the example again: `git add file_name`
- You added the last one with `git add README.md`
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 170. git status

### 170.1

Check your status one more time please :grin:

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 180. git commit Initial commit

### 180.1

Now you have two files in staging. To commit them, you can use `git commit -m "Initial commit"`. The `-m` stands for "message". Often times, the first commit of a repo will have the message "Initial commit". Commit your two files with the message `Initial commit`.

#### HINTS

- Type `git commit -m "Initial commit"` in the terminal and press enter
- Enter `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 190. git status

### 190.1

When you make a commit, whatever is in the staging area will be added to your git history. You can see some info in the terminal output about the commit. Check your status again to see what's there.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 200. git log

### 200.1

Your "working tree" is clean, the files were committed and there's no other new changes that git recognizes. You can see your commit history with `git log`. Check your commit history.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 210. Add CREATE DATABASE Command

### 210.1

You can see the commit you made. It shows the message you gave with the commit, along with your username, email, the date, and a commit hash. The hash is that long string of characters. Open up your `.json` file and create an object with a reference for how to create a database that looks like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;"
  }
}
```

Make sure there's one empty line at the bottom of the file and no extra spaces after the value or any of the curly brackets.

#### HINTS

- Add the suggested object to your `sql_reference.json` file
- Double check for those extra spaces and the empty line

## 220. git status

### 220.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 230. git diff

### 230.1

Git recognizes new unstaged changes to your file. Notice that it says that file is modified instead of untracked because the file has been previously committed. You can see the changes you made with `git diff`. Take a look at the new changes.

#### HINTS

- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 240. git add sql_reference.json

### 240.1

The lines with `+` in front means that those lines were added. Add your new changes to staging with the `git add` command again. Make sure to put the filename you want to add at the end of the command.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 250. git status

### 250.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 260. git commit feat: add create database reference

### 260.1

Your new changes are staged and ready to be committed. Commit them with the message `feat: add create database reference`. As a reminder, here what the command to commit looks like: `git commit -m "message"`.

#### HINTS

- Type `git commit -m "feat: add create database reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 270. git log

### 270.1

Commit messages often start with `fix:` or `feat:`, among others, to help people understand what your commit was for. Check your `git log` again to see the new commit added.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 280. Add DROP DATABASE command

### 280.1

Now there's two commits in your history, the newest one is at the top :smile: In your JSON file, add a `drop` key to your `database` object. Give it a value for how to drop a database similar to the `create` value. The syntax is in the hints. Again, make sure there's an empty line at the bottom of the file and no extra spaces after any values or curly brackets.

#### HINTS

- The value should be `"DROP DATABASE database_name;"`
- Don't forget the comma at the end of the previous line to make it a valid json object.
- Your database object should have these values:

```json
{
  "create": "CREATE DATABASE database_name;",
  "drop": "DROP DATABASE database_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 290. git status

### 290.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 300. git diff

### 300.1

Changes not staged. Check the `diff` quick.

#### HINTS

- Use the "git diff" command in your repo
- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 310. git add DROP DATABASE command

### 310.1

It should show one line removed and two lines added. Add your changes to the staging area.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 320. git commit feat: add drop database reference

### 320.1

Commit your staged changes with the message, `feat: add drop database reference`

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add drop database reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 330. git log

### 330.1

I think you're catching on :smile: Check the `log` again.

#### HINTS

- Type `git log` into the terminal and press enter
- Press `enter` in the terminal to go through the whole log
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 340. git branch

### 340.1

Now there's three commits :smile: You have been making changes to your `main` branch. You actually want to try and avoid that. Type `git branch` to see the current branches in your repo.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 350. git branch feat/add-create-table-reference

### 350.1

You only have the `main` branch still. You can create a branch with `git branch branch_name`. Branches often start with `fix/` or `feat/`, among others, like commit messages, but they use a forward slash and can't contain spaces. Create a new branch named `feat/add-create-table-reference`.

#### HINTS

- Type `git branch feat/add-create-table-reference` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 360. git branch

### 360.1

Your new branch is a clone of the `main` branch since that's the branch you were on when you created it. It will have the same code and commit history as `main` did at the time of the branch creation. View your branches again with `git branch`.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 370. git checkout feat/add-create-table-reference

### 370.1

You can see your new branch, but you are still on the `main` branch, as denoted with the `*`. To switch to a branch use: `git checkout branch_name`. Switch to your new branch.

#### HINTS

- Type `git checkout feat/add-create-table-reference` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 380. git branch

### 380.1

It says you switched to your new branch. Type `git branch` so I can make sure the `*` switched.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 390. Add CREATE TABLE Command

### 390.1

Like I said, you often don't want to make commits directly to the main branch of a repo. This branch will be for some new changes. What you will do is make the changes and commits here, then merge them into the `main` branch when they are ready. Add a reference for creating an SQL table to your json file along side your `database` property. Make it look like this:

```json
"table": {
  "create": "CREATE TABLE table_name;"
}
```

#### HINTS

- Make sure to add commas to keep it a valid json object
- The `table` key should be on the same level as the `database` key
- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 400. git status

### 400.1

Show me the status again. You might as well get used to it :smiley_cat:

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 405. git diff

### 405.1

Changes not staged. Check the `diff` quick so you can make sure your changes look good.

#### HINTS

- Use the "git diff" command in your repo
- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 410. git add CREATE TABLE reference

### 410.1

You made new changes so the file shows up as not staged. Add the file to staging so you can commit the changes.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 420. git commit feat: add create table reference

### 420.1

The changes are now in staging. Commit your staged changes with the message `feat: add create table reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add create table reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 430. git log

### 430.1

Check your `git log` again.

#### HINTS

- Type `git log` into the terminal and press enter
- Press `enter` in the terminal to go through the whole log
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 435. git log oneline

### 435.1

Now you have four commits, they are getting a little hard to see. Check the log again, but this time use the `--oneline` flag to condense the output so it's more readable.

#### HINTS

- Type `git log --oneline` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 440. git checkout main

### 440.1

That's better. Use `git checkout` to switch back to the `main` branch.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 450. git log

### 450.1

You may have noticed that the code you added disappeared from the JSON file. Your changes were added on the `feat/add-create-table-reference` branch so they don't exist on this branch. Check the log of the main branch, use the `--oneline` flag again.

#### HINTS

- Type `git log --oneline` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 460. git branch

### 460.1

You can see three commits on this branch and four on the feature branch you were just on. The commit and code you added on the feature branch only exist over there for now. View the branches you have to remind me the name of your other branch.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 470. git merge feat/add-create-table-reference

### 470.1

You created the `feat/add-create-table-reference` branch, made a commit, and now it's ready to be added to the `main` branch. You can use `git merge branch_name` to bring changes from a branch into the branch you are currently on. Merge the changes from your feature branch into the `main` branch.

#### HINTS

- Type `git merge feat/add-create-table-reference` into the terminal and press enter
- Make sure you enter the command while on the `main` branch

## 480. git log oneline

### 480.1

The commits and code from your feature branch were added to this branch. There's a message with some info about the merge. Check the log with the `--oneline` flag again.

#### HINTS

- Use the `git log` command with the correct flag
- Type `git log --oneline` into the terminal and press enter

## 490. git branch -d feat/add-create-table-reference

### 490.1

The `feat: add create table reference` commit you made on your feature branch was added to this branch with the merge. You can delete a branch with `git branch -d branch_name`. `-d` stands for "delete". Since your changes were added, you can safely delete your feature branch. Do that now.

#### HINTS

- The branch name is `feat/add-create-table-reference`
- Type `git branch -d feat/add-create-table-reference` into the terminal and press enter

## 500. git branch

### 500.1

It said it was deleted, but view your branches again for me to verify that it's gone.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 510. git checkout -b feat/add-drop-table-reference

### 510.1

You're just left with the `main` branch... Want to try it again? Last time you created a branch and then switched to it. You can do both at the same time with `git checkout -b branch_name`. Create and switch to a new branch named `feat/add-drop-table-reference`.

#### HINTS

- Type `git checkout -b feat/add-drop-table-reference` into the terminal and press enter

## 520. Add DROP TABLE Command

### 520.1

Add a `drop` key to the `table` object of your JSON file. Give it a value for how to drop a table. The syntax is in the hints.

#### HINTS

- The value should be `"DROP TABLE table_name;"`
- Don't forget the commas to make it a valid json object
- The key looks like this: `"drop": "DROP TABLE table_name;"`
- The `table` object should look like this:

```json
"table": {
  "create": "CREATE TABLE table_name;",
  "drop": "DROP TABLE table_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name;",
    "drop": "DROP TABLE table_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 530. git status

### 530.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 535. git diff

### 535.1

Check the `diff` so you can confirm you like your changes.

#### HINTS

- Use the "git diff" command in your repo
- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 540. git add DROP TABLE command

### 540.1

Add your changes to staging.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 550. git commit feat: add drop table reference

### 550.1

Commit your staged changes with the message `feat: add drop table reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add drop table reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again
- Make sure you are in your `sql_reference` repo folder

## 560. git checkout main

### 560.1

Switch back your `main` branch so you can merge in these changes.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 570. git branch

### 570.1

Remember that the code and commit you added aren't on this branch, so they disappeared again. View the branches on your repo so you can get the name of it to merge your feature into the main branch.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 580. git merge feat/add-drop-table-reference

### 580.1

Merge your feature branch into the `main` branch.

#### HINTS

- Here's an example: `git merge branch_name`
- The command will merge `branch_name` into whatever branch you are on
- Type `git merge feat/add-drop-table-reference` into the terminal and press enter
- Make sure you enter the command while on the `main` branch

## 590. git branch -d feat/add-drop-table-reference

### 590.1

The commit from your feature branch was added to the `main` branch so you can safely delete the feature branch. Delete your feature branch.

#### HINTS

- Use the `git branch` command with the `-d` flag to delete a branch
- Use the "git branch" command to find the branch name
- The branch name is `feat/add-drop-table-reference`
- Here's an example: `git branch -d branch_name`
- Type `git branch -d feat/add-drop-table-reference` into the terminal and press enter

## 600. git checkout -b feat/add-column-references

### 600.1

You're getting the hang of it :smile: The process is to create a branch, make the changes you want, commit them, and then merge the changes into branch you started on. Pretty simple, lets keep going. Create and checkout a new branch named `feat/add-column-references`

#### HINTS

- You can create and checkout a branch with `git checkout -b branch_name`
- Type `git checkout -b feat/add-column-references` into the terminal and press enter

## 610. Add ADD COLUMN command

### 610.1

This branch will be a work in progress. Add a `column` key to your JSON object. Make it an object like the other two. Give it a single property, `add`, that has the value `"ALTER TABLE table_name ADD COLUMN column_name;"`.

#### HINTS

- The `column` key should be on the same level as the `table` key
- The `column` object should look like this:

```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name;",
    "drop": "DROP TABLE table_name;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 620. git diff

### 620.1

View the `diff` to make sure your new changes are what you expect.

#### HINTS

- Use the "git diff" command
- Type `git diff` into the terminal and press enter
- Make sure you are in your repo folder first

## 630. git add ADD COLUMN command

### 630.1

Add your changes to staging. Here's a tip: you can use `git add .` to add all files to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 640. git commit feat: add column reference

### 640.1

Commit your staged changes with the message `feat: add column reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add column reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 650. git log oneline

### 650.1

View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 670. git checkout main

### 670.1

The commit was added. I see an error in the syntax of one of the commands. You want to fix it, but this branch is not for fixing it. Switch back to your `main` branch so you can create a new branch to fix it.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 680. git checkout -b fix/create-table-syntax

### 680.1

Remember that, when you create a branch, it will be a clone of whatever branch you are on when you create it. That's why you switched to `main` first. Create and switch to a branch named `fix/create-table-syntax`.

#### HINTS

- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b fix/create-table-syntax` into the terminal and press enter

## 690. Fix CREATE TABLE syntax

### 690.1

The create table command is a function, so it needs parenthesis `()` at the end. Add those to the end of the command.

#### HINTS

- It's the `table.create` key that you need to change
- The value should look like this: `CREATE TABLE table_name();`
- The `table` object should look like this:

```json
"table": {
  "create": "CREATE TABLE table_name();",
  "drop": "DROP TABLE table_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 700. git add FIX CREATE TABLE command

### 700.1

Check your status and diff to see your new changes. Then, add your files to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 710. git commit fix: create table syntax

### 710.1

Commit your changes with the message `fix: create table syntax`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "fix: create table syntax"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 720. git checkout main

### 720.1

Switch back to your `main` so you can merge this important bug fix.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 730. git branch

### 730.1

View your branches to remind me of the branch name.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 740. git merge fix/create-table-syntax

### 740.1

Merge your bug fix branch into this branch.

#### HINTS

- It's the `fix/create-table-syntax` branch
- Here's an example: `git merge branch_name`
- Type `git merge fix/create-table-syntax` into the terminal and press enter

## 750. git log oneline

### 750.1

View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 755. git branch -d fix/create-table-syntax

### 755.1

The bug fix is in and you can safely delete the branch. Go ahead and delete the branch that was for that fix. View your branches if you need to find the name.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- The branch name is `fix/create-table-syntax`
- Type `git branch -d fix/create-table-syntax` into the terminal and press enter

## 760. git checkout feat/add-column-references

### 760.1

Your bug fix is merged into the `main` branch. Switch back to your feature branch so you can continue adding column references.

#### HINTS

- Check your branches if you need to get the name of the branch
- You can view your branches with `git branch`
- Use `git checkout branch_name` to switch to a branch
- It's the `feat/add-column-references` branch
- Enter `git checkout feat/add-column-references` into the terminal and press enter

## 770. git log oneline

### 770.1

View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 780. git rebase main

### 780.1

You created this branch and made a commit. Since then, a commit for a bug fix was added to `main`. This is common with many people working on a codebase simultaneously. You need to update this branch so it has the same commits from `main`, but you can't just merge that branch into this one. You need that bug fix commit to be in the same order here as it is on `main`, right after the "drop table" commit. You need to `rebase` this branch against `main` to do that. Enter `git rebase main` to rebase this branch.

#### HINTS

- Type `git rebase main` into the terminal and press enter

## 790. git log oneline

### 790.1

There was some fancy output there, but you can see the parenthesis from the bug fix commit were added to the `table.create` value. Show me the log again with the same flag you have been using so you can see what happened.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 800. Add DROP COLUMN command

### 800.1

The logs show that the bug fix commit from `main` was added, and then the commit from this branch was added on top of it. Now, when this branch is ready to be merged into `main`, it will have the same commit history. You should try to keep your branches up to date like this by rebasing them often. In your JSON file, add a `drop` key to the `column` object with a reference for dropping a column. The syntax is in the hints, give it a try first.

#### HINTS

- It follows a similar syntax as adding a column
- Don't forget the semi-colon at the end
- Here's the syntax: `ALTER TABLE table_name DROP COLUMN column_name;`
- Make sure the above value is in the `column.drop` key
- Here's what the `column` object should look like:

```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 810. git add DROP COLUMN command

### 810.1

Check your status and diff to see your new changes. Then, add your changes to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 820. git commit feat: drop column reference

### 820.1

Commit your changes with the message: `feat: add drop column reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add drop column reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 830. git log oneline

### 830.1

View your log again. Make sure you use my favorite flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 840. git checkout main

### 840.1

Switch to your `main` branch, there's another feature that needs to be worked on.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 850. git checkout -b feat/add-insert-row-reference

### 850.1

Create and switch to a new branch named `feat/add-insert-row-reference`.

#### HINTS

- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b feat/add-insert-row-reference` into the terminal and press enter

## 860. Add INSERT ROW command

### 860.1

Pretend that this branch is for someone else working on a new feature at the same time you are working on the column commands. Add a `row` key to your JSON object. Make it an object with an `insert` key whose value is `"INSERT INTO table_name(columns) VALUES(values);"`

#### HINTS

- Your JSON object should have this:

```json
"row": {
  "insert": "INSERT INTO table_name(columns) VALUES(values);"
}
```

- The `row` key should be on the same level as the `table` key
- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 870. git add INSERT ROW command

### 870.1

Check your status and diff so you can see your new changes. Then, add your changes to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 880. git commit feat: add insert row reference

### 880.1

Commit your changes with the message: `feat: add insert row reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add insert row reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 890. git checkout main

### 890.1

This branch is finished. Switch to your `main` branch so you can merge this commit in.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 900. git branch

### 900.1

View your branches to find the name of the branch you want to merge.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 910. git merge feat/add-insert-row-reference

### 910.1

Merge your branch with the `insert row` reference you were just working on into the `main` branch.

#### HINTS

- Use the `git merge` command
- Here's an example: `git merge branch_name`
- You want to merge the `feat/add-insert-row-reference` branch
- Type `git merge feat/add-insert-row-reference` into the terminal and press enter

## 930. git checkout feat/add-column-references

### 930.1

Check your logs to make sure the commit was added. Then, switch to your branch for adding column references.

#### HINTS

- Use the "git branch" command to find the name of the branch
- Use the `git checkout` command
- The branch you want to switch to is `feat/add-column-references`
- Here's an example: `git checkout branch_name`
- Enter `git checkout feat/add-column-references` into the terminal and press enter

## 940. git rebase main

### 940.1

Another commit was added to `main`, you should update this branch again. To be more specific, a rebase will "rewind" this branch to where it last matched `main`, then, add the commits from `main` that aren't here. After that, it adds the commits you made to this branch on top. `rebase` this branch against `main` so it's up to date. You should see a conflict...

#### HINTS

- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 950. fix conflicts

### 950.1

The conflict arose because the first commit you added to this branch changed the same lines as the commit from `main`. So it tried to add the commit, but couldn't because something was already there. There are sections, separated by characters (`<`, `>`, and `=`), that represent the commit you are on (`HEAD`) and the commit that is trying to be added (`feat: add column reference`). Fix the conflict by removing those `<`, `>`, and `=` characters. Then making the JSON object valid again.

#### HINTS

- Be sure to remove all those special characters
- The part of the JSON object with conflicts should look like this:

```json
"row": {
  "insert": "INSERT INTO table_name(columns) VALUES(values);"
},
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 953. git status

### 953.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 956. git add fixed conflicts

### 956.1

It says that you are still in the middle of rebasing and there's one file that needs to be merged yet. Add the file to staging like you would any other commit.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 958. git status

### 958.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 960. git rebase continue

### 960.1

You fixed the conflicts that arose from trying to add this commit and added them to staging. It says `all conflicts fixed: run "git rebase --continue"`. Run the suggested command to continue the rebase.

#### HINTS

- Enter `git rebase --continue` in the terminal and press enter

## 970. git log oneline

### 970.1

The last commit was added after you continued the rebase without conflict. The rebase is now finished. View your log with the `oneline` flag.

#### HINTS

- Use the `git log` command
- Type `git log --oneline` into the terminal and press enter

## 980. Add RENAME COLUMN command

### 980.1

You can see the "insert row" commit from `main` was added to this branch before the two commits you made here. Now this branch is up to date and you can continue working on it. Add a `rename` key to the `column` object. The value should look like this: `"ALTER TABLE table_name RENAME COLUMN column_name TO new_name;"`

#### HINTS

- The `column` key should look like this:

```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
  "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 990. git add RENAME COLUMN command

### 990.1

Check your status and diff to see your new changes. Then, add the file to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1000. git commit feat: add rename column reference

### 1000.1

Commit your changes with the message `feat: add rename column reference`

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add rename column reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1010. git checkout feat/add-insert-row-reference

### 1010.1

There's now three commits that are unique to this branch, you will come back to it later. Switch to the branch for adding row references.

#### HINTS

- View your branches with `git branch` if you need to find the name
- Use the `git checkout` command to switch branches
- Here's an example: `git checkout branch_name`
- The branch you want is `feat/add-insert-row-reference`
- Enter `git checkout feat/add-insert-row-reference` into the terminal and press enter

## 1015. Add UPDATE ROW command

### 1015.1

This branch is still up to date since no commits have been added to `main` since this branch was created. Add an `update` key to the `row` object with `"UPDATE table_name SET column_name = new_value WHERE condition;"` as it's value.

#### HINTS

- The `row` key should look like this:

```json
"row": {
  "insert": "INSERT INTO table_name(columns) VALUES(values);",
  "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1017. git status

### 1017.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1020. git stash

### 1020.1

There's been a mistake. This branch was for the `insert` command, not the `update` command. You can put your changes aside with `git stash`. Stash your changes so you can add them to a different branch.

#### HINTS

- Type `git stash` in the terminal and press enter

## 1025. git status

### 1025.1

You might have noticed your uncommitted changes disappeared from the file. Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1030. git stash list

### 1030.1

Your working tree is clean and there's no changes git recognizes. The changes you made are stashed. View the things you have stashed with `git stash list`.

#### HINTS

- View your stash list with the suggested command
- Type `git stash list` in the terminal and press enter

## 1040. git stash pop

### 1040.1

You can see one item there. Bring the changes back with `git stash pop`.

#### HINTS

- Bring your stash back with the suggested command
- Type `git stash pop` in the terminal and press enter

## 1050. git stash list

### 1050.1

The changes from the stash reappeared in the file and git showed the status for you. You are right where you left of before stashing the changes. Popping a stash like that will remove the most recent stash and apply it to your working tree. View the list of your stashes again.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1055. git stash

### 1055.1

The list is empty again. Put the changes back in the stash.

#### HINTS

- Use the "git stash" command
- Type `git stash` in the terminal and press enter

## 1070. git stash list

### 1070.1

View the list of your stashed changes.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1073. git stash show

### 1073.1

The changes are stashed again. View a condensed version of the changes in the **latest** stash with `git stash show`.

#### HINTS

- Type `git stash show` in the terminal and press enter

## 1076. git stash show -p

### 1076.1

You can see what file was changed and how many lines were added and removed from the file. View the full changes of the latest stash with `git stash show -p`. `-p` stands for "patch".

#### HINTS

- Type `git stash show -p` in the terminal and press enter

## 1080. git stash apply

### 1080.1

Now you can see the actual changes that are stored in the stash. Before, you used the pop command to removed the latest stash and add it to your working tree. You can add the latest stash while keeping it in the list with `git stash apply`. Apply your stash with this method.

#### HINTS

- Type `git stash apply` in the terminal and press enter

## 1090. git stash list

### 1090.1

Git showed you your status after applying the stash. The one file is unstaged again. View your stash list.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1100. git stash

### 1100.1

The code from the stash was added to your working tree, and the stash is still there in case you want to add it somewhere else. Stash the changes again.

#### HINTS

- Use the "git stash" command
- Type `git stash` in the terminal and press enter

## 1110. git stash list

### 1110.1

View the list of your stashed changes again.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1113. git stash show stash@{1}

### 1113.1

Now there's two things stashed. You can use the name at the front of each stash (`stash@{#}`) with many of the stash commands to select one other than the latest one. The most recent stash is the one at the top, `stash@{0}`. View the condensed changes of the **oldest** stash with the `git stash show` command by putting the name of the stash after it.

#### HINTS

- Add the stash name at the end of the `git stash show` command
- The stash name is `stash@{1}`
- Type `git stash show stash@{1}` in the terminal and press enter

## 1116. git stash show -p stash@{1}

### 1116.1

Next, using a similar method, **show** the full changes of the **oldest** stash with the "patch" flag you used earlier.

#### HINTS

- The patch flag is `-p`
- Use the `git stash show` command with the patch flag
- Include the stash you want to view at the end of the command
- The stash you want to view is `stash@{1}`
- Type `git stash show -p stash@{1}` in the terminal and press enter

## 1120. git stash drop

### 1120.1

There's two identical items in your stash. Drop one of them with `git stash drop` or `git stash drop <stash_name>`.

#### HINTS

- Drop one of the stashed changes with the suggested command
- Type `git stash drop` in the terminal and press enter

## 1130. git stash list

### 1130.1

View the list of stashed changes again to verify the one got deleted.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1140. git checkout main

### 1140.1

You should just have the one stash left. Switch to your `main` branch so you can create a new branch from that and add these changes to it.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1150. git branch -d feat/add-insert-row-reference

### 1150.1

Before I make you work on the wrong branch again. Delete the branch for inserting a row.

#### HINTS

- View your branches if you need to find the name
- Use the `git branch` command with the `-d` flag
- The branch name is `feat/add-insert-row-reference`
- Here's an example: `git branch -d branch_name`
- Type `git branch -d feat/add-insert-row-reference` into the terminal and press enter

## 1160. git checkout feat/add-more-row-references

### 1160.1

Create and checkout a new branch named `feat/add-more-row-references` for adding some more row related commands.

#### HINTS

- Use the "git checkout" command with the `-b` flag
- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b feat/add-more-row-references` into the terminal and press enter

## 1170. git stash list

### 1170.1

Show me your stash list again to make sure your changes from the other branch are still stashed.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1180. git stash pop

### 1180.1

It's still there. Pop the stash so the code gets added to this new branch.

#### HINTS

- Use the "git stash pop" command in your repo
- Type `git stash pop` in the terminal and press enter

## 1190. git stash list

### 1190.1

Git showed you your status again, and it looks like it recognizes that the file has new changes after adding the stash. View the stash list to verify that it's empty.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1210. git diff

### 1210.1

The list is empty. View the diff of your changes so you can make sure they are what you expect.

#### HINTS

- Use the "git diff" command
- Type `git diff` into the terminal and press enter
- Make sure you are in your repo folder first

## 1220. git add UPDATE ROW command

### 1220.1

It looks good. Add the changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1230. git commit feat: add update row reference

### 1230.1

View your status, then commit the staged changes with the message `feat: add update row reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add update row reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1240. git checkout main

### 1240.1

Your work on this branch is done for now. Switch to your `main` branch so you can merge the commit you just made.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1250. git merge feat/add-more-row-references

### 1250.1

Merge your branch for adding row references that you just added a commit to.

#### HINTS

- Use the "git merge" command
- View your branches if you need to find the name
- It's the `feat/add-more-row-references` branch
- Here's an example: `git merge branch_name`
- Type `git merge feat/add-more-row-references` into the terminal and press enter

## 1260. git checkout feat/add-column-references

### 1260.1

Switch to your branch for the column references so you can continue working on that.

#### HINTS

- Use the `git checkout` command
- View your branches if you need to find the name
- Here's an example: `git checkout branch_name`
- Enter `git checkout feat/add-column-references` into the terminal and press enter

## 1270. git rebase main

### 1270.1

Once again, commits have been added to `main` so you should update this branch. Rebase this branch against `main` to bring in the new commits. You should get a conflict.

#### HINTS

- Use the "git rebase" command
- Add the branch after the command that you want to rebase against
- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 1280. Fix Conflicts

### 1280.1

This conflict is a little trickier. Make the JSON object whole again so you can add the changes and finish rebasing. Make sure you put all the references in their correct objects, and in the same order they were originally in. There may be a duplicate line you need to delete.

#### HINTS

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1290. git status

### 1290.1

View the status of your repo.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1300. git add fixed conflicts

### 1300.1

You are still rebasing. You fixed the conflicts for the commit trying to be added. It looks like it was the "add column" commit that had the conflict. Add your changes to staging.

#### HINTS

- Use the "git add" command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1305. git status

### 1305.1

View the status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1310. git rebase continue

### 1310.1

Continue your rebase with the suggested command.

#### HINTS

- View the output in the terminal to find the command
- It's the "git rebase continue" command
- Enter `git rebase --continue` in the terminal and press enter

## 1320. git log oneline

### 1320.1

The rest of the commits were added without conflict. View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1330. Add PRIMARY KEY command

### 1330.1

The rebase added the "row" commits where they are supposed to be, then the "column" commits from this branch on top. Excellent. Now you can continue working on it. Add a reference to the column object for setting a column as the primary key. Give it a key of `primary_key` and a value of `"ALTER TABLE table_name ADD PRIMARY KEY(column_name);"`

#### HINTS

- The `column` key should look like this:

```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
  "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
  "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
    "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1340. git diff PRIMARY KEY command

### 1340.1

Check the diff to make sure you like your changes. Then, add the changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1350. git commit feat: add primary key reference

### 1350.1

Commit your staged files with `feat: add primary key reference` as the message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add primary key reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1352. Add FOREIGN KEY command

### 1352.1

Add `foreign_key` to the `column` object for another command. It's value should be `"ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);"`.

#### HINTS

- The `column` key should look like this:

```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
  "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
  "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
  "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
    "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
    "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1354. git add FOREIGN command

### 1354.1

Check the diff to make sure you like the changes, then add the changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1356. git commit feat: add foreign key reference

### 1356.1

Commit the changes with `feat: add foreign key reference` as its message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add foreign key reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1360. git checkout feat/add-more-row-references

### 1360.1

Go to your branch for the row references so you can continue work on those.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Use the `git branch` command to find the name of the branch
- It's the `feat/add-more-row-references` branch
- Enter `git checkout feat/add-more-row-references` into the terminal and press enter

## 1370. Add DELETE ROW command

### 1370.1

In your JSON file, add a `delete` key to the `row` object. Take a guess at the value, it should include the `DELETE FROM` and `WHERE` keywords. The whole value is in the hints.

#### HINTS

- The `row.delete` value should be `"DELETE FROM table_name WHERE condition;"`
- The `row` key should look like this:

```json
"row": {
  "insert": "INSERT INTO table_name(columns) VALUES(values);",
  "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
  "delete": "DELETE FROM table_name WHERE condition;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1380. git add DELETE ROW command

### 1380.1

View the diff of your changes, then add them to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1390. git commit feat: add delete row reference

### 1390.1

Commit the staged changes with the message `feat: add delete row reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add delete row reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1400. git checkout main

### 1400.1

Go to the `main` branch so you can merge these commits.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1410. git merge feat/add-more-row-references

### 1410.1

Merge the branch for the row commands into `main`.

#### HINTS

- Use the "git merge" command
- Here's an example: `git merge branch_name`
- Use the `git branch` command if you need to find the branch name
- It's the `feat/add-more-row-references` branch
- Type `git merge feat/add-more-row-references` into the terminal and press enter

## 1416. git branch -d feat/add-more-row-references

### 1416.1

You merged the branch and are done with it. Delete the branch for the row references.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- View your branches if you need to find the name
- The branch name is `feat/add-more-row-references`
- Type `git branch -d feat/add-more-row-references` into the terminal and press enter

## 1420. git checkout -b fix/add-missing-rename-references

### 1420.1

I missed a bunch of the rename commands when I had you work on a few of the objects. Create and checkout a branch named `fix/add-missing-rename-references`.

#### HINTS

- Use the `git checkout` command with the `-b` flag
- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b fix/add-missing-rename-references` into the terminal and press enter

## 1430. Add RENAME DATABASE command

### 1430.1

I forgot to add a command for how to rename a database. In your JSON file, add a `rename` key to the `database` object. The value should be `"ALTER DATABASE database_name RENAME TO new_name;"`

#### HINTS

- The `database` object should look like this:

```json
"database": {
  "create": "CREATE DATABASE database_name;",
  "drop": "DROP DATABASE database_name;",
  "rename": "ALTER DATABASE database_name RENAME TO new_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;",
    "rename": "ALTER DATABASE database_name RENAME TO new_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1440. git add RENAME DATABASE command

### 1440.1

View the diff of your changes to make sure you like them, then add them to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1450. git commit fix: add missing rename database reference

### 1450.1

Commit your stages changes with `fix: add missing rename database reference` for the message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "fix: add missing rename database reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1460. git checkout feat/add-column-references

### 1460.1

Leave this branch for now. Switch back to your branch for the column references so you can hopefully finally finish it.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Use the `git branch` command to find the name of the branch
- It's the `feat/add-column-references` branch
- Enter `git checkout feat/add-column-references` into the terminal and press enter

## 1470. git rebase main

### 1470.1

There was a commit to `main` since you last worked on this from when you merged the "add more row references" branch. Rebase this branch against `main` so it's up to date and you can finish working on it.

#### HINTS

- Use the "git rebase" command
- Add the branch after the command that you want to rebase against
- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 1480. Fix Conflicts

### 1480.1

Fix the conflicts so that all the commands are in their correct objects.

#### HINTS

- Be sure to delete any special characters
- The order of the keys should be:

```json
{
  "database": {},
  "table": {},
  "row": {},
  "column": {}
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1490. git add Fixed Conflicts

### 1490.1

You fixed the conflicts. Check your status, then add your files to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1495. git status

### 1495.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1500. git rebase continue

### 1500.1

Use the suggested command to continue your rebase.

#### HINTS

- View the output in the terminal to find the command
- It's the "git rebase continue" command
- Enter `git rebase --continue` in the terminal and press enter

## 1510. Add UNIQUE command

### 1510.1

There was a conflict when it tried to add the first commit from this branch on top of the one that was brought in from `main`. The rest of the commits were added without conflicts. In your JSON file, add a `unique` key to the `column` object. Give it a value of `"ALTER TABLE table_name ADD UNIQUE(column_name);"`

#### HINTS

- The should be `"unique": "ALTER TABLE table_name ADD UNIQUE(column_name);"` in your `column` object
- The `column` object should look like this:

```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
  "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
  "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
  "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);",
  "unique": "ALTER TABLE table_name ADD UNIQUE(column_name);"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
    "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
    "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);",
    "unique": "ALTER TABLE table_name ADD UNIQUE(column_name);"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1520. git add UNIQUE command

### 1520.1

View the diff to make sure you like the changes, then add the changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1530. git commit feat: add unique reference

### 1530.1

Commit the stages files with `feat: add unique reference` for the message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add unique reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1533. git reset HEAD~1

### 1533.1

I'm going to show you a few ways to remove or undo a commit. The first is to simply "travel back in time". You can use the `git reset` command to travel to any point in your commit history. Your current `HEAD` is a reference to the last commit you just made. Use `git reset HEAD~1` to go back one before `HEAD`.

#### HINTS

- Enter `git reset HEAD~1` in the terminal

## 1536. git log oneline

### 1536.1

This is a "mixed" reset and will put the changes from the commit you undid in your working tree. You can see that it says there's unstaged changes after the reset to your file. View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1539. git status

### 1539.1

Your commit for how to set a column to unique is gone. View your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1540. git diff

### 1540.1

View the diff.

#### HINTS

- Use the "git diff" command
- Type `git diff` into the terminal and press enter

## 1542. git add UNIQUE command

### 1542.1

And the changes from the reset are back in the working tree. So when you `reset` to one commit before `HEAD`, it removed the most recent commit, and put all the changes in the working tree. If you used the `--hard` flag with the reset, the changes would have not been added to the working tree and if you used the `--soft` flag, the changes would have been added to the working tree and to staging. Add the changes back to staging so you can commit them again.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1545. git commit feat: add unique reference

### 1545.1

Commit the change staged files with `feat: add unique reference` for its message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add unique reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1548. git revert HEAD

### 1548.1

Reverting is a good way to undo a commit because you don't lose the commit from the history. You can revert the most recent commit (`HEAD`) with `git revert HEAD`. Do that now.

#### HINTS

- Enter the suggested command
- Enter `git revert HEAD` in the terminal

## 1549. Nano: Enter git revert HEAD Message

### 1549.1

Git put you into Nano and is asking you enter a commit message for the revert, but they added a default one for you. Don't change anything in Nano, just exit the file to use the default message. You can exit the file by pressing `ctrl+x`.

#### HINTS

- Exit the file by pressing `ctrl+x`
- If you accidentally changed something in Nano, press `n` after `ctrl+x` to discard the changes
- Your last commit message should be `Revert "feat: add unique reference"`
- View your log to make sure the message is correct
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git revert HEAD` after it's done resetting

## 1551. git log oneline

### 1551.1

View the log with that flag I like again.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter
- Press enter until you have seen the whole log

## 1554. git show

### 1554.1

Using revert to undo that commit added another commit that is the exact opposite of it. Enter `git show` into the terminal to see the last commit added (now `HEAD`) and its details.

#### HINTS

- Enter the suggested command
- Type `git show` in the terminal and press enter
- Press enter until you have seen the whole message

## 1557. git show HEAD~1

### 1557.1

Type `git show HEAD~1` to take a look at the details of the original commit that you reverted.

#### HINTS

- Enter the suggested command
- Type `git show` in the terminal and press enter

## 1560. git rebase interactive HEAD~2

### 1560.1

If you look at the bottom of those two messages, it shows the diff. The diff of the revert commit is the exact opposite of the one before it. Effectively, undoing the changes. You've used rebase to update this branch, but you can enter an "interactive" mode to manipulate commits. Type `git rebase --interactive HEAD~2` into the terminal to enter this mode. The `HEAD~2` means you will have a chance to change the last two commits.

#### HINTS

- Enter the suggested command
- Type `git rebase --interactive HEAD~2` into the terminal and press enter
- If you entered the wrong command, save and exit Nano. Then try again
- You can save and exit Nano by pressing `ctrl+x` then `y` then `enter`

## 1563. Nano: Drop UNIQUE commits

### 1563.1

At the top of Nano, you can see the two commits with `pick` next to them. Below them, there's a list of options for working with them. `pick` means that it will use the commits as they were. At the bottom, it says, `d, drop = remove commit`. Replace the word `pick` preceeding your two commits with a `d` to drop them both. When you are done, save the file and exit Nano.

#### HINTS

- You can save and exit Nano by pressing `ctrl+x` then `y` then `enter`
- The most recent commit message should be `feat: add foreign key reference`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting

## 1564. git log oneline

### 1564.1

View your log. Use the `--oneline` flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter
- Press enter until you have seen the whole history

## 1567. git rebase interactive root

### 1567.1

Both, the commit to add the unique command and the one to revert it, were dropped. Enter another `--interactive` rebase that goes back to the `--root` instead of `HEAD~2`. I am going to show you how to change a commit message. `--root` means that the rebase will go back to your very first commit.

#### HINTS

- The command is `git rebase` with two arguments
- The two arguments are `--interactive` and `--root`
- Enter `git rebase --interactive --root` into the terminal and press enter

## 1570. Nano: Select Reword Column References Commit

### 1570.1

You can see that the latest commit is at the bottom here. Be careful not to change the wrong commits. One of the options is `r, reword = use commit, but edit the commit message`. Replace `pick` with an `r` next to the commit with the message `feat: add column reference` to reword the message, it's the very first commit you added to this branch. When you are done, save the file and exit Nano. Git will put you in another Nano instance to reword the commit message. Don't change anything in it yet.

#### HINTS

- Replace `pick` with an `r` next to the suggested commit
- Save and exit the file by pressing `ctrl+x` then `y` then `enter`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive --root` after it's done resetting

## 1572. Nano: Change Column References Commit Message

### 1572.1

Git is waiting for you to edit the commit message. Add an `s` at the end of the commit message so it is `feat: add column references`. When you are done, save the file and exit Nano.

#### HINTS

- Save and exit the file by pressing `ctrl+x` then `y` then `enter`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive --root` after it's done resetting. Then, in nano, replace `pick` with an `r` next to the `feat: add column reference` commit, and save and exit

## 1575. git log oneline

### 1575.1

View your log. Use the `--oneline` flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter
- Press enter until you have seen the whole history

## 1576. git rebase main

### 1576.1

The message was reworded, but there's a problem. Look at the commit hash for your `Initial commit` from the last two times you viewed the log, it's that string left of the log. They aren't the same anymore since you rebased back to the root. Same goes for the rest of the commits. When you rebase interactively it changes all those hashes, so git sees them as different commits. If you were to try and merge this into `main`, it wouldn't work because they don't share the same history anymore. For this reason, you don't want to do an interactive rebase where you go back passed commits unique to the branch you are on. Fortunately, you can fix this. Enter `git rebase main` to realign the history of the two branches.

#### HINTS

- Use the "git rebase" command
- Add the branch after the command that you want to rebase against
- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 1578. git log oneline

### 1578.1

View your log again. Use the `--oneline` flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1580. git rebase interactive HEAD~5

### 1580.1

Now the hashes are the same as they were before you rebased back to `--root`, which is what they are on `main`. Enter another interactive rebase. Go back to the first commit you added to this branch, it's `HEAD~5`.

#### HINTS

- It's the `git rebase` command with two arguments
- The two arguments are `--interactive` and `HEAD~5`
- Enter `git rebase --interactive HEAD~5` into the terminal and press enter
- If you entered the wrong command, exit nano without changing anything. Then try again.
- You can exit nano by pressing `ctrl+x`
- If you accidentally changed something in Nano, press `n` after `ctrl+x` to discard the changes

## 1590. Nano: Squash feat/add-column-references Commits

### 1590.1

Squashing commits means that you will take a bunch of commits and turn them into one. This is helpful to keep your commit history clean and something you want try to do. Replace `pick` with an `s` next to all your commits except the one with the message `feat: add column references`. When you are done, save and exit the file. You will find yourself in another instance of Nano. Don't change anything in it yet.

#### HINTS

- Replace `pick` with an `s` next to the suggested commits
- Save and exit the file by pressing `ctrl+x` then `y` then `enter`
- The most recent commit message should be `feat: add column references`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~5` after it's done resetting

## 1595. Nano: Save and Exit to Squash

### 1595.1

Nano brought up a list of all the commit messages you used for the commits. Don't change anything in there, just exit the file to use those messages and finish squashing the commits.

#### HINTS

- Press `ctrl+x` to exit the file
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~5` after it's done resetting. Then, in nano, replace `pick` with an `s` next to all the commits except the `feat: add column reference` commit, and save and exit

## 1600. git log oneline

### 1600.1

View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1610. git log -1

### 1610.1

Now all the "column" commits you made to this branch have been squashed into just the one commit at the top. View the log again, but use `-1` instead of `--oneline` this time to view only the last commit.

#### HINTS

- Use `git log` with the suggested argument
- Type `git log -1` into the terminal and press enter

## 1620. git checkout main

### 1620.1

You can see that your one commit has all the messages that were in Nano, which are all of the commits you made to this branch squashed into one commit. I think you are finally done with this branch. Go to your `main` branch so it can get merged.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1630. git merge feat/add-column-references

### 1630.1

Merge your branch for adding column commands into this one.

#### HINTS

- Use the `git merge` command with the branch name after it
- Here's an example: `git merge branch_name`
- Use the `git branch` command if you need to find the branch name
- It's the `feat/add-column-references` branch
- Type `git merge feat/add-column-references` into the terminal and press enter
- If you got `fatal: refusing to merge unrelated histories`, you need to switch back to the feature branch, enter `git rebase main` to align the histories, then come back to `main` and try again

## 1635. git branch -d feat/add-column-references

### 1635.1

Hopefully, there were no conflicts. Delete your branch for adding information about column commands since you are done with it.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- View your branches if you need to find the name
- The branch name is `feat/add-column-references`
- Type `git branch -d feat/add-column-references` into the terminal and press enter

## 1640. git checkout fix/add-missing-rename-references

### 1640.1

Go to your branch for adding the commands that were missing. There's one more to add.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Use the `git branch` command to find the name of the branch
- It's the `fix/add-missing-rename-references` branch
- Enter `git checkout fix/add-missing-rename-references` into the terminal and press enter

## 1650. git rebase main

### 1650.1

There was added a commit to `main` since you last worked on this. Update this branch with a rebase against main.

#### HINTS

- Use the "git rebase" command
- Add the branch after the command that you want to rebase against
- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 1680. git log -5 oneline

### 1680.1

You viewed the most recent log with a `-1` flag. You can view the last `x` number of commits with any number instead of `1`. View the last five commits with the oneline flag.

#### HINTS

- Use the `git log` command with the correct two arguments
- The two arguments are `-5` and `--oneline`
- Type `git log -5 --oneline` into the terminal and press enter

## 1690. Add RENAME TABLE Command

### 1690.1

This branch is up to date now. In your JSON file, add a `rename` key to the `table` object. The value is in the hints, but give it a try first. It follows a similar structure as the rest of them.

#### HINTS

- The value is `"ALTER TABLE table_name RENAME TO new_name;"`
- The `table` object should look like this:

```json
{
  "create": "CREATE TABLE table_name();",
  "drop": "DROP TABLE table_name;",
  "rename": "ALTER TABLE table_name RENAME TO new_name;"
}
```

- The whole file should look like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;",
    "rename": "ALTER DATABASE database_name RENAME TO new_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;",
    "rename": "ALTER TABLE table_name RENAME TO new_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
    "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
    "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);"
  }
}
```

- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1700. git add RENAME TABLE command

### 1700.1

Check the diff of your changes, then add them changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1710. git commit fix: add missing rename table reference

### 1710.1

Commit your staged changes with the message, `fix: add missing rename table reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "fix: add missing rename table reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1715. git log -5 oneline

### 1715.1

View your last five logs with the oneline flag again.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Use `-5` with your `git log --oneline` command
- Type `git log --oneline -5` into the terminal and press enter

## 1720. git rebase interactive HEAD~2

### 1720.1

You have two commits on this branch that could be squashed. Enter an interactive rebase that goes back to `HEAD~2` so you can squash them.

#### HINTS

- It's the `git rebase` command with two arguments
- The two arguments and `--interactive` and `HEAD~2`
- Enter `git rebase --interactive HEAD~2` into the terminal and press enter
- If you entered the wrong command, save and exit nano without changing anything. Then try again
- You can save and exit nano by pressing `ctrl+x` then `y` then `enter`

## 1730. Nano: Squash feat/add-missing-rename-references Commits

### 1730.1

Replace `pick` with `s` next to your commit for adding the rename table reference to squash it. Be careful not to do the wrong one. When you are done, save and exit Nano.

#### HINTS

- Replace `pick` with `s` next to your `fix: add missing rename table reference` commit
- You can save and exit nano by pressing `ctrl+x` then `y` then `enter`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting

## 1735. Nano: Add Missing Renames Commit Message

### 1735.1

The lines that don't start with a `#` will be the commit messages. Add a new message at the top of the file on it's own line. Give it the text, `fix: add missing rename references`. When you are done, save and exit the file.

#### HINTS

- You can save and exit nano by pressing `ctrl+x` then `y` then `enter`
- The most recent commit message should be `fix: add missing rename references`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting. Then, in nano, replace `pick` with `s` next to your `fix: add missing rename table reference` commit, and save and exit

## 1737. git log -1

### 1737.1

View only the last commit in your log to see your squashed commit.

#### HINTS

- Use the `git log` command
- View the last `x` number of commits with `-x`
- Use `-1` with the command
- Type `git log -1` into the terminal and press enter

## 1740. git checkout main

### 1740.1

I think this branch is ready to go. Switch to `main` so you can merge it.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1750. git merge fix/add-missing-rename-references

### 1750.1

Merge your branch for adding the rename commands into `main`.

#### HINTS

- Use the `git merge` command with the branch name after it
- Here's an example: `git merge branch_name`
- Use the `git branch` command if you need to find the branch name
- It's the `fix/add-missing-rename-references` branch
- Type `git merge fix/add-missing-rename-references` into the terminal and press enter

## 1760. git branch

### 1760.1

View your branches.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 1770. git branch -d all but main

### 1770.1

Delete all your branches except `main`.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- The branch name is `fix/add-missing-rename-references`
- Type `git branch -d fix/add-missing-rename-references` into the terminal and press enter

## 1780. git log oneline

### 1780.1

I think the file is complete, thanks for making this for me. View the log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1790. git checkout -b feat/add-gitignore

### 1790.1

That's a nice looking commit history. There's one more thing you should learn. Create and checkout a branch named `feat/add-gitignore`.

#### HINTS

- Use the `git checkout` command with the `-b` flag
- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b feat/add-gitignore` into the terminal and press enter

## 1800. touch .env

### 1800.1

Use the `touch` command to create a file named `.env` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch .env` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder

## 1810. Add SECRETS to .env

### 1810.1

`.env` files are used to store environment variables for running code. Often times, there may be sensitive information in it. Add the text `SECRET=MY_SECRET` to the file.

#### HINTS

- Add the suggested text to the `.env` file
- Add `SECRET=MY_SECRET` to the `.env` file
- Make sure there's nothing else in the file

## 1820. git status

### 1820.1

View your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1830. touch .gitignore

### 1830.1

You can see the `.env` file is new. Use `touch` again to create another file named `.gitignore` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch .gitignore` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder

## 1835. git status

### 1835.1

View the status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1840. Add .env to .gitignore

### 1840.1

Now there's two new files that aren't tracked yet. Add the text `.env` to your `.gitignore` file.

#### HINTS

- Add `.env` to the `.gitignore` file
- Make sure there's nothing else in the file

## 1850. git status

### 1850.1

View the status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1860. git add .gitignore

### 1860.1

Now the `.env` file is being ignored by git because you added it to the `.gitignore` file. There are often a number of things you don't want to include in a repository, especially if it's publicly visible. Now, you know how to keep them from being tracked by git. Add your new changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add sql_reference.json` to add changes to staging
- Type `git add .gitignore` into the terminal and press enter

## 1870. git commit feat: add .gitignore

### 1870.1

Commit your changes with `feat: add .gitignore` for the message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add .gitignore"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1880. touch sample.env

### 1880.1

Use touch to create another file named `sample.env` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch sample.env` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder

## 1890. git status

### 1890.1

View the status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1900. Add SECRET= to sample.env

### 1900.1

Git won't ignore this file. Sensitive information can be stored in the `.env` file, but people need to know the variables that are in there so they can run a repository locally. Add `SECRET=` to `sample.env`.

#### HINTS

- Add the suggested text to the `sample.env` file

## 1930. git add sample.env

### 1930.1

Now, when someone wants to run your repo, they will know that they need to create a `.env` file and add a value in it for `SECRET`. Add your new file to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add sql_reference.json` to add changes to staging
- Type `git add sample.env` into the terminal and press enter

## 1940. git commit feat: add sample.env

### 1940.1

Commit the new changes with the message `feat: add sample.env`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add sample.env"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1945. git log -5 oneline

### 1945.1

View the last five commits in your log with the oneline flag.

#### HINTS

- Use the `git log` command with two flags
- Use `-5` and `--oneline` with the command
- Type `git log -5 --oneline` into the terminal and press enter

## 1950. git rebase HEAD~2

### 1950.1

The two commits you made to this branch can be squashed. Do an interactive rebase that goes back to all the commits unique to this branch (`HEAD~2`).

#### HINTS

- It's the `git rebase` command with two arguments
- Use `--interactive` and `HEAD~2` with the command
- Enter `git rebase --interactive HEAD~2` into the terminal and press enter

## 1960. Nano: Squash feat/add-gitignore Commits

### 1960.1

Squash your commit that was for adding the `sample.env` file. When you are done, save the file and exit Nano.

#### HINTS

- Replace `pick` with `s` next to the suggested commit
- It's the `feat: add sample.env` commit
- You can save and exit by pressing `ctrl+x` then `y` then `enter`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting

## 1962. Nano: Add Message + Save and Exit

### 1962.1

Add a new message at the very top of the file, `feat: add .gitignore and sample.env`. When you are done, save and exit the file.

#### HINTS

- Add the suggested message on it's own line above the other messages
- You can save and exit by pressing `ctrl+x` then `y` then `enter`
- The most recent commit message should be `feat: add .gitignore and sample.env`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting. Then, in nano, replace `pick` with `s` next to your `feat: add sample.env` commit, and save and exit

## 1964. git log -1

### 1964.1

View only the last commit in your log.

#### HINTS

- Use the `git log` command with the correct argument
- View the last `x` number of commits with `-x`
- Use `-1` with the command
- Type `git log -1` into the terminal and press enter

## 1970. git checkout main

### 1970.1

Switch back to `main` so you can add this in.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1980. git merge feat/add-gitignore

### 1980.1

Merge the branch you just made into here.

#### HINTS

- Use the `git merge` command with the branch name after it
- Here's an example: `git merge branch_name`
- Use the `git branch` command if you need to find the branch name
- It's the `feat/add-gitignore` branch
- Type `git merge feat/add-gitignore` into the terminal and press enter
- If you got `fatal: refusing to merge unrelated histories`, you need to switch back to the feature branch, enter `git rebase main` to align the histories, then come back to `main` and try again

## 1990. git branch -d feat/add-gitignore

### 1990.1

Delete the feature branch you just merged.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- Use just `git branch` if you need to find the branch name
- The branch name is `feat/add-gitignore`
- Type `git branch -d feat/add-gitignore` into the terminal and press enter

## 1995. git log oneline

### 1995.1

I think it's all finished. View your log with the oneline flag to see your whole history.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 2000. git log

### 2000.1

Looks great :smile: View the log one last time, without any flags, to see the details of all the commits. Congratulations, you are finished with your repo for now.

#### HINTS

- Use the `git log` command
- Don't use any flags with the command
- Press enter until you have seen the whole log

####

####

####

####

####
