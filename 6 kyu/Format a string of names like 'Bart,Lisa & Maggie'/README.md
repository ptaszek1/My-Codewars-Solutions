# :star:Format a string of names like 'Bart, Lisa & Maggie'.

Given: an array containing hashes of names
   
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
# :star:Examples:


>list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'<br>
>list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'<br>
> list([ {name: 'Bart'} ])
    // returns 'Bart'


