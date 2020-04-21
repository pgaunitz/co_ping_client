describe("User can send request to become admin", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("can click button to send request", () => {
    cy.get("#contact-button").click();
  });
});
