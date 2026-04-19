# chadil.ui

Beautifully designed components built with Radix UI and Tailwind CSS.
A UI component library for the next generation of web apps.

## Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Headless accessible components
- **Lucide React** - Icon library

## Arquitetura Limpa - Clean Architecture

Projeto organizado por módulos de domínio, separando responsabilidades em camadas claras:

```
chadil-ui/
├── src/
│   ├── app/                       # Next.js App Router (apenas entry points)
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Landing page (re-export)
│   │   ├── globals.css           # Global styles
│   │   ├── docs/                 # Docs routes
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── installation/
│   │   │   └── themes/
│   │   └── components/           # Component showcase routes
│   │       ├── button/
│   │       ├── input/
│   │       └── card/
│   │
│   ├── modules/                   # Domínios/Funcionalidades
│   │   ├── landing/              # Módulo: Landing Page
│   │   │   ├── page.tsx          # Entry point
│   │   │   ├── sections/         # Seções da página
│   │   │   │   ├── hero.tsx
│   │   │   │   ├── features.tsx
│   │   │   │   └── showcase.tsx
│   │   │   ├── components/       # Componentes específicos
│   │   │   │   ├── cta-button.tsx
│   │   │   │   └── feature-card.tsx
│   │   │   └── hooks/            # Hooks específicos
│   │   │       └── use-scroll-animation.ts
│   │   │
│   │   ├── docs/                 # Módulo: Documentação
│   │   │   ├── layout.tsx        # Docs layout com sidebar
│   │   │   ├── pages/            # Páginas de conteúdo
│   │   │   │   ├── introduction.tsx
│   │   │   │   ├── installation.tsx
│   │   │   │   └── themes.tsx
│   │   │   ├── components/       # Componentes docs
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── navigation.tsx
│   │   │   │   ├── code-block.tsx
│   │   │   │   └── component-preview.tsx
│   │   │   ├── content/          # MDX/JSON de conteúdo
│   │   │   │   ├── introduction.mdx
│   │   │   │   ├── installation.mdx
│   │   │   │   └── themes.mdx
│   │   │   └── hooks/
│   │   │       └── use-active-section.ts
│   │   │
│   │   └── components/           # Módulo: Componentes UI
│   │       ├── button/
│   │       │   ├── index.tsx     # Public API
│   │       │   ├── button.tsx    # Implementação
│   │       │   ├── button.types.ts
│   │       │   ├── button.variants.ts
│   │       │   └── page.tsx      # Showcase page
│   │       ├── input/
│   │       │   ├── index.tsx
│   │       │   ├── input.tsx
│   │       │   ├── input.types.ts
│   │       │   └── page.tsx
│   │       └── card/
│   │           ├── index.tsx
│   │           ├── card.tsx
│   │           ├── card.types.ts
│   │           ├── card.variants.ts
│   │           └── page.tsx
│   │
│   └── shared/                    # Recursos Compartilhados
│       ├── components/            # Layout global
│       │   ├── header.tsx
│       │   └── footer.tsx
│       ├── ui/                   # UI primitives base
│       │   └── index.ts
│       ├── lib/                  # Utils/Helpers
│       │   └── utils.ts
│       ├── hooks/                # Hooks genéricos
│       │   └── use-media-query.ts
│       └── styles/               # Tokens/Design system
│           └── tokens.ts
│
├── public/                        # Assets estáticos
│   ├── images/
│   └── assets/
│
├── package.json
├── tsconfig.json                  # Paths: @/* @modules/* @shared/* @app/*
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Path Aliases

- `@/*` → `./src/*`
- `@modules/*` → `./src/modules/*`
- `@shared/*` → `./src/shared/*`
- `@app/*` → `./src/app/*`

## Getting Started

```bash
npm install
npm run dev
```

## Theme

Dark theme with cyan/turquoise accents (`#22d3ee`)

- Background: `#0a0a0a`
- Card: `#111111`
- Border: `#262626`
- Primary: `#22d3ee` (cyan glow)
