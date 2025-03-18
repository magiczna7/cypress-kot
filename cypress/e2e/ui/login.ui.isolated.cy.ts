import {cartMocks} from "../../mocks/cartMocks";
import {meMocks} from "../../mocks/meMocks";
import {loginMocks} from "../../mocks/loginMocks";
import {getRandomUser} from "../../generators/userGenerator";
import {loginPage} from "../../pages/loginPage";
import {toast} from "../../pages/components/toast";


describe('Login page tests in isolation', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('should login successfully', () => {
        // given
        const user = getRandomUser()
        loginMocks.mockSuccess(user)
        cartMocks.mockCartWithNItems(user.username, 2)
        meMocks.mockSuccess(user)

        // when
        loginPage.attemptLogin(user.username, user.password)

        // then
        cy.get('.mt-1').should('have.text', user.email)
    })

    it('should fail to login', () => {
        // given
        loginMocks.mockFail()

        // when
        loginPage.attemptLogin('wrong', 'wrong')

        // then
        toast.verifyError('Invalid username/password')
    })
})