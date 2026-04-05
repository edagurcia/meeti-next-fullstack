import Link from "next/link";
import { Metadata } from "next";
import { Heading } from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { LoginForm } from "@/src/features/auth/components/LoginForm";

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar sesión"),
};

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar sesión</Heading>

      <LoginForm />

      <nav className="mt-20 flex justify-between">
        <Link href={"/auth/register"} className="font-bold">
          Crear cuenta
        </Link>

        <Link href={"/auth/forgot-password"} className="font-bold">
          Olvide mi contraseña
        </Link>
      </nav>
    </>
  );
}
