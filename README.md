# Vidraçaria Lucas

Site institucional da Vidraçaria Lucas — 13 Anos de Qualidade em Pindamonhangaba, SP.

## 🌐 Como hospedar no GitHub Pages

### Passo a passo

1. Acesse o repositório no GitHub.
2. Vá em **Settings** (Configurações) → **Pages**.
3. Em **Source**, selecione **GitHub Actions**.
4. Salve as configurações.
5. Faça um push na branch `main` (ou clique em **Run workflow** na aba **Actions**).
6. Após o deploy, o site estará disponível em:

```
https://<seu-usuario>.github.io/<nome-do-repositório>/
```

> O workflow `.github/workflows/pages.yml` já está configurado para publicar o site automaticamente a cada push na branch `main`.

## 📁 Estrutura do projeto

```
├── index.html              # Página de entrada (redireciona para o site)
├── vidracaria-lucas.html   # Página principal do site
├── vidracaria-lucas.css    # Estilos
└── vidracaria-lucas.js     # Scripts
```