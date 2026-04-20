import { headers } from "next/headers";
import { APIError } from "better-auth";
import { auth } from "@/src/lib/auth";
import { LoginType, RegisterType } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";

class AuthService {
  //? desacoplar la funcionalidad por si en el futuro se decide cambiar de ORM
  constructor(private authRepository: IAuthRepository) {}

  async register(registerInfo: RegisterType) {
    const { name, email, password } = registerInfo;

    // Revisar si el usuario existe
    const user = await this.authRepository.userExist(email);

    if (user) {
      return {
        error: "Esta cuenta de correo ya esta registrada.",
        success: "",
      };
    }

    // Manejar el registro
    await auth.api.signUpEmail({
      body: {
        name: name,
        email: email,
        password: password,
        callbackURL: "/dashboard",
      },
      headers: await headers(),
    });

    return {
      error: "",
      success:
        "Cuenta creada correctamente, revise su correo para mas información.",
    };
  }

  async login(loginInfo: LoginType) {
    const { email, password } = loginInfo;

    const user = await this.authRepository.userExist(email);

    if (!user) {
      return {
        error: "Esta cuenta de correo no esta registrada.",
        success: "",
      };
    }

    // verificar password y cuenta confirmada
    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: "/dashboard",
        },
        headers: await headers(),
      });

      return {
        error: "",
        success: "Sesión iniciada correctamente",
      };
    } catch (error) {
      if (error instanceof APIError) {
        const messages: Record<number, string> = {
          401: "Usuario o password incorrecto",
          403: "Aún no ha verificado su cuenta, revise su correo para más información",
        };

        const errorMessage = messages[error.statusCode];

        if (errorMessage) {
          return { error: errorMessage, success: "" };
        }
      }
    }

    return {
      error: "",
      success: "",
    };
  }
}

export const authService = new AuthService(authRepository);
