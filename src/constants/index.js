import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
    
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "?",
        points: [
            "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
            "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar",
            "Implementar design responsivo e garantir compatibilidade entre navegadores.",
            "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "?",
        points: [
            "Desenvolvimento e manutenção de aplicações web utilizando React.js e outras tecnologias relacionadas.",
            "Colaboração com equipes multifuncionais, incluindo designers, gerentes de produtos e outros desenvolvedores, para criar produtos de alta qualidade.",
            "Implementação de design responsivo e garantia de compatibilidade entre navegadores.",
            "Participação em revisões de código e fornecimento de feedback construtivo para outros desenvolvedores."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "?",
        points: [
            "Desenvolvendo e mantendo aplicações web utilizando React.js e outras tecnologias relacionadas.",
            "Colaborando com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
            "Participando de revisões de código e fornecendo feedback construtivo para outros desenvolvedores."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "?",
        points: [
            "Desenvolvendo e mantendo aplicações web utilizando React.js e outras tecnologias relacionadas.",
            "Colaborando com equipes multidisciplinares, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
            "Participando de revisões de código e fornecendo feedback construtivo para outros desenvolvedores."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Severino-Gouveia',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/severino-gouveia-2591ba261/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Santa Cecília',
        description: 'O aplicativo está em desenvolvimento e foi implantado em uma hospedagem gratuita. No entanto, há um atraso significativo na inicialização do aplicativo devido à sua permanência em estado de hibernação - Os usuários podem se registrar para participar de eventos selecionando as opções desejadas no formulário e fornecendo suas informações de contato. Eles também têm a opção de receber um email de confirmação. O administrador pode visualizar e gerenciar os eventos e as respostas dos usuários através da interface de administração.',
        link: 'https://santa-cecilia.onrender.com/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Clone do Threads ',
        description: 'Uma réplica completa da popular plataforma  "Threads", permitindo que os usuários postem e participem de conversas encadeadas.',
        link: 'https://santa-cecilia.onrender.com/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Aplicativo para encontrar carros',
        description: 'Projetei e construí um aplicativo móvel para encontrar e comparar carros no mercado, agilizando o processo de compra de carros.',
        link: 'https://santa-cecilia.onrender.com/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Clone do Instagram ',
        description: 'Construiu um clone completo do Instagram, permitindo aos usuários compartilhar fotos e se conectar com amigos em um ambiente familiar de mídia social.',
        link: 'https://santa-cecilia.onrender.com/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'web App Construcão',
        description: 'Desenvolvi uma aplicação web para listagens de imóveis, facilitando a busca de imóveis e conectando compradores com vendedores.',
        link: 'https://github.com/Severino-Gouveia/Construcao',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Clone chat gpt ',
        description: 'Aplicativo que utiliza IA para gerar automaticamente resumos concisos e informativos a partir de longos conteúdos de texto ou blogs.',
        link: 'https://github.com/Severino-Gouveia/my-chat',
    }
];