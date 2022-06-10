<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conditionals</title>
    <script>
        const me = {
            name: "Wasim",
            age: 32,
            job: "TDP"
        }

        if (me.age > 25) {
            console.log("Getting old");
        } else {
            console.log("Still young");
        }

        const notMe = {
            name: "Barry",
            age: 22
        }
        undefined
        if (notMe.age > 25) {
            console.log("Getting old");
        } else {
            console.log("Still young");
        }

        console.log(me.age > 25 ? "Getting old" : "Still young");

        me.age == 32;

        me.age != 32;

        !true

        1 + 1 == 2;

        if (1 + 1 == 2) console.log("Yo");

        if (1 + 1 == "2") console.log("Yo");

        if (1 + 1 === "2") console.log("Yo");

        me.age > 25 ? "Getting old" : "Still young"

        const old = me.age > 25 ? "Getting old" : "Still young";

        if (me.age > 30) {
            console.log("Pretty old");
        } else if (me.age > 20) {
            console.log("Pretty young");
        } else {
            console.log("Young");
        }
        if (me.age) console.log("YO!");

        function truthyFalsey(val) {
            if (val) {
                console.log("Truthy");
            } else {
                console.log("Falsey");
            }
        }

        truthyFalsey(false);

        truthyFalsey("");

        truthyFalsey(null);

        truthyFalsey(undefined);

        truthyFalsey(0);

        Number.parseInt("4494")

        Number.parseInt("jgfghfbjfgh")

        truthyFalsey(NaN);

        typeof NaN

        truthyFalsey("false");

        function getNumber() {
            let num;
            do {
                let userInput = prompt("Please enter a number between 1 and 10");
                num = Number.parseInt(userInput);
            } while (!(num >= 1 && num <= 10));
            return num;
        }
    </script>
</head>

<body>
</body>

</html>