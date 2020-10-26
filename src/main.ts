import translate from 'translate'
import { onHashChange, onElementChange } from 'utils'
import { updateSource } from 'storage'

/**
 * 在文档加载完成后执行初始化翻译
 * 并开启变更监听动态翻译新增的文本
 */
document.addEventListener('readystatechange', () => {
    // 设置初始翻译源
    updateSource(document.location.hash)

    // 翻译初始内容
    translate(document.body)

    // 页面变更时重新加载翻译源并全量翻译
    onHashChange(hash => {
        updateSource(hash)
        translate(document.body)
    })

    // 内容变更时翻译后续内容
    onElementChange(translate)
})
