import { http, HttpResponse } from 'msw';
import { MOCK_SINGLE_USER } from './users/mockSingleUser';

const BASE_API_URL = process.env.API_URL;
 
export const handlers = [
  http.get(`${BASE_API_URL}/user`, () => {
    return HttpResponse.json(MOCK_SINGLE_USER)
  }),
]