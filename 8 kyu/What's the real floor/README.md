# :star:What's the real floor?

Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).

Write a function that given an American floor (passed as an integer) returns the real floor.
Moreover, your function should work for basement floors too: just return the same value as the passed one.

# :star:Examples:

> getRealFloor(1) == 0  <br>
getRealFloor(0) == 0 <br>
getRealFloor(5) == 4 <br>
getRealFloor(15) == 13 <br>
getRealFloor(-3) == -3