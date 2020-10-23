/**
 * 生成元素变更回调
 * 
 * MutationObserver 接受回调的入参不是单纯的 html 元素数组
 * 这里将其格式化后再执行业务回调
 * 
 * @param callback 要触发的实际回调
 */
const getMutationCallback = function (callback: ContentChangeCallback) {
    return function (mutationsList: MutationRecord[]) {
        // 获取发生变更的节点
        const changedNodes: Node[] = [].concat(...mutationsList.map(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) return [...mutation.addedNodes]
            else return [mutation.target]
        }))

        // 给所有需要处理的元素执行回调
        for (const node of changedNodes) {
            if (!(node instanceof HTMLElement)) continue

            callback(node)
        }
    }
}


/**
 * 回调 - 页面有新元素变更
 * 
 * @param callback 在变更时执行的回调，入参为发生变更的 HTMLElement（包括新增和修改，没有删除）
 */
export const onElementChange = function (callback: ContentChangeCallback = () => {}) {
    const observer = new MutationObserver(getMutationCallback(callback))

    // 启动监听
    observer.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true
    })
}