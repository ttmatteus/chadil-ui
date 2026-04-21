# @antigravity/ui — Documentation Site

> Site de documentação oficial da biblioteca de componentes `@antigravity/ui`.  
> Construído com **Next.js**, **TypeScript** e **Tailwind CSS**.

---

## Visão Geral

Este repositório contém o site de documentação da `@antigravity/ui`, uma biblioteca de componentes React com estética dark/neon, focada em developer experience e design system coeso.

A documentação cobre instalação, temas, e referência de cada componente disponível na biblioteca.

---

## Stack

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + estilos inline
- **Fontes:** Inter, Space Grotesk
- **Ícones:** Lucide React
- **Versão atual:** `v1.0.4-alpha`

---

## Estrutura de Componentes

### `<Sidebar />`
Barra de navegação lateral com links para todas as seções da documentação.

- Links de navegação agrupados por categoria (Geral e Componentes)
- Indicador de rota ativa via `usePathname()` (Next.js)
- Ações rápidas no rodapé: Settings, Support e Feedback
- Largura fixa de `256px`

**Rotas cobertas:**

| Rota           | Seção        |
|----------------|--------------|
| `/introduction` | Introduction |
| `/installation` | Installation |
| `/themes`       | Themes       |
| `/button`       | Button       |
| `/input`        | Input        |
| `/card`         | Card         |

---

### `<PageHeader />`
Cabeçalho de cada página da documentação.

```tsx
<PageHeader
  title="Getting Started"
  subtitle="Tudo que você precisa para integrar @antigravity/ui ao seu projeto."
/>
```

**Props:**

| Prop       | Tipo     | Descrição                    |
|------------|----------|------------------------------|
| `title`    | `string` | Título principal da página   |
| `subtitle` | `string` | Descrição/subtítulo da página |

---

### `<InstallationSection />`
Seção de instalação com instruções e exemplo de código.

Renderiza automaticamente um `<CodeBlock>` com um exemplo de uso da biblioteca.

---

### `<CodeBlock />`
Bloco de código com suporte a syntax highlighting manual e botão de cópia.

```tsx
<CodeBlock filename="APP.TSX">
  {/* conteúdo JSX com spans coloridos */}
</CodeBlock>
```

**Props:**

| Prop       | Tipo        | Descrição                          |
|------------|-------------|------------------------------------|
| `filename` | `string`    | Nome exibido no cabeçalho do bloco |
| `children` | `ReactNode` | Conteúdo do código (com spans)     |

- Ao clicar em copiar, o texto é extraído recursivamente dos nós React e enviado para a área de transferência.
- Ícone muda para ✓ por 2 segundos após a cópia.

---

### `<InfoCard />`
Card informativo com ícone, título e descrição. Usado para destacar notas, avisos ou recursos.

```tsx
<InfoCard
  icon={<LightbulbIcon />}
  title="Tree-shakeable"
  description="Importe apenas o que você usa."
/>
```

**Props:**

| Prop          | Tipo        | Descrição              |
|---------------|-------------|------------------------|
| `icon`        | `ReactNode` | Ícone do card          |
| `title`       | `string`    | Título do card         |
| `description` | `ReactNode` | Descrição/corpo do card |

---

### `<FooterVisual />`
Imagem de destaque no rodapé de uma página, com gradiente de fade na parte inferior.

```tsx
<FooterVisual
  src="/images/hero.png"
  alt="Preview da biblioteca"
/>
```

**Props:**

| Prop  | Tipo     | Descrição              |
|-------|----------|------------------------|
| `src` | `string` | Caminho da imagem      |
| `alt` | `string` | Texto alternativo      |

---

### `<NextPageNav />`
Navegação para a próxima página da documentação, posicionada no canto inferior direito.

```tsx
<NextPageNav
  label="Próximo"
  title="Installation"
  href="/installation"
/>
```

**Props:**

| Prop    | Tipo     | Descrição                    |
|---------|----------|------------------------------|
| `label` | `string` | Rótulo acima do título       |
| `title` | `string` | Nome da próxima página       |
| `href`  | `string` | URL de destino               |

---

## Design System

| Token        | Valor                   | Uso                        |
|--------------|-------------------------|----------------------------|
| Background   | `#0E0E0E`               | Cor de fundo principal     |
| Surface      | `#131313`               | Cards e painéis            |
| Accent       | `#81ECFF`               | Neon cyan — destaques      |
| Purple       | `#AC89FF`               | Keywords no código         |
| Text         | `#FFFFFF`               | Texto primário             |
| Muted        | `#ABABAB`               | Texto secundário           |
| Border       | `rgba(72, 72, 72, 0.2)` | Bordas e divisores         |
| Font primary | `Inter`                 | Corpo e headings           |
| Font mono    | `monospace`             | Blocos de código           |
| Font display | `Space Grotesk`         | Labels e navegação         |

---

## Como Usar a Biblioteca

```bash
npm install @antigravity/ui
```

```tsx
import { Button, Container } from "@antigravity/ui";

export default function App() {
  return (
    <Container>
      <Button variant="neon">Deploy</Button>
    </Container>
  );
}
```

---

## Rodando a Documentação Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## Licença

MIT © antigravity/ui
