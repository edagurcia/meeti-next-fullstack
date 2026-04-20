"use client";

import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import {
  Form,
  FormLabel,
  FormInput,
  FormSubmit,
  FormError,
} from "@/src/shared/components/forms";
import { LoginSchema, LoginType } from "@/src/features/auth/schemas/authSchema";
import { signIn } from "@/src/features/auth/actions/auth";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    mode: "all",
  });

  const onSubmit = async (data: LoginType) => {
    const { success, error } = await signIn(data);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
      redirect("/dashboard");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-3">
      <FormLabel htmlFor="email">Correo</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Eje: micorreo@correo.com"
        {...register("email")}
      />

      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="********"
        {...register("password")}
      />

      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormSubmit value="Iniciar sesión" />
    </Form>
  );
};
