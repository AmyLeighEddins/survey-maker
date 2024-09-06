'use client';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import usePostLogin from "@/hooks/api/auth/usePostLogin";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(50),
});

const LoginForm = () => {
  const { mutateAsync: login, isError } = usePostLogin();
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitLogin = async (values: z.infer<typeof loginFormSchema>) => {
    await login(values);
    if (!isError) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-full">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(onSubmitLogin)} className="space-y-8">
            <CardContent className="grid gap-4">
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="gap-2">
              <Button onClick={() => router.push("/signup")} className="w-full">Sign Up</Button>
              <Button type="submit" className="w-full">Login</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;