'use strict';
class BufferTool {
  constructor () {
    this.buffers = [];
    this.size = 0;
    // this.length = this.size;
    Object.defineProperty(this, 'length', {
      get: function () {
        return this.size;
      }
        //defalt value is:
        //   set: null,
        //   configurable: false,
        //   enumerable: false,

    });
    
  }
  concat (buffer) {
    this.buffers.push(buffer);
    this.size += buffer.length;
    return this;
  }
  empty () {
    this.buffers = [];
    this.size = 0;
    return this;
  }
  toBuffer () {
    return Buffer.concat(this.buffers, this.size);
  }
  toString (encoding) {
    this.toBuffer().toString(encoding);
  }
  load (stream, callback) {
    let that = this;
    stream.on('data', function (trunk) {
      that.concat(trunk);
    });
    stream.on('end', function () {
      callback(null, that.toBuffer());
    });
    stream.once('error', callback);
  }
}

module.exports = BufferTool;