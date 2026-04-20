"use server";

import {
  LoginSchema,
  LoginType,
  RegisterSchema,
  RegisterType,
} from "../schemas/authSchema";
import { authService } from "../services/AuthService";

export async function signUp(formData: RegisterType) {
  const data = RegisterSchema.safeParse(formData);

  if (!data.success) {
    return {
      error: "Hubo un error",
      success: "",
    };
  }

  const res = await authService.register(data.data);

  return res;
}

export async function signIn(formData: LoginType) {
  const data = LoginSchema.safeParse(formData);

  if (!data.success) {
    return {
      error: "Hubo un error",
      success: "",
    };
  }

  const res = await authService.login(data.data);

  return res;
}
