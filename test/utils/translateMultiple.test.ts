import { translateMultiple } from '@/utils'
import translate from '@/translate'
import { updateSource } from '@/storage'

describe('translateMultiple 可用', () => {
    test('可以翻译多行内容', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [
                {
                    'selector': '.target',
                    'zh-CN': translateMultiple({
                        'A': 'a',
                        'B': 'b',
                        'C': 'c'
                    }),
                    'reuse': true
                }
            ]
        }
        updateSource('page', [pageContent])

        // 设置多行翻译文本
        document.body.innerHTML = `
            <div>
                <div class="target a">A</div>
                <div class="target b">B</div>
                <div class="target c">C</div>
            </div>
        `

        // 翻译内容
        translate([document.body])

        // 匹配到的三个 div 内容都应被正确翻译
        expect(document.querySelector('.a').innerHTML).toBe('a')
        expect(document.querySelector('.b').innerHTML).toBe('b')
        expect(document.querySelector('.c').innerHTML).toBe('c')
    })
})
