"use server";

import { RegisterSchema, RegisterType } from "../schemas/authSchema";
import { authService } from "../services/AuthService";

export async function signUp(formData: RegisterType) {
  // Validación de datos del lado del servidor

  const data = RegisterSchema.safeParse(formData);

  if (!data.success) {
    return {
      error: "Hubo un error",
      success: "",
    };
  }

  // Guardar los datos en la base de datos
  const res = await authService.register(data.data);

  return res;
}
