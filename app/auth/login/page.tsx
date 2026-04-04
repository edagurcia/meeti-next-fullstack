import { Metadata } from "next";
import { Heading } from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar sesión"),
};

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar sesión</Heading>
    </>
  );
}
