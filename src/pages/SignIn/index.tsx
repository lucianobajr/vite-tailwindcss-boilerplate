import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Button, InputIcon } from "../../components";

import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/ui/input";

import { Loader2 } from "lucide-react";

import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "O e-mail deve seguir o padrão: email@example.com.",
  }),
  password: z.string().min(5, {
    message: "A senha deve possuir pelo menos 5 caracteres.",
  }),
});

const SignIn: React.FC = () => {
  const [loading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { email, password } = values;

      console.log(email, password);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen flex">
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full bg-main overflow-x-hidden overflow-y-hidden"></div>
      <div className="h-screen w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="font-roboto text-4xl font-semibold text-primary-red mb-6">
          Faça seu login
        </h1>
        <div className="flex flex-col">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex">
                        <InputIcon
                          icon={FiMail}
                          className=" bg-red-500 border-black text-white"
                        />
                        <Input
                          placeholder="Email"
                          {...field}
                          className="h-14 text-base border border-l-0 bg-gray-200 text-black border-black placeholder-black rounded-r-md"
                        />
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex">
                        <InputIcon
                          icon={FiLock}
                          className=" bg-red-500 border-black text-white"
                        />
                        <Input
                          type="password"
                          placeholder="Senha"
                          {...field}
                          className="h-14 text-base border border-l-0 bg-gray-200 text-black border-black placeholder-black rounded-r-md"
                        />
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                className="w-96 h-14 text-base bg-red-500 hover:bg-red-700 text-white border border-red-800 transition-colors duration-300"
                type="submit"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
            <Link
              to={"/signup"}
              className="font-roboto font-semibold text-end mt-6 text-primary-red underline "
            >
              Não tenho uma conta
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
