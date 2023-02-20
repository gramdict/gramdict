import * as React from "react";

export const text2Markdown = (text: string) => {
    if (!text) {
        return ""
    }
    return (text as any)
        .replaceAll('_', '\_')
        .replaceAll('<i>', '_')
        .replaceAll('</i>', '_')
        .replaceAll('<b>', '__')
        .replaceAll('</b>', '__')
}

class CopyUtils {

    getOriginNode(node) {
        if (node.nodeName === '#text') {
            return node.parentNode
        }

        return node
    }

    isBold(node) {
        if (!node) {
            return false
        }

        if (node && node.nodeName === '#text') {
            return node.parentNode.nodeName === 'B' || this.isBold(node.parentElement)
        }

        let fontWeight = getComputedStyle(node).fontWeight
        return getComputedStyle(node).fontWeight === "bold" || parseInt(fontWeight) > 400
    }

    isItalic(node) {
        if (!node) {
            return false
        }

        if (node.nodeName == 'I') {
            return true
        }

        if (node.nodeName === '#text') {
            return node.parentNode.nodeName === 'I' || this.isItalic(node.parentElement)
        }

        return getComputedStyle(node).fontStyle === "italic"
    }

    getParentCopyField(node) {
        if (node.classList && node.classList.contains("copy-field")) {
            return node
        }

        return this.getParentCopyField(node.parentElement)
    }

    getFirstNodeText(selection, anchorNode, focusNode, isReverseCopy) {
        let text = ''
        if (isReverseCopy) {
            if (focusNode.classList.contains("lemma")) {
                let preText = selection.focusNode.textContent.substring(
                    selection.focusOffset)
                text = preText ? `__${preText}__` + " " : ""
            } else if (focusNode.classList.contains("symbol")) {
                let preText = selection.focusNode.textContent.substring(
                    selection.focusOffset,
                )
                text = preText ? preText + " " : ""
            } else if (focusNode.classList.contains("grammar")) {
                let grammarText = ""
                var focusIndex = [...focusNode.childNodes].findIndex(_node => _node === selection.focusNode || _node === selection.focusNode.parentNode)
                for (var [i, _node] of focusNode.childNodes.entries()) {
                    if (i < focusIndex) {
                        continue
                    }
                    if (_node === selection.focusNode || _node === selection.focusNode.parentNode) {
                        let t = selection.focusNode.textContent.substring(  selection.focusOffset)
                        t = this.isItalic(_node) ? `_${t}_` : t
                        t = this.isBold(_node) ? `__${t}__` : t
                        grammarText += t;
                    } else if (_node === selection.anchorNode || _node === selection.anchorNode.parentNode) {
                        let t = selection.anchorNode.textContent.substring(0,
                            selection.anchorOffset);
                        t = this.isItalic(_node) ? `_${t}_` : t;
                        t = this.isBold(_node) ? `__${t}__` : t;
                        grammarText += t;
                        break
                    }

                    else {
                        let t = _node.textContent;
                        t = this.isItalic(_node) ? `_${t}_` : t;
                        t = this.isBold(_node) ? `__${t}__` : t;
                        grammarText += t;
                    }

                }
                text += grammarText ? grammarText + "\n" : "\n"
            }

            return text
        }

        if (anchorNode.classList.contains("lemma")) {
            let preText = selection.anchorNode.textContent.substring(
                selection.anchorOffset)
            text = preText ? `__${preText}__` + " " : ""
        } else if (anchorNode.classList.contains("symbol")) {
            let preText = selection.anchorNode.textContent.substring( selection.extentOffset, selection.anchorOffset)
            text = preText ? preText + " " : ""
        } else if (anchorNode.classList.contains("grammar")) {
            let grammarText = ""
            var anchorIndex = [...anchorNode.childNodes].findIndex(_node => _node === selection.anchorNode || _node === selection.anchorNode.parentNode)
            for (var [i, _node] of anchorNode.childNodes.entries()) {
                if (i < anchorIndex) {
                    continue
                }
                if (_node === selection.anchorNode || _node === selection.anchorNode.parentNode) {
                    let t = selection.anchorNode.textContent.substring(
                        selection.anchorOffset)
                    t = this.isItalic(_node) ? `_${t}_` : t
                    t = this.isBold(_node) ? `__${t}__` : t
                    grammarText += t;
                } else if (_node === selection.focusNode || _node === selection.focusNode.parentNode) {
                    let t = selection.focusNode.textContent.substring(0, selection.focusOffset)
                    t = this.isItalic(_node) ? `_${t}_` : t
                    t = this.isBold(_node) ? `__${t}__` : t
                    grammarText += t;
                    break
                }
                else {
                    let t = _node.textContent;
                    t = this.isItalic(_node) ? `_${t}_` : t;
                    t = this.isBold(_node) ? `__${t}__` : t;
                    grammarText += t;
                }
            }
            text += grammarText ? grammarText + "\n" : "\n"
        }

        return text
    }

    getLastNodeText(selection, anchorNode, focusNode, isReverseCopy) {
        let text = "";

        if (isReverseCopy) {
            if (anchorNode.classList.contains("lemma")) {
                let preText = selection.anchorNode.textContent.substring(
                    0,
                    selection.anchorOffset)
                text += preText ? `__${preText}__` + " " : ""
            } else if (anchorNode.classList.contains("symbol")) {
                let preText = selection.anchorNode.textContent.substring(0,
                    selection.anchorOffset)
                text += preText ? preText + " " : ""
            } else if (anchorNode.classList.contains("grammar")) {
                let grammarText = ""
                let isChildren = [...anchorNode.childNodes].some(_node => _node === selection.anchorNode || _node === selection.anchorNode.parentNode);
                if (isChildren) {
                    for (var _node of anchorNode.childNodes) {
                        if (_node === selection.anchorNode || _node === selection.anchorNode.parentNode) {
                            let t = selection.anchorNode.textContent.substring(0, selection.anchorOffset)
                            t = this.isItalic(_node) ? `_${t}_` : t;
                            t = this.isBold(_node) ? `__${t}__` : t;
                            grammarText += t;
                            break
                        } else {
                            let t = _node.textContent
                            t = this.isItalic(_node) ? `_${t}_` : t;
                            t = this.isBold(_node) ? `__${t}__` : t;
                            grammarText += t;
                        }
                    }

                } else {
                    let t = selection.anchorNode.textContent.substring(0, selection.anchorOffset)
                    t = this.isItalic(_node) ? `_${t}_` : t;
                    t = this.isBold(_node) ? `__${t}__` : t;
                    grammarText += t;
                }
                text += grammarText ? grammarText + "\n" : "\n"
            }
            return text
        }

        if (focusNode.classList.contains("lemma")) {
            let preText = selection.focusNode.textContent.substring(0, selection.focusOffset)
            text += preText ? `__${preText}__` + " " : ""
        } else if (focusNode.classList.contains("symbol")) {
            let preText = selection.focusNode.textContent.substring(0, selection.focusOffset)
            text += preText ? preText + " " : ""
        } else if (focusNode.classList.contains("grammar")) {
            let grammarText = ""
            let isChildren = [...focusNode.childNodes].some(_node => _node === selection.focusNode || _node === selection.focusNode.parentNode);
            if (isChildren) {
                for (var _node of focusNode.childNodes) {
                    if (_node === selection.focusNode || _node === selection.focusNode.parentNode) {
                        let t = selection.focusNode.textContent.substring(0, selection.focusOffset)
                        t = this.isItalic(_node) ? `_${t}_` : t;
                        t = this.isBold(_node) ? `__${t}__` : t;
                        grammarText += t;
                        break
                    } else {
                        let t = _node.textContent
                        t = this.isItalic(_node) ? `_${t}_` : t;
                        t = this.isBold(_node) ? `__${t}__` : t;
                        grammarText += t;
                    }
                }

            } else {
                let t = selection.focusNode.textContent.substring(0, selection.focusOffset)
                t = this.isItalic(_node) ? `_${t}_` : t;
                t = this.isBold(_node) ? `__${t}__` : t;
                grammarText += t;
            }
            text += grammarText ? grammarText + "\n" : "\n"
        }
        return text
    }

    getCopyText(isReverseCopy) {
        const selection = document.getSelection();
        var text = ''
        if (selection.anchorNode === selection.focusNode) {
            text = selection.toString();
            if (!text) {
                return ""
            }
            if (this.isBold(selection.anchorNode)) {
                return `__${text}__`
            }
            if (this.isItalic(selection.anchorNode)) {
                return `_${text}_`
            }
            return selection.toString()
        } else {
            var allNodes = document.getElementById("search-results").getElementsByClassName("copy-field");
            var childNodes = [...allNodes]
            let anchorNode = this.getParentCopyField(selection.anchorNode)
            let focusNode = this.getParentCopyField(selection.focusNode)
            var startIndex = childNodes.indexOf(anchorNode)
            var endIndex = childNodes.indexOf(focusNode)
            text += this.getFirstNodeText(selection, anchorNode, focusNode, isReverseCopy)
            var minIndex = Math.min(startIndex, endIndex);
            var maxIndex = Math.max(startIndex, endIndex);
            for (var i = minIndex + 1; i < maxIndex; i++) {
                var node = childNodes[i];
                if (node.classList.contains('lemma')) {
                    text += node.textContent ? `__${node.textContent}__` + " " : ""
                }
                if (node.classList.contains('symbol')) {
                    text += node.textContent ? node.textContent + " " : ""
                }
                if (node.classList.contains('grammar')) {
                    text += node.innerHTML ? text2Markdown(node.innerHTML) + "\n" : "\n"
                }
            }
            if (startIndex !== endIndex) {
                text += this.getLastNodeText(selection, anchorNode, focusNode, isReverseCopy)
            }
            return text
        }
    }
}

export const copyUtils = new CopyUtils()