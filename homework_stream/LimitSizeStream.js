const stream = require("stream");
const LimitExceededError = require("./LimitExceededError");

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    options.writableHighWaterMark = options.limit;
    super(options);
    this._limit = options.limit;
    this.count = 0;
  }

  _transform(chunk, encoding, callback) {
    this.count += Buffer.byteLength(chunk);
    if (this.count > this._limit) {
      callback(LimitExceededError.code);
    } else {
      callback(null, chunk);
    }
  }
}

module.exports = LimitSizeStream;
