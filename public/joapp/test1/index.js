jo.load();

var messages= new joToolbar("Messages will go here...");

var mylog= function(text){messages.setData(text);};

// nested and chained goodness
var main = new joCard([
    new joTitle("Hello, Jo!"),
    new joMenu([
        "Yes",
        "No",
        "Maybe"
    ]).selectEvent.subscribe(function(i) {
        console.log("You picked " + i);
        mylog("You picked " + i);
    }),
    new joDivider(),
    new joButton("Awesome!").selectEvent.subscribe(function() {
        console.log("You clicked a button");
        mylog("You clicked a button");
    }),
    messages
]);

new joScreen(
    stack = new joStack().push(main));