# :star:Training JS #14: Methods of Number object--toString() and toLocaleString()

Training JS #14:
Methods of Number object--toString() and toLocaleString()

This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:

# :star:Examples:

    var num=111;
    var a=num.toString(), 
        b=num.toLocaleString(), 
        c=num+""
    console.log([a,b,c])   //put them to an array, we can see the quotes
    //output: [ '111', '111', '111' ]