import { jwtDecode } from 'jwt-decode';

export function getUserFromToken(accessToken?: string) {
  if (!accessToken?.length) {
    return {
      user: null,
    };
  }
  const decoded = jwtDecode(accessToken);
  if (decoded.sub && decoded.exp) {
    if (Date.now() >= decoded.exp * 1000) {
      return {
        user: null,
      };
    }
    return {
      user: {
        id: decoded.sub,
      },
    };
  } else {
    return {
      user: null,
    };
  }
}