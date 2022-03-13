//in clicking page
import Postad from './Postad';
function Navbar() {
    const [Sidebarview, setsidebarview]= React.useState(false)

    //inside the first div
    {Sidebarview? <Sidebar setsidebarclose={setsidebarview} />:null}

//in post ad button
    <img src={navicon3} onClick = {()=>setsidebarview(true)} role="button" style={{ height: '45px', width: '65px' }}></img>

    //in next page component post 
    function Postad({ setpostadclose }) {

        //thn in designed page in closing page
        <img src={clpic} onClick={() => setpostadclose(false)}></img>