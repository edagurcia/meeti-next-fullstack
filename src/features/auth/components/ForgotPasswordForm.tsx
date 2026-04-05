"use client";

import {
  Form,
  FormLabel,
  FormInput,
  FormSubmit,
} from "@/src/shared/components/forms";

export const ForgotPasswordForm = () => {
  return (
    <Form className="mt-10 space-y-3">
      <FormLabel htmlFor="email">Correo</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Eje: micorreo@correo.com"
      />

      <FormSubmit value="Enviar instrucciones" />
    </Form>
  );
};
