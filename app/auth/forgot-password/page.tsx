import Link from "next/link";
import { Metadata } from "next";
import { Heading } from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { ForgotPasswordForm } from "@/src/features/auth/components/ForgotPasswordForm";

export const metadata: Metadata = {
  title: generatePageTitle("Restablecer contraseña"),
};

export default function ForgotPasswordPage() {
  return (
    <>
      <Heading>Recupera tu acceso a meeti</Heading>

      <ForgotPasswordForm />

      <nav className="mt-20 flex justify-between">
        <Link href={"/auth/login"} className="font-bold">
          Iniciar sesión
        </Link>

        <Link href={"/auth/register"} className="font-bold">
          Crear cuenta
        </Link>
      </nav>
    </>
  );
}
