type ClubProps = {
    name: string;
    description: string;
}

export default function ClubCard({name, description}: ClubProps) {
    return (
        <div id="card" className="text-center bg-gray-800 w-72 px-2 sm:px-4 py-2.5 m-2 rounded">
            <h1 className="text-white-theme text-3xl font-bold">{name}</h1>
            <p className="text-white-theme text-l pt-1">{description}</p>
            <div className="inline-flex">
                <button className="rounded bg-transparent font-semibold border-red-theme mt-3 mx-1 py-2 px-6 border text-red-theme hover:text-white hover:bg-red-theme">신청하기</button>
            </div>
        </div>
        
    )
}