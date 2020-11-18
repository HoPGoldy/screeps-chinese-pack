import translate from 'translate'
import { onHashChange, onElementChange, onPageLoad } from 'utils'
import { updateSource } from 'storage'

// 设置初始翻译源
updateSource(document.location.hash)

// 页面内容出现后执行翻译
onPageLoad(() => {
    // 翻译初始内容
    translate([document.body])

    // 页面变更时重新加载翻译源并全量翻译
    onHashChange(hash => {
        updateSource(hash)
        translate([document.body])
    })

    // 内容变更时翻译后续内容
    onElementChange(translate)
})
