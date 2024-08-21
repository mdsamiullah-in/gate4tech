
import Footer from "./Footer"
import Nav from "./Nav"

const TeacherData = [
    {
      image: './images/c.jpg',
      name: 'Mohammad Samiullah',
      qualification: 'MCA'
    },
    {
        image: './images/a.jpeg',
        name: 'Mohammad Ahtesham',
        qualification: 'MCA'
      },
      {
        image: './images/d.jpg',
        name: 'Mohammad Aayan',
        qualification: 'MCA'
      },
      {
        image: './images/b.jpeg',
        name: 'Sadia Parween',
        qualification: 'MCA'
      }
]

function Teachers(){
    return(
       <div>
        <Nav></Nav>
           <div>
            <header style={{
                height: '280px',
                width: '100%',
                backgroundImage: 'linear-gradient( 86.3deg,  rgba(0,119,182,1) 3.6%, rgba(8,24,68,1) 87.6% )',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <i className="fa-solid fa-bars"></i>
                <h1 style={{
                    color: 'white'
                }}>Teachers</h1>
            </header>

        <section style={{
            background: 'white',
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 20%)',
            justifyContent: 'center',
            gap: '22px'
        }}>



        
          {
            TeacherData.map(function(data, index){
                  return(
                    <div key={index} style={{
                        padding: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                        border: '1px solid #ddd',
                        borderRadius: '3px'
        }}>
            <img src={data.image} style={{
                width: '100%',

            }}/>
            <h3 style={{
                margin: '0px',
                padding: '0px',
                margin: '0px',
                padding: '0px',
                color: 'dodgerblue',
                fontWeight: '500',
                fontSize: '19px'
            }}>{data.name}</h3>
            <p style={{
                margin: '0px',
                padding: '0px',
                margin: '0px',
                padding: '0px',
                color: 'darkgoldenrod'
            }}>{data.qualification}</p>
        </div>
                  ) 
            })
          }


        </section>
          


           </div>
           <Footer></Footer>
       </div>
    )
}
export default Teachers