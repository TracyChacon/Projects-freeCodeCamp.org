[X] 1
## Use Responsive Design with Bootstrap Fluid Containers
In the HTML5 and CSS section of freeCodeCamp we built a Cat Photo App. Now let's go back to it. This time, we'll style it using the popular Bootstrap responsive CSS framework.

Bootstrap will figure out how wide your screen is and respond by resizing your HTML elements - hence the name responsive design.

With responsive design, there is no need to design a mobile version of your website. It will look good on devices with screens of any width.

You can add Bootstrap to any app by adding the following code to the top of your HTML:

'''html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
'''
In this case, we've already added it for you to this page behind the scenes. Note that using either > or /> to close the link tag is acceptable.

To get started, we should nest all of our HTML (except the link tag and the style element) in a div element with the class container-fluid.




[X] 2
## Make Images Mobile Responsive
First, add a new image below the existing one. Set its src attribute to https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg.

It would be great if this image could be exactly the width of our phone's screen.

Fortunately, with Bootstrap, all we need to do is add the img-responsive class to your image. Do this, and the image should perfectly fit the width of your page.





[X] 3
## Center Text with Bootstrap
Now that we're using Bootstrap, we can center our heading element to make it look better. All we need to do is add the class text-center to our h2 element.

Remember that you can add several classes to the same element by separating each of them with a space, like this:

'''html
<h2 class="red-text text-center">your text</h2>
'''
Tests
Waiting:Your h2 element should be centered by applying the class text-center
Waiting:Your h2 element should still have the class red-text


[X] 4
Create a Bootstrap Button
Bootstrap has its own styles for button elements, which look much better than the plain HTML ones.

Create a new button element below your large kitten photo. Give it the btn and btn-default classes, as well as the text of Like.

[X] 5
## Create a Block Element Bootstrap Button
Normally, your button elements with the btn and btn-default classes are only as wide as the text that they contain. For example:

'''html
<button class="btn btn-default">Submit</button>
'''
This button would only be as wide as the word Submit.


By making them block elements with the additional class of btn-block, your button will stretch to fill your page's entire horizontal space and any elements following it will flow onto a "new line" below the block.

'''html
<button class="btn btn-primary btn-block">Submit</button>
'''
This button would take up 100% of the available width.


Note that these buttons still need the btn class.

Add Bootstrap's btn-block class to your Bootstrap button.


[ ] 6
Taste the Bootstrap Button Color Rainbow
The btn-primary class is the main color you'll use in your app. It is useful for highlighting actions you want your user to take.

Replace Bootstrap's btn-default class with btn-primary in your button.

Note that this button will still need the btn and btn-block classes.