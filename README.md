    $('#test').nth();

It will add classes to the elements like...

    <ol id="test" class="indexed">
        <li class="nth-1 nth-2n-plus-1 nth-2n-minus-1 nth-minus-n-plus-2 nth-3n-plus-1 nth-3n-minus-2 nth-minus-n-plus-3 nth-4n-plus-1 nth-4n-minus-3 nth-minus-n-plus-4 nth-5n-plus-1 nth-5n-minus-4 nth-minus-n-plus-5">item 1</li>
        <li class="nth-2 nth-2n nth-minus-n-plus-2 nth-3n-plus-2 nth-3n-minus-1 nth-minus-n-plus-3 nth-4n-plus-2 nth-4n-minus-2 nth-minus-n-plus-4 nth-5n-plus-2 nth-5n-minus-3 nth-minus-n-plus-5">item 2</li>
        <li class="nth-3 nth-2n-plus-1 nth-2n-minus-1 nth-3n nth-minus-n-plus-3 nth-4n-plus-3 nth-4n-minus-1 nth-minus-n-plus-4 nth-5n-plus-3 nth-5n-minus-2 nth-minus-n-plus-5">item 3</li>
        <li class="nth-4 nth-2n nth-3n-plus-1 nth-3n-minus-2 nth-4n nth-minus-n-plus-4 nth-5n-plus-4 nth-5n-minus-1 nth-minus-n-plus-5">item 4</li>
        <li class="nth-5 nth-2n-plus-1 nth-2n-minus-1 nth-3n-plus-2 nth-3n-minus-1 nth-4n-plus-1 nth-4n-minus-3 nth-5n nth-minus-n-plus-5">item 5</li>
    </ol>