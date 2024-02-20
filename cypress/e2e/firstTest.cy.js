describe('My First Test', () => {
    it('clicking "Begin Learning" navigates to a new url', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Begin Learning').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/quizPage')

      
    })
    it('clicking "Account" navigates to a new url', () => {
        cy.visit('http://localhost:3000/')
    
        cy.contains('Account').click()
    
        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/Account')
      })
    
      it('clicking "Home" navigates to a new url', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Home').click()
        cy.url().should('include', '/')
      })
      
      it('clicking "Quiz" navigates to a new url', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Quiz').click()
        cy.url().should('include', '/QuizPage')
      })
  })