import ContanctForm from "../utility/ContanctForm";

export default function ContactBlock() {
    return (
        <section
            aria-label="Contact Form"
            className="container mt-[128px] mb-16"
        >
            <div className="font-medium text-center font-space">
                <h3 className="text-primary">- CONTACT ME -</h3>
                <h2 className="text-[32px]">
                    Feel free to start a conversation
                </h2>
            </div>
            <ContanctForm />
        </section>
    );
}
