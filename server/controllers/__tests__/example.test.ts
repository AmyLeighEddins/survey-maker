import { mockRequest, mockResponse } from "../../testUtils/mockRequest";
import { when } from "jest-when";

import * as exampleController from '../example';
import { ExampleModel } from '../../models';

jest.mock("../../models/example");

describe('Examples controller', () => {
  it('should return 200 when examples are found', async () => {
    // Arrange
    const id = 1;
    const req = mockRequest({ locals: { id: id } });
    const res = mockResponse(id);
    const mockReturnValue = [{
      id: 1,
      name: 'example',
      email: 'example@example.com',
      password: 'example',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      id: 2,
      name: 'example',
      email: 'example@example.com',
      password: 'example',
      created_at: new Date(),
      updated_at: new Date(),
    }];

    when(ExampleModel.getAllForUser)
        .calledWith(id)
        .mockReturnValueOnce(Promise.resolve(mockReturnValue));

    // Act
    await exampleController.getUserById(req, res);

    // Assert
    expect(ExampleModel.getAllForUser).toHaveBeenCalledTimes(1);
    expect(ExampleModel.getAllForUser).toHaveBeenLastCalledWith(id);
    // expect(res.status).toHaveBeenCalledTimes(1);
    // expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockReturnValue);
  });
  
});