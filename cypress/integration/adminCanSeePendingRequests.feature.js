describe("Admin can see pending requests", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/admin/communities/**",
      response: "fixture:pending_requests.json",
    });
    cy.visit("/");
    cy.window().then((window) => {
      window.store.dispatch({
        type: "AUTHENTICATE",
        payload: { authenticated: true, communityId: 1, userRole: "admin" },
      });
    });
  });

  it("can see list of pending requests", () => {
    cy.get('#show-requests').click()
    cy.get("#request-header").should(
      "contain",
      "Pending Requests to Community"
    );
  });
});
