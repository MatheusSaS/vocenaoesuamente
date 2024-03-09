export default function Subject() {
  return (
    <div className="relative py-20 overflow-hidden">
      <img
        className="absolute top-0 left-0 md:mt-24"
        src="https://shuffle.dev/saturn-assets/images/contact/dots-side-1.svg"
        alt=""
        data-config-id="auto-img-1-4"
      />
      <img
        className="absolute bottom-0 right-0 mb-8 lg:mb-24"
        src="https://shuffle.dev/saturn-assets/images/contact/dots-side-2.svg"
        alt=""
        data-config-id="auto-img-2-4"
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl text-center mx-auto mb-20">
            <h1 className="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
              <span data-config-id="auto-txt-2-4">Sobre o Ebook</span>
            </h1>
            <p
              className="text-xl text-gray-500 font-semibold"
              data-config-id="auto-txt-4-4"
            >
              Você não é a sua mente: Liberte-se do sofrimento
            </p>
          </div>
          <div className="max-w-md lg:max-w-5xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 h-96 px-4 order-last lg:order-first">
                <img
                  className="h-full w-full max-w-md rounded-xl"
                  src="/ebook.png"
                  alt=""
                  data-config-id="auto-img-3-4"
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-md py-6 lg:ml-auto text-xl">
                  <p>
                    Descubra o caminho para uma vida mais plena e consciente
                    neste guia essencial para jovens adultos e pessoas de
                    meia-idade. Aprenda a superar a ansiedade e viver no momento
                    presente, encontrando paz interior e realização pessoal. Com
                    linguagem acessível e exemplos práticos, este livro oferece
                    ferramentas poderosas para cultivar a consciência e alcançar
                    a verdadeira felicidade. Uma leitura indispensável para quem
                    busca uma vida mais significativa e autêntica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
