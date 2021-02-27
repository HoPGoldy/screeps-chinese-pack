import listener from '../src/eventListener'
import { isText } from '../src/utils'

describe('eventListener 模块', () => {
    const onHashChange = jest.fn()
    const onElementChange = jest.fn()

    beforeEach(() => {
        onHashChange.mockReset()
        onElementChange.mockReset()
    })

    test('hash 变更时可以触发回调', done => {
        // onHashChange 会在 onElementChange 之前调用
        const observer = listener({
            onHashChange,
            onElementChange: data => {
                // onHashChange 会被触发且收到对应的 hash
                expect(onHashChange.mock.calls).toEqual([['#testHash']])
                // onElementChange 会收到变更的新 innerHTML
                expect(data.length).toBe(1)
                expect(isText(data[0])).toBe(true)
                expect((data[0] as Text).wholeText).toBe('newContent')

                observer.disconnect()
                done()
            }
        })

        document.location.hash = 'testHash'
        document.body.innerHTML = 'newContent'
    })

    test('被排除的元素变更时不会触发回调', done => {
        document.body.innerHTML = `
            <div>
                <div class="except"></div>
                <div class="include"></div>
            </div>
        `
        // 排除一个元素
        document.querySelector('.except').stopTranslateSearch = true

        const observer = listener({ onHashChange, onElementChange })

        document.querySelector('.except').innerHTML = 'test'
        document.querySelector('.include').innerHTML = 'test'

        // MutationObserver 的回调触发有延迟，所以需要加个 timeout
        setTimeout(() => {
            const { calls } = onElementChange.mock
            // 触发变更的元素里不会有 .except 的内容
            expect(calls.length).toBe(1)

            const [firstArg] = calls[0]
            expect(firstArg.length).toBe(1)
            expect(firstArg[0]).toBeInstanceOf(Text)
            observer.disconnect()
            done()
        }, 500)
    })

    test('移除元素不会触发回调', done => {
        document.body.innerHTML = `
            <div>
                <div class="wait-remove"></div>
            </div>
        `
        const observer = listener({ onHashChange, onElementChange })

        const removeElement = document.querySelector('.wait-remove')
        removeElement.parentElement.removeChild(removeElement)

        setTimeout(() => {
            const { calls } = onElementChange.mock
            // 移除的元素不会触发回调
            expect(calls.length).toBe(0)
            observer.disconnect()
            done()
        }, 500)
    })
})
