"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("xjvnwqle");

  if (state.succeeded) {
    return <p>Thanks for connecting!</p>;
  }

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Enter your name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center xl:mb-12">
        <Textarea
          id="message"
          name="message"
          placeholder="Type your message here"
        />
        <MessagesSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        className="flex items-center gap-x-1 max-w-[166px]"
        type="submit"
        disabled={state.submitting}
      >
        Let's Connect
        <ArrowRightIcon size={20} />
      </Button>
      {state.errors && state.errors.length > 0 && (
        <div>
          {state.errors.map((error) => (
            <p key={error.field}>{error.message}</p>
          ))}
        </div>
      )}
    </form>
  );
};

export default Form;
