# Funcionalidade: Login no Sistema

## Cenário: Exibição da mensagem "Feito para ser fácil." na tela de login

**Dado** Que estou na página de login,  
**Quando** A página de login é carregada,  
**Então** Eu devo ver o texto "Feito para ser fácil." exibido na tela de login.
**E** Eu devo ver a logo da EasyDots exibida na tela de login.

## Cenário: Tentativa de login com campos vazios

**Dado** Que estou na página de login,
**Quando** Quando eu insiro "" no campo de usuário
**E** Quando eu insiro "" no campo de senha,
**E** Quando eu clico no botão "Entrar",
**E** E eu devo ver a mensagem "“Usuário” não pode ficar em branco." abaixo do input de usuário,
**E** E eu devo ver a mensagem "Senha” não pode ficar em branco." abaixo do input de senha.

---

## Cenário: Login com usuário inválido e senha incorreta

**Dado** que estou na página de login,
**Quando** Quando insiro um usuário inválido no campo de usuário,
**E** E eu insiro uma senha no campo de senha,
**E** E eu clico no botão "Entrar",
**Então** E eu devo ver a mensagem "Verifique o usuário/senha e tente novamente." abaixo do campo de senha.

---

## Cenário: Login com credenciais válidas

**Dado** Que estou na página de login,
**Quando** Quando eu insiro usuário válido no campo de usuário,
**E** Quando eu insiro uma senha válida no campo de senha,
**E** Quando eu clico no botão "Entrar",
**Então** eu devo ser redirecionado para a página inicial do usuário.

---

## Cenário: Tentativa de login com senha vazia

**Dado** que estou na página de login,
**Quando** eu insiro um usuário válido no campo de usuário,
**E** eu deixo o campo de senha vazio,
**E** eu clico no botão "Entrar",
**Então** eu devo ver a mensagem "Campo de senha obrigatório" acima do campo de senha.

---

## Cenário: Recuperação de senha

**Dado** que estou na página de login,
**Quando** eu clico no link "Esqueci minha senha",
**E** eu insiro um usuário válido no campo de recuperação,
**Então** eu devo ver a mensagem "Instruções de recuperação enviadas por usuário",
**E** um usuário de recuperação deve ser enviado para o endereço fornecido.

---

## Cenário: Validação do campo de usuário obrigatório

**Dado** que estou na página de login,
**Quando** eu deixo o campo de usuário vazio,
**E** eu insiro uma senha válida no campo de senha,
**E** eu clico no botão "Entrar",
**Então** eu devo ver a mensagem "Campo de usuário obrigatório" acima do campo de usuário.

---

## Cenário: Lembrar de mim

**Dado** que estou na página de login,
**Quando** eu insiro um usuário válido no campo de usuário,
**E** eu insiro uma senha válida no campo de senha,
**E** eu marco a opção "Lembrar de mim",
**E** eu clico no botão "Entrar",
**Então** eu devo continuar logado na próxima visita, mesmo após fechar o navegador.

---

## Cenário: Logout

**Dado** que estou logado no sistema,
**Quando** eu clico no botão "Sair",
**Então** eu devo ser redirecionado para a página de login,
**E** minha sessão deve ser encerrada.

---

## Cenário: Desativar botão "Entrar" com campos vazios

**Dado** que estou na página de login,
**Quando** eu deixo os campos de usuário e senha vazios,
**Então** o botão "Entrar" deve estar desativado.
