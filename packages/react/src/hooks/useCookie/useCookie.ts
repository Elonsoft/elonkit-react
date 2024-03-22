import { useCallback, useMemo, useState } from 'react';

interface Attributes {
  expires?: string;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'None' | 'Lax' | 'Strict';
}

/**
 * The hook that returns the current value of a cookie, a callback to update the cookie and a callback to remove the cookie.
 * @param name The name of the cookie.
 * @returns The current value of a cookie, a callback to update the cookie and a callback to remove the cookie.
 */
export const useCookie = <T extends string | null = null>(
  name: string,
  defaultValue?: T
): [string | T, (data: string, attributes?: Attributes) => void, () => void] => {
  const initialValue = useMemo(() => {
    const cookie = document.cookie.split('; ').find((c) => c.startsWith(`${encodeURIComponent(name)}=`));
    if (cookie) {
      return decodeURIComponent(cookie.slice(cookie.indexOf('=') + 1));
    }
    return (defaultValue ?? null) as T;
  }, []);

  const [value, setValue] = useState<string | T>(initialValue);

  const update = useCallback((data: string, attributes?: Attributes) => {
    const cookie: string[] = [];
    cookie.push(`${encodeURIComponent(name)}=${encodeURIComponent(data)}`);

    if (attributes?.expires) {
      cookie.push(`expires=${attributes.expires}`);
    }
    if (attributes?.maxAge) {
      cookie.push(`max-age=${attributes.expires}`);
    }
    if (attributes?.path) {
      cookie.push(`path=${attributes.path}`);
    }
    if (attributes?.domain) {
      cookie.push(`domain=${attributes.domain}`);
    }
    if (attributes?.secure) {
      cookie.push(`secure`);
    }
    if (attributes?.sameSite) {
      cookie.push(`samesite=${attributes.sameSite}`);
    }

    document.cookie = cookie.join('; ');
    setValue(data);
  }, []);

  const remove = useCallback(() => {
    update('', { expires: new Date(0).toUTCString() });
    setValue('');
  }, []);

  return [value, update, remove];
};
