# FAQ-Page
This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview
This is a single-page responsive FAQ webpage. It has been designed carefully to fit all devices  with visually appealing feautres! Tap on each question to see its corresponding answer

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: https://c-e-e-k-a-y.github.io/FAQ-Page/

## My process
I started off by creating the structure of the webpage with html. I divided the page into various sections, one for the header and the rest for the question and answers. Then I added a functionality for the various question sections so that once they are hovered on, they change colours and when clicked, the answer drops down and the "+" sign changes to "-". then reverses when the question is clicked again. the same functionality is also added to the buttons on the side of each question. As for the design, I combined an image with a background colour to give the project a theme which was used throughout the other elements of the page. Then i made use of media queries to add responsive behaviour to the website for a good look on each device.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript functions

### What I learned
In this project, a new thing I learned was how to combine an image and a background colour to use as a website background. It was something new to me so it was quite challenging but in the end, I found the solution.
Here is the CSS code snippet:

```body {
    ...
    background: url('assets/images/background-pattern-desktop.svg') no-repeat;
    background-color: hsl(275, 100%, 97%);
    background-position: top;
    background-size: 100%;
    background-attachment: fixed;
}
```

### Continued development

I would continue more developments on that background image combination with the background colour to perfect my understanding of how to use it dynamically.

### Useful resources
I found this resource helpful in learning how to combine multiple backgrounds.
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds

## Author

- Website - [Chibuike Ihieri](https://c-e-e-k-a-y.github.io/personal-website)
- GitHub - [@C-e-e-k-a-y](https://github.com/C-e-e-k-a-y)
- Twitter - [@ChibzTimmy](https://x.com/ChibzTimmy)


## Acknowledgments

My appreciation goes to front-end mentor for the challenge which exposed me to research about combining an image with a background colour and also on how to make better responsive designs.
