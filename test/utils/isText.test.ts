import { isText } from '@/utils'

describe('isText', () => {
    test('可以匹配符合的元素', () => {
        const text = new Text('这是一行文本')
        expect(isText(text)).toBe(true)
    })

    test('可以匹配不符合的元素', () => {
        const testElements = [
            document.createComment('这是一行注释'),
            document.createElement('div')
        ]

        testElements.forEach(element => expect(isText(element)).toBe(false))
    })
})
