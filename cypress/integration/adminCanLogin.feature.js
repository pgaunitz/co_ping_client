describe("Admin can log in", () => {
  beforeEach(() => {
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
    cy.visit("/");
  });

  it("show a login button and form", () => {
    cy.get("button")
      .contains("Login")
      .click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("admin@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Submit")
        .click();
    });
    cy.get("#welcome-message").should("contain", "Welcome Admin Adminsson");
    cy.get("button")
      .contains("Logout")
      .click();
    cy.get("#logout-message").should("contain", "Hasta la vista!");
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
    cy.get("button")
      .contains("Login")
      .click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("wrongmail.com");
      cy.get("#password").type("wrong");
      cy.get("button")
        .contains("Submit")
        .click();
    });
    cy.get("#login-error-message").should(
      "contain",
      "Invalid login credentials. Please try again."
    );
    cy.get("button")
      .contains("Back")
      .click();
    cy.get("#login-form").should("not.exist");
  });
});

describe("User can log in and get message about being unauthorized", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/auth/sign_in",
      response: "fixture:user_login.json",
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:user_login.json",
    });
    cy.visit("/");
  });

  it("show a login button and form", () => {
    cy.get("button")
      .contains("Login")
      .click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button")
        .contains("Submit")
        .click();
    });
    cy.get("#welcome-message").should("contain", "Welcome User Usersson");
    cy.get("#not-authorized-message").should(
      "contain",
      "This website is only for your community admin."
    );
  });
});
