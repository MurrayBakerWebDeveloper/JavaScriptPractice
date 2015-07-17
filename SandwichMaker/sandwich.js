$(document).ready(function () {
    var finalOrder = '';
    var basePrice = 7.59;
    //get values from radio box elements
    var length = $('input[name=length]:checked', '#myForm').val();
    var bread = $('input[name=bread]:checked', '#myForm').val();
    var cheese = $('input[name=cheeses]:checked', '#myForm').val();

    //create alert string with updated total when order button is clicked
    $("#order").click(function () {
        //create array of checked items
        var checkedValues = $('input:checkbox:checked').map(function () {
            return this.value;
        }).get();
        //create string of checked items
        //if items are upcharges then increase cost by 0.50 cents
        checkedValues.forEach(function (elem) {
            finalOrder += elem + ", ";
            if (elem === 'Avocado' || elem === 'Proscuttio' || elem === 'Bacon' || elem === 'Sliced Egg') {
                basePrice += .5;
            }
        });
        //remove last space and comma from string
        finalOrder = finalOrder.slice(0, -2);
        //create output string for alert
        finalOrder = "You ordered a " + length + " sandwich  on " + bread + " with " + cheese +
            " cheese and " + finalOrder + "\n\nTotal Cost: " + basePrice;
        alert(finalOrder);
    });
    //refresh page to clear form if clear button is clicked
    $("#clear").click(function () {
        location.reload(true);
    });

});

