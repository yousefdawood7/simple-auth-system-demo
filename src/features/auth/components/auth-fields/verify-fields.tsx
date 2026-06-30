"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

import useHasMounted from "@/hooks/useHasMounted";
import { Field } from "@/components/ui/field";
import AuthButton from "@/features/auth/components/auth-button";
import OtpField from "@/features/auth/components/auth-fields/otp-field";

export default function VerifyFields() {
  const hasMounted = useHasMounted();
  const [value, setValue] = useState("");

  if (!hasMounted) {
    return null;
  }
  const signedInUserEmail = sessionStorage.getItem("signedInUserEmail") || "";

  //   if (!signedInUserEmail) {
  //     return (
  //       <Placeholder
  //         title="No email found"
  //         description="We couldn't find an email address to send the verification code to. Please go back and enter your email address"
  //         icon={LucideMailQuestionMark}
  //       />
  //     );
  //   }

  return (
    <Card className="max-w-112.5 w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Verify your login
        </CardTitle>
        <CardDescription className="text-center">
          Enter the verification code we sent to your email address:{" "}
          <span className="font-medium">{signedInUserEmail}</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <OtpField value={value} setValue={setValue} isPending={true} />
      </CardContent>
      <CardFooter>
        <Field>
          <AuthButton>Verify</AuthButton>
        </Field>
      </CardFooter>
    </Card>
  );
}
