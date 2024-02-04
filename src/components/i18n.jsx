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
              title: "Por que Bitcoin?",
              text: "Seu dinheiro não é seu. O seu dinheiro é do banco, dos políticos e do governo. A qualquer momento um desses pode decidir que você não terá mais acesso ao seu dinheiro ou que ele não vale mais nada, e criticar a autoridade errada pode causar efeitos semelhantes. Com o Bitcoin você é o dono do seu dinheiro. Basta criar uma carteira de Bitcoin e você será livre para enviar, receber e guardar esse dinheiro sem medo de perder o que é seu.",
              text2: "Assista o episódio legendado de Hidden Secrets of Money:",
              link: "https://www.youtube.com/embed/uu3gJOZfkqI?si=kRg0DAAJmCzFP_mi",
              link2: "https://www.youtube.com/embed/iFDe5kUUyT0?si=mvam4byA8GLLSOGa"
            },
            {
              id: 3,              
              title: "Como comprar Bitcoin?",
              text: "Para comprar Bitcoin você usará seu dinheiro convencional e uma carteira Bitcoin, podendo comprá-lo de vendedores individuais ou em corretoras. A corretora faz a intermediação entre compradores e vendedores de Bitcoin, e é a forma mais segura de comprar Bitcoin, porém não de armazenar. Igual aos bancos, as corretoras são verdadeiros donos dos Bitcoins que você compra, e se ela falir ou hackeada, você perderá seus fundos. Elas servem para comprar Satoshis, frações da moeda, de maneira rápida e segura, mas não para guardar quantias significativas. Afim de manter seus Bitcoins de maneira segura, você precisará de uma carteira digital. Existem várias carteiras para escolher, cada uma para um tipo de usuário, mas uma de PC/Celular é suficiente para começar essa jornada. Eu particulamente uso a Electrum. ",
              text2: "Como usar a Electrum:",
              text3: "Baixe agora a Electrum:",
              link: "https://www.youtube.com/embed/4DyNaTS1HUE?si=Qvzz2ygDNqoheVO8",
              link2: "https://www.youtube.com/watch?v=-odBnMyJPb4",
              link3: "https://electrum.org/#home"
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
          Sendbt: 'Enviar',
          Madeby: 'Feito por'
        }
      },
      en: {
        translation: {
          description: [
            {
              id: 1,              
              title: "What is Bitcoin?",
              text: "Bitcoin is a digital money that was created in 2009 by Satoshi Nakamoto. Its transactions are conducted without intermediaries, meaning no banks are involved in controlling any transactions. Bitcoin is decentralized, not controlled by any authority or government, and each individual is the sovereign owner of their share. Anyone can connect and strengthen the Bitcoin network, if their computer is capable, making it a global currency that can be used anywhere in the world.",
              text2: "Read the Bitcoin whitepaper here:",
              link: "https://www.youtube.com/embed/BL5vUVQvmX4?si=TfFAMhY8GdDIOKvS",
              link2: "https://bitcoin.org/bitcoin.pdf"
            },
            {
              id: 2,              
              title: "Why Bitcoin?",
              text: "Your money is not yours. Your money belongs to the bank, politicians and government. At any moment, one of them can decide that you will no longer have access to your money or that it is worthless, and criticizing the wrong authority can have similar effects. With Bitcoin, you are the owner of your money. Just create a Bitcoin wallet, and you will be free to send, receive, and store your money without fear of losing what is rightfully yours.",
              text2: "Watch this episode of Hidden Secrets of Money:",
              link: "https://www.youtube.com/embed/3Rnqst5qCgA?si=19Jg5fLaJ874schb",
              link2: "https://www.youtube.com/embed/iFDe5kUUyT0?si=mvam4byA8GLLSOGa"
            },
            {
              id: 3,              
              title: "How to buy Bitcoin?",
              text: "To buy Bitcoin you will need to use your conventional money and a Bitcoin wallet, being able to buy it from individual sellers or exchanges. The exchange acts as an intermediary between Bitcoin buyers and sellers and is the safest way to buy Bitcoin, but not to store it. Similar to banks, exchanges are the true owners of the Bitcoins you purchase, and if they go bankrupt or are hacked, you will lose your funds. They are useful for quickly and safely buying Satoshis, fractions of the currency, but not for storing significant amounts. To keep your Bitcoins secure you will need a digital wallet. There are several wallets to choose from, each designed for a specific type of user, but a PC/Mobile wallet will be enough for the beginning of your journey. I personally use Electrum.",
              text2: "How to use Electrum:",
              text3: "Download Electrum now:",
              link: "https://www.youtube.com/embed/2FEVWUji7Kk?si=zMDQ9YEhngMMrMdj",
              link2: "https://www.youtube.com/watch?v=ZGLWPFmYwrY",
              link3: "https://electrum.org/#home"
            }
          ],
          Nav1: 'Start',
          Nav2: 'Projects',
          Nav3: 'Media',
          Nav4: 'Contact',
          Hero: 'This is a brief guide about Bitcoin, how to buy it, use it and protect it. May this guide help you understand Bitcoin better and lead you to the path of freedom, peace and prosperity.',
          Ver: 'View',
          Emailhint: 'youremail@email.com',
          Phone: 'Phone',
          Phonehint: 'Whatsapp only',
          Message: 'Message',
          Sendbt: 'Send',
          Madeby: 'Made by'
        }
      }
    }
  });

export default i18n;

