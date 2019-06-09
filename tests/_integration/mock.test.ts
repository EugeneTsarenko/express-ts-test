import { Misc } from '../misc';
import { AxiosError } from 'axios';
  
let misc: Misc;
  

let axios: any;

beforeAll((done: any) => {
  misc = new Misc();
  misc.startServer();
  axios = misc.getAxios();

  done();
});

afterAll((done: any) => {
  misc.closeServer();

  done();
});

describe('Mock', () => {
  test('Get start page', async () => {
    const response = await axios.get('/').catch((e:AxiosError) => e.response);

    expect(response.status).toBe(200);
  });
});
  