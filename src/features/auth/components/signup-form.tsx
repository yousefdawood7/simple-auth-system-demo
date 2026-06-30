"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import FormField from "@/features/auth/components/auth-fields/form-field";
import { registerSchema, RegisterSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {},
  });

  function onSubmit(data: RegisterSchema) {
    console.log(data);
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <FormField
                label="Full name"
                name="fullName"
                placeholder="Enter your Full name"
              />
              <FormField
                label="Email"
                name="email"
                placeholder="Enter your email address"
              />
              <FormField
                label="Password"
                name="password"
                placeholder="Enter your password"
              />
              <FormField
                label="Confirm password"
                name="passwordConfirm"
                placeholder="Confirm your password"
              />

              <FieldGroup>
                <Field>
                  <Button type="submit">Create Account</Button>
                  <Button variant="outline" type="button">
                    Sign up with Google
                  </Button>{" "}
                  <FieldDescription className="px-6 text-center">
                    Already have an account?{" "}
                    <Link href={"/login"}>Sign in</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
