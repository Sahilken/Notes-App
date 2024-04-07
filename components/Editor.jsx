import React from "react"
import ReactMde from "react-mde" //
import Showdown from "showdown" //lib that converts markdown syntax into html
// markdown syntax is like # means <h1/> ## means <h2></h2> ,  **Bold text ** , *Italic text*

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
