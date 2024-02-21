export default function NotePage({ notes, user }) {
    return(
        <>
            <h1>Notes</h1>
            {notes.length > 0 ? notes.map((m, idx) => (
                <p key={idx}>{m.text}{m.createdAt.toLocalString}</p>
            )) : <p>No Notes yet</p>}
        </>
    )
}