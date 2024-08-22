import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
import Navbar from "@/components/shared/Navbar";
import usePostSignup from "@/hooks/api/auth/usePostSignup";

const signupFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(5).max(50),
});

const Signup = () => {
  const { mutate: signup } = usePostSignup();
  const navigate = useNavigate();

  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmitSignup = (values: z.infer<typeof signupFormSchema>) => {
    signup(values);
    navigate("/login");
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Sign up</CardTitle>
            <CardDescription>
              Enter your details below to sign up.
            </CardDescription>
          </CardHeader>
          <Form {...signupForm}>
            <form onSubmit={signupForm.handleSubmit(onSubmitSignup)} className="space-y-8">
              <CardContent className="grid gap-4">
                <FormField
                  control={signupForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
                <FormField
                  control={signupForm.control}
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
                  control={signupForm.control}
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
                <Button onClick={() => navigate("/login")} className="w-full">Login</Button>
                <Button type="submit" className="w-full">Sign Up</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
};

export default Signup;