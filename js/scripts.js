var romanNum = function(number) {
    var output = [];
    var remainder = number;
    var m = 0;
    var d = 0;
    var c = 0;
    var l = 0;
    var x = 0;
    var v = 0;
    var i = 0;

    switch (number > 0) {

        case (number >= 1000):
            m = Math.floor(number / 1000);
            remainder = number % 1000;
            if (m < 4) {
                for (var i = 1; i <= m; i++){
                    output.push('M');
                }
            } else {
                return "This number is too big for Romans";
            }
            // console.log(m);

        case (remainder >= 500):
            d =  Math.floor((number - (m * 1000)) / 500);
            remainder = (number - (m * 1000)) % 500;
            output.push("D");
            // console.log(d);

        case (remainder >= 100):
            c = Math.floor((number - (d * 500 + m * 1000)) / 100);
            remainder = (number - (d * 500 + m * 1000)) % 100;
            if (c > 3) {
                var d_count = 1;
                c -= 3;
                for(var i = 1; i <= c; i++){
                    output.push('C');
                    }
                    output.push('D');
            } else {
                for (var i = 1; i <= c; i++) {
                    output.push('C');
                }
                // console.log(c);
            }

        case (remainder >= 50):
            // console.log(remainder);
            l = Math.floor((number - (c * 100 + d * 500 + m * 1000)) / 50);
            remainder = (number - (c * 100 + d * 500 + m * 1000)) % 50;
            output.push("L");


        case (remainder >= 10):
            var x = Math.floor((number - (l * 50 + c * 100 + d * 500 + m * 1000)) / 10);
            var remainder = (number - (l * 50)) % 10;
            if (x > 3) {
                var l_count = 1;
                x -= 3;
                for(var i = 1; i <= x; i++){
                    output.push('X');
                    }
                    output.push('L');
            } else {
                for (var i = 1; i <= x; i++) {
                    output.push('X');
                }
                // console.log(c);
            }

        case (remainder >= 5):
            var v = Math.floor((number - (x * 10 + l * 50 + c * 100 + d * 500 + m * 1000)) / 5);
            var remainder = (number - (x * 10)) % 5;
            output.push("V");

        case (remainder >= 1):
            var i = Math.floor((number - (v * 5 + x * 10 + l * 50 + c * 100 + d * 500 + m * 1000)) / 1);
            var remainder = (number - (v * 5)) % 1;
            if (i > 3) {
                var l_count = 1;
                i -= 3;
                for(var o = 1; o <= i; o++){
                    output.push('I');
                    }
                    output.push('V');
            } else {
                for (var o = 1; o <= i; o++) {
                    output.push('I');
                }
            }

        break;
}
console.log(output);

return output;
};
