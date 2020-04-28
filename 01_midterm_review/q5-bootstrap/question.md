What screen sizes are supported by bootstrap?
- xs for phones 768px
- sm for tablets >= 768px
- md for small laptops >= 900px
- lg for laptops and desktops of 1200px

<!-- Correct, there is also an xl class -->

Please describe what would be the output of the following code snippet on mobile phone and on desktop computer, when using Twitter Bootstrap?  What would you expect to see?

-For phones the output will take all 12 columns of the grid and will fit to screen since its supports xs size screen of 768 or less px.
- For desktops the content will take 3 columns of the gird, will display screen width of whatever PX it is.

<!-- Correct, but what does "will display screen width of whatever PX it is." refer to? -->

```
    <div class="row">
        <div class="col-xs-12 col-md-3">Ruby Red</div>
        <div class="col-xs-12 col-md-3">Navy Blue</div>
        <div class="col-xs-12 col-md-3">Lime Green</div>
        <div class="col-xs-12 col-md-3">Egg Nog</div>
    </div>
```
