import emailjs from "@emailjs/browser";
import { appStrings } from "../../assets/text/appStrings";
import { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInFromTop } from "../../../utils/motion";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_nrsaumg",
          "template_ersjlfe",
          form.current,
          "lYQO_9AF7RV0XAyiZ"
        )
        .then((result) => {
          console.log(result.text);
          setMessage("Message sent!");
          setTimeout(() => {
            form.current?.reset();
            setMessage("");
          }, 3000);
        })
        .catch((error) => {
          console.log(error.text);
          setMessage("Message failed to send. Please try again.");
        });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn(0.5)}
      className="bg-background md:my-56 md:mx-44 p-20 rounded-lg shadow-lg font-body"
    >
      <div className="flex flex-col items-center">
        <div className="mx-5 mb-10 md:mb-0 md:mx-10">
          <motion.h1
            className="text-5xl text-center font-body text-green md:text-6xl mb-6"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              loop: 1,
              repeatDelay: 1,
            }}
          >
            {appStrings.contact.header}
          </motion.h1>
        </div>

        {message ? (
          <h1 className="font-subheader1 text-lightblue text-3xl md:text-[100px] h-full leading-12">
            {message}
          </h1>
        ) : (
          <div className="flex flex-col font-body md:pt-24">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5 w-[250px] mini:w-[400px] lg:w-[500px]"
            >
              <motion.input
                variants={slideInFromTop(1.1)}
                initial="hidden"
                animate="visible"
                className="p-[8px] rounded-lg shadow-inner border-2 border-lightblue"
                type="text"
                name="user_name"
                placeholder="name"
                required
              />
              <motion.input
                variants={slideInFromTop(0.9)}
                initial="hidden"
                animate="visible"
                className="p-[8px] rounded-lg shadow-inner border-2 border-lightblue"
                type="email"
                name="user_email"
                placeholder="email"
                required
              />
              <motion.textarea
                variants={slideInFromTop(0.7)}
                initial="hidden"
                animate="visible"
                className="p-[8px] h-[100px] rounded-lg shadow-inner border-2 border-lightblue"
                name="message"
                placeholder="message"
                required
              />
              <motion.input
                variants={slideInFromTop(0.5)}
                initial="hidden"
                animate="visible"
                className="p-2 rounded-lg bg-green text-background text-xl w-3/5 mx-auto shadow-2xl font-subheader1 hover:bg-lightblue mt-10 cursor-pointer"
                type="submit"
                value="Send"
                id="submit"
              />
            </form>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
