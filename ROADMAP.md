# 🗺️ SaveTag - Roadmap de Desenvolvimento

Este documento descreve as etapas planejadas para o desenvolvimento do aplicativo SaveTag, organizadas em fases incrementais com objetivos claros.

## 📋 Visão Geral do Projeto

SaveTag é um aplicativo de portfólio que demonstra a capacidade de simular tags RFID usando a tecnologia NFC de smartphones, permitindo que o dispositivo funcione como chave de acesso para residências, condomínios e outros ambientes.

## 🔄 Ciclo de Desenvolvimento

### 📱 Fase 1: Estrutura Base e Prova de Conceito (MVP)
**Objetivo**: Criar a base arquitetural do aplicativo e implementar a funcionalidade principal de NFC.

- [x] Definição da arquitetura do projeto
- [x] Configuração do ambiente de desenvolvimento com Expo
- [x] Implementação da estrutura de pastas conforme arquitetura definida
- [x] Configuração do TypeScript e ESLint
- [x] Implementação básica de navegação
- [ ] Integração inicial com NFC (expo-nfc)
- [ ] Prova de conceito: leitura de tags NFC
- [ ] Prova de conceito: emulação básica de cartão (Android)
- [ ] Testes iniciais em dispositivos reais

**Estimativa**: 4 semanas

### 🏗️ Fase 2: Fundação Offline-First e UI
**Objetivo**: Implementar persistência local e desenvolver a interface básica do usuário.

- [ ] Configuração da WatermelonDB
- [ ] Definição dos modelos de dados e esquemas
- [ ] Implementação do repositório local
- [ ] Design de interface do usuário (wireframes/protótipos)
- [ ] Implementação dos componentes UI básicos
- [ ] Tela inicial e navegação principal
- [ ] Tela de gerenciamento de tags
- [ ] Tela de configurações do app
- [ ] Implementação do tema claro/escuro

**Estimativa**: 5 semanas

### 🔄 Fase 3: Sincronização e Backend
**Objetivo**: Desenvolver backend e implementar sincronização bidirecional.

- [ ] Configuração do projeto Fastify para API
- [ ] Implementação de autenticação (JWT)
- [ ] Desenvolvimento de endpoints da API
- [ ] Implementação da camada de sincronização no app
- [ ] Gerenciamento de conflitos de sincronização
- [ ] Testes de sincronização em diferentes cenários de rede
- [ ] Implementação de monitoramento de conectividade
- [ ] Otimização de uso de banda e bateria

**Estimativa**: 6 semanas

### 🔐 Fase 4: Segurança e Recursos Avançados
**Objetivo**: Aprimorar a segurança e adicionar recursos avançados de NFC.

- [ ] Criptografia de dados sensíveis
- [ ] Implementação de biometria para proteção de tags
- [ ] Clonagem segura de cartões existentes
- [ ] Múltiplos perfis de acesso
- [ ] Compartilhamento de acesso temporário
- [ ] Histórico de utilização de tags
- [ ] Notificações de uso
- [ ] Modos de autenticação avançados
- [ ] Backup e restauração de dados

**Estimativa**: 7 semanas

### 🚀 Fase 5: Refinamento e Lançamento
**Objetivo**: Otimizar a experiência do usuário e preparar para lançamento.

- [ ] Testes de usabilidade
- [ ] Otimização de performance
- [ ] Tratamento de casos de borda
- [ ] Implementação de analytics
- [ ] Documentação final
- [ ] Preparação de materiais de marketing
- [ ] Testes beta com usuários reais
- [ ] Correções finais
- [ ] Lançamento MVP

**Estimativa**: 4 semanas

## 📈 Funcionalidades Futuras (Pós-MVP)

- **Dashboard Avançado**: Visualização de estatísticas e padrões de uso
- **Integração com Sistemas de Automação**: Conexão com sistemas de casa inteligente
- **Marketplace de Templates**: Biblioteca de modelos de cartões para diferentes sistemas
- **Modo Profissional**: Ferramentas avançadas para administradores de sistemas
- **Suporte a Múltiplos Protocolos**: Expansão além do RFID para outros protocolos de comunicação sem fio
- **API Pública**: Para desenvolvedores integrarem com outros sistemas

## 🧪 Considerações Técnicas

### Limitações e Desafios

- **Compatibilidade iOS**: Emulação de cartão NFC só é possível no Android. Para iOS, o foco será nas funcionalidades de leitura e backup de tags.
- **Variação de Hardware**: Diferentes dispositivos Android têm comportamentos distintos para NFC.
- **Segurança**: Equilíbrio entre usabilidade e proteção de credenciais sensíveis.
- **Bateria**: Otimização para minimizar consumo de bateria durante emulação NFC.

### Estratégias de Mitigação

- **Detecção de Compatibilidade**: Verificação da capacidade NFC do dispositivo e adaptação da UI.
- **Testes Abrangentes**: Matriz de testes com diversos modelos de smartphones.
- **Documentação Clara**: Informar aos usuários sobre limitações de plataforma.
- **Modo de Economia de Energia**: Opção para limitar uso de NFC em segundo plano.

## 📝 Nota sobre o Processo de Desenvolvimento

Este roadmap é um documento vivo e será ajustado conforme o projeto avança e novos insights são obtidos durante o desenvolvimento. As estimativas de tempo são aproximadas e podem variar dependendo de desafios técnicos imprevistos ou oportunidades de melhoria.
