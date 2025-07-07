export default async function Product({ params }: {
    params: Promise<{ id: string }>
}) {
    const resultParams = await params;
    console.log("idnya = ", resultParams.id);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Detail Product Page</h1>
            <p>Welcome to the detail product page!</p>
        </div>
    )
}