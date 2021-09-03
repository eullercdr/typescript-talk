export class MissinParam extends Error {
  constructor (param: string) {
    super(`Missing param ${param}`)
    this.name = 'MissinParam'
  }
}
