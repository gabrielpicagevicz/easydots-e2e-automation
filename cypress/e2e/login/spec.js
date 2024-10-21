class LoginForm {
  elements = {
    msgFeitoPserFacil: () => cy.get("span.fadeInLeft"),
    logo: () => cy.get("a.logo img"),
    loginInput: () => cy.get("#loginform-username"),
    loginFeedback: () => cy.get(".help-block.help-block-error"),
    senhaInput: () => cy.get("#loginform-password"),
    senhaFeedback: () => cy.get(".help-block.help-block-error"),
    btnEntrar: () => cy.get('button[name="login-button"]'),
    userInvalidFeedback: () => cy.get(".help-block.help-block-error"),
  };

  typeLogin(text) {
    if (!text) return;
    this.elements.loginInput().type(text);
  }

  typeSenha(text) {
    if (!text) return;
    this.elements.senhaInput().type(text);
  }

  clickEntrar() {
    this.elements.btnEntrar().click();
  }

  verifyLoginFeedback() {
    this.elements
      .loginFeedback()
      .should("contain", "“Usuário” não pode ficar em branco.");
  }

  verifySenhaFeedback() {
    this.elements
      .senhaFeedback()
      .should("contain", "“Senha” não pode ficar em branco.");
  }

  verifyMsgFeitoPserFacil() {
    this.elements
      .msgFeitoPserFacil()
      .should("contain", "Feito para ser dificil.");
  }

  virifyLogo() {
    this.elements
      .logo()
      .should("be.visible")
      .and("have.attr", "src", "/images/logo_titulo_cinza.png");
  }

  verifyUserInvalidFeedback() {
    this.elements
      .userInvalidFeedback()
      .should("contain", "Verifique o usuário/senha e tente novamente.");
  }
}

const loginFormInstance = new LoginForm();

describe("Verificação da mensagem de boas-vindas na tela de login", () => {
  describe("Cenário: Exibição da mensagem Feito para ser fácil. na tela de login", () => {
    it("Dado que estou na página de login,", () => {
      cy.visit("/");
    });

    it(`Eu devo ver o texto "Feito para ser fácil." exibido na tela de login,`, () => {
      loginFormInstance.verifyMsgFeitoPserFacil();
    });

    it(`Eu devo ver a logo da EasyDots exibida na tela de login,`, () => {
      loginFormInstance.virifyLogo();
    });
  });
});

describe("Validação de login com campos obrigatórios", () => {
  describe("Cenário: Tentativa de login com campos vazios", () => {
    const input = {
      usuario: "",
      senha: "",
    };

    it("Dado que estou na página de login,", () => {
      cy.visit("/");
    });

    it(`Quando eu insiro "${input.usuario}" válido no campo de usuário`, () => {
      loginFormInstance.typeLogin(input.usuario);
    });

    it(`Quando eu insiro "${input.senha}" válido no campo de senha`, () => {
      loginFormInstance.typeSenha(input.senha);
    });

    it('Quando eu clico no botão "Entrar",', () => {
      loginFormInstance.clickEntrar();
    });

    it('E eu devo ver a mensagem "“Usuário” não pode ficar em branco." abaixo do input de usuário,', () => {
      loginFormInstance.verifyLoginFeedback();
    });

    it('E eu devo ver a mensagem "“Senha” não pode ficar em branco." abaixo do input de senha,', () => {
      loginFormInstance.verifySenhaFeedback();
    });
  });
});

describe("Validação de login com credenciais inválidas", () => {
  describe("Cenário: Login com usuário inválido e senha incorreta", () => {
    const input = {
      usuario: "uususiri!@#@",
      senha: "uususiri!@#@",
    };

    it("Dado que estou na página de login,", () => {
      cy.visit("/");
    });

    it(`Quando insiro um usuário inválido no campo de usuário`, () => {
      loginFormInstance.typeLogin(input.usuario);
    });

    it(`E eu insiro uma senha no campo de senha`, () => {
      loginFormInstance.typeSenha(input.senha);
    });

    it('Quando eu clico no botão "Entrar",', () => {
      loginFormInstance.clickEntrar();
    });

    it('E eu devo ver a mensagem "Verifique o usuário/senha e tente novamente." abaixo do input de senha,', () => {
      loginFormInstance.verifyUserInvalidFeedback();
    });
  });
});

describe("Validação de login com credenciais inválidas", () => {
  describe("Cenário: Login com usuário inválido e senha incorreta", () => {
    const input = {
      usuario: "testes.de.carga1",
      senha: "123456",
    };

    it("Dado que estou na página de login,", () => {
      cy.visit("/");
    });

    it(`Quando eu insiro usuário válido no campo de usuário`, () => {
      loginFormInstance.typeLogin(input.usuario);
    });

    it(`Quando eu insiro uma senha válida no campo de senha`, () => {
      loginFormInstance.typeSenha(input.senha);
    });

    it('Quando eu clico no botão "Entrar",', () => {
      loginFormInstance.clickEntrar();
    });
  });
});
