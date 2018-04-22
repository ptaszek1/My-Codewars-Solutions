<h1>String cleaning</h1>

<p>Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text</p>
<h2>Examples:</h2>
<ul>
<li>stringClean('! !') == '! !'</li>
<li>stringClean('123456789') == ''</li>
<li>stringClean('This looks5 grea8t!') == 'This looks great!'</li>
</ul>

