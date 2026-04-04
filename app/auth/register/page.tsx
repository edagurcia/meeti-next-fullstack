import { Metadata } from "next";
import { Heading } from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Crear cuenta"),
};

export default function RegisterPage() {
  return (
    <>
      <Heading>Crear cuenta</Heading>
    </>
  );
}
