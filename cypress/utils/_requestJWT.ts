import { _getEnv } from './_getEnv';

export function _requestJWT(
  user_id: number = _getEnv('user_id'),
  domain: string = _getEnv('url_cp1_back'),
  // domain = 'https://controle-api-test.deltarm.com:8082',
  cli_id: number = _getEnv('cli_id'),
  context: string = _getEnv('context'),
) {
  const formData = new FormData();
  formData.set('key1', _getEnv('key1_request_jwt'));
  formData.set('key2', _getEnv('key2_request_jwt'));
  cy.request({
    method: 'GET',
    url: `${domain}/session/nbD_DApm7uxb_ehVW9oP?cli_id=${cli_id}&user_id=${user_id}&context=${context}`,
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .its('body')
    .then((body: any) => {
      const bodyString = Cypress.Blob.arrayBufferToBinaryString(body);
      const {
        data: { jwt },
      } = JSON.parse(bodyString);
      Cypress.env('JWT', jwt);
      // cy.writeFile('./cypress/fixtures/jwt-cp1.txt', jwt as string);
    });
}
