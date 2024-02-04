import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pt: {
        translation: {
          description: [
            {
              id: 1,              
              title: "O que é Bitcoin?",
              text: "O Bitcoin é uma moeda digital que foi criada em 2009 por Satoshi Nakamoto. Suas transações são feitas sem intermediários, ou seja, sem bancos para controlar quaisquer negociações! O Bitcoin é descentralizado, não é controlado por nenhuma autoridade ou governo e cada indivíduo é dono soberano de sua parcela. Qualquer um pode se conectar e fortalecer a rede do Bitcoin, se seu computador for capaz, fazendo dele uma moeda global que pode ser usada em todo lugar do mundo.",
              text2: "Leia aqui o whitepaper do Bitcoin:",
              link: "https://www.youtube.com/embed/bbfRK6J47Kk?si=zrHp2zCMao3o674S&amp;start=9",
              link2: "https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf"
            },
            {
              id: 2,              
              title: "Conceito 2",
              text: "Site conceito para a empresa Plugreen",
              text2: "Feito com React+Vite para desktops e tablets. Possui calculadora de descarbonização baseada em API própria",
              link: "https://www.youtube.com/embed/uu3gJOZfkqI?si=kRg0DAAJmCzFP_mi"
            },
            {
              id: 3,              
              title: "Site oficial Plugreen",
              text: "Pagina oficial da empresa Plugreen",
              text2: "Feito com Wordpress para todas as telas",
              link: "https://www.youtube.com/embed/4DyNaTS1HUE?si=Qvzz2ygDNqoheVO8"
            }
          ],
          Nav1: 'Início',
          Nav2: 'Projetos',
          Nav3: 'Redes',
          Nav4: 'Contato',
          Hero: 'Este é um breve guia sobre o Bitcoin, como comprá-lo, usá-lo e protegê-lo. Que esse guia possa lhe ajudar a entender melhor o Bitcoin e te levar para o caminho da liberdade, paz e prosperidade.',
          Ver: 'Ver',
          Emailhint: 'seuemail@email.com',
          Phone: 'Telefone',
          Phonehint: 'Apenas Whatsapp',
          Message: 'Mensagem',
          Sendbt: 'Enviar'
        }
      },
      en: {
        translation: {
          description: [
            {
              id: 1,              
              title: "What is Bitcoin?",
              text: "Concept website for Plugreen company",
              text2: "Built with React+Vite for all screens. Features a decarbonization calculator based on its own API",
              link: "https://pgreenv1.netlify.app/",
              link2: "https://bitcoin.org/bitcoin.pdf"
            },
            {
              id: 2,              
              title: "Concept 2",
              text: "Concept website for Plugreen company",
              text2: "Built with React+Vite for desktops and tablets. Features a decarbonization calculator based on its own API",
              link: "https://plugreenrascunho.netlify.app/"
            },
            {
              id: 3,              
              title: "Official Plugreen Website",
              text: "Official page of the Plugreen company",
              text2: "Built with Wordpress for all screens",
              link: "https://plugreen.co/"
            }
          ],
          Nav1: 'Start',
          Nav2: 'Projects',
          Nav3: 'Media',
          Nav4: 'Contact',
          Hero: 'What is Bitcoin? ',
          Ver: 'View',
          Emailhint: 'youremail@email.com',
          Phone: 'Phone',
          Phonehint: 'Whatsapp only',
          Message: 'Message',
          Sendbt: 'Send'
        }
      }
    }
  });

export default i18n;

