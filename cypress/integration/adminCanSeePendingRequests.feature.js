describe("Admin can see pending requests", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/admin/communities",
      response: "fixture:pending_requests.json",
    });
    cy.route({
      method: "PUT",
      url: "**/admin/communities/**",
      response: "fixture:accepted_user_message.json",
    });
    cy.visit("/");
    cy.window().then((window) => {
      window.store.dispatch({
        type: "AUTHENTICATE",
        payload: { authenticated: true, communityId: 1, userRole: "admin" },
      });
    });
  });

  it("can see list of pending requests and accept user", () => {
    cy.get('#show-requests').click()
    cy.get("#request-header").should(
      "contain",
      "Pending Requests to Community"
    );
    cy.get('#request-list').within(() => {
      cy.get("#request-23").should("contain", "Berry IdontloveBaconsson");
      cy.get("#request-23").should("contain", "user5024@mail.com");
      cy.get("#request-23").should("contain", "Baconstreet 37, floor 2");
      cy.get('#accept-request-23').click()
    })
    cy.get("#confirmation-message").should(
      "exist"
    );
    
    cy.get("#request-list").within(() => {
      cy.get("#request-42").should("contain", "Grym Pungråttsson");
      cy.get("#request-42").should("contain", "user6642@mail.com");
      cy.get("#request-42").should("contain", "Baconstreet 37, floor 3");
      cy.get("#reject-request-42").click();
    });
    cy.get("#confirmation-message").should("exist");
  });
});

describe("Admin can see message about no requests", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/admin/communities",
      response: "fixture:no_pending_requests.json",
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
    cy.get("#show-requests").click();
    cy.get("#request-header").should(
      "contain",
      "Pending Requests to Community"
    );
    cy.get("#request-list").within(() => {
      cy.get("#requests-message").should(
        "contain",
        "You have no pending requests to your community"
      );
    })
  })
})
