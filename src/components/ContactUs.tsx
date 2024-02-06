import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ObjectSchema, object, string } from "yup";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const ContactUs: React.FC = () => {
  const contactUsSchema = useContactUsSchema();

  const form = useForm<ContactUsFormValues>({
    resolver: yupResolver(contactUsSchema),
    mode: "onBlur",
  });

  const onSubmit = () => {
    alert("Confirm");
  };

  return (
    <div
      id="contactUs"
      className="flex items-center justify-center xl:text-start"
    >
      <div className="w-full px-4 flex-col items-center justify-center gap-40 md:px-0 md:w-4/6 mt-10">
        <h3 className="text-xl md:text-2xl font-bold">Contact us</h3>
        <span className="text-md mt-4 block text-justify">
          Are you ready to gain exciting new experiences in utilizing our
          advanced logistics software? If the answer is yes, then please
          complete the form and we will get in touch with you as soon as
          possible!
        </span>
        <div className="flex justify-center lg:justify-between items-center">
          <div className="w-8/12 lg:w-5/12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Label htmlFor="email">Email</Label>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Label htmlFor="fullName">Full name</Label>
                      <FormControl>
                        <Input placeholder="Enter you full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Label htmlFor="phoneNumber">Phone number</Label>
                      <PhoneInput
                        defaultCountry="ua"
                        {...field}
                        className="
                      h-10
                      w-full
                      text-popover
                      [&_.react-international-phone-country-selector-button]:h-10
                      [&_.react-international-phone-country-selector-button]:rounded-s-md
                      [&_.react-international-phone-country-selector-button]:border-input
                      [&_.react-international-phone-country-selector-button]:bg-background
                      [&_.react-international-phone-country-selector-button]:px-3
                      [&_.react-international-phone-country-selector-button__button-content]:gap-2
                      [&_.react-international-phone-country-selector-dropdown]:bg-background
                      [&_.react-international-phone-country-selector-dropdown]:text-muted-foreground
                      [&_.react-international-phone-input]:h-10
                      [&_.react-international-phone-input]:w-full
                      [&_.react-international-phone-input]:rounded-e-md
                      [&_.react-international-phone-input]:border-input
                      [&_.react-international-phone-input]:bg-background
                      [&_.react-international-phone-input]:font-medium
                      [&_.react-international-phone-input]:text-muted-foreground
                      "
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  onClick={form.handleSubmit(onSubmit)}
                  className="w-full hover:bg-secondary"
                  disabled={!form.formState.isValid}
                >
                  Request a demo
                </Button>
              </form>
            </Form>
          </div>
          <div className="w-5/12 text-center hidden lg:block">
            <img
              src="/images/quality.svg"
              alt="Contact us"
              className="w-10/12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactUs };

type ContactUsFormValues = {
  email: string;
  fullName: string;
  phoneNumber: string;
};

const useContactUsSchema = (): ObjectSchema<ContactUsFormValues> => {
  return object({
    fullName: string()
      .required("Full name is required")
      .max(50, "Full name can't be longer than 50 characters"),
    email: string().email("Email is not valid").required("Email is required"),
    phoneNumber: string()
      .required("Phone number is required")
      .min(12, "Phone number is too short")
      .max(15, "Phone number is too long"),
  });
};
