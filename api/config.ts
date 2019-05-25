import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const HOST = publicRuntimeConfig.cdn_api
