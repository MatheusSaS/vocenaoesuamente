export default function Pricing() {
  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="pt-32 pb-52 bg-[#6DD5FF]/20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span data-config-id="auto-txt-2-4">
                Quanto vai custar para eu me libertar do sofrimento?
              </span>
            </h1>
            <p className="text-lg text-gray-500" data-config-id="auto-txt-4-4">
              Descubra o caminho para uma vida mais plena e consciente por
              apenas:
            </p>
          </div>
        </div>
      </div>
      <div className="container px-0 sm:px-4 mx-auto">
        <div className="max-w-md lg:max-w-4xl mx-auto">
          <div className="-mt-52 mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-xl">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full mb-8 lg:mb-0 px-4 pb-12 lg:py-4">
                <div className="text-center">
                <span
                    className="block text-2xl font-bold mb-4"
                    data-config-id="auto-txt-5-4"
                  >
                    50% de desconto
                  </span>
                  <span
                    className="block text-2xl font-bold mb-4 text-red-600"
                    data-config-id="auto-txt-5-4"
                  >
                    De R$ 79,80
                  </span>
                  <span
                    className="block text-xl font-semibold mb-4"
                    data-config-id="auto-txt-5-4"
                  >
                    Por apenas
                  </span>
                  <p className="text-6xl mb-4 md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.200),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.200),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
                    R$ 39,90
                  </p>
                  <a href="https://pay.kiwify.com.br/frbqeEV" target="_blank" className="mx-auto h-20 w-80 sm:w-96 flex justify-center items-center">
                    <div className="h-20 w-80 sm:w-96 bg-gradient-to-br from-[#87CEEB] to-[#6DD5FF] items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                    <div className="text-center text-white text-2xl font-semibold z-10 pointer-events-none">
                      Eu quero me libertar do sofrimento
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
