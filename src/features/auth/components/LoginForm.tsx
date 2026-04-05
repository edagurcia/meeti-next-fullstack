"use client";

import {
  Form,
  FormLabel,
  FormInput,
  FormSubmit,
} from "@/src/shared/components/forms";

export const LoginForm = () => {
  return (
    <Form className="mt-10 space-y-3">
      <FormLabel htmlFor="email">Correo</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Eje: micorreo@correo.com"
      />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput type="password" id="password" placeholder="********" />

      <FormSubmit value="Iniciar sesión" />
    </Form>
  );
};
