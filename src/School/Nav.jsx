import { Link } from "react-router-dom"

function Nav(){
    
    return(
        <nav style={{
            display: 'flex',
            width: '100%',
            boxShadow: '0 0 8px rgba(0,0,0, 0.2)',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>

                    <div style={{
                        marginLeft: '60px'
                    }}>
                      <h1>Logo</h1>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '60px',
                        listStyle: 'none',
                        marginRight: '60px',
                        cursor: 'pointer'
                    }}>
                      <Link to="/home">Home</Link>
                      <Link to="/teachers">Teachers</Link>
                      <Link to="/holiday">Holiday</Link>
                      <Link to="/contact-us">Contact</Link>
                    </div>
                  
        </nav>
    )

}

export default Nav