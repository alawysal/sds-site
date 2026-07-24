# SAL Data Solutions Website

Website institucional multilíngue da SAL Data Solutions, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

## Requisitos

- Node.js 18.17 ou superior (Node.js 20 LTS recomendado)
- npm 9 ou superior

Confirme as versões instaladas:

```bash
node --version
npm --version
```

## Instalação

```bash
cd /Users/alawy-pc/Downloads/codex/sds/sds-site
npm install
```

## Executar localmente

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Comandos disponíveis

```bash
npm run dev        # inicia o servidor de desenvolvimento
npm run typecheck  # verifica os tipos TypeScript
npm run build      # cria o build de produção
npm run start      # executa o build de produção
```

## Idiomas e páginas

O site possui conteúdo em inglês, português e francês:

- Inglês: `/careers`
- Português: `/pt/careers`
- Francês: `/fr/careers`

Os textos traduzidos ficam em `lib/i18n.ts`.

## Gerir vagas abertas

As vagas são geridas pelo array `openRoles` em `data/site.ts`. Para adicionar uma vaga, inclua um novo objeto:

```ts
{
  title: "Senior Data Engineer",
  department: "Data Engineering",
  location: "Remote",
  employmentType: "Full-time",
  description: "Descrição da vaga.",
  applyUrl: "mailto:careers@saldatasolutions.com",
  isPublished: true,
  publicationEndDate: "2026-12-31"
}
```

Campos de publicação:

- `isPublished: true` publica a vaga.
- `isPublished: false` oculta a vaga.
- `publicationEndDate` define o último dia da publicação no formato `YYYY-MM-DD`.
- Após a data final, a vaga deixa de ser exibida automaticamente.
- `applyUrl` aceita um endereço web completo ou um link `mailto:`.

Para remover todas as vagas, mantenha o array vazio:

```ts
export const openRoles: OpenRole[] = [];
```

Como as páginas são geradas estaticamente no build de produção, publique um novo build para garantir que vagas expiradas sejam removidas na data correta.

## Gerir KPIs

Os valores dos indicadores da página inicial são configurados no array `stats` em `data/site.ts`:

```ts
export const stats = [
  { id: "experience", value: 12, suffix: "+" },
  { id: "projects", value: 85, suffix: "+" },
  { id: "technologies", value: 30, suffix: "+" },
  { id: "countries", value: 8, suffix: "+" }
];
```

- `value` define o número apresentado.
- `suffix` define um complemento como `+` ou `%`.
- `id` associa o indicador ao respetivo rótulo traduzido em `lib/i18n.ts`.

Os rótulos são apresentados automaticamente em inglês, português e francês.

## Imagens e identidade visual

- Logo SVG: `public/brand/site_logo.svg`
- Imagem principal: `public/images/sds-enterprise-data-hero.png`
- Componente do logo: `components/logo.tsx`

Ao substituir a imagem principal, preserve o nome do arquivo para não precisar alterar o código. A proporção atual é aproximadamente `16:9`.

## Estrutura principal

```text
app/                 páginas e rotas do Next.js
components/          componentes reutilizáveis
data/site.ts         serviços, soluções, vagas e outros dados
lib/i18n.ts          traduções e conteúdo localizado
public/              imagens, logo e arquivos públicos
```

## Arquitetura

O projeto utiliza uma arquitetura frontend baseada no **Next.js App Router**. As páginas são compostas por componentes React reutilizáveis e recebem o conteúdo de arquivos TypeScript locais.

### Camadas principais

1. **Rotas e páginas (`app/`)**
   - Define as páginas públicas e os metadados de SEO.
   - A rota dinâmica `app/[locale]/[[...slug]]` gera as versões em português e francês.
   - As páginas são renderizadas no servidor e pré-geradas como HTML estático sempre que possível.

2. **Componentes (`components/`)**
   - Contém elementos reutilizáveis como header, footer, logo, cartões, hero e listagem de vagas.
   - Os componentes interativos, como menu, idioma e dark mode, utilizam Client Components.
   - Os restantes componentes permanecem no servidor para reduzir o JavaScript enviado ao navegador.

3. **Conteúdo e configuração (`data/` e `lib/`)**
   - `data/site.ts` centraliza serviços, soluções, tecnologias, vagas e outros dados do negócio.
   - `lib/i18n.ts` contém o dicionário e as funções de localização.
   - As vagas visíveis são filtradas pelo estado de publicação e pela data final.

4. **Apresentação (`Tailwind CSS` e `public/`)**
   - O Tailwind CSS controla layout, responsividade, cores e dark mode.
   - Imagens, SVGs e outros recursos estáticos ficam em `public/`.
   - O componente `next/image` otimiza a entrega das imagens.

### Fluxo simplificado

```text
data/site.ts + lib/i18n.ts
            ↓
     componentes React
            ↓
       páginas Next.js
            ↓
 HTML estático/SSR entregue ao navegador
```

O projeto não utiliza atualmente banco de dados, CMS ou API própria. Alterações no conteúdo são feitas nos arquivos TypeScript e exigem um novo build/deploy em produção.

## Tecnologias e linguagens

| Tecnologia | Utilização |
| --- | --- |
| TypeScript | Linguagem principal, tipagem dos dados e componentes |
| React 18 | Construção da interface por componentes |
| Next.js 14 | Rotas, renderização, SEO, build e otimização |
| HTML/JSX | Estrutura semântica das páginas |
| Tailwind CSS 3 | Estilos, layout responsivo e dark mode |
| PostCSS | Processamento dos estilos CSS |
| Framer Motion | Animações e transições da interface |
| Lucide React | Ícones utilizados nos componentes |
| `next/image` | Otimização das imagens do site |
| `next/font` | Carregamento e otimização das fontes Inter e Manrope |

## Ferramentas de desenvolvimento

- **Node.js 18.17+**: ambiente de execução do projeto.
- **npm**: instalação de dependências e execução dos scripts.
- **TypeScript Compiler (`tsc`)**: validação estática dos tipos.
- **ESLint**: análise de qualidade e padrões do código.
- **Next.js CLI**: servidor local, build e execução em produção.
- **Git**: recomendado para controlo de versões.
- **Visual Studio Code**: editor recomendado, com suporte a TypeScript, ESLint e Tailwind CSS.

Extensões úteis para o Visual Studio Code:

- ESLint
- Tailwind CSS IntelliSense
- Prettier (opcional)
- GitLens (opcional)

## Decisões técnicas

- **Conteúdo tipado:** estruturas como `OpenRole` evitam campos ausentes ou formatos incorretos.
- **Geração estática:** melhora desempenho e SEO para páginas institucionais.
- **Componentes reutilizáveis:** reduz duplicação entre páginas e idiomas.
- **Internacionalização local:** evita dependência de serviços externos para as traduções.
- **Design responsivo:** os mesmos componentes adaptam-se a dispositivos móveis e desktop.
- **Dark mode:** o tema é aplicado por classes do Tailwind CSS.

## Corrigir cache do Next.js

Se aparecer um erro `MODULE_NOT_FOUND` dentro de `.next`, pare o servidor, remova o cache gerado e execute novamente:

```bash
mv .next /tmp/sds-site-next-cache-stale
npm run dev
```
