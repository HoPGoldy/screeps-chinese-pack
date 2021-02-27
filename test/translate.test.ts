import translate from '../src/translate'
import { updateSource } from '../src/storage'

describe('translate 模块', () => {
    // 清空翻译源
    beforeEach(() => updateSource('clear', []))

    test('可以递归翻译内容', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [
                { 'en-US': 'A', 'zh-CN': 'a' },
                { 'en-US': 'B', 'zh-CN': 'b' }
            ]
        }
        updateSource('page', [pageContent])

        // 设置一个嵌套的翻译文本
        document.body.innerHTML = `
            <div class="target">
                A
                <div>B</div>
            </div>
        `

        // 翻译内容
        const target = document.querySelector('.target') as HTMLElement
        translate([target])

        // 测试内容里的大小都被翻译成小写了
        expect(target.innerHTML).toContain('a<div>b</div>')
    })

    test('将跳过禁止翻译的元素', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [{ 'en-US': 'A', 'zh-CN': 'a' }]
        }
        updateSource('page', [pageContent])

        // 设置禁止翻译
        document.body.innerHTML = '<div class="target">A</div>'
        const target = document.querySelector('.target') as HTMLElement
        target.stopTranslateSearch = true

        // 执行翻译
        translate([target])

        // 测试内容将不会被翻译
        expect(target.innerHTML).toBe('A')
    })

    test('可以翻译 Text 元素', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [{ 'en-US': 'A', 'zh-CN': 'a' }]
        }
        updateSource('page', [pageContent])

        // 设置禁止翻译
        document.body.innerHTML = '<div class="target">A</div>'
        const target = document.querySelector('.target') as HTMLElement
        const textNode = target.childNodes[0]

        // 翻译 Text 元素
        translate([textNode])

        // Text 可以被正常翻译
        expect(target.innerHTML).toBe('a')
    })

    test('可以传入函数进行翻译', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [
                { 'en-US': 'A', 'zh-CN': text => `a${text}` },
                { 'en-US': 'B', 'zh-CN': text => `b${text}` }
            ]
        }
        updateSource('page', [pageContent])

        // 设置一个嵌套的翻译文本
        document.body.innerHTML = '<div class="divA">A<div class="divB">B</div></div>'

        // 翻译内容
        const divA = document.querySelector('.divA')
        const textA = divA.childNodes[0]
        const divB = document.querySelector('.divB')

        translate([textA, divB])

        // 测试内容里的大小都被翻译成小写了
        expect(divA.innerHTML).toContain('aA<div class="divB">bB</div>')
    })

    test('可以使用正则进行匹配', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [{
                'en-US': /\d+ rooms/,
                'zh-CN': (text: string) => text.replace('rooms', '个房间')
            }]
        }
        updateSource('page', [pageContent])

        // 设置翻译内容
        document.body.innerHTML = '<div class="divA">12 rooms</div>'

        // 翻译内容
        const divA = document.querySelector('.divA')

        translate([divA])

        // 测试内容里的大小都被翻译成小写了
        expect(divA.innerHTML).toContain('12 个房间')
    })

    test('可以使用 selector 进行匹配', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [{
                'selector': '.target',
                'zh-CN': (el: HTMLElement) => el.innerHTML = el.innerHTML.replace('rooms', '个房间')
            }]
        }
        updateSource('page', [pageContent])

        // 设置翻译内容
        document.body.innerHTML = `
            <div class="translate">
                <div class="target">12 rooms</div>
            </div>
        `

        // 翻译内容
        const translateElement = document.querySelector('.translate')
        translate([translateElement])

        // 测试内容里的大小都被翻译成小写了
        expect(document.querySelector('.target').innerHTML).toContain('12 个房间')
    })

    test.todo('指定复用的可以重复翻译')

    test.todo('选择器匹配范围不受目标元素的影响' /** 选择器匹配的元素不必是翻译元素的子代 */)

    test.todo('指定替身后不会修改源元素')
})
