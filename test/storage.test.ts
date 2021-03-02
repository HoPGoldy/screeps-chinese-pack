import { getContent, updateContent, updateSource } from '@/storage'

describe('storage 模块', () => {
    // 通过匹配不存在的 hash 来清空翻译源
    beforeEach(() => updateSource('clear Source', []))

    test('可以根据 hash 匹配到对应的翻译源' /** 且 url 参数不影响翻译源选择 */, () => {
        const page1Content: PageContent = {
            hashs: ['page1'],
            content: [{ 'en-US': 'A', 'zh-CN': 'a' }]
        }

        const page2Content: PageContent = {
            hashs: ['page2'],
            content: [{ 'en-US': 'B', 'zh-CN': 'b' }]
        }

        updateSource('page1?arg=test', [page1Content, page2Content])
        // 选择第一个源
        expect(getContent()).toEqual({
            hash: page1Content.hashs[0],
            content: page1Content.content,
            queryContent: []
        })

        updateSource('page2')
        // 切换到了第二个源
        expect(getContent()).toEqual({
            hash: page2Content.hashs[0],
            content: page2Content.content,
            queryContent: []
        })
    })

    test('可以匹配多个 hash', () => {
        const mutliPageContent: PageContent = {
            hashs: ['page1', 'page2'],
            content: [{ 'en-US': 'A', 'zh-CN': 'a' }]
        }

        // 命中 hash，选择源
        updateSource('page1', [mutliPageContent])
        expect(getContent().content).toEqual(mutliPageContent.content)

        // 切换到了未包含的 hash，翻译源被清空
        updateSource('page3')
        expect(getContent().content).toEqual([])

        // 命中第二个 hash，重新选中该源
        updateSource('page2')
        expect(getContent().content).toEqual(mutliPageContent.content)
    })

    test('可以拆分普通翻译源和 selector 翻译源', () => {
        const pageContent: PageContent = {
            hashs: ['page1'],
            content: [
                { 'en-US': 'A', 'zh-CN': 'a' },
                { 'selector': '.class', 'zh-CN': () => {} },
                { 'en-US': /\d+ rooms/, 'zh-CN': 'a' }
            ]
        }

        updateSource('page1', [pageContent])
        const { content, queryContent } = getContent()
        // 会根据是否有 selector 将翻译源分成两组
        content.forEach(({ selector }) => expect(selector).toBeUndefined())
        queryContent.forEach(({ selector }) => expect(selector).not.toBeUndefined())
    })

    test('可以更新翻译源' /** 且可以局部更新 */, () => {
        const testContent = [{ 'en-US': 'A', 'zh-CN': 'a' }]
        const testQueryContent = [{ 'selector': '.class', 'zh-CN': () => {} }]

        updateContent({
            content: testContent,
            queryContent: testQueryContent
        })

        // 内容都更新了进来
        expect(getContent()).toMatchObject({
            content: testContent,
            queryContent: testQueryContent
        })

        updateContent({ queryContent: [] })

        // 局部更新的内容不影响其他内容
        expect(getContent()).toMatchObject({
            content: testContent,
            queryContent: []
        })
    })
})
