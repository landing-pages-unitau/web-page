# web-page

## 🌿 Estrutura de Branches

Este projeto utiliza a seguinte organização de branches:

* **main** → Produção (responsável: João Pedro)
* **gestor** → Gestão e validação (responsável: Zuim)
* **dev-01** → Desenvolvimento (Enzo)
* **dev-02** → Desenvolvimento (João Pedro)

---

## 🚀 Como trabalhar com as branches

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Atualizar branches

```bash
git fetch
```

### 3. Acessar sua branch

```bash
git checkout nome-da-branch
```

Exemplo:

```bash
git checkout dev-01
```

---

### 4. Enviar alterações

```bash
git add .
git commit -m "sua mensagem"
git push origin nome-da-branch
```

---

### 5. Criar Pull Request

Após finalizar uma tarefa:

* Acesse o GitHub
* Crie um Pull Request da sua branch para `gestor` e `main`
