# linkShield

Este projeto foi desenvolvido durante a **Web3 Week** — uma semana intensiva de aprendizado sobre blockchain e desenvolvimento Web3 promovida por [LuizTools](https://luiztools.com.br/) e patrocinada pela **BNB Chain**.

## Descrição

O linkShield é um projeto que aplica conceitos de Web3, utilizando contratos inteligentes e integração com a Ethereum. O objetivo é proporcionar uma experiência prática de desenvolvimento blockchain, focando em segurança e descentralização de aplicações.

- **Contrato na BNB Chain Testnet:**  
  Consulte e verifique o contrato inteligente do linkShield em [BSCScan Testnet](https://testnet.bscscan.com/address/0xac89f50b67d9ab86a2e5e38e55344d95a27b5002).

## Estrutura de Pastas e Arquivos

O projeto está organizado da seguinte forma:

```
dapp/
├── public/
│   ├── Gemini_Generated_Image.png     # Imagem gerada pelo Gemini
│   └── logo-carteira-met.png          # Logo do projeto linkShield
├── src/
│   ├── app/
│   │   ├── [linkId]/
│   │   │   └── page.js                # Página dinâmica para cada link protegido
│   │   └── page.js                    # Página principal do aplicativo
│   └── services/
│       ├── ABI.js                     # Arquivo com a definição do ABI do contrato inteligente
│       └── web3Services.js            # Serviços para interação com a Web3/Ethereum
```

### Descrição das Pastas e Arquivos

- **dapp/**  
  Pasta principal do projeto front-end, onde está a aplicação descentralizada (DApp).

- **public/**  
  Arquivos estáticos, como imagens e logos utilizadas no projeto.

- **src/app/**  
  Contém os componentes e páginas React do aplicativo.  
  - **[linkId]/page.js**: Página dinâmica gerada para cada link protegido pelo linkShield.  
  - **page.js**: Página principal do aplicativo.

- **src/services/**  
  Serviços responsáveis por interagir com a blockchain.  
  - **ABI.js**: Arquivo com a interface do contrato inteligente.  
  - **web3Services.js**: Funções para conexão e comunicação com a Ethereum/Web3.

## Tecnologias Utilizadas

- **JavaScript/React** para desenvolvimento front-end.
- **Solidity** para os contratos inteligentes.
- **Ethereum/BNB Chain** como blockchain principal.
- Ferramentas Web3 (como ethers.js ou web3.js).

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/UrsulaASobrinho/linkShield.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm start
   ```

## Sobre a Web3 Week

A Web3 Week é um evento promovido por LuizTools para difundir conhecimento sobre blockchain e Web3 no Brasil, com apoio de grandes empresas como a BNB Chain.

## Licença

Este projeto está licenciado sob a **MIT License**.

---

Desenvolvido por [UrsulaASobrinho](https://github.com/UrsulaASobrinho) durante a Web3 Week.
