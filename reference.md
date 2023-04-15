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

Then delete the `p` element that contains a dead link. Then remove the red-text class from your `h2` element and replace it with the `text-primary` Bootstrap class.

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
