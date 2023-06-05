export class NotFoundError extends Error {
  constructor(message?: string) {
    super(message || "Entity could not be found.")
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}
