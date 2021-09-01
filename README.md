# PipersIP.github.io

## https://pipersip.github.io/PipersIP.github.io/ 


this should be migrated to the piperpat org


There are four types of cards on desktops:

<ol>
<li> Flip: Like a playing card - it has a front face and a back face. Clicking flips it over. Relies on flip.js (which calls modal.js) and flip.css </li>

<li>Flap: Like a calendar - it has three faces; a cover & two inside pages. But the cover opens *upwards*. Relies on flap.js (which calls modal.js) and flap.css  </li>

<li>Book: Like a book - also has three faces; a cover & two inside pages. This opens *sidewards*, like turning a page.</li>

<li>Static: Like a poster - it has one face. Clicking doesn't do anything.</li>
</ol>

On mobile screens, all of these are displayed as static modals. No exciting clicking. 

## What are all these files? 
<ul>
<li>*Index.html* is the previous version - it uses old-main.js and old-flappy.js. There's a bug with the flip cards I couldn't solve... so abandoned it </li>
<li>*Third-attempy.html* is the functional code for the current version, it shares the flip, flap, flop js and css with... </li>
<li>*Tree-tst.html* is the current version -- largely built from third-attempt. There are some screen re-sizing issues that need to be patched, but I can't do this with a laptop screen, I need to wait until we can go back to the office</li>
</ul>

On firefox, third-attempy.html & tree-tst doesn't show big screen display at all. It's always showing the modal. Bug with my complicated screen size logic?
