var screen, stack, card;

// initialize jo
jo.load();

// create our UI
screen = new joScreen(
    stack = new joStack().push(
        card = new joCard([
            new joTitle("jo Examples"),
            new joCaption("Hello World!"),
            new joDivider(),
            new joButton("Kitchensink").selectEvent.subscribe(function() {
                new joHTML("/joapp/kitchensink/index.hml");
            })
        ])
    )
);
