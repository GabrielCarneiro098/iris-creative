# Iris Creative Office

Site institucional da **Iris Creative Office**, agência de design global e digital fundada no Brasil. O projeto apresenta os serviços da agência, portfólio e canais de contato, além de uma landing page dedicada ao programa **More Guests**.

## Sobre o projeto

A Iris Creative Office ajuda empresas e empreendedores a criar marcas conscientes e magnéticas. O site reúne:

- Apresentação da agência e identidade visual
- Destaque de projetos do portfólio (Behance)
- Seção de serviços: brand identity, website building, naming e content creation
- Carrossel com posts do Instagram
- Formulário de contato (Typeform)
- Página separada para o serviço **More Guests Program**

## Páginas

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Página principal da agência |
| `moreguestsprogram.html` | Landing page do More Guests Program |

## Tecnologias

- HTML5, CSS3 e JavaScript (vanilla)
- [Google Fonts](https://fonts.google.com/) — Montserrat, Bebas Neue, Playfair Display, Raleway
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) — carrossel do Instagram
- [ScrollReveal](https://scrollrevealjs.org/) — animações ao rolar a página
- [jQuery](https://jquery.com/) — dependência do Owl Carousel
- [Bootstrap](https://getbootstrap.com/) — bundle JS (parcial)

## Estrutura do projeto

```
iris-creative/
├── index.html              # Página principal
├── moreguestsprogram.html  # Landing page More Guests
├── js/
│   └── script.js           # Animações e menu mobile
├── style/
│   ├── style.css           # Estilos principais
│   ├── responsive.css      # Responsividade e menu lateral
│   └── guest.css           # Estilos da página More Guests
├── img/                    # Imagens e assets visuais
├── icofolder/              # Favicon
├── jquery/                 # jQuery (local)
├── owlcarousel/            # Owl Carousel (local)
└── bootstrap/              # Bootstrap (local)
```

## Como executar

Não é necessário build nem instalação de dependências. Basta abrir os arquivos HTML no navegador ou servir a pasta com um servidor local.

**Opção 1 — Abrir diretamente**

Abra `index.html` no navegador.

**Opção 2 — Servidor local (recomendado)**

Com Python:

```bash
python -m http.server 8080
```

Com Node.js (`npx`):

```bash
npx serve .
```

Acesse `http://localhost:8080` no navegador.

## Responsividade

O layout é fluido e adaptado para desktop, tablet e mobile:

- Tipografia e espaçamentos com unidades relativas (`rem`, `clamp`)
- Menu lateral (drawer) no mobile, a partir de 900px de largura
- Carrossel do Instagram com quantidade de itens ajustada por breakpoint
- Página More Guests com layout em coluna em telas menores

## Links externos

- [Portfólio no Behance](https://www.behance.net/iriscrportfol)
- [Instagram](https://www.instagram.com/iriscreativeoffice/)
- [Contato (Typeform)](https://ys2rzukwk67.typeform.com/to/SarRKUkP)

## Licença

Projeto de uso interno da Iris Creative Office. Consulte os repositórios de terceiros (`owlcarousel`, `bootstrap`, `jquery`) para as licenças das dependências incluídas.
