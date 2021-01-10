import translate from 'translate'
import listener from 'eventListener'
import { onPageLoad } from 'utils'
import { updateSource } from 'storage'

// 设置初始翻译源
updateSource(document.location.hash)

// 页面内容出现后执行翻译
onPageLoad(() => {
    // 翻译初始内容
    translate([document.body])

    listener({
        // 页面变更时重新加载翻译源
        onHashChange: updateSource,
        // 内容变更时翻译后续内容
        onElementChange: translate
    })
})
