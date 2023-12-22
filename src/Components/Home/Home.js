import classes from './Home.module.css';
import BasicTable from './BasicTable1';
import BasicTable2 from './BasicTable2';

const Home=()=>{
    return <div className={classes.home}>
<BasicTable/>
<BasicTable2/>
    </div>
}

export default Home;