describe("romanNum", function() {
    // it("returns CCC if the user enters 300", function() {
    //     expect(romanNum("300")).to.eql(["CCC"]);
    // });
    //
    // it("returns CD if the user enters 400", function() {
    //     expect(romanNum("400")).to.eql(["CD"]);
    // });

    // it("returns MD if the user enters 1500", function() {
    //     expect(romanNum("1500")).to.eql(["M", "D"]);
    // });
    //
    // it("returns D if the user enters 500", function() {
    //     expect(romanNum("500")).to.eql(["D"]);
    // });
    //
    it("returns L if the user enters 50", function() {
        expect(romanNum("1974")).to.eql(["M", "C", "M", "L", "X", "X", "I", "V"]);
    });
    //
    // it("returns MMM if the user enters 3000", function() {
    //     expect(romanNum("3000")).to.eql(["M", "M", "M"]);
    // });
});
