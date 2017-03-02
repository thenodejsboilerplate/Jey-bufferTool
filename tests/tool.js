var BufferTool = require('../');
var should = require('should');
var fs = require('fs');

describe('BufferTool', function () {
  it('new', function () {
    var bt = new BufferTool();
    bt.buffers.should.have.length(0);
  });

  it('contact', function () {
    var bt = new BufferTool();
    var buffer = new Buffer('你好hello');
    bt.concat(buffer);
    bt.length.should.be.equal(11);
    bt.toBuffer().should.have.length(buffer.length);
    bt.buffers.should.have.length(1);
  });

  it('load', function (done) {
    var bt = new BufferTool();
    var reader = fs.createReadStream(__filename);
    var file = fs.readFileSync(__filename);
    bt.load(reader, function (err, buf) {
      should.not.exist(err);
      buf.should.have.length(file.length);
      buf.toString().should.be.equal(file.toString());
      done();
    });
  });
});