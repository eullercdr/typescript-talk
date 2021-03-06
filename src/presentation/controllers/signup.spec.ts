import { MissinParam } from '../../error/missing-param'
import { SignUpController } from './signup'

const makeSut = (): any => {
  return new SignUpController()
}

describe('Signup Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissinParam('name'))
  })
})
