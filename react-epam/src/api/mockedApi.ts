import { mockedResponse, MockedResponseType } from "./mockedResponse"

export const mockedApi = async (data: MockedResponseType = mockedResponse): Promise<MockedResponseType> => {
  try {
    const response = await Promise.resolve(data);
    return response;
  } catch (error) {
    throw error;
  }
}
