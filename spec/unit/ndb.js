describe("Node Debugger", function() {
  describe("version", function() {
    it("should be at 0.1.3", function() {
      ndb.version.should.equal("0.1.3");
    });
  });

  it("should have verbose off by default", function() {
    ndb.reset();
    ndb.verbose.should.equal(false);
  });
});
