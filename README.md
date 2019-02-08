# Simon-Game

Project one

---

## Description

For project one, I built a Simon Game. This game is supposed to give a pattern, and players are supposed to repeat that pattern.

Brief Example
This could be a code snippet showing how your project should be used (if it is meant to be integrated into another app)
This could be a screenshot of your project running in the browser (if it is a stand-alone application)

---

## List of Features / User Stories

### Bronze:(Currently have)

This game has a linked scoreboard
pattern checking

### Silver:(Things I wish to add in the near future)

Timer (it's already placed for now)
Gold: (Things I plan to add once I have more knowledge)

### Timer based scoring

Challenge mode, with a longer starting sequence and more shapes to click.

---

## List of Technologies Used

in JS, I used recursive functions, mainly where the timers were involved.

```js

<script>
let t = 0;
function timer() {
  if (t < 7) {
    button[0].classList.toggle("active");
    t++;
    console.log(t);
    setTimeout(timer, 900);
  }
}
<script>
```

this was what made the boxes flash.
in CSS, I played around a lot with various effects like filter.

```css
<style>
.square {
  height: 200px;
  width: 200px;
  background-color: #267158;
  border: 0.5px solid #003926;
  border-radius: 18px;
  margin: 30px;
  filter: drop-shadow(8px 8px 8px #003926);
}
<style>
```

---

## Reflection

**What would you do differently?**
If I were to redo this project I would spend more time writing psuedocode and understanding what I want my code to do first. At a certain point in this project, I began applying random methods in my code and hoping something works. This was not very time efficient.

**What are you most proud of?**
I was really proud of how my front-end looks. I really want to spend more time playing with CSS in the future.

**What would you do next?**
I plan to do a little more research on the `setTimeout` method and better ways to link things to my arrays visually.

**How did you plan your project?**
Coming in to this project, I started with wireframes and the overall appearance of my game. Then I made two lists: one with graded requirements, and one with things I believed that I needed. Throughout the project, I put the highest priority on the things that I knew how to do without any (or much) references. When I got to the challenging bits, I broke down what I wanted to do in psuedocode, before trying to find a code snippet that would fix the problem.

**What did you learn?**
One of the biggest things I learned from this project is that resting and taking breaks is better for the project in the long run than working straight through. I also gained a better grasp on operators and array methods in JS. I also learned that it's ok to delete massive chunks of code if they haven't been working for several commits now.

## Contribution Guidelines

I would love to hear about any improvements that can be made or bugs that were found. You can do that below:

[Here is a link to the Simon Game main repo](https://github.com/aplybeah/Simon-Game)
[Here is a link to the issue tracker](https://github.com/aplybeah/Simon-Game/issues)
