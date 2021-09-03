export class SignUpController {

  handle(httpRequest: any): any {
    try {
      if (!httpRequest.body.name) {
        return {
          statusCode: 400,
          body: new Error()
        }
      }
      if (!httpRequest.body.email) {
        return {
          statusCode: 400,
          body: new Error()
        }
      }
      if (!httpRequest.body.telefone) {
        return {
          statusCode: 400,
          body: new Error()
        }
      }
      if (!httpRequest.body.celular) {
        return {
          statusCode: 400,
          body: new Error()
        }
      }
      if (!httpRequest.body.password) {
        return {
          statusCode: 400,
          body: new Error()
        }
      }
      return {
        statusCode: 200
      }
    } catch (error) {
      return new Error();
    }
  }
}
