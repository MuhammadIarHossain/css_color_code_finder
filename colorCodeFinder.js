/*
    Author: Muhammad iar Hossain
    Date of creation: 17th June 2022
    Used Technology: HTML5, CSS3, Vanilla JS
    compatiable for all major web browser 
    Features: 
      => User can input number through keyboard
      => User can change color using button or slider
      => Live preview color
      => User can copy both rgb and hexadecimal color code.	 
*/


/**
 * function can take HTML element as a arguement and return DOM element.
 * @param {element} 
 * @returns DOM Element
 */
function selector(el) { return document.querySelector(el) }
/**
 * function can take range value as a arguement and increment that value by user input.
 * @param {range value} 
 */
function increment(range) {
  selector(range).value++;
  sliderCode()
}
/**
 * function can take range value as a arguement and decrement that value by user input.
 * @param {range value} 
 */
function decrement(range) { selector(range).value--; sliderCode() }
/**
 * function can take range value as a arguement and user input value.
 * @param {range value, input value} 
 */
function numberInput(range, v) {
  selector(range).value = v;
  sliderCode()
}
/**
 * function can take btn value as a arguement and copy Hexa or Rgb code in clip board .
 * @param {btn} 
 */
function copyToClip(btn) {
  const parentDiv = btn.parentElement;
  const code = parentDiv.querySelector('.code').textContent;
  navigator.clipboard.writeText(code);

  // toast message
  selector('.msg').textContent = code;
  selector('.tost_msg').classList.add('active');
  setTimeout(() => {
    selector('.tost_msg').classList.remove('active');
  }, 3000)
}
/**
 * main function of all elements. 
 */
function sliderCode() {
  const redInput = selector('#redInputBx');
  const greenInput = selector('#greenInputBx');
  const blueInput = selector('#blueInputBx');
  const rgbTxt = selector('.rgbcode_bx .code');
  const hexTxt = selector('.hexacode_bx .code');
  const preview_bx = selector('.preview_bx');
  const slider_r = selector('.red').value
  const slider_g = selector('.green').value
  const slider_b = selector('.blue').value
  let hexR = Number(slider_r).toString(16);
  let hexG = Number(slider_g).toString(16);
  let hexB = Number(slider_b).toString(16);
  redInput.value = slider_r;
  greenInput.value = slider_g;
  blueInput.value = slider_b;
  const color = `rgb(${slider_r},${slider_g},${slider_b})`;
  preview_bx.style.background = color;
  rgbTxt.innerText = color;
  document.documentElement.style.setProperty('--border', color);
  if ((slider_r || slider_g || slider_b) < 16) {
      hexR = '0' + hexR;
      hexG = '0' + hexG;
      hexB = '0' + hexB;
  }
  hexTxt.innerText = `#${hexR}${hexG}${hexB}`
}



