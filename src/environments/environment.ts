import { Environment } from '@abp/ng.core';

const baseUrl = 'https://jaysonbarrina-bookstore.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://jaysonbarrina-001-site1.itempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'http://jaysonbarrina-001-site1.itempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
