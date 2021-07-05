<!-- Specificity -->
CSS selectors have a certain specifity. Inline style has top most specificity and Tag has the least.
If two selectors have same specificity, one which is written later in the CSS file is applied.
Inline style = 1000
ID Selectors = 100
Class Selectors = 10
Tag Selectors = 1

<!-- **************Combinators************ -->
+ Adjacent Sibling = Should be adjacent and should come later than the first element
~ General Sibling = Can be any sibling with same parent and should come later than the first element
> Child = Direct Child
[space] Descendant  = Any level deep Child

<!-- **********box-sizing***************** -->
A) box-sizing: content-box;
The width and height properties include the content, but do not include the padding, border, or margin. 
For example, .box {width: 350px; border: 10px solid black;} renders a box that is 370px wide.

B) box-sizing: border-box;
The width and height properties include the content, padding, and border, but do not include the margin.
For example, .box {width: 350px; border: 10px solid black;} renders a box that is 350px wide, with the area for content being 330px wide.

<!-- *******inline-block************* -->
Inline elements don't take margin-top, margin-bottom, width and height like block-level elements. To make them behave like block elements we set display=block; But then they'll take the whole block. So we use mixture of block and inline. display=inline-block;

<!-- ***********Pseudo*************** -->
pseudo class is special state of an element; div:hover
pseudo element is special part of an element; p::first-letter, a::after, a::before
<!-- ********** -->
vertical-align: middle; <!-- vertical alignment of an inline, inline-block -->
text-align:center; <!-- horizontal alignment of a block element -->
margin:auto; <!-- works on a block element which has a width assigned to it. -->
float: right; <!--use it less. It removes element from document flow. use "clear: both" to reserve free space left by it -->
<!-- ***********Position Property ***************** -->
1) static -- 
container block is a closest ancestor (content only of ancestor) which is block level element.
Default property. Margin, top, left bottom, etc. properties don't work.

3) relative -- 
container block is a closest ancestor (content only of ancestor) which is block level element.
Doesn't remove element from document flow. 
Positioning context is element's default position.

3) absolute -- 
container block is a closest ancestor (content only of ancestor + padding of ancestor) which is is positioned.
Removes the element from document flow. 
Positioning context is closest positioned parent otherwise HTML tag if no parent is positioned.

4) fixed -- 
For a fixed element the container block is always the view port.
Removes the element from document flow. Positioning context is viewport. 
Element behaves like inline-block and takes only as much space as occupied by its contents.

5) sticky -- 
Doesn't remove element from document flow. 
Positioning context is viewport. 
Hybrid of reltaive and fixed. 
Element never moves out of its parent if scrolled outside.
<!-- ***********Z-index********** -->
Z-index works on elemets which have a position property applied on them.
If two positioned element have same z-index then the one which falls later in the HTML file will be shown over other element.

<!-- *****box-shadow***** -->
/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

<!-- ************************************************** IMAGES ************************************************** -->

fix the width of the container and then give 100% width to the image which is inside that container.
If the image is inside an inline element then image will take its default dimensions. can be made inline-block to make it work.
If the image is inside a block element then image will behave according to container's dimensions. 
background:url('freedom.jpg');
background-size: widht% height%;
background-repeat: no-repeat;
background-position: x-axis y-axis; 
<!-- *******background-size******* -->
<!-- contain -->
Scales the image as large as possible within its container without cropping or stretching the image. If the container is larger than the image, this will result in image tiling, unless the background-repeat property is set to no-repeat.
<!-- cover -->
Scales the image as large as possible to fill the container, stretching the image if necessary. If the proportions of the image differ from the container element, it is cropped either vertically or horizontally so that no empty space remains.

<!-- ***** background-position***** -->
background-position: moves the image on x-axis and y-axis
takes percentage.
background-position: 10%;  -- only 10% of extra content will be cropped from left and 90% will be cropped from right.
background-position: 80%;  -- only 80% of extra content will be cropped from left and 20% will be cropped from right.
background-position: 100%; -- All 100% of extra content will be cropped from left and 0% will be cropped from right.
background-position: 100% 20%; -- 100% corroped from left , 0% from right. and 20% will be cropped from top and 80% from bottom.

<!-- **** gradient**** -->
Trated as images of mixed colors.
<!-- linear-gradient(to bottom, color); -->
background-image: linear-gradient(direction, start-color,end-color);
<!-- radial-gradient -->
background-image: radial-gradient(shape, start-color,end-color);

<!-- ************************************************** SIZES & UNITS ************************************************** -->
pixel: px;
percentage: %;
root em: rem; // font-size
em: em;  // font-size
viewport height: 100vh; // takes height of viewport
viewport width: 90vw; // takes width of viewport

<!-- ************************************************** Responsive Design ************************************************** -->
1) <meta name="viewport" content="width=device-width, initial-scale=1.0">
Add this tag to index to detect actual width of device in pixels.

2) media-queries


<!-- ************************************************FlexBox************************************************ -->
Create a container with display:flex property.
<!-- properties for container -->
1) display: flex/inline-flex; 
    a) flex: container behaves like block element.
          container covers entire row in viewport.
          container doesn't overflow. items can overflow from container and viewport if no space left for items on viewport.
    b) inline-flex: container behaves like inline element.
                 container doesn't cover entire row. takes as much space as required by items.
                 container will overflow along with items if no space left for items on viewport.
2) flex-direction:
    a) row:
    b) column:
    c) row-reverse:
    d) column-reverse:
3) flex-wrap: 
    no-wrap: flex-items will not be moved to new line even if there is no space left for them.
    wrap: flex-items will be moved to new line if there is no space left for them.
4) justify-content: aligns items according to main axis
    a) flex-start: begining of main-axis
    b) flex-end: end of main-axis
    c) center: center of main-axis
    d) space-between: Items will have space between them
    e) space-around: Items will have space before, between, and after them
    f) space-evenly: Items will have equal space around them
5) align-items: aligns items according to cross axis
    a) stretch: all items take height of tallest item in the container except the one which has a height given to it explicitly.
    b) center: items will be aligned to the center and will take as much height as their content needs.
    c) flex-start: items are positioned at the begining of cross-axis of flex container.
    d) flex-end: items are positioned at the end of cross-axis of flex container.
6) align-content: There must be multiple lines of items for this property to have any effect!
7) flex-flow:

<!-- Properties for items -->
1) order: numbers given to items. items are sorted on the basis of order in ascending order.
2) flex-grow: default value is 0.
    how much (part) of the left-over space should be alotted to the current item.
3) flex-shrink: default value is 1. which means item can be shrinked less than it given width
             value 0 means items cannot be shrinked
             how much (part) of the space should be reduced from the current item if screen size is reduced.
4) align-self: works on flex-item to align them on the cross-axis
5) flex-basis: tells the size of item along main-axis. i.e height or widht depending on the flex-direction. it overwrites 
            the height/Width given to the item explicitly.


<!-- *************************************** Grid ****************************************************** -->
elements which are non-static are not considered a part of the grid and hence not considered as rows for grid.
<!-- container -->
1) display: grid;
2) grid-template-columns: 1fr 2fr 3fr;
    grid-template-columns:repeat(4, 25%); <!-- 4 columns with 25% width -->
    grid-template-columns:repeat(2, 20% 25%); <!-- repeat pattern of 20% and 25% columns twice. Total 4 columns -->

3) grid-template-rows: 1rem 2rem;
    grid-template-rows: minmax(1rem, 5rem)<!-- minimum height and maximum height -->

4) grid-gap: 20px; gap between rows and columns
5) grid-column-gap: 20px 10px;
6) grid-row-gap; 20px;


<!-- Elements -->
giving negative values to column/row-start/end will consider the element to from end of row/column
grid-column-start: 3;
grid-column-end: 5;
grid-row-start: 1;
grid-row-end: 3;
