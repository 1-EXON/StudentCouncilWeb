type ClubProps = {
    name: string;
    description: string;
}

export default function ClubCard({name, description}: ClubProps) {
    return (
        <div id="card" className="text-center bg-gray-800 w-60 px-2 sm:px-4 py-2.5 m-2 rounded">
            <h1 className="text-white-theme w-30 text-2xl font-bold">{name}</h1>
            <p className="text-white-theme w-60 text-l pt-1">{description}</p>
        </div>
        
    )
}
