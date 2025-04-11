import Image from "next/image";

export const heading1 = (
  <>
    <h1 className="font-heading mb-6 py-2">მოგზაურობა და დასვენება რაჭაში</h1>
    <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
      რაჭა — საქართველოს ერთ-ერთი ყველაზე მომხიბვლელი და მრავალფეროვანი
      რეგიონია, მოგზაურობა რაჭაში გახდება თქვენი შეუვიწყარი შთაბეჭდილებების
      წყარო!
    </p>
    <button className="btn-primary">დაწყება</button>
  </>
);

export const section2 = (
  <div className="md:grid hidden gap-8 grid-cols-1">
    <div className="rounded-2xl overflow-hidden h-48">
      <Image
        src="/images/hero-1.jpg"
        alt="hero-1"
        width={600}
        height={600}
        className="img scale-animation"
      />
    </div>
    <div className="grid grid-cols-2 gap-8 h-48">
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/images/hero-2.jpg"
          alt="hero-2"
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/images/hero-3.jpg"
          alt="hero-3"
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
    </div>
  </div>
);
