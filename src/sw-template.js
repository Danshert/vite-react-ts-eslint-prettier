/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js',
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;

const cacheFirst = [
	'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
];

registerRoute(({ url }) => {
	if (cacheFirst.includes(url.href)) return true;
	return false;
}, new CacheFirst());
