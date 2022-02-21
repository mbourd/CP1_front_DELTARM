import { User } from './User';

describe('Security/User', () => {
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQ0ODQ4MTEsImV4cCI6MTYwNDQ4NTQxMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiamVhbl9tb3VzdCIsImZpcnN0TmFtZSI6IkplYW4iLCJsYXN0TmFtZSI6Ik1vdXN0aXF1ZSIsImNvbXBhbnlOYW1lIjoiQ29tcGFueSAwIn0.FHmx_Do4RPgI8uncnpelYVmnGdcqKj0PYKHi8oZR1NhZuKSozFaveT0WFA1kTHQmdOLfcThmtgKyB0rmCQQAg--v19SIisQCDmUDNwRHxIxq8JGulhNE_R8JWJDcqaLLttarxTHf-qoSJcubJ4UME0Ajx6mwPYzIMgfg4I_lZc0oo2nez4ybO_OSoiiCJkdZyKbBFafmV5wUKzvUOOQHeGiNBrAu1sSl8gqDty-exuTY_rSzfL5ALdgqrcx7r42uwKeM6FI0y8bFvvGHs6UdfLuDF5mGzOtC_7eplGQr6xKdKgwAg7wD4AQFdAsWoyEgP_JrdP0tz5rN10dU29KkFVNGtrIVpoUNGmJpB248lF9MxhIrunuTH2tzWK1fmOVYwYx51dztexW6oWr0RuppDPJ8RADjkn2jcR5uiYauSKTz-d2f9kJm51pRiDfM_NpHO2G-v4iefWYZ0cmAdimpfaruSo7m7XZ1C8zKRWURaQP2APnVHHaaFMEqde1KaoxUEIkc4Jj_FmjcbCWp1CjloNcEAyipxVPLtXFLXkv5eTRwc2AmbOxRezLTZudut0oozwEMIXM_pWCq8NvgTS7bcDSnXQ5YdkCP2iOPyYs7nxe103DTC33a77FQioEHgPlViJTZySjVJtjIeNP9nxjnPbgyTTx4F-zK-lfXTpdnpyo';

  const user = new User();

  it('should not have token', () => {
    expect(user.hasJwt()).toBeFalsy();
  });

  it('should have token', () => {
    user.setJwt(token);
    expect(user.hasJwt()).toBeTruthy();
  });

  it('should session not expired', () => {
    expect(user.isSessionExpired()).toBeFalsy();

    const today = new Date();
    user.setExpireAt(new Date(today.getTime() + 3600 * 1000));
    expect(user.isSessionExpired()).toBeFalsy();
  });

  it('should session expired', () => {
    user.setExpireAt(new Date('10 06 2019'));
    expect(user.isSessionExpired()).toBeTruthy();
  });

  it('should jwt not expired', () => {
    user.setJwt(null);
    expect(user.isJwtExpired()).toBeFalsy();
  });

  it('should jwt expired', () => {
    user.setJwt(token);
    expect(user.isJwtExpired()).toBeTruthy();
  });

  const user2 = new User();
  user2.fromJwt(token);

  it('should have role [ROLE_USER]', () => {
    expect(user2.getRoles()).toStrictEqual(['ROLE_USER']);
  });

  it('should not have email', () => {
    expect(user2.getEmail()).toBeNull();
  });

  it('should have username', () => {
    expect(user2.getUsername()).toStrictEqual('jean_moust');
  });

  it('should have a fr lang', () => {
    expect(user2.getLang()).toStrictEqual('fr');
  });

  it('should have a en lang', () => {
    user2.setLang('en');
    expect(user2.getLang()).toStrictEqual('en');
  });

  it('should have expireAt', () => {
    expect(user2.getExpireAt()).not.toBeNull();
  });

  it('should have jwt', () => {
    expect(user2.getJwt()).not.toBeNull();
  });

  it('should not logged in', () => {
    expect(user2.isLogged()).toBeFalsy();
  });
});
