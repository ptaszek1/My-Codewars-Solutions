<h1>Format a string of names like 'Bart, Lisa & Maggie'.</h1>

<p>Given: an array containing hashes of names
   
   Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.</p>
<h2>Examples:</h2>

<ul>
<li>list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'</li>
<li>list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'</li>
<li>list([ {name: 'Bart'} ])
    // returns 'Bart'</li>
</ul>

