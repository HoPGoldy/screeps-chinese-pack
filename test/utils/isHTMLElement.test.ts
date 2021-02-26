import { isHTMLElement } from '../../src/utils'

describe('isHTMLElement', () => {
    test('可以匹配符合的元素', () => {
        const div = document.createElement('div')
        expect(isHTMLElement(div)).toBe(true)
    })

    test('可以匹配不符合的元素', () => {
        const testElements = [
            document.createComment('这是一行注释'),
            new Text('这是一行文本')
        ]

        testElements.forEach(element => expect(isHTMLElement(element)).toBe(false))
    })
})
