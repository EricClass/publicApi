class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperation = true;
  
      // A very confusing line of code
      // So that this does not appear in the stackTrace
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;
  