module.exports = class SlateRcError extends require('@by-association-only/slate-error') {
  constructor(message) {
    // Providing default message and overriding status code.
    super(message || 'There was an error with Slate Analytics');
  }
};
