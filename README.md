# SaveTag - Simulador de Tags RFID via NFC

<p align="center">
  <img src="/api/placeholder/200/200" alt="SaveTag Logo" />
</p>

## 📱 Sobre o Projeto

SaveTag é um aplicativo desenvolvido em React Native usando Expo que permite simular tags RFID através da tecnologia NFC do smartphone. Ideal para acesso a residências, condomínios, escritórios e outros ambientes que utilizam sistemas de RFID para controle de acesso.

### Principais Funcionalidades

- 🔐 Emulação de cartões RFID através de NFC
- 💾 Armazenamento offline de múltiplas tags
- 🔄 Sincronização bidirecional de dados
- 👤 Gerenciamento de perfis de acesso
- 📊 Dashboard de utilização

## 🚀 Tecnologias

- **React Native** - Framework de desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento React Native
- **TypeScript** - Linguagem de programação tipada
- **WatermelonDB** - Banco de dados local para persistência offline
- **Fastify** - Backend API para sincronização de dados

## 🏗️ Arquitetura

O aplicativo segue uma arquitetura moderna baseada em princípios SOLID, com abordagem offline-first e sincronização bidirecional. A estrutura do projeto está organizada em camadas bem definidas:

```
src/
├── app/                     # Inicialização e páginas
├── assets/                  # Images, fonts e etc
├── core/                    # Domínio puro (entidades, tipos, regras de negócio)
├── features/                # Funcionalidades isoladas
├── infrastructure/          # Integrações externas (API, DB, auth)
├── ui/                      # Design system e componentes visuais
└── utils/                   # Funções auxiliares
```

## 🔒 Funcionalidades de NFC

- Leitura e escrita de tags NFC
- Emulação de cartão (Host Card Emulation) para Android
- Clonagem segura de credenciais existentes
- Armazenamento criptografado de credenciais

## 📱 Compatibilidade

- **Android**: Emulação completa de cartão NFC (HCE) para dispositivos compatíveis
- **iOS**: Leitura e escrita de tags NFC (emulação não disponível devido a restrições da Apple)

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Valdeijr/savetag-app-react-native.git

# Instale as dependências
cd save-tag
npm install

# Inicie o projeto
npx expo start
```

## 📊 Status do Projeto

Este projeto está atualmente em desenvolvimento ativo. Veja o [ROADMAP.md](./ROADMAP.md) para acompanhar o progresso e os próximos passos.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.





