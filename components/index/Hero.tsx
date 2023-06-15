import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="container mt-[64px] flex flex-col-reverse items-center justify-between lg:flex-row lg:items-start"
      aria-label="Hero Section"
    >
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <h1 className="text-center font-space text-[40px] font-bold lg:text-left">
          Hi, I'm David, a skilled <br /> web developer
        </h1>
        <p className=" max-w-sm text-center lg:text-left">
          I specialize in crafting dynamic, interactive and budget-friendly
          websites. From concept to execution, I combine cutting-edge
          technologies with a keen eye for design to deliver exceptional
          results.
        </p>
        <Link className="btn" href="/contact">
          Get in touch
        </Link>
      </div>
      <img className="w-[400px]" src="./coder.svg" alt="Programmer" />
    </section>
  );
}
