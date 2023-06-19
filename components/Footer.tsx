import { SiGithub } from "react-icons/si";
import { FiMail } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="mt-auto bg-dark font-space text-light">
            <div className="container flex justify-between py-3 mt-auto">
                <div>
                    Made with <span className="text-primary">♥</span> by David
                    G.
                </div>
                <div className="flex gap-3">
                    <a
                        className="text-2xl text-light"
                        href="mailto:david.gherlovanu.study@gmail.com"
                        target="_blank"
                    >
                        <FiMail />
                    </a>
                    <a
                        className="text-2xl text-light"
                        target="_blank"
                        href="https://github.com/DavidFX"
                    >
                        <SiGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}
