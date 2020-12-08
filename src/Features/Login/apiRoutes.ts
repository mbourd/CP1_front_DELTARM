import { apiRouter, security, User } from 'Services';

interface IApiLogin {
  jwt: string;
}

apiRouter.addRoute({
  name: 'login',
  path: '/session/open',
  method: 'post',
  handler: (data) => {
    const { jwt } = data.data as IApiLogin;

    const user = new User();
    user.fromJwt(jwt);

    security.persistUser(user);
  },
});
