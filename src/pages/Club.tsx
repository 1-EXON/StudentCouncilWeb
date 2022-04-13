import Banner from '../components/Banner'
import ClubCard from '../components/ClubCard'

export default function Club() {
    const clubs: [string, string][] = [['LOOKS', '댄스동아리'],['LOOKS', '댄스동아리'],['LOOKS', '댄스동아리'],]
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
