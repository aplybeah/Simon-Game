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
