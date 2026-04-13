import { auth } from "@/src/lib/auth";
import { RegisterType } from "../schemas/authSchema";
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

    // Validaciones de negocio

    // Manejar el registro
    await auth.api.signUpEmail({
      body: {
        name: name,
        email: email,
        password: password,
      },
    });

    return {
      error: "",
      success:
        "Cuenta creada correctamente, revise su correo para mas información.",
    };
  }
}

export const authService = new AuthService(authRepository);
