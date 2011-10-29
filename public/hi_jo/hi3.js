// plain container
var x = new joContainer();

// HTML or plain text
var y = new joContainer("Some HTML");

// HTMLElement
var w = new joContainer(joDOM.get("mydiv"));

// nested inline structure with text, HTML, joViews or HTMLElements
var z = new joContainer([
    new joTitle("Hello"),
    new joList([
        "Red",
        "Green",
        "Blue"
    ]),
    new joFieldset([
        "Name", new joInput(joPreference.bind("name")),
        "Phone", new joInput(joPreference.bind("phone"))
    ]),
    new joButton("Done")
]);

// set an optional title string, used with joNavbar
z.setTitle("About");

joDOM.create(tag, style)