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

#### Build a Boilerplate

In this 170-lesson course, you will learn terminal commands by creating a website boilerplate using only the command line.

Create a GitHub account if you don't have one. You'll need it when you create the virtual Linux server machine. This process may take a few minutes.

#### start terminal

The first thing you need to do is start the terminal.

Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### pwd

What you see in the terminal below is a folder (or directory) on this machine.

Type pwd into the terminal and press enter to see the path of the folder. pwd stands for "print working directory".

#### ls

The output tells you where the folder you are in is located.

You are in the project folder, which is in the CodeAlly folder, which is in the home folder. Type ls into the terminal to see what's in this folder. ls stands for "list".

#### cd <folder_name>

The output is showing everything in this folder.

There's two folders here. You can use `cd <folder_name>` to go into a folder. cd stands for "change directory". Change to the freeCodeCamp directory.

####

You are in the freecodecamp folder now.
You may have noticed that the prompt changed to include it. Print the working directory of the freeCodeCamp folder to see the full path of where you are.

####

You can see the path of the freeCodeCamp folder.
It's in the project folder you were just in. List the contents of the freeCodeCamp folder to see what's here.

####

There's two folders and three files here.
The folders are blue and the files include their extension. Next, change to that test directory.

####

You can see you are in the test folder now.
It shows test in the prompt. Print the full path of this directory. Remember that "folder" and "directory" are the same thing.

####

That's the path to the test folder, it's in the freeCodeCamp folder.
List the contents of this folder.

#### cd ..

These are all files. There's no more folders to go into here.
You can use `cd ..` to go back a folder level. The two dots will take you back one level. Go back to the freeCodeCamp folder

####

test got removed from the prompt since you left that folder and you're back in the freeCodeCamp folder. List the contents of what's here to remind yourself.

#### more <filename>

There's the test folder you were just in.
You can see what's in a file with `more <filename>`. Use it to view what's in the package.json file.

####

It looks like a JSON object.
You can empty the terminal with clear. The terminal looks a little cluttered, why don't you clear it.

####

Now you have a fresh screen 😄 List what's in here again.

####

You checked out the test folder and the package.json file. What next? Why don't you go into that node_modules directory.

####

Now the prompt includes node_modules since that's where you are. List what's in the folder.

#### -l flag to the "list" command

That's a lot of folders.

You can add a flag to a command to use it different ways like this: ls `<flag>`. List the contents of the node_modules folder in "long list format". Do that by adding the -l flag to the "list" command.

####

It is showing more details about each item in here and it's a little easier to read. One of the folders is named `has`, why don't you change into it.

####

You are now in the has folder. List its contents.

####

There's a few files and folders here. Can you tell the difference? Take a look at more of that README.md file.

####

Nothing noteworthy in there. You can't see what's in the here anymore, list the contents again.

####

That one file doesn't appear to have an extension. Strange. Take a look at more of the that "license" file that doesn't show an ex

####

Pretend you read all that. It looks a little messy in here again so why don't you clear the terminal.

####

Better. Remind yourself what's in here with the list command.

####

Go into that src directory to see what you can find in there.

####

View the full path of this folder.

#### /

Getting deeper still. You can see that each new folder has a / in front of it. Take a look at what's in this folder.

####

Only one file here. Show me what's in it with more.

####

It's some JavaScript 😄 I think you've fooled around enough. Why don't you navigate out of here. Change back to the has directory.

####

You're getting pretty good. Change back to the node_modules directory.

#### cd ../..

You can go back two folders with `cd ../..`. Each set of dots represents another folder level. Go back to the project directory from the node_modules directory.

####

You are back in the project folder where you started. List what's in here again.

####

That's right. Why don't you get a fresh start by clearing the terminal.

#### mkdir

You will be making a website boilerplate. You can make a new folder with mkdir `<folder_name>`. mkdir stands for "make directory". Make a `website` directory in this project folder. Remember that "directory" and "folder" mean the same thing.

####

List what's here to make sure it got created.

####

It worked. The website files will be in the new directory. Change to the website directory so you can start creating them.

####

List the contents of the website folder.

#### echo

It's brand new, there's nothing in it yet. The `echo` command lets you print anything to the terminal. You used it in the first lesson. Just type what you want to print after it. Use it to print `hello website` to the terminal.

#### touch

Websites usually have an index.html file. You can use `touch <filename>` to create a new file. Create `index.html` in the website folder.

####

They usually have a CSS file as well. Create `styles.css` in the website folder using the same method.

####

List the contents of the website folder to make sure they got created.

####

There they are. Next is a JavaScript file. Create `index.js` in the website folder with the method you have been using.

#### git respository

You might turn this into a git repository. Create `.gitignore` in the website folder with the same method.

####

List the contents of the website folder to see your new files.

#### help flag

There's three files, but where's the `.gitignore file`? I think it's hidden. Most commands have a `--help` flag to show what the command can do. Display the "help" menu for the `ls` command. Here's an example: `command <flag>`

#### --all, -a flag

Scroll through the menu to see the flags that go with ls. The flag you are looking for is `--all`, or `-a` for short. List all the contents of the website folder using the correct flag.

#### hiden files

There's the hidden file. Do you see it? It didn't display before. It also includes . and ... You used cd .. to go back a folder earlier. Change to the . directory.

####

You didn't go anywhere. The `. `takes you to the folder you are in, and `..` takes you back, or up, a folder. Websites need some images. Create `background.jpg` in the website folder.

####

Next, add a header image. Create `header.png` in the website folder.

####

Finally, create footer.jpeg in the website folder.

####

Use the list command to check out the images you just added.

#### Looks like images show up in pink

Looks like images show up in pink. There's also three fonts to use for the website. The first one is "roboto". Create `roboto.font` in the website folder.

####

The next one is "lato". Create `lato.font` in the website folder.

####

Lastly, create `menlo.font` in the website folder.

####

List the contents of this folder to see your new font files.

####

Your three font files are there. There's three icons for the website as well. Create `CodeAlly.svg` in the website folder.

####

Next, create `CodeRoad.svg` in the `website` folder.

####

Finally, create `freeCodeCamp.svg` in the `website` folder.

####

Check out the new icons you just added by listing the contents of the folder they are in.

####

The icons are pink as well. I think the images should go in a separate folder to clean it up a little. Make an images directory in the website folder to put them in.

####

List the contents of the `website` folder to make sure your new folder is there.

#### cp, copy a file

There's your new images folder. It's blue. You can copy a file with `cp <file> <destination>`. cp stands for "copy". Copy `background.jpg` to your images folder.

####

Better make sure it worked. Change to the `images` directory.

####

List the contents to see if `background.jpg` is here.

####

There it is. Looks like the copy worked. Change back to the website directory so you can copy the other ones.

####

Remind yourself of the files here by listing the contents.

#### remove files with rm

You copied the background image to the images folder so you don't need the one here anymore. You can remove a file with `rm <filename>`. Remove `background.jpg` from the website folder.

####

List the contents to make sure it's gone.

####

Okay, it's gone. Next, copy `header.png` to the `images` folder.

####

Last, copy the "footer" image to the `images` folder.

####

All the images should be copied over. Change to the images directory so you can make sure.

####

Check if the images are here by listing the contents.

####

They all made it here. Go back to the `website` folder so you can delete the original files.

####

List the contents to remind yourself of the filenames to delete.

####

There's two that you don't need anymore. Remove the "header" image file from the `website` folder since you copied to the images folder.

####

It should be gone. Remove the "footer" image from the `website` folder as well.

####

List the contents of the website folder to check if they are gone.

#### Use mv to rename file

Looks like they're all deleted. There was a mistake with the extensions for the font files. You can rename them with `mv` like this: `mv <filename> <new_filename>`. mv stands for "move", it can rename or move something. Rename `roboto.font` to `roboto.woff`.

####

Use "list" to check if it worked.

####

Do you see the "roboto" font? The rename worked. Next, rename the "lato" font file to `lato.ttf`.

####

Lastly, rename the "menlo" font to menlo.otf.

####

Use the "list" command to make sure those last two got renamed.

####

Take a look at the files to make sure they got renamed. Those font files could be organized into a folder as well. Make a `fonts` directory in the `website` folder to put them in.

####

List the contents of the website folder to make sure your new folder is there.

#### Use `mv` to move files

See it? You renamed the font files with `mv`, you can also move files with it. Move the "roboto" font to the new `fonts` folder. Here's an example: `mv <file> <destination>`.

#### Use `find`

You can use find to find things or view a file tree. Enter find to view the file tree of the website folder to see all the files and folders within it.

####

You can see everything in this website folder and its descendant folders. Notice that they all start with `./` to represent this folder. You can see that your font moved to the `fonts` folder. Next, move the "lato" font to the `fonts` folder.

####

There's one more font to move. Move the "menlo" font to the fonts folder.

####

Use `find` again to list the whole file tree and make sure those two got moved.

####

Yes, you can see them all in the fonts folder. Let's organize some more. Make a `client` directory in the website folder for the client side files.

#### Using Paths

You can make a folder in that `client` folder from here by adding it to the path like this: `mkdir client/<new_folder_name>`. Make a `src` directory in the `client` folder from here.

####

You can move files all the way across the system from here with the right path. Move `index.html` to the `client/src` folder from here.

####

Use find to view the file tree and make sure it moved.

####

Can you see the `index.html` file in your new `src` folder? Looks like it moved 😄 There's some more files that can go in the `src` folder. Move `index.js` to it from here.

####

Last is the CSS file. Move `styles.css` to the `src` folder.

####

Seems like you can do anything right from here. Take another look at the tree with `find`.

#### `find <folder_name>`

Things are looking more organized 😄 You can use `find <folder_name>` to display the tree of a different folder. View the file tree of the client folder from the website folder.

####

Now you just see what's in the client folder. What else can find do? View the "help" menu of the `find` command to look around.

#### `find -name <filename>`

The menu isn't very pretty, but there's a `-name` flag in there. You can use it to search for something with `find -name <filename>`. Use find with the `-name` flag to search for `index.html`.

####

It shows you where that file is. Using the same command, find where the `styles.css` file is.

####

You can search for folders with it, as well. Using the same command and flag, find the `src` folder.

####

😄 View the file tree of the website folder to see what else you need to do.

####

What's next? More organizing! You should put all the assets in one spot. Change into the client folder.

####

Make a new directory named `assets` in the client folder.

####

Change into the new assets folder.

####

All the images and other assets can go here. Make an `images` directory in the `assets` folder for all the images.

####

Go to your new images folder.

####

You want the images here. Create `background.jpg` in this folder.

####

Wait. You don't need to recreate them. You can just move the other images here. Go back to the `website` folder from here. It's three folder back.

####

Now go to where the original images are. Change into the `images` folder.

####

List the contents of the `images` folder to see the files here.

####

Umm, first I think you should move them back to the website folder. Move `header.png` back to the website folder. The destination for the file is ..

####

List the contents of the `images` folder to see if it's gone.

####

It's gone. Go back to the website folder.

####

List what's here.

####

There's the file you just moved. Next, you will move it to the `client/assets/images` folder. First, use `find` with the correct flag to search for images.

####

There's your two `image` folders. Move `header.png` to the one with the longer path. Just use it as the destination to do so.

####

Use `find` to search for your `header.png` file and make sure it moved.

####

There it is. Right where you put it. Next, search for your `footer.jpeg` file so you can move that over there.

####

It's in the original `images` folder. You can use that path with the move command to move it. Move `footer.jpeg` to the `client/assets/images` folder while in the `website` folder.

####

View the file tree of this folder to make sure all your images are over in their new folder. Don't use any flags.

#### `rmdir <directory_name>`

You don't need the old images folder anymore. You can use `rmdir <directory_name>` to remove a folder. rmdir stands for "remove directory". Try to remove the images folder with rmdir. Make sure it's the one in the website folder.

####

Directory not empty? Oh yeah, there's still the background image in there. Remove the background image file in the images folder from here. Make sure it's the one in the website/images folder.

####

Try to remove the images folder again with rmdir. Make sure it's the one in the website folder.

####

I think it worked this time. List the contents to find out.

####

It worked, the images folder is gone. Make a new icons folder in your assets folder while in the website folder.

####

Move the CodeAlly.svg file to your new icons folder.

####

View the file tree of the website folder and make sure it moved.

####

Verify that the file moved to the icons folder. Next, move the "CodeRoad" file to your icons folder.

####

Lastly, move the "freeCodeCamp" file to your icons folder.

####

View the file tree and make sure the files moved.

####

This looks much better. The three icons are now in the icons folder. Make a fonts folder in your assets folder from here for all the font files.

#### touch <./path/file>

Turns out you want some different fonts for the website. From here, create roboto-bold.woff in your new fonts folder. You can put the path in front of the filename of where you want it to go.

####

Next, create roboto-light.woff in your new fonts folder from here.

####

View the file tree of the client/assets/fonts folder from here to see if your new files are there.

####

Two more fonts to go. Create `lato-bold.ttf` in the new fonts folder from here.

####

Lastly, create lato-light.ttf in your new fonts folder from here.

####

View your file tree and make sure the files are there.

####

Things are looking more organized 😄 The new fonts are there. Now you can remove the old fonts folder and everything in it. You can't do that with rmdir since it's not empty. View the "help" menu of the rm command to see if you can find anything.

#### rm -r tag

There's a -r flag that says, remove directories and their contents recursively. That will remove the folder and everything in it. Use the "remove" command with that flag to remove the fonts folder. Make sure it's the one in the website folder. Be careful not to remove the wrong folder.

####

List what's here to see if it's gone.

#### rm WARNING

Looks like it’s gone. Surely, it went to the trash can right? No, it’s just gone. You should be very careful when recursively removing files like that. It will delete everything, and can destroy your operating system. There's a few more files for the boilerplate. Create package.json in the website folder.

####

Next, create server.js in the website folder.

####

Lastly, create README.md in the website folder.

####

List the content of this folder to make sure your new files are there.

####

The boilerplate is complete. Use echo to print `Yay!` to the terminal.

####

Print `I finished the boilerplate!` to the terminal.

####

Print one more thing... to the terminal

#### use echo to print to a file

You can print to a file instead of the terminal with `echo text >> filename`. Use it to print I made this boilerplate to your README.md file.

####

Use more to view your README.md file.

####

Now that line is in the file. Add `from the command line` to your README.md file with the echo command and the same method.

####

Use more to view the "readme" file again.

####

Now the file has two lines. Add `for the freeCodeCamp bash lessons` to your "readme" file with the echo command like you did before.

####

View your "readme" file again like you did before.

####

😄 Change to the project folder.

####

You are back where you started. List what's here.

####

Still the same two folders. Rename the website folder to website-boilerplate.

####

List the contents of this folder to see the new name.

####

Thanks for making this. You need to make a copy of it. Take a look at the "help" menu of the "copy" command.

####

Scroll up to find that "recursive" flag. You need to use it again to copy the whole folder. Copy the whole boilerplate into a folder named `toms-website`.

####

List the contents of the project folder to see the new copy.

####

Thanks. Use find to view the tree of toms-website.

####

Use find to view the tree of the boilerplate folder to make sure it matches.

####

Awesome! You are finished for now. Clear the terminal one last time.

####

Print "goodbye terminal" to the terminal.

#### exit command

Use the "exit" command to exit the terminal.

### Learn Relational Databases by Building a Mario Database

A relational database organizes data into tables that are linked together through relationships.

In this 165-lesson course, you will learn the basics of a relational database by creating a PostgreSQL database filled with video game characters.

#### Start the terminal

The first thing you need to do is start the terminal. Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type echo hello PostgreSQL into the terminal and press enter.

#### log in `psql --username=freecodecamp --dbname=postgres`

Your virtual machine comes with PostgreSQL installed. You will use the Psql terminal application to interact with it. Log in by typing psql --username=freecodecamp --dbname=postgres into the terminal and pressing enter.

#### `\l` list databases

Notice that the prompt changed to let you know that you are now interacting with PostgreSQL. First thing to do is see what databases are here. Type \l into the prompt to list them.

#### CREATE DATABASE

The databases you see are there by default. You can make your own like this:

```sql
CREATE DATABASE database_name;
```

The capitalized words are keywords telling PostgreSQL what to do. The name of the database is the lowercase word. Note that all commands need a semi-colon at the end. Create a new database named `first_database`.

####

Use the list shortcut command again to make sure your new database is there.

####

It worked. Your new database is there. If you don't get a message after entering a command, it means it's incomplete and you likely forgot the semi-colon. You can just add it on the next line and press enter to finish the command. Create another database named second_database.

#### `\c database_name` connect to database

You should have another new database now. List the databases to make sure.

####

You can connect to a database by entering `\c database_name`. You need to connect to add information. Connect to your `second_database`.

#### `\d` Display Tables/ View Tables

You should see a message that you are connected. Notice that the prompt changed to `second_database=>`. So the `postgres=>` prompt before must have meant you were connected to that database. A database is made of tables that hold your data. Enter `\d` to display the tables.

#### CREATE TABLE

Looks like there's no tables or relations yet. Similar to how you created a database, you can create a table like this:

```sql
CREATE TABLE table_name();
```

Note that the parenthesis are needed for this one. It will create the table in the database you are connected to. Create a table named `first_table` in `second_database`.

####

View the tables in `second_database` again with the display command. You should see your new table there with a little meta data about it.

####

Create another new table in this database. Give it a name of `second_table`.

####

There should be two tables in this database now. Display them again to make sure.

#### `\d table_name` View Details About Table

You can view more details about a table by adding the table name after the display command like this: `\d table_name`. View more details about your `second_table`.

#### `ALTER TABLE table_name ADD COLUMN column_name DATATYPE;`

Tables need columns to describe the data in them, yours doesn't have any yet. Here's an example of how to add one:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE;
```

Add a column to `second_table` named `first_column`. Give it a data type of `INT`. `INT` stands for integer. Don't forget the semi-colon. 😄

####

Looks like it worked. Display the details of `second_table` again to see if your new column is there.

####

Your column is there 😄 Use `ALTER TABLE` and `ADD COLUMN` to add another column to `second_table` named `id` that's a type of `INT`.

####

Your table should have an `id` column added. View the details of `second_table` to make sure.

####

Add another column to `second_table` named `age`. Give it a data type of `INT`.

####

Take a look at the details of second_table again.

#### `ALTER TABLE table_name DROP COLUMN column_name;` Remove/drop column

Those are some good looking columns. You will probably need to know how to remove them. Here's an example:

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

Drop your age column.

####

View the details of `second_table` to see if it's gone.

####

It's gone. Use the `ALTER TABLE` and `DROP COLUMN` keywords again to `drop first_column`.

#### `VARCHAR(<NUMBER>)` Datatype

A common data type is `VARCHAR`. It's a short string of characters. You need to give it a maximum length when using it like this: `VARCHAR(30)`.

Add a new column to `second_table`, give it a name of `name` and a data type of `VARCHAR(30)`.

####

Take a look at the details of second_table to see your columns.

#### `ALTER TABLE table_name RENAME COLUMN column_name TO new_name;`

You can see the `VARCHAR` type there. The 30 means the data in it can be a max of 30 characters. You named that column `name`, it should have been `username`. Here's how you can rename a column:

```sql
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;
```

Rename the `name` column to `username`.

#### `INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);`

Take a look at the details of `second_table` again to see if it got renamed.

####

It worked. Rows are the actual data in the table. You can add one like this:

```sql
INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);
```

Insert a row into `second_table`. Give it an `id` of `1`, and a `username` of `Samus`. The username column expects a `VARCHAR`, so you need to put `Samus` in single quotes like this: 'Samus'.

#### `SELECT columns FROM table_name;` `SELECT * FROM table_name;`

You should have one row in your table. You can view the data in a table by querying it with the `SELECT` statement. Here's how it looks:

```sql
SELECT columns FROM table_name;
```

Use a `SELECT` statement to view all the columns in `second_table`. Use an asterisk (`*`) to denote that you want to see all the columns.

####

There's your one row. Insert another row into `second_table`. Fill in the `id` and `username` columns with the values `2` and `'Mario'`

####

You should now have two rows in the table. Use SELECT again to view all the columns and rows from second_table.

####

Insert another row into `second_table`. Use `3` as the `id`, and `Luigi` as the `username` this time.

####

You should now have three rows. Use SELECT again to see all the data you entered.

#### `DELETE FROM table_name WHERE condition;` Delete Tuple/Row

That gives me an idea 😃 You can make a database of Mario video game characters. You should start from scratch for it. Why don't you delete the record you just entered. Here's an example of how to delete a row:

```sql
DELETE FROM table_name WHERE condition;
```

Remove Luigi from your table. The condition you want to use is `username='Luigi'`.

####

Luigi should be gone. Use SELECT again to see all the data and make sure he's not there.

####

It's gone. You can scrap all this for the new database. Delete Mario from `second_table` using the same command as before, except make the condition `username='Mario'` this time.

####

Only one more row should remain. Delete Samus from second_table.

####

Use SELECT again to see all the rows in second_table to make sure they're gone.

####

Looks like they're all gone. Remind yourself what columns you have in second_table by looking at its details.

####

There's two columns. You won't need either of them for the Mario database. Alter the table `second_table` and drop the column `username`.

####

Next, drop the id column.

####

Okay, the table has no rows or columns left. View the tables in this database to see what is here.

#### `DROP TABLE table_name;` delete/drop table

Still two. You won't need either of those for the new database either. Drop second_table from your database. Here's an example:

```sql
DROP TABLE table_name;
```

####

Next, drop first_table from the database.

####

All the tables are gone now, too. View all the databases using the command to list them.

#### `ALTER DATABASE database_name RENAME TO new_database_name;`

Rename first_database to mario_database. You can rename a database like this:

`ALTER DATABASE database_name RENAME TO new_database_name;`

####

List the databases to make sure it got renamed.

####

Connect to your newly named database so you can start adding your characters.

####

Now that you aren't connected to second_database, you can drop it. Use the DROP DATABASE keywords to do that.

####

List the databases again to make sure it's gone.

####

Okay, I think you're ready to get started. I don't think you created any tables here, take a look to make sure.

####

Create a new table named characters, it will hold some basic information about Mario characters.

####

Next, you can add some columns to the table. Add a column named character_id to your new table that is a type of SERIAL.

#### SERIAL data type

The `SERIAL` type will make your column an `INT` with a `NOT NULL` constraint, and automatically increment the integer when a new row is added. View the details of the characters table to see what SERIAL did for you.

#### `NOT NULL` contraint

Add a column to characters called name. Give it a data type of VARCHAR(30), and a constraint of NOT NULL. Add a constraint by putting it right after the data type.

####

You can make another column for where they are from. Add another column named homeland. Give it a data type of VARCHAR that has a max length of 60.

####

Video game characters are quite colorful. Add one more column named favorite_color. Make it a VARCHAR with a max length of 30.

####

You should have four columns in characters. Take a look at the details of it to see how things are going.

####

You are ready to start adding some rows. First is Mario. Earlier, you used this command to add a row:

```sql
INSERT INTO second_table(id, username) VALUES(1, 'Samus');
```

The first parenthesis is for the column names, you can put as many columns as you want. The second parenthesis is for the values for those columns. Add a row to your table, give it a name of Mario, a homeland of Mushroom Kingdom, and a favorite_color of Red. Make sure to use single quotes where needed.

####

Mario should have a row now and his `character_id` should have been automatically added. View all the data in your characters table with SELECT to see this.

####

Add another row for Luigi. Give it a name of Luigi, a homeland of Mushroom Kingdom, and a favorite_color of Green.

####

View all the data in your characters table with SELECT again.

####

Okay, it looks like it's all working. Add another row for Peach. Give her the values: Peach, Mushroom Kingdom, and Pink.

#### Add multiple rows/tuples at a time

Adding rows one at a time is quite tedious. Here's an example of how you could have added the previous three rows at once:

```sql
INSERT INTO characters(name, homeland, favorite_color)
VALUES('Mario', 'Mushroom Kingdom', 'Red'),
('Luigi', 'Mushroom Kingdom', 'Green'),
('Peach', 'Mushroom Kingdom', 'Pink');
```

Add two more rows. Give the first one the values: Toadstool, Mushroom Kingdom, and Red. Give the second one: Bowser, Mushroom Kingdom, and Green. Try to add them with one command.

####

If you don't get a message after a command, it is likely incomplete. This is because you can put a command on multiple lines. Add two more rows. Give the first one the values: Daisy, Sarasaland, and Yellow. The second: Yoshi, Dinosaur Land, and Green. Try to do it with one command.

#### `UPDATE table_name SET column_name=new_value WHERE condition;`

Take a look at all the data in your table with SELECT to see where you stand.

####

It looks good, but there's a few mistakes. You can change a value like this:

```sql
UPDATE table_name SET column_name=new_value WHERE condition;
```

You used username='Samus' as a condition earlier. SET Daisy's favorite_color to Orange. You can use the condition name='Daisy' to change her row.

####

The command you just used does exactly what it sounds like. It finds the row where name is Daisy, and sets her favorite_color to Orange. Take a look at all the data in your table again to see if she got updated.

####

Her favorite color was updated. Toadstool's name is wrong as well, it's actually Toad. Use UPDATE to SET his name to Toad. Use the condition favorite_color='Red'.

####

Take a look at all the data in your table.

####

Using favorite_color='Red' was not a good idea. Mario's name changed to Toad because he likes red, and now there's two rows that are the same. Well, almost. Only the character_id is different. You will have to use that to change it back to Mario. Use UPDATE to set the name to Mario for the row with the lowest character_id.

####

Take a look at all the data in your table again to see if Mario's name got changed back.

####

Looks like it worked. Toad's favorite color is wrong. He likes blue. Change Toad's favorite color to Blue. Use whatever condition you want, but don't change any of the other rows.

####

Bowser's favorite_color is wrong. He likes Yellow. Why don't you update it without changing any of the other rows?

####

Bowser's homeland is wrong as well. He's from the Koopa Kingdom. Why don't you change it to that without changing any other rows?

####

Take a look at all the data in your table again to make sure there's no more issues.

#### `SELECT columns FROM table_name ORDER BY column_name;`

Actually, you should put that in order. Here's an example:

```sql
SELECT columns FROM table_name ORDER BY column_name;
```

View all the data again, but put it in order by character_id.

#### `ALTER TABLE table_name ADD PRIMARY KEY(column_name);`

It looks good. Next, you are going to add a primary key. It's a column that uniquely identifies each row in the table. Here's an example of how to set a PRIMARY KEY:

ALTER TABLE table_name ADD PRIMARY KEY(column_name);
The name column is pretty unique, why don't you set that as the primary key for this table.

####

You should set a primary key on every table and there can only be one per table. Take a look at the details of your characters table to see the primary key at the bottom.

#### `ALTER TABLE table_name DROP CONSTRAINT constraint_name;`

You can see the key for your name column at the bottom. It would have been better to use character_id for the primary key. Here's an example of how to drop a constraint:

ALTER TABLE table_name DROP CONSTRAINT constraint_name;
Drop the primary key on the name column. You can see the constraint name is characters_pkey.

####

View the details of the characters table to make sure it's gone.

####

It's gone. Set the primary key again, but use the character_id column this time.

####

View the details of the characters table to see the new primary key.

####

That's better. The table looks complete for now. Next, create a new table named more_info for some extra info about the characters.

####

View the tables in mario_database again with the display command. You should have two tables now.

####

I wonder what that third one is. It says characters_character_id_seq. I think I have a clue. View the details of the characters table.

####

That is what finds the next value for the character_id column. Add a column to your new table named more_info_id. Make it a type of SERIAL.

####

Set your new column as the primary key for this table.

####

View the tables in mario_database again with the display command. There should be another sequence there for the more_info_id because it also automatically increments.

####

There it is. Add another column to more_info named birthday. Give it a data type of DATE.

####

Add a height column to more_info that's a type of INT.

#### NUMERIC Data Type

Add a weight column. Give it a type of NUMERIC(4, 1). That data type is for decimals. NUMERIC(4, 1) has up to four digits and one of them has to be to the right of the decimal.

####

Take a look at the details of more_info to see all your columns.

#### `ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);` Foreign

There’s your four columns and the primary key you created at the bottom. To know what row is for a character, you need to set a foreign key so you can relate rows from this table to rows from your characters table. Here's an example that creates a column as a foreign key:

```sql
ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);
```

That's quite the command. In the more_info table, create a character_id column. Make it an INT and a foreign key that references the character_id column from the characters table. Good luck.

####

To set a row in more_info for Mario, you just need to set the character_id (foreign key) value to whatever it is in the characters table. Take a look at the details of more_info to see your foreign key.

#### `ALTER TABLE table_name ADD UNIQUE(column_name);`

There's your foreign key at the bottom. These tables have a "one-to-one" relationship. One row in the characters table will be related to exactly one row in more_info and vice versa. Enforce that by adding the UNIQUE constraint to your foreign key. Here's an example:

ALTER TABLE table_name ADD UNIQUE(column_name);
Add the UNIQUE constraint to the column you just added.

#### `ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;`

The column should also be NOT NULL since you don't want to have a row that is for nobody. Here's an example:

ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;
Add the NOT NULL constraint to your foreign key column.

####

Take a look at the details of your more_info table to see all the keys and constraints you added.

####

The structure is set, now you can add some rows. First, you need to know what character*id you need for the foreign key column. You have viewed all columns in a table with *. You can pick columns by putting in the column name instead of \_. Use SELECT to view the character_id column from the characters table.

####

That list of numbers doesn't really help. Use SELECT again to display both the character_id and name columns from the characters table. You can separate the column names with a comma to view both.

#### DATE Datatype format

That's better. You can see Mario's id there. Here's some more info for him:

birthday height weight
1981-07-09 155 64.5
Add a row to more_info with the above data for Mario using the INSERT INTO and VALUES keywords. Be sure to set his character_id when adding him. Also, DATE values need a string with the format: 'YYYY-MM-DD'.

####

View all the data in more_info to make sure it's looking good.

####

Next, you are going to add some info for Luigi. Use SELECT again to view the character_id and name columns from the characters table to find his id.

####

You can see Luigi's id there. Here's his info:

birthday height weight
1983-07-14 175 48.8
Add a row in more_info for Luigi using the above info. Be sure to add his character_id as well.

####

View all the data in more_info to see more info for Luigi.

####

Peach is next. View the character_id and name columns from the characters table again so you can find her id.

####

Here's the additional info for Peach:

birthday height weight
1985-10-18 173 52.2
Add a row for Peach using the above info. Be sure to add her character_id as well.

#### SELECT columns FROM table_name WHERE condition;

Toad is next. Instead of viewing all the rows to find his id, you can just view his row with a WHERE condition. You used several earlier to delete and update rows. You can use it to view rows as well. Here's an example:

SELECT columns FROM table_name WHERE condition;
A condition you used before was username='Samus'. Find Toad's id by viewing the character_id and name columns from characters for only his row.

####

Here's what Toad's info looks like:

birthday height weight
1950-01-10 66 35.6
Add the above info for Toad. Be sure to add his character_id.

####

View all the data in more_info to see the rows you added.

####

Bowser is next. Find his id by viewing the character_id and name columns for only his row.

####

Here's what Bowser's info looks like:

birthday height weight
1990-10-29 258 300
Add the above info for Bowser. Don't forget to add his character_id.

####

Daisy is next. Find her id by viewing the character_id and name columns for only her row.

#### You can use NULL or simply not include the null columns when inserting.

The info for Daisy looks like this:

birthday height weight
1989-07-31 NULL NULL
Add the above info for Daisy to more_info. Be sure to add her character_id as well. You can use NULL or simply not include the null columns when inserting.

####

View all the data in more_info to see the rows you added.

####

Null values show up as blank. Yoshi is last. Find his id by viewing the character_id and name columns for only his row.

####

The info for Yoshi looks like this:

birthday height weight
1990-04-13 162 59.1
Add the above info for Yoshi to more_info. Be sure to include his character_id.

####

There should be a lot of data in more_info now. Take a look at all the rows and columns in it.

####

It looks good. There is something you can do to help out though. What units do the height and weight columns use? It's centimeters and kilograms, but nobody will know. Rename the height column to height_in_cm.

####

Rename the weight column to weight_in_kg.

####

Take a quick look at all the data in more_info to see the new column names.

#### CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);

Next, you will make a sounds table that holds filenames of sounds the characters make. You created your other tables similar to this:

CREATE TABLE table_name();
Inside those parenthesis you can put columns for a table so you don't need to add them with a separate command, like this:

CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);
Create a new table named sounds. Give it a column named sound_id of type SERIAL and a constraint of PRIMARY KEY.

####

View the tables in mario_database to make sure it worked.

####

There's your sounds table. Add a column to it named filename. Make it a VARCHAR that has a max length of 40 and with constraints of NOT NULL and UNIQUE. You can put those constraints at the end of the query to add them all.

#### `ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT REFERENCES referenced_table_name(referenced_column_name);` one-to-many relationship

You want to use character_id as a foreign key again. This will be a "one-to-many" relationship because one character will have many sounds, but no sound will have more than one character. Here's the example again:

ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT REFERENCES referenced_table_name(referenced_column_name);
Add a column to sounds named character_id. Give it the properties INT, NOT NULL, and set it as a foreign key that references character_id from characters.

####

Take a look at the details of the sounds table to see all the columns.

####

Next, you will add some rows. But first, view all the data in characters so you can find the correct id's again. Order them by character_id like you did earlier.

####

The first file is named its-a-me.wav. Insert it into the sounds table with Mario's id as the character_id.

####

Add another row with a filename of yippee.wav. Use Mario's character_id again for the foreign key value.

####

Add another row to sounds for Luigi named ha-ha.wav. Use his character_id this time. Take a look at the data in characters to find his id if you need to.

####

Add another row with a filename of oh-yeah.wav. This one is for Luigi as well so use his character_id again.

####

Add two more rows for Peach sounds. The filenames are yay.wav and woo-hoo.wav. Don't forget her character_id. Try to do it with one command.

####

Add two more rows. The filenames are mm-hmm.wav and yahoo.wav. The first one is for Peach again, the second is for Mario, so use the correct foreign key values. Try to do it with one command.

####

View all the data in the sounds table. You should be able to see the "one-to-many" relationship better. One character has many sounds.

####

See the "one-to-many" relationship? Create another new table called actions. Give it a column named action_id that's a type of SERIAL, and make it the PRIMARY KEY. Try to create the table and add the column with one command.

####

Add a column named action to your new table. Give it a type of VARCHAR that is a max length of 20 and has UNIQUE and NOT NULL constraints.

#### many-to-many relationship

The actions table won't have any foreign keys. It's going to have a "many-to-many" relationship with the characters table. This is because many of the characters can perform many actions. You will see why you don't need a foreign key later. Insert a row into the actions table. Give it an action of run.

####

Insert another row into the actions table. Give it an action of jump.

####

Add another action row with an action of duck.

####

View all the data in actions to make sure there's no mistakes.

#### junction table

It looks good. "Many-to-many" relationships usually use a junction table to link two tables together, forming two "one-to-many" relationships. Your characters and actions table will be linked using a junction table. Create a new table called character_actions. It will describe what actions each character can perform.

####

Your junction table will use the primary keys from the characters and actions tables as foreign keys to create the relationship. Add a column named character_id to your junction table. Give it the type of INT and constraint of NOT NULL.

#### `ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);` set an existing column as a foreign key

The foreign keys you set before were added when you created the column. You can set an existing column as a foreign key like this:

ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
Set the character_id column you just added as a foreign key that references the character_id from the characters table.

####

View the details of the character_actions table to see the foreign key you added.

####

Add another column to character_actions named action_id. Give it a type of INT and constraint of NOT NULL.

####

This will be a foreign key as well. Set the action_id column you just added as a foreign key that references the action_id column from the actions table.

####

View the details of the character_actions table to see your keys.

#### composite primary key `ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);`

Every table should have a primary key. Your previous tables had a single column as a primary key. This one will be different. You can create a primary key from two columns, known as a composite primary key. Here's an example:

ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);
Use character_id and action_id to create a composite primary key for this table.

####

This table will have multiple rows with the same character_id, and multiple rows the same action_id. So neither of them are unique. But you will never have the same character_id and action_id in a single row. So the two columns together can be used to uniquely identify each row. View the details of the character_actions table to see your composite key.

####

Insert three rows into character_actions for all the actions Yoshi can perform. He can perform all of them in the actions table. View the data in the characters and actions table to find the correct id's for the information.

####

View all the data in character_actions to see your rows.

####

Add three more rows into character_actions for all of Daisy's actions. She can perform all of the actions, as well.

####

Bowser can perform all the actions. Add three rows to the table for him.

####

Next is Toad. Add three more rows for his actions.

####

You guessed it. Peach can perform all the actions as well, so add three more rows for her.

####

Add three more rows for Luigi's actions.

####

Last is Mario, add three rows for his actions.

####

That was a lot of work. View all the data in character_actions to see the rows you ended up with.

####

Well done. The database is complete for now. Take a look around to see what you ended up with. First, display all the tables you created.

####

There's five tables there. Nice job. Next, take a look at all the data in the characters table.

####

Those are some lovely characters. View all the data in the more_info table.

#### SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;

You can see the character_id there so you just need to find the matching id in the characters table to find out who it's for. Or... You added that as a foreign key, that means you can get all the data from both tables with a JOIN command:

SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;
Enter a join command to see all the info from both tables. The two tables are characters and more_info. The columns are the character_id column from both tables since those are the linked keys.

####

Now you can see all the info from both tables. If you recall, that's a "one-to-one" relationship. So there's one row in each table that matches a row from the other. Use another JOIN command to view the characters and sounds tables together. They both use the character_id column for their keys as well.

####

Now you can see all the info from both tables. If you recall, that's a "one-to-one" relationship. So there's one row in each table that matches a row from the other. Use another JOIN command to view the characters and sounds tables together. They both use the character_id column for their keys as well.

#### `SELECT columns FROM junction_table                                           FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column  FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;`

This shows the "one-to-many" relationship. You can see that some of the characters have more than one row because they have many sounds. How can you see all the info from the characters, actions, and character_actions tables? Here's an example that joins three tables:

```sql
SELECT columns FROM junction_table
FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column
FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;
```

Congratulations on making it this far. This is the last step. View all the data from characters, actions, and character_actions by joining all three tables. When you see the data, be sure to check the "many-to_many" relationship. Many characters will have many actions.

### Learn Bash Scripting by Building Five Programs

Bash scripts combine terminal commands and logic into programs that can execute or automate tasks, and much more.

In this 220-lesson course, you will learn more terminal commands and how to use them within Bash scripts by creating five small programs.

####

The first thing you need to do is start the terminal. Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello bash` into the terminal and press enter.

####

You can run commands in the terminal or put them in a file to be run as a script. You will be making five small programs to learn some scripting. The first one will be a "questionnaire". Use the `touch` command to create `questionnaire.sh` in the project folder.

####

To start, open the file in the main editor by clicking the filename in the left side panel.
Then, add the text `echo hello questionnaire` at the top of the file.

#### run script with sh

Your script has one command. Run it with `sh questionnaire.sh` to see what happens. sh stands for shell.

#### run script with bash

Using sh to run your script uses the shell interpreter. Run your script again with bash questionnaire.sh to use the bash interpreter. bash stands for bourne-again shell.

#### `which bash`

The output was the same. There are many interpreters which may not give the output you expect. Find out where the bash interpreter is located by entering `which bash` in the terminal.

#### absolute path to the bash interpreter

That's the absolute path to the `bash` interpreter. You can tell your program to use it by placing a `shebang` at the very top of the file like this:` #!<path_to_interpreter>`. Add a `shebang` at the very top of your file, the one you want looks like this: `#!/bin/bash`.

#### execute file with `./`

Now, instead of using sh or bash to run your script. You can run it by executing the file and it will default to bash. Run your script by executing it with `./questionnaire.sh`

#### `ls -l` to list file permissions

You should have got a permission denied message because you don't have permissions to execute the script. List what's in the project folder in long list format with ls -l to see the file permissions.

#### r read, w write, x execute `chmod +x questionnaire.sh`

Next to your file is -rw-r--r--. All but the first character (-) describe permissions different users have with the file. r means read, w means write, x means execute. I don't see an x anywhere, so nobody can execute it. Enter `chmod +x questionnaire.sh` in the terminal to give everyone executable permissions.

####

List what's in the folder again with ls -l to see the new permissions.

####

The x was added by each type of user to denote that anyone can execute the file. Run your file again by executing it with ./questionnaire.sh.

####

Now it works. In your script, you can add any commands that you would be able to enter in the terminal. Test this by adding the ls -l command below your other command.

####

Run the script by executing it again.

####

Your script printed the result of the two commands as if you entered them in the terminal. Delete everything but the `shebang` from your file so you can start making the questionnaire.

#### Create variable `VARIABLE_NAME=VALUE`

Bash has variables, functions, and other things you might be familiar with. You can create a variable with `VARIABLE_NAME=VALUE`. There cannot be any spaces around the equal (=) sign. If a variable has any spaces in it, place double quotes around it. Create a variable named `QUESTION1` and set it's value to "What's your name?".

#### Use a Variable `$VARIABLE_NAME`

To use a variable, place `$` in front of it like this: `$VARIABLE_NAME`. Shell scripts run from top to bottom, so you can only use variable below where it's created. Use echo to print your variable.

####

Run the file like you did before to see if it worked.

#### `read VARIABLE_NAME` Read User Input

The question was printed. Next, you want to be able to accept input from a user. You can do that with read like this: `read VARIABLE_NAME`. This will get user input and store it into a new variable. After you print the question, use read to get input and store it in a variable named `NAME`.

####

At the bottom of your script, use `echo` to print `Hello <name>`. to the terminal.

####

Run the file again. Type your name and press enter after it asks for it.

####

Right below your first variable, create another one named QUESTION2. Set the value to, Where are you from?. Make sure to put it in double quotes.

####

After your `read` command, use your new variable to print the next question.

####

Below where the second question is printed, use read to get input from the user into a variable named LOCATION.

####

Change the existing response to `Hello <name> from <location>.`.

####

Run the script and enter values when it is waiting for input.

####

It's looking good. I want a title to appear when the program first starts. Use echo to print `~~ Questionnaire ~~` before anything else is printed.

####

Run the script and enter values until it is done again so you can see what the title looks like.

####

It would be nice if there was some empty lines around the title. You've probably used the --help flag before, see if you can use it with echo to try and find a way to add empty lines.

#### `man <command>` manual pages

That didn't work as I hoped. Another way to find information about a command is with man. It stands for manual and you can use it like this: man <command>. See if there's a manual for echo.

#### echo -e option enable backslash escape sequenses

At the top of the menu, the -e option looks promising. And the \n below it says new line. You should take a look at those. In your script, change the title to `echo -e \n~~ Questionnaire ~~\n` to see if that prints the empty lines.

#### 'ctrl+c' to close program

Run it to see if it worked. You can press ctrl+c to close the program after it starts if you don't want to enter values.

#### escape sequences and quotes

It didn't print the empty lines. echo will only print empty lines if the value is enclosed in quotes. Place double quotes around the title that gets printed to see if it works.

####

Run your script again to see if that fixed it.

####

Now it's working 😄 Create a QUESTION3 variable next to the other two, set it's value to "What's your favorite coding website?"

####

Use echo to print the third question after you read the LOCATION.

####

After the question you just printed, add code to read input into a variable named WEBSITE.

####

Change the echo command of the response to print this sentence instead: `Hello <name> from <location>. I learned that your favorite coding website is <website>!`.

####

Run the script and enter values when the program is waiting. Let's see the final output.

####

One last thing. Change that final response to print an empty line at the beginning of the sentence.

####

It looks good. I think you are done with that script for now. The next program will be countdown timer. Use the touch command to create a new file named countdown.sh in your project folder.

####

Give your file executable permissions so you can run it like the other one. It's the chmod command with the +x flag.

####

You want to use the bash interpreter again. Add a shebang at the top of your new file to denote that.

#### comments in bash `# <comment>`

Comments in bash look like this: `# <comment>`. Add a comment below the shebang that says `Program that counts down to zero from a given argument` so people know what it does. Note that the shebang is a special case and is not treated like a comment.

#### `echo $* ` print all args passed to it

Programs can take arguments. You can access them a few different ways with `$`. Add `echo $*` in your script to print all arguments passed to it.

####

Execute your script with `./countdown.sh.`

####

Nothing was printed. Run your script again, but this time add three arguments to the command; arg1, arg2, and arg3. Place them after the command with a space before each one.

#### `$<number>` access arg by number

`$*`printed all the arguments passed to your script. To access any one of them, use `$<number>`. `arg2` could have been accessed with `$2`. Change your script to echo the first argument instead of all the arguments.

####

Run your file with `./countdown.sh arg1 arg2 arg3` again.

####

Now it just prints the first argument. Your program will accept an argument to count down from. You will test it with an `if` statement to make sure it's a positive integer. I wonder what that syntax would look like. Type help in the terminal to see if you can find anything.

####

This is a list of built-in commands. You should look over it, some of them may look familiar. I see echo in there. Another one is `if`. See if you can find out more about it by checking its man page.

####

I guess there isn't a man page for it. At the top of the help screen, I noticed you can use `help <command>` to find out more. Yet another way to find out about a command 😥 See if you can find out more about if with that method.

#### bash if `[[CONDITION]]`

The syntax is at the top, not all of it is required. Here's another example:

```bash
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

Remove the `echo $1` in your script and add an if condition that checks `if [[ $1 == arg1 ]]`. In its then area, use `echo` to print true to the screen. There must be spaces on the inside of the brackets (`[[ ... ]]`) and around the operator (`==`).

#### fi

Notice that the end of the syntax is fi (if backwards). It should print true if you pass `arg1` to your script now. Run the script with `arg1` as the only argument.

####

The if condition worked, it printed true. Run it again with anything except `arg1` as the first argument.

#### bash else statement

Nothing was printed. One of the optional parts of if was an else area. You can use it like this:

```bash
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```

Add an else to your existing if condition. Use echo to print false if the condition fails.

####

Run the script again and use anything except arg1 as the only argument.

#### -eq (equal), -ne (not equal), -lt (less than), -le (less than or equal), -gt (greater than), -ge (greater than or equal)

Now it printed false. Your program is expecting an integer to count down from as its argument. You can compare integers inside the brackets (`[[...]]`) of your if with -eq (equal), -ne (not equal), -lt (less than), -le (less than or equal), -gt (greater than), -ge (greater than or equal). Change your `if` condition to check if your first argument is less than `5`.

####

Run the script again and use 4 as a first argument to make sure it's working.

####

It printed true since your argument was less than 5. Run it again with 5 as the argument.

####

As expected, that printed `false`. Take a look at that help menu again. I want to see if we can find out more about how these expressions work.

#### `help [[expression]]`

Near the top left, it says [[expression]]. Those look like the double brackets you are using. See if you can get more info about that with the help command like you did with help if.

#### `help builtin`

It might not be a bad idea to read that. Looks like you can use some, probably familiar, things like `!,` `&&,` and `||` to compare multiple expressions. There's also `==` and `!=` operators for an individual expression. It says something about the test built-in command. See if you can bring up the help menu for that.

####

That's what I was looking for. At the top are some file operators. There's some string and other operators as well. You should take a look at them. Near the bottom, are the arithmetic operators you used with your if condition. Change the condition in your script to check if the first argument is less than or equal to `5`.

####

Run the script and use 5 as a first argument again

####

Now it prints true. Remember I said any command can run in the terminal or a script. Try running an expression right in the terminal by entering `[[ 4 -le 5 ]]` in it.

#### `$?` access the exit status of command

Nothing happened? Each command has an exit status that can be accessed with `$?`. View the exit status of the last command with `echo $?`.

####

The exit status of 0 means it was true, `4` is indeed less or equal to `5`. Try it again with `[[ 4 -ge 5 ]]`.

####

Use `echo` to view the exit status of the command you just entered.

#### `;` separate commands with `;`

It printed `1` this time for `false`. You can separate commands on a single line with `;`. Enter your last two commands on one line like this: `[[ 4 -ge 5 ]]; echo $?`. It will run the expression, then print the exit status of it since it was the last command.

####

It's still false. Using the same syntax of `[[ ... ]]; echo$?`, check if `10` is not equal to `5` and print the exit status of the expression on one line.

####

1. Check the help test menu to find the not equal operator

####

You can think of an exit status of 0 as true. But it means that the command had zero errors. All commands have an exit status. Using the same syntax, enter `bad_command;` and check its exit status on a single line.

#### `0` exit status means no errors

command not found, with an exit status of `127`. Anything but `0` means there was an error with the command. bad_command didn't exist. Try it again with ls.

####

The command executed as expected and there were zero errors. So it gave you an exit status of 0. Try it again with ls -y.

####

The `-y` flag doesn't work with `ls` so it gave you an exit status other than `0`, meaning that the command was unsuccessful. View the help menu of the test command again, I want to see what else is in that list.

####

You tried a few of the arithmetic operators, those work for integers. Try one of the file operators. The first one on the list checks if a file exists. Type `[[ -a countdown.sh ]]; echo $?` in the terminal to see if your file exists.

####

The file must exist. It's checking the folder the command is entered from. Try it again with `bad_file.txt`.

#### `[[ -x <FILE> ]]; echo $?` true if executable

`bad_file.txt` doesn't exist. I think you're getting the hang of this. Using the same syntax, check if you have permissions to execute your `countdown.sh` file. You may want to look at that menu again.

#### ?def builtin, primaries

You played around with a number of the expressions. View the `help [[ expression ]] `menu again that you looked at before to see a few more options. You can view the menu with just help `[[`.

####

As I mentioned before, you can test multiple expressions with && and ||. Enter `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` in the terminal to test the file is executable by you and five is less than or equal to four.

#### exit status `1` for false

Both conditions weren't true, so the exit status was 1 for false. Try testing the same two conditions with the or operator.

####

One of the conditions was true so it printed `0`. I think that's enough of a detour. Back in your script, change the `if` condition to check if the first argument is greater than zero so you can be sure it's something you can count down from.

####

The condition you added checks if a positive integer was passed as an argument to the script and executes the then area. Change the existing `echo` command to print `Include a positive integer as the first argument.` if a positive integer is not used.

####

Run your script and use 1 as a first argument to make sure the condition is working.

####

Run it again and use anything but a positive integer as the only argument.

####

Looks like your if condition is working. Next, you want to loop over the argument and count down to zero from it. Check the help menu to see if there's any commands for this.

#### for loop #2

There's two for loops in there, you want the second one. Here's an example:

```bash
for (( i = 10; i > 0; i-- ))
do
  echo $i
done
```

The above creates a variable `(i = 10)`, then prints it, subtracts one, and repeats until `i` is not greater than `0`. So it prints `10` through `1`. In the then area of your condition, replace the `echo` with a `for loop` that prints from the argument (`$1`) to `1`.

####

Run your script and use 10 as the first argument.

####

It works 😄 But I want it to pause for one second between each number. Check the help menu again to see if there's any commands that might help.

#### `ls /`

I'm not seeing the command I was hoping to. These are the built-in commands, where are the rest? Type `ls /` to look around.

####

The `/` listed what's in the root of the file system. I see a bin folder, bin stands for binary. View what's in it with `ls /bin`.

####

These are some non built-in commands. There's quite a few that should look familiar. One is bash, that's the one you used for the shebang in your scripts. I see one called sleep. View the manual of it.

#### `sleep <NUMBER><SUFFIX>`

At the top, it says you can pause execution for a number of seconds. Try it out by entering sleep 3 in the terminal.

####

That should work. In your for loop, use sleep to make the script pause for 1 second after each number is printed.

####

Run your script and use 3 as the first argument.

####

Awesome. Except it should print 0 instead of stopping at 1. Change the condition in your for loop so that it checks for i >= 0.

####

Run your script with 3 as the argument again.

####

Excellent. I want it to display a title like the other script. Make it so that it prints `~~ Countdown Timer ~~` before anything else. Include a new line before and after it like you did for the other title.

####

Run your script and use 1 as the first argument again to see the title.

#### multiline comment

This is fun. You can create a multiline comment like this:

```bash
: '
  comment here
  more comment here
'
```

Comment out your for loop with a multiline comment. I want to try and do this with a `while` loop.

####

View the help menu for the while command to see if you can find anything.

####

It shows the syntax. First, below your comment, create a variable named `I` that is set to the value of your first argument. It will start there, then on each iteration of the while loop you can subtract 1 from it until it reaches 0.

####

The menu showed that you can make a while loop like this:

```bash
while [[ CONDITION ]]
do
  STATEMENTS
done
```

Add a while loop below the `I` variable you made. The condition should be `$I -ge 0` and you should echo the `I` variable in the do statements.

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####

####
