# MEETI - Fullstack project con NextJS

Crea Aplicaciones Profesionales Con Next.js, Better Auth, Drizzle ORM, UploadThing, Pusher, TS, Zod, Redis y mucho más

## Crear un heading dinámico

Acepta un tipo de TAG Hx, clases y texto
[x] @/src/shared/components/typography/Heading.tsx

## Crear un titulo de pagina dinámico utilizando metadata de Next

Función que acepta un string con el titulo de la pagina o a donde se desee utilizar.
[x] @/src/shared/utils/metadata.ts

## Organización por features

Es importante ordenar los proyectos y un método fácil es ordenarlo por features:

EJE: Auth, Dashboard, Accounts, Users

y Adentro de cada feature agregar sus componentes, hooks, etc, si ocurre que otro proyecto comparte algunas características es mas fácil copiar y hacerlo funcionar.

## features / components

Se creo una serie de componentes reutilizables para los formularios.

## schemas

Se utiliza zod para crear las validaciones, schemas y types para los formularios, una validación interesante es la comprobación de que 2 campos sean iguales ademas de cumplir
con el tamaño requerido.

[x] @/features/auth/schemas

## Instalaciones de librerías necesarias para ORM y base de datos NEON

npm i drizzle-orm pg dotenv
npm i -D drizzle-kit @types/pg tsx

### drizzle commands

npx drizzle-kit generate
(crea los archivos SQL para luego ejecutarlos)

npx drizzle-kit migrate
(ejecuta migraciones generadas en la base de datos)
(Mantiene un historial de que migraciones ya se aplicaron)

npx drizzle-kit push
(Sin pasar por archivos de migraciones sincroniza directamente el esquema de TypeScript con la base de datos, es util para desarrollo rápido pero no es recomendable en producción porque no guarda historial de cambios)

npx drizzle-kit studio
(Abre una interfaz visual en el navegador para inspeccionar y gestionar la base de datos)

## Better Auth

npx @better-auth/cli@latest generate
(genera los schemas de better auth, los crea en el raíz, debemos moverlo a nuestro folder de schemas)
