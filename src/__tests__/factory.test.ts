import {ButterscotchCart,ChocoCart,StrawberryCart} from "../patterns/factory/factory-icecream";
import {getIcecream} from "../pages/hello-factory/prouct-provider"

describe("Icecream Factory", () => {

    test('Butterscotch Icecream',()=>{
        let expected=getIcecream('Buttery Butterscotch')
        let actual=new ButterscotchCart()
        expect(expected).toEqual(actual.getIcecream())
    })

    test('Choclate Icecream',()=>{
        let expected=getIcecream('Choco Blast')
        let actual=new ChocoCart()
        expect(expected).toEqual(actual.getIcecream())
    })
    test('Strawberry Ice cream',()=>{
        let expected=getIcecream('Sweety Strawberry')
        let actual=new StrawberryCart()
        expect(expected).toEqual(actual.getIcecream())
    })
})