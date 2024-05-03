import { useCurrentEditor } from '@tiptap/react'
import HoveringToolbar from './HoveringToolbar'

const TextEditor = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <>
      <HoveringToolbar editor={editor} />
      <div className="character-count">
        {editor.storage.characterCount.characters()} characters
        <br />
        {editor.storage.characterCount.words()} words
      </div>
    </>
  )
}

export default TextEditor