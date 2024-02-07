import '../App.css'
import Left from './left';
import MainCo from './mainco';
import Right from './right';

function Ext(){
    return(
        <div className='ext'>
            <Left/>
            <MainCo/>
        <Right/>
        </div>
    )
}
export default Ext;