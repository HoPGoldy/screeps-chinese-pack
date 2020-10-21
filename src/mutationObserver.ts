import { getContentElement } from 'utils'

const mutationCallback = function (mutationsList: MutationRecord[]) {
    // 获取发生变更的节点
    const changedNodes: Node[] = [].concat(...mutationsList.map(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) return [...mutation.addedNodes]
        else return [mutation.target]
    }))

    // 获取所有包含内容的新元素
    const newContentElement: HTMLElement[] = [].concat(...changedNodes.map(node => {
        if (!(node instanceof HTMLElement)) return []
        return getContentElement(node)
    }))

    console.log("新的包含内容的节点！", newContentElement)
}

export default function () {
    return new MutationObserver(mutationCallback)
}