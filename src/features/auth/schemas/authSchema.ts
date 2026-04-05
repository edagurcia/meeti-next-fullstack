import z from "zod";

export const BaseAuthSchema = z.object({
  name: z.string().trim().min(1, { error: "El nombre es obligatorio" }),
  email: z.email({ error: "Correo no valido" }),
  password: z
    .string()
    .trim()
    .min(8, { error: "Contraseña mínimo 8 caracteres" }),
  confirmPassword: z
    .string()
    .trim()
    .min(1, { error: "Password de confirmación es requerido" }),
});

export const RegisterSchema = BaseAuthSchema.pick({
  name: true,
  email: true,
  password: true,
  confirmPassword: true,
}).refine((data) => data.password === data.confirmPassword, {
  error: "Contraseñas no coinciden",
  path: ["confirmPassword"],
});

export const LoginSchema = BaseAuthSchema.pick({
  email: true,
  password: true,
});

export const ForgotPasswordSchema = BaseAuthSchema.pick({
  email: true,
});

// Types basados en los schemas

export type RegisterType = z.infer<typeof RegisterSchema>;
