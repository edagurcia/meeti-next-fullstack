"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import {
  RegisterSchema,
  RegisterType,
} from "@/src/features/auth/schemas/authSchema";

import {
  Form,
  FormError,
  FormLabel,
  FormInput,
  FormSubmit,
} from "@/src/shared/components/forms";

import { signUp } from "@/src/features/auth/actions/auth";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    mode: "all",
  });

  const onSubmit = async (data: RegisterType) => {
    const { error, success } = await signUp(data);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-3">
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        type="text"
        id="name"
        {...register("name")}
        placeholder="Eje: Juan Lopez"
      />

      {errors.name && <FormError>{errors.name.message}</FormError>}

      <FormLabel htmlFor="email">Correo</FormLabel>
      <FormInput
        type="email"
        id="email"
        {...register("email")}
        placeholder="Eje: micorreo@correo.com"
      />

      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        {...register("password")}
        placeholder="********"
      />

      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormLabel htmlFor="confirmPassword">Repetir Contraseña</FormLabel>
      <FormInput
        type="password"
        id="confirmPassword"
        {...register("confirmPassword")}
        placeholder="********"
      />

      {errors.confirmPassword && (
        <FormError>{errors.confirmPassword.message}</FormError>
      )}

      <FormSubmit value="Registrarme" />
    </Form>
  );
};
