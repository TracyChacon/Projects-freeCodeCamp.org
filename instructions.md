# Front End Development Libraries

Now that you're familiar with HTML, CSS, and JavaScript, level up your skills by learning some of the most popular front end libraries in the industry.

In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass.

Later, you'll build a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.

## Courses

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

####

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

The i element was originally used to make other elements italic, but is now commonly used for icons. You can add the Font Awesome classes to the i element to turn it into an icon, for example:

```html
<i class="fas fa-info-circle"></i>
```

Note that the span element is also acceptable for use with icons.

Use Font Awesome to add a thumbs-up icon to your like button by giving it an i element with the classes fas and fa-thumbs-up. Make sure to keep the text Like next to the icon.

Tests
Waiting:You should add an i element with the classes fas and fa-thumbs-up.
Waiting:Your fa-thumbs-up icon should be located within the Like button.
Waiting:Your i element should be nested within your button element.
Waiting:Your icon element should have a closing tag.
