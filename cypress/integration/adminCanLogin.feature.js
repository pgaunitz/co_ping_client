describe("Admin can log in", () => {
  beforeEach(() => {
    cy.exec("yarn start")
    cy.server();
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      response: "fixture:admin_login.json",
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:admin_login.json",
    });
    cy.visit("/")
  });

  it("show a login button and form", () => {
    cy.get("button").contains("Login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("admin@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#welcome-message").should("contain", "Welcome back Admin Adminsson");
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
        errors: ["Invalid login credentials. Please try again."],
        success: false,
      },
    });
    cy.visit("/");
  });

  it("with invalid credentials", () => {
    cy.get("button").contains("Login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("wrongmail.com");
      cy.get("#password").type("wrong");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#login-error-message").should(
      "contain",
      "Invalid login credentials. Please try again."
    );
    cy.get("button").contains("Back").click()
    cy.get("#login-form").should("not.exist")
  });
});
