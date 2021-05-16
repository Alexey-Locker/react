
export default function ContentItem({ element, updateKeep, deleteKeep }) {

    function outKeep({ target }) {
        const item = { ...element, description: target.innerText }
        updateKeep(item);
    }

    function keystroke(e) {
        const { key } = e;
        const { target } = e;
        if (key === "Enter") {
            e.preventDefault();
            const range = window.getSelection().getRangeAt(0);
            target.innerHTML = target.innerHTML + "<br><br>"
            range.setStart(target.lastChild, target.lastChild.length);
            range.setEnd(target.lastChild, target.lastChild.length);

        }
    }
    return (
        <div className="content__keep">
            <p>
                <input type="button" value="&#215;" onClick={ () => deleteKeep(element) }></input>
            </p>
            <div contentEditable
                suppressContentEditableWarning={ true } placeholder="Blue" onBlur={ outKeep } onKeyPress={ keystroke }
            >{ element.description }</div>
        </div>
    )
}
