# 💼 Portfólio Profissional - Eduardo Abrahão

Landing page moderna e impactante para desenvolvedor Full Stack, focada em destacar produtos reais, impacto mensurável e maturidade técnica.

## 🎯 Objetivo

Posicionar-me como **Desenvolvedor Full Stack** focado em resolver problemas reais, destacando:
- ✅ SaaS em produção (sistema de agendamento médico)
- ✅ Experiência profissional com impacto mensurável
- ✅ Stack técnica completa (Frontend + Backend)
- ✅ Visão de produto e clareza de comunicação

## 🎨 Design

### Características
- **Dark Mode Premium**: Paleta sóbria e profissional
- **Minimalista**: Foco no conteúdo e impacto
- **Moderno**: Gradientes sutis, micro-animações e tipografia forte
- **Responsivo**: Otimizado para todos os dispositivos

### Paleta de Cores
- Background Principal: `#0a0a0a`
- Background Secundário: `#111111`
- Accent (Azul): `#3b82f6`
- Gradient: `#3b82f6` → `#8b5cf6`
- Sucesso: `#10b981`

### Tipografia
- **Display/Headings**: Space Grotesk
- **Body**: Inter
- Tamanhos responsivos com `clamp()`

## 📁 Estrutura do Projeto

```
Portifolio_Web/
├── index.html          # HTML semântico e estruturado
├── styles.css          # CSS moderno com variáveis e grid
├── script.js           # JavaScript vanilla com classes ES6
├── Imagens/            # Assets visuais
│   ├── eu.jpeg
│   ├── EA.png
│   └── ...
└── README.md
```

## 🚀 Features Implementadas

### Hero Section
- Headline forte e direta
- Animação de digitação no texto gradiente
- CTAs destacados (Ver Projetos + Contato)
- Links sociais (GitHub, LinkedIn, Email)
- Code window animado mostrando código real

### Sobre Mim
- Texto conciso e estratégico
- Highlights com números de impacto
- Foto profissional com efeito gradient
- Animação on-scroll

### Projeto em Destaque
- SaaS de Agendamento Médico em produção
- Descrição do problema e solução
- Features principais listadas
- Stack técnica com tags
- Métricas de impacto real

### Outros Projetos
- Cards limpos e objetivos
- Links para demo/repositório
- Tecnologias utilizadas
- Estatísticas (linhas de código)

### Experiência Profissional
- Foco em automação e impacto
- Achievements mensuráveis
- Tecnologias utilizadas

### Stack Técnica
- Categorizada (Frontend, Backend, Database, Tools)
- Ícones SVG customizados
- Badge de idioma (Inglês Avançado)

### Contato
- Informações completas
- CTA convidativo
- Links sociais

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Semântico e acessível
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+**: Classes, Modules, Intersection Observer

### Design System
- Sistema de cores consistente
- Spacing e typography escaláveis
- Componentes reutilizáveis

### Performance
- Fontes otimizadas (Google Fonts)
- SVGs inline para ícones
- Lazy loading para animações
- Debounce em scroll events

## 📱 Responsividade

### Breakpoints
- Desktop: `> 1024px`
- Tablet: `768px - 1024px`
- Mobile: `< 768px`
- Small Mobile: `< 480px`

### Otimizações Mobile
- Menu hamburger funcional
- Grid adaptativo
- Tipografia responsiva com `clamp()`
- Touch targets adequados (min 44px)

## ⚡ Animações

### Micro-animações
- Fade in on scroll
- Hover effects nos cards
- Typing animation no hero
- Counter animation nos números
- Smooth scroll

### Performance
- CSS `will-change` para otimização
- `requestAnimationFrame` para animações JS
- Intersection Observer para lazy animations
- Suporte a `prefers-reduced-motion`

## 🎯 SEO & Acessibilidade

### SEO
- Meta tags completas
- Títulos hierárquicos
- Alt text em imagens
- URLs semânticas

### Acessibilidade (a11y)
- ARIA labels
- Navegação por teclado
- Contraste adequado (WCAG AA)
- Focus states visíveis

## 🚀 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/Abrahao02/Portifolio_Web.git
cd Portifolio_Web
```

### 2. Abra o projeto
Simplesmente abra `index.html` no seu navegador favorito.

Ou use um servidor local:
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# VS Code Live Server
# Clique com botão direito em index.html > Open with Live Server
```

### 3. Personalize
Edite as variáveis CSS em `:root` para customizar cores:
```css
:root {
    --color-accent: #3b82f6;  /* Mude para sua cor */
    --font-primary: 'Inter';  /* Mude a fonte */
}
```

## 📊 Métricas de Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔧 Customização

### Adicionar novo projeto
Adicione um novo `.project-card` na seção `other-projects`:
```html
<div class="project-card">
    <div class="project-header">
        <!-- Seu conteúdo -->
    </div>
    <!-- ... -->
</div>
```

### Mudar cores
Edite as variáveis CSS no `:root`:
```css
--color-accent: #SEU_HEX;
--color-gradient-start: #SEU_HEX;
--color-gradient-end: #SEU_HEX;
```

### Adicionar animação
Use a classe `.fade-in` e adicione ao array em `script.js`:
```javascript
const elementsToAnimate = [
    '.seu-elemento',
    // ...
];
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio!

## 🤝 Contato

**Eduardo Abrahão**
- 📧 Email: eduardo.abrahao@hotmail.com
- 💼 LinkedIn: [Eduardo Abrahão](https://www.linkedin.com/in/eduardo-abrah%C3%A3o-160957238/)
- 🐙 GitHub: [@Abrahao02](https://github.com/Abrahao02)
- 📱 Telefone: +55 (21) 99437-7887
- 📍 Rio de Janeiro, Brasil

---

**Desenvolvido com ☕ e código por Eduardo Abrahão**

*Buscando oportunidades como Desenvolvedor Full Stack Júnior/Trainee*
