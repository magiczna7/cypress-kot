import {getRandomUser} from "../../generators/userGenerator";

describe('Update products', () => {
    it('should update products', () => {
        // given
        const user = getRandomUser()

        // when
        cy.register(user)

        // then
        // asserted above
    })
})