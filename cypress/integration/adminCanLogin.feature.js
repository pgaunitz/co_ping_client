describe("Admin can log in", () => {
  beforeEach(() => {
    // cy.exec("yarn start")
    cy.server();
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      response: "fixture:admin_login.json"
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:admin_login.json"
    });
  });

  it("show a login button and form", () => {
    cy.get("button")
      .contains("Login")
      .click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("admin@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Sign in")
        .click();
    });
    cy.get("#message").should("contain", "Welcome back Admin Adminsson");
  });
});

describe("Admin can not log in", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      status: "401",
      response: {
        errors: ["Invalid login credentials, please try again."],
        success: false
      }
    });
    cy.visit("/");
  });

  it("with invalid credentials", () => {
    cy.get("button")
      .contains("Login")
      .click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("wrongmail.com");
      cy.get("#password").type("wrong");
      cy.get("button")
        .contains("Sign in")
        .click();
    });
    cy.get("#message").should(
      "contain",
      "Invalid login credentials, please try again."
    );
  });
});
