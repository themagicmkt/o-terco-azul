import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Star, Truck, Check, Heart } from "lucide-react";

const terco1 = "/img/terco1.webp";


const depoList = [
  {
    name: "Maria Silva",
    city: "São Paulo",
    img: "/img/depoimento.png",
    text: "Esse terço me trouxe paz e proteção. Sinto que minha fé se fortaleceu. Recomendo a todos!",
    stars: 5,
  },
  {
    name: "João Ramos",
    city: "Bahia",
    img: "/img/depoimento01.png",
    text: "O terço azul me acompanha todo dia. Deus abençõe. Eu não saio de mais de casa sem ele.",
    stars: 5,
  },
  {
    name: "Marina Araujo",
    city: "Rio de Janeiro",
    img: "/img/depoimento02.png",
    text: "Sinto uma energia de proteção toda vez que rezo com ele. Sem dúvidas, o melhor que já tive.",
    stars: 5,
  },
  {
    name: "Neusa Ramoso",
    city: "Curitiba",
    img: "/img/depoimento03.png",
    text: "Comprei achando que seria só um terço bonito, mas me surpreendi com a qualidade e a sensação de paz que ele traz.",
    stars: 5,
  },
  {
    name: "Fátima Oliveira",
    city: "São Paulo",
    img: "/img/depoimento04.png",
    text: "A beleza do Terço Azul é única. Uso todos os dias, me ajuda a manter minha fé firme mesmo nos dias difíceis.",
    stars: 5,
  },
  {
    name: "Paulo Freitas",
    city: "São Paulo",
    img: "/img/depoimento05.png",
    text: "Chegou rápido e bem embalado. Estou usando nas minhas orações e sentindo mais conexão espiritual. Recomendo!",
    stars: 5,
  },
];




const faqList = [
  {
    q: "O que torna o Terço Azul especial?",
    a: "Ele é feito com contas resistentes de um azul profundo que transmite paz, fé e proteção. Seu acabamento premium e design exclusivo o tornam ideal para orações e também como símbolo de espiritualidade no dia a dia.",
  },
  {
    q: "Posso usar o Terço Azul todos os dias?",
    a: "Sim. Ele foi criado para uso diário, com materiais duráveis e confortáveis ao toque. É perfeito para suas orações e momentos de conexão espiritual.",
  },
  {
    q: "Serve como acessório ou só para orar?",
    a: "Os dois. Você pode utilizá-lo nas suas orações ou como um acessório inspirador — muitas pessoas relatam sentir mais proteção e equilíbrio ao carregá-lo consigo.",
  },
  {
    q: "O Terço Azul tem garantia?",
    a: "Sim. Você tem 30 dias para testar. Se não amar o produto, devolvemos 100% do valor. Sem complicações.",
  },
  {
    q: "Em quanto tempo recebo meu terço?",
    a: "O envio é imediato e o prazo de entrega varia de 3 a 7 dias úteis. O frete é grátis para todo o Brasil.",
  },
  {
    q: "É seguro comprar por aqui?",
    a: "Completamente. O site é protegido por certificado SSL e utilizamos os melhores gateways de pagamento do mercado.",
  },
];

const benefits = [
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/512/1818/1818141.png" alt="Saúde" className="w-12 h-12" />,
    title: "Feito à Mão",
    description: "Cada detalhe do Terço Azul é cuidadosamente trabalhado com fé e propósito.",
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="Fé" className="w-12 h-12" />,
    title: "Símbolo de Proteção",
    description: "Mais do que um acessório, é um amuleto espiritual para seu dia a dia.",
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Prosperidade" className="w-12 h-12" />,
    title: "Exclusividade",
    description: "Design celestial com contas azuis, cruz delicada e acabamento premium.",
  },
];


const Index = () => {
  return (
    
    <div className="bg-background font-outfit">

      
      {/* 1. Aviso topo */}
      <section className="bg-primary px-3 py-2 text-center text-white font-medium text-base tracking-wide">
      TERÇO AZUL DE SÃO BENTO + LIVRO A ORAÇÃO ESQUECIDA<br />
      </section>

      {/* 2. Mensagem frete grátis/estoque */}
      <section className="bg-secondary/80 px-3 py-1 text-center flex justify-center items-center gap-2 text-sm text-primary font-semibold border-b border-border">
  Últimas unidades a pronta entrega
  <Truck className="inline w-5 h-5 text-primary" />
</section>

      {/* 3. Hero / CTA */}
      <section className="w-full px-2 md:px-0 py-10 bg-white bg-gradient-to-b from-secondary/60 to-background animate-fade-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 max-w-5xl">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-5 text-primary">
              Use o Terço Azul por <span className="text-sky-600">7 Dias</span> & Veja <br className="hidden md:block"/>a Transformação em Sua Vida
            </h1>
            <p className="text-lg text-muted-foreground mb-3">
              Eleve sua fé, encontre serenidade e sinta a proteção do sagrado em todo momento. 
            </p>
            <p className="text-base text-muted-foreground mb-6">
              O Terço Azul Celestial é mais do que um acessório, é um símbolo poderoso de <strong>proteção, prosperidade e fé</strong></p>
            <a href="https://pay.otercoazul.store/P5LNZ8znqvzgaRy" 
               className="inline-block bg-primary text-white rounded-full px-8 py-3 font-semibold shadow-md transition hover:bg-sky-700 text-lg tracking-wide"
               target="_blank" rel="noopener">
              PEDIR MEU TERÇO AZUL
            </a>
          </div>
          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img src={terco1} alt="Terço Azul" className="rounded-lg object-contain w-full max-w-xs md:max-w-md" />
          </div>
        </div>
        
      </section>

    

      {/* 5. Benefícios */}
      <section className="bg-gradient-to-tr from-[#D3E4FD] via-[#F1F1F1] to-white py-12 px-1">
      <div className="container mx-auto max-w-4xl px-8">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-primary mb-3">
        Proteção, Fé e Prosperidade em Suas Mãos — Com o Terço Azul Celestial
        </h2>
      <p className="text-center text-base md:text-lg text-muted-foreground mb-10">
      Sinta a presença do sagrado em sua rotina.
      O Terço Azul Celestial é mais do que um símbolo — é um instrumento de fé e proteção que acompanha você todos os dias. Produzido com contas azuis marcantes e acabamento premium, ele inspira calma, fortalece a espiritualidade e já transformou a vida de milhares de pessoas.
      </p>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
            {benefits.map((b,i) => (
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center w-full max-w-xs" key={i}>
                {b.icon}
                <h3 className="font-semibold text-xl text-sky-700 mt-3 mb-1">{b.title}</h3>
                <p className="text-gray-600 text-center">{b.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a href="https://pay.otercoazul.store/P5LNZ8znqvzgaRy" 
               className="rounded-full bg-primary text-white text-lg font-bold px-8 py-3 shadow transition hover:bg-sky-700">
              QUERO MEU TERÇO AZUL
            </a>
          </div>
        </div>
      </section>

    {/* 11. Brinde Especial */}
<section className="bg-gradient-to-br from-[#f0f9ff] via-white to-[#e6f0ff] py-12 px-4">
  <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
    
    {/* Imagem do livro */}
    <div className="flex-1 flex justify-center">
      <img 
        src="/img/livro.webp" 
        alt="Ebook" 
        className="w-full max-w-md " 
      />
    </div>

    {/* Texto e CTA */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
        Peça seu <span className="text-sky-700">Terço Azul</span> agora e <br className="hidden md:block" /> ganhe o livro  <span className="text-green-700">A oração esquecida</span> gratuitamente!
      </h2>
      <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
        Além do Terço Azul Celestial, você receberá gratuitamente o livro com <strong>A Oração Esquecida</strong> uma oração capaz de fazer <strong>milagres inimaginaveis</strong>. Uma oferta limitada para quem busca fortalecer sua fé com ainda mais poder espiritual.
      </p>
      <a href="https://pay.otercoazul.store/P5LNZ8znqvzgaRy"
         target="_blank" rel="noopener"
         className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:from-blue-600 hover:to-sky-700 transition">
        GARANTIR MEU TERÇO + LIVRO
      </a>
    </div>

  </div>
</section>  

{/* 5.5 Imagem Destaque Centralizada com Imagem ao Lado */}
<section className="bg-white py-12 px-4">
  <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-5">
    <h2 className="text-center text-2xl md:text-3xl font-semibold text-primary mb-6">
      Mais do que um Terço, uma peça única e exclusiva.
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <img 
        src="/img/terco1.webp" 
        alt="Imagem Destaque" 
        className="w-full rounded-xl shadow-md object-cover border border-secondary"
      />
      <img 
        src="/img/terco3.webp" 
        alt="Imagem Lateral" 
        className="w-full rounded-xl shadow-md object-cover border border-secondary"
      />
      <img 
        src="/img/terco2.webp" 
        alt="Imagem Lateral" 
        className="w-full rounded-xl shadow-md object-cover border border-secondary"
      />
    </div>
  </div>
</section>

{/* 4. História do Terço Azul */}
<section className="bg-gradient-to-tr from-[#f1f5f9] via-white to-[#e0ecff] py-12 px-4">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-8">

    {/* Texto primeiro no mobile */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
        ✨ A Origem do Terço Azul Celestial
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        Inspirado por fé, criado com propósito. O Terço Azul nasceu do desejo de oferecer mais do que um objeto religioso — 
        mas um símbolo de esperança. Sua cor remete ao céu, à calma e à presença divina. 
        Cada conta é montada com atenção aos detalhes, para que você sinta conexão e paz a cada oração.
      </p>
    </div>

    

    {/* Imagem depois no mobile */}
    <div className="flex-1">
      <img 
        src="/img/terco4.webp" 
        alt="Terço Azul Detalhe" 
        className="w-full max-w-md mx-auto rounded-xl shadow-md object-cover border border-secondary"
      />
    </div>
  </div>
</section>
      {/* 6. Oferta Exclusiva */}
      <section className="container mx-auto py-14 flex justify-center items-center">
      <div className="w-full max-w-5xl mx-4 md:mx-auto p-0 md:p-6 bg-gradient-to-tr from-[#e8f1fc] via-[#f1f5f9] to-white rounded-2xl shadow-xl border border-sky-100 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-0 md:gap-8">
            {/* Imagem lado esquerdo */}
            <div className="flex-1 flex justify-center items-center rounded-t-2xl md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none p-6 md:p-0">
  <img 
    src={terco1} 
    alt="Kit Terço Azul Celestial" 
    className="w-full rounded-xl object-cover" 
  />
</div>
            {/* Detalhes da Oferta */}
            <div className="flex-1 flex flex-col justify-center gap-3 px-6 py-5">
              {/* destaque Oferta e escassez */}
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-100 text-sky-700 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-200 shadow">
                  Oferta Relâmpago
                </span>
                <span className="text-xs text-blue-700 font-medium animate-pulse">Últimas unidades!</span>
              </div>
              {/* Título grande */}
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                Terço Azul São Bento + Livro A Oração Esquecida.
              </h2>
              {/* Avaliações */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="#FACC15" viewBox="0 0 24 24"><path d="M12 17.77L5.435 21.413l1.244-7.253L0.349 8.881l7.3-1.054L12 1.75l3.99 6.077 7.3 1.054-5.97 5.279 1.244 7.253z"/></svg>
                ))}
                <span className="ml-2 text-sm text-blue-600 font-semibold">+320 avaliações</span>
              </div>
              {/* Preços e Promoção */}
              <div className="flex flex-col md:flex-row md:items-end gap-2 mb-3">
                <span className="line-through text-xl text-slate-400 font-medium mr-2">
                  R$197,00
                </span>
                <span className="text-3xl md:text-4xl font-bold text-sky-700 drop-shadow">
                  R$97,00
                </span>
                <span className="text-base text-green-700 font-semibold px-2">
                  Frete gratuito!
                </span>
              </div>
              <ul className="mb-4 space-y-2 text-base">
                <li className="flex items-center gap-2"><span className="bg-sky-200 rounded-full p-1"><svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span> Terço Azul de São Bento premium</li>
                <li className="flex items-center gap-2"><span className="bg-sky-200 rounded-full p-1"><svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span> Contas de madeira de lei</li>
                <li className="flex items-center gap-2"><span className="bg-sky-200 rounded-full p-1"><svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span> Livro: A oração esquecida</li>
                <li className="flex items-center gap-2"><span className="bg-sky-200 rounded-full p-1"><svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span> Envio imediato para todo o Brasil</li>
              </ul>
              {/* Garantia e Botão */}
              <div className="flex items-center gap-2 mb-3">
                <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=50&q=80" alt="Garantia 30 dias" className="w-12 h-12 rounded-full border-2 border-green-300 shadow" />
                <span className="text-green-700 font-semibold text-base">Garantia total de 30 dias</span>
              </div>
              <a 
                href="https://pay.otercoazul.store/P5LNZ8znqvzgaRy"
                className="block w-full md:w-auto bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-700 text-white font-bold py-4 px-8 md:rounded-full rounded-lg text-xl text-center shadow-xl transition hover-scale"
                style={{ letterSpacing: ".02em" }}
                target="_blank"
                rel="noopener"
              >
                PEDIR MEU TERÇO + LIVRO
              </a>
              <div className="flex items-center gap-2 mt-3">
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M15 9l-6 6"/></svg>
                <span className="text-sky-800 text-sm font-medium">Envio seguro · Você recebe o código de rastreio por e-mail!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7. Depoimentos */}
      <section className="bg-gradient-to-br from-[#D3E4FD] via-white to-[#F1F1F1] py-16 px-2">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-primary mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-center text-base md:text-lg text-muted-foreground mb-7">Confira relatos de quem já está vivendo milagres com o Terço Azul Celestial.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoList.map((d, i) => (
              <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center" key={i}>
                <img src={d.img} alt={d.name} className="w-16 h-16 rounded-full object-cover mb-3 border-4 border-sky-200 shadow" />
                <div className="flex gap-1 mb-2">
                  {Array.from({length: d.stars}).map((_,i2) => (
                    <Star className="text-yellow-400 w-4 h-4" key={i2} fill="#FACC15" />
                  ))}
                </div>
                <p className="text-gray-700 text-center mb-2">{d.text}</p>
                <div className="font-bold text-primary">
                  {d.name} <span className="font-normal text-sm text-muted-foreground block">{d.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
{/* 8. FAQ */}
<div className="w-full px-4 sm:px-6 md:px-8">
  <section className="w-full max-w-5xl mx-auto py-8 bg-white rounded-2xl my-10 shadow">
    <h2 className="text-center text-3xl font-bold text-primary mb-6">
      Perguntas Frequentes
    </h2>
    <div className="p-4 md:p-6">
      <Accordion type="single" collapsible className="w-full">
        {faqList.map((item, idx) => (
          <AccordionItem value={String(idx)} key={idx}>
            <AccordionTrigger className="text-left text-sky-700 font-semibold text-base">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
</div>

      {/* 9. Rastreio */}
      <section className="container mx-auto max-w-2xl py-12 px-2">
        <div className="rounded-2xl shadow-lg bg-gradient-to-tr from-secondary/60 to-white p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-primary mb-2">Acompanhe seu pedido</h2>
          <p className="text-muted-foreground mb-4 text-center">Depois de realizar seu pedido, utilize seu código de rastreio abaixo para acompanhar a entrega.</p>
          <form
            className="w-full max-w-md flex flex-col gap-3"
            method="post"
            name="form-rastreio"
            action="https://rastreamento.correios.com.br/app/index.php"
            target="_blank"
            rel="noopener"
          >
            <input type="text"
              className="border border-primary bg-white rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary transition"
              placeholder="Insira o código de rastreio"
              required
              name="form_fields[name]"
              id="codigo-rastreio"
            />
            <button type="submit" className="bg-primary text-white py-3 rounded-full font-bold transition hover:bg-sky-700">RASTREAR MEU PEDIDO</button>
          </form>
        </div>
      </section>

      {/* 10. Rodapé */}
      {/* 10. Rodapé */}
      <footer className="bg-[#E6ECF7] py-8 mt-10">
  <div className="container mx-auto text-center flex flex-col items-center gap-4">

    <img src="/img/crucifixo.png" alt="Selo" className="w-20 mb-2" />
    
    <div className="flex gap-3 justify-center items-center">
      <img src="/img/imagens-de-formas-de-pagamento-png-4.png" alt="Formas de Pagamento" className="h-6 md:h-8 w-auto" />
    </div>

    <p className="text-xs text-muted-foreground font-medium text-center px-4">
      Presente Divino – Artigos Religiosos ©<br />
      <a href="#" className="underline text-sky-600 hover:text-sky-900 font-semibold">Políticas de entrega e garantia</a><br />
      Todos os direitos reservados © 2024
    </p>

  </div>
</footer>
    </div>
  );
};

export default Index;