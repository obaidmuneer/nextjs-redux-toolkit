import User from "@/app/components/User"

const UserId = ({ params }: { params: { userId: string } }) => {
    console.log(params, "this is params");
    return (
        <div>
            <h1>This is single user page</h1>
            <User userId={params.userId} />
        </div>

    )
}

export default UserId