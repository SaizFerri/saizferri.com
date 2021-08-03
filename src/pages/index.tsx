import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-4">
      <Head>
        <title>Adrian Saiz Ferri 🚀</title>
        <meta
          name="description"
          content="Portfolio of Adrian Saiz Ferri, software engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h1 className="text-center">
              Hi, I&apos;m <span className="color-primary">Adrian Saiz 🚀</span>
            </h1>
            <h3 className="text-center">
              <span className="color-primary">Software engineer 👨‍💻</span> with a
              focus in frontend
            </h3>
            <p className="text-center">
              This website is currently under development 👷, but you can
              contact me via{" "}
              <a href="mailto:adrian.saiz.ferri@outlook.com">e-mail</a> or via{" "}
              <a href="https://www.linkedin.com/in/adrian-saiz-ferri/">
                linkedin
              </a>{" "}
              📇.
            </p>
            <div className="mt-4 text-center">
              <Image
                width="300"
                height="300"
                src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif"
                alt="Cat smashing laptop keyboard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
