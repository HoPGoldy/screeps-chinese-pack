import { translate } from 'utils'
import getMutationObserver from 'mutationObserver'
import { updateContentSource } from 'storage'


/**
 * 在文档加载完成后执行初始化翻译
 * 并开启变更监听动态翻译新增的文本
 */
document.addEventListener('readystatechange', e => {
    if (document.readyState !== 'complete') return

    // 更新源，因为页面刚加载好，所以这里肯定有值
    const source = updateContentSource()

    // 翻译初始内容
    translate(document.body, source.content)

    // 翻译后续内容
    getMutationObserver().observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true
    })
})
