import { translate, onHashChange } from 'utils'
import { onElementChange } from 'mutationObserver'
import { updateContentSource, getContent } from 'storage'

/**
 * 在文档加载完成后执行初始化翻译
 * 并开启变更监听动态翻译新增的文本
 */
document.addEventListener('readystatechange', () => {
    if (document.readyState !== 'complete') return

    // 设置初始翻译源
    const source = updateContentSource(document.location.hash)

    // 翻译初始内容
    translate(document.body, source.content)

    // 页面变更时重新加载翻译源
    onHashChange(updateContentSource)

    // 内容变更时翻译后续内容
    onElementChange(newElement => translate(newElement, getContent()))
})
