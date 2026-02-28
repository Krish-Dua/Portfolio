import HeroImg from "@/assets/images/hero.png";
export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-4xl text-3xl font-medium lg:text-4xl text-white">
            Software Developer • Real-Time Systems Builder • Interface Engineer
            • Tech Explorer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Krish Dua, a full-stack developer focused on building
                scalable, real-time web applications and modern user interfaces.
                I enjoy turning ideas into structured, high-performance
                solutions using clean architecture and thoughtful system design.
              </p>

              <p className="text-white">
                From building dynamic front-end systems to securing backend
                logic, I focus on creating reliable, scalable web applications.
                I’m constantly exploring how technologies function beneath the
                surface to improve structure, performance, and clarity.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    For me, development isn’t just about writing code — it’s
                    about understanding systems, simplifying complexity, and
                    building reliable applications that people can genuinely
                    use. I’m eager to contribute to real-world software projects
                    where thoughtful design and structured engineering make a
                    meaningful impact.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Krish Dua
                    </cite>
                    <span className="text-white">Full-Stack Developer</span>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
