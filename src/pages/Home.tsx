import Banner from '../components/Banner'
import Members from '../components/Members'

export default function Home() {
    const members: [string, string][] = [['김준성', '학생회장'], ['김주하', '학생부회장'], ['김단비', '학습부장'], ['노희진', '미디어부장'], ['박시혁', '미디어부장'], ['서주원', '활동부장'], ['송지언', '신앙부장'], ['이예소', '예체능부장'], ['정은호', '활동부장'], ['정제이', '이벤트부장'], ['홍진우', '총무']]
    return (
        <div>
            <Banner />
            <div id="cards" className='text-center items-center justify-center'>
                {members.map(member => (
                    <Members name={member[0]} position={member[1]}/>
                ))}
            </div>
            
        </div>
    )
}
