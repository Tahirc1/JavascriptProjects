
import Button from './Button.jsx'

const Header = ({greet,setShow,show}) => { 
     const c = () =>{
         console.log("buttonlog")
     }

    const formtog = () =>{
        console.log('form toggle')
        setShow(!show)
      }
    return (
    <header className='header'>
    <h3>{greet} Task Tracker</h3>
    <Button color={show?'red':'green'} text={show?'Close':'ADD'} onClic={formtog} />
    </header>
    )
}

Header.defaultProps = {
    greet : 'Hi',

}


export default Header