// Archivo encargado de hacer la conexión a la base de datos
// Es quien centraliza los llamados del ORM (drizzle | prisma)

import { eq } from "drizzle-orm";
import { db } from "@/src/db";
import { users } from "@/src/db/schema/auth";
import { User } from "../types";

export interface IAuthRepository {
  userExist(email: string): Promise<User | undefined>;
}

class AuthRepository implements IAuthRepository {
  async userExist(email: string) {
    return await db.query.users.findFirst({
      where: eq(users.email, email),
    });
  }
}

export const authRepository = new AuthRepository();
