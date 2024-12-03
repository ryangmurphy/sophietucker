import React, { useMemo, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import { ArrowRightIcon } from "lucide-react";

export default function Form() {
const methods = useForm({
  defaultValues: useMemo(
    () => ({
      name: "",
      email: "",
      subject: "",
      message: "",
    }),
    []
  ),
});

  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus({
          message: "Form submitted successfully!",
          isError: false,
        });
        methods.reset();
      } else {
        const responseData = await response.json();
        setFormStatus({
          message:
            responseData.message || "Error submitting form. Please Email Me",
          isError: true,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({ message: "Error submitting form.", isError: true });
    }
  };

  return (
    <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="font-bold text-pink-950">
          ✨Get in Touch✨
        </CardTitle>
        <CardDescription className="text-pink-950/80  font-semibold pt-2">
          Have Questions? Reach Out ✉️
        </CardDescription>
      </CardHeader>

      <FormProvider {...methods}>
        <CardContent>
          <form
            className="flex flex-col gap-y-2"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="relative flex items-center">
              <LabelInputContainer>
                <Label htmlFor="name">Name</Label>
                <Controller
                  name="name"
                  control={methods.control}
                  rules={{ required: "Name is required" }}
                  render={({ field, fieldState }) => (
                    <>
                      <Input id="name" {...field} autoComplete="name" />
                      {fieldState.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-2">
              <Label htmlFor="email">Email Address</Label>
              <Controller
                name="email"
                control={methods.control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      id="email"
                      {...field}
                      className="relative flex items-center"
                      autoComplete="email"
                    />

                    {fieldState.error && (
                      <p className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-2">
              <Label htmlFor="subject">Subject</Label>
              <Controller
                name="subject"
                control={methods.control}
                rules={{ required: "Subject is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      id="subject"
                      {...field}
                      className="relative flex items-center"
                      autoComplete="off"
                    />

                    {fieldState.error && (
                      <p className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-2">
              <Label htmlFor="message">Message</Label>
              <Controller
                name="message"
                control={methods.control}
                rules={{ required: "Message is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <Textarea
                      id="message"
                      {...field}
                      placeholder=""
                      className="relative flex items-center"
                      rows={6}
                      autoComplete="off"
                    />
                    {fieldState.error && (
                      <p className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </LabelInputContainer>

            <Button className="flex items-center w-full border-pink-400 border-2 bg-gradient-to-b from-pink-500 to-pink-600 font-semibold hover:bg-gradient-to-b hover:from-pink-700 hover:to-pink-800">
              Let&apos;s Connect
              <ArrowRightIcon size={20} />
            </Button>
          </form>
        </CardContent>
      </FormProvider>

      {formStatus && (
        <div
          className={`mt-4 p-4 rounded-lg text-center ${
            formStatus.isError
              ? "bg-red-100 text-red-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {formStatus.message}
        </div>
      )}
    </Card>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
