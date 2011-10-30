jo.load();

// nested and chained goodness
var main = new joCard([
    new joTitle("Hello, Jo!"),
    new joMenu([
        "Yes",
        "No",
        "Maybe"
    ]).selectEvent.subscribe(function(i) {
        console.log("You picked " + i);
    }),
    new joDivider(),
    new joButton("Awesome!").selectEvent.subscribe(function() {
        console.log("You clicked a button");
    })
]);

new joScreen(
    stack = new joStack().push(main));