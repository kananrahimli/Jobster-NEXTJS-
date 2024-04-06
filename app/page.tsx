import Image from "next/image";
import landig from "./assets/landing.svg";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="px-[8rem] max-sm:px-[1rem] max-md:px-[2rem] max-lg:px-[3rem] min-h-[100vh]">
      <div className="flex flex-col min-h-[100vh]">
        <Header></Header>
        <div className="flex my-auto items-center justify-center">
          <div className="flex-1 flex flex-col items-baseline space-y-5">
            <h1 className="text-4xl">
              Job app <span className="text-blue-500">welcome!</span>
            </h1>
            <p>
              Welcome! Our business management application is a powerful tool
              that allows you to easily create, edit, delete, and organize your
              tasks. It provides flexibility tailored to you and your business
              processes, enabling you to manage your projects more efficiently.
            </p>
            <Link
              href="/login"
              className="rounded-md py-2 px-3 bg-blue-500 text-white "
            >
              Login/Register
            </Link>
          </div>
          <div className="flex-1 max-md:hidden flex justify-end items-center my-auto">
            <Image src={landig} alt="landing" className=" objet-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
