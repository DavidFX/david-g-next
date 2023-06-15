"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
    name: string;
    email: string;
    message: string;
}

const ContanctForm = () => {
    const { register, handleSubmit, reset } = useForm<ContactFormProps>();

    const sendEmail = (data: any) => {
        reset();
        emailjs
            .send(
                `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
                data,
                `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`
            )
            .then(
                (result) => {
                    reset();
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col items-center gap-3 mx-auto mt-8"
        >
            <div className="flex flex-col">
                <label htmlFor="name" className="font-space">
                    *Full Name:
                </label>
                <input
                    {...register("name", { required: true })}
                    placeholder="John Doe"
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="inputField"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="font-space">
                    *Email:
                </label>
                <input
                    {...register("email", { required: true })}
                    placeholder="example@email.com"
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="inputField"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="font-space">
                    *Message:
                </label>
                <textarea
                    {...register("message", { required: true })}
                    placeholder="Your message here..."
                    required
                    name="message"
                    id="message"
                    className="inputField"
                ></textarea>
            </div>
            <button type="submit" className="mx-auto btn">
                Send
            </button>
        </form>
    );
};

export default ContanctForm;
