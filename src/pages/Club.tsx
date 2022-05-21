import Banner from '../components/Banner'
import ClubCard from '../components/ClubCard'

export default function Club() {
    const c = require('../resources/clubs.json')
    const clubs: [string, string][] = []
    c.forEach((element: { name: string, sort: string }) => {
        clubs.push([element.name, element.sort])
    })
    console.log(c)
    
    return (
        <div>
            <Banner />
            <div id="cards" className='text-center items-center justify-center float-left'>
                {clubs.map(member => (
                    <ClubCard name={member[0]} description={member[1]}/>
                ))}
            </div>
        </div>
    )
}
