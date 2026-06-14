import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="py-40">

      <div className="mb-8">

        <p className="text-[11px]">
          VELSAINTE × DOLCE&GABBANA
        </p>

      </div>

      <div className="flex justify-center">

        <Image
          src="/hero.jpg"
          alt=""
          width={1000}
          height={1300}
          priority
          className="
            w-[60%]
            object-cover
          "
        />

      </div>

      <div className="mt-8 flex justify-between">

        <p className="text-[11px]">
          Editorial Campaign
        </p>

        <p className="text-[11px]">
          2026
        </p>

      </div>

    </section>
  );
}