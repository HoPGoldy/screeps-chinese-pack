import translate from '@/translate'
import { updateSource } from '@/storage'

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

    test('指定复用的可以重复翻译', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [
                { 'en-US': 'A', 'zh-CN': 'a', 'reuse': true }
            ]
        }
        updateSource('page', [pageContent])

        // 设置多个相同翻译内容
        document.body.innerHTML = '<div class="divA">A<div>A</div><div>A</div>B</div>'

        // 翻译内容
        const divA = document.querySelector('.divA')

        translate([divA])

        // 测试内容里的所有 A 都会被翻译
        expect(divA.innerHTML).toContain('a<div>a</div><div>a</div>B')
    })

    test('选择器匹配范围不受目标元素的影响' /** 选择器匹配的元素不必是翻译元素的子代 */, () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [{
                'selector': '.target',
                'zh-CN': (el: HTMLElement) => el.innerHTML = el.innerHTML.replace('rooms', '个房间')
            }]
        }
        updateSource('page', [pageContent])

        // 设置一个并列的翻译内容
        document.body.innerHTML = `
            <div>
                <div class="target">12 rooms</div>
                <div class="translate"></div>
            </div>
        `

        // 翻译
        const translateElement = document.querySelector('.translate')
        translate([translateElement])

        // target div 不在 translate div 里，但是他依旧可以被翻译
        expect(document.querySelector('.target').innerHTML).toContain('12 个房间')
    })

    test('指定 protect 后翻译将不会修改源元素', () => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [{
                'selector': '.target',
                'zh-CN': el => el.innerHTML = `${el.innerHTML}-protect`,
                'protect': true
            }]
        }
        updateSource('page', [pageContent])

        // 设置翻译内容
        document.body.innerHTML = `
            <div>
                <div class="target">A</div>
            </div>
        `

        // 翻译内容
        const target = document.querySelector('.target') as HTMLElement
        translate([target])

        // 被保护的元素不会被翻译
        expect(target.innerHTML).toBe('A')
        // 对被保护元素唯一的修改就是会将 display 置为 none
        expect(target.style.display).toBe('none')
        // 同时创建一个新的替身元素代替源元素进行显示
        const targets = document.querySelectorAll('.target')
        expect(targets.length).toBe(2)
        expect(targets[1].innerHTML).toBe('A-protect')
    })

    test('指定 protect 后替身元素的 class 会和源元素保持一致', done => {
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [{
                'selector': '.target',
                'zh-CN': 'protect',
                'protect': true
            }]
        }
        updateSource('page', [pageContent])

        // 设置翻译内容
        document.body.innerHTML = `
            <div>
                <div class="target">A</div>
            </div>
        `

        // 翻译内容
        const target = document.querySelector('.target') as HTMLElement
        translate([target])

        // 源元素和替身元素，应获取到两个
        const targets = document.querySelectorAll('.target')
        expect(targets.length).toBe(2)
        expect(targets[1].innerHTML).toBe('protect')

        targets[0].setAttribute('class', 'target extend')
        setTimeout(() => {
            const targetsWithExtend = document.querySelectorAll('.extend')
            // 替身元素会同步源元素 class，所以这里也应该是两个
            expect(targetsWithExtend.length).toBe(2)
            done()
        })
    })

    test('ingnoreRepeatedCheck 可以跳过重复检查', () => {
        const mockFn = jest.fn()
        const pageContent: PageContent = {
            hashs: ['page'],
            content: [{
                'selector': '.target',
                'zh-CN': mockFn,
                'reuse': true
            }]
        }
        updateSource('page', [pageContent])

        // 设置翻译内容
        document.body.innerHTML = `
            <div class="target">content</div>
        `

        // 翻译
        translate([document.body])
        translate([document.body])

        // 由于没有指定 ingnoreRepeatedCheck，所以第二次 translate 时发现内容没有变化，将不会触发重新翻译
        expect(mockFn.mock.calls.length).toBe(1)

        // 开启跳过重复检查
        pageContent.content[0].ingnoreRepeatedCheck = true
        updateSource('page', [pageContent])
        mockFn.mockReset()

        // 再次翻译
        translate([document.body])
        translate([document.body])

        // 这次由于跳过了重复检查，所以会发现翻译函数被执行了两次
        expect(mockFn.mock.calls.length).toBe(2)
    })
})
