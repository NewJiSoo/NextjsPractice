export default function MovieDatile(
    { params: { id }, }: { params: { id: string } }
) {
    return (
        <h1>
            영화:{id}
        </h1>
    )
}