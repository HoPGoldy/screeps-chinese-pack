import { dontTranslate } from '@/utils'
import translate from '@/translate'
import { updateSource } from '@/storage'

describe('dontTranslate 可用', () => {
    test('可以禁止翻译指定元素', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [
                dontTranslate('.divA'),
                { 'en-US': 'A', 'zh-CN': 'a' },
                { 'en-US': 'B', 'zh-CN': 'b' }
            ]
        }
        updateSource('page', [pageContent])

        // 设置翻译文本
        document.body.innerHTML = `
            <div class="target">
                <div class="divA">A</div>
                <div class="divB">B</div>
            </div>
        `

        // 翻译内容
        const target = document.querySelector('.target') as HTMLElement
        translate([target])

        // divA 被禁止翻译了，所以内容不会变，而 divB 应正常翻译
        expect(document.querySelector('.divA').innerHTML).toBe('A')
        expect(document.querySelector('.divB').innerHTML).toBe('b')
    })
})
