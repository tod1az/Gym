import Image from "next/image"
import gato from "../../public/gatogym.jpg"

export default function Landing() {
  return (
    <main className="md:flex gap-7 items-center">
      <section className="p-4">
        <h1 className="text-3xl">Nombre de la app!</h1>
        <span className="">Comienza a registrar tus ejercicios con nuestra app *inserte aqui un nombre ingenioso*</span>
      </section>
        <Image src={gato} alt="GatoGym" />
    </main>
  )
}
