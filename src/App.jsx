import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Star, Truck, Check, Heart } from "lucide-react";

// Utilizar imagens reais do produto ao subir, por ora, usar placeholder
const blueRosaryImg = "/public/img/mockupfinal-2.webp";
const blueRosaryKitImg = "/img/terco1.webp";
const warrantyImg = "/img/terco2.webp";
const depoList = [
  {
    name: "Maria Silva",
    city: "São Paulo",
    img: "/public/img/depoimento.png",
    text: "Entrei no desafio com o coração aflito e terminei com uma paz que não sentia há anos. O Terço Azul é uma bênção na minha vida.",
    stars: 5,
  },
  {
    name: "João Ramos",
    city: "Bahia",
    img: "/img/depoimento01.png",
    text: "No terceiro dia do desafio, senti uma clareza espiritual que mudou minha forma de orar. No sétimo, recebi uma resposta que esperava há meses.",
    stars: 5,
  },
  {
    name: "Marina Araujo",
    city: "Rio de Janeiro",
    img: "/img/depoimento02.png",
    text: "As missões diárias me ajudaram a focar e renovar minha fé. Cada oração parecia falar direto comigo. Um divisor de águas.",
    stars: 5,
  },
  {
    name: "Neusa Ramoso",
    city: "Curitiba",
    img: "/img/depoimento03.png",
    text: "Estou no quarto dia do desafio e já sinto mudanças no meu interior. O terço chegou rápido e é ainda mais bonito pessoalmente.",
    stars: 5,
  },
  {
    name: "Fátima Oliveira",
    city: "São Paulo",
    img: "/img/depoimento04.png",
    text: "Recebi minha graça no sexto dia. A fé que recuperei nesse desafio não tem preço. Recomendo de olhos fechados.",
    stars: 5,
  },
];

const faqList = [
  {
    q: "O que torna o Terço Azul especial?",
    a: "O Terço Azul é confeccionado com contas de alta qualidade, transmitindo tranquilidade, proteção e fé renovada. Seu design exclusivo une beleza e espiritualidade em um só produto.",
  },
  {
    q: "Posso usar diariamente?",
    a: "Sim! O Terço Azul foi criado para resistir ao uso diário mantendo seu brilho e propósito.",
  },
  {
    q: "Serve como acessório ou apenas para orações?",
    a: "É versátil: use como peça de oração ou acessório inspirador, trazendo energia positiva para seu dia.",
  },
  {
    q: "Tem garantia?",
    a: "Você tem 30 dias de garantia total. Se não amar, devolvemos seu dinheiro.",
  },
  {
    q: "Em quanto tempo chega?",
    a: "Você recebe seu terço de 3 a 7 dias úteis em qualquer canto do Brasil – frete totalmente grátis.",
  },
  {
    q: "Entregam em todo Brasil?",
    a: "Sim, entregamos para todo o país. Compre com segurança e tranquilidade.",
  },
];

const benefits = [
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/512/1818/1818141.png" alt="Saúde" className="w-12 h-12" />,
    title: "Equilíbrio Emocional",
    description: "Durante o desafio, você vai aprender a controlar a ansiedade e encontrar paz interior em meio ao caos.",
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="Fé" className="w-12 h-12" />,
    title: "Conexão Espiritual",
    description: "As orações guiadas de cada dia vão fortalecer sua fé e alinhar sua energia com o que realmente importa.",
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Prosperidade" className="w-12 h-12" />,
    title: "Caminho da Prosperidade",
    description: "Ao seguir os 7 dias de oração com fé, você ativa um ciclo de bênçãos e abre espaço para receber graças.",
  },
];

const Index = () => {
  return (
    <div className="bg-background font-outfit">
      {/* 1. Aviso topo */}
      <section className="bg-primary px-3 py-2 text-center text-white font-medium text-base tracking-wide">
        Desafio espiritual 7 dias com o Terço Azul Celestial!<br />
      </section>

      {/* 2. Mensagem frete grátis/estoque */}
      <section className="bg-secondary/80 px-3 py-1 text-center flex justify-center items-center gap-2 text-sm text-primary font-semibold border-b border-border">
        <Truck className="inline w-5 h-5 text-primary" /> ÚLTIMAS UNIDADES! Frete Grátis para todo o Brasil 🚚
      </section>

      {/* 3. Hero / CTA */}
      <section className="w-full px-2 md:px-0 py-10 bg-white bg-gradient-to-b from-secondary/60 to-background animate-fade-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 max-w-5xl">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 text-primary">
              Você Teria Coragem de <span className="text-sky-600">Orar por 7 Dias Seguidos </span><br className="hidden md:block" />
              se Soubesse que uma <span className="text-sky-600">Graça Está Prestes a Chegar?</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-3">
              Descubra o poder de uma oração guiada com fé, propósito e direção. 
              Durante 7 dias, siga as missões no app, use o Terço Azul e prepare-se para receber a graça que você tanto espera.
          </p>
            <a href="https://seucheckout.com" 
               className="inline-block bg-primary text-white rounded-full px-8 py-3 font-semibold shadow-md transition hover:bg-sky-700 text-lg tracking-wide"
               target="_blank" rel="noopener">
              COMEÇAR JORNADA
            </a>
          </div>
          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img src={blueRosaryImg} alt="Terço Azul" />
          </div>
        </div>
      </section>

      {/* 4. Imagens produtos (galeria simples) */}
      <section className="container mx-auto py-10 flex flex-col md:flex-row gap-6 items-center justify-center">
        <img src={blueRosaryKitImg} alt="Terço Azul Imagem 1" className="rounded-xl shadow-md w-full max-w-xs md:max-w-xs object-cover border border-secondary" />
        <img src={warrantyImg} alt="Terço Azul Imagem 2" className="rounded-xl shadow-md w-full max-w-xs md:max-w-xs object-cover border border-secondary" />
      </section>

      {/* 5. Benefícios */}
      <section className="bg-gradient-to-tr from-[#D3E4FD] via-[#F1F1F1] to-white py-12 px-1">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-primary mb-3">O Milagre dos 7 Dias</h2>
          <p className="text-center text-base md:text-lg text-muted-foreground mb-10">Ao utilizar o Terço Azul por 7 dias seguidos e seguir nosso Guia de Orações, você estará se conectando com sua espiritualidade e permitindo que bênçãos fluam para sua vida.</p>
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
            <a href="https://seucheckout.com" 
               className="rounded-full bg-primary text-white text-lg font-bold px-8 py-3 shadow transition hover:bg-sky-700">
              GARANTIR MEU TERÇO
            </a>
          </div>
        </div>
      </section>

{/* 5.5 Imagem Destaque Centralizada com Imagem ao Lado */}
<section className="bg-white py-12 px-4">
  <div className="container mx-auto max-w-4xl p-5">
    <h2 className="text-center text-2xl md:text-3xl font-semibold text-primary mb-6">
      Ore por 7 dias e veja a sua graça ser alcançada.
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <img 
        src="/public/img/tercoazul03.webp" 
        alt="Imagem Destaque" 
        className="w-full md:w-1/2 max-w-[528px] rounded-xl shadow-md object-cover border border-secondary"
      />
      <img 
        src="/public/img/oleo.webp" 
        alt="Imagem Lateral" 
        className="w-full md:w-1/2 max-w-[528px] rounded-xl shadow-md object-cover border border-secondary"
      />
      <img 
        src="/public/img/vela-2.webp" 
        alt="Imagem Lateral" 
        className="w-full md:w-1/2 max-w-[528px] rounded-xl shadow-md object-cover border border-secondary"
      />
    </div>
  </div>
</section>

      {/* 6. Oferta Exclusiva */}
      <section className="container mx-auto py-14 flex justify-center items-center">
      <div className="w-full max-w-3xl mx-4 md:mx-auto p-0 md:p-6 bg-gradient-to-tr from-[#e8f1fc] via-[#f9fbff] to-white rounded-2xl shadow-xl border border-sky-100 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-0 md:gap-8">
            {/* Imagem lado esquerdo */}
            <div className="flex-1 flex justify-center items-center bg-[#d3eafd] rounded-t-2xl md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none p-6 md:p-0">
              <img 
                src={blueRosaryImg} 
                alt="Kit Terço Azul Celestial" 
                className="w-full max-w-xs rounded-xl "/>
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
                Kit Terço Azul Celestial + Guia Exclusivo de Orações
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
                  Frete Grátis
                </span>
              </div>
              <ul className="mb-4 space-y-2 text-base">
                <li className="flex items-center gap-2"><span className="bg-sky-200 rounded-full p-1"><svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span> Terço Azul feito à mão, contas resistentes e detalhes premium</li>
                <li className="flex items-center gap-2"><span className="bg-sky-200 rounded-full p-1"><svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span> Guia Exclusivo de Orações incluso</li>
                <li className="flex items-center gap-2"><span className="bg-sky-200 rounded-full p-1"><svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span> Presenteie ou reze, ideal para todas as ocasiões</li>
                <li className="flex items-center gap-2"><span className="bg-sky-200 rounded-full p-1"><svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span> Envio imediato para todo o Brasil</li>
              </ul>
              {/* Garantia e Botão */}
              <div className="flex items-center gap-2 mb-3">
                <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=50&q=80" alt="Garantia 30 dias" className="w-12 h-12 rounded-full border-2 border-green-300 shadow" />
                <span className="text-green-700 font-semibold text-base">Garantia total de 30 dias</span>
              </div>
              <a 
                href="https://seucheckout.com"
                className="block w-full md:w-auto bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-700 text-white font-bold py-4 px-8 md:rounded-full rounded-lg text-xl text-center shadow-xl transition hover-scale"
                style={{ letterSpacing: ".02em" }}
                target="_blank"
                rel="noopener"
              >
                COMPRAR AGORA
              </a>
              <div className="flex items-center gap-2 mt-3">
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M15 9l-6 6"/></svg>
                <span className="text-sky-800 text-sm font-medium">Pagamento seguro · Você recebe o código de rastreio por e-mail!</span>
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
  <section className="w-full max-w-2xl mx-auto py-16 bg-white rounded-2xl my-10 shadow">
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
          <h2 className="text-2xl font-bold text-primary mb-2">Rastreie Seu Pedido</h2>
          <p className="text-muted-foreground mb-4 text-center">Depois de realizar seu pedido, utilize seu código de rastreio abaixo para acompanhar a entrega.</p>
          <form
            className="w-full max-w-md flex flex-col gap-3"
            method="post"
            name="form-rastreio"
            action="https://exclusivo.presentedivino.com/?utm_source=organicjLj67cc3787642f7a8b7a7bf130"
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
      <footer className="bg-[#E6ECF7] py-8 mt-10">
        <div className="container mx-auto text-center flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/284/284259.png" alt="Selo" className="w-20 mb-2" />
          <img src="https://cdn-icons-png.flaticon.com/512/1047/1047247.png" alt="Pagamentos" className="w-36 mb-4" />
          <p className="text-xs text-muted-foreground font-medium">
            Presente Divino – Artigos Religiosos ©<br/>
            <a href="#" className="underline text-sky-600 hover:text-sky-900 font-semibold">Políticas de entrega e garantia</a>
            <br/>
            Todos os direitos reservados © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;