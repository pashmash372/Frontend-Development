
https://codepen.io/enxaneta/full/adLPwv/


https://jsfiddle.net/ar90xj86/3/
https://jsfiddle.net/h1uydxep/2/
https://jsfiddle.net/fm94ehou/
https://jsfiddle.net/7jucensr/18/



https://jsfiddle.net/8yu26fpx/2/



https://flexboxfroggy.com/


![Alt text](image.png)

![Alt text](image-1.png)

now elements are completely aligned.

![Alt text](image-2.png)

/* 
    four values can be in position 
    top left right bottom
*/

![Alt text](image-3.png)

we dont usually dont use postion relative mostly use but we use position absolute 

position absolute
---------------
I will position the element on which this property is given based on the last position element or the window itself.

last position element means the element which is the parent of this element. 
follows the hierarchy chain of the elements.

without postion absolute in main element this will be the result
![Alt text](image-4.png)

with position absolute in main element this will be the result

![Alt text](image-5.png)

what it means is this element has become oprhan 
it is come out of parent element , it is not caring about the parent element anymore.

I am not going to care about the parent element anymore.

position absolute postions itself to the nearest ancestor element which has position value.


.main-element {
  position: absolute;
  top: 1px;
  background-color: yellow;
  padding: 10px;
  /* top: 0px; */
  /* left: 0px; */
  /* right:0px; */
  /* bottom:0px; */
 
}

![Alt text](image-6.png)


.main-element {
  position: absolute;
  /* top: 1px; */
  background-color: yellow;
  padding: 10px;
  top: 0px;
  left: 0px;
  /* right:0px; */
  /* bottom:0px; */
 
}


![Alt text](image-8.png)

.main-element {
  position: absolute;
  /* top: 1px; */
  background-color: yellow;
  padding: 10px;
  top: 0px;
  left: 0px;
  right:0px;
  /* bottom:0px; */
 
}
![Alt text](image-7.png)

.main-element {
  position: absolute;
  /* top: 1px; */
  background-color: yellow;
  padding: 10px;
  top: 0px;
  /* left: 0px; */
  right:0px;
  /* bottom:0px; */
 
}
![Alt text](image-9.png)

.main-element {
  position: absolute;
  /* top: 1px; */
  background-color: yellow;
  padding: 10px;
  top: 0px;
  /* left: 0px; */
  right:0px;
  bottom:0px;
 
}

![Alt text](image-10.png)


.main-element {
  position: absolute;
  /* top: 1px; */
  background-color: yellow;
  padding: 10px;
  /* top: 0px; */
  /* left: 0px; */
  /* right:0px; */
  bottom:0px;
 
}

![Alt text](image-11.png)

20.3 rem is 203 px 

rem is relative to the root element which is html element


.main-element {
  position: sticky;
  top: 0px;
  background-color: yellow;
  padding: 10px;
  /* top: 0px; */
  /* left: 0px; */
  /* right:0px; */
  bottom:0px;
}

as I am scrolling out of the window the element is going to stick to the top of the window.

![Alt text](image-12.png)


sticky is a combination of relative and fixed position.



![Alt text](image-13.png)


for 99% of the time we use position relative for  position absolute , like for parent hierachy we use position relative and for child we use position absolute.



![Alt text](image-14.png)


![Alt text](image-15.png)