import { mount} from '@vue/test-utils'
import NikeShoes from '../../../components/NikeShoes.vue'
import NikeShoesApi from "../../../components/NikeShoesApi"

jest.mock('../../../components/NikeShoesApi')

const nikeShoeStates = [
    "Best time to buy!",
    "Moderate state, can buy now!",
    "Can wait for discount"
]
const titleName = "Shoes"

describe('Nike Shoes Test Cases', () => {
    var priceData = {"shoePrice":3}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    const wrapper = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[0])
    })

    priceData = {"shoePrice":5}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper2 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper2.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[0])
    })

    priceData = {"shoePrice":100}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper3 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper3.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[0])
    })

    priceData = {"shoePrice":120}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper4 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper4.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[1])
    })

    priceData = {"shoePrice":130}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper5 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper5.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[1])
    })

    priceData = {"shoePrice":150}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper6 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper6.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[1])
    })

    priceData = {"shoePrice":160}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper7 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper7.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[0])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[2])
    })

    priceData = {"shoePrice":180}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper8 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper8.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[2])
    })

    priceData = {"shoePrice":190}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper9 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper9.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[2])
    })

    priceData = {"shoePrice":200}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper10 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper10.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[1])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[2])
    })

    priceData = {"shoePrice":201}
    jest.spyOn(NikeShoesApi, 'fetchData').mockResolvedValue(priceData)
    let wrapper11 = mount(NikeShoes,{
        props: {
            title: titleName
        }
    })
    it('The price is ' + priceData.shoePrice, () => {
        const shoeStates = wrapper11.findAll('[data-test="shoeState"]')
        expect(shoeStates).toHaveLength(6)
        expect(shoeStates.at(0).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(1).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(2).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(3).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(4).text()).toBe(nikeShoeStates[2])
        expect(shoeStates.at(5).text()).toBe(nikeShoeStates[2])
    })
})