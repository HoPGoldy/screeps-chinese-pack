import { isExceptElement } from '../../src/utils'

describe('isExceptElement', () => {
    // 设置一个三层 div 的结构
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="father">
                <div class="current">
                    <div class="son"></div>
                </div>
            </div>
        `
    })

    test('可以匹配到父代', () => {
        const fatherDiv = document.querySelector('.father')
        fatherDiv.stopTranslateSearch = true

        expect(isExceptElement(document.querySelector('.current'))).toBe(true)
    })

    test('不会匹配到子代', () => {
        const fatherDiv = document.querySelector('.son')
        fatherDiv.stopTranslateSearch = true

        expect(isExceptElement(document.querySelector('.current'))).toBe(false)
    })

    test('没有匹配到则返回 false', () => {
        expect(isExceptElement(document.querySelector('.current'))).toBe(false)
    })
})
