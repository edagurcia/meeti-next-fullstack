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
