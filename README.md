<h1 align="center">🍰 O Melhor Bolo de Cenoura</h1>

<p align="center">
  <strong>Uma página web completa, moderna e interativa com a receita tradicional de bolo de cenoura com cobertura de chocolate.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsivo-✓-success?style=for-the-badge" alt="Responsivo">
  <img src="https://img.shields.io/badge/Acessível-WCAG-blue?style=for-the-badge" alt="Acessível">
</p>

<p align="center">
  <a href="#-demonstração">Demo</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como executar</a> •
  <a href="#-publicar-no-github-pages">Publicar no GitHub Pages</a> •
  <a href="#-autor">Autor</a>
</p>

---

## 📖 Sobre o projeto

Este projeto foi desenvolvido como parte do **Desafio de Recuperação — Web Receita**, com o objetivo de criar uma página web atrativa e bem estruturada para exibir a receita do clássico **Bolo de Cenoura com Cobertura de Chocolate**.

A página vai além do desafio original, aplicando boas práticas modernas de desenvolvimento front-end: **semântica HTML5**, **CSS3 avançado** com variáveis e animações, **JavaScript interativo**, **design responsivo**, **acessibilidade**, **modo escuro** e muito mais.

---

## 🌐 Demonstração

🔗 **Acesse online:** [https://SEU-USUARIO.github.io/bolo-de-cenoura/](https://SEU-USUARIO.github.io/bolo-de-cenoura/)

> ⚠️ Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub depois de publicar.

---

## ✨ Funcionalidades

### 🎨 Design e estrutura
- ✅ **HTML5 semântico** com `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`
- ✅ **Hierarquia visual** clara com `<h1>`, `<h2>` e `<h3>`
- ✅ **Listas ordenadas (`<ol>`)** para o passo a passo
- ✅ **Listas não ordenadas (`<ul>`)** para ingredientes e equipamentos
- ✅ **Imagens otimizadas** com atributo `alt` descritivo
- ✅ **Paleta de cores harmônica** (laranjas, marrons e creme)
- ✅ **Tipografia Google Fonts** (Pacifico, Lora e Poppins)
- ✅ **Design 100% responsivo** (desktop, tablet e mobile)

### 🚀 Funcionalidades interativas
- 🌙 **Modo claro / escuro** com persistência no `localStorage`
- 🧮 **Calculadora de porções** que recalcula os ingredientes automaticamente
- ✅ **Checklist de ingredientes** marcáveis com efeito visual
- 📊 **Acompanhamento de progresso** dos passos do preparo
- 🎉 **Animação de confetes** ao completar todos os passos
- ⏱️ **Cronômetro do forno** funcional (40 minutos)
- ⭐ **Sistema de avaliação por estrelas** interativo
- 📧 **Formulário de newsletter** com validação de e-mail
- 🖼️ **Galeria de fotos** com lightbox para visualização ampliada
- 🖨️ **Botão de imprimir** com CSS otimizado para impressão
- 🔗 **Botão de compartilhar** (Web Share API + clipboard fallback)
- ⬆️ **Botão "voltar ao topo"** com aparição animada
- 📊 **Barra de progresso de leitura** no topo da página

### 🎬 Animações e efeitos
- ✨ Tela de carregamento inicial (preloader) com animação
- 💫 Animações ao rolar (Intersection Observer)
- 🎈 Bolhas e emojis flutuantes no cabeçalho
- 🌊 Recorte decorativo entre seções (clip-path)
- 🎨 Glass morphism na barra de navegação
- 🎯 Hover effects em todos os elementos interativos
- 🍞 Sistema de toast para notificações

### 🔧 Conteúdo da receita
- 📜 História e origem do bolo de cenoura brasileiro
- 🛒 Lista completa de ingredientes
- 🔄 Substituições inteligentes para ingredientes
- 🥣 Equipamentos necessários
- 📝 Modo de preparo passo a passo
- 📊 Tabela nutricional com barras animadas
- 🎚️ Medidor de dificuldade visual
- 💡 Dicas de ouro do chef
- 🎨 Variações da receita
- 🏠 Como conservar (ambiente, geladeira, congelador)
- ☕ Sugestões de harmonização (bebidas)
- ❓ FAQ — Perguntas frequentes
- 💬 Depoimentos de usuários
- 🍰 Receitas relacionadas

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização, animações, responsividade |
| **JavaScript (ES6+)** | Interatividade e funcionalidades dinâmicas |
| **Google Fonts** | Tipografia (Pacifico, Lora, Poppins) |
| **Intersection Observer API** | Animações ao rolar |
| **Web Share API** | Compartilhamento nativo |
| **localStorage** | Persistência do tema |

---

## 📁 Estrutura do projeto

```
bolo-de-cenoura/
│
├── index.html          # Estrutura HTML semântica
├── style.css           # Estilos, animações e responsividade
├── script.js           # Funcionalidades interativas em JavaScript
└── README.md           # Documentação do projeto
```

---

## 🚀 Como executar

### Opção 1: Localmente (mais simples)

1. **Clone ou baixe** este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/bolo-de-cenoura.git
   ```

2. **Abra o arquivo** `index.html` no seu navegador favorito.

   > Pronto! Não precisa de servidor nem instalação de nada.

### Opção 2: Servidor local (recomendado)

Para evitar problemas com algumas APIs do navegador (como `localStorage`), use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (instale o http-server primeiro)
npx http-server

# Com a extensão Live Server do VS Code
# Clique com o botão direito em index.html → "Open with Live Server"
```

Depois acesse `http://localhost:8000` no navegador.

---

## 🌍 Publicar no GitHub Pages

Siga estes passos para colocar sua receita online gratuitamente:

### 1️⃣ Criar o repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"** (botão verde no canto superior direito)
3. Dê um nome como `bolo-de-cenoura` ou `receita-bolo-cenoura`
4. Marque como **Public**
5. Clique em **"Create repository"**

### 2️⃣ Subir os arquivos

**Opção A — Pelo navegador (mais fácil):**
1. Na página do seu repositório vazio, clique em **"uploading an existing file"**
2. Arraste os arquivos `index.html`, `style.css`, `script.js` e `README.md`
3. Escreva uma mensagem de commit (ex: "Primeiro envio")
4. Clique em **"Commit changes"**

**Opção B — Pelo Git (terminal):**
```bash
git init
git add .
git commit -m "Primeiro envio do projeto"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/bolo-de-cenoura.git
git push -u origin main
```

### 3️⃣ Ativar o GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **"Source"**, selecione a branch `main` e a pasta `/ (root)`
4. Clique em **Save**
5. Aguarde alguns segundos. O link aparecerá no topo:
   ```
   https://SEU-USUARIO.github.io/bolo-de-cenoura/
   ```

🎉 **Pronto! Sua receita está online!**

---

## ♿ Acessibilidade

O projeto foi desenvolvido com atenção à acessibilidade:

- ✅ HTML semântico para leitores de tela
- ✅ Atributos `aria-label` em todos os botões interativos
- ✅ Atributos `alt` descritivos nas imagens
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Navegação por teclado (`tab` + `enter` + `esc`)
- ✅ Foco visível (`:focus-visible`)
- ✅ Respeito a `prefers-reduced-motion`
- ✅ Tag de idioma (`lang="pt-BR"`)

---

## 📱 Responsividade

A página foi testada e otimizada para:

| Dispositivo | Largura | Status |
|-------------|---------|--------|
| 📱 Celular pequeno | ≤ 400px | ✅ |
| 📱 Celular | 401px – 600px | ✅ |
| 📱 Tablet | 601px – 768px | ✅ |
| 💻 Desktop | > 768px | ✅ |

---

## 🎯 Critérios de aceite atendidos

- ✅ **Semântica HTML** — uso correto de tags
- ✅ **Hierarquia Visual** — título maior e mais evidente que subtítulos
- ✅ **Responsividade Básica** — uso de `%`, `clamp()` e `max-width`
- ✅ **Estética** — combinação harmoniosa de cores e bom contraste
- ✅ **JavaScript** — botão funcional com alerta personalizado
- ✅ **Link Ativo** — pronto para hospedar no GitHub Pages

---

## 📸 Capturas de tela

> 💡 Dica: depois de fazer deploy, capture algumas telas e adicione aqui usando:
>
> ```markdown
> ![Tela inicial](screenshots/inicial.png)
> ![Modo escuro](screenshots/escuro.png)
> ![Mobile](screenshots/mobile.png)
> ```

---

## 👨‍💻 Autor

<table>
  <tr>
    <td align="center">
      <strong>João Gabriel</strong><br>
      <em>Estudante & desenvolvedor web em formação</em><br><br>
      🎓 Desenvolvido como projeto de recuperação de Web<br>
      💻 HTML5 · CSS3 · JavaScript<br>
      🧡 Feito com muito carinho
    </td>
  </tr>
</table>

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais.
Sinta-se à vontade para clonar, estudar e adaptar.

---

<p align="center">
  Feito com 🧡 e muita 🥕 por <strong>João Gabriel</strong> · 2026
</p>

<p align="center">
  Se este projeto te ajudou, deixe uma ⭐ no repositório!
</p>
