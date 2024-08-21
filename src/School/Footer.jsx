function Footer(){
    return(
        <div style={{
            width: '100%',
            height: '300px',
             background: 'black',
             display: 'flex',
             justifyContent: 'space-evenly',
             alignItems: 'center',
             color: 'white'
        }}>
             
             <div>
                <b>Code School</b>
                <p>Online learning community school for <br/> coder kids powered by Gate4Tech</p>
             </div>

             <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
             }}>
                <b>Popular links</b>
                <label>Home</label>
                <label>Teachers</label>
                <label>Holidays</label>
                <label>Contact Us</label>
             </div>

             <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
             }}>
                <b>Social Profiles</b>
                <label>Youtube</label>
                <label>Facebook</label>
                <label>Linkedin</label>
                <label>Instagram</label>
             </div>

        </div>
    )
}


export default Footer