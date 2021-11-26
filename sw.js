const STATIC_CACHE_NAME = 'static-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-v1';
const INMUTABLE_CACHE_NAME = 'inmutable-v1';

const STATIC_CACHE_URL = [
    'config/config.php',
    'config/db.php',
    'css/style.css',
    'favicon/favicon-256x256.png',
    'html/body-practica1.html',
    'html/body-practica2.html',
    'html/body-practica3.html',
    'img/404.jpg',
    'img/iconos/16x16.png',
    'img/iconos/32x32.png',
    'img/iconos/48x48.png',
    'img/iconos/64x64.png',
    'img/iconos/128x128.png',
    'img/iconos/256x256.png',
    'js/app.js',
    'php/body-index.php',
    'php/head.php',
    'php/nav.php',
    'Practica1/index.php',
    'Practica1/SQLFunctions.php',
    'Practica1/app.js',
    'Practica2/index.php',
    'Practica2/SQLFunctions.php',
    'Practica2/app.js',
    'Practica3/index.php',
    'Practica3/SQLFunctions.php',
    'Practica3/app.js',
    '404.php',
    'index.php',
    'Practica1/SQLFunctions.php?leerLeds=true',
    'Practica3/SQLFunctions.php?leerBotones=true',
];

const INMUTABLE_CACHE_URL = [
    'https://fonts.googleapis.com/css2?family=Comforter&family=Dancing+Script&display=swap',
    'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css',
    'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
    'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
    'https://code.jquery.com/jquery-3.5.1.min.js'
];
self.addEventListener('install', event => {
    const STATIC = caches.open(STATIC_CACHE_NAME).then(cache => cache.addAll(STATIC_CACHE_URL));
    const INMUTABLE = caches.open(INMUTABLE_CACHE_NAME).then(cache => cache.addAll(INMUTABLE_CACHE_URL));
    event.waitUntil(Promise.all([STATIC, INMUTABLE]));
});

self.addEventListener('activate', event => {
    const respuesta = caches.keys().then(keys => {
        keys.forEach(key => {
            if (key !== STATIC_CACHE_NAME && key.includes('static'))
                return caches.delete(key);
        });
    });
    event.waitUntil(respuesta);
});

self.addEventListener('fetch', event => {
    const ANSWER =  caches.match(event.request).then((answers) => {
         if(answers) return answers;
         fetch(event.request).then((answer) => { 
             caches.open(DYNAMIC_CACHE_NAME).then((cache) => { 
                 cache.put(event.request, answer);
             });     
         });
         return answer.clone();
     }).catch( (err) => {
        if (event.request.headers.get('accept').includes('text/html')) 
            return caches.match('404.php');
     });
     event.respondWith(ANSWER);
 });